import Alerts from "../../components/Alerts/alerts";
import { alertData } from "../../helper/alertData";

export default function AlertSection() {
  return alertData.map((alert) => {
    return (
      <Alerts
        key={alert.id}
        className={alert.className}
        alertBody={alert.alertBody}
      />
    );
  });
}
