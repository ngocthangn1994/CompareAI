import logo from "../../assets/logo_sidebar.png";
import { FaBalanceScale } from "react-icons/fa";
import { CiTimer } from "react-icons/ci";
import { TbTagMinus } from "react-icons/tb";
import { GiTrophyCup } from "react-icons/gi";
import { NavLink, Link } from "react-router";
const Sidebar = () => {
  const menu = [
    {
      icon: <FaBalanceScale />,
      name: "Compare",
      path: "/compare",
    },
    {
      icon: <CiTimer />,
      name: "History",
      path: "/history",
    },
    {
      icon: <TbTagMinus />,
      name: "Saved prompts",
      path: "/savedprompt",
    },
    {
      icon: <GiTrophyCup />,
      name: "Leaderboard",
      path: "/leaderboard",
    },
  ];
  return (
    <>
      <div className="bg-slate-900 min-h-screen p-5 text-white space-y-3">
        <Link to="/">
          <img className="w-60 object-cover" src={logo} />
        </Link>
        <div className="space-y-5 ml-5 mt-10">
          <p className="font-semibold">Workspace</p>

          {menu.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end
              className={({ isActive }) =>
                `flex items-center gap-2 rounded-lg px-4 py-3 text-xl transition-colors ${isActive ? "bg-violet-300 p-2 text-violet-900 font-semibold rounded-xl" : "hover:bg-violet-200 hover:text-violet-900"}`
              }
            >
              <div className="flex items-center gap-3 text-xl">
                <span className="text-3xl">{item.icon}</span>
                <p>{item.name}</p>
              </div>
            </NavLink>
          ))}
        </div>
      </div>
    </>
  );
};

export default Sidebar;
