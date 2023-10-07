
const Home = async () => {
  const res = await fetch('http://localhost:3000/db.json');
  const data = await res.json();
  console.log('d',data.products.map(p => p.id));

  return (
    <main className="flex flex-col items-center justify-between p-24">
      <h2>HomePage{}</h2>
    </main>
  )
}

export default Home;