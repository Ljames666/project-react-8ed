import autores, { CardProps as AutoresProp } from './utils/data/autores';
import CardText from '../../components/card-text/CardText';

function Home(): JSX.Element {
  return (
    <div style={{ display: 'flex' }}>
      {autores.map((item: AutoresProp) => {
        return (
          <CardText
            urlImg={item.imagem}
            altImg={item.imagemDescricao}
            title={item.title}
            content={item.frase}
            author={item.author}
          />
        );
      })}
    </div>
  );
}
export default Home;
