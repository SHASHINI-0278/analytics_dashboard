function KPICard({ title, value }) {
  return (
    <div className="bg-white shadow rounded p-4 border-l-4 border-gold hover:shadow-lg transition">
      <h2 className="text-teal">{title}</h2>
      <p className="text-2xl font-bold text-navy">{value}</p>
    </div>
  );
}

export default KPICard;