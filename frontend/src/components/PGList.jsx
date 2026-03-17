const PGList = ({ pgs, page, totalPages, location, onPageChange }) => {

  const nextPage = () => {
    if (page < totalPages) {
      onPageChange(location, page + 1);
    }
  };

  const prevPage = () => {
    if (page > 1) {
      onPageChange(location, page - 1);
    }
  };

  return (

    <section className="max-w-7xl mx-auto px-6 py-12">

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

        {pgs.map((pg) => (

          <div
            key={pg.id}
            className="border rounded-xl p-5 shadow-md bg-white"
          >
            <h3 className="text-lg font-semibold">{pg.name}</h3>

            <p className="text-sm text-gray-500">
              {pg.address}
            </p>

            <p className="text-xs text-gray-400 mt-1">
              {pg.category}
            </p>

            <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">
              View Details
            </button>

          </div>

        ))}

      </div>


      {/* Pagination */}

      <div className="flex justify-center gap-6 mt-12">

        <button
          onClick={prevPage}
          disabled={page === 1}
          className="px-5 py-2 bg-gray-200 rounded"
        >
          Prev
        </button>

        <span className="font-medium">
          Page {page} of {totalPages}
        </span>

        <button
          onClick={nextPage}
          disabled={page === totalPages}
          className="px-5 py-2 bg-blue-600 text-white rounded"
        >
          Next
        </button>

      </div>

    </section>
  );
};

export default PGList;