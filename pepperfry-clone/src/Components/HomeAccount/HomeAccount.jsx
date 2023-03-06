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
          borderRadius="20px"
          height="28px"
          marginLeft="10px"
        >
          {login}
        </Button>
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent p="100px" margin="auto" width="40%">
            
            <ModalCloseButton />
            <ModalBody>
              <VStack alignItems="center">
                <Button
                  onClick={onClose}
                  w="100%"
                  backgroundColor="orange"
                  color="white"
                  _hover={{ bg: "#5b9be9" }}
                  height="30px"
                >
                  <Link as={ReachLink} to="/login">
                    Sign in
                  </Link>
                </Button>
                <Box width="100%" backgroundColor="pink" border="1px solid red" margin="auto" textAlign="center">
                <ReachLink to="/signup" onClick={onClose}>
                  
                  <Text color="#0f5bb9" as="b" fontSize="30px" textAlign="center">
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
