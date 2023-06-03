import {
  Avatar,
  Box,
  Button,
  Flex,
  HStack,
  Heading,
  Spacer,
  Text,
} from "@chakra-ui/react";

export default function Navbar() {
  return (
    <Flex
      as="nav"
      minWidth="max-content"
      p="10px"
      m="20px"
      alignItems="center"
      bg="rgba(0, 0, 0, 0)"
      backdropFilter="blur(10px)"
      pos="sticky"
      top={0}
      zIndex={1}
      borderRadius="30px"
    >
      <Heading as="h1" pl={5}>
        IKEA Deals
      </Heading>
      <Spacer />
      <HStack spacing="20px" p="5px">
        {/* <Box bg="gray.200" p="10px">
          M
        </Box> */}
        {/* <Text>mario@nenninja.dev</Text> */}
        <Box bg="white" p="10px" borderRadius="full">
          <Avatar size="sm" />
        </Box>
      </HStack>
    </Flex>
  );
}
