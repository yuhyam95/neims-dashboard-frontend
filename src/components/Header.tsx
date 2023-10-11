import { HStack, Text } from "@chakra-ui/react"
import ColorModeSwitch from "./ColorModeSwitch"

const Header = () => {
  return (
    <HStack justifyContent='space-between' padding='10px'>
        <Text fontSize='3xl' as='b'> NEIMS </Text>
        <ColorModeSwitch />
    </HStack>
  )
}

export default Header