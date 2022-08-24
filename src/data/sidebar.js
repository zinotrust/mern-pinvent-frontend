import {
  FaTh,
  FaRegChartBar,
  FaCommentAlt,
  FaShoppingBag,
  FaThList,
} from "react-icons/fa";

const menu = [
  {
    title: "Dashboard",
    icon: <FaTh />,
    childrens: [
      {
        title: "Home",
        path: "/",
      },
      {
        title: "About",
        path: "/about",
      },
    ],
  },
  {
    title: "Account",
    icon: <FaRegChartBar />,
    childrens: [
      {
        title: "Login",
        path: "/login",
      },
      {
        title: "Register",
        path: "/register",
      },
    ],
  },
  {
    title: "Profile",
    icon: <FaShoppingBag />,
    path: "/account",
  },
  {
    title: "Blog",
    icon: <FaThList />,
    path: "/blog",
  },
  {
    title: "Report Bug",
    icon: <FaCommentAlt />,
    path: "/report-bug",
  },
];

export default menu;
