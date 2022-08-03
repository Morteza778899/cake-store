import styled from "styled-components";
import Cards from "./Cards";
import Slider from "./Slider";

const Section = styled.section`
  width: 100%;
  position: relative;
`;

const Home = () => {

  return (
    <>
      <Section >
        <Slider />
        <Cards />
      </Section>
    </>
  );
};
export default Home;
