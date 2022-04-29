import { MetadataMeta } from "@/components/MetadataMeta";
import { useState } from 'react'
import {
  Fanout,
  FanoutClient,
  MembershipModel,
} from "@glasseaters/hydra-sdk"
import { BN } from '@project-serum/anchor'
import { roundToDecimals } from "@strata-foundation/react";

const numberFormater = new Intl.NumberFormat('en-US', {
  style: 'decimal',
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});
function asNumber (val?: BN)  {
    if (!val) {
      return undefined;
    }

    return val.toNumber() / 10 ** 6;
  }
import { Connection, PublicKey } from '@solana/web3.js'
import { Box, Center, Container, Heading, Spinner, Stack } from "@chakra-ui/react";
import {
  Swap,
  usePublicKey,
  useTokenBondingFromMint,
} from "@strata-foundation/react";
import {
  Button,
  Input,
  VStack, 
  HStack,
  Text
} from "@chakra-ui/react";
import {
  GetServerSideProps,
  InferGetServerSidePropsType,
  NextPage,
} from "next";
import { useRouter } from "next/router";
import React from "react";
import { mintMetadataServerSideProps } from "@/utils/tokenMetadataServerProps";
import { SITE_URL } from "@/constants";
import { useWallet } from "@solana/wallet-adapter-react";
import { TextProps } from "recharts";

export function numberWithCommas(x: number, decimals: number = 4): string {
  return roundToDecimals(x, decimals).toLocaleString("en-US");
}
export const getServerSideProps: GetServerSideProps =
  mintMetadataServerSideProps;

