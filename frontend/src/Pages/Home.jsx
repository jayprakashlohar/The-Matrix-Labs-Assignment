import {
  Box,
  Button,
  Input,
  InputGroup,
  InputRightElement,
  Text,
} from "@chakra-ui/react";
import {AiOutlineSearch} from "react-icons/ai"
import AllRoutes from "./../Routes/AllRoutes";
import { getCryptoData } from "../Redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { hideSidebar } from "../Redux/pairTokenSlice";
import { useWeb3Modal } from "@web3modal/react";
import { useLocation } from "react-router-dom";
import { getPairData } from "../Redux/actions";

const REACT_APP_URL = "https://api.dexscreener.com/latest/dex"

const Home = () => {
  const { open, close } = useWeb3Modal();

  const dispatch = useDispatch();
  const { isError } = useSelector(({ pairTokenReducer }) => pairTokenReducer);

  const location = useLocation();


  const handleSearch = (e) => {
    const searchQuery = e.target.value.trim();
    const url = `${REACT_APP_URL}/search?q=${searchQuery}`;

    if (location.pathname === "/") {
      dispatch(getCryptoData(url)).catch((error) => {
        console.log(error);
      });
    } else {
      dispatch(getPairData(url)).catch((error) => {
        console.log(error);
      });
    }
  };

  const handleHideSidebar = () => {
    dispatch(hideSidebar(false));
  };

  const handleConnectWallet = () => {
    open();
  };

  return (
    <Box
      height={"80vh"}
      position={"absolute"}
      right={0}
      top={0}
      left={{ base: 0, "914px": "288px" }}
    >
      <Box height={"96vh"} overflow={"scroll"}>
        <Box
          mt={"27px"}
          fontFamily={"Poppins"}
          boxSizing="border-box"
          pl={"65px"}
          pr={"44px"}
          display={{ base: "none", "914px": "flex" }}
          justifyContent={"space-between"}
        >
          <InputGroup
            boxSizing="border-box"
            overflow={"hidden"}
            background="linear-gradient(132deg, rgba(124, 15, 53, 0.20) 0%, rgba(88, 18, 102, 0.20) 100%)"
            border={"1px solid #FFF"}
            borderRadius={"20px"}
            w={{ base: "335px", "1017px": "435px" }}
          >
            <InputRightElement pointerEvents="none" pr={"19px"} pt={"8px"}>
              <AiOutlineSearch />
            </InputRightElement>
            <Input
              onChange={handleSearch}
              variant={"none"}
              bg={"none"}
              height={"50px"}
              border={"none"}
              type="search"
              _placeholder={{
                color: "#fff",
                fontSize: "18px",
                fontWeight: "600",
                fontFamily: "Poppins",
              }}
              placeholder="Search"
            />
          </InputGroup>
          <Button
            onClick={handleConnectWallet}
            variant={"none"}
            height={"52px"}
            width={"156px"}
            borderRadius={"20px"}
            background={"linear-gradient(131deg, #7C0F35 0%, #581266 100%)"}
            fontFamily={"Poppins"}
            fontSize={"16px"}
            fontWeight={600}
            color="#fff"
          >
            Connect
          </Button>
        </Box>

        {/* Visible on mobile view */}

        <Box
          display={{ base: "block", "914px": "none" }}
          mt="32px"
          boxSizing="border-box"
          pl={"35.64px"}
          pr="32px"
        >
          <Box display={"flex"} flexDirection={"column"} gap="21.68px">
            <Box display="flex" justifyContent={"space-between"}>
              <Box display={"flex"} alignItems={"center"}>
                <svg
                  onClick={handleHideSidebar}
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="16.857px"
                  viewBox="0 0 20 16"
                  fill="none"
                >
                  <path
                    d="M18.3574 1.57143H1.64307M18.3574 8H1.64307M18.3574 14.4286H1.64307"
                    stroke="white"
                    strokeWidth="1.71429"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <Text
                  ml={"11.64"}
                  fontFamily="Pacifico"
                  fontSize={"16px"}
                  fontWeight={400}
                >
                  NFTify
                </Text>
              </Box>
              <Button
                onClick={handleConnectWallet}
                variant={"none"}
                height={"27.66667px"}
                width={"83px"}
                borderRadius={"10.641px"}
                background={"linear-gradient(131deg, #7C0F35 0%, #581266 100%)"}
                fontFamily={"Poppins"}
                fontSize={"8.513px"}
                fontWeight={600}
                color="#fff"
              >
                Connect
              </Button>
            </Box>

            <InputGroup
              boxSizing="border-box"
              overflow={"hidden"}
              background="linear-gradient(132deg, rgba(124, 15, 53, 0.20) 0%, rgba(88, 18, 102, 0.20) 100%)"
              border={"1px solid #FFF"}
              borderRadius={"20px"}
              w={"100%"}
            >
              <InputRightElement pointerEvents="none" pr={"19px"} pt={"8px"}>
                <AiOutlineSearch />
              </InputRightElement>
              <Input
                onChange={handleSearch}
                variant={"none"}
                bg={"none"}
                height={"50px"}
                border={"none"}
                type="search"
                _placeholder={{
                  color: "#fff",
                  fontSize: "18px",
                  fontWeight: "600",
                  fontFamily: "Poppins",
                }}
                placeholder="Search"
              />
            </InputGroup>
          </Box>
        </Box>

        {isError ? (
          <p className="invalid">Invalid Token Search Query</p>
        ) : (
          <AllRoutes />
        )}
      </Box>
    </Box>
  );
};

export default Home;
