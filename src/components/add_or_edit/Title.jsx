import React from "react";

function Title({ title, resource }) {
  return <h1>{`${title ? title : "Add " + resource}`}</h1>;
}

export default Title;