export const SwapDisplay: NextPage = ({
  name,
  image,
  description,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const router = useRouter();
  console.log(router)
  const { mintKey: mintKeyRaw, fanoutKey } = router.query;
  console.log(mintKeyRaw)
  const mintKey = usePublicKey(mintKeyRaw as string);
  const { info: tokenBonding, loading } = useTokenBondingFromMint(mintKey);
  console.log(tokenBonding)
  const fanout = usePublicKey(fanoutKey as string);
  const wallet = useWallet()
  var [shares, setShares] = useState("1.38");
  var [Pot, setPot] = useState(0);

  const [members, setMembers] = React.useState<number>(0);
  const [staked, setStaked] = React.useState<number>(0);
  const [total, setTotal] = React.useState<number>(0);
  const [balance, setBalance] = useState(0)

  if (fanout){
  setTimeout(async function(){
    if (!loading){

  try {
  const fanoutSdk = new FanoutClient(
    new Connection("https://ssc-dao.genesysgo.net/"),
    // @ts-ignore
    wallet
  );
  const fanoutAccount = await fanoutSdk.fetch<Fanout>(
    fanout as PublicKey,
    
    Fanout
  )
  console.log(fanoutAccount)
  console.log(fanoutAccount)
  // @ts-ignore
  setTotal((asNumber(new BN(fanoutAccount?.totalShares))))
  // @ts-ignore
    setStaked((asNumber(new BN(fanoutAccount?.totalStakedShares))))
    // @ts-ignore
    setMembers(((new BN(fanoutAccount?.totalMembers))))
    
      try {
      // @ts-ignore
  var tokenAmount = await getAssociatedAccountBalance(connection2, wallet.publicKey, mintKey)
  // @ts-ignore
  setBalance( tokenAmount.uiAmount)
  }
  catch (err){
  
  }

} catch(err){
  console.log(err)
}
    }
}, Math.random() * 10 * 1000 * 1.38)
  }
async function onChange(e: any){
      e.preventDefault()
      console.log(e.target.value)
      setShares(e.target.value)
      }
  async function claim(){
    if (wallet){    var fanoutSdk: FanoutClient;
      fanoutSdk = new FanoutClient(
        new Connection("https://ssc-dao.genesysgo.net/"),
        // @ts-ignore
        wallet
    );
  var ix3= await fanoutSdk.distributeTokenMemberInstructions(//{fanout,mint:WRAPPED_SOL_MINT,payer:wallet.publicKey})// .distributeTokenMember(
  {
  
       
    distributeForMint: false,
    fanout: fanout as PublicKey,
    membershipMint:mintKey as PublicKey,
    member: wallet.publicKey as PublicKey,
    payer: wallet.publicKey as PublicKey
  
  }
  );
  
  var ix4= await fanoutSdk.distributeTokenMemberInstructions(//{fanout,mint:WRAPPED_SOL_MINT,payer:wallet.publicKey})// .distributeTokenMember(
    {
    
         
      distributeForMint: true,
      fanoutMint: mintKey as PublicKey,
      fanout: fanout as PublicKey,
      membershipMint:mintKey as PublicKey,
      member: wallet.publicKey as PublicKey,
      payer: wallet.publicKey as PublicKey
    
    }
    );
  await fanoutSdk.sendInstructions([...ix3.instructions], [], wallet.publicKey as PublicKey)
  }
  }
  async function doit(){
  
  if (wallet){
  
    var fanoutSdk: FanoutClient;
    fanoutSdk = new FanoutClient(
      new Connection("https://ssc-dao.genesysgo.net/"),
      // @ts-ignore
      wallet
  );

  console.log( (parseFloat(shares) * 10 ** 6))
  var  ixs = await fanoutSdk.stakeTokenMemberInstructions(
        {
            
            shares:  (parseFloat(shares) * 10 ** 6),
            // @ts-ignore
            fanout: fanout,
            membershipMint: mintKey,
           // @ts-ignore
            member: wallet.publicKey,
            // @ts-ignore
            payer: wallet.publicKey
        }
    );var tx = await fanoutSdk.sendInstructions(
      ixs.instructions,
      [],
      // @ts-ignore
      wallet.publicKey
  );
  
  }
  }
  
  /*
  console.log(321)
  const { info: tokenBonding2 } = useTokenBondingFromMint(mintKey);
  const { price: price2, loading: l2 } = useLivePrice(tokenBonding2?.publicKey);
  if (price2){
    if (!l2 && !isNaN(price2)){
   // console.log(price2)
    }
  }
  */
  async function us(){
  
    if (wallet){
      var fanoutSdk: FanoutClient;
      fanoutSdk = new FanoutClient(
        new Connection("https://ssc-dao.genesysgo.net/"),
        // @ts-ignore
        wallet
    );

    
    await fanoutSdk.unstakeTokenMember({
        // @ts-ignore
      fanout: fanout,
      // @ts-ignore
      member: wallet.publicKey,
      // @ts-ignore
      payer: wallet.publicKey
  }
  );
    }
  
  }
  return (
    <Box
      w="full"
      backgroundColor="#f9f9f9"
      height="100vh"
      overflow="auto"
      paddingBottom="200px"
    >
      <MetadataMeta
        title={`Strata Swap | ${name}`}
        description={description}
        image={image}
        url={`${SITE_URL}/bounty/${mintKey}/`}
      />
      <Box padding="54px" backgroundColor="black.500" />
      <Container mt="-72px" justify="stretch" maxW="460px">
        <Heading mb={2} color="white" fontSize="24px" fontWeight={600}>
          Swap
        </Heading>
        <Box zIndex={1} bg="white" shadow="xl" rounded="lg" minH="400px">
          {loading && (
            <Center>
              <Spinner />
            </Center>
          )}
          {!loading && tokenBonding && (
            <div>
  <Stack direction={["column", "row"]}>
      <HStack flexGrow={4}>



      { staked && 
<Text>
 <Box w="full" position="relative">{numberWithCommas(staked, 4)} Staked </Box> 
 
</Text>
 }


{ balance && 
<Text>
 
 <Box w="full" position="relative">{numberWithCommas(balance, 4)} </Box> Your Balance
</Text>
}
</HStack>
</Stack>

            <VStack>
            <Button onClick={claim} >meCLAIM</Button>
    
            <Input  style={{color:"black", fontSize: "30px;", backgroundColor: "grey"}} type="text" onInput={onChange} value={shares} />
    
            <Button  onClick={doit} >STAKEme</Button>
    
    <Button  onClick={us} >UNSTAKEALLme</Button>
    </VStack>
            <Swap tokenBondingKey={tokenBonding!.publicKey} />
            </div>
          )}
        </Box>
      </Container>
    </Box>
  );
};

export default SwapDisplay;
