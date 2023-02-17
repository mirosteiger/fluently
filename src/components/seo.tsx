import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";
import useSiteMetadata from "../hooks/useSiteMetaData";

const Seo = ({ title }: any) => {
  const data = useSiteMetadata()

  return (
    <title>
      {title} | {data.title}
    </title>
  );
};

export default Seo;
