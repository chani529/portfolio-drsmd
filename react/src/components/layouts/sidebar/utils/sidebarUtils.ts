import { mobilePhones } from "./sidebarData";
import { Menu } from "./sidebarInterfaces";


const sidebarMenuHeight = 45;

const toggleSideBar = (menuList: Menu[]) => {
    const uAgent = navigator.userAgent.toLowerCase();
    let isMobile = false;

    for (let i = 0; i < mobilePhones.length; i++) {
        if (uAgent.indexOf(mobilePhones[i]) !== -1) {
            isMobile = true;
        }
    }
    const sidebar: HTMLElement = document.getElementById('sidebar-container')!;
    if (isMobile) {
        const isCloseSidebar = sidebar.classList.toggle('close');
        if (isCloseSidebar) {
            sidebar.style.width = '0px';
        } else {
            sidebar.style.width = '50px';
        }
        menuCloseAction();
    } else {
        const isNotOpenSidebar = sidebar.classList.toggle('open');
        if (isNotOpenSidebar) {
            menuCloseAction();
        }
        menuIconAction(menuList);
    }
};

const menuCloseAction = () => {
    const sidebar: HTMLElement = document.getElementById('sidebar-container')!;
    const ulList = Array.from(sidebar.getElementsByTagName('ul'));
    ulList.forEach(item => {
        if (item.className === 'nav') return;

        let element: HTMLElement = item as HTMLElement;
        element.style.height = '0px';
        element.dataset.toggle = '0';
        element.classList.remove('active');
    });

    const liList = Array.from(sidebar.getElementsByTagName('li'));

    liList.forEach(item => {
        if (item.className === 'nav') return;

        let element: HTMLElement = item as HTMLElement;
        element.classList.remove('active');
    });
};

const menuIconAction = (menuList: Menu[]) => {
    const sidebar: HTMLElement = document.getElementById('sidebar-container')!;
    const ulList = Array.from(sidebar.getElementsByTagName('ul'));
    ulList.forEach(item => {
        if (item.className === 'nav') return;

        let element: HTMLElement = item as HTMLElement;
        element.style.height = '0px';
        element.dataset.toggle = '0';
    });

    const liList = Array.from(sidebar.getElementsByTagName('li'));
    const isCloseSidebar = sidebar?.className.indexOf('open') === -1;

    liList.forEach(item => {
        if (item.className === 'nav') return;

        let element: HTMLElement = item as HTMLElement;
        if (!isCloseSidebar) {
            element.classList.remove('active');
        }
    });

    if (sidebar.classList.contains('open')) {
        openingMenuAction(menuList);
    }
};

const openingMenuAction = (menuList: Menu[], activeColor?: string | null) => {
    const path = window.location.pathname;
    let menu = [-1, -1, -1];

    menu[0] = menuList.findIndex((menu1, i1) => {
        if (menu1.link === path) return true;

        const linkedPage1 = menu1.linkedPage?.find((linked, i1) => {
            if (linked === path) return true;
        });

        if (linkedPage1) return true;

        menu[1] = menu1.child.findIndex((menu2, i2) => {
            if (menu2.link === path) return true;

            const linkedPage2 = menu2.linkedPage?.find((linked, i1) => {
                if (linked === path) return true;
            });

            if (linkedPage2) return true;

            menu[2] = menu2.child.findIndex((menu3, i3) => {
                const linkedPage3 = menu3.linkedPage?.find((linked, i1) => {
                    if (linked === path) {
                        return true;
                    }
                });

                if (linkedPage3) {
                    return true;
                }
                return menu3.link === path;
            });
            return -1 !== menu[2];
        });
        return -1 !== menu[1];
    });

    if (menu[0] === -1) return;

    let actionResult = menuAction(`toggle-${menu[0]}`, null, null, activeColor);
    if (menu[1] !== -1)
        actionResult = menuAction(`toggle-${menu[0]}-${menu[1]}`, `toggle-${menu[0]}`, null, activeColor);
    if (menu[2] !== -1)
        actionResult = menuAction(
            `toggle-${menu[0]}-${menu[1]}-${menu[2]}`,
            `toggle-${menu[0]}-${menu[1]}`,
            null,
            activeColor
        );

    if (actionResult) return actionResult;
};

const getMenuHeight = (element: HTMLElement) => {
    return Number(element.dataset.size) * sidebarMenuHeight;
};

