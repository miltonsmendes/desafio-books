import Book from '../../images/book.png';

import {
  Container,
  Image,
  ContainerInfo,
  ContainerTitle,
  Details,
  Title,
  Author,
} from "./styles";

export function BookCard() {
  return (
    <Container>
      <Image><img src={Book}/></Image>

      <ContainerInfo>
        <ContainerTitle>
          <Title>Crossing the Chasm</Title>
          <Author>Geoffrey A. Moore</Author>
        </ContainerTitle>

        <Details>
          <div>150 Paginas</div>
          <div>Editora Loyola</div>
          <div>Publicado em 2020</div>
        </Details>
      </ContainerInfo>
    </Container>
  );
}
