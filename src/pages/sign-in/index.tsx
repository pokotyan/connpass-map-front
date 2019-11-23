import * as React from "react";
import useReactRouter from "use-react-router";

export default () => {
  const { history } = useReactRouter();

  return (
    <>
      <button onClick={() => history.push("/search")}>/searchへ移動</button>
    </>
  );
};
