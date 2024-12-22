import Banner from "../components/homecomponents/Banner";
import GalleryImg from "../components/homecomponents/GalleryImg";
// import BannerPlain from "../components/homecomponents/BannerPlain";
// import InteriorDesign from "../components/homecomponents/InteriorDesign";
import TrustedPartner from "../components/homecomponents/TrustedPartner";
import ValueCard from "../components/homecomponents/ValueCard";

const Home = () => {
  return (
    <>
      <Banner />
      <ValueCard />
      {/* <BannerPlain /> */}
      <GalleryImg />
      <TrustedPartner />
      {/* <InteriorDesign /> */}
    </>
  );
};

export default Home;
