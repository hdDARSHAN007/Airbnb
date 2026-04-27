type Props = {
  title: string;
  location: string;
  price: number;
  image: string;
};
// this props act like a contract for the component, 
// it defines what props the component expects to receive and their types.
//  This helps in ensuring that the component is used correctly 
// and can prevent bugs by catching type errors during development.

const PropertyCard = ({ title, location, price, image }: Props) => {
  return (
    <div className="border rounded-xl overflow-hidden shadow hover:shadow-lg transition">
      <img src={image} alt={title} className="h-52 w-full object-cover" />
      
      <div className="p-3">
        <h2 className="font-semibold text-lg">{title}</h2>
        <p className="text-yellow-500">⭐ 4.5</p>
        <p className="text-gray-500 text-sm">{location}</p>
        <p className="mt-2 font-bold">₹{price} / night</p>
      </div>
    </div>
  );
};

export default PropertyCard;