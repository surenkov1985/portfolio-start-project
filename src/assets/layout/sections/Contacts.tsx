import React from "react";
import { Container } from "../../styledComponents/Containers";
import { StyledGradientText } from "../Footer";

export function Contacts() {
	return (
		<section id="contacts">
			<Container display="flex">
				<div>
					<h2>
						<section id="projects">
							<Container display="flex">
								<div>
									<h2>For any questions please mail me:</h2>
									<StyledGradientText>hi@pavanmg.in</StyledGradientText>
								</div>
							</Container>
						</section>
					</h2>
				</div>
			</Container>
		</section>
	);
}
