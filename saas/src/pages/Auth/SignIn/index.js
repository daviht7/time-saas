import React from 'react';

import { Container,SignInForm } from '../styles';
import Button from '~/styles/components/Button'

export default function SignIn() {
  return (
    <Container>
      <SignInForm onSubmit={() => {}}>
        <h1>Boas Vindas</h1>

        <label htmlFor="email">E-mail</label>
        <input type="email" id="email" name="email" />

        <label htmlFor="password">Senha</label>
        <input type="password" id="password" name="password" />

        <Button size="big" type="submit">Entrar</Button>
      </SignInForm>
    </Container>
  );
}
