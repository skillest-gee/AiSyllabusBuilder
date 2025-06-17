import {
  Box,
  Heading,
  Text,
  VStack,
  SimpleGrid,
  useColorModeValue,
} from "@chakra-ui/react";
import { FaBrain, FaProjectDiagram, FaUsers, FaChartBar } from "react-icons/fa";
import { motion } from "framer-motion";

const MotionBox = motion.create(Box);

const services = [
  {
    title: "AI Syllabus Generator",
    description: "Create a 14-week syllabus in under 60 seconds.",
    icon: FaBrain,
  },
  {
    title: "Outcome Alignment",
    description:
      "Map every activity and assessment to Bloom’s taxonomy levels.",
    icon: FaProjectDiagram,
  },
  {
    title: "Collaboration Mode",
    description:
      "Invite teaching assistants to comment and suggest edits in real-time.",
    icon: FaUsers,
  },
  {
    title: "Analytics Dashboard",
    description:
      "Track time-on-topic, assessment balance and workload distribution.",
    icon: FaChartBar,
  },
];

const Services = () => {
  const titleColor = useColorModeValue("teal.600", "teal.300");
  const cardBg = useColorModeValue("gray.50", "gray.700");

  return (
    <Box
      as="section"
      id="services"
      py={{ base: 10, md: 20 }}
      px={{ base: 4, md: 10 }}
      pt="100px"
      scrollMarginTop="100px"
    >
      <Box maxW="6xl" mx="auto">
        <Heading
          as="h2"
          size="xl"
          textAlign="center"
          mb={10}
          color={titleColor}
        >
          What We Offer
        </Heading>

        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
          {services.map((service, index) => (
            <MotionBox
              key={index}
              p={6}
              borderWidth="1px"
              borderRadius="xl"
              bg={cardBg}
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <VStack align="start" spacing={3}>
                <Box as={service.icon} w={6} h={6} color={titleColor} />
                <Text fontWeight="bold" fontSize="lg" color={titleColor}>
                  {service.title}
                </Text>
                <Text fontSize="sm">{service.description}</Text>
              </VStack>
            </MotionBox>
          ))}
        </SimpleGrid>
      </Box>
    </Box>
  );
};

export default Services;
