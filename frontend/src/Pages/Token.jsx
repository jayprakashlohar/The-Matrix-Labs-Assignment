import { Box, SimpleGrid, Text } from "@chakra-ui/react";
import CryptoCard from "../components/CryptoCard";
import { useSelector } from "react-redux";
import { Spinner } from "@chakra-ui/react";

const Token = () => {
  const { isLoading, isError, data } = useSelector(
    ({ pairTokenReducer }) => pairTokenReducer
  );

  console.log(isLoading, isError, data);

  if (isLoading) {
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

  if (data.length === 0) {
    return (
      <Box mt="100px">
        <Text fontSize={"20px"} textAlign={"center"}>
          Serch Something to see Results
        </Text>
        <Text fontSize={"20px"} textAlign={"center"}>
          for example : WBTC or WBTC/USDC
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
        Token Search Results
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
        {data.map(
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

export default Token;
