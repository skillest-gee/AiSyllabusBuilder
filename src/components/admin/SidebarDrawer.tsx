import {
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
} from "@chakra-ui/react";
import SidebarNav from "./SidebarNav";

interface SidebarDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

const SidebarDrawer = ({ isOpen, onClose }: SidebarDrawerProps) => {
  return (
    <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader>Menu</DrawerHeader>
        <DrawerBody>
          <SidebarNav />
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};

export default SidebarDrawer;
