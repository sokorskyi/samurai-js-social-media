import { withAuth } from "../../../hoc/withAuth";
import Profile from "./Profile";

const ProfileWithAuth = withAuth(Profile);

export default ProfileWithAuth;
