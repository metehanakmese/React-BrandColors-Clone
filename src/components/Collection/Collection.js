import React, { useContext, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import MainContext from "../../Context/MainContext";
import LazyLoad from "react-lazy-load";
import Brand from "../Brand/Brand";
import { GrLinkPrevious } from "react-icons/gr";
import "./styles.scss";
import Loader from "../Loader/Loader";

function Collection() {
  const { slugs } = useParams();

  const navigate = useNavigate();

  const { setSelectedBrands, selectedBrands, brands } = useContext(MainContext);

  const clearSelectedBrands = () => {
    setSelectedBrands([]);
    navigate.push("/");
  };

  useEffect(() => {
    setSelectedBrands(slugs.split(","));
  }, []);

  return (
    <main className="content">
      <header className="header">
        <Link to="/" onClick={clearSelectedBrands}>
          <a className="back-btn">
            <GrLinkPrevious />
            All Brands
          </a>
        </Link>
      </header>

      <section className="brands">
        {selectedBrands.map((slug) => {
          let brand = brands.find((brand) => brand.slug === slug);

          return (
            <LazyLoad
              key={brand.slug}
              once={true}
              overflow={true}
              placeholder={<Loader />}
            >
              <Brand brand={brand} />
            </LazyLoad>
          );
        })}
      </section>
    </main>
  );
}

export default Collection;
