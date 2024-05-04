import Alert from "../../components/Alert/alert";
import { alertData } from "../../data/sample/alertData";

export default function AlertSection() {
  const sortedAlerts = alertData.sort((a, b) => b.timer - a.timer);
  return (
    <>
      {sortedAlerts.map((alert) => {
        return (
          <Alert
            key={alert.id}
            heading={alert.heading}
            timer={alert.timer}
            message={alert.message}
            type={alert.type}
            position={alert.position}
          />
        );
      })}
    </>
  );
}
