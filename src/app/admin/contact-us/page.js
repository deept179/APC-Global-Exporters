"use client";
import React, { useState } from 'react';
import { Form, Input, Button } from 'antd';

const ContactUs = () => {
  const [formFields, setFormFields] = useState([
    { name: 'email', label: 'Email', required: true },
    { name: 'phone', label: 'Phone Number', required: true },
    { name: 'address', label: 'Address', required: false },
  ]);

  const onFinish = (values) => {
    console.log('Submitted values:', values);
  };

  const handleFieldChange = (index, fieldData) => {
    setFormFields((prevFields) => {
      const newFormFields = [...prevFields];
      newFormFields[index] = { ...newFormFields[index], ...fieldData };
      return newFormFields;
    });
  };

  return (
    <div className='h-screen flex align-center'>
      <Form
        name="contactForm"
        layout="vertical"
        onFinish={onFinish}
        autoComplete="off"
      >
        {formFields.map((field, index) => (
          <div key={field.name} className='flex items-center'>
            <Form.Item
              label="Field Label"
              name={`label-${field.name}`}
              initialValue={field.label}
              rules={[
                {
                  required: true,
                  message: 'Please enter the field label',
                },
              ]}
              className='flex-1'
            >
              <Input
                placeholder="Field Label"
                onChange={(e) => handleFieldChange(index, { label: e.target.value })}
              />
            </Form.Item>

            <Form.Item
              label="Required"
              name={`required-${field.name}`}
              initialValue={field.required}
              valuePropName="checked"
              className='flex-none'
            >
              <input
                type="checkbox"
                onChange={(e) => handleFieldChange(index, { required: e.target.checked })}
              />
            </Form.Item>
          </div>
        ))}

        <Form.Item className='flex justify-center'>
          <Button type="primary" htmlType="submit">Submit</Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default ContactUs;
