const Navbar = () => {
  return (
    <div className="p-4 shadow-md flex justify-between">
      <h1 className="font-bold text-xl">Airbnb</h1>
      <button className="bg-black text-white px-4 py-2 rounded">
        Login
      </button>
    </div>
  );
};

export default Navbar;