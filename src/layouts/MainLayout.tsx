import { Header } from '@components/Header'
import { ReactChild, ReactNode } from 'react'

export const MainLayout = ({children}: MainLayoutProps) => (
    <>
        <Header/>
        {children}
    </>
)


export interface MainLayoutProps {
    children: (ReactChild | ReactChild[]) & ReactNode
}
