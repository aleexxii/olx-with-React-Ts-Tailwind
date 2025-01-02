import { ArrowLeft } from "lucide-react";
import BottomFooter from "../components/bottomFooter/BottomFooter";
import { useContext } from "react";
import CategoryContext from "../contexts/CategoryContext";

const Post = () => {
    const categoriesContext = useContext(CategoryContext)
    console.log(categoriesContext);
    if(!categoriesContext){
        return <h1>Loading...</h1>
    }

    const { categories } = categoriesContext
  return (
    <>
      <div className="h-[68px] flex items-center bg-gray-50 p-3 shadow">
        <div className="ps-3">
          <ArrowLeft className="text-gray-700" />
        </div>
      </div>
      <div className="flex justify-center">
        <div className="w-[1280px] h-screen flex-row">
          <div className="p-2">
            <h1 className="flex justify-center items-center font-roboto font-bold text-2xl text-gray-800">
              POST YOUR AD
            </h1>
          </div>
          <div className="flex items-center justify-center h-full">
            <div className="h-full w-[851.73px] border border-gray-300 rounded">
              <div className="h-16 flex ps-6 items-center">
                <h1 className="font-roboto font-semibold text-gray-800">CHOOSE A CATEGORY</h1>
              </div>
              <div className="grid grid-cols-2">
                {/* CATEGORIES */}
                {categories ?.map((category) => (
                <div className="border border-gray-300">
                    <div className="h-12 bg-slate-400">
                        <h1>{category.name}</h1>
                    </div>
                </div>
                ))}

                {/* SUB CATEGORIES */}
                <div className="bg-zinc-100 border border-gray-300">
                    <div className="h-12">

                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <BottomFooter />
    </>
  );
};

export default Post;
