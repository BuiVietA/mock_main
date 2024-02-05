
import { Button } from "antd";

const UserProfile = ({ profile,handleEdit }) => {
  return (
    <div>
      <p>ID: {profile.id}</p>
      <ul>
        <li>Last Name: {profile.lastname}</li>
        <li>Firth Name: {profile.firstname}</li>
        <li>DoB: {profile.dob}</li>
        <li>Phone: {profile.phone}</li>
        <li>Address: {profile.address}</li>
       
       
        <Button type="primary" onClick={handleEdit}>
          Edit Profile
        </Button>
      </ul>
    </div>
  );
};

export default UserProfile;
