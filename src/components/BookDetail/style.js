import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 48px;
  gap: 2rem;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

export const Image = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 350px;
    height: 512px;
    object-fit: cover;
  }

  @media (max-width: 600px) {
    img {
      width: 240px;
      height: 350px;
      object-fit: cover;
    }
  }
`;

export const InfoContainer = styled.div`
  height: 520px;
  padding-right: 10px;

  overflow-y: auto;
  overflow-x: hidden;

  ::-webkit-scrollbar {
    width: 4px;
  }

  ::-webkit-scrollbar-track {
    background: var(--background-light);
  }

  ::-webkit-scrollbar-thumb {
    background: var(--text-pink-dark);
    border-radius: 30px;
  }
`;

export const Title = styled.div`
  font-family: Heebo;
  font-size: 28px;
  font-weight: 500;
  line-height: 40px;
  text-align: left;

  color: var(--text-dark);
`;

export const Author = styled.div`
  font-family: Heebo;
  font-size: 12px;
  font-weight: 400;
  line-height: 20px;
  text-align: left;

  margin-bottom: 2rem;

  color: var(--text-pink-dark);
`;

export const Informations = styled.div`
  margin-bottom: 2rem;
`;

export const InfoHeader = styled.div`
  font-family: Heebo;
  font-size: 12px;
  font-weight: 500;
  line-height: 20px;
  text-align: left;

  color: var(--text-dark);
  margin-bottom: 1rem;
`;

export const Info = styled.div`
  font-family: Heebo;
  font-size: 12px;
  font-weight: 500;
  line-height: 20px;
  text-align: left;

  color: var(--text-dark);
`;

export const InfoRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
`;

export const InfoDetail = styled.div`
  font-family: Heebo;
  font-size: 12px;
  font-weight: 400;
  line-height: 20px;
  text-align: right;

  color: var(--grey);
`;

export const BookReviewContainer = styled.div``;

export const Review = styled.div`
  font-family: Heebo;
  font-size: 12px;
  font-weight: 400;
  line-height: 20px;
  text-align: justify;

  color: var(--grey);
`;
