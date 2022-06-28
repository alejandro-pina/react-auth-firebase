import { Link } from "react-router-dom";
import { LOGIN, REGISTER } from "../../config/routes/paths";
import Layout from "../../components/Layouts/Layout";
import styles from "./Home.module.css";
import homeImage from "../../assets/images/home.gif";

const Home = () => (

    <Layout>
      <section className="section-title section-center">
        <h1>Home</h1>
        <p>Example Home.</p>
        <div className={styles.home_button_group}>
          <Link to={LOGIN}>
            <button className="btn btn-primary mt-1">Login</button>
          </Link>
          <Link to={REGISTER}>
            <button className="btn btn-primary mt-1">Register</button>
          </Link>
        </div>
      </section>
      <section className="section-center">
        <div className="img-wrapper">
          <img src={homeImage} alt="" />
        </div>
      </section>
    </Layout>

);

export default Home;
