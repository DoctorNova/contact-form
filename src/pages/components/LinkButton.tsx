import { Button } from "antd";
import { ButtonProps } from "antd/lib/button";
import React from "react";
import { Link } from "react-router-dom";

interface LinkButtonProps extends ButtonProps {
    to: string
}

const LinkButton = (props: LinkButtonProps) => (
  <Link to={props.to}>
    <Button {...props}>
      <span>{props.children}</span>
    </Button>
  </Link>
);

export default LinkButton;
