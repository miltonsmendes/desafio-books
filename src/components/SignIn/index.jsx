import {useState} from 'react';
import { useAuth } from "../../hooks/auth";

import { NavLink } from 'react-router-dom';

import {
  Container,
  Header,
  Logo,
  Title,
  ContainerInputs,
  SignInInput,
  ConfirmButton,
} from "./styles";


export function SignIn() {
  const { handleSignIn } = useAuth();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  return (
    <Container>
      <Header>
        <Logo />
        <Title>Books</Title>
      </Header>

      <ContainerInputs>
        <SignInInput>
          <label>E-mail</label>
          <input name="email" type="text" value={email} onChange={e => setEmail(e.target.value)}></input>
        </SignInInput>
        <SignInInput>
          <label>Senha</label>
          <input name="password" type="password" value={password} onChange={e => setPassword(e.target.value)}></input>
          <NavLink to="/home"><ConfirmButton onClick={() => handleSignIn(email, password)}>Entrar</ConfirmButton></NavLink>
          
        </SignInInput>
      </ContainerInputs>
    </Container>
  );
}
