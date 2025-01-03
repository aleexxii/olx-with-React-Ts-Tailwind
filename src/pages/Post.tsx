import { ArrowLeft } from "lucide-react";
import BottomFooter from "../components/bottomFooter/BottomFooter";
import { useContext, useState } from "react";
import CategoryContext from "../contexts/CategoryContext";

interface CategoryContext {
  name: string;
  subcategories: string[];
}

const Post = () => {
  const categoriesContext = useContext(CategoryContext);
  const [selectedCategories, setSelectedCategories] =
    useState<CategoryContext | null>(null);

  if (!categoriesContext) {
    return <h1>Loading...</h1>;
  }

  const { categories } = categoriesContext;

  const handleCategoryClick = (category: CategoryContext) => {
    setSelectedCategories(category);
  };

  return (
    <>
      {/* Top Bar */}
      <div className="h-[68px] flex items-center bg-gray-50 p-3 shadow">
        <div className="ps-3">
          <ArrowLeft className="text-gray-700" />
        </div>
      </div>

      {/* Main Container */}
      <div className="flex justify-center pb-10">
        <div className="w-[1280px] h-screen flex flex-col items-center">
          {/* Main Heading */}
          <div className="p-6">
            <h1 className="font-roboto font-bold text-2xl text-gray-800 text-center">
              POST YOUR AD
            </h1>
          </div>

          {/* Category Selection Box */}
          <div className="flex items-center justify-center w-full">
            <div className="w-[851.73px] border border-gray-300 rounded">
              {/* Subheading */}
              <div className="h-16 flex items-center ps-6 border-b border-gray-300">
                <h1 className="font-roboto font-semibold text-gray-800">
                  CHOOSE A CATEGORY
                </h1>
              </div>

              {/* Grid for Categories and Subcategories */}
              <div className="grid grid-cols-2">
                {/* Categories */}
                <div>
                  {categories?.map((category, index) => (
                    <div
                      className={`border-b border-r border-gray-300 ${
                        index % 2 === 0 ? "border-t" : ""
                      }`}
                      key={index}
                      onClick={() => handleCategoryClick(category)}
                    >
                      <div className="h-12 flex items-center hover:bg-gray-200 ps-6">
                        <h1 className="cursor-pointer">{category.name}</h1>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Subcategories */}
                <div>
                  {selectedCategories?.subcategories && (
                    <>
                      {selectedCategories?.subcategories?.map(
                        (subcategory: string, index: number) => (
                          <div
                            className={`border-b border-r border-gray-300 ${
                              index % 2 === 0 ? "border-t" : ""
                            }`}
                            key={index}
                          >
                            <div className="h-12 flex items-center hover:bg-gray-200 ps-6">
                              <h1 className="cursor-pointer">{subcategory}</h1>
                            </div>
                          </div>
                        )
                      )}
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <BottomFooter />
    </>
  );
};

export default Post;
