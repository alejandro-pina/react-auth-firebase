import IconLoading from "../Icons/IconLoading";
import Layout from "../Layouts/Layout";
import styles from "./Loading.module.css";

const Loading = () => {
  return (
    <Layout>
      <section className="section-title section-center">
        <IconLoading styleIcon={styles.svg_spinner} />
      </section>    
    </Layout>
  );
};
export default Loading;
