import Container from '../Container';

type Props = {
  text: string;
};
const Placeholder = ({ text }: Props) => {
  return (
    <Container>
      <div className="has-text-centered">
        <h4 className="title is-4">{text}</h4>
      </div>
    </Container>
  );
};

export default Placeholder;
