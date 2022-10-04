import { StyledCard } from './StyledCard';

interface IProps {
  title: string;
  url: string;
  text: string;
}

function MyCard(props: IProps) {
  return (
    <StyledCard>
      <div>
        <img src={props.url} alt={props.title} />
      </div>
      <div>
        <h1>{props.title}</h1>
        <p>{props.text}</p>
      </div>
    </StyledCard>
  );
}

export default MyCard;
