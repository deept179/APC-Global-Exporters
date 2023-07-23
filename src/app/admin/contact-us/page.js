// import React from 'react'
// import AdminLayout from '../page';

// const ContactUs = () => {
//   return (
//     <div>this is contact us page</div>
//   )
// }

// export default ContactUs;
"use client";
import React, { useState } from 'react';
import { Form, Input, Button, Checkbox, Space } from 'antd';

const ContactUs = () => {
  const [formFields, setFormFields] = useState([]);

  const onFinish = (values) => {
    console.log('Submitted values:', values);
  };

  const addFormField = () => {
    setFormFields((prevFields) => [
      ...prevFields,
      {
        name: `field-${prevFields.length}`,
        label: '',
        required: true,
      },
    ]);
  };

  const removeFormField = (fieldIndex) => {
    setFormFields((prevFields) => prevFields.filter((field, index) => index !== fieldIndex));
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
          <Space key={field.name} className="flex w-full">
            <Form.Item
              label="Field Label"
              name={[field.name, 'label']}
              initialValue={field.label}
              rules={[
                {
                  required: true,
                  message: 'Please enter the field label',
                },
              ]}
              className='flex-1'
            >
              <Input placeholder="Field Label" />
            </Form.Item>

            <Form.Item
              label="Required"
              name={[field.name, 'required']}
              initialValue={field.required}
              valuePropName="checked"
              className='flex-none'
            >
              <Checkbox />
            </Form.Item>

            {formFields.length > 1 && (
              <Button className="flex-none" onClick={() => removeFormField(index)}>Remove</Button>
            )}
          </Space>
        ))}

        <Form.Item className='flex justify-center'>
          <Button type="dashed" onClick={addFormField}>Add Field</Button>
        </Form.Item>

        <Form.Item className='flex justify-center'>
          <Button type="primary" htmlType="submit">Submit</Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default ContactUs;
