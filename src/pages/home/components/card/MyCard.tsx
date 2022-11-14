import { StyledCard } from './StyledCard';

export interface IProps {
  header: JSX.Element;
  content: JSX.Element;
  footer: JSX.Element;
}

function MyCard(props: IProps) {
  return (
    <StyledCard>
      <div>{props.header}</div>
      <div>{props.content}</div>
      <div>{props.footer}</div>
    </StyledCard>
  );
}

export default MyCard;
