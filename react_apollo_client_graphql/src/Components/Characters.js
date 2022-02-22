import { Link, Outlet, useParams } from "react-router-dom";
import CharactersHome from "./CharactersHome";
import Character from "./Character";

const Characters = () => {
  return (
    <>
      <Outlet />
    </>
  );
};

export default Characters;
