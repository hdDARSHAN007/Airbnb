import Image from "next/image";
import Navbar from "@/components/Navbar";
import PropertyCard from "@/components/PropertyCard";

// Dummy data this data is handcodeing for testing purpose, 
// in the real world application this data will come from an API or a database, 
const listings = [
  {
    title: "Modern Apartment",
    location: "Bangalore",
    price: 2500,
    image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688",
  },
  {
    title: "Beach House",
    location: "Goa",
    price: 4500,
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
  },
  {
    title: "Mountain Cabin",
    location: "Manali",
    price: 3000,
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750",
  },
  {
    title : "City Loft",
    location : "Mumbai",
    price : 5000,
    image : "https://images.unsplash.com/photo-1776941649964-ba648f79ef0a?q=80&w=1972&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {listings.map((item, index) => (
          <PropertyCard key={index} {...item} />
        ))}
      </div>
    </div>
  );
}
// export default function Home() {
//   return (
//     <div>
//       <Navbar />
//       <div className="text-center mt-20">
//         <h1 className="text-4xl font-bold">Airbnb Clone</h1>
//       </div>
//     </div>
//   );
// }