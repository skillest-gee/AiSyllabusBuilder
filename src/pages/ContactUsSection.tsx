import {
  Box,
  Heading,
  Text,
  SimpleGrid,
  useColorModeValue,
  Input,
  Textarea,
  Button,
  VStack,
  HStack,
  Link,
  Icon,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaTwitter,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";

const MotionBox = motion.create(Box);

const ContactUsSection = () => {
  const bg = useColorModeValue("gray.50", "gray.700");
  const cardBg = useColorModeValue("white", "gray.800");
  const textColor = useColorModeValue("gray.700", "gray.200");

  return (
    <Box
      as="section"
      id="contact"
      py={16}
      px={4}
      bg={bg}
      pt="100px"
      scrollMarginTop="100px"
    >
      <Box maxW="5xl" mx="auto" textAlign="center" mb={10}>
        <Heading fontSize={{ base: "2xl", md: "4xl" }} mb={4}>
          Contact Us
        </Heading>
        <Text fontSize={{ base: "sm", md: "md" }} color={textColor}>
          Have questions? We’d love to hear from you.
        </Text>
      </Box>

      <SimpleGrid
        columns={{ base: 1, md: 2 }}
        spacing={10}
        maxW="6xl"
        mx="auto"
      >
        {/* Contact Info Cards */}
        <VStack align="start" spacing={6}>
          {[
            {
              icon: FaEnvelope,
              label: "Email",
              value: "support@aisyballus.io",
              href: "mailto:support@aisyballus.io",
            },
            {
              icon: FaPhone,
              label: "Phone",
              value: "+1 (555) 123-4567",
              href: "tel:+15551234567",
            },
            {
              icon: FaMapMarkerAlt,
              label: "Address",
              value: "42 EduTech Way, Boston MA 02115",
              href: "#",
            },
          ].map((item, index) => (
            <MotionBox
              key={index}
              p={5}
              rounded="lg"
              shadow="md"
              bg={cardBg}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
              w="100%"
            >
              <HStack spacing={4}>
                <Icon as={item.icon} boxSize={6} color="teal.500" />
                <Box>
                  <Text fontWeight="bold">{item.label}</Text>
                  <Link href={item.href} color={textColor} fontSize="sm">
                    {item.value}
                  </Link>
                </Box>
              </HStack>
            </MotionBox>
          ))}

          {/* Social Icons */}
          <HStack spacing={4} pt={4}>
            <Link href="https://twitter.com" isExternal>
              <Icon as={FaTwitter} boxSize={5} color="teal.400" />
            </Link>
            <Link href="https://linkedin.com" isExternal>
              <Icon as={FaLinkedin} boxSize={5} color="teal.400" />
            </Link>
            <Link href="https://github.com" isExternal>
              <Icon as={FaGithub} boxSize={5} color="teal.400" />
            </Link>
          </HStack>
        </VStack>

        {/* Contact Form */}
        <MotionBox
          p={6}
          bg={cardBg}
          rounded="lg"
          shadow="md"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          <VStack spacing={4}>
            <Input placeholder="Your Name" />
            <Input placeholder="Your Email" type="email" />
            <Textarea placeholder="Your Message" rows={5} />
            <Button colorScheme="teal" w="full">
              Send Message
            </Button>
          </VStack>
        </MotionBox>
      </SimpleGrid>
    </Box>
  );
};

export default ContactUsSection;
