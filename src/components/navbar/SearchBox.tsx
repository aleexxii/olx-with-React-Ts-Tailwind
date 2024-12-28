import { Search } from "lucide-react"

const SearchBox = () => {
  return (
    <div className="flex h-12 w-[771.94px] bg-white border-2 border-black rounded">

  <div className="flex flex-1 items-center px-4">
    <input
      type="text"
      placeholder="Search"
      className="w-full h-full border-none outline-none"
    />
  </div>

  <div className="bg-slate-900 flex items-center justify-center px-4">
    <button>
    <Search color="white" />
    </button>
  </div>
</div>
  )
}


export default SearchBox