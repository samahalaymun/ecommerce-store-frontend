import { Link } from "react-router-dom";

function Logo() {
  return (
    <Link to="/" className="flex items-center gap-3 no-underline">
      <h3 className="font-bold uppercase ">
        Bandage
      </h3>
    </Link>
  );
}

export default Logo;
