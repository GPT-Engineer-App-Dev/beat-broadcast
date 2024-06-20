import { useState, useEffect } from "react";
import { Container, VStack, Heading, List, ListItem, Button, useToast } from "@chakra-ui/react";

const ViewPlaylists = () => {
  const [playlists, setPlaylists] = useState([]);
  const toast = useToast();

  useEffect(() => {
    const storedPlaylists = JSON.parse(localStorage.getItem("playlists")) || [];
    setPlaylists(storedPlaylists);
  }, []);

  const handleAddSong = (playlistIndex) => {
    const songName = prompt("Enter song name:");
    if (!songName) return;

    const updatedPlaylists = [...playlists];
    updatedPlaylists[playlistIndex].songs.push(songName);
    localStorage.setItem("playlists", JSON.stringify(updatedPlaylists));
    setPlaylists(updatedPlaylists);

    toast({
      title: "Song added to playlist.",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  };

  return (
    <Container centerContent>
      <VStack spacing={4} mt={10}>
        <Heading as="h2" size="xl">Your Playlists</Heading>
        <List spacing={3} width="100%">
          {playlists.map((playlist, index) => (
            <ListItem key={index} borderWidth="1px" borderRadius="lg" p={4} width="100%">
              <Heading as="h3" size="md">{playlist.name}</Heading>
              <Button mt={2} colorScheme="teal" onClick={() => handleAddSong(index)}>Add Song</Button>
              <List spacing={1} mt={2}>
                {playlist.songs.map((song, songIndex) => (
                  <ListItem key={songIndex}>{song}</ListItem>
                ))}
              </List>
            </ListItem>
          ))}
        </List>
      </VStack>
    </Container>
  );
};

export default ViewPlaylists;