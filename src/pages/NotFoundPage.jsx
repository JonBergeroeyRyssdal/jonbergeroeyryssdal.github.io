import { Link } from "react-router-dom";

import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

function NotFoundPage() {
  return (
    <>
      <Navbar />

      <main className="container text-center py-5">
        <h1 className="display-2 fw-bold">404</h1>

        <h2 className="mb-3">Page not found</h2>

        <p className="text-muted mb-4">
          The page you are looking for doesn't exist.
        </p>

        <Link to="/" className="btn btn-dark">
          Back to Home
        </Link>
      </main>

      <Footer />
    </>
  );
}

export default NotFoundPage;
