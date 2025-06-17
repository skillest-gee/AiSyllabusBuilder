import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Card,
  CardBody,
  CardHeader,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack,
  Text,
  Textarea,
  useDisclosure,
  useToast,
  VStack,
} from "@chakra-ui/react";

type Assignment = {
  id: string; // unique id for assignment
  title: string;
  description: string;
  dueDate: string;
  fileName?: string; // optional attached file name by lecturer
};

type Submission = {
  file?: File | null;
  comment?: string;
  submittedAt: string;
};

const LOCAL_STORAGE_ASSIGNMENTS_KEY = "assignments";
const LOCAL_STORAGE_SUBMISSIONS_KEY = "submissions";

const StudentAssignments = () => {
  const [assignments, setAssignments] = useState<Assignment[]>([]);
  const [selectedAssignment, setSelectedAssignment] =
    useState<Assignment | null>(null);
  const [submissionFile, setSubmissionFile] = useState<File | null>(null);
  const [comment, setComment] = useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();

  // Submissions stored as: { [assignmentId: string]: Submission }
  const [submissions, setSubmissions] = useState<Record<string, Submission>>(
    {}
  );

  useEffect(() => {
    // Load assignments from localStorage or fallback to mock data
    const savedAssignments = localStorage.getItem(
      LOCAL_STORAGE_ASSIGNMENTS_KEY
    );
    if (savedAssignments) {
      setAssignments(JSON.parse(savedAssignments));
    } else {
      // Mock data if none stored
      const mockData: Assignment[] = [
        {
          id: "1",
          title: "Intro to React",
          description: "Build a simple React component",
          dueDate: "2025-07-01",
          fileName: "react-specs.pdf",
        },
        {
          id: "2",
          title: "CSS Flexbox",
          description: "Create a responsive layout using Flexbox",
          dueDate: "2025-07-10",
        },
      ];
      setAssignments(mockData);
      localStorage.setItem(
        LOCAL_STORAGE_ASSIGNMENTS_KEY,
        JSON.stringify(mockData)
      );
    }

    // Load submissions
    const savedSubs = localStorage.getItem(LOCAL_STORAGE_SUBMISSIONS_KEY);
    if (savedSubs) {
      setSubmissions(JSON.parse(savedSubs));
    }
  }, []);

  const handleOpenSubmit = (assignment: Assignment) => {
    setSelectedAssignment(assignment);
    setSubmissionFile(null);
    setComment("");
    onOpen();
  };

  const handleSubmit = () => {
    if (!selectedAssignment) return;

    if (!submissionFile) {
      toast({
        title: "Submission error",
        description: "Please select a file to submit.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    const newSubmission: Submission = {
      file: submissionFile,
      comment,
      submittedAt: new Date().toISOString(),
    };

    const updatedSubs = {
      ...submissions,
      [selectedAssignment.id]: newSubmission,
    };

    setSubmissions(updatedSubs);
    localStorage.setItem(
      LOCAL_STORAGE_SUBMISSIONS_KEY,
      JSON.stringify(updatedSubs)
    );

    toast({
      title: "Assignment submitted",
      description: `You submitted "${selectedAssignment.title}" successfully.`,
      status: "success",
      duration: 3000,
      isClosable: true,
    });

    onClose();
  };

  return (
    <Box p={6}>
      <Heading mb={6}>My Assignments</Heading>

      <VStack spacing={6} align="stretch">
        {assignments.map((assignment) => {
          const submitted = submissions[assignment.id];
          return (
            <Card key={assignment.id} shadow="md" p={4}>
              <CardHeader>
                <Heading size="md">{assignment.title}</Heading>
                <Text fontSize="sm" color="gray.500">
                  Due: {assignment.dueDate}
                </Text>
              </CardHeader>
              <CardBody>
                <Text mb={2}>{assignment.description}</Text>
                {assignment.fileName && (
                  <Text mb={2} fontStyle="italic" color="gray.600">
                    Attachment: {assignment.fileName}
                  </Text>
                )}

                {submitted ? (
                  <>
                    <Text fontWeight="bold" color="green.600">
                      Submitted on:{" "}
                      {new Date(submitted.submittedAt).toLocaleString()}
                    </Text>
                    <Text>Comment: {submitted.comment || "No comment"}</Text>
                    <Text>
                      File: {submitted.file?.name || "File submitted"}
                    </Text>
                    <Button mt={2} onClick={() => handleOpenSubmit(assignment)}>
                      Update Submission
                    </Button>
                  </>
                ) : (
                  <Button
                    colorScheme="teal"
                    onClick={() => handleOpenSubmit(assignment)}
                  >
                    Submit Assignment
                  </Button>
                )}
              </CardBody>
            </Card>
          );
        })}
      </VStack>

      {/* Submission Modal */}
      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            Submit Assignment: {selectedAssignment?.title}
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Stack spacing={4}>
              <FormControl isRequired>
                <FormLabel>Upload File</FormLabel>
                <Input
                  type="file"
                  accept=".pdf,.doc,.docx,.txt,.zip"
                  onChange={(e) => {
                    const file = e.target.files?.[0] || null;
                    setSubmissionFile(file);
                  }}
                />
              </FormControl>

              <FormControl>
                <FormLabel>Comment (optional)</FormLabel>
                <Textarea
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  placeholder="Add any notes or comments"
                />
              </FormControl>
            </Stack>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="teal" mr={3} onClick={handleSubmit}>
              Submit
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

export default StudentAssignments;
