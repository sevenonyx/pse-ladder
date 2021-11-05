import { useHistory } from "react-router-dom";
import { Container, Button } from "react-bootstrap";
import styled from "styled-components";

const Header = styled.div`
  margin-bottom: 25px;
`;
const Footer = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  padding: 15px 25px;
  text-align: right;
  background-color: snow;
`;
function Home() {
  const history = useHistory();
  const handleClick = (path) => {
    history.push(path);
  };
  return (
    <Container>
      <Header>
        <h1>PSE Group Study</h1>
        <h2>사다리 타기 도우미😎</h2>
      </Header>

      <div className="d-grid gap-2">
        <Button
          onClick={() => handleClick("/delta/home/home/")}
          variant="outline-primary"
          size="lg"
        >
          DELTA
        </Button>
      </div>
      <Footer>
        <h5>Developer Seven</h5>
        <h5>onyxfive21@gmail.com</h5>
      </Footer>
    </Container>
  );
}

export default Home;
