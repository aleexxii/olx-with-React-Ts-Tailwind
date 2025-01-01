import BottomFooter from "./bottomFooter/BottomFooter"
import { PrimaryFooter } from "./footer/PrimaryFooter"
import Navbar from "./navbar/Navbar"

const Layout : React.FC<{children: React.ReactNode}> = ({children}) => {
  return (
    <>
    <Navbar />
    <main>{children}</main>
    <PrimaryFooter />
    <BottomFooter />
    </>
  )
}

export default Layout