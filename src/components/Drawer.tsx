import {
  IconButton,
  useDisclosure,
  Drawer as ChakraDrawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerBody,
  DrawerFooter,
  Icon,
} from '@chakra-ui/react';
import { RiMenuLine } from 'react-icons/ri';
import { Menu } from '.';

const Drawer = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <IconButton
        variant='ghost'
        size='sm'
        aria-label='Menu'
        icon={<Icon as={RiMenuLine} />}
        onClick={onOpen}
      />
      <ChakraDrawer isOpen={isOpen} placement='left' onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent boxShadow='0px 8px 20px -2px rgba(0, 0, 0, 0.08)'>
          <DrawerCloseButton />
          <DrawerBody>
            <Menu vertical />
          </DrawerBody>
        </DrawerContent>
      </ChakraDrawer>
    </>
  );
};

export default Drawer;
