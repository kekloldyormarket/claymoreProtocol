import React, { FC, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import {
  Box,
  Flex,
  Stack,
  Text,
  useRadioGroup,
  useClipboard,
} from "@chakra-ui/react";
import { LaunchpadLayout } from "@/components/launchpad";
import { RadioCardWithAffordance } from "@/components/form/RadioCard";
import { route, routes } from "@/utils/routes";

export enum SellTokenOption {
  PriceDiscovery = "PriceDiscovery",
  FixedPrice = "FixedPrice",
}

export const SellToken: FC = () => {
  const router = useRouter();
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const mint = router.query["mint"] as string | undefined;
  const { hasCopied, onCopy } = useClipboard(mint || "");

  const options: {
    value: string;
    heading: string;
    illustration: string;
    helpText: string;
  }[] = [
    /*
    {
      value: SellTokenOption.PriceDiscovery,
      heading: "Price Discovery",
      illustration: "/price-discovery.svg",
      helpText:
        "Set a price range and let demand dictate the price. This helps to avoid bots.",
    },
    {
      value: SellTokenOption.FixedPrice,
      heading: "Fixed Price",
      illustration: "/fixed-price.svg",
      helpText: "Sell this token for a predetermined price.",
    }, */
  ];

  const { getRootProps, getRadioProps } = useRadioGroup({
    name: "options",
    onChange: setSelectedOption,
  });

  const group = getRootProps();

  const handleOnNext = async () => {
    if (selectedOption === SellTokenOption.PriceDiscovery)
      router.push(route(routes.newLbc, { mint }), undefined, { shallow: true });

    if (selectedOption === SellTokenOption.FixedPrice)
      router.push(route(routes.newSale, { mint }), undefined, {
        shallow: true,
      });
  };

  return (
    <LaunchpadLayout
      heading="Sermaam you are awful horrible at waiting."
      subHeading="Please select one below:"
      backVisible
      nextDisabled={!selectedOption}
      onNext={handleOnNext}
    ><Flex w="full" justifyContent="center">
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

export default SellToken;
