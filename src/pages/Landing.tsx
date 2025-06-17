import { Box, Grid, GridItem } from "@chakra-ui/react";
import NavBar from "./NavBar";
import HomeSection from "./HomeSection";
import AboutSection from "./AboutSection";
import ServicesSection from "./ServicesSection";
import ContactUsSection from "./ContactUsSection";
import Footer from "./Footer";

const Landing = () => {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main" "footer"`,
        lg: `"nav" "main" "footer"`,
      }}
      templateRows="auto 1fr auto"
      minH="100vh"
    >
      {/* Navbar */}
      <GridItem area="nav">
        <NavBar />
      </GridItem>

      {/* Main content */}
      <GridItem area="main" overflow="auto">
        <HomeSection />
        <AboutSection />
        <ServicesSection />
        <ContactUsSection />
      </GridItem>

      {/* Footer */}
      <GridItem area="footer">
        <Footer />
      </GridItem>
    </Grid>
  );
};

export default Landing;
