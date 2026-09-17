export default function Page() {
  const cards = ['Policies due for review', 'Outstanding acknowledgements', 'Published versions', 'Archive'];
  return (
    <section className="content">
      <h1 className="page-title">Policy Centre</h1>
      <p className="muted">Controlled policies, versions, acknowledgements and review dates.</p>
      <div className="grid grid-4" style={{marginTop:22}}>
        {cards.map((card) => <div className="card" key={card}><div className="muted">{card}</div><div className="metric">—</div><span className="badge green">Module ready</span></div>)}
      </div>
      <div className="card" style={{marginTop:16}}>
        <div className="card-title">Operational work queue</div>
        <table className="table"><thead><tr><th>Area</th><th>Status</th><th>Next step</th></tr></thead><tbody><tr><td>Policies due for review</td><td><span className="badge green">Active</span></td><td>Review required</td></tr><tr><td>Outstanding acknowledgements</td><td><span className="badge green">Active</span></td><td>Review required</td></tr><tr><td>Published versions</td><td><span className="badge green">Active</span></td><td>Review required</td></tr><tr><td>Archive</td><td><span className="badge green">Active</span></td><td>Review required</td></tr></tbody></table>
      </div>
    </section>
  );
}
