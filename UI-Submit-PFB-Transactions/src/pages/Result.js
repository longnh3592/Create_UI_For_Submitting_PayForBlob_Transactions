import React from "react";
import {
  Box,
  Flex,
  Button,
  FormControl,
  FormLabel,
  Textarea,
  Link,
  Text,
  Heading
} from "@chakra-ui/react";
import signInImage from "assets/img/signInImage.png";
import GradientBorder from "components/GradientBorder/GradientBorder";

function Result({onSubmit, pfbData, nameSpaceId}) {
  const titleColor = "white";
  const textColor = "gray.400";

  return (
    <Flex position='relative'>
      <Flex
        minH='100vh'
        h={{ base: "120vh", lg: "fit-content" }}
        w='100%'
        maxW='1044px'
        mx='auto'
        pt={{ sm: "100px", md: "0px" }}
        flexDirection='column'
        me={{ base: "auto", lg: "50px", xl: "auto" }}>
        <Flex
          alignItems='center'
          justifyContent='start'
          // style={{ userSelect: "none" }}
          mx={{ base: "auto", lg: "unset" }}
          ms={{ base: "auto", lg: "auto" }}
          w={{ base: "100%", md: "50%", lg: "450px" }}
          px='50px'>
          <Flex
            direction='column'
            w='100%'
            background='transparent'
            mt={{ base: "0px", md: "20px", lg: "30px", xl: "50px" }}
            mb={{ base: "60px", lg: "95px" }}>
            <Heading color={titleColor} fontSize='20px' mb='10px'>
            Your PFB Data
            </Heading>
            <FormControl>
              <FormLabel
                ms='4px'
                fontSize='md'
                fontWeight='normal'
                color='white'>
                Namespace ID
              </FormLabel>
              <GradientBorder
                mb='24px'
                w={{ base: "100%", lg: "fit-content" }}
                borderRadius='20px'
                p="10px"
                bg=""
              >
                <Box color="#bd93f9" style={{fontWeight: "bold"}}>{nameSpaceId}</Box>
              </GradientBorder>
            </FormControl>
            <FormControl>
              <FormLabel
                ms='4px'
                fontSize='md'
                fontWeight='normal'
                color='white'>
                Height
              </FormLabel>
              <GradientBorder
                mb='24px'
                w={{ base: "100%", lg: "fit-content" }}
                borderRadius='20px'
                p="10px"
                bg=""
              >
                <Box color="#bd93f9" style={{fontWeight: "bold"}}>{pfbData.height}</Box>
              </GradientBorder>
            </FormControl>
            <FormControl>
              <FormLabel
                ms='4px'
                fontSize='md'
                fontWeight='normal'
                color='white'>
                Transaction hash
              </FormLabel>
              <GradientBorder
                mb='24px'
                w={{ base: "100%", lg: "fit-content" }}
                borderRadius='20px'
                p="10px"
                bg=""
                style={{wordBreak: "break-all"}}
              >
                <Box color="#bd93f9" style={{fontWeight: "bold"}}>{pfbData.txhash}</Box>
              </GradientBorder>
            </FormControl>
            <FormControl>
              <FormLabel
                ms='4px'
                fontSize='md'
                fontWeight='normal'
                color='white'>
                Retrieve data
              </FormLabel>
              <GradientBorder
                mb='24px'
                w={{ base: "100%", lg: "fit-content" }}
                borderRadius='20px'
                p="10px"
                bg=""
                style={{width: "100%"}}
              >
                <Textarea
                  size='lg'
                  isReadOnly
                  value={JSON.stringify(pfbData, undefined, 4)}
                  style={{height: 350, color: "white"}}
                />
              </GradientBorder>
            </FormControl>
            <Text
              mb='36px'
              ms='4px'
              color={textColor}
              fontWeight='bold'
              fontSize='16px'>
              Check FPB TXH <Link color='yellow.400' href={`https://testnet.mintscan.io/celestia-incentivized-testnet/txs/${pfbData.txhash}`} isExternal>here</Link>
            </Text>
            <Button
              variant='brand'
              fontSize='16px'
              type='submit'
              w='100%'
              maxW='350px'
              h='45'
              mb='20px'
              mt='20px'
              onClick={onSubmit}
            >
              Back
            </Button>
          </Flex>
        </Flex>
        <Box
          display={{ base: "none", lg: "block" }}
          overflowX='hidden'
          h='100%'
          maxW={{ md: "50vw", lg: "50vw" }}
          minH='100vh'
          w='960px'
          position='absolute'
          left='0px'>
          <Box
            bgImage={signInImage}
            w='100%'
            h='100%'
            bgSize='cover'
            bgPosition='50%'
            position='absolute'
            display='flex'
            flexDirection='column'
            justifyContent='center'
            alignItems='center'>
            <Text
              textAlign='center'
              color='white'
              letterSpacing='8px'
              fontSize='20px'
              fontWeight='500'>
              Celestia
            </Text>
            <Text
              textAlign='center'
              color='transparent'
              letterSpacing='8px'
              fontSize='36px'
              fontWeight='bold'
              bgClip='text !important'
              bg='linear-gradient(94.56deg, #FFFFFF 79.99%, #21242F 102.65%)'>
              UI for Submitting PayForBlob Transactions
            </Text>
          </Box>
        </Box>
      </Flex>
    </Flex>
  );
}

export default Result
