import "./Home.css";
import { useFetchAllProduts } from "../../Hooks/useFetchAllProducts";

// conponents
import ProductCard from "../../components/ProductCard/ProductCard";

export default function Home() {
  const { data: allProducts } = useFetchAllProduts();

  return (
    <>
      <div className="home_container">
        <div className="content">
          <div className="title">
            <span>all products :</span>
            <span>{allProducts?.length}</span>
          </div>

          <div className="products_section">
            {allProducts?.map((product) => (
              <>
                <ProductCard {...product} key={product.id}/>
              </>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
