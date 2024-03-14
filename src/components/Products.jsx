import { Link } from "react-router-dom";
const Products = () => {
  return (
    <div>
      this is products page
      <Link to="/" className="underline">
        go to products
      </Link>
    </div>
  );
};

export default Products;
