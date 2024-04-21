import React, { useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { MenuProps } from "./sidebarInterfaces";

const MenuComponent = (props: MenuProps) => {
  const { title, link, linkedPage, child, depth } = props;

  const navigate = useNavigate();

  const menuRef = React.useRef<HTMLAnchorElement>(null);
  const childRef = React.useRef<HTMLUListElement>(null);

  const [_elementHeight, setElementHeight] = React.useState(0);

  const innerDepth = depth + 1;

  // Set Wrapper Height
  const elementHeight = useMemo(() => {
    const menu = menuRef.current;

    return menu?.scrollHeight || 0;
  }, [_elementHeight]);

  const onClick = (e: React.MouseEvent<HTMLElement>) => {
    if (!child || child.length === 0) {
      // 자식이 없는 메뉴를 클릭 했을 때
      e.stopPropagation();
      e.preventDefault();

      if (link) {
        navigate(link);
      }

      return;
    }

    const target = e.target as HTMLElement;
    const menuEl = menuRef?.current;
    const childEl = childRef?.current;

    if (childEl && menuEl) {
      if (target.dataset.key === menuEl.dataset.key) {
        // 현재 메뉴를 클릭 했을 때
        const isExpanded = menuEl.dataset.open === "true" ? true : false;

        handleExpand(isExpanded, false, target);
      } else {
        // 자식 메뉴를 클릭 했을 때
        handleExpand(false, false, target);
      }
    }
  };

  const handleExpand = (
    isExpanded: boolean,
    isFirst: boolean,
    clickedChild: HTMLElement | null
  ) => {
    const menuEl = menuRef?.current;
    const childEl = childRef?.current;

    if (menuEl && childEl) {
      if (isExpanded) {
        childEl.style.height = "0px";
        menuEl.dataset.open = "false";
      } else {
        const childCnt = child.length || 0;
        const menuHeight = childCnt * elementHeight;
        let totalHeight = menuHeight;

        if (isFirst) {
          totalHeight += getActiveChildHeight();
        } else if (clickedChild) {
          totalHeight += getExpandedChildHeight();
        }

        childEl.style.height = totalHeight + "px";
        menuEl.dataset.open = "true";
      }
    }
  };

  const isOpened = (menu: MenuProps): boolean => {
    const path = window.location.pathname;

    const isCurrent = menu.link === path;
    const isOpenLinked = menu.linkedPage?.find((url) => url === path)
      ? true
      : false;

    let isOpenChild = false;

    if (menu.child && menu.child.length > 0) {
      menu.child.forEach((childMenu) => {
        if (isOpened(childMenu as MenuProps)) {
          isOpenChild = true;
          return false;
        }
      });
    }

    return isCurrent || isOpenLinked || isOpenChild;
  };

  const getExpandedChildHeight = (): number => {
    let grandChildHeight = 0;

    const expandedMenu = childRef.current?.querySelectorAll(
      `[data-open="true"]`
    ) as NodeListOf<HTMLElement>;

    expandedMenu?.forEach((menu) => {
      const childCnt = Number(menu.dataset.childcnt) || 0;
      const menuHeight = childCnt * elementHeight;

      grandChildHeight += Number(menuHeight);
    });

    return grandChildHeight;
  };

  const getActiveChildHeight = (): number => {
    if (depth == 2) {
      return 0;
    }

    const path = window.location.pathname;

    let openChild = child.find((childMenu) => {
      const openGrandChild = childMenu.child?.find(
        (childMenu) => childMenu.link === path
      );

      return openGrandChild ? true : false;
    });

    let openLinkedPage = linkedPage?.find((url) => url === path);

    if (openChild) {
      const childCnt = openChild.child.length || 0;
      const menuHeight = childCnt * elementHeight;

      return menuHeight;
    }

    if (openLinkedPage) {
      return elementHeight;
    }

    return 0;
  };

  const setActiveMenu = (isActivated: boolean) => {
    if (isActivated) {
      menuRef?.current?.classList.add("active");
    } else {
      menuRef?.current?.classList.remove("active");
    }
  };

  useEffect(() => {
    const menu = menuRef.current;
    const wrapper = childRef.current;

    if (menu && wrapper) {
      setElementHeight(menu.scrollHeight);
    }
  }, []);

  useEffect(() => {
    const isActivated = isOpened(props);
    handleExpand(!isActivated, true, null);
    setActiveMenu(isActivated);
  }, [elementHeight]);

  useEffect(() => {
    console.log("isOpened(props): ", title, isOpened(props));
    if (isOpened(props)) {
      if (child && child.length > 0) {
        menuRef?.current?.classList.add("active");
        childRef?.current?.classList.add("active");
      } else {
        menuRef?.current?.classList.add("inner-active");
      }

      if (depth > 2) {
        menuRef?.current?.classList.add("inner-active");
      }
    } else {
      menuRef?.current?.classList.remove("active");
      menuRef?.current?.classList.remove("inner-active");

      if (depth > 2) {
        menuRef?.current?.classList.remove("inner-active");
      }
    }
  }, [window.location.pathname]);

  return (
    <li className={"sidebar-submenu"} onClick={onClick}>
      <span
        className={`sidebar-menu menu-depth-${innerDepth}`}
        ref={menuRef}
        data-key={title + link}
        data-depth={depth}
        data-childCnt={child?.length || 0}
        data-open={false}
      >
        {title}
      </span>
      {child && child.length > 0 && (
        <ul ref={childRef} className={`sidebar-menu menu-depth-${innerDepth}`}>
          {child.map((menu) => {
            return (
              <MenuComponent
                key={menu.title + innerDepth}
                title={menu.title}
                link={menu.link}
                linkedPage={menu.linkedPage}
                child={menu.child}
                depth={innerDepth}
              />
            );
          })}
        </ul>
      )}
    </li>
  );
};

export default MenuComponent;
