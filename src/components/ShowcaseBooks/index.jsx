import { useState } from "react";
import { BookCard } from "../BookCard";
import { BookDetail } from "../BookDetail";
import Modal from "react-modal";

import {
  Container,
  Header,
  ContainerLogo,
  ContainerProfileUser,
  Logo,
  Title,
  User,
  SignOutIcon,
  ContainerBooksCards,
  ContainerPagination,
  Page,
  PageNavigationButtonLeft,
  PageNavigationButtonRight,
  CloseButton,
} from "./styles";

export function ShowcaseBooks() {
  const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);

  function hadleOpenProductDetailModal() {
    setIsProductDetailOpen(true);
  }

  function hadleCloseProductDetailModal() {
    setIsProductDetailOpen(false);
  }

  return (
    <Container>
      <Header>
        <ContainerLogo>
          <Logo />
          <Title>Books</Title>
        </ContainerLogo>

        <ContainerProfileUser>
          <User>Bem vindo, Milton!</User>
          <SignOutIcon />
        </ContainerProfileUser>
      </Header>

      <ContainerBooksCards>
        <div onClick={hadleOpenProductDetailModal}>
          <BookCard />
        </div>
        <div onClick={hadleOpenProductDetailModal}>
          <BookCard />
        </div>
        <div onClick={hadleOpenProductDetailModal}>
          <BookCard />
        </div>
        <div onClick={hadleOpenProductDetailModal}>
          <BookCard />
        </div>
        <div onClick={hadleOpenProductDetailModal}>
          <BookCard />
        </div>
        <div onClick={hadleOpenProductDetailModal}>
          <BookCard />
        </div>
        <div onClick={hadleOpenProductDetailModal}>
          <BookCard />
        </div>
        <div onClick={hadleOpenProductDetailModal}>
          <BookCard />
        </div>
        <div onClick={hadleOpenProductDetailModal}>
          <BookCard />
        </div>
        <div onClick={hadleOpenProductDetailModal}>
          <BookCard />
        </div>
        <div onClick={hadleOpenProductDetailModal}>
          <BookCard />
        </div>
        <div onClick={hadleOpenProductDetailModal}>
          <BookCard />
        </div>
      </ContainerBooksCards>

      <ContainerPagination>
        <Page>Página 1 de 100</Page>
        <PageNavigationButtonLeft />
        <PageNavigationButtonRight />
      </ContainerPagination>

      <Modal
        isOpen={isProductDetailOpen}
        onRequestClose={hadleCloseProductDetailModal}
        overlayClassName="react-modal-overlay"
        className="react-modal-content"
      >
        <div onClick={hadleCloseProductDetailModal}>
          <CloseButton />
        </div>
        <BookDetail />
      </Modal>
    </Container>
  );
}
