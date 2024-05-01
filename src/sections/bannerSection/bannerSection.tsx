import Banner from "../../components/Alerts/banner";
import { bannerData } from "../../data/sample/bannerData";

export default function BannerSection() {
  return bannerData.map((alert) => {
    return (
      <Banner
        key={alert.id}
        className={alert.className}
        bannerBody={alert.bannerBody}
      />
    );
  });
}
