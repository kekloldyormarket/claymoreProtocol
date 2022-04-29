import { NFT_STORAGE_API_KEY } from "../../constants";
import {
  FanoutClient,
  MembershipModel,
} from "@glasseaters/hydra-sdk"
import { NodeWallet } from "@project-serum/common"; //TODO remove this

import {  
  Alert,
  Button,
  FormControl,
  FormHelperText,
  FormLabel,
  Heading,
  HStack,
  Input,
  Stack,
  Image,
  Text,
  Switch,
  useRadioGroup,
  VStack,
  Flex,
} from "@chakra-ui/react";
import { yupResolver } from "@hookform/resolvers/yup";
import { DataV2 } from "@metaplex-foundation/mpl-token-metadata";
import { NATIVE_MINT } from "@solana/spl-token";
import { useWallet, WalletContextState } from "@solana/wallet-adapter-react";
import { Keypair, PublicKey, Connection } from "@solana/web3.js";
import { Wallet } from "@project-serum/anchor";
import { MarketplaceSdk } from "@strata-foundation/marketplace-sdk";
import {
  humanReadablePercentage,
  useCollective,
  useProvider,
  usePublicKey,
  useStrataSdks,
  useTokenBondingFromMint,
  useTokenMetadata,
} from "@strata-foundation/react";
import {
  ICurveConfig,
  TimeCurveConfig,
  TimeDecayExponentialCurveConfig,
} from "@strata-foundation/spl-token-bonding";
import {
  ITokenBondingSettings,
  SplTokenCollective,
} from "@strata-foundation/spl-token-collective";
import { useRouter } from "next/router";
import React from "react";
import { useAsync, useAsyncCallback } from "react-async-hook";
import { FormProvider, useForm } from "react-hook-form";
import * as yup from "yup";
import { useMarketplaceSdk } from "../..//contexts/marketplaceSdkContext";
import { route, routes } from "../../utils/routes";
import { FormControlWithError } from "./FormControlWithError";
import { MintSelect } from "./MintSelect";
import { IMetadataFormProps, TokenMetadataInputs } from "./TokenMetadataInputs";
import { Disclosures, disclosuresSchema, IDisclosures } from "./Disclosures";
import { RadioCardWithAffordance } from "./RadioCard";
import { useWalletModal } from "@solana/wallet-adapter-react-ui";
var first = true
const clayMint = new PublicKey("12yd5cGsGeBEDJzzRxKfSttGB4bbA7oY4frEBBsiUwiq")//"91CeYr7diK3GmyiYLG4WtX1H9qRjdeMEnmw8uSSF9ZAz")

type CurveType = "superlovely" | "lovely" | "aggressive" | "stable" | "utility";
interface IFullyManagedForm extends IMetadataFormProps {
  mint: string;
  symbol: string;
  curveType: CurveType;
  isSocial: boolean;
  startingPrice: number;
  isAntiBot: boolean;
  sellBaseRoyaltyPercentage: number;
  buyBaseRoyaltyPercentage: number;
  sellTargetRoyaltyPercentage: number;
  buyTargetRoyaltyPercentage: number;
  disclosures: IDisclosures;
}

var tokenCollectiveSdk2: any
var tokenBondingSdk2: any
export const FullyManagedForm: React.FC = () => {
  const formProps = useForm<IFullyManagedForm>({
    defaultValues: {
      disclosures: {
        acceptedFees: true,
      },
    },
  });
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
    watch,
  } = formProps;
  var wallet = useWallet()
  var connected = wallet.connected 
  var publicKey = wallet.publicKey 
  const { visible, setVisible } = useWalletModal();
  const { awaitingApproval } = useProvider();
  var { tokenCollectiveSdk, tokenBondingSdk, loading: eh } = useStrataSdks()
if (!eh){
  tokenCollectiveSdk2 = tokenCollectiveSdk
  tokenBondingSdk2 = tokenBondingSdk
}
  const { marketplaceSdk, loading } = useMarketplaceSdk();
  const router = useRouter();

  function percentOr(percentu32: number | undefined, def: number) {
    return percentu32 ? Number(humanReadablePercentage(percentu32)) : def;
  }
  var values: any
