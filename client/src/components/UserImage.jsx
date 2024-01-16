import { Box } from "@mui/material";

const UserImage = ({ image, size = "60px" }) => {
  
  // const apiUrl = process.env.REACT_APP_API_URL;
  return (
    <Box width={size} height={size}>
      <img
        style={{ objectFit: "cover", borderRadius: "50%" }}
        width={size}
        height={size}
        alt="user"
        src={`http://localhost:3001/assets/${image}`}
      />
    </Box>
  );
};

export default UserImage;
