import ProfileReviewRating from "./ProfileReviewRating";
import UserBanner from "./UserBanner";
import UserProfileDetails from "./UserProfileDetails";
import UserProfileInfo from "./UserProfileInfo";

const UserProfileContainer = () => {
  return (
    <div className="lg:space-y-16 space-y-8">
      <UserBanner></UserBanner>
      <div className="grid grid-cols-1 lg:grid-cols-3 xl:gap-x-14 gap-x-8 gap-y-8">
        <div className="lg:col-span-2 space-y-8">
          <UserProfileDetails></UserProfileDetails>
          <div className="hidden lg:block">
            <ProfileReviewRating></ProfileReviewRating>
          </div>
        </div>
        <div>
          <UserProfileInfo></UserProfileInfo>
        </div>
        <div className="lg:hidden block">
          <ProfileReviewRating></ProfileReviewRating>
        </div>
      </div>
    </div>
  );
};

export default UserProfileContainer;
