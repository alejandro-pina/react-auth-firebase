import Layout from "../components/Layouts/Layout";
import profile from "../assets/images/profile.gif";

const Profile = () => (

    <Layout>
      <section className="section-title section-center">
        <h1>Profile</h1>
        <p>Example profile.</p>
      </section>
      <section className="section-center">
        <div className="img-wrapper">
          <img src={profile} alt="" />
        </div>
      </section>
    </Layout>
    
);

export default Profile;
