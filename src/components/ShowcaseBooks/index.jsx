import { useState } from "react";
import { BookCard } from "../BookCard";
import { BookDetail } from "../BookDetail";

import Modal from "react-modal";
import { NavLink } from "react-router-dom";
import { useAuth } from "../../hooks/auth";

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

Modal.setAppElement("#root");

export function ShowcaseBooks() {
  const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
  const [selectedBook, setSelectedBook] = useState({});

  const { booksList, user } = useAuth();

  function handleLogOut() {
    localStorage.removeItem("@desafioBooks");
  }

  function hadleOpenProductDetailModal(book) {
    setIsProductDetailOpen(true);
    setSelectedBook(book.id);
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
          <User>Bem vindo, {user.name}!</User>
          <NavLink to="/">
            <div onClick={handleLogOut}>
              <SignOutIcon />
            </div>
          </NavLink>
        </ContainerProfileUser>
      </Header>

      <ContainerBooksCards>
        {booksList &&
          booksList.map((book) => {
            return (
              <div
                key={book.id}
                onClick={() => hadleOpenProductDetailModal(book)}
              >
                <BookCard info={book} />
              </div>
            );
          })}
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
        <BookDetail info={selectedBook} />
      </Modal>
    </Container>
  );
}
