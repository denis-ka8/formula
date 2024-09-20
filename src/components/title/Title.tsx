import React, { ReactNode } from "react";
import { StyledTitle } from "./title.styles";

interface TitleProps {
	children: ReactNode;
}

const Title: React.FC<TitleProps> = ({ children }) => (
	<StyledTitle>{children}</StyledTitle>
);

export { Title };
