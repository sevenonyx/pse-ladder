import { Button1 } from "../components/Button";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>PSE Ladder</h1>
      <Link to={`/delta/home/home`}>
        <Button1>DELTA</Button1>
      </Link>
    </div>
  );
}

export default Home;
