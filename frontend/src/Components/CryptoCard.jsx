import { Box, GridItem, Text, Image } from "@chakra-ui/react";
import { Divider } from "@chakra-ui/react";
import infoIcon from "../assets/infoIcon.png";
import basetoken from "../assets/basetoken.png";
import priceIcon from "../assets/priceIcon.png";

const CryptoCard = ({
  pairCreatedAt,
  symbol,
  dexId,
  pairAddress,
  baseToken,
  quoteToken,
  priceNative,
  priceUsd,
}) => {
  return (
    <>
      <GridItem
        height={"188px"}
        background={"#390554"}
        borderRadius={"10px"}
        position={"relative"}
        boxSizing="border-box"
        p={{ base: "20px 0 36px 57px", "639px": "23px 0 33px 32px" }}
      >
        <Text mb={"12px"} fontSize={"16px"} fontWeight={600}>
          Basic Info
        </Text>

        <Box display="flex">
          <Box
            color="#f5f5f5"
            display={"flex"}
            flexDirection={"column"}
            gap={"8px"}
          >
            <Text fontSize={"12px"} fontWeight={600}>
              Pair created at
            </Text>
            <Text fontSize={"12px"} fontWeight={600}>
              Symbol
            </Text>
            <Text fontSize={"12px"} fontWeight={600}>
              Dex ID
            </Text>
            <Text fontSize={"12px"} fontWeight={600}>
              Pair Address
            </Text>
          </Box>

          <Box
            color="#f5f5f5"
            display={"flex"}
            flexDirection={"column"}
            gap={"8px"}
          >
            <Text fontSize={"12px"} ml={"36px"} fontWeight={200}>
              {pairCreatedAt}
            </Text>
            <Text fontSize={"12px"} ml={"36px"} fontWeight={200}>
              {symbol}
            </Text>
            <Text fontSize={"12px"} ml={"36px"} fontWeight={200}>
              {dexId}
            </Text>
            <Text fontSize={"12px"} ml={"36px"} fontWeight={200}>
              {pairAddress}
            </Text>
          </Box>
        </Box>
        {/* info Logo */}
        <Image
          src={infoIcon}
          cursor="pointer"
          size={"56px"}
          bg="#960252"
          position={"absolute"}
          right="8px"
          bottom={"8px"}
        />
      </GridItem>

      {/* ------------ Base Token ---------------- */}

      <GridItem
        height={"188px"}
        background={"#390554"}
        borderRadius={"10px"}
        position={"relative"}
        boxSizing="border-box"
        p={{ base: "20px 0 36px 57px", "639px": "23px 0 33px 32px" }}
      >
        <Text mb={"15px"} fontSize={"16px"} fontWeight={600}>
          Base Token
        </Text>
        <Box display="flex">
          <Box
            color="#f5f5f5"
            display={"flex"}
            flexDirection={"column"}
            gap={"8px"}
          >
            <Text fontSize={"12px"} fontWeight={600}>
              Name
            </Text>
            <Text fontSize={"12px"} fontWeight={600}>
              Symbol
            </Text>
            <Text fontSize={"12px"} fontWeight={600}>
              Address
            </Text>
          </Box>

          <Box
            color="#f5f5f5"
            display={"flex"}
            flexDirection={"column"}
            gap={"8px"}
          >
            <Text fontSize={"12px"} ml={"36px"} fontWeight={200}>
              {baseToken.name}
            </Text>
            <Text fontSize={"12px"} ml={"36px"} fontWeight={200}>
              {baseToken.symbol}
            </Text>
            <Text fontSize={"12px"} ml={"36px"} fontWeight={200}>
              #{baseToken.address.slice(0, 5)}...
            </Text>
          </Box>
        </Box>
        {/* info Logo */}

        <Image
          src={basetoken}
          cursor="pointer"
          size={"56px"}
          bg="#960252"
          position={"absolute"}
          right="8px"
          bottom={"8px"}
        />
      </GridItem>

      {/* ----------------- Quote Token ------------------- */}

      <GridItem
        height={"188px"}
        background={"#390554"}
        borderRadius={"10px"}
        position={"relative"}
        boxSizing="border-box"
        p={{ base: "20px 0 36px 57px", "639px": "23px 0 33px 32px" }}
      >
        <Text mb={"15px"} fontSize={"16px"} fontWeight={600}>
          Quote Token
        </Text>
        <Box display="flex">
          <Box
            color="#f5f5f5"
            display={"flex"}
            flexDirection={"column"}
            gap={"8px"}
          >
            <Text fontSize={"12px"} fontWeight={600}>
              Name
            </Text>
            <Text fontSize={"12px"} fontWeight={600}>
              Symbol
            </Text>
            <Text fontSize={"12px"} fontWeight={600}>
              Address
            </Text>
          </Box>

          <Box
            color="#f5f5f5"
            display={"flex"}
            flexDirection={"column"}
            gap={"8px"}
          >
            <Text fontSize={"12px"} ml={"36px"} fontWeight={200}>
              {quoteToken.name}
            </Text>
            <Text fontSize={"12px"} ml={"36px"} fontWeight={200}>
              {quoteToken.symbol}
            </Text>
            <Text fontSize={"12px"} ml={"36px"} fontWeight={200}>
              #{quoteToken.address.slice(0, 5)}...
            </Text>
          </Box>
        </Box>
        {/* info Logo */}
        <Image
          src={basetoken}
          cursor="pointer"
          size={"56px"}
          bg="#960252"
          position={"absolute"}
          right="8px"
          bottom={"8px"}
        />
      </GridItem>

      {/* ------------------- Price ----------------------- */}

      <GridItem
        height={"188px"}
        background={"#390554"}
        borderRadius={"10px"}
        position={"relative"}
        boxSizing="border-box"
        p={{ base: "20px 0 36px 57px", "639px": "23px 0 33px 32px" }}
      >
        <Text mb={"15px"} fontSize={"16px"} fontWeight={600}>
          Price
        </Text>
        <Box display="flex">
          <Box
            color="#f5f5f5"
            display={"flex"}
            flexDirection={"column"}
            gap={"8px"}
          >
            <Text fontSize={"12px"} fontWeight={600}>
              Price Native
            </Text>
            <Text fontSize={"12px"} fontWeight={600}>
              Price USD
            </Text>
          </Box>

          <Box
            color="#f5f5f5"
            display={"flex"}
            flexDirection={"column"}
            gap={"8px"}
          >
            <Text fontSize={"12px"} ml={"36px"} fontWeight={200}>
              {priceNative}
            </Text>
            <Text fontSize={"12px"} ml={"36px"} fontWeight={200}>
              {priceUsd}
            </Text>
          </Box>
        </Box>
        {/* info Logo */}

        <Image
          src={priceIcon}
          cursor="pointer"
          size={"56px"}
          bg="#960252"
          position={"absolute"}
          right="8px"
          bottom={"8px"}
        />
      </GridItem>

      <Divider display={{ base: "block", "639px": "none" }}></Divider>
    </>
  );
};

export default CryptoCard;
