import styled, {keyframes} from "styled-components";

const Menu = styled.nav`
	padding-top: 6px;

	@media (max-width:1100px) {
		order: 2;
		margin-left: 40px;
	}

      @media ${props => props.theme.media.mobile} {
        order: 2;
        margin-left: 20px;
      }
`;

const MenuList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 3.75rem;

  @media (max-width:1100px) {
    display: none;
  }
`

const SlideFrom = keyframes`
    from {
        width: 60%;
    }

    50% {
        width: 100%;
    }

    to {
        width: 60%;
    }`
const SlideTo = keyframes`
  from {
    width: 100%;
  }

  50% {
    width: 60%;
  }

  to {
    width: 100%;
  }
`

const BurgerButton = styled.button`
	display: none;
	width: 30px;
	height: 25px;
	position: relative;
	
	
	& span {
		display: inline-block;
		width: 100%;
		height: 2px;
		right: 0;
		background: ${props => props.theme.colors.primary};
		position: absolute;
		
		&:nth-child(2) {
			top: calc(50% - 1px);
			width: 60%;
		}
		
		&:last-child {
			bottom: 0;
			width: 100%;
		}
	}
	
	&:hover {
		& span {
          &:first-child {
            animation: ${SlideTo} 0.9s linear infinite;
          }

          &:nth-child(2) {
              animation: ${SlideFrom} 0.9s linear infinite 0.2s;
          }

          &:last-child {
			  animation: ${SlideTo} 0.9s linear infinite 0.4s;
          }

        }
	}
	@media (max-width:1100px) {
		display: flex;
	}
`

export const S = {
    Menu,
    BurgerButton,
    MenuList
}