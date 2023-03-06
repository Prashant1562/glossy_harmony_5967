import React from "react";
import {Link} from 'react-router-dom'
import {
  VStack,
  HStack,
  Text,
  Spacer,
  Button
} from "@chakra-ui/react";
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
          <Text as="b" fontSize="4xl" mb="0.7em">
            Welcome {username}
          </Text>
          <HStack py="0.8em" width='100%'>
            <Link to="/signup">
              <Button color="#0f5bb8">
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
