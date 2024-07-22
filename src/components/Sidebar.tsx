import  { useState } from 'react';
import { Box, Text, VStack, Flex, Image } from "@chakra-ui/react";
import { FaRegHeart } from "react-icons/fa";
import { GoHome } from "react-icons/go";
import { LiaSearchSolid } from "react-icons/lia";
import { VscFeedback } from "react-icons/vsc";
import { VscSignOut } from "react-icons/vsc";
import { IoPersonOutline } from "react-icons/io5";
import { Link, useLocation } from "react-router-dom";

function Sidebar() {
    const location = useLocation();
    const [selected, setSelected] = useState(location.pathname);

    const handleSelect = (path: string) => {
        setSelected(path);
    };

    return (
        <Box w="286px" h="695px" backgroundColor="#005B96">
            <Flex display="grid">
                <Image
                    src='/src/assets/elitecv-high-resolution-logo-white-transparent (5).png'
                    w={190} p="20px" ml="auto" mr="auto" mt={8}
                />
                <Flex>
                    <VStack align="start" spacing={5} color="white" ml={6} mt="150px">
                        <Flex alignItems="center" ml={5} mt={-100}>
                            <GoHome />
                            <Box ml={2}>
                                <NavItem label="Dashboard" path="/Dashboard" selected={selected} onSelect={handleSelect} />
                            </Box>
                        </Flex>
                        <Flex alignItems="center" ml={5}>
                            <LiaSearchSolid />
                            <Box ml={2}>
                                <NavItem label="Offres d'emplois" path="/Offres" selected={selected} onSelect={handleSelect} />
                            </Box>
                        </Flex>
                        <Flex alignItems="center" ml={5}>
                            <VscFeedback />
                            <Box ml={2}>
                                <NavItem label="Entretiens" path="/Entretien" selected={selected} onSelect={handleSelect} />
                            </Box>
                        </Flex>
                        <Flex alignItems="center" ml={5}>
                            <FaRegHeart />
                            <Box ml={2}>
                                <NavItem label="Recommendations" path="/Reccomendation" selected={selected} onSelect={handleSelect} />
                            </Box>
                        </Flex>
                        <VStack mt={290} spacing={-6}>
                            <Flex alignItems="center" ml={5} mt="-65px">
                                <VscSignOut />
                                <Box ml={2}>
                                    <NavItem label="Déconnexion" path="/Logout" selected={selected} onSelect={handleSelect} />
                                </Box>
                            </Flex>
                            <Flex alignItems="center" ml={5} mt="-72px">
                                <IoPersonOutline />
                                <Box ml={2} >
                                    <NavItem label="Profil" path="/Profile" selected={selected} onSelect={handleSelect} />
                                </Box>
                            </Flex>
                        </VStack>
                    </VStack>
                </Flex>
            </Flex>
        </Box>
    );
}

const NavItem = ({ label, path, selected, onSelect }: { label: string, path: string, selected: string, onSelect: (path: string) => void }) => (
    <Link to={path} onClick={() => onSelect(path)}>
        <Box
            borderRadius="md"
            padding="5px"
            backgroundColor={selected === path ? "whiteAlpha.300" : "transparent"}
            _hover={{ backgroundColor: "whiteAlpha.200" }}
            cursor="pointer"
            w={150}
        >
            <Text fontSize="md">{label}</Text>
        </Box>
    </Link>
);

export default Sidebar;
