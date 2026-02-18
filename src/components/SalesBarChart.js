import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer
} from "recharts";

function SalesBarChart({ data }) {

  return (
    <div className="bg-white p-4 rounded shadow">

      <h2 className="text-lg font-bold mb-4">
        Revenue by Product
      </h2>

      <ResponsiveContainer width="100%" height={300}>

        <BarChart data={data}>

          <CartesianGrid strokeDasharray="3 3" />

          <XAxis dataKey="product" />

          <YAxis />

          <Tooltip />

          <Bar
            dataKey="revenue"
            fill="#2563eb"
          />

        </BarChart>

      </ResponsiveContainer>

    </div>
  );
}

export default SalesBarChart;
