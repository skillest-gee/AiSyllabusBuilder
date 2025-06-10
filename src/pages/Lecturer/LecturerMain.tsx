// src/pages/Lecturer/LecturerDashboard.tsx

import {
  Box,
  Heading,
  SimpleGrid,
  Card,
  CardHeader,
  CardBody,
  Text,
  Button,
  VStack,
  useColorModeValue,
} from "@chakra-ui/react";

const LecturerMain = () => {
  const cardBg = useColorModeValue("white", "gray.700");

  return (
    <Box p={6}>
      <Heading size="lg" mb={6}>
        Welcome, Lecturer!
      </Heading>

      {/* Quick Access Cards */}
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={6} mb={8}>
        <Card bg={cardBg} shadow="md">
          <CardHeader>
            <Heading size="md">Scheduled Lectures</Heading>
          </CardHeader>
          <CardBody>
            <Text>View or manage your upcoming lectures.</Text>
            <Button mt={2} colorScheme="teal" size="sm">
              Manage Lectures
            </Button>
          </CardBody>
        </Card>

        <Card bg={cardBg} shadow="md">
          <CardHeader>
            <Heading size="md">Courses</Heading>
          </CardHeader>
          <CardBody>
            <Text>Manage the courses you're teaching.</Text>
            <Button mt={2} colorScheme="teal" size="sm">
              Go to Courses
            </Button>
          </CardBody>
        </Card>

        <Card bg={cardBg} shadow="md">
          <CardHeader>
            <Heading size="md">Assignments</Heading>
          </CardHeader>
          <CardBody>
            <Text>Create, view or grade assignments.</Text>
            <Button mt={2} colorScheme="teal" size="sm">
              View Assignments
            </Button>
          </CardBody>
        </Card>
      </SimpleGrid>

      {/* Secondary Info */}
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
        <Card bg={cardBg} shadow="md">
          <CardHeader>
            <Heading size="md">Notifications</Heading>
          </CardHeader>
          <CardBody>
            <VStack align="start" spacing={2}>
              <Text>- Assignment submitted by Student A</Text>
              <Text>- Lecture rescheduled successfully</Text>
            </VStack>
          </CardBody>
        </Card>

        <Card bg={cardBg} shadow="md">
          <CardHeader>
            <Heading size="md">Profile & Settings</Heading>
          </CardHeader>
          <CardBody>
            <Text>Manage your account and preferences.</Text>
            <Button mt={2} colorScheme="teal" size="sm">
              Edit Profile
            </Button>
          </CardBody>
        </Card>
      </SimpleGrid>
    </Box>
  );
};

export default LecturerMain;
