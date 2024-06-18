import { UIMatch, useMatches } from "react-router-dom";
import ICONS from "../icons";
import BreadcrumbItem from "./breadcrumbItem";

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
      className="p-4 md:p-5 flex w-full h-12 items-stretch"
      aria-label="Breadcrumb"
    >
      <ol className="inline-flex items-center gap-x-4">
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
          <>
            <li className="inline-flex items-center" key={index}>
              {crumb}
            </li>
            {index !== countOfCrumbs - 1 && (
              <li>
                <ICONS.ARROW_RIGHT />
              </li>
            )}
          </>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
