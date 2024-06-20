import { Container, VStack, Text, Heading, Box, Button, Image } from "@chakra-ui/react";
import { FaPlay, FaPause, FaForward, FaBackward } from "react-icons/fa";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Heading as="h1" size="2xl" mb={6}>Music Streaming Service</Heading>
        <Box boxSize="sm" mb={6}>
          <Image src="/images/music-placeholder.png" alt="Music Placeholder" />
        </Box>
        <Text fontSize="xl" mb={6}>Stream your favorite music anytime, anywhere.</Text>
        <VStack spacing={4} direction="row">
          <Button leftIcon={<FaBackward />} colorScheme="teal" variant="solid">Previous</Button>
          <Button leftIcon={<FaPlay />} colorScheme="teal" variant="solid">Play</Button>
          <Button leftIcon={<FaPause />} colorScheme="teal" variant="solid">Pause</Button>
          <Button leftIcon={<FaForward />} colorScheme="teal" variant="solid">Next</Button>
        </VStack>
        <VStack spacing={4} direction="row" mt={6}>
          <Button as={Link} to="/create-playlist" colorScheme="teal" variant="outline">Create Playlist</Button>
          <Button as={Link} to="/view-playlists" colorScheme="teal" variant="outline">View Playlists</Button>
        </VStack>
      </VStack>
    </Container>
  );
};

export default Index;