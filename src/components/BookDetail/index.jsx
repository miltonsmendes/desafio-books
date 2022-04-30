import BookImage from '../../images/book-detail.png';

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

export function BookDetail() {
  return (
    <Container>
      <Image><img src={BookImage} /></Image>

      <InfoContainer>
        <Title>Change By Design Second line exampl...</Title>
        <Author>Tim Brown, Julie Zhuo, Fried Maximiilian</Author>
        <Informations>
          <InfoHeader>INFORMAÇÕES</InfoHeader>

          <InfoRow>
            <Info>Páginas</Info>
            <InfoDetail>304 páginas</InfoDetail>
          </InfoRow>

          <InfoRow>
            <Info>Editora</Info>
            <InfoDetail>Editora Loyola</InfoDetail>
          </InfoRow>

          <InfoRow>
            <Info>Publicação</Info>
            <InfoDetail>2020</InfoDetail>
          </InfoRow>

          <InfoRow>
            <Info>Idioma</Info>
            <InfoDetail>Inglês</InfoDetail>
          </InfoRow>

          <InfoRow>
            <Info>Título Original</Info>
            <InfoDetail>Change By Design</InfoDetail>
          </InfoRow>

          <InfoRow>
            <Info>ISBN-10</Info>
            <InfoDetail>0062856626</InfoDetail>
          </InfoRow>

          <InfoRow>
            <Info>ISBN-13</Info>
            <InfoDetail>978-0062856623</InfoDetail>
          </InfoRow>
        </Informations>

        <BookReviewContainer>
          <InfoHeader>RESENHA DA EDITORA</InfoHeader>
          <Review>
            The subject of “design thinking” is the rage at
            business schools, throughout corporations, and increasingly in the
            popular press—due in large part to the work of IDEO, a leading
            design firm, and its celebrated CEO, Tim Brown, who uses this book
            to show how the techniques and strategies of design belong at every
            level of business.
            The subject of “design thinking” is the rage at
            business schools, throughout corporations, and increasingly in the
            popular press—due in large part to the work of IDEO, a leading
            design firm, and its celebrated CEO, Tim Brown, who uses this book
            to show how the techniques and strategies of design belong at every
            level of business.
          </Review>
        </BookReviewContainer>
      </InfoContainer>
    </Container>
  );
}
