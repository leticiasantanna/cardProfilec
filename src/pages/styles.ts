import styled from "styled-components";

export const Container = styled.div`
  font-family: "Ubuntu";
  background: linear-gradient(150deg, #8c1656, #000000);
  height: 150vh;

  header {
    text-align: center;
  }

  .explorer {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 70px;
  }

  .photo {
    position: absolute;
    border-radius: 50%;
    width: 150px;
    height: 150px;
    border: 4px solid #8c1656;
  }

  .description {
    text-align: center;
    margin-top: none;
  }

  h1 {
    font-size: 1.5rem;
  }

  p {
    font-size: 0.85rem;
  }
`;
