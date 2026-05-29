import { Link } from 'react-router-dom'

function App() {
  return (
    <div className="container py-4">
      <div className="p-5 mb-4 bg-light rounded-3">
        <div className="container-fluid py-5">
          <h1 className="display-5 fw-bold">OctoFit Tracker</h1>
          <p className="col-md-8 fs-4">
            A modern multi-tier fitness tracker with a React 19 client, Express API,
            and MongoDB-backed data services.
          </p>
          <Link className="btn btn-primary btn-lg" to="/">
            Launch dashboard
          </Link>
        </div>
      </div>

      <div className="row g-4">
        <div className="col-md-4">
          <div className="card h-100">
            <div className="card-body">
              <h2 className="h5 card-title">React 19 + Vite</h2>
              <p className="card-text">Fast development workflow with modern frontend tooling.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card h-100">
            <div className="card-body">
              <h2 className="h5 card-title">Express + TypeScript</h2>
              <p className="card-text">Type-safe backend API server running on port 8000.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card h-100">
            <div className="card-body">
              <h2 className="h5 card-title">MongoDB + Mongoose</h2>
              <p className="card-text">Structured data access for workouts, users, and activities.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
