export default function Page() {
  const cards = ['Vehicles available', 'VDI due', 'Fuel exceptions', 'Open defects'];
  return (
    <section className="content">
      <h1 className="page-title">Fleet Management</h1>
      <p className="muted">Vehicles, VDI, fuel, defects, damage and maintenance.</p>
      <div className="grid grid-4" style={{marginTop:22}}>
        {cards.map((card) => <div className="card" key={card}><div className="muted">{card}</div><div className="metric">—</div><span className="badge green">Module ready</span></div>)}
      </div>
      <div className="card" style={{marginTop:16}}>
        <div className="card-title">Operational work queue</div>
        <table className="table"><thead><tr><th>Area</th><th>Status</th><th>Next step</th></tr></thead><tbody><tr><td>Vehicles available</td><td><span className="badge green">Active</span></td><td>Review required</td></tr><tr><td>VDI due</td><td><span className="badge green">Active</span></td><td>Review required</td></tr><tr><td>Fuel exceptions</td><td><span className="badge green">Active</span></td><td>Review required</td></tr><tr><td>Open defects</td><td><span className="badge green">Active</span></td><td>Review required</td></tr></tbody></table>
      </div>
    </section>
  );
}
