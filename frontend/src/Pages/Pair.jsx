import { Box, SimpleGrid, Text } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import CryptoCard from "../Components/CryptoCard";
import { Spinner } from "@chakra-ui/react";

const Pair = () => {
  const { isPairLoading, isPairError, pairData } = useSelector(
    ({ pairTokenReducer }) => pairTokenReducer
  );

  console.log(isPairLoading, isPairError, pairData);

  if (isPairLoading) {
    return (
      <Box
        mt={"55px"}
        boxSizing="border-box"
        pl={"40px"}
        display={"flex"}
        justifyContent={"center"}
      >
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="blue.500"
          size="xl"
        />
      </Box>
    );
  }

  if (pairData.length === 0) {
    return (
      <Box mt="100px">
        <Text fontSize={"20px"} textAlign={"center"}>
          Enter Pair Address in search bar
        </Text>
        <Text fontSize={"20px"} textAlign={"center"}>
          for example : 0x46Cf1cF8c69595804ba91dFdd8d6b960c9B0a7C4
        </Text>
      </Box>
    );
  }

  return (
    <Box mt={"55px"} boxSizing="border-box" pl={"40px"}>
      <Text
        color="#F7F9F9"
        fontFamily={"Work Sans"}
        fontSize={"24px"}
        fontWeight={600}
        lineHeight={"28px"}
      >
        Pair Search Results
      </Text>

      <SimpleGrid
        fontFamily={"Poppins"}
        mt={"22px"}
        columns={{ base: 1, "639px": 2, "1213px": 3, "1502px": 4 }}
        columnGap={"12px"}
        rowGap={"29px"}
        boxSizing="border-box"
        pr={"32px"}
        pb={"30px"}
      >
        {pairData.map(
          (
            {
              pairCreatedAt,
              chainId,
              dexId,
              pairAddress,
              baseToken,
              quoteToken,
              priceNative,
              priceUsd,
            },
            index
          ) => {
            return (
              <CryptoCard
                key={index}
                pairCreatedAt={pairCreatedAt}
                symbol={chainId.toUpperCase()}
                dexId={dexId.length > 15 ? dexId.slice(0, 7) : dexId}
                pairAddress={`#${pairAddress.slice(0, 5)}...`}
                baseToken={baseToken}
                quoteToken={quoteToken}
                priceNative={priceNative}
                priceUsd={priceUsd}
              />
            );
          }
        )}
      </SimpleGrid>
    </Box>
  );
};

export default Pair;
