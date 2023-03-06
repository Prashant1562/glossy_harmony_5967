import { Link as ReachLink } from "react-router-dom";
import React from "react";
import { useSelector } from "react-redux";
import { getAuth, signOut } from "firebase/auth";
import app from "../../Firebase/firebase";
import { useDispatch } from 'react-redux';
import {useNavigate} from 'react-router-dom'
import {
  Button,
  Box,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalFooter,
  VStack,
  ModalOverlay,
  useDisclosure,
  Link,
  Text,
  useToast,
} from "@chakra-ui/react";

import { userSignout } from "../../Redux/AuthReducer/action";
import { loginRequest } from '../../Redux/AuthReducer/action';
import Signout from "../Signout/Signout";
import { getDataLocal } from "../LocalStorage/usernamePassword";


const HomeAccount = ({ login }) => {
  const toast = useToast()
    const dispatch = useDispatch()
    const navigate = useNavigate()
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);
  const userAuth = useSelector((store) => store.auth);
  const { isAuth, username } = userAuth;
  const localUser = getDataLocal('userDetails')
  const auth = getAuth(app);
  const userFn = () => {
    signOut(auth)
      .then(() => {
        toast({
          title: 'Account signout successfully',
          status: 'success',
          duration: 2000,
        })
        onClose()
        dispatch(loginRequest());
        dispatch(userSignout());
        navigate('/')
      })
      .catch((error) => {
        // An error happened.
      });
  };
  if(!localUser) {
    return (
      <>
        <Button 
          onClick={onOpen}
          backgroundColor="white"
          color="black"
          border="2px solid black"
          borderRadius="10px"
          height="28px"
          marginLeft="10px"
        >
          {login}
        </Button>
        <Modal isOpen={isOpen} onClose={onClose} width="30%">
          <ModalOverlay />
          <ModalContent p="70px" width="30%" margin="auto" backgroundColor="white" marginTop="50px" boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px">
            <ModalCloseButton width="20px" marginLeft="330px" backgroundColor="grey" border="none" color="white" padding="5px" marginBottom="20px"/>
            <ModalBody>
              <VStack alignItems="center">
                <Button
                  onClick={onClose}
                  w="100%"
                  backgroundColor="orange"
                  color="white"
                  _hover={{ bg: "#5b9be9" }}
                  fontSize="20px"
                  padding="10px"
                >
                  <Link as={ReachLink} to="/login">
                    Sign in
                  </Link>
                </Button>
                <Box width="100%" backgroundColor="#3333ff" margin="auto" textAlign="center" padding="10px">
                <ReachLink to="/signup" onClick={onClose}>
                  
                  <Text color="white" as="b" fontSize="20px" textAlign="center">
                    Create a free account
                  </Text>
                  
                </ReachLink>
                </Box>
              </VStack>
            </ModalBody>
          </ModalContent>
        </Modal>
       
      </>
    );
  }
  else{
    return(

        <Signout />
    )
  }
};

export default HomeAccount;
