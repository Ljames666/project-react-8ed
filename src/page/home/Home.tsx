import styled from 'styled-components';
import MyCard from './components/card/MyCard';

const HomeStyle = styled.div`
  background-color: black;
  color: white;
  h1:hover {
    color: red;
  }
  p {
    font-size: 20px;
  }
`;

function Home() {
  return (
    <HomeStyle>
      <h1>titulo</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet explicabo distinctio facilis
        laboriosam corrupti veritatis quaerat similique hic aut, harum, repudiandae error
        consectetur saepe est dolore repellat officia fugiat. Sunt.
      </p>
      <div>
        <MyCard
          title="James Bond"
          url="https://observatoriodocinema.uol.com.br/wp-content/uploads/2022/06/daniel-craig-james-bond-1200x900-1.jpg"
          text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet explicabo distinctio facilis
        laboriosam corrupti veritatis quaerat similique hic aut, harum, repudiandae error"
        />
        <MyCard
          title="teste"
          url="https://observatoriodocinema.uol.com.br/wp-content/uploads/2022/06/daniel-craig-james-bond-1200x900-1.jpg"
          text="Lorem ipsum dolor sit amet"
        />
      </div>
    </HomeStyle>
  );
}

export default Home;
