import ProfileDetails from "./ProfileDetails";
import ProfileInfo from "./ProfileInfo";
import SitterBanner from "./SitterBanner";
import SitterProfileReview from "./SitterProfileReview";

const SingleBabySitterContainer = () => {
  return (
    <div className="lg:space-y-16 space-y-8">
      <SitterBanner></SitterBanner>
      <div className="grid grid-cols-1 lg:grid-cols-3 xl:gap-x-14 gap-x-8 gap-y-8">
        <div className="lg:col-span-2 space-y-8">
          <ProfileDetails></ProfileDetails>
          <div className="hidden lg:block">
            <SitterProfileReview></SitterProfileReview>
          </div>
        </div>
        <div>
          <ProfileInfo></ProfileInfo>
        </div>
        <div className="lg:hidden block">
          <SitterProfileReview></SitterProfileReview>
        </div>
      </div>
    </div>
  );
};

export default SingleBabySitterContainer;
