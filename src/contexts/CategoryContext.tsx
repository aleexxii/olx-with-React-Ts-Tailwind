import { createContext, ReactNode, useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../services/firebaseApp";

interface Category {
  name: string;
  subcategories: string[];
}

interface CategoryContextType {
  categories: Category[];
  fetchCategories: () => void;
}

const CategoryContext = createContext<CategoryContextType | undefined>(
  undefined
);

interface CategoryProviderProps {
  children: ReactNode;
}

export const CategoryProvider: React.FC<CategoryProviderProps> = ({
  children,
}) => {
  const [categories, setCategories] = useState<Category[]>([]);
  const fetchCategories = async () => {
    try {
      const snapShot = await getDocs(collection(db, "categories"));
      const fetchedCategories = snapShot.docs.map(
        (doc) => doc.data() as Category
      );
      
      setCategories(fetchedCategories);
    } catch (error) {
      console.log("Error fetching categories :", error);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <CategoryContext.Provider value={{ categories, fetchCategories }}>
      {children}
    </CategoryContext.Provider>
  );
};

export default CategoryContext;
