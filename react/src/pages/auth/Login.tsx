import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Form, Input } from "antd";
import React, { useState } from "react";
import styled from "styled-components";

interface LoginInfo {
  email: string;
  password: string;
}

const Login = () => {
  const handleLogin = (loginInfo: LoginInfo) => {
    console.log("Received values:", loginInfo);
    // 여기에 로그인 처리 로직을 추가할 수 있습니다.
  };

  return (
    <LoginFormWrapper>
      <LoginFormContainer>
        <h2 className="mt-5 mb-4">로그인</h2>
        <Form
          name="normal_login"
          className="login-form"
          initialValues={{ remember: true }}
          onFinish={handleLogin}
        >
          <Form.Item
            name="email"
            rules={[{ required: true, message: "이메일을 입력하세요!" }]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="이메일"
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: "비밀번호를 입력하세요!" }]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="비밀번호"
            />
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              로그인
            </Button>
          </Form.Item>
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
