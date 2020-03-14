import styled from "styled-components";

export default styled.div`
  margin: 0 auto;
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(1, 1fr);
  max-width: 14rem;
  @media (min-width: 29rem) {
    max-width: 29rem;
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: 44rem) {
    max-width: 44rem;
    grid-template-columns: repeat(3, 1fr);
  }
  @media (min-width: 59rem) {
    max-width: 59rem;
    grid-template-columns: repeat(4, 1fr);
  }
  @media (min-width: 74rem) {
    max-width: 74rem;
    grid-template-columns: repeat(5, 1fr);
  }
`;