const getOpenMenuHeight = (element: HTMLElement, height: number, isExistSubTitle: boolean) => {
    let array = Array.from(element.children);
    array.forEach((item, index) => {
        if (isExistSubTitle && index < 2) {
            return;
        }

        let element: HTMLElement = item as HTMLElement;
        let subMenuElement = element.getElementsByClassName('nav-sub2-menu')[0] as HTMLElement;

        if (subMenuElement.dataset.toggle === '1') {
            height += getMenuHeight(subMenuElement);
        }
    });

    return height;
};
const setCloseMenu = (container: HTMLElement, isCloseSidebar: boolean) => {
    let array = Array.from(container.children);
    array.forEach((item, index) => {
        if (!isCloseSidebar && index < 2) {
            return;
        }
        let element: HTMLElement = item as HTMLElement;

        let subMenuElement = element.getElementsByClassName('nav-sub2-menu')[0] as HTMLElement;
        subMenuElement.style.height = '0px';
        subMenuElement.dataset.toggle = '0';
    });
};

const menuAction = (
    containerName: string,
    parentName: string | null,
    link: string | null,
    activeColor?: string | null
) => {
    const sidebar = document.getElementById('sidebar-container')!;
    const container = document.getElementById(containerName)!;

    const isCloseSidebar = sidebar?.className.indexOf('open') === -1;
    if (container.dataset.size === '0') {
        let array = Array.from(sidebar.getElementsByTagName('li'));
        array.map(item => {
            if (item.className === 'nav') return;
            let element: HTMLElement = item as HTMLElement;
            if (parentName === null || !isCloseSidebar) {
                element.classList.remove('active');
                if (activeColor !== null) {
                    element.style.backgroundColor = 'transparent';
                }
            }
            if (isCloseSidebar) element.style.backgroundColor = '';
        });

        container.parentElement?.classList.add('active');
        if (activeColor !== null) container.parentElement!.style.backgroundColor = activeColor ?? '';

        if (isCloseSidebar) {
            let array = Array.from(sidebar.getElementsByTagName('ul'));
            array.map(item => {
                if (item.className === 'nav') return;
                let element: HTMLElement = item as HTMLElement;
                element.classList.remove('active');
                element.style.height = '0px';
                element.dataset.toggle = '0';
            });
        }
    }

    if (isCloseSidebar && parentName === null) {
        Array.from(sidebar!.getElementsByClassName('active')).map(item => {
            if (containerName === item.id) return;
            Array.from(item.getElementsByClassName('nav-sub2-menu')).forEach(elementItem => {
                let element: HTMLElement = elementItem as HTMLElement;
                element.style.height = '0px';
                element.dataset.toggle = '0';
            });
            item.classList.remove('active');
        });
        container.classList.toggle('active');
        container.parentElement?.classList.add('active');
        container!.style.height = '0px';
        if (container?.className.indexOf('active') !== -1) {
            setTimeout(function () {
                container.style.height = getMenuHeight(container) + 60 + 'px';
            }, 0);
        } else {
            container!.style.height = '0px';
            container.classList.remove('active');
        }
    }
    let parentContainer = null;

    if (parentName !== null) parentContainer = document.getElementById(parentName);

    if (container?.style.height === '0px') {
        subSpreadMenu(container, parentContainer, isCloseSidebar);
    } else {
        container.style.height = '0px';
        container.dataset.toggle = '0';
        let height: number = 0;

        if (parentContainer !== null) {
            height = getOpenMenuHeight(parentContainer, height, true);
            parentContainer.style.height = getMenuHeight(parentContainer) + height + (isCloseSidebar ? 60 : 0) + 'px';
        } else {
            setCloseMenu(container, isCloseSidebar);
        }
    }
    if (link !== null) return link;
};

function subSpreadMenu(container: HTMLElement, parentContainer: HTMLElement | null, isCloseSidebar: boolean) {
    let containerHeight = getMenuHeight(container);
    let height: number = 0;

    if (parentContainer !== null) {
        height = getOpenMenuHeight(parentContainer, height, true);
    }

    container.dataset.toggle = '1';
    container.style.height = containerHeight + 'px';

    if (
        parentContainer !== null &&
        !(
            container.className === 'nav-sub2-menu' &&
            parentContainer?.className === 'nav-sub2-menu'
        )
    ) {
        parentContainer.style.height =
            getMenuHeight(parentContainer) + containerHeight + height + (isCloseSidebar ? 60 : 0) + 'px';
    }
}

export default {
    openingMenuAction,
    menuAction,
    menuIconAction,
    toggleSideBar,
};
