import { Box, Text, Image } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { AiFillCloseCircle } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { hideSidebar } from "../Redux/pairTokenSlice";
import {
  initializeCryptoData,
  initializePairData,
} from "../Redux/pairTokenSlice";
import facebook from "../assets/facebook.png";
import linkedin from "../assets/linkedin.png";
import twitter from "../assets/twitter.png";

const Sidebar = () => {
  const dispatch = useDispatch();
  const { isSideBarHidden } = useSelector(
    ({ pairTokenReducer }) => pairTokenReducer
  );

  const handleHideSidebar = () => {
    dispatch(hideSidebar(true));
  };

  return (
    <Box
      display={{ base: !isSideBarHidden ? "block" : "none", "914px": "block" }}
      width="288px"
      height={"100vh"}
      flexShrink={0}
      borderRadius={"0px 32px 32px 0px"}
      background="#292929"
      position="fixed"
      zIndex="10"
      top={0}
    >
      {/* close icon */}
      <Box
        display={{ base: "block", "639px": "none" }}
        onClick={handleHideSidebar}
        position="absolute"
        right="10px"
        top="20px"
        boxShadow={"2px 2px 10px black"}
        borderRadius={"50%"}
        overflow={"hidden"}
      >
        <AiFillCloseCircle size="30px" color="#fff" />
      </Box>

      <Box
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"space-between"}
        height="100%"
      >
        <Box display={"flex"} flexDirection={"column"}>
          <Box p={"16px 0 17px 35px"} display={"flex"} alignItems={"center"}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25.33333"
              height="29.33333"
              viewBox="0 0 26 30"
              fill="none"
            >
              <path
                d="M8.66667 14.6667C9.37391 14.6667 10.0522 14.3857 10.5523 13.8856C11.0524 13.3855 11.3333 12.7072 11.3333 12C11.3333 11.2928 11.0524 10.6145 10.5523 10.1144C10.0522 9.61429 9.37391 9.33333 8.66667 9.33333C7.95942 9.33333 7.28115 9.61429 6.78105 10.1144C6.28095 10.6145 6 11.2928 6 12C6 12.7072 6.28095 13.3855 6.78105 13.8856C7.28115 14.3857 7.95942 14.6667 8.66667 14.6667ZM12.6667 0L25.3333 7.33333V22L12.6667 29.3333L0 22V7.33333L12.6667 0ZM2.66667 8.87067V20.4627L5.82933 22.2933L16.5933 14.4L22.6667 18.0453V8.872L12.6667 3.08L2.66667 8.87067Z"
                fill="white"
              />
            </svg>
            <Text
              marginLeft={"24.67px"}
              color="rgba(255, 255, 255, 0.70)"
              fontFamily={"Pacifico"}
              fontSize="32px"
              fontStyle="normal"
              fontWeight="400"
              lineHeight="normal"
            >
              NFTify
            </Text>
          </Box>
          {/* ----------------- 2 ------------------ */}
          <NavLink
            onClick={() => dispatch(initializeCryptoData())}
            style={({ isActive }) => ({
              background: isActive ? "#F30050" : "",
              marginBottom: "15px",
            })}
            to="/"
          >
            <Box
              p={"17px 20px 17px 32px"}
              display={"flex"}
              alignItems={"center"}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M19.97 6.43L12 2L4.03 6.43L9.1 9.24C9.83 8.48 10.86 8 12 8C13.14 8 14.17 8.48 14.9 9.24L19.97 6.43ZM10 12C10 10.9 10.9 10 12 10C13.1 10 14 10.9 14 12C14 13.1 13.1 14 12 14C10.9 14 10 13.1 10 12ZM11 21.44L3 17V8.14L8.13 10.99C8.04 11.31 8 11.65 8 12C8 13.86 9.27 15.43 11 15.87V21.44ZM13 21.44V15.87C14.73 15.43 16 13.86 16 12C16 11.65 15.96 11.31 15.87 10.99L21 8.14V17L13 21.44Z"
                  fill="white"
                />
              </svg>
              <Text
                color="#F7F9F9"
                marginLeft={"20px"}
                fontFamily={"Work Sans"}
                fontSize="20px"
                fontStyle="normal"
                fontWeight="600"
                lineHeight="28px"
              >
                Token Address
              </Text>
            </Box>
          </NavLink>
          {/* ----------------- 3 --------------------- */}
          <NavLink
            onClick={() => dispatch(initializePairData())}
            style={({ isActive }) => ({
              background: isActive ? "#F30050" : "",
            })}
            to="/Pair-Address"
          >
            <Box
              p={"17px 20px 17px 32px"}
              display={"flex"}
              alignItems={"center"}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M18.268 21.001H11.732C11.5783 21.2662 11.3656 21.4926 11.1105 21.6625C10.8554 21.8325 10.5646 21.9416 10.2607 21.9813C9.95668 22.021 9.64765 21.9903 9.35743 21.8915C9.06721 21.7928 8.80357 21.6287 8.58688 21.4118C8.3702 21.195 8.20626 20.9312 8.10773 20.6409C8.0092 20.3506 7.97873 20.0416 8.01865 19.7376C8.05858 19.4337 8.16784 19.143 8.338 18.888C8.50816 18.633 8.73466 18.4205 9 18.267V15L5.73 15.001C5.56714 15.2829 5.3379 15.5209 5.0622 15.6941C4.78651 15.8673 4.47268 15.9706 4.148 15.995L4 16C3.55975 16 3.1318 15.8547 2.78253 15.5867C2.43326 15.3187 2.18218 14.9429 2.06824 14.5176C1.95429 14.0924 1.98384 13.6414 2.15231 13.2347C2.32077 12.8279 2.61874 12.4881 3 12.268V5.732C2.7343 5.57862 2.50745 5.36618 2.337 5.11111C2.16654 4.85603 2.05705 4.56516 2.017 4.261C1.97694 3.95684 2.0074 3.64754 2.10601 3.35703C2.20462 3.06653 2.36873 2.8026 2.58566 2.58567C2.8026 2.36874 3.06652 2.20462 3.35703 2.10601C3.64754 2.0074 3.95684 1.97695 4.261 2.017C4.56516 2.05705 4.85603 2.16654 5.11111 2.337C5.36618 2.50745 5.57862 2.7343 5.732 3H12.268C12.4214 2.7343 12.6338 2.50745 12.8889 2.337C13.144 2.16654 13.4348 2.05705 13.739 2.017C14.0432 1.97695 14.3525 2.0074 14.643 2.10601C14.9335 2.20462 15.1974 2.36874 15.4143 2.58567C15.6313 2.8026 15.7954 3.06653 15.894 3.35703C15.9926 3.64754 16.0231 3.95684 15.983 4.261C15.9429 4.56516 15.8335 4.85603 15.663 5.11111C15.4925 5.36618 15.2657 5.57862 15 5.732V9H18.268C18.4308 8.71774 18.6602 8.47954 18.9361 8.30613C19.212 8.13271 19.526 8.02934 19.851 8.005L20 8C20.4401 7.99996 20.8679 8.14509 21.2172 8.41289C21.5664 8.68069 21.8176 9.05622 21.9317 9.48126C22.0459 9.9063 22.0166 10.3571 21.8486 10.7639C21.6805 11.1706 21.3829 11.5105 21.002 11.731V18.269C21.2674 18.4226 21.4939 18.6353 21.664 18.8904C21.8342 19.1456 21.9433 19.4364 21.9831 19.7405C22.0229 20.0446 21.9922 20.3538 21.8934 20.6441C21.7946 20.9344 21.6304 21.1981 21.4134 21.4149C21.1965 21.6316 20.9325 21.7955 20.6421 21.894C20.3517 21.9925 20.0425 22.0228 19.7385 21.9827C19.4344 21.9426 19.1437 21.8331 18.8887 21.6627C18.6337 21.4923 18.4214 21.2666 18.268 21.001ZM18.268 11.001L15 11L15.001 12.268C15.2831 12.431 15.5211 12.6603 15.6943 12.9362C15.8675 13.2121 15.9708 13.5261 15.995 13.851L16 14C16.0002 14.4403 15.8551 14.8684 15.5871 15.2179C15.3192 15.5673 14.9434 15.8186 14.5181 15.9326C14.0928 16.0467 13.6418 16.0172 13.2349 15.8488C12.8281 15.6803 12.4882 15.3823 12.268 15.001L11.001 15L11.002 18.269C11.305 18.444 11.557 18.697 11.732 18.999H18.268C18.4442 18.6951 18.6969 18.4428 19.001 18.267V11.733C18.748 11.5867 18.53 11.3871 18.362 11.148L18.268 11.001ZM13 11L11.732 11.001C11.5564 11.3037 11.3047 11.5554 11.002 11.731L11.001 13H12.268C12.4439 12.6963 12.6963 12.4439 13 12.268V11ZM12.268 5.001H5.732C5.55637 5.30374 5.30474 5.55537 5.002 5.731V12.268C5.304 12.444 5.557 12.697 5.732 13H9.001V11.733C8.71842 11.5702 8.47994 11.3407 8.30634 11.0647C8.13274 10.7886 8.02929 10.4742 8.005 10.149L8 10C8.00002 9.55975 8.1453 9.1318 8.41332 8.78253C8.68133 8.43326 9.0571 8.18219 9.48235 8.06824C9.9076 7.95429 10.3586 7.98384 10.7653 8.15231C11.1721 8.32078 11.5119 8.61874 11.732 9H13V5.732C12.7475 5.58594 12.5298 5.38666 12.362 5.148L12.268 5.001Z"
                  fill="white"
                />
              </svg>
              <Text
                color="#F7F9F9"
                marginLeft={"20px"}
                fontFamily={"Work Sans"}
                fontSize="20px"
                fontStyle="normal"
                fontWeight="400"
                lineHeight="28px"
              >
                Pair Address
              </Text>
            </Box>
          </NavLink>
        </Box>

        {/* Social media Logos */}

        <Box
          ml={"34px"}
          mb={"125px"}
          display={"flex"}
          justifyContent={"space-between"}
          width={"112px"}
        >
          <Image src={facebook} />
          <Image src={linkedin} />
          <Image src={twitter} />
        </Box>
      </Box>
    </Box>
  );
};

export default Sidebar;
