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
  useToast,
  VStack,
} from "@chakra-ui/react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Signup() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState<"student" | "lecturer">("student");

  const navigate = useNavigate();

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();

    // const handleSubmit = async (e: React.FormEvent) => {
    //   e.preventDefault();

    // Simulate saving to "fake database" (localStorage)
    const userData = {
      fullName,
      email,
      password,
      role,
    };
    // You could use fetch or axios to send the data to your backend here
    // Example:
    // await fetch("/api/signup", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify(formData),
    // });

    // Store under user's email key
    localStorage.setItem(`user:${email}`, JSON.stringify(userData));

    // Redirect to login
    navigate("/login");
  };
  return (
    <Box maxW="md" mx="auto" mt={12} p={6} boxShadow="md" borderRadius="lg">
      <Heading mb={4}>Create Account</Heading>
      <Text mb={6}>Fill in your details to start using AisyBallus.</Text>

      <form onSubmit={handleSignup}>
        <VStack spacing={4}>
          <FormControl isRequired>
            <FormLabel>Full Name</FormLabel>
            <Input
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              placeholder="John Doe"
            />
          </FormControl>

          <FormControl isRequired>
            <FormLabel>Email</FormLabel>
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="example@email.com"
            />
          </FormControl>

          <FormControl isRequired>
            <FormLabel>Password</FormLabel>
            <Input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
            />
          </FormControl>

          <FormControl isRequired>
            <FormLabel>Role</FormLabel>
            <Select
              value={role}
              onChange={(e) =>
                setRole(e.target.value as "student" | "lecturer")
              }
            >
              <option value="student">Student</option>
              <option value="lecturer">Lecturer</option>
            </Select>
          </FormControl>

          <Button type="submit" colorScheme="teal" width="full">
            Sign Up
          </Button>
        </VStack>
      </form>

      <Text mt={4} fontSize="sm">
        Already have an account?{" "}
        <Button
          variant="link"
          colorScheme="teal"
          onClick={() => navigate("/login")}
        >
          Log In
        </Button>
      </Text>
    </Box>
  );
}
