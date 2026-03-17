export default function PGCard({ pg }) {

  return (
    <div className="border rounded-lg shadow-md p-4">

      <h3 className="text-lg font-semibold">
        {pg.name}
      </h3>

      <p className="text-gray-600">
        {pg.address}
      </p>

      <p className="text-sm text-gray-500">
        {pg.category}
      </p>

      <button className="mt-3 bg-blue-500 text-white px-3 py-1 rounded">
        View Details
      </button>

    </div>
  );
}