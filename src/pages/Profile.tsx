import Sidebar from "../components/Sidebar";
import Navbar from "../components/navbar";
import { Flex,Box } from "@chakra-ui/react";

function Profile() {
  return (
    <>
    <Flex display="grid"  >
      <Navbar/>
      <Box  paddingLeft={0} boxShadow='md' marginTop="-80px">
          <Sidebar/>
      </Box>
    </Flex>
  </>
  )
}

export default Profile