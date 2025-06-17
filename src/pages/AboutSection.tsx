import {
  Box,
  Container,
  Heading,
  SimpleGrid,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { motion } from "framer-motion";

// Define card data
const aboutCards = [
  {
    title: "Data-driven",
    text: "Trains on thousands of accredited curricula to suggest optimal topic sequences.",
  },
  {
    title: "Fully Customizable",
    text: "Re-generate or tweak any week, objective, assessment or reading list.",
  },
  {
    title: "Export Anywhere",
    text: "One-click export to DOCX, PDF, or your LMS (Canvas, Moodle, Blackboard, …).",
  },
];

// Framer Motion animation variants
const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const AboutSection = () => {
  const cardBg = useColorModeValue("gray.100", "gray.700");

  return (
    <Box
      as="section"
      id="about"
      py={16}
      px={4}
      pt="100px"
      scrollMarginTop="100px"
    >
      <Container maxW="6xl">
        <Heading textAlign="center" mb={6}>
          About Us
        </Heading>
        <Text textAlign="center" maxW="2xl" mx="auto" mb={12}>
          AisyBallus uses state-of-the-art language models to turn course goals
          and time-frames into publish-ready syllabi—saving lecturers hours of
          prep work.
        </Text>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={6}>
          {aboutCards.map((card, index) => (
            <Box
              as={motion.div}
              key={index}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={cardVariants}
              bg={cardBg}
              p={6}
              rounded="xl"
              boxShadow="md"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 20px rgba(0, 0, 0, 0.15)",
                transition: { type: "spring", stiffness: 300 },
              }}
            >
              <Heading as="h3" size="md" mb={2}>
                {card.title}
              </Heading>
              <Text>{card.text}</Text>
            </Box>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default AboutSection;
