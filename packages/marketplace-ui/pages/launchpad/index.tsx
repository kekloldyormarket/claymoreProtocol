import React, { FC, useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import {
  Box,
  Flex,
  Stack,
  Text,
  useRadioGroup,
  useMediaQuery,
} from "@chakra-ui/react";
import { LaunchpadLayout } from "@/components/launchpad";
import { RadioCardWithAffordance } from "@/components/form";
import { route, routes } from "@/utils/routes";

export enum LandingOption {
  CreateToken = "CreateToken",
  SellToken = "SellToken",
  Fundraise = "Fundraise",
  LBC = "LBC",
}

export const LaunchPad: FC = ({ children }) => {
  const router = useRouter();
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isLargerThanBase] = useMediaQuery(`(min-width: 768px)`);

  const options: {
    value: string;
    heading: string;
    illustration: string;
    disabled?: boolean;
    helpText: string;
  }[] = [
    {
      value: LandingOption.CreateToken,
      heading: "Create New Claymore",
      illustration: "/create-a-token.svg",
      helpText: "Ayy.",
    },
    {
      value: LandingOption.SellToken,
      heading: "Show Me the APYs",
      illustration: "/sell-token-later.svg",
      helpText: "Wait, sers.",
    },
    {
      value: LandingOption.Fundraise,
      heading: "Swap/Stake/Unstake/YIELD BOOM",
      illustration: "/fundraise.svg",
      helpText:
        "This is the cool bit.",
    }/*
    {
      value: LandingOption.LBC,
      heading: "Dynamic Pricing NFT Mint",
      illustration: "/dynamic-pricing-mint.svg",
      helpText:
        "Sell NFTs from a Metaplex CandyMachine using Strata’s dynamic price discovery. This allows you to avoid bots without the need of a whitelist.",
    },*/
  ];

  const { getRootProps, getRadioProps } = useRadioGroup({
    name: "options",
    onChange: setSelectedOption,
  });

  const group = getRootProps();

  const handleOnNext = async () => {
    if (selectedOption === LandingOption.CreateToken)
      router.push(route(routes.newFullyManaged));

    if (selectedOption === LandingOption.SellToken)
      router.push(route(routes.sell));

    if (selectedOption === LandingOption.Fundraise)
      router.push(
        route(routes.swap, { mintKey: "12yd5cGsGeBEDJzzRxKfSttGB4bbA7oY4frEBBsiUwiq", fanoutKey:"Gha7WZxD76pbS6NCrP2kZR2PGhUmfFEZnKU4oYvBJhkp" }));

    if (selectedOption === LandingOption.LBC)
      router.push(route(routes.newLbc, { candymachine: "true" }));
  };

  return (
    <LaunchpadLayout
      heading="What would you like to do?"
      subHeading="Please select one below:"
      nextDisabled={!selectedOption}
      onNext={handleOnNext}
    >
      <Stack
        {...group}
        direction={{ base: "column", md: "row" }}
        justifyContent="center"
        alignItems={{ base: "center", md: "normal" }}
      >
        {options.map(
          ({ value, heading, illustration, helpText, disabled = false }) => {
            const radio = getRadioProps({ value });

            return (
              <RadioCardWithAffordance
                key={value}
                {...radio}
                disabled={disabled}
              >
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
      <Flex w="full" justifyContent="center">
        <Box
          bg="white"
          position="relative"
          rounded="lg"
          borderWidth="1px"
          borderColor="white"
          _hover={{ borderColor: "orange.500" }}
          py={4}
          px={2}
          w="100%"
          maxW="492px"
          cursor="pointer"
          onClick={() =>
            window.open(
              "https://twitter.com/@staccart"
            )
          }
        >
          <Stack direction="row">
            <Flex flexShrink={0} justifyContent="center" alignItems="center">
              <Image
                src="/jare.jpeg"
                height="100px"
                width="100%"
                alt="Check Back Later"
              />
            </Flex>
            <Stack flexGrow={1} spacing={0}>
              <Text fontWeight="bold" fontSize="sm">
                The stream of conciousness is on twitter.
              </Text>
              <Text color="gray.500" fontSize="xs">
                Click, follow, notifs on. 
              </Text>
              <Text color="gray.500" fontSize="xs" pt={2}>
                Mm,{" "}
                <Text as="span" color="orange.500">
                  Twitter
                </Text>{" "}
                : for shitpostin n networkin (in that order)
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Flex>
    </LaunchpadLayout>
  );
};
export default LaunchPad;
