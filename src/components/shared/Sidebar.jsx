import { FcBarChart } from "react-icons/fc";
import {
  DASHBOARD_SIDEBAR_BOTTOM_LINKS,
  DASHBOARD_SIDEBAR_LINKS,
} from "../../lib/consts/navigation";
import { Link, useLocation } from "react-router-dom";
import classNames from "classnames";
import { HiOutlineLogout } from "react-icons/hi";

const linkClasses =
  "flex items-center gap-2 font-light px-3 py-2 rounded-sm hover:bg-neutral-700 hover:no-underline active:bg-neutral-600 text-base";
const Sidebar = () => {
  return (
    <div className="bg-neutral-900 w-60 p-3 flex flex-col text-white">
      <div className="flex items-center gap-2 px-1 py-3">
        <FcBarChart fontSize={24} />
        <span className="text-neutral-100 text-lg">ZreonDash</span>
      </div>
      <div className="flex-1 py-8 flex flex-col gap-0.5">
        {DASHBOARD_SIDEBAR_LINKS.map((link) => {
          return <SidebarLink key={link.key} link={link} />;
        })}
      </div>
      <div className="py-8 flex flex-col gap-0.5 pt-2 border-t border-neutral-700">
        {DASHBOARD_SIDEBAR_BOTTOM_LINKS.map((link) => {
          return <SidebarLink key={link.key} link={link} />;
        })}
        <div className={classNames("text-red-400 cursor-pointer", linkClasses)}>
          <span className="text-xl">
            <HiOutlineLogout />
          </span>
          Logout
        </div>
      </div>
    </div>
  );
};

const SidebarLink = ({ link }) => {
  const { pathname } = useLocation();
  return (
    <Link
      to={link.path}
      className={classNames(
        pathname === link.path
          ? "bg-neutral-700 text-white"
          : "text-neutral-400",
        linkClasses
      )}
    >
      <span className="text-xl">{link.icon}</span>
      {link.label}
    </Link>
  );
};

export default Sidebar;
