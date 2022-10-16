import React from "react";
import ContentLoader from "react-content-loader";

function Loader() {
  return (
    <ContentLoader
      speed={2}
      width={400}
      height={160}
      viewBox="0 0 400 160"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <rect x="87" y="45" rx="3" ry="3" width="60" height="40" />
      <rect x="304" y="184" rx="3" ry="3" width="60" height="40" />
      <rect x="5" y="5" rx="3" ry="3" width="120" height="25" />
      <rect x="9" y="45" rx="3" ry="3" width="60" height="40" />
      <rect x="165" y="45" rx="3" ry="3" width="60" height="40" />
    </ContentLoader>
  );
}

export default Loader;
