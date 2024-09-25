import { Link } from "react-router-dom";
import styled from "styled-components";

export const MenuWrapper = styled.div`
	flex: 1 0 240px;
	max-width: 240px;
	padding: 15px 0;
`;
export const Logo = styled.img`
	margin-bottom: 15px;
`;
export const MenuLink = styled(Link)`
	display: flex;
	align-items: center;
	gap: 10px;
	padding: 10px 0;
	font-weight: 700;
	color: #646464;
	& svg {
		flex: 0 0 24px;
	}
`;
