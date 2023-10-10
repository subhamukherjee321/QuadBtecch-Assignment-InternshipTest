import { Box } from "@chakra-ui/react";
import ApplyViewApplication from "../Components/ApplyViewApplication";
import LoginLogout from "../Components/LoginLogout";

const FormComponent = () => {
  return (
    <Box bgColor={"#eaf6f6"} py={"1.5rem"}>
      <LoginLogout />
      <ApplyViewApplication />
    </Box>
  );
};

export default FormComponent;
