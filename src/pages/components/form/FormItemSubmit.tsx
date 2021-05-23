import { ButtonProps, Form } from "antd";
import SubmitButton from "../SubmitButton";
import React from "react";

const wrapperCol = { offset: 6 };

const FormItemSubmit = (props: ButtonProps) => (
    <Form.Item wrapperCol={wrapperCol}>
        <SubmitButton { ...props } />
    </Form.Item>
);

export default FormItemSubmit;