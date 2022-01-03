import { useContext } from "react";
import AlertContext from "../../context/Alert/AlertContext";
const Alert = () => {
  const { alert } = useContext(AlertContext);
  return (
    alert && (
      <div className={`alert alert-${alert.type}`}>
        <i className="fas fa-info-circle"></i>
        {alert.msg}
      </div>
    )
  );
};

export default Alert;
