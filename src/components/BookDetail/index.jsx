import { useEffect, useState } from "react";
import api from "../../services/api";

import {
  Container,
  Image,
  InfoContainer,
  Title,
  Author,
  Informations,
  InfoHeader,
  Info,
  InfoRow,
  InfoDetail,
  BookReviewContainer,
  Review,
} from "./style";

export function BookDetail(props) {
  const authorization = localStorage.getItem('@desafioBooks');

  console.log('authorization', authorization);

  const [data, setData] = useState([]);
  const bookId = props.info;

  useEffect(() => {
    async function getData() {
      const token = authorization;
      const response = await api.get(`/books/${bookId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setData(response.data);
    }

    getData();
  }, []);

  console.log("modal data", data);

  return (
    <Container>
      <Image>
        <img alt="book"  src={data.imageUrl} />
      </Image>

      <InfoContainer>
        <Title>{data.title}</Title>
        <Author>
          {data.authors && `${data.authors}. `}
        </Author>
        <Informations>
          <InfoHeader>INFORMAÇÕES</InfoHeader>

          <InfoRow>
            <Info>Páginas</Info>
            <InfoDetail>{data.pageCount} páginas</InfoDetail>
          </InfoRow>

          <InfoRow>
            <Info>Editora</Info>
            <InfoDetail>Editora {data.publisher}</InfoDetail>
          </InfoRow>

          <InfoRow>
            <Info>Publicação</Info>
            <InfoDetail>{data.published}</InfoDetail>
          </InfoRow>

          <InfoRow>
            <Info>Idioma</Info>
            <InfoDetail>{data.language}</InfoDetail>
          </InfoRow>

          <InfoRow>
            <Info>Título Original</Info>
            <InfoDetail>{data.title}</InfoDetail>
          </InfoRow>

          <InfoRow>
            <Info>ISBN-10</Info>
            <InfoDetail>{data.isbn10}</InfoDetail>
          </InfoRow>

          <InfoRow>
            <Info>ISBN-13</Info>
            <InfoDetail>{data.isbn13}</InfoDetail>
          </InfoRow>
        </Informations>

        <BookReviewContainer>
          <InfoHeader>RESENHA DA EDITORA</InfoHeader>
          <Review>
          {data.description}
          </Review>
        </BookReviewContainer>
      </InfoContainer>
    </Container>
  );
}
