
import { Flex, Text, IconButton, Avatar, Wrap, WrapItem } from "@chakra-ui/react";
import { ChevronDownIcon,BellIcon  } from '@chakra-ui/icons';

const Navbar = () => {
    return (
        <Flex justifyContent="flex-end"
         alignItems="center"
          w="1249px" h="80px"  
          bg="rgba(255, 255, 255, 1)" 
          boxShadow='md'
          ml="285px"
          >
    
            <Flex alignItems="center" justifyContent="space-between" >
                <IconButton
                    aria-label="notifications"
                    icon={<BellIcon/>}
                    bg="none"
                    _hover={{bg: 'trasparent' , borderColor:'transparent'}}
                    color="gray"
                    size="lg"
                    
                /> 
                 <Wrap margin={3}>
                    < WrapItem>
                        <Avatar size="sm" bg="gray.500"  src='https://bit.ly/broken-link' />{' '}
                    </WrapItem> 
                </Wrap>
                 <Text marginRight="20px" justifyContent="center">Ahmed Sonbol
                    <IconButton 
                    aria-label="menu button"
                    icon={<ChevronDownIcon/>}
                    bg="none"
                    _hover={{bg: 'trasparent' , borderColor:'transparent'}}
                    >

                    </IconButton>
                 </Text>
            </Flex>
        </Flex>
    );

};

export default Navbar;