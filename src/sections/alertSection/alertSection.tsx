import Alert from "../../components/Alert/alert";
import { alertData } from "../../data/sample/alertData";

export default function AlertSection() {
  const sortedAlerts = alertData.sort((a, b) => b.timer - a.timer);
  return (
    <>
      {/* <div>
        <Alert type="warning" timer={4500} />
        <Alert type="success" timer={3500} />
        <Alert type="danger" timer={2500} />
        <Alert type="default" />
      </div> */}

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
