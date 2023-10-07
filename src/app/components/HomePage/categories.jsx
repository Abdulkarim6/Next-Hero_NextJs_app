import loadCategories from "@/utilts/loadCategories";
import Image from "next/image";

const CategoriesPage = async () => {
    const categories = await loadCategories();

    // const { id, category, thumbnail } = await loadCategories()
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 container mx-auto">
            {
                categories.map(({ id, category, thumbnail }) =>
                    <div key={id} className="card card-compact bg-base-100 shadow-xl">
                        <figure className="px-4 pt-4"><Image alt="" width={400} height={300} src={thumbnail}></Image></figure>
                        <div className="card-body">
                            <h2 className="card-title">Category: {category}</h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary capitalize font-medium text-base">See {category}</button>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    );
};

export default CategoriesPage;