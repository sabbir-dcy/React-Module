import { Link } from "react-router-dom";
import CustomLink from "../CustomLink/CustomLink";

const Header = () => {
  return (
    <div>
      <h2>logo</h2>
      <nav>
        <Link to="/">home</Link>
        <Link to="/friends">friends</Link>
        <Link to="/about">about</Link>
        <Link to="/posts">posts</Link>
      </nav>
    </div>
  );
};

export default Header;
