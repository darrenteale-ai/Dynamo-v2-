export default function Page() {
  const cards = ['Bookings', 'Live transfers', 'Completed transfers', 'Exceptions'];
  return (
    <section className="content">
      <h1 className="page-title">Hospital Transfers</h1>
      <p className="muted">Transfer bookings, crew allocation, patient movement and documentation.</p>
      <div className="grid grid-4" style={{marginTop:22}}>
        {cards.map((card) => <div className="card" key={card}><div className="muted">{card}</div><div className="metric">—</div><span className="badge green">Module ready</span></div>)}
      </div>
      <div className="card" style={{marginTop:16}}>
        <div className="card-title">Operational work queue</div>
        <table className="table"><thead><tr><th>Area</th><th>Status</th><th>Next step</th></tr></thead><tbody><tr><td>Bookings</td><td><span className="badge green">Active</span></td><td>Review required</td></tr><tr><td>Live transfers</td><td><span className="badge green">Active</span></td><td>Review required</td></tr><tr><td>Completed transfers</td><td><span className="badge green">Active</span></td><td>Review required</td></tr><tr><td>Exceptions</td><td><span className="badge green">Active</span></td><td>Review required</td></tr></tbody></table>
      </div>
    </section>
  );
}
