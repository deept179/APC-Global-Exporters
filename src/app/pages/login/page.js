"use client";
import React, { useState } from 'react';
import { Button, Checkbox, Col, Form, Input, Row } from 'antd';
import Link from 'next/link';
import { loginAPI } from '@/api/login';

const Login = () => {
  const [loginData, setLoginData] = useState({
    email: null,
    password: null,
  })

  const onFinish = () => {
    console.log('Success:', loginData);
    // const sendData = JSON.stringify(loginData)
    LoginAPICall(loginData);
  };

  const LoginAPICall = async (data) => {
    try {
      console.log("daataaaaaaaa: ",data)
      const LoginData = await loginAPI(data);
      console.log("LodinData: ", loginData)
  
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className='h-screen flex align-center'>
      <Form
        name="basic"
        className='w-1/3 mx-auto p-5 my-auto bg-slate-200 rounded-md'
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
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
          {/* <Input onChange={(e) => setLoginData((pre) => pre.email == e.target.value)}/> */}
          <Input onChange={(e) => setLoginData((pre) => ({...pre, email: e.target.value}))}/>
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
          <Input.Password onChange={(e) => setLoginData((pre) => ({...pre, password: e.target.value}))}/>
        </Form.Item>


        <Form.Item
          className='flex justify-center'
        >
          <Link href="/admin">
            <Button type="primary" onClick={onFinish} className='bg-slate-700'>
              Submit
            </Button>
          </Link>
        </Form.Item>
      </Form>
    </div>
  )
};
export default Login;