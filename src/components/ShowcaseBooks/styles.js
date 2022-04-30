import styled from "styled-components";

import BooksBackgrounImage from "../../images/books-background.png";
import LogoImage from "../../images/logo-dark.svg";
import LogoOutIcon from "../../images/logout-icon.svg";
import PrevIcon from "../../images/previous-icon.svg";
import NextIcon from "../../images/next-icon.svg";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background: url(${BooksBackgrounImage}) no-repeat center;
  background-size: cover;

  padding: 0 115px;
  margin-bottom: 1rem;

  @media (max-width: 600px) {
    padding: 16px;
    padding-top: 50px;
  }
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 42px;
`;

export const ContainerLogo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;
`;

export const Logo = styled.div`
  width: 104px;
  height: 36px;
  background: url(${LogoImage}) no-repeat center;
`;

export const Title = styled.div`
  color: var(--text-dark);
  font-family: Heebo;
  font-size: 28px;
  font-weight: 300;
  text-align: left;
`;

export const ContainerProfileUser = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  justify-content: center;
`;

export const User = styled.div`
  align-self: center;
  font-family: Heebo;
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  text-align: right;
`;

export const SignOutIcon = styled.div`
  width: 32px;
  height: 32px;
  background: url(${LogoOutIcon}) no-repeat center;
`;

export const ContainerBooksCards = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: space-between;

  margin-bottom: 1rem;

  @media (max-width: 600px) {
    justify-content: center;
  }
`;

export const ContainerPagination = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;

  @media (max-width: 600px) {
    justify-content: center;
  }
`;

export const Page = styled.div`
  margin-right: 1rem;
`;

export const PageNavigationButtonLeft = styled.div`
  width: 32px;
  height: 32px;
  background: url(${PrevIcon}) no-repeat center;
`;

export const PageNavigationButtonRight = styled.div`
  width: 32px;
  height: 32px;
  background: url(${NextIcon}) no-repeat center;
  margin-left: 8px;
`;
