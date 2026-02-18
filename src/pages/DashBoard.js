import { useState } from "react";
import SalesData from "../data/SalesData";
import NavBar from "../components/NavBar";
import KPICard from "../components/KPICard";
import SalesBarChart from "../components/SalesBarChart";
import SalesTable from "../components/SalesTable";
import SalesPieChart from "../components/SalesPieChart";
import SalesLineChart from "../components/SalesLineChart";



function DashBoard() {

  const [data] = useState(SalesData);
  const [search, setSearch] = useState("");
  const [month, setMonth] = useState("All");
  const [sortOrder, setSortOrder] = useState("asc");


  const filteredData = data.filter((item) => {
        const matchesSearch =
            item.product.toLowerCase().includes(search.toLowerCase());

        const matchesMonth =
            month === "All" || item.month === month;

        return matchesSearch && matchesMonth;
    });

    const sortedData = [...filteredData].sort((a, b) => {

        if (sortOrder === "asc") {
            return a.revenue - b.revenue;
        } else {
            return b.revenue - a.revenue;
        }

    });


  const totalRevenue =
    sortedData.reduce((sum, item) => sum + item.revenue, 0);

  const totalOrders =
    sortedData.reduce((sum, item) => sum + item.orders, 0);

  const avgOrderValue =
    Math.round(totalRevenue / totalOrders);

  return (

    <div className="bg-gray-100 min-h-screen">

      <NavBar />

      <div className="p-6 flex flex-col md:flex-row gap-4">
        <input
            type="text"
            placeholder="Search product..."
            className="p-2 border rounded w-full max-w-md"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
        />

        <select
            className="p-2 border rounded ml-4"
            value={month}
            onChange={(e) => setMonth(e.target.value)}
        >
            <option value="All">All Months</option>
            <option value="Jan">Jan</option>
            <option value="Feb">Feb</option>
            <option value="Mar">Mar</option>
            <option value="Apr">Apr</option>
        </select>
        <select
            className="p-2 border rounded"
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
        >
            <option value="asc">Revenue: Low → High</option>
            <option value="desc">Revenue: High → Low</option>
        </select>

      </div>

      <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

        <KPICard
          title="Total Revenue"
          value={"₹" + totalRevenue}
        />

        <KPICard
          title="Total Orders"
          value={totalOrders}
        />

        <KPICard
          title="Avg Order Value"
          value={"₹" + avgOrderValue}
        />

      </div>
      
      <div className="p-6 grid grid-cols-1 lg:grid-cols-2 gap-6">

        <SalesBarChart data={sortedData} />

        <SalesPieChart data={sortedData} />

      </div>

      <div className="p-6">

        <SalesLineChart data={sortedData} />

      </div>


      <div className="p-6">

        <SalesTable data={sortedData} />

      </div>


    </div>

  );
}

export default DashBoard;