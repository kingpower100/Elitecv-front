import "./res.css";
import React, { useState } from "react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Input,
  InputGroup,
  InputRightElement,
  Box,
  Button,
  Stack,
  ChakraProvider,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Link,
  Divider,
  Text,
} from "@chakra-ui/react";
import {
  CheckIcon,
  ChevronDownIcon,
  DeleteIcon,
  ExternalLinkIcon,
  SearchIcon,
} from "@chakra-ui/icons";
import { FiHeart } from "react-icons/fi";
import { FaHeart } from "react-icons/fa";

const Tableau = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterOption, setFilterOption] = useState("");

  const [data, setData] = useState([
    {
      date: "01/01/2022",
      candidat: "Foulen BenFouleni",
      position: "Software Engineer",
      cv: "link_to_cv1",
      favorite: false,
    },
    {
      date: "01/01/2022",
      candidat: "Blabla BenFF",
      position: "Data Scientist",
      cv: "link_to_cv2",
      favorite: true,
    },
    {
      date: "01/01/2022",
      candidat: "Foulena BenFoula",
      position: "Product Manager",
      cv: "link_to_cv3",
      favorite: false,
    },
  ]);

  const handleSearch = (option?: string) => {
    setFilterOption(option || "");
  };
  const handleChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setSearchTerm(event.target.value);
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  const toggleFavorite = (index: number) => {
    setData((prevData) =>
      prevData.map((item, idx) =>
        idx === index ? { ...item, favorite: !item.favorite } : item
      )
    );
  };

  const renderRows = () => {
    let filteredData = data;
    if (searchTerm) {
      const normalizedSearchTerm = searchTerm.toLowerCase();
      filteredData = data.filter((item) =>
        item.candidat.toLowerCase().includes(normalizedSearchTerm)
      );
    }

    return filteredData.map((item, index) => (
      <Tr key={item.candidat}>
        <Td>{item.date}</Td>
        <Td>{item.candidat}</Td>
        <Td>{item.position}</Td>
        <Td isNumeric>
          <Link href={item.cv} isExternal>
            <ExternalLinkIcon boxSize={4} />
          </Link>
        </Td>
        <Td isNumeric>
          <Box
            as={item.favorite ? FaHeart : FiHeart}
            boxSize={4}
            color={item.favorite ? "red.400" : "gray.400"}
            cursor="pointer"
            onClick={() => toggleFavorite(index)}
          />
        </Td>
      </Tr>
    ));
  };

  return (
    <ChakraProvider>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        backgroundColor="white"
        w="1190px"
        marginLeft="20px"
        marginTop="-120px"
      >
        <Text
          fontSize="2xl"
          marginBottom="2"
          marginTop="-2"
          marginLeft="4"
          textAlign="left"
        >
          Liste des Candidats
        </Text>

        <Divider
          width="90%"
          borderWidth="very very thin"
          borderColor="grey"
          alignContent="center"
          marginLeft="10"
        />

        <Stack direction="row" spacing={400} marginTop={4}>
          <Menu>
            <MenuButton
              as={Button}
              backgroundColor="white"
              boxShadow="md"
              rightIcon={<ChevronDownIcon />}
              width="300px"
              height="40px"
              fontFamily="montserrat,sans serif"
              fontWeight="30"
              marginLeft="4"
            >
              Filtres
            </MenuButton>
            <MenuList>
              <MenuItem onClick={() => handleSearch("None")} color="grey.50">
                Rien
              </MenuItem>
              <MenuItem onClick={() => handleSearch("Favorite")} color="grey.50" fontSize="md">
                Favoris
              </MenuItem>
            </MenuList>
          </Menu>
          <InputGroup
            backgroundColor="white"
            boxShadow="lg"
            width="300px"
            height="30px"
            marginRight="4"
          >
            <InputRightElement pointerEvents="none" children={<SearchIcon color="gray.300" />} />
            <Input
              type="text"
              placeholder="Search ..."
              value={searchTerm}
              onChange={handleChange}
              onKeyPress={handleKeyPress}
              pr="4.5rem"
            />
          </InputGroup>
        </Stack>
        <TableContainer
          marginTop={4}
          className="customTable"
          color="grey.400"
          backgroundColor="white"
          boxShadow="md"
          marginLeft="2"
          marginRight="2"
          sx={{
            fontFamily: "Montserrat ExtraLight, sans-serif",
          }}
        >
          <Table>
            <Thead>
              <Tr>
                <Th>Date</Th>
                <Th>Candidat</Th>
                <Th>Position</Th>
                <Th isNumeric>CV</Th>
                
              </Tr>
            </Thead>
            <Tbody>{renderRows()}</Tbody>
          </Table>
        </TableContainer>


      </Box>
    </ChakraProvider>
  );
};

export default Tableau;
