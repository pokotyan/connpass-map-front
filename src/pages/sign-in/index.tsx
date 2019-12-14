import * as React from "react";
import useReactRouter from "use-react-router";
import { Helmet } from "../../components/helmet";

export default () => {
  const { history } = useReactRouter();

  return (
    <>
      <Helmet title="サインイン" />
      <button onClick={() => history.push("/search")}>/searchへ移動</button>
    </>
  );
};
