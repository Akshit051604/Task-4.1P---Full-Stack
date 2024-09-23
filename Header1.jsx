import React from "react";
import { Container,Image } from 'semantic-ui-react';
import bg1 from './Images/bg1.jpg'
const Mainimg = () => {
    return (
        <Container style={{ padding: '20px 0' }}>
          <Image src={bg1} fluid style={{ borderRadius: '10px' }}/>  
        </Container>
    );
};

export  default Mainimg;
