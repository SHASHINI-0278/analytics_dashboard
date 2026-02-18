function SalesTable({ data }) {

  return (

    <div className="bg-white p-4 rounded shadow mt-6">

      <h2 className="text-lg font-bold mb-4">
        Sales Data
      </h2>
      <div className="overflow-x-auto">
        <table className="w-full border">
          <thead className="bg-navy text-white">
            <tr>
              <th className="p-2 border">Product</th>
              <th className="p-2 border">Revenue (₹)</th>
              <th className="p-2 border">Orders</th>
              <th className="p-2 border">Month</th>
            </tr>
          </thead>
          <tbody>
            {data.length > 0 ? (
              data.map((item) => (
                <tr key={item.id} className="text-center">
                  <td className="p-2 border">
                    {item.product}
                  </td>
                  <td className="p-2 border">
                    ₹{item.revenue}
                  </td>
                  <td className="p-2 border">
                    {item.orders}
                  </td>
                  <td className="p-2 border">
                    {item.month}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="p-4 text-center">
                  No data found
                </td>
              </tr>
            )}
          </tbody>
      </table>
      </div>
    </div>

  );
}

export default SalesTable;