var wallet: WalletContextState
var connection: Connection
const onSubmit = async (values: IFullyManagedForm) => {
  console.log(values)
  if (marketplaceSdk){
  const mint = clayMint
  const tokenCollectiveSdk = marketplaceSdk.tokenCollectiveSdk;
  const tokenBondingSdk = tokenCollectiveSdk.splTokenBondingProgram;
  const targetMintKeypair = Keypair.generate();
  let k = 0;
  switch (values.curveType) {
    case "utility":
      k = 0.5;
      break;
    case "stable":
      k = 1;
      break;
    case "aggressive":
      k = 2;
      break;
    case "lovely":
      k = 4;
      break;
    case "superlovely":
      k = 6;
      break;
  }

  let config: ICurveConfig = new TimeDecayExponentialCurveConfig({
    c: Math.ceil(values.startingPrice * 10 ** 2),
    k0: k,
    k1: k,
    d: 1,
    interval: 2 * 60 * 60, // 2 hours
  });
  if (values.isAntiBot) {
    config = new TimeCurveConfig()
      .addCurve(
        0,
        new TimeDecayExponentialCurveConfig({
          c: Math.ceil(values.startingPrice * 10 ** 2),
          k0: 0,  
          k1: 0,
          d: 1,
          interval: 0,
        })
      )
      .addCurve(
        30 * 60, // 30 minutes
        new TimeDecayExponentialCurveConfig({
          c: Math.ceil(values.startingPrice * 10 ** 2),
          k0: 0,
          k1: k,
          d: 0.5,
          interval: 1.5 * 60 * 60, // 1.5 hours
        })
      );
  }
 var curve = await tokenBondingSdk.initializeCurve({
    config,
  });
  const bondingOpts = {
    baseMint: mint,
    buyBaseRoyaltyPercentage: values.buyBaseRoyaltyPercentage,
    buyTargetRoyaltyPercentage: values.buyTargetRoyaltyPercentage,
    sellBaseRoyaltyPercentage: values.sellBaseRoyaltyPercentage,
    sellTargetRoyaltyPercentage: values.sellTargetRoyaltyPercentage,
    curve: curve,
    targetMint: targetMintKeypair.publicKey,
    targetMintDecimals: 2,
  };
  const uri = await tokenCollectiveSdk.splTokenMetadata.uploadMetadata({
    provider: values.provider,
    name: values.name,
    symbol: values.symbol,
    description: values.description,
    image: values.image,
    mint: targetMintKeypair.publicKey,
  });
  const metadata = new DataV2({
    // Max name len 32
    name: values.name.substring(0, 32),
    symbol: values.symbol.substring(0, 10),
    uri,
    sellerFeeBasisPoints: 0,
    creators: null,
    collection: null,
    uses: null,
  });

    const { ownerTokenRef } = await tokenCollectiveSdk.createSocialToken({
      mint,
      tokenBondingParams: bondingOpts,
      owner: tokenCollectiveSdk.wallet.publicKey,
      targetMintKeypair,
      metadata,
    });
    
  var fanoutSdk = new FanoutClient(
    new Connection("https://ssc-dao.genesysgo.net/"),
   // @ts-ignore
    wallet
    );
  
    
//const supply = 1000000 * 10 ** 6;
//const tokenAcct = await membershipMint.createAccount(
//  authorityWallet.publicKey
//);

const  { fanout }  = await fanoutSdk.initializeFanout({
totalShares: 0,
name: `Boom` + (Math.floor(Math.random()* 999999)).toString(),
membershipModel: MembershipModel.Token,
mint: targetMintKeypair.publicKey
});
console.log(fanout.toBase58())


const {tokenAccount: target }  = await fanoutSdk.initializeFanoutForMint({
  fanout,
  mint: targetMintKeypair.publicKey,
});
const {tokenAccount: base }  = await fanoutSdk.initializeFanoutForMint({
  fanout,
  mint: clayMint,
});

var bt = new PublicKey("2vnUcuspVcejUTc5x45MM2EUbfivBDhcAJF3oWgZ9wsE")
// @ts-ignore
if (tokenBondingSdk2 && tokenCollectiveSdk2){
// @ts-ignore

var lala =    await tokenCollectiveSdk2.updateTokenBondingInstructions({
  // so this is going to need to be tokenRefKey, and not this
                ownerTokenRef: ownerTokenRef,
                buyTargetRoyalties: target,
                sellTargetRoyalties: base,
                buyBaseRoyalties: bt,
                sellBaseRoyalties: base,
                        })
      
// @ts-ignore
            await tokenCollectiveSdk2.sendInstructions(lala.instructions, lala.signers)
                      }
  console.log( [targetMintKeypair.publicKey, fanout ] )
    router.push(
      route(routes.swap, {
        mintKey: targetMintKeypair.publicKey.toBase58(), fanoutKey: fanout.toBase58()
      }),
      undefined,
      { shallow: true }
    );
  };
}

  const { name = "", symbol = "", isSocial, mint, curveType } = watch();
  const mintKey = usePublicKey(mint);
  const collectiveKey = usePublicKey("E5kLYTP6NfmravmLpYtA65HUgXK51X5c1gwu7Fhwd7nd") /*Async(
    async (mint: string | undefined) =>
      mint ? SplTokenCollective.collectiveKey(new PublicKey(mint)) : undefined,
    [mint]
  );*/
  const { info: collective } = useCollective(collectiveKey)// && collectiveKey[0]);
  console.log(collective  )
  const tokenBondingSettings = collective?.config
    .claimedTokenBondingSettings as ITokenBondingSettings | undefined;
  const {
    metadata: baseMetadata,
    error: baseMetadataError,
    loading: baseMetadataLoading,
  } = useTokenMetadata(mintKey);

  const { getRootProps, getRadioProps } = useRadioGroup({
    name: "curveType",
    onChange: (option) => setValue("curveType", option as CurveType),
  });

  const group = getRootProps();

  const curveOptions = [

    {
      value: "superlovely",
      heading: "superlovely",
      illustration: "/superlovely.jpg",
      helpText:
        "@GrapeDeanslist @_Dean_Machine u the man/men/ppl/pepes.",
    },

    {
      value: "lovely",
      heading: "lovely",
      illustration: "/lovely.png",
      helpText:
        "Sorry, @redacted_noah",
    },
    {
      value: "aggressive",
      heading: "Aggressive",
      illustration: "/aggressive.svg",
      helpText:
        "A curve with high price sensitivity. The price raises quickly when people buy, and lowers quickly when they sell. This is best suited for speculative use cases.",
    },
    {
      value: "stable",
      heading: "Stable",
      illustration: "/stable.svg",
      helpText:
        "A curve with medium price sensitivity. This curve changes price at a constant rate, achieving a balance between aggressive and utility curves.",
    },
    {
      value: "utility",
      heading: "Utility",
      illustration: "/utility.svg",
      helpText:
        "A curve with a price sensitivity that starts high and lowers with purchases. This curve is best suited for utility use cases, as it rewards early adopters and scales the supply so that the token can be exchanged for goods/services.",
    },
  ];
  if (first ){
    first = false 

  setValue("mint", mint)
  }
  return (
    <Flex position="relative">
      {!connected && (
        <Flex
          position="absolute"
          w="full"
          h="full"
          zIndex="1"
          flexDirection="column"
        >
          <Flex justifyContent="center">
            <Button
              colorScheme="orange"
              variant="outline"
              onClick={() => setVisible(!visible)}
            >
              Connect Wallet
            </Button>
          </Flex>
          <Flex w="full" h="full" bg="white" opacity="0.6" />
        </Flex>
      )}
      <FormProvider {...formProps}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <VStack spacing={8} mt={!connected ? 12 : 0}>
            <TokenMetadataInputs entityName="token" />
            <FormControlWithError
              id="symbol"
              help="The symbol for this token, ex: SOL"
              label="Symbol"
              errors={errors}
            >
              <Input {...register("symbol")} />
            </FormControlWithError>
            <FormControlWithError
              id="curveType"
              label="Price Sensitivity"
              errors={errors}
            >
              <Stack
                {...group}
                direction={{ base: "column", md: "row" }}
                justifyContent="center"
                alignItems={{ base: "center", md: "normal" }}
              >
                {curveOptions.map(
                  ({ value, heading, illustration, helpText }) => {
                    const radio = getRadioProps({ value });

                    return (
                      <RadioCardWithAffordance key={value} {...radio}>
                        <Flex
                          h="full"
                          direction={{ base: "row", md: "column" }}
                          textAlign={{ base: "left", md: "center" }}
                        >
                          <Flex
                            justifyContent="center"
                            alignItems="center"
                            flexShrink={0}
                          >
                            <Image
                              src={illustration}
                              alt={`${value}-illustration`}
                              height="70px"
                              width="100%"
                            />
                          </Flex>
                          <Flex
                            flexGrow={1}
                            h="full"
                            direction="column"
                            alignItems={{ base: "start", md: "center" }}
                            justifyContent={{ base: "center", md: "initial" }}
                          >
                            <Text
                              fontWeight="bold"
                              fontSize="md"
                              pt={{ base: 0, md: 4 }}
                            >
                              {heading}
                            </Text>
                            <Flex
                              w="full"
                              flexGrow={{ base: 0, md: 1 }}
                              alignItems={{ base: "start", md: "center" }}
                            >
                              <Text fontSize="xs" color="gray.500">
                                {helpText}
                              </Text>
                            </Flex>
                          </Flex>
                        </Flex>
                      </RadioCardWithAffordance>
                    );
                  }
                )}
              </Stack>
            </FormControlWithError>

           

            <FormControlWithError
              id="startingPrice"
              help="The starting price of the token. The price will increase as more tokens are purchased"
              label="Starting Price"
              errors={errors}
            >
              <Input
                type="number"
                min={0}
                step={0.0000000001}
                {...register("startingPrice")}
              />
            </FormControlWithError>
            <FormControlWithError
              id="isAntiBot"
              help={`Enable anti botting measures. This will keep bots from profiting by frontrunning your token while the price is low. Your tokens true pricing will take 2 hours to come into effect`}
              label="Enable Anti Bot Measures?"
              errors={errors}
            >
              <Switch {...register("isAntiBot")} />
            </FormControlWithError>

            <VStack align="left" w="full">
              <Heading fontSize="xl" mb={4}>
                Royalties
              </Heading>
              <HStack>
                <FormControl
                  id="buyTargetRoyaltyPercentage"
                  borderColor="gray.200"
                >
                  <FormLabel>{symbol || "Managed Token"} (Buy)</FormLabel>
                  <Input
                    isRequired
                    type="number"
                    min={percentOr(
                      tokenBondingSettings?.minBuyTargetRoyaltyPercentage,
                      0
                    )}
                    max={percentOr(
                      tokenBondingSettings?.maxBuyTargetRoyaltyPercentage,
                      100
                    )}
                    placeholder="2"
                    defaultValue={2}
                    step={0.00001}
                    {...register("buyTargetRoyaltyPercentage")}
                  />
                </FormControl>
                <FormControl
                  id="sellTargetRoyaltyPercentage"
                  borderColor="gray.200"
                >
                  <FormLabel>{symbol || "Managed Token"} (Sell)</FormLabel>
                  <Input
                    isRequired
                    type="number"
                    min={percentOr(
                      tokenBondingSettings?.minSellTargetRoyaltyPercentage,
                      0
                    )}
                    max={percentOr(
                      tokenBondingSettings?.maxSellTargetRoyaltyPercentage,
                      100
                    )}
                    placeholder="2"
                    defaultValue={2}
                    step={0.00001}
                    {...register("sellTargetRoyaltyPercentage")}
                  />
                </FormControl>
              </HStack>
              <HStack>
                <FormControl
                  id="buyBaseRoyaltyPercentage"
                  borderColor="gray.200"
                >
                  <FormLabel>
                    {baseMetadata?.data.symbol || "Base Token"} (Buy)
                  </FormLabel>
                  <Input
                    isRequired
                    type="number"
                    min={percentOr(
                      tokenBondingSettings?.minBuyBaseRoyaltyPercentage,
                      0
                    )}
                    max={percentOr(
                      tokenBondingSettings?.maxBuyBaseRoyaltyPercentage,
                      100
                    )}
                    placeholder="2"
                    defaultValue={2}
                    step={0.00001}
                    {...register("buyBaseRoyaltyPercentage")}
                  />
                </FormControl>
                <FormControl
                  id="sellBaseRoyaltyPercentage"
                  borderColor="gray.200"
                >
                  <FormLabel>
                    {baseMetadata?.data.symbol || "Base Token"} (Sell)
                  </FormLabel>
                  <Input
                    isRequired
                    type="number"
                    min={percentOr(
                      tokenBondingSettings?.minSellBaseRoyaltyPercentage,
                      0
                    )}
                    max={percentOr(
                      tokenBondingSettings?.maxSellBaseRoyaltyPercentage,
                      100
                    )}
                    placeholder="2"
                    defaultValue={2}
                    step={0.00001}
                    {...register("sellBaseRoyaltyPercentage")}
                  />
                </FormControl>
              </HStack>
              <FormControl>
                <FormHelperText>
                  A Percentage of coin buys/sales that will be sent to your
                  wallet. We recommend to keep this less than a combined 10% for
                  buys/sales.
                </FormHelperText>
              </FormControl>
            </VStack>

            <Disclosures fees={0} />

            <Button
              type="submit"
              alignSelf="flex-end"
              colorScheme="primary"
              isLoading={isSubmitting || loading}
              loadingText={awaitingApproval ? "Awaiting Approval" : "Loading"}
            >
              Create Token
            </Button>
          </VStack>
        </form>
      </FormProvider>
    </Flex>
  );
};
