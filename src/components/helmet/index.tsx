import * as React from "react";
import { Helmet as ReactHelmet } from "react-helmet";

export const Helmet = (props: any) => {
  return (
    <ReactHelmet>
      <title>{props.title}</title>
      <meta property="og:title" content={props.title} />
      <meta property="og:url" content={window.location.href} />
      <meta property="og:image" content="https://connpass.net/learn.png" />
      <meta name="description" content="地図を見ながら勉強会を検索しよう" />
      <meta name="twitter:title" content={props.title} />
      <meta name="twitter:card" content="summary" />
      <meta
        name="twitter:description"
        content="地図を見ながら勉強会を検索しよう"
      />

      {props.children}
    </ReactHelmet>
  );
};
