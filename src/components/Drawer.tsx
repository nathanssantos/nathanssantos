import {
  Drawer as ChakraDrawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  Icon,
  IconButton,
  useColorMode,
  useDisclosure,
} from '@chakra-ui/react';
import { RiMenuLine } from 'react-icons/ri';
import { Menu } from '.';

const Drawer = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode } = useColorMode();

  return (
    <>
      <IconButton
        variant='ghost'
        size='sm'
        aria-label='Menu'
        color={colorMode === 'dark' ? 'teal.500' : 'blue.500'}
        icon={<Icon as={RiMenuLine} w={4} h={4} />}
        onClick={onOpen}
      />
      <ChakraDrawer isOpen={isOpen} placement='left' onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent boxShadow='0px 8px 20px -2px rgba(0, 0, 0, 0.08)'>
          <DrawerCloseButton />
          <DrawerBody pt={8}>
            <Menu vertical />
          </DrawerBody>
        </DrawerContent>
      </ChakraDrawer>
    </>
  );
};

export default Drawer;
