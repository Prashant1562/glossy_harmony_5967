import { Link as ReachLink } from "react-router-dom";
import React from "react";
import { useSelector } from "react-redux";
import { getAuth, signOut } from "firebase/auth";
import app from "../../Firebase/firebase";
import { useDispatch } from 'react-redux';
import {useNavigate} from 'react-router-dom'
import {
  Box,
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  VStack,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
 
  Text,
  useToast,
} from "@chakra-ui/react";
import { userSignout } from "../../Redux/AuthReducer/action";
import { loginRequest } from '../../Redux/AuthReducer/action';
import { getDataLocal } from "../LocalStorage/usernamePassword";

function Signout() {
  const localUser = getDataLocal('userDetails')
  const toast = useToast()
    const { isOpen, onOpen, onClose } = useDisclosure();
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const userAuth = useSelector((store) => store.auth);
  const { isAuth, username } = userAuth;
  const auth = getAuth(app);
    const userFn = () => {
        signOut(auth)
          .then(() => {
            toast({
              title: 'Account signout successfully',
              status: 'success',
              position: "top",
              duration: 4000,
            })
            onClose()
            dispatch(loginRequest());
            dispatch(userSignout());
            if(window.location.pathname == '/checkout'){
              navigate('/')
            }
            navigate(window.location.pathname)
            localStorage.removeItem("userDetails")
          })
          .catch((error) => {
            // An error happened.
            toast({
              title: 'Something went wrong',
              status: 'error',
              duration: 4000,
            })
          });
      };
  return (
    <>
        <Button color='white'
          onClick={onOpen}
          backgroundColor="#333"
          _hover={{ bg: "color: rgb(92, 92, 92)" }}
        >
          {localUser.email}
        </Button>
        <Modal isOpen={isOpen} onClose={onClose} width="30%">
          <ModalOverlay />
          <ModalContent p="50px" width="50%" margin="auto">
            <ModalHeader backgroundColor="orange">{username}</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Box width="100%" backgroundColor="orange" margin="auto">
              <VStack alignItems="center">
                <ReachLink onClick={userFn}>
                  <Text color="#0f5bb9" as="b" fontSize="30px">
                    Log Out
                  </Text>
                </ReachLink>
              </VStack>
              </Box>
            </ModalBody>
          </ModalContent>
        </Modal>
      </>
  )
}

export default Signout