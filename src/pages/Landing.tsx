import { Grid, GridItem } from "@chakra-ui/react";
import NavBar from "./NavBar";
import HomeSection from "./HomeSection";
import AboutSection from "./AboutSection";
import ServicesSection from "./ServicesSection";
import ContactSection from "./ContactSection";

const Landing = () => {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav" "main"`,
      }}
      templateRows="auto 1fr"
      minH="100vh"
    >
      {/* Navbar */}
      <GridItem area="nav">
        <NavBar />
      </GridItem>

      {/* Main content */}
      <GridItem area="main">
        <HomeSection />
        <AboutSection />
        <ServicesSection />
        <ContactSection />
      </GridItem>
    </Grid>
  );
};

export default Landing;
