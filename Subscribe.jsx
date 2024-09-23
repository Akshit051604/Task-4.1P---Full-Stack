import React from 'react';
import { Form, Input, Button, Container } from 'semantic-ui-react';

const Subscribe = () => (
  <Container textAlign='center' style={{ marginTop: '50px' }}>
    <h3>SIGN UP TO KNOW MORE</h3>
    <Form>
      <Form.Field inline>
        <Input placeholder='Enter your email' />
        <Button primary>Subscribe</Button>
      </Form.Field>
    </Form>
  </Container>
);

export default Subscribe
