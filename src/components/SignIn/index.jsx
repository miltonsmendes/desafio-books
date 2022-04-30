import { useAuth } from "../../hooks/auth";

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

  return (
    <Container>
      <Header>
        <Logo />
        <Title>Books</Title>
      </Header>

      <ContainerInputs>
        <SignInInput>
          <label>E-mail</label>
          <input name="email" type="text"></input>
        </SignInInput>
        <SignInInput>
          <label>Senha</label>
          <input name="password" type="password"></input>
          <ConfirmButton onClick={handleSignIn}>Entrar</ConfirmButton>
        </SignInInput>
      </ContainerInputs>
    </Container>
  );
}
