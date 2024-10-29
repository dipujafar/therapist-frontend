import ProfileDetails from "./ProfileDetails";
import SitterBanner from "./SitterBanner";

const SingleBabySitterContainer = () => {
  return (
    <div className="lg:space-y-16 space-y-8">
      <SitterBanner></SitterBanner>
      <div className="grid grid-cols-1 lg:grid-cols-3 xl:gap-x-14 gap-x-8 gap-y-8">
        <div className="lg:col-span-2">
          <ProfileDetails></ProfileDetails>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default SingleBabySitterContainer;
