import { Button1 } from "../components/Button";
import { Link } from "react-router-dom";
import routes from "../routes";

function Home() {
  return (
    <div>
      <h1>PSE Ladder</h1>
      <Link to={`${routes.home}/delta/home/home`}>
        <Button1>DELTA</Button1>
      </Link>
    </div>
  );
}

export default Home;
