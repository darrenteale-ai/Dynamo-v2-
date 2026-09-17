export default function Page() {
  const cards = ['Active staff', 'Compliance due', 'Competencies', 'Documents'];
  return (
    <section className="content">
      <h1 className="page-title">Staff Management</h1>
      <p className="muted">Staff directory, compliance, competencies and employment records.</p>
      <div className="grid grid-4" style={{marginTop:22}}>
        {cards.map((card) => <div className="card" key={card}><div className="muted">{card}</div><div className="metric">—</div><span className="badge green">Module ready</span></div>)}
      </div>
      <div className="card" style={{marginTop:16}}>
        <div className="card-title">Operational work queue</div>
        <table className="table"><thead><tr><th>Area</th><th>Status</th><th>Next step</th></tr></thead><tbody><tr><td>Active staff</td><td><span className="badge green">Active</span></td><td>Review required</td></tr><tr><td>Compliance due</td><td><span className="badge green">Active</span></td><td>Review required</td></tr><tr><td>Competencies</td><td><span className="badge green">Active</span></td><td>Review required</td></tr><tr><td>Documents</td><td><span className="badge green">Active</span></td><td>Review required</td></tr></tbody></table>
      </div>
    </section>
  );
}
