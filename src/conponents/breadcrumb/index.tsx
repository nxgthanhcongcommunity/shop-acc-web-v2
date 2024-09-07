import { Breadcrumb, BreadcrumbProps } from "antd";
import React, { useEffect, useState } from "react";
import { Link, UIMatch, useMatches } from "react-router-dom";

interface MatchHandle {
  crumb: (data: any) => React.ReactNode;
}

interface IMatch extends UIMatch {
  handle: MatchHandle;
  data: any;
}

const Breadcrumb1 = () => {
  const matches = useMatches() as IMatch[];
  const crumbs = matches
    .filter((match) => Boolean(match.handle?.crumb))
    .map((match) => match.handle.crumb(match.data));

  const items = [
    {
      title: <Link to={"/"}>Trang chủ</Link>,
    },
    ...crumbs.map((s) => {
      return {
        title: s,
      };
    }),
  ];

  return (
    <Breadcrumb
      style={{
        marginTop: "10px",
        marginBottom: "12px",
      }}
      items={items}
    />
  );
};

export default Breadcrumb1;
