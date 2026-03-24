import {Outlet} from "react-router";
import CategoryHeader from "./CategoryHeader/CategoryHeader.tsx";

const CategoryPage = () => {
    return (
        <div>
            <CategoryHeader/>
            <Outlet/>
        </div>
    );
};

export default CategoryPage;