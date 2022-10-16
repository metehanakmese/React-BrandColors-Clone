import React, { useContext } from "react";
import Search from "../Search/Search";
import "./styles.scss";
import Brand from "../Brand/Brand";
import MainContext from "../../Context/MainContext.js";
import LazyLoad from "react-lazy-load";
import Toolbar from "../Toolbar/Toolbar";
import Loader from "../Loader/Loader";

function Content() {
  const {brands} = useContext(MainContext);

  return (
    <main className="content">
      <header className="header">
        <Search />
        <Toolbar />
      </header>

      <section className="brands">
        {brands.map((brand) => (
          <LazyLoad
            key={brand.slug}
            once={true}
            overflow={true}
            placeHolder={<Loader />}
          >
            <Brand brand={brand} />
          </LazyLoad>
        ))}
      </section>
    </main>
  );
}

export default Content;
