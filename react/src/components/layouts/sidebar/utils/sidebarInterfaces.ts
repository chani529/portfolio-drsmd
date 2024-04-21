import { ReactNode } from 'react';

export interface Menu {
    title: string;
    link: string | null;
    linkedPage?: string[];
    icon?: ReactNode;
    child: Menu[];
}

export interface MenuProps extends Menu {
    depth: number;
    children?: ReactNode | undefined;
}

export interface SidebarProps {
    menuList: Menu[];
    logo?: JSX.Element | null;
    textLogo?: JSX.Element | null;
    activeColor?: string | null;
}
