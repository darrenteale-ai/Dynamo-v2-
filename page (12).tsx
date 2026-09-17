export default function Page() {
  const cards = ['Open complaints', 'Response due', 'Investigations', 'Learning'];
  return (
    <section className="content">
      <h1 className="page-title">Complaints & Feedback</h1>
      <p className="muted">Complaint records, investigation, responses and learning actions.</p>
      <div className="grid grid-4" style={{marginTop:22}}>
        {cards.map((card) => <div className="card" key={card}><div className="muted">{card}</div><div className="metric">—</div><span className="badge green">Module ready</span></div>)}
      </div>
      <div className="card" style={{marginTop:16}}>
        <div className="card-title">Operational work queue</div>
        <table className="table"><thead><tr><th>Area</th><th>Status</th><th>Next step</th></tr></thead><tbody><tr><td>Open complaints</td><td><span className="badge green">Active</span></td><td>Review required</td></tr><tr><td>Response due</td><td><span className="badge green">Active</span></td><td>Review required</td></tr><tr><td>Investigations</td><td><span className="badge green">Active</span></td><td>Review required</td></tr><tr><td>Learning</td><td><span className="badge green">Active</span></td><td>Review required</td></tr></tbody></table>
      </div>
    </section>
  );
}
