import styled from "styled-components";

export const Container = styled.div`
  width: 272px;
  height: 160px;
  padding: 19px 16px;

  background: var(--background-light);
  box-shadow: 0px 6px 24px 0px var(--shadow);
  border-radius: 4px;

  display: flex;
  flex-direction: row;
  gap: 1rem;

  &:hover{
    box-shadow: 0px 16px 80px 0px var(--shadow-hover);
  }
`;

export const Image = styled.div`
  box-shadow: 0px 6px 9px 0px var(--shadow-image);
  /* position: relative; */

  img {
    width: 80px;
    height: 122px;
    object-fit: cover;
  }
`;

export const ContainerInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const ContainerTitle = styled.div``;

export const Details = styled.div`
  font-family: Heebo;
  font-size: 12px;
  font-weight: 400;
  line-height: 20px;
  text-align: left;

  color: #999999;
`;

export const Title = styled.div`
  font-family: Heebo;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;

  color: #333333;
`;

export const Author = styled.div`
  font-family: Heebo;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 20px;

  color: var(--text-pink-dark);
`;
