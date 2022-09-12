import { useState } from "react";
import SidebarItem from "./SidebarItem";
import "./Sidebar.scss";
import { HiMenuAlt3 } from "react-icons/hi";
import menu from "../../data/sidebar";
import { RiProductHuntLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

const Sidebar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(true);
  const toggle = () => setIsOpen(!isOpen);
  const navigate = useNavigate();

  const goHome = () => {
    navigate("/");
  };

  return (
    <div className="layout">
      <div style={{ width: isOpen ? "230px" : "60px" }} className="sidebar">
        <div className="top_section">
          <div style={{ display: isOpen ? "block" : "none" }} className="logo">
            <RiProductHuntLine
              size={35}
              onClick={goHome}
              style={{ cursor: "pointer" }}
            />
          </div>
          <div
            style={{ marginLeft: isOpen ? "100px" : "0px" }}
            className="bars"
          >
            <HiMenuAlt3 onClick={toggle} />
          </div>
        </div>
        {menu.map((item, index) => {
          return <SidebarItem key={index} item={item} isOpen={isOpen} />;
        })}
      </div>
      <main
        style={{
          paddingLeft: isOpen ? "230px" : "60px",
          transition: "all .5s",
        }}
      >
        {children}
      </main>
    </div>
  );
};

export default Sidebar;
