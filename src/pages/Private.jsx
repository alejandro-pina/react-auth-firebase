import useAuthContext from "../hook/useAuthContext";
import Layout from "../components/Layouts/Layout";
import privateImage from "../assets/images/private.gif";

const Private = () => {

  const { user } = useAuthContext();

  return (
    <Layout>
      <section className="section-title section-center">
        <h1>Private</h1>
        <p>
          Hi {user.email}. <br></br> This is an example Private Area.
        </p>
      </section>
      <section className="section-center">
        <div className="img-wrapper">
          <img src={privateImage} alt="" />
        </div>
      </section>
    </Layout>
  );

};
export default Private;
