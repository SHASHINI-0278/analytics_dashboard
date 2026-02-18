import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer
} from "recharts";

function SalesLineChart({ data }) {

  // Group revenue by month
  const groupedData = Object.values(

    data.reduce((acc, item) => {

      if (!acc[item.month]) {
        acc[item.month] = {
          month: item.month,
          revenue: 0
        };
      }

      acc[item.month].revenue += item.revenue;

      return acc;

    }, {})

  );

  // Sort months properly
  const monthOrder = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"];

  groupedData.sort(
    (a, b) =>
      monthOrder.indexOf(a.month) -
      monthOrder.indexOf(b.month)
  );

  return (

    <div className="bg-white p-4 rounded shadow">

      <h2 className="text-lg font-bold mb-4">
        Revenue Trend by Month
      </h2>

      <ResponsiveContainer width="100%" height={300}>

        <LineChart data={groupedData}>

          <CartesianGrid strokeDasharray="3 3" />

          <XAxis dataKey="month" />

          <YAxis />

          <Tooltip />

          <Line
            type="monotone"
            dataKey="revenue"
            stroke="#16a34a"
            strokeWidth={3}
          />

        </LineChart>

      </ResponsiveContainer>

    </div>

  );
}

export default SalesLineChart;
