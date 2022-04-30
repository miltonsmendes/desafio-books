import { useEffect, useState } from "react";
import api from "../../services/api";

import BookImage from "../../images/book-detail.png";

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
  const [data, setData] = useState([]);
  const bookId = props.info;

  useEffect(() => {
    async function getData() {
      const token =
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2MWM5YzI5MGNjNDk4YjVjMDg4NDVlMGEiLCJ2bGQiOjE2NTEzNTM0Njk2MzksImlhdCI6MTY1MTM1NzA2OTYzOX0.JUUtnJRoR5OJ7YyFWjO-p5xQjAAeCPD0KJu89bY6awY";

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
        <img src={data.imageUrl} />
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
