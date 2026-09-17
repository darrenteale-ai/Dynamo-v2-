export default function Page() {
  const cards = ['Current stock', 'Checks due', 'Exceptions', 'Audit trail'];
  return (
    <section className="content">
      <h1 className="page-title">Controlled Drugs</h1>
      <p className="muted">Controlled-drug register, stock checks, reconciliation and audit workflow.</p>
      <div className="grid grid-4" style={{marginTop:22}}>
        {cards.map((card) => <div className="card" key={card}><div className="muted">{card}</div><div className="metric">—</div><span className="badge green">Module ready</span></div>)}
      </div>
      <div className="card" style={{marginTop:16}}>
        <div className="card-title">Operational work queue</div>
        <table className="table"><thead><tr><th>Area</th><th>Status</th><th>Next step</th></tr></thead><tbody><tr><td>Current stock</td><td><span className="badge green">Active</span></td><td>Review required</td></tr><tr><td>Checks due</td><td><span className="badge green">Active</span></td><td>Review required</td></tr><tr><td>Exceptions</td><td><span className="badge green">Active</span></td><td>Review required</td></tr><tr><td>Audit trail</td><td><span className="badge green">Active</span></td><td>Review required</td></tr></tbody></table>
      </div>
    </section>
  );
}
