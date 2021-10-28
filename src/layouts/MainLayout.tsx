import { Header } from '@components/Header'
import { ReactChild, ReactNode } from 'react'

export const MainLayout = ({children}: MainLayoutProps) => (
    <>
        <Header/>
        <main>{children}</main>
    </>
)


export interface MainLayoutProps {
    children: (ReactChild | ReactChild[]) & ReactNode
}
