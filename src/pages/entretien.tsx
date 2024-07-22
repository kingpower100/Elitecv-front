import { Box, Flex } from "@chakra-ui/react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/navbar";
import Tableau from "../components/tableau";

function Entretien() {
  return (
    <>
      <Flex minHeight="100vh" direction="column">
        <Navbar />
        <Flex flex="1">
        <Box  paddingLeft={0} boxShadow='md' marginTop="-80px">
            <Sidebar/>
        </Box>
          <Flex
            flex="1"
            justifyContent="center"
            alignItems="center"
            padding="4"
          >
            <Tableau />
          </Flex>
        </Flex>
      </Flex>
    </>
  );
}

export default Entretien;
