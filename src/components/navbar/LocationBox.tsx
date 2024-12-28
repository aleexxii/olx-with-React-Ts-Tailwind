import { ChevronUp, Search } from "lucide-react"

const LocationBox = () => {
  return (
    <div className="flex h-12 w-[272px]">
        <div className="p-2 bg-white flex border-2 rounded h-12 border-black items-center">
            <div>
                <Search />
            </div>
            <div className="pl-2">
                <input type="text" className="outline-none h-[11]" placeholder="Enter your location"/>
            </div>
            <div>
                <ChevronUp />
            </div>
        </div>
    </div>
  )
}

export default LocationBox