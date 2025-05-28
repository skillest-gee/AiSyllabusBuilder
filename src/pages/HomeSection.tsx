import {
  Flex,
  Stack,
  Heading,
  Button,
  Box,
  Image,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import unipic from "../assets/unipic.jpg";

const HomeSection = () => {
  const textColor = useColorModeValue("gray.700", "gray.200");

  return (
    <>
      <Flex
        direction={{ base: "column", md: "row" }}
        align="center"
        justify="space-between"
        px={{ base: 4, md: 20 }}
        py={{ base: 8, md: 20 }}
        gap={{ base: 8, md: 12 }}
      >
        {/* Text section */}
        <Stack spacing={6} flex="1" textAlign={{ base: "center", md: "left" }}>
          <Heading fontSize={{ base: "2xl", md: "4xl" }}>
            Build Smarter Syllabi with AI
          </Heading>
          <Text fontSize={{ base: "sm", md: "md" }} color={textColor}>
            Automate curriculum planning, optimize your teaching schedule, and
            simplify your educational workflow.
          </Text>
          <Button
            size="lg"
            colorScheme="teal"
            width={{ base: "full", md: "auto" }}
          >
            Get Started
          </Button>
        </Stack>

        {/* Image section */}
        <Box flex="1" textAlign="center">
          <Image
            src={unipic}
            alt="AI Illustration"
            maxH={{ base: "200px", md: "300px" }}
            mx="auto"
          />
        </Box>
      </Flex>
    </>
  );
};

export default HomeSection;
