import Language from "./Language"
import LocationBox from "./LocationBox"
import Login from "./Login"
import Logo from "./Logo"
import SearchBox from "./SearchBox"
import Sell from "./Sell"

const Navbar = () => {
  return (
    <div>
        <div className="bg-slate-100 flex h-[68px] justify-evenly items-center">
            <Logo />
            <LocationBox />
            <SearchBox />
            <Language />
            <Login />
            <Sell />
        </div>
    </div>
  )
}

export default Navbar