import "./Header.css";
import { Link } from "react-router-dom";
import { useCart } from "../../Context/CartContext";

// icons
import { IoCartOutline } from "react-icons/io5";
import { GoHome } from "react-icons/go";
import { CiSearch } from "react-icons/ci";
import { useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";

export default function Header() {
  const { cart } = useCart();
  const [mobileSearchBox, setMobileSearchBox] = useState(false);

  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScroll, setLastScroll] = useState(0);
  const totalCartLength = cart.reduce((sum, item) => sum + item.quantity, 0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScroll) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }
      setLastScroll(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScroll]);

  return (
    <>
      <div className={`header_container ${showNavbar ? "visible" : "hidden"}`}>
        <div className="content">
          <div className="left">
            <h2 className="logo">Mamzi's Mini Shop</h2>
          </div>

          <div className="center">
            <div className="search_contaier">
              <input type="text" placeholder="Search..." />
            </div>
          </div>

          <div className="right">
            <div
              className="search_icon"
              onClick={() => setMobileSearchBox(true)}
            >
              <span>Search</span>
              <span>
                <CiSearch />
              </span>
            </div>

            <div className="cart">
              <Link to={"/cart"}>
                <span>Cart</span>
                <span className="badge">{totalCartLength}</span>
                <span>
                  <IoCartOutline />
                </span>
              </Link>
            </div>

            <div className="home">
              <Link to={"/"}>
                <span>Home</span>
                <span>
                  <GoHome />
                </span>
              </Link>
            </div>
          </div>

          {mobileSearchBox && (
            <>
              <div className="mobile_search">
                <input type="text" placeholder="search ..." />
                <span onClick={() => setMobileSearchBox(false)}>
                  <IoClose />
                </span>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}
