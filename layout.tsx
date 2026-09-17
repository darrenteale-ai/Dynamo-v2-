import "./globals.css";
import { Sidebar } from "@/components/sidebar";
export const metadata={title:"DYNAMO | Medical Emergency Solutions",description:"MES operational management platform"};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body><div className="app-shell"><Sidebar/><main className="main"><header className="topbar"><strong>Medical Emergency Solutions</strong><span className="muted">DYNAMO v1.0.0</span></header>{children}</main></div></body></html>}
