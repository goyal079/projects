import Loading from "./loading.gif";

const Spinner = () => {
  return (
    <img
      src={Loading}
      alt="Loading..."
      style={{ display: "block", margin: "auto", width: "200px" }}
    />
  );
};
export default Spinner;
