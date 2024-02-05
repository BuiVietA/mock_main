

import { useEffect, useState } from "react";
import {  Layout } from "antd";
import axios from "axios";
import { toast } from "react-toastify";
import UserProfile from "./UserProfile";
import UserProfileEdit from "./UserProfileEdit";
import { useParams } from "react-router-dom";

const Profile = () => {
  const { Content } = Layout;

  const param = useParams();
  const [profile, setProfile] = useState({});
  const [isEditing, setIsEditing] = useState(false);

 const getProfile = async () => {
  try {
    const response = await axios.get(`https://65bcea12b51f9b29e9328fa4.mockapi.io/api/user/${param.id}`);
    setProfile(response.data);
  } catch (error) {
    console.error("Error fetching profile:", error);
    toast.error(error.response?.data?.message || "Lỗi khi lấy thông tin hồ sơ");
  }
};

 
  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
  };

  const handleSaveEdit = async (values) => {
    try {
      await axios.put(`https://656eef0a6529ec1c6236f71b.mockapi.io/api/${param.id}`, values);
      toast.success("Thông tin đã được cập nhật");
      setIsEditing(false);
      getProfile(); 
    } catch (error) {
      toast.error(error.response?.data?.message || "Lỗi khi cập nhật thông tin");
    }
  };

  const customRequest = async ({ file, onSuccess, onError }) => {
    try {
      const formData = new FormData();
      formData.append("file", file);

      const response = await axios.put("https://656eef0a6529ec1c6236f71b.mockapi.io/api/update", formData);

      setProfile((prevProfile) => ({
        ...prevProfile,
        avatar: response.data.avatarUrl,
      }));

      onSuccess();
    } catch (error) {
      onError(error);
    }
  };

  useEffect(() => {
    if (param.id) {
      getProfile();
    }
  }, [param.id]);

  return (
    <Layout>
     
      <Content>
        {isEditing ? (
          <UserProfileEdit
            profile={profile}
            handleCancelEdit={handleCancelEdit}
            handleSaveEdit={handleSaveEdit}
            customRequest={customRequest}
          />
        ) : (
          <UserProfile profile={profile} handleEdit={handleEdit} />
        )}
      </Content>
    </Layout>
  );
};

export default Profile;
