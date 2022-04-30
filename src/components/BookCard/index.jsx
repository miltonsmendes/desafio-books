import Book from "../../images/book.png";

import {
  Container,
  Image,
  ContainerInfo,
  ContainerTitle,
  Details,
  Title,
  Author,
} from "./styles";

export function BookCard(props) {
  const bookInfo = props.info;
  return (
    <Container>
      <Image>
        <img alt="book" src={bookInfo.imageUrl} />
      </Image>

      <ContainerInfo>
        <ContainerTitle>
          <Title>{bookInfo.title}</Title>
          <Author>
            {
              (bookInfo.authors).length > 1 ? bookInfo.authors[0] : <div>{bookInfo.authors[0]}, ...</div>
            }
          </Author>
        </ContainerTitle>

        <Details>
          <div>{bookInfo.pageCount} Páginas</div>
          <div>Editora {bookInfo.publisher}</div>
          <div>Publicado em {bookInfo.published}</div>
        </Details>
      </ContainerInfo>
    </Container>
  );
}
