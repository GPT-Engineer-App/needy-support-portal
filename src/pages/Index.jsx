import { Container, Text, VStack, Heading, Box, Image, HStack, IconButton, Link } from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={4}>
      <VStack spacing={8} align="stretch">
        <Box textAlign="center">
          <Heading as="h1" size="2xl">
            Tauraro Foundation
          </Heading>
          <Text fontSize="lg" color="gray.600">
            Empowering Lives through Education, Healthcare, and Financial Support
          </Text>
        </Box>

        <Box>
          <Image src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxlZHVjYXRpb24lMjBzdXBwb3J0fGVufDB8fHx8MTcxNjI5OTkwMXww&ixlib=rb-4.0.3&q=80&w=1080" alt="Education Support" borderRadius="md" />
          <Heading as="h2" size="lg" mt={4}>
            Education
          </Heading>
          <Text>We provide educational resources and scholarships to underprivileged children to ensure they have access to quality education.</Text>
        </Box>

        <Box>
          <Image src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxoZWFsdGhjYXJlJTIwc3VwcG9ydHxlbnwwfHx8fDE3MTYyOTk5MDJ8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Healthcare Support" borderRadius="md" />
          <Heading as="h2" size="lg" mt={4}>
            Healthcare
          </Heading>
          <Text>Our healthcare programs focus on providing medical aid and health education to communities in need.</Text>
        </Box>

        <Box>
          <Image src="https://images.unsplash.com/photo-1459257831348-f0cdd359235f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxmaW5hbmNpYWwlMjBzdXBwb3J0fGVufDB8fHx8MTcxNjI5OTkwM3ww&ixlib=rb-4.0.3&q=80&w=1080" alt="Financial Support" borderRadius="md" />
          <Heading as="h2" size="lg" mt={4}>
            Financial Support
          </Heading>
          <Text>We offer financial assistance and training to help individuals and families achieve economic stability.</Text>
        </Box>

        <Box textAlign="center">
          <Heading as="h2" size="lg" mt={4}>
            Get Involved
          </Heading>
          <Text>Join us in making a difference. Your support can change lives.</Text>
        </Box>

        <HStack justify="center" spacing={4}>
          <Link href="https://facebook.com" isExternal>
            <IconButton aria-label="Facebook" icon={<FaFacebook />} size="lg" />
          </Link>
          <Link href="https://twitter.com" isExternal>
            <IconButton aria-label="Twitter" icon={<FaTwitter />} size="lg" />
          </Link>
          <Link href="https://instagram.com" isExternal>
            <IconButton aria-label="Instagram" icon={<FaInstagram />} size="lg" />
          </Link>
        </HStack>
      </VStack>
    </Container>
  );
};

export default Index;
