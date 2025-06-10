import {
  Box,
  Heading,
  SimpleGrid,
  Text,
  Card,
  CardHeader,
  CardBody,
  Button,
  Stack,
  useColorModeValue,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  useDisclosure,
} from "@chakra-ui/react";
import { useState } from "react";

type Assignment = {
  title: string;
  course: string;
  dueDate: string;
  description: string;
  file?: File | null;
};

const LecturerAssignments = () => {
  const cardBg = useColorModeValue("white", "gray.700");
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [assignments, setAssignments] = useState<Assignment[]>([
    {
      title: "Assignment 1: Intro to AI",
      course: "AI 101",
      dueDate: "2025-06-15",
      description: "Write a short essay on the applications of AI.",
    },
    {
      title: "Assignment 2: NLP Basics",
      course: "AI 102",
      dueDate: "2025-06-20",
      description: "Implement a simple tokenizer in Python.",
    },
  ]);

  const [form, setForm] = useState<Assignment>({
    title: "",
    course: "",
    dueDate: "",
    description: "",
    file: null,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddAssignment = () => {
    setAssignments([...assignments, form]);
    setForm({ title: "", course: "", dueDate: "", description: "" });
    onClose();
  };

  return (
    <Box p={6}>
      <Heading size="lg" mb={4}>
        Assignments
      </Heading>

      <Button onClick={onOpen} colorScheme="teal" mb={6}>
        Create Assignment
      </Button>

      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
        {assignments.map((assignment, idx) => (
          <Card key={idx} bg={cardBg} shadow="md">
            <CardHeader>
              <Heading size="md">{assignment.title}</Heading>
            </CardHeader>
            <CardBody>
              <Stack spacing={2}>
                <Text>
                  <strong>Course:</strong> {assignment.course}
                </Text>
                <Text>
                  <strong>Due:</strong> {assignment.dueDate}
                </Text>
                <Text>
                  <strong>Description:</strong> {assignment.description}
                </Text>
                <Button colorScheme="teal" size="sm">
                  View Submissions
                </Button>
                {assignment.file && (
                  <Text>
                    <strong>Attachment:</strong> {assignment.file.name}
                  </Text>
                )}
              </Stack>
            </CardBody>
          </Card>
        ))}
      </SimpleGrid>

      {/* Create Assignment Modal */}
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create Assignment</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Stack spacing={4}>
              <FormControl isRequired>
                <FormLabel>Title</FormLabel>
                <Input
                  name="title"
                  value={form.title}
                  onChange={handleChange}
                  placeholder="Enter assignment title"
                />
              </FormControl>
              <FormControl isRequired>
                <FormLabel>Course</FormLabel>
                <Input
                  name="course"
                  value={form.course}
                  onChange={handleChange}
                  placeholder="Enter course name"
                />
              </FormControl>
              <FormControl isRequired>
                <FormLabel>Due Date</FormLabel>
                <Input
                  name="dueDate"
                  type="date"
                  value={form.dueDate}
                  onChange={handleChange}
                />
              </FormControl>
              <FormControl isRequired>
                <FormLabel>Description</FormLabel>
                <Textarea
                  name="description"
                  value={form.description}
                  onChange={handleChange}
                  placeholder="Enter assignment instructions or questions..."
                />
              </FormControl>
              <FormControl>
                <FormLabel>Attachment</FormLabel>
                <Input
                  type="file"
                  accept=".pdf,.doc,.docx"
                  onChange={(e) => {
                    const file = e.target.files?.[0];
                    setForm((prev) => ({ ...prev, file }));
                  }}
                />
              </FormControl>
            </Stack>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="teal" mr={3} onClick={handleAddAssignment}>
              Save
            </Button>
            <Button variant="ghost" onClick={onClose}>
              Cancel
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default LecturerAssignments;
