export default function Page() {
  const cards = ['Pending approval', 'Hours', 'Overtime', 'Payroll export'];
  return (
    <section className="content">
      <h1 className="page-title">Payroll & Timesheets</h1>
      <p className="muted">Approved shifts, hours, breaks, overtime and payroll preparation.</p>
      <div className="grid grid-4" style={{marginTop:22}}>
        {cards.map((card) => <div className="card" key={card}><div className="muted">{card}</div><div className="metric">—</div><span className="badge green">Module ready</span></div>)}
      </div>
      <div className="card" style={{marginTop:16}}>
        <div className="card-title">Operational work queue</div>
        <table className="table"><thead><tr><th>Area</th><th>Status</th><th>Next step</th></tr></thead><tbody><tr><td>Pending approval</td><td><span className="badge green">Active</span></td><td>Review required</td></tr><tr><td>Hours</td><td><span className="badge green">Active</span></td><td>Review required</td></tr><tr><td>Overtime</td><td><span className="badge green">Active</span></td><td>Review required</td></tr><tr><td>Payroll export</td><td><span className="badge green">Active</span></td><td>Review required</td></tr></tbody></table>
      </div>
    </section>
  );
}
