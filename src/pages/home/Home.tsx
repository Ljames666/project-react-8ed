import { useState } from 'react';
import { Link, Navigate, NavLink, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import MyCard from './components/card/MyCard';

const HomeStyle = styled.div`
  background-color: black;
  color: white;
  width: 100%;
  height: 100%;
  h1:hover {
    color: red;
  }
  p {
    font-size: 20px;
  }
`;

function Home() {
  const [theme, setTheme] = useState<string>('light');
  const navigate = useNavigate();
  const handleClick = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
  };
  const handleClick404 = () => {
    alert('executou uma função! quer ir pra 404');

    navigate('/gfgfgf');
  };

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
          header={
            <img
              src="https://th.bing.com/th/id/R.d0af5a2ad304527b88df0a8d996ff1f7?rik=F17v%2fr95aR8Hgw&pid=ImgRaw&r=0"
              alt="react"
            />
          }
          content={
            <>
              <h3>My Card com image</h3>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod illo modi commodi sed
                similique quisquam perferendis, repellat magni id exercitationem adipisci et
                obcaecati laborum labore unde facere neque ducimus? Ut!
              </p>
            </>
          }
          footer={<button disabled>IR</button>}
        />
      </div>
      <button onClick={handleClick404}>ih foi pra 404</button>
      <button onClick={handleClick}>trocar tema</button>
      <NavLink to="/nout">404</NavLink>
    </HomeStyle>
  );
}

export default Home;
