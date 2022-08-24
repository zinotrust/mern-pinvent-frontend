import { useEffect, useState } from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import { NavLink } from "react-router-dom";

const SidebarItem = ({ item, isOpen }) => {
  const [expandMenu, setExpandMenu] = useState(false);
  useEffect(() => {
    if (isOpen === false) {
      setExpandMenu(false);
    }
  }, [isOpen]);

  if (item.childrens) {
    return (
      <div
        className={
          expandMenu ? "sidebar-item s-parent open" : "sidebar-item s-parent"
        }
      >
        <div className="sidebar-title">
          <span>
            {item.icon && <div className="icon">{item.icon}</div>}
            {isOpen && <div>{item.title}</div>}
          </span>
          <MdKeyboardArrowRight
            size={25}
            className="arrow-icon"
            onClick={() => setExpandMenu(!expandMenu)}
          />
        </div>
        <div className="sidebar-content">
          {item.childrens.map((child, index) => {
            return (
              <div className="s-child">
                <NavLink
                  key={index}
                  to={child.path}
                  className="sublink"
                  activeclassName="active"
                >
                  <div className="sidebar-item">
                    <div className="sidebar-title">
                      <span>
                        {child.icon && <div className="icon">{child.icon}</div>}
                        {isOpen && <div>{child.title}</div>}
                      </span>
                    </div>
                  </div>
                </NavLink>
              </div>
            );
          })}
        </div>
      </div>
    );
  } else {
    return (
      <NavLink to={item.path} className="link" activeclassName="active">
        <div className="sidebar-item s-parent">
          <div className="sidebar-title">
            <span>
              {item.icon && <div className="icon">{item.icon}</div>}
              {isOpen && <div>{item.title}</div>}
            </span>
          </div>
        </div>
      </NavLink>
    );
  }
};

export default SidebarItem;
