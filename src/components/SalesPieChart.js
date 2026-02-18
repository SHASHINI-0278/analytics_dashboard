import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer
} from "recharts";

function SalesPieChart({ data }) {

  // Group revenue by product
  const groupedData = Object.values(

    data.reduce((acc, item) => {

      if (!acc[item.product]) {
        acc[item.product] = {
          name: item.product,
          value: 0
        };
      }

      acc[item.product].value += item.revenue;

      return acc;

    }, {})

  );
    const COLORS = [
      "#407E8C", // teal
      "#A58D66", // gold
      "#70c6ca", // aqua
      "#083A4F", // navy
      "#6FA3A9"
    ];


  return (

    <div className="bg-white p-4 rounded shadow">

      <h2 className="text-lg font-bold mb-4">
        Revenue Distribution
      </h2>

      <ResponsiveContainer width="100%" height={300}>

        <PieChart>

          <Pie
            data={groupedData}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={100}
            label
          >

            {groupedData.map((entry, index) => (

              <Cell
                key={index}
                fill={COLORS[index % COLORS.length]}
              />

            ))}

          </Pie>

          <Tooltip />

          <Legend />

        </PieChart>

      </ResponsiveContainer>

    </div>

  );
}

export default SalesPieChart;
