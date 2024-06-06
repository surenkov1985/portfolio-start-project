import styled from "styled-components";

export const StyledContactsMenu = styled.nav`
  margin-right: 46px;
  padding-top: 12px;

	& ul {
		list-style: none;
		padding: 0;
		margin: 0;
		display: flex;
        flex-wrap: wrap;
		gap: 1rem 4.5rem;

      @media screen and (max-width: 991px) {
        gap: 1rem 3rem;
      }
      
      @media ${props => props.theme.media.tablet} {
        gap: 1rem 3rem;
      }
      @media ${props => props.theme.media.mobile} {
        gap: 1rem 2rem;
      }
	}
  @media ${props => props.theme.media.tablet} {
    margin-right: 0;
  }

  @media ${props => props.theme.media.mobile} {
    display: none;
  }
`;
