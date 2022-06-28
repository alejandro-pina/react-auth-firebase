import { Link } from "react-router-dom";
import Layout from "../components/Layouts/Layout";
import notFoundImage from "../assets/images/404.gif";

const NotFound = () => (

    <Layout>
      <section className="section-title section-center">
        <h1>404</h1>
        <p>Not Found!</p>
      </section>
      <section className="section-center">
        <div className="img-wrapper">
          <img src={notFoundImage} alt="" />
        </div>
        <Link to="/">
          <button className="btn btn-primary mt-1">Go Home</button>
        </Link>
      </section>
    </Layout>

);

export default NotFound;
