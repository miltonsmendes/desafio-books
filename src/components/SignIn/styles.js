import styled from "styled-components";

import BackgrounImage from "../../images/background.png";
import LogoImage from "../../images/logo.svg";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100vh;
  padding-left: 115px;
  background: var(--background-light) url(${BackgrounImage}) no-repeat center;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;
  margin-bottom: 50px;
`;

export const Logo = styled.div`
  width: 104px;
  height: 36px;
  background: url(${LogoImage}) no-repeat center;
`;

export const Title = styled.div`
  color: var(--text-light);
  font-family: Heebo;
  font-size: 28px;
  font-weight: 300;
  text-align: left;
`;

export const ContainerInputs = styled.div``;

export const SignInInput = styled.div`
  position: relative;

  width: 368px;
  height: 60px;
  border-radius: 4px;
  background: var(--background-dark);
  margin-bottom: 16px;
  padding: 8px 16px;

  display: flex;
  flex-direction: column;
  justify-content: center;

  label {
    color: var(--text-light);
    opacity: 50%;

    font-family: Heebo;
    font-size: 12px;
    font-weight: 400;
    line-height: 16px;
    text-align: left;
  }

  input {
    all: unset;
    color: var(--text-light);
    opacity: 1;
    font-family: Heebo;
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    text-align: left;
  }
`;

export const ConfirmButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  position: absolute;
  right: 12px;
  top: 12px;

  width: 85px;
  height: 36px;
  border-radius: 44px;

  color: var(--text-pink);
  background: var(--background-light);

  font-family: Heebo;
  font-size: 1rem;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: 0em;
`;
