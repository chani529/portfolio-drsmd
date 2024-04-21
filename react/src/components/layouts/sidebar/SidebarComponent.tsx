import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { mobilePhones } from "./utils/sidebarData";
import { Menu, SidebarProps } from "./utils/sidebarInterfaces";
import Utils from "./utils/sidebarUtils";

const SidebarComponent = (props: SidebarProps) => {
  const navigate = useNavigate();
  const uAgent = navigator.userAgent.toLowerCase();
  let isMobile = false;

  for (let i = 0; i < mobilePhones.length; i++) {
    if (uAgent.indexOf(mobilePhones[i]) !== -1) {
      isMobile = true;
    }
  }
  useEffect(() => {
    Utils.openingMenuAction(props.menuList, props.activeColor);
  }, []);

  const onMenuClick = (
    containerName: string,
    parentName: string | null,
    link: string | null
  ) => {
    const url = Utils.menuAction(
      containerName,
      parentName,
      link,
      props.activeColor
    );
    if (url) navigate(url);
  };

  const drawMenus = (
    _menuList: Menu[],
    _title: String | null,
    _parent: string | null
  ) => {
    return _menuList.map((menu, index) => {
      return (
        <li data-size={menu.child.length} key={index}>
          <a
            onClick={() => onMenuClick("toggle-" + index, _parent, menu.link)}
            data-parent={_parent}
            data-container={"toggle-" + index}
          >
            {/* <span className="">{menu.icon}</span> */}
            <span className={"menu-icon"}>{menu.icon}</span>
            <span className={"menu-title"}>{menu.title}</span>
          </a>
          <ul
            className={"nav-sub-menu"}
            id={_parent === null ? "toggle-" + index : _parent + "-" + index}
            data-size={menu.child.length}
            style={{ height: "0px" }}
            data-toggle={"0"}
          >
            {menu.child.length > 0 && (
              <>
                <span className={"drop-menu-title"}>{menu.title}</span>
                <hr />
                {subDrawMenus(menu.child, menu.title, "toggle-" + index, false)}
              </>
            )}
          </ul>
        </li>
      );
    });
  };

  const subDrawMenus = (
    _menuList: Menu[],
    _title: String | null,
    _parent: string | null,
    _last: Boolean
  ) => {
    return _menuList.map((child, index) => {
      return (
        <li data-size={child.child.length} key={index}>
          <a
            onClick={(e) =>
              onMenuClick(_parent + "-" + index, _parent, child.link)
            }
            data-parent={_parent}
            data-container={_parent + "-" + index}
          >
            <span className={"menu-title"}>{child.title}</span>
          </a>
          <ul
            className={"nav-sub2-menu"}
            id={_parent + "-" + index}
            data-size={child.child.length}
            style={{ height: "0px" }}
            data-toggle={"0"}
          >
            {_last && (
              <>
                <span className={"drop-menu-title"}>{child.title}</span>
                <hr />
              </>
            )}
            {subDrawMenus(
              child.child,
              child.title,
              _parent + "-" + index,
              true
            )}
          </ul>
        </li>
      );
    });
  };
  const mobileStyle = isMobile ? "" : "open";
  const closeStyle = isMobile ? "close" : "";

  const className = `sidebar-container ${mobileStyle} ${closeStyle}`;

  return (
    <div
      className={className}
      id="sidebar-container"
      style={isMobile ? { width: "0px" } : {}}
    >
      <ul className={"nav"}>
        <li className={"nav-header"}>
          <div className={"company-image-logo"}>
            {props.logo ? props.logo : <div>S</div>}
          </div>
          <div
            className={"company-text-logo"}
            style={{ width: "100%", height: "100%", objectFit: "contain" }}
          >
            {props.textLogo ? props.textLogo : <TextLogo>PORTFOLIO</TextLogo>}
          </div>
        </li>
        {drawMenus(props.menuList, null, null)}
      </ul>
    </div>
  );
};

export default SidebarComponent;

const TextLogo = styled.div`
  display: flex;
  justify-content: center;
  height: 100%;
  font-weight: bold;
  font-size: 1.6rem;
  align-items: center;
`;
