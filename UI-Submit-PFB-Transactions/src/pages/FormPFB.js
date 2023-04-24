import React from "react";
import {
  Box,
  Flex,
  Button,
  FormControl,
  FormLabel,
  Input,
  Link,
  Text,
  Heading
} from "@chakra-ui/react";
import signInImage from "assets/img/signInImage.png";
import GradientBorder from "components/GradientBorder/GradientBorder";

function FormPFB({onSubmit, onChange, isSubmitting, generate, formData}) {
  const titleColor = "white";

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
          style={{ userSelect: "none" }}
          mx={{ base: "auto", lg: "unset" }}
          ms={{ base: "auto", lg: "auto" }}
          w={{ base: "100%", md: "50%", lg: "450px" }}
          px='50px'>
          <Flex
            direction='column'
            w='100%'
            background='transparent'
            mt={{ base: "50px", md: "150px", lg: "160px", xl: "245px" }}
            mb={{ base: "60px", lg: "95px" }}>
            <Heading color={titleColor} fontSize='20px' mb='10px'>
            Tool for making custom namespaceID at <Link color='yellow.400' href='https://go.dev/play/p/7ltvaj8lhRl' isExternal>here</Link>
            </Heading>
            <FormControl>
              <FormLabel
                ms='4px'
                fontSize='md'
                fontWeight='normal'
                color='white'>
                Namespace Id
              </FormLabel>
              <GradientBorder
                mb='24px'
                w={{ base: "100%", lg: "fit-content" }}
                borderRadius='20px'>
                <Input
                  color='white'
                  bg='rgb(19,21,54)'
                  border='transparent'
                  borderRadius='20px'
                  fontSize='md'
                  size='lg'
                  w={{ base: "100%", md: "346px" }}
                  maxW='100%'
                  h='46px'
                  placeholder='Input your namespace_id'
                  onChange={(e) => onChange("namespace_id", e.target.value)}
                  value={formData?.namespace_id || ""}
                />
              </GradientBorder>
            </FormControl>
            <FormControl>
              <FormLabel
                ms='4px'
                fontSize='sm'
                fontWeight='normal'
                color='white'>
                Data
              </FormLabel>
              <GradientBorder
                mb='24px'
                w={{ base: "100%", lg: "fit-content" }}
                borderRadius='20px'>
                <Input
                  color='white'
                  bg='rgb(19,21,54)'
                  border='transparent'
                  borderRadius='20px'
                  fontSize='sm'
                  size='lg'
                  w={{ base: "100%", md: "346px" }}
                  maxW='100%'
                  type='text'
                  placeholder='Input your data'
                  onChange={(e) => onChange("data", e.target.value)}
                  value={formData?.data || ""}
                />
              </GradientBorder>
            </FormControl>
            <Button
              variant='brand'
              fontSize='16px'
              type='submit'
              w='100%'
              maxW='350px'
              h='45'
              mb='20px'
              mt='20px'
              onClick={generate}
            >
              Generate namespace_id and data
            </Button>
            <Button
              isLoading={isSubmitting}
              loadingText='Submitting'
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
              Submit
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

export default FormPFB
