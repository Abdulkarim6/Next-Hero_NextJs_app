import CategoriesPage from "../components/HomePage/categories";

const Home = async () => {
  const res = await fetch('http://localhost:3000/db.json');
  const data = await res.json();
  console.log('d', data.products.map(p => p.id));

  return (
    <main className="flex flex-col items-center justify-between">
      <h2 className="text-2xl font-semibold my-3">Product Categories</h2>
      <CategoriesPage />
    </main>
  )
}

export default Home;