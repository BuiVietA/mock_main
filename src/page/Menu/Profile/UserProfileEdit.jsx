
import { Button, Form, Input } from "antd";

const UserProfileEdit = ({ profile, handleCancelEdit, handleSaveEdit }) => {
  return (
    <Form onFinish={handleSaveEdit} initialValues={profile}>
       <Form.Item label="first name" name="first_name" rules={[{ required: true, message: "Please enter your firstname" }]}>
               <Input />
             </Form.Item>
             <Form.Item label="last_name" name="last_name" rules={[{ required: true, message: "Please enter your lastname" }]}>
               <Input />
             </Form.Item>
             <Form.Item label="address" name="address" rules={[{ required: true, message: "Please enter your address" }]}>
               <Input />
             </Form.Item>
             <Form.Item label="Dob" name="dob" rules={[{ required: true, message: "Please enter your birthday" }]}>
               <Input />
             </Form.Item>
             <Form.Item label="Phone" name="phone" rules={[{ required: true, message: "Please enter your phone" }]}>
               <Input />
             </Form.Item>
      
      
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Save
        </Button>
        <Button onClick={handleCancelEdit}>Cancel</Button>
      </Form.Item>
    </Form>
  );
};

export default UserProfileEdit;
