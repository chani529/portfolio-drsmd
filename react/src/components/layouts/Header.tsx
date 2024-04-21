import React from "react";
import styled from "styled-components";
import sidebarUtils from "./sidebar/utils/sidebarUtils";
import { Menu } from "./sidebar/utils/sidebarInterfaces";

interface SidebarProps {
  menuList: Menu[];
}

const Header = (props: SidebarProps) => {
  return (
    <HeaderLayout>
      {" "}
      <button
        onClick={() => {
          console.log(props.menuList);
          sidebarUtils.toggleSideBar(props.menuList);
        }}
      >
        {/* <Icon.Menu height={10} width={10} /> */}
      </button>
    </HeaderLayout>
  );
};

export default Header;

// Styled Component 정의
const HeaderLayout = styled.div`
  background-color: gray;
  width: 100%;
  height: 6%;
`;
