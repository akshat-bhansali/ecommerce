import React from "react";
import Helmet from "react-helmet";

const MetaData = ({ title }) => {
  return (
    <Helmet>
      <title>{title}</title>
      {/* using this every page will have the title we pass */}
    </Helmet>
  );
};

export default MetaData;