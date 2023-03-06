import React from "react";
import {Link} from 'react-router-dom'
import {
  VStack,
  HStack,
  Text,
  Spacer,
  Button
} from "@chakra-ui/react";
import "./Signup.css";
import { useSelector } from "react-redux";
import { useNavigate } from 'react-router';

export const Signup_Welcome = () => {
    const username = useSelector((store)=>store.auth.username)
    const navigate = useNavigate()
    const signupWelcomeRedirect = () =>{
      navigate(-3)
    }
  return (
    <div>
      <div className="loginNavbar">
       
        
        <div></div>
      </div>
      <div className="loginContent">
        <VStack justify="center" pt="2em" width="30%" m="auto">
          <Text as="b" fontSize="40px" mb="0.7em">
            Welcome {username}
          </Text>
          <HStack py="0.8em" width='30%' margin="auto">
            <Link to="/signup">
              <Button color="white" margin="auto"  backgroundColor="blue" padding="20px" fontSize="20px" borderRadius="10px"> 
                Continue
              </Button>
              </Link>
              <Spacer />
          </HStack>
        </VStack>
      </div>
    </div>
  );
};
