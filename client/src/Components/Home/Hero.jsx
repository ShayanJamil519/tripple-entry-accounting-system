import {
  Container,
  Stack,
  Flex,
  Box,
  Heading,
  Text,
  Button,
  Image,
} from "@chakra-ui/react";

const Hero = () => {
  return (
    <Container minW={"100%"} paddingX={{ base: "1em", md: "5em" }}>
      <Stack
        align={"center"}
        spacing={{ base: 8, md: 5 }}
        py={{ base: 20, md: 28 }}
        direction={{ base: "column", md: "row" }}
      >
        <Stack flex={1} spacing={{ base: 5, md: 5 }}>
          <Heading
            lineHeight={1.1}
            fontWeight={600}
            fontSize={{ base: "6xl", sm: "4xl", lg: "6xl" }}
          >
            <Text
              textColor="#335e60"
              fontSize="80px"
              fontFamily="Lobster Two"
              as={"span"}
              position={"relative"}
              _after={{
                content: "''",
                width: "full",
                height: "30%",
                position: "absolute",
                bottom: 1,
                left: 0,
                bg: "#43a2a7",
                zIndex: -1,
              }}
            >
              Blockchain based,
            </Text>
            <br />
            <Text
              fontFamily="Lobster Two"
              fontSize="50px"
              as={"span"}
              color={"#43a2a7"}
            >
              Triple Entry Accounting System
            </Text>
          </Heading>
          <Text fontFamily="poppins" color={"gray.400"}>
            Welcome to the future of accounting with our revolutionary Triple
            Entry Accounting System! Say goodbye to the limitations of
            traditional double-entry accounting and embrace a new era of
            transparency, security, and efficiency. Our cutting-edge platform
            introduces a groundbreaking third entry, providing an immutable and
            tamper-proof record of every financial transaction
          </Text>
          <Stack
            spacing={{ base: 4, sm: 6 }}
            direction={{ base: "column", sm: "row" }}
          >
            <Button
              rounded={"full"}
              fontFamily="poppins"
              size={"lg"}
              fontWeight={"normal"}
              px={6}
              bg={"#43a2a7"}
              textColor={"white"}
              _hover={{ bg: "#2f7c81" }}
            >
              Get started
            </Button>
            <Button
              rounded={"full"}
              size={"lg"}
              fontWeight={"normal"}
              px={6}
              fontFamily="poppins"
            >
              How It Works
            </Button>
          </Stack>
        </Stack>
        <Flex
          flex={1}
          justify={"center"}
          align={"center"}
          position={"relative"}
          w={"full"}
        >
          <Box
            position={"relative"}
            height={"420px"}
            rounded={"2xl"}
            boxShadow={"sm"}
            width={"full"}
            overflow={"hidden"}
          >
            <Image
              alt={"Hero Image"}
              align={"center"}
              w={"100%"}
              h={"100%"}
              src={"/hero__image.png"}
            />
          </Box>
        </Flex>
      </Stack>
    </Container>
  );
};

export default Hero;
