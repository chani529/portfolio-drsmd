import Button from "@components/widgets/Button";
import Form from "@components/widgets/Form";
import Input from "@components/widgets/Input";
import { LoginParams } from "@type/authTypes";
import { SubmitHandler } from "react-hook-form";
import auth from "src/apis/auth";
import styled from "styled-components";
import { useNavigate } from "react-router";

const Login = () => {
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<LoginParams> = async (data) => {
    await auth.login(data).then((response) => {
      sessionStorage.setItem("TOKEN", response.resultData.access);
      navigate("/home");
    });
  };

  return (
    <LoginFormWrapper>
      <LoginFormContainer>
        <h3>로그인</h3>
        <Form onSubmit={onSubmit}>
          <Input name="email" rules={{ required: "이메일을 입력해주세요" }} />
          <Input
            name="password"
            type="password"
            rules={{ required: "비밀번호을 입력해주세요" }}
          />
          <Button type="submit" width="100%">
            Login
          </Button>
        </Form>
      </LoginFormContainer>
    </LoginFormWrapper>
  );
};

export default Login;

const LoginFormWrapper = styled.div`
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

const LoginFormContainer = styled.div`
  width: 300px;
`;
