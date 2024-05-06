import Banner from "../../components/Banner/banner";
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
