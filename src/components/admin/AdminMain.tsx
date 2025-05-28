import React from "react";
import {
  Box,
  SimpleGrid,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Heading,
  VStack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

const statsData = [
  { label: "Total Courses", value: 24, change: "+5%" },
  { label: "Total Users", value: 1200, change: "+10%" },
  { label: "Generated Syllabi", value: 58, change: "+3%" },
];

const recentActivities = [
  "Created syllabus for AI Fundamentals",
  "Updated lecture plan for Data Structures",
  "User JohnDoe registered",
  "Course Machine Learning archived",
];

const syllabiList = [
  {
    id: 1,
    course: "AI Fundamentals",
    status: "Published",
    created: "2025-05-20",
  },
  { id: 2, course: "Data Structures", status: "Draft", created: "2025-05-18" },
  {
    id: 3,
    course: "Machine Learning",
    status: "Published",
    created: "2025-05-10",
  },
];

// Sample data for the chart
const chartData = [
  { name: "Jan", Courses: 4, Users: 300 },
  { name: "Feb", Courses: 7, Users: 450 },
  { name: "Mar", Courses: 6, Users: 500 },
  { name: "Apr", Courses: 10, Users: 700 },
  { name: "May", Courses: 12, Users: 900 },
];

const AdminMain: React.FC = () => {
  const bg = useColorModeValue("gray.100", "gray.700");
  const cardBg = useColorModeValue("white", "gray.800");

  return (
    <Box p={6} bg={bg} minH="100vh" overflowY="auto">
      <Heading mb={6}>Dashboard</Heading>

      {/* Stats cards */}
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={6} mb={8}>
        {statsData.map(({ label, value, change }) => (
          <Stat key={label} p={4} boxShadow="md" borderRadius="md" bg={cardBg}>
            <StatLabel>{label}</StatLabel>
            <StatNumber>{value}</StatNumber>
            <StatHelpText>{change} since last month</StatHelpText>
          </Stat>
        ))}
      </SimpleGrid>

      {/* Main grid with 3 columns on large screens */}
      <SimpleGrid columns={{ base: 1, lg: 3 }} spacing={8}>
        {/* Recent activity */}
        <Box bg={cardBg} p={4} borderRadius="md" boxShadow="md">
          <Heading size="md" mb={4}>
            Recent Activity
          </Heading>
          <VStack align="start" spacing={2}>
            {recentActivities.map((activity, i) => (
              <Text key={i} fontSize="sm">
                • {activity}
              </Text>
            ))}
          </VStack>
        </Box>

        {/* Syllabi table */}
        <Box
          bg={cardBg}
          p={4}
          borderRadius="md"
          boxShadow="md"
          overflowX="auto"
        >
          <Heading size="md" mb={4}>
            Recent Syllabi
          </Heading>
          <Table variant="simple" size="sm">
            <Thead>
              <Tr>
                <Th>ID</Th>
                <Th>Course</Th>
                <Th>Status</Th>
                <Th>Created</Th>
              </Tr>
            </Thead>
            <Tbody>
              {syllabiList.map(({ id, course, status, created }) => (
                <Tr key={id}>
                  <Td>{id}</Td>
                  <Td>{course}</Td>
                  <Td>{status}</Td>
                  <Td>{created}</Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </Box>

        {/* Chart */}
        <Box
          bg={cardBg}
          p={4}
          borderRadius="md"
          boxShadow="md"
          minH="250px"
          display="flex"
          flexDirection="column"
        >
          <Heading size="md" mb={4}>
            Monthly Stats
          </Heading>
          <ResponsiveContainer width="100%" height={180}>
            <BarChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="Courses" fill="#3182CE" />
              <Bar dataKey="Users" fill="#63B3ED" />
            </BarChart>
          </ResponsiveContainer>
        </Box>
      </SimpleGrid>
    </Box>
  );
};

export default AdminMain;
