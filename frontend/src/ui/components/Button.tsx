import Image from "next/image";
import React from "react";
import styles from "@/ui/styles/components.module.css";
import { ButtonProps } from "@/lib/types/next";

const Button: React.FC<ButtonProps> = ({ action, buttonPic, altText }) => (
  <div className={styles.button} onMouseDown={() => action()}>
    <Image src={buttonPic} alt={altText} />
  </div>
);

export default Button;
