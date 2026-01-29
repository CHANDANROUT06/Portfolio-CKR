import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function Apply() {
  const { id } = useParams();

  return (
    <>
      <Navbar />
      <div style={styles.box}>
        <h2>Apply for Job #{id}</h2>
        <input placeholder="Your Name" />
        <input placeholder="Email" />
        <textarea placeholder="Why should we hire you?" />
        <button>Submit Application</button>
      </div>
    </>
  );
}

const styles = {
  box: {
    maxWidth: "400px",
    margin: "40px auto",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },
};
