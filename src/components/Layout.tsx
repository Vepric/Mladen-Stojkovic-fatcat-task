import clsx from 'clsx';
import { ReactNode } from 'react';

interface LayoutProps {
    children: ReactNode;
    background: string;
}

export const Layout: React.FC<LayoutProps> = ({ children, background }) => {
    return <section className={clsx('py-20', background)}>{children}</section>;
};
