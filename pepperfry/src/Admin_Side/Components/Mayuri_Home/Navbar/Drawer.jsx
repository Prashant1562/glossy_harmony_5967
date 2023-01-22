import {
    Drawer,
    DrawerBody,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Button,
  } from '@chakra-ui/react'
  import React from "react"
  import { useDisclosure } from '@chakra-ui/react'

const Drawer_1=() =>{
    const [size, setSize] = React.useState('')
    const { isOpen, onOpen, onClose } = useDisclosure()
  
    const handleClick = (newSize) => {
      setSize(newSize)
      onOpen()
    }
  
    const sizes = ['lg']
  
    return (
      <>
        {sizes.map((size) => (
          <Button backgroundColor={"white"}
            onClick={() => handleClick(size)}
            key={size}
           
          ><img src="https://ii1.pepperfry.com/images/svg/icon-cart-21.svg" alt="" /></Button>
        ))}
  
        <Drawer onClose={onClose} isOpen={isOpen} size={size}>
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>{`${size} drawer contents`}</DrawerHeader>
            <DrawerBody>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Consequat nisl vel pretium lectus quam id. Semper quis lectus
                nulla at volutpat diam ut venenatis. Dolor morbi non arcu risus
                quis varius quam quisque. Massa ultricies mi quis hendrerit dolor
                magna eget est lorem. Erat imperdiet sed euismod nisi porta.
                Lectus vestibulum mattis ullamcorper velit.
              </p>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </>
    )
  }

  export default Drawer_1;