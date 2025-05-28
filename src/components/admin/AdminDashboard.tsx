import { Grid, GridItem, useColorModeValue } from "@chakra-ui/react";
import NavBar from "./NavBar";
import AdminMain from "./AdminMain";
import SidebarNav from "./SidebarNav";

const AdminDashboard: React.FC = () => {
  const mainBg = useColorModeValue("gray.100", "gray.800");
  const asideBg = useColorModeValue("gray.50", "gray.700");

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
      gridTemplateRows="auto 1fr"
      minH="100vh"
    >
      <GridItem
        area="nav"
        position="sticky"
        top="0"
        zIndex="sticky"
        bg="transparent"
        boxShadow="sm"
      >
        <NavBar />
      </GridItem>
      <GridItem
        area="aside"
        bg={asideBg}
        display={{ base: "none", lg: "block" }}
        overflowY="auto"
        height="calc(100vh - 64px)" // adjust based on your navbar height
      >
        <SidebarNav />
      </GridItem>
      <GridItem
        area="main"
        bg={mainBg}
        overflowY="auto"
        height="calc(100vh - 64px)" // same adjustment
        p={4}
      >
        <AdminMain />
      </GridItem>
    </Grid>
  );
};

export default AdminDashboard;
