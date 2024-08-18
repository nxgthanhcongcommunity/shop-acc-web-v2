import { UIMatch, useMatches } from "react-router-dom";
import ICONS from "../icons";
import BreadcrumbItem from "./breadcrumbItem";
import React from "react";

interface MatchHandle {
  crumb: (data: any) => React.ReactNode;
}

interface IMatch extends UIMatch {
  handle: MatchHandle;
  data: any;
}

const Breadcrumb = () => {
  const matches = useMatches() as IMatch[];
  const crumbs = matches
    .filter((match) => Boolean(match.handle?.crumb))
    .map((match) => match.handle.crumb(match.data));

  const countOfCrumbs = crumbs.length;

  return (
    <nav
      className="py-4 md:py-5 flex w-full h-12 items-stretch"
      aria-label="Breadcrumb"
    >
      <ol className="inline-flex items-center md:gap-x-4 gap-x-2">
        <li className="inline-flex items-center">
          <BreadcrumbItem
            path={"/"}
            title={"Trang chủ"}
            icon={<ICONS.HOME />}
          />
        </li>
        <li>
          <ICONS.ARROW_RIGHT />
        </li>
        {crumbs.map((crumb, index) => (
          <React.Fragment key={index}>
            <li className="inline-flex items-center">{crumb}</li>
            {index !== countOfCrumbs - 1 && (
              <li>
                <ICONS.ARROW_RIGHT />
              </li>
            )}
          </React.Fragment>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
