import Alerts from "../../components/Alerts/alerts";
import { bannerData } from "../../helper/alertData";

export default function AlertSection() {
  return bannerData.map((alert) => {
    return (
      <Alerts
        key={alert.id}
        className={alert.className}
        bannerBody={alert.bannerBody}
      />
    );
  });
}
