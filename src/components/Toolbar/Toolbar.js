import React, { useContext, useEffect, useState } from "react";
import MainContext from "../../Context/MainContext";
import { MdDownload } from "react-icons/md";
import { IoMdLink } from "react-icons/io";
import { IoMdClose } from "react-icons/io";

import "./styles.scss";

function Toolbar() {
  const { selectedBrands, brands, setSelectedBrands } = useContext(MainContext);

  const [downloadUrl, setDownloadUrl] = useState();

  const [cssFormat, setCssFormat] = useState("css");

  useEffect(() => {
    if (selectedBrands.length > 0) {
      let output = "";

      // eslint-disable-next-line default-case
      switch (cssFormat) {
        case "css":
          selectedBrands.map((slug) => {
            let brand = brands.find((brand) => brand.slug === slug);
            brand.colors.map((color, key) => {
              output += `.color-${slug}-${key}{color:#${color};}\n`;
            });
          });
          break;

        case "scss":
          selectedBrands.map((slug) => {
            let brand = brands.find((brand) => brand.slug === slug);
            brand.colors.map((color, key) => {
              output += `\$color-${slug}-${key}: #${color};\n`;
            });
          });
          break;

        case "less":
          selectedBrands.map((slug) => {
            let brand = brands.find((brand) => brand.slug === slug);
            brand.colors.map((color, key) => {
              output += `@${slug}-${key}: #${color};\n`;
            });
          });
          break;
      }

      const blob = new Blob([output]);
      const url = URL.createObjectURL(blob);
      setDownloadUrl(url);
      return () => {
        URL.revokeObjectURL(url);
        setDownloadUrl("");
      };
    }
  }, [selectedBrands, cssFormat]);

  const getLink = () => {
    prompt(
      "Here's the URL to share",
      `http://localhost:3000/collection/${selectedBrands.join(",")}`
    );
  };

  return (
    <div className="toolbar">
      <div className="actions">
        <select onChange={(e) => setCssFormat(e.target.value)}>
          <option value="css">CSS</option>
          <option value="scss">SCSS</option>
          <option value="less">LESS</option>
        </select>

        <a download={`brands.${cssFormat}`} href={downloadUrl}>
          <MdDownload />
        </a>

        <button onClick={getLink}>
          <IoMdLink />
        </button>
      </div>

      <div className="selected-brand">
        <button onClick={() => setSelectedBrands([])}>
          <IoMdClose />
        </button>
        {selectedBrands.length} brands collected
      </div>
    </div>
  );
}

export default Toolbar;
