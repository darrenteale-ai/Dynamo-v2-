export default function Page() {
  const cards = ["Today's shifts", 'Unfilled positions', 'Leave / availability', 'Shift changes'];
  return (
    <section className="content">
      <h1 className="page-title">Rota & Crew Planning</h1>
      <p className="muted">Manage operational shifts, crew assignments, availability and cover.</p>
      <div className="grid grid-4" style={{marginTop:22}}>
        {cards.map((card) => <div className="card" key={card}><div className="muted">{card}</div><div className="metric">—</div><span className="badge green">Module ready</span></div>)}
      </div>
      <div className="card" style={{marginTop:16}}>
        <div className="card-title">Operational work queue</div>
        <table className="table"><thead><tr><th>Area</th><th>Status</th><th>Next step</th></tr></thead><tbody><tr><td>Today's shifts</td><td><span className="badge green">Active</span></td><td>Review required</td></tr><tr><td>Unfilled positions</td><td><span className="badge green">Active</span></td><td>Review required</td></tr><tr><td>Leave / availability</td><td><span className="badge green">Active</span></td><td>Review required</td></tr><tr><td>Shift changes</td><td><span className="badge green">Active</span></td><td>Review required</td></tr></tbody></table>
      </div>
    </section>
  );
}
