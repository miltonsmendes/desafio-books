import { useState, useEffect } from "react";
import { BookCard } from "../BookCard";
import { BookDetail } from "../BookDetail";

import { useAuth } from "../../hooks/auth";
import api from "../../services/api";
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

Modal.setAppElement('#root');

export function ShowcaseBooks() {
  const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
  const [data, setData] = useState([]);
  const [selectedBook, setSelectedBook] = useState({});

  const { user } = useAuth();

  useEffect(() => {
    async function getData() {
      const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2MWM5YzI5MGNjNDk4YjVjMDg4NDVlMGEiLCJ2bGQiOjE2NTEzNTM0Njk2MzksImlhdCI6MTY1MTM1NzA2OTYzOX0.JUUtnJRoR5OJ7YyFWjO-p5xQjAAeCPD0KJu89bY6awY";
      
      const response = await api.get("/books?page=1$&amount=25", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setData(response.data.data);
    }

    getData();
  }, []);

  function hadleOpenProductDetailModal(book) {
    setIsProductDetailOpen(true);
    setSelectedBook(book.id)

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
        {data.map(book => {
          return (
            <div key={book.id} onClick={() => hadleOpenProductDetailModal(book)}>
              <BookCard info={book}/>
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
        <BookDetail info={selectedBook}/>
      </Modal>
    </Container>
  );
}
