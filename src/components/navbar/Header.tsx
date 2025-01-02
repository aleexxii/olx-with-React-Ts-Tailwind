import { useContext } from "react";
import CategoryContext from "../../contexts/CategoryContext";
import { ChevronDown } from "lucide-react";

const Header = () => {
  const categoryContext = useContext(CategoryContext);

  if (!categoryContext) {
    return <div>Loading...</div>;
  }

  const { categories } = categoryContext;
  return (
    <header className="flex items-center mt-[74px] mb-2 shadow-gray-200 shadow-top justify-center">
        <div className="h-11 flex items-center w-[1280px] gap-4 overflow-hidden">
        <span className="flex items-center gap-2 whitespace-nowrap font-roboto font-semibold text-sm">ALL CATEGORIES<ChevronDown /></span>
      {categories?.map(
        (category: { name: string; subcategories: string[] }) => (
          <span className="whitespace-nowrap font-sans cursor-pointer hover:text-cyan-700" key={category.name}>{category.name}</span>
        )
      )}
    </div>
    </header>
  );
};

export default Header;
