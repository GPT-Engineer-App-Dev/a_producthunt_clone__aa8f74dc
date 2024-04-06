import React from "react";
import { Box, Container, Heading, Stack, Input, InputGroup, InputLeftElement, Button, Text, Image, List, ListItem, Flex, IconButton, useColorMode, useColorModeValue, Spacer, VStack } from "@chakra-ui/react";
import { FaSearch, FaSun, FaMoon, FaArrowUp, FaComment, FaPlus } from "react-icons/fa";

const Index = () => {
  const { toggleColorMode } = useColorMode();
  const formBackground = useColorModeValue("gray.100", "gray.700");

  const products = [
    // Mock products data
    { id: 1, name: "Product 1", description: "Amazing product that will change your life!", upvotes: 120 },
    { id: 2, name: "Product 2", description: "Incredible innovation for modern living.", upvotes: 85 },
    { id: 3, name: "Product 3", description: "The future of technology today.", upvotes: 256 },
  ];

  return (
    <Container maxW="container.xl" p={4}>
      <Flex justifyContent="space-between" mb={6}>
        <Heading as="h1">ProductHunt Clone</Heading>
        <Button onClick={toggleColorMode}>{useColorModeValue(<FaMoon />, <FaSun />)}</Button>
      </Flex>
      <Stack spacing={4} mb={6}>
        <InputGroup>
          <InputLeftElement pointerEvents="none" children={<FaSearch color="gray.300" />} />
          <Input placeholder="Search for products" />
        </InputGroup>
        <Button leftIcon={<FaPlus />} colorScheme="pink">
          Add Product
        </Button>
      </Stack>
      <VStack spacing={8}>
        <List spacing={3}>
          {products.map((product) => (
            <ListItem key={product.id} p={5} shadow="md" borderWidth="1px" borderRadius="md" bg={formBackground}>
              <Flex align="center">
                <Box flexShrink={0}>
                  <Image borderRadius="md" boxSize="100px" src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxwcm9kdWN0fGVufDB8fHx8MTcxMjM4Mzg4N3ww&ixlib=rb-4.0.3&q=80&w=1080" alt={product.name} mr={4} />
                </Box>
                <Box flex="1">
                  <Heading size="md" fontWeight="bold">
                    {product.name}
                  </Heading>
                  <Text mt={2}>{product.description}</Text>
                </Box>
                <Spacer />
                <Stack direction="row" align="center">
                  <IconButton size="sm" colorScheme="pink" aria-label={`Upvote ${product.name}`} icon={<FaArrowUp />} />
                  <Text>{product.upvotes}</Text>
                  <IconButton size="sm" colorScheme="gray" aria-label={`Comments on ${product.name}`} icon={<FaComment />} />
                </Stack>
              </Flex>
            </ListItem>
          ))}
        </List>
      </VStack>
    </Container>
  );
};

export default Index;
