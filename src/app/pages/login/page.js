"use client";
import React from 'react';
import { Button, Checkbox, Col, Form, Input, Row } from 'antd';
import Link from 'next/link';

const onFinish = (values) => {
  console.log('Success:', values);
};
const onFinishFailed = (errorInfo) => {
  console.log('Failed:', errorInfo);
};
const Login = () => (
  <div className='h-screen flex align-center'>
    <Form
      name="basic"
      className='w-1/3 mx-auto p-5 my-auto bg-slate-200 rounded-md'
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Row className='text-lg font-medium flex justify-center mb-3'>Log In to APC Global Exporters</Row>
      <Form.Item
        name="email"
        label="E-mail"
        rules={[
          {
            type: 'email',
            message: 'The input is not valid E-mail!',
          },
          {
            required: true,
            message: 'Please input your E-mail!',
          },
        ]}
        className='ml-5'
      >
        <Input />
      </Form.Item>


      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
      >
        <Input.Password />
      </Form.Item>


      <Form.Item
        className='flex justify-center'
      >
        <Link href="/admin">
          <Button type="primary" htmlType="submit" className='bg-slate-700'>
            Submit
          </Button>
        </Link>
      </Form.Item>
    </Form>
  </div>
);
export default Login;