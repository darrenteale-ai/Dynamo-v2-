export default function Page() {
  const cards = ['Booking on', 'ePCR completion', 'Envelope submission', 'KPI exceptions'];
  return (
    <section className="content">
      <h1 className="page-title">EEAST Operations</h1>
      <p className="muted">Operational performance, envelopes, ePCR completion and KPI monitoring.</p>
      <div className="grid grid-4" style={{marginTop:22}}>
        {cards.map((card) => <div className="card" key={card}><div className="muted">{card}</div><div className="metric">—</div><span className="badge green">Module ready</span></div>)}
      </div>
      <div className="card" style={{marginTop:16}}>
        <div className="card-title">Operational work queue</div>
        <table className="table"><thead><tr><th>Area</th><th>Status</th><th>Next step</th></tr></thead><tbody><tr><td>Booking on</td><td><span className="badge green">Active</span></td><td>Review required</td></tr><tr><td>ePCR completion</td><td><span className="badge green">Active</span></td><td>Review required</td></tr><tr><td>Envelope submission</td><td><span className="badge green">Active</span></td><td>Review required</td></tr><tr><td>KPI exceptions</td><td><span className="badge green">Active</span></td><td>Review required</td></tr></tbody></table>
      </div>
    </section>
  );
}
