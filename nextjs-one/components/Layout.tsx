import { ReactNode } from 'react';
import NavBar from './NavBar';

type LayoutProps = {
    children: ReactNode 
}

export default function Layout({ children }: LayoutProps) {
    return (
        <>
            <NavBar/>
            <div>{children}</div>
        </>
    )
}