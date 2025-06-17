// src/pages/Lecturer/LecturerSyllabusBuilder.tsx

import {
  Box,
  Heading,
  FormControl,
  FormLabel,
  Select,
  Textarea,
  Button,
  VStack,
  HStack,
  Input,
  useToast,
} from "@chakra-ui/react";
import { useState } from "react";

const LecturerSyllabusBuilder = () => {
  const [course, setCourse] = useState("");
  const [objective, setObjective] = useState("");
  const [topics, setTopics] = useState([""]);
  const toast = useToast();

  const handleTopicChange = (index: number, value: string) => {
    const updated = [...topics];
    updated[index] = value;
    setTopics(updated);
  };

  const addTopic = () => {
    setTopics([...topics, ""]);
  };

  const handleSubmit = () => {
    if (!course || !objective || topics.some((t) => !t.trim())) {
      toast({
        title: "Please fill all fields.",
        status: "warning",
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    // Simulated Save
    console.log("Saved Syllabus:", { course, objective, topics });
    toast({
      title: "Syllabus saved successfully.",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  };

  return (
    <Box p={6}>
      <Heading mb={6}>Build Syllabus</Heading>

      <VStack spacing={4} align="stretch">
        <FormControl>
          <FormLabel>Course</FormLabel>
          <Select
            placeholder="Select course"
            value={course}
            onChange={(e) => setCourse(e.target.value)}
          >
            <option value="CS101">CS101 - Intro to CS</option>
            <option value="MATH202">MATH202 - Discrete Math</option>
          </Select>
        </FormControl>

        <FormControl>
          <FormLabel>Learning Objectives</FormLabel>
          <Textarea
            placeholder="Describe what students will learn..."
            value={objective}
            onChange={(e) => setObjective(e.target.value)}
          />
        </FormControl>

        <FormControl>
          <FormLabel>Weekly Topics</FormLabel>
          {topics.map((topic, i) => (
            <Input
              key={i}
              placeholder={`Topic ${i + 1}`}
              value={topic}
              onChange={(e) => handleTopicChange(i, e.target.value)}
              mb={2}
            />
          ))}
          <Button onClick={addTopic} size="sm" mt={1}>
            + Add Topic
          </Button>
        </FormControl>

        <HStack justify="flex-end">
          <Button colorScheme="teal" onClick={handleSubmit}>
            Save Syllabus
          </Button>
        </HStack>
      </VStack>
    </Box>
  );
};

export default LecturerSyllabusBuilder;
