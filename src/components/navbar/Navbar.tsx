import { CategoryProvider } from "../../contexts/CategoryContext"
import Header from "./Header"
import Language from "./Language"
import LocationBox from "./LocationBox"
import Login from "./Login"
import Logo from "./Logo"
import SearchBox from "./SearchBox"
import Sell from "./Sell"

const Navbar = () => {
  return (
    <div>
      <CategoryProvider >
        <div>
        <nav className="bg-slate-100 top-0 flex h-[68px] justify-evenly fixed w-full items-center">
            <Logo />
            <LocationBox />
            <SearchBox />
            <Language />
            <Login />
            <Sell />
        </nav>
        </div>
        <div>
          <Header />
        </div>
    </CategoryProvider>
    </div>
  )
}

export default Navbar