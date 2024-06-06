import styled, {css} from "styled-components";

type StyledLinkPropsType = {
    href: string;
    name?: string;
    iconId?: string;
    width?: string;
    height?: string;
    viewBox?: string;
    isSmall?: boolean;
    color?: string;
};

const Link = styled.a<StyledLinkPropsType>`
	transition: all 0.5s;
	font-size: ${(props) => (props.isSmall ? 1.125 : 1.25)}rem;
	color: ${(props) => (props.color ? props.theme.colors.title : props.theme.colors.primary)};
	transition: color 0.7s, transform 0.5s;

	@media ${props => props.theme.media.mobile} {
		font-size: 1.25rem	;
	}

	${(props) =>
    props.name &&
    css`
			
			font-family: 'DM Sans', sans-serif;
			font-weight: 500;
			text-decoration: none;
			display: block;
			padding: 2px 0;
			position: relative;
			line-height: 1.3;

			&[href^="tel:"],
			&[href^="mailto:"] {
				&::before {
					display: none;
				}

				&:hover {
					opacity: 0.8;
				}
			}

			&::before {
				content: "";
				display: block;
				position: absolute;
				bottom: 0;
				width: 0;
				height: 2px;
				background: ${(props: StyledLinkPropsType) => (props.color ? props.color : "rgb(102, 102, 102)")};
				transition: width 0.5s;
			}
			&:hover {
				&::before {
					width: 100%;
				}
			}
		`}

	&:hover {
		fill: ${(props: StyledLinkPropsType) => (props.color ? props.color : "rgb(102, 102, 102)")};
		${(props) =>
    props.iconId &&
    css`
				transform: translateY(-3px);
			`}
	}
`;

export const S = {
    Link
}