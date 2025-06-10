import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Select,
  Stack,
  Text,
  useColorModeValue,
  useToast,
  VStack,
} from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate, Link as RouterLink } from "react-router-dom";
import { Link } from "@chakra-ui/react";
import { useAuth } from "@/context/AuthContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [selectedRole, setSelectedRole] = useState<"student" | "lecturer">(
    "student"
  );
  const bg = useColorModeValue("white", "gray.700");

  const { setRole } = useAuth();
  const navigate = useNavigate();
  const toast = useToast();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    // Optional: simulate API call
    if (email && password) {
      setRole(selectedRole); // Set role in AuthContext
      toast({
        title: `Logged in as ${selectedRole}`,
        status: "success",
        duration: 3000,
        isClosable: true,
      });

      // Redirect based on role
      navigate(`/${selectedRole}/dashboard`);
    } else {
      toast({
        title: "Missing fields",
        description: "Please enter both email and password",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  return (
    <Box
      maxW="md"
      mx="auto"
      mt={10}
      p={6}
      boxShadow="md"
      borderRadius="lg"
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Heading mb={6}>Login to AisyBallus</Heading>
      <form onSubmit={handleLogin}>
        <VStack spacing={4}>
          <FormControl isRequired>
            <FormLabel>Email</FormLabel>
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
            />
          </FormControl>

          <FormControl isRequired>
            <FormLabel>Password</FormLabel>
            <Input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
            />
          </FormControl>

          <FormControl isRequired>
            <FormLabel>Select Role</FormLabel>
            <Select
              value={selectedRole}
              onChange={(e) =>
                setSelectedRole(e.target.value as "student" | "lecturer")
              }
            >
              <option value="student">Student</option>
              <option value="lecturer">Lecturer</option>
            </Select>
          </FormControl>

          <Button type="submit" colorScheme="teal" width="full">
            Login
          </Button>
        </VStack>
      </form>

      <Text mt={4} textAlign="center">
        Don&apos;t have an account?{" "}
        <Button
          variant="link"
          colorScheme="teal"
          onClick={() => navigate("/signup")}
        >
          Sign Up
        </Button>
      </Text>
    </Box>
  );
};

export default Login;
