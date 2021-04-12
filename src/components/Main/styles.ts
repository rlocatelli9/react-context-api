import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1500px;
  display: grid;
  grid-template-columns: minmax(160px, 1fr) 3fr;
  margin: 70px auto 20px auto;
  grid-template-areas:
    "sidebar content"
  ;
  grid-gap: 10px;

  @media (max-width: 1200px){
    grid-template-areas:
      "sidebar content"
    ;
  }

  @media (max-width: 760px){
    grid-template-columns: 100%;
    grid-template-areas:
      "sidebar"
      "content"
    ;
  }
`;


export const Content = styled.main`
  grid-area: content;
  max-width: 100%;
  /* margin: 10px 0; */
  padding: 30px;
  background: white;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
  .featured {
    font-size: 0.875em;
    color: #b07dfb;
    max-width: 16em;
  }
  @media (max-width: 600px) {
    grid-template-columns: auto;
  }
  .col-wide {
    grid-column: 1 / -1;
  }
  .image1, .image2 {
    width: 500px;
    height: 300px;
  }
  .image1 {
    grid-row: span 2;
    align-self: end;
  }
  .image2 {
    align-self: end;
  }
  .mention,
  .attributes {
    align-self: start;
    padding: 30px;
    border-radius: 5px;
    box-shadow: 5px 5px 15px 0px rgba(44, 44, 44, 0.15);
    background: linear-gradient(135deg, #8844ee, #b07dfb);
  }
  .mention p {
    font-size: 1.5em;
    font-style: italic;
    text-align: center;
    max-width: 500px;
    margin: 0 auto;
    color: white;
  }
  .attributes li {
    color: white;
    font-family: Courier, monospace;
    font-size: 1.125em;
    padding: 15px;
  }
  .attributes li + li {
    border-top: 2px solid #b07dfb;
  }
  p {
    font-size: 1.2rem;
    line-height: 1.6rem;
    letter-spacing: -0.005em;
    color: rgba(0, 0, 0.7);
  }
`;

export const Aside = styled.aside`
  grid-area: announcement;
  background: #fafbfc;
  display: grid;
  align-content: start;
  padding: 30px;
  grid-gap: 30px;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
`;
