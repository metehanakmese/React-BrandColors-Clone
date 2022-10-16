import { createContext, useEffect, useState } from "react";
import BrandsData from "../brands.json";

const MainContext = createContext();

export const MainContextProvider = ({ children }) => {
  const brandsArray = [];
  Object.keys(BrandsData).map((key) => {
    brandsArray.push(BrandsData[key]);
  });

  const [brands, setBrands] = useState(brandsArray);

  const [selectedBrands, setSelectedBrands] = useState([]);

  const [copied, setCopied] = useState(false);

  const [search, setSearch] = useState("");

  useEffect(() => {
    const timeout = setTimeout(() => {
      setCopied(false);
    }, 1000);
    return () => {
      clearTimeout(timeout);
    };
  }, [copied]);

  useEffect(() => {
    setBrands(
      brandsArray.filter((brand) =>
        brand.title.toLowerCase().includes(search.toLocaleLowerCase())
      )
    );
  }, [search]);

  const values = {
    brands,
    setBrands,
    selectedBrands,
    setSelectedBrands,
    copied,
    setCopied,
    search,
    setSearch,
  };

  return <MainContext.Provider value={values}>{children}</MainContext.Provider>;
};

export default MainContext;
