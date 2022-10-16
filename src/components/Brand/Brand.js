import React, { useContext } from "react";
import "./styles.scss";
import { getContrastYIQ } from "../../helpers";
import MainContext from "../../Context/MainContext";
import ClipboardButton from "react-clipboard.js";
import { FcCheckmark } from "react-icons/fc";

function Brand({ brand }) {
  const { selectedBrands, setSelectedBrands, setCopied } =
    useContext(MainContext);

  const toggleSelected = () => {
    if (selectedBrands.includes(brand.slug)) {
      setSelectedBrands(selectedBrands.filter((slug) => slug !== brand.slug));
    } else {
      setSelectedBrands([...selectedBrands, brand.slug]);
    }
  };

  const setColor = (color) => {
    setCopied(color);
  };

  return (
    <div
      className={`brand ${
        selectedBrands.includes(brand.slug) ? "selected" : ""
      }`}
    >
      <div className="checkIcon">
        <FcCheckmark />
      </div>

      <h1 onClick={toggleSelected}>{brand.title}</h1>
      <div className="brand-colors">
        {brand.colors.map((color) => (
          <ClipboardButton
            data-clipboard-text={color}
            onSuccess={() => setColor(color)}
            component={"span"}
            style={{
              "--bgColor": `#${color}`,
              "--textColor": `${getContrastYIQ(color)}`,
            }}
          >
            {color}
          </ClipboardButton>
        ))}
      </div>
    </div>
  );
}

export default Brand;
