import {
  Box,
  Heading,
  Text,
  SimpleGrid,
  VStack,
  Card,
  CardHeader,
  CardBody,
  Button,
  useColorModeValue,
} from "@chakra-ui/react";

const StudentMain = () => {
  const cardBg = useColorModeValue("white", "gray.700");

  return (
    <>
      <Box p={6}>
        <Heading size="lg" mb={4}>
          Welcome Back, Student!
        </Heading>

        {/* Overview Cards */}
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={6} mb={8}>
          <Card bg={cardBg} shadow="md">
            <CardHeader>
              <Heading size="md">Upcoming Lectures</Heading>
            </CardHeader>
            <CardBody>
              <Text>View your upcoming scheduled classes.</Text>
              <Button mt={2} colorScheme="teal" size="sm">
                View
              </Button>
            </CardBody>
          </Card>

          <Card bg={cardBg} shadow="md">
            <CardHeader>
              <Heading size="md">My Courses</Heading>
            </CardHeader>
            <CardBody>
              <Text>Explore your enrolled subjects or modules.</Text>
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
              <Text>Check pending assignments or submissions.</Text>
              <Button mt={2} colorScheme="teal" size="sm">
                View Assignments
              </Button>
            </CardBody>
          </Card>
        </SimpleGrid>

        {/* Notifications and Profile Access */}
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
          <Card bg={cardBg} shadow="md">
            <CardHeader>
              <Heading size="md">Notifications</Heading>
            </CardHeader>
            <CardBody>
              <VStack align="start" spacing={2}>
                <Text>- New lecture added to your schedule</Text>
                <Text>- Assignment deadline approaching</Text>
              </VStack>
            </CardBody>
          </Card>

          <Card bg={cardBg} shadow="md">
            <CardHeader>
              <Heading size="md">Profile & Settings</Heading>
            </CardHeader>
            <CardBody>
              <Text>Update your account info and preferences.</Text>
              <Button mt={2} colorScheme="teal" size="sm">
                Edit Profile
              </Button>
            </CardBody>
          </Card>
        </SimpleGrid>
      </Box>
    </>
  );
};
export default StudentMain;
