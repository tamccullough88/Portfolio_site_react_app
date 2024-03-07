import React from "react";
import theme from "theme";
import { Theme, Link, Text, LinkBox, Box, Section, Image, Structure } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Override } from "@quarkly/components";
import * as Components from "components";
import { FiMenu } from "react-icons/fi";
import { AiOutlineMenu } from "react-icons/ai";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"projects"} />
		<Helmet>
			<title>
				Thomas McCullough
			</title>
			<meta name={"description"} content={"Web site created using quarkly.io"} />
			<meta property={"og:title"} content={"Thomas McCullough"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/65d793ba1d712a00233098ec/images/_af68a1b9-8759-4539-bd9e-587403783fcf.jpeg?v=2024-02-22T20:19:04.623Z"} type={"image/x-icon"} />
		</Helmet>
		<Box
			min-width="100px"
			min-height="100px"
			md-display="inline-flex"
			sm-height="100vh"
			sm-width="100vw"
			sm-align-items="flex-start"
			sm-justify-content="center"
			sm-flex-direction="row"
			height="100vh"
			width="100vw"
			display="flex"
			align-items="center"
			justify-content="center"
			md-justify-content="center"
			md-align-content="center"
			lg-overflow-x="auto"
			lg-overflow-y="auto"
			overflow-x="auto"
			overflow-y="auto"
		>
			<Section
				sm-padding="8px 0 8px 0"
				quarkly-title="Header-5"
				background="#171131"
				width="100vw"
				display="block"
				position="fixed"
				left="0px"
				right="-284.882501065341px"
				height="102px"
				lg-padding="0px 0 24px 0"
				md-display="flex"
				md-flex-direction="column"
				md-justify-content="flex-start"
				md-height="10%"
				bottom="978px"
				top="0px"
			>
				<Override
					slot="SectionContent"
					flex-direction="row"
					justify-content="space-between"
					lg-align-items="center"
					lg-flex-direction="row"
				/>
				<Box
					display="flex"
					padding="12px 0"
					justify-content="space-between"
					align-items="flex-start"
					flex-direction="row"
					width="30%"
					sm-width="50%"
					sm-align-items="center"
					sm-flex-direction="row"
					sm-justify-content="flex-start"
					md-width="50%"
					lg-width="70%"
					md-justify-content="flex-start"
				>
					<LinkBox flex-direction="row" href="/index" display="flex" grid-gap="12px">
						<Text
							margin="0"
							md-margin="0px 0 0px 0"
							text-align="left"
							font="normal 400 32px/1.2 --fontFamily-googleFredoka"
							sm-margin="0px 0 0px 0"
							display="block"
							border-color="#42ff00"
							color="#ffffff"
							flex="1 0 auto"
							sm-flex="0 1 auto"
							sm-display="flex"
							sm-font="normal 400 25px/1.2 --fontFamily-googleFredoka"
						>
							Thomas A McCullough
						</Text>
					</LinkBox>
				</Box>
				<Components.QuarklycommunityKitMobileSidePanel
					menuPosition="full"
					breakpoint="lg"
					width="70%"
					sm-width="50%"
					md-width="50%"
					lg-width="30%"
					lg-color="--light"
				>
					<Override slot="Children" md-display="flex" />
					<Override
						slot="Content"
						padding="0px 0px 0px 0px"
						background="rgba(255, 255, 255, 0)"
						lg-background="#171131"
						lg-margin="0px 0px 0px 0px"
					/>
					<Override
						slot="Button Text"
						font="normal 600 16px/1.5 -apple-system, system-ui, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif"
						text-transform="uppercase"
						letter-spacing="1px"
						sm-font="normal 600 14px/1.5 -apple-system, system-ui, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif"
						sm-margin="0px 2px 0px 0px"
						lg-margin="0px 0px 0px 0px"
					/>
					<Override
						slot="Button Icon :closed"
						category="fi"
						icon={FiMenu}
						size="32px"
						padding="5px 7px 5px 7px"
						border-radius="50px"
					/>
					<Override
						slot="Button Icon"
						width="28px"
						height="28px"
						category="ai"
						icon={AiOutlineMenu}
						color="--dark"
						size="24px"
						lg-width="32px"
						lg-height="32px"
						lg-color="--light"
					/>
					<Override
						slot="Cross"
						lg-width="32px"
						lg-height="32px"
						size="32px"
						top="24px"
						right="24px"
					/>
					<Override slot="Wrapper" lg-background="#171131" />
					<Override slot="Overlay" lg-background="#171131" />
					<Box
						align-items="center"
						lg-justify-content="center"
						lg-align-items="flex-start"
						justify-content="flex-end"
						display="flex"
						lg-flex-direction="column"
						lg-margin="0px auto 0px auto"
						lg-min-width="300px"
						lg-max-width="1280px"
						lg-width="90%"
						lg-padding="24px 0px 48px 0px"
					>
						<Box
							display="none"
							lg-width="100%"
							lg-margin="0px 0px 24px 0px"
							lg-display="flex"
							lg-padding="12px 0px 12px 0px"
						>
							<LinkBox flex-direction="row" href="/index" display="flex" grid-gap="12px">
								<Text
									margin="0"
									md-margin="0px 0 0px 0"
									text-align="left"
									font="normal 300 32px/1.5 --fontFamily-googleFredoka"
									sm-margin="0px 0 0px 0"
									display="block"
									lg-font="normal 300 20px/1.5 --fontFamily-googleFredoka"
									lg-color="--light"
								>
									Thomas A McCullough
								</Text>
							</LinkBox>
						</Box>
						<Components.QuarklycommunityKitMenu
							display="flex"
							filterMode="exclude"
							filterPages="/index"
							grid-gap="12px"
							lg-flex-direction="column"
							lg-padding="6px 0px 6px 0px"
							lg-margin="0px 0px 24px 0px"
							align-items="center"
							flex-wrap="wrap"
							overflow-x="visible"
							overflow-y="visible"
							lg-align-items="flex-start"
						>
							<Override
								slot="link"
								color="--darkL2"
								hover-color="--primary"
								font="--base"
								text-decoration-line="initial"
								transition="color 0.1s ease 0s"
								lg-font="--lead"
							/>
							<Override
								slot="item-active"
								border-width="0 0 2px 0"
								border-style="solid"
								border-color="--color-darkL2"
								lg-border-width="0 0 0 2px"
							/>
							<Override slot="item" padding="6px 6px 6px 6px" lg-padding="6px 12px 6px 12px" />
							<Override slot="link-active" cursor="default" color="--darkL2" hover-color="--darkL2" />
							<Override slot="link-about" color="#ffffff" font="normal normal 28px/100% --fontFamily-googleFredoka">
								About
							</Override>
							<Override slot="link-projects" color="#ffffff" font="normal normal 28px/100% --fontFamily-googleFredoka" />
							<Override slot="link-contact" color="#ffffff" font="normal normal 28px/100% --fontFamily-googleFredoka" />
						</Components.QuarklycommunityKitMenu>
						<Box
							width="25%"
							display="none"
							lg-width="100%"
							lg-flex-direction="column"
							lg-align-items="flex-start"
							lg-display="flex"
							justify-content="space-around"
							align-items="center"
							flex-wrap="wrap"
							lg-margin="32px 0px 0px 0px"
						/>
					</Box>
				</Components.QuarklycommunityKitMobileSidePanel>
			</Section>
			<Box
				display="flex"
				lg-margin="10vh 0px 0px 0px"
				md-display="block"
				md-flex-direction="column"
				md-align-items="center"
				sm-justify-content="center"
				sm-align-items="center"
				sm-height="100vh"
				sm-width="100vw"
				margin="0vh 0px 0px 0px"
				lg-max-height="75vh"
				sm-min-width="100vw"
				sm-min-height="100hv"
				sm-margin="0px 0px 0px 0px"
				width="100vw"
				height="75vh"
				flex-wrap="wrap"
				flex-direction="row"
				padding="15px 0px 0px 0px"
				justify-content="space-around"
				md-flex-wrap="wrap"
				md-align-content="center"
				md-align-self="center"
				md-flex="0 1 auto"
				md-margin="0px 0 0px 0px"
				md-padding="15px 20vw 0px 20vw"
			>
				<Structure
					inner-width="20vw"
					display="flex"
					order="0"
					align-items="center"
					justify-content="center"
					align-content="center"
					background="rgba(41, 126, 196, 0.68)"
					border-radius="10%"
					padding="24px 2vw 24px 2vw"
					margin="1vh 1vw 1vh 1vw"
					quarkly-title="Rest-Rant"
					font="3vh --fontFamily-googleFredoka"
					width="350px"
					height="350px"
					align-self="auto"
					md-margin="1vh 0px 1vh 0px"
					md-padding="1vh 0px 1vh 0px"
					xs-width="250px"
					xs-flex-direction="row"
					xs-height="fit-content"
				>
					<Override
						slot="Content"
						display="flex"
						flex-direction="column-reverse"
						border-radius="25px"
						padding="5px 5px 5px 5px"
						margin="5px 5px 5px 5px"
						flex="0 1 auto"
						max-width="325px"
						xs-width="250px"
						xs-min-width="inherit"
						xs-align-items="center"
						xs-justify-content="center"
						xs-align-content="center"
					>
						<Override slot="cell-0">
							<Text color="#ffffff" font="15px --fontFamily-googleFredoka" lg-width="inherit" margin="0px 0px 0px 0px">
								A web app that lets you add a restaurant and comment on how good they are or rant about how bad they are. Built with Express.js, React.js, and Node.js
							</Text>
						</Override>
						<Override slot="cell-1">
							<Link href="https://rest-rant-phqf.onrender.com" color="#ffffff" font="25px --fontFamily-googleFredoka" hover-color="#008cff">
								Rest Rant (Yelp Clone)
							</Link>
						</Override>
						<Override slot="cell-2">
							<Image
								src="https://uploads.quarkly.io/65d793ba1d712a00233098ec/images/restrant.png?v=2024-02-27T20:36:20.879Z"
								display="block"
								max-height="325px"
								max-width="325px"
								xs-width="225px"
								srcSet="https://smartuploads.quarkly.io/65d793ba1d712a00233098ec/images/restrant.png?v=2024-02-27T20%3A36%3A20.879Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/65d793ba1d712a00233098ec/images/restrant.png?v=2024-02-27T20%3A36%3A20.879Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/65d793ba1d712a00233098ec/images/restrant.png?v=2024-02-27T20%3A36%3A20.879Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/65d793ba1d712a00233098ec/images/restrant.png?v=2024-02-27T20%3A36%3A20.879Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/65d793ba1d712a00233098ec/images/restrant.png?v=2024-02-27T20%3A36%3A20.879Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/65d793ba1d712a00233098ec/images/restrant.png?v=2024-02-27T20%3A36%3A20.879Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/65d793ba1d712a00233098ec/images/restrant.png?v=2024-02-27T20%3A36%3A20.879Z&quality=85&w=3200 3200w"
								sizes="(max-width: 414px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,(max-width: 414px) 100vw,(max-width: 300px) 100vw,100vw"
							/>
						</Override>
						<Override
							slot="Cell 0th"
							width="300px"
							height="10hv"
							align-self="center"
							order="0"
							display="flex"
							align-items="center"
							margin="2px 2px 0px 2px"
							max-width="300px"
							lg-width="35vw"
							md-order="0"
							md-flex-wrap="wrap"
							md-flex-direction="row"
							md-justify-content="space-between"
							md-align-self="center"
							md-width="300px"
							xs-min-width="fit-content"
							xs-width="225px"
						/>
					</Override>
				</Structure>
				<Structure
					inner-width="20vw"
					display="flex"
					order="1"
					align-items="center"
					justify-content="center"
					align-content="center"
					background="rgba(41, 126, 196, 0.68)"
					border-radius="10%"
					padding="24px 2vw 24px 2vw"
					margin="1vh 1vw 1vh 1vw"
					quarkly-title="VJS Game"
					width="350px"
					height="350px"
					md-margin="1vh 0px 1vh 0px"
					md-padding="1vh 0px 1vh 0px"
					xs-width="250px"
					xs-flex-direction="row"
					xs-min-height="min-content"
					xs-height="fit-content"
				>
					<Override
						slot="Content"
						display="flex"
						flex-direction="column-reverse"
						border-radius="25px"
						padding="5px 5px 5px 5px"
						margin="5px 5px 5px 5px"
						max-width="325px"
						flex="0 1 auto"
						xs-width="250px"
						xs-min-width="inherit"
						xs-align-items="center"
						xs-justify-content="center"
						xs-align-content="center"
						xs-height="fit-content"
						xs-min-height="fit-content"
					>
						<Override
							slot="Cell 0th"
							font="16px --fontFamily-googleFredoka"
							width="300px"
							height="10hv"
							align-self="center"
							order="0"
							display="flex"
							align-items="center"
							margin="2px 2px 0px 2px"
							max-width="300px"
							lg-width="35vw"
							md-order="0"
							md-flex-wrap="wrap"
							md-flex-direction="row"
							md-justify-content="space-between"
							md-align-self="center"
							md-width="300px"
							justify-content="center"
							xs-min-width="fit-content"
							xs-width="225px"
							xs-margin="0px 2px 0px 2px"
						/>
						<Override slot="cell-0">
							<Text margin="0px 0px 0px 0px" color="#ffffff" font="15px --fontFamily-googleFredoka" lg-width="inherit">
								Web game built with vanilla JS, utilizing Math.Random() to randomize the card placement. User has 16 turns to complete or lose the game.{" "}
							</Text>
						</Override>
						<Override slot="cell-1">
							<Link href="https://tamccullough88.github.io/Vanilla_JS_Memory_Game/" color="#ffffff" font="25px --fontFamily-googleFredoka" hover-color="#008cff">
								Vanilla JS Memory Game
							</Link>
						</Override>
						<Override slot="cell-2">
							<Image
								src="https://uploads.quarkly.io/65d793ba1d712a00233098ec/images/Vanilla_js_game.png?v=2024-02-27T21:38:32.846Z"
								display="block"
								max-height="180px"
								max-width="325px"
								align-self="center"
								xs-width="225px"
								srcSet="https://smartuploads.quarkly.io/65d793ba1d712a00233098ec/images/Vanilla_js_game.png?v=2024-02-27T21%3A38%3A32.846Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/65d793ba1d712a00233098ec/images/Vanilla_js_game.png?v=2024-02-27T21%3A38%3A32.846Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/65d793ba1d712a00233098ec/images/Vanilla_js_game.png?v=2024-02-27T21%3A38%3A32.846Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/65d793ba1d712a00233098ec/images/Vanilla_js_game.png?v=2024-02-27T21%3A38%3A32.846Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/65d793ba1d712a00233098ec/images/Vanilla_js_game.png?v=2024-02-27T21%3A38%3A32.846Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/65d793ba1d712a00233098ec/images/Vanilla_js_game.png?v=2024-02-27T21%3A38%3A32.846Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/65d793ba1d712a00233098ec/images/Vanilla_js_game.png?v=2024-02-27T21%3A38%3A32.846Z&quality=85&w=3200 3200w"
								sizes="(max-width: 414px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,(max-width: 414px) 100vw,(max-width: 300px) 100vw,100vw"
							/>
						</Override>
					</Override>
				</Structure>
				<Structure
					inner-width="20vw"
					display="flex"
					order="1"
					align-items="center"
					justify-content="center"
					align-content="center"
					background="rgba(41, 126, 196, 0.68)"
					border-radius="10%"
					padding="24px 2vw 24px 2vw"
					margin="1vh 1vw 1vh 1vw"
					width="350px"
					height="350px"
					md-margin="1vh 0px 1vh 0px"
					md-padding="1vh 0px 1vh 0px"
					xs-width="250px"
					xs-height="fit-content"
					quarkly-title="React-a-Mole"
				>
					<Override
						slot="Content"
						display="flex"
						flex-direction="column-reverse"
						border-radius="25px"
						padding="5px 5px 5px 5px"
						margin="5px 5px 5px 5px"
						max-width="325px"
						flex="0 1 auto"
						xs-width="250px"
						xs-min-width="inherit"
						xs-align-items="center"
						xs-justify-content="center"
						xs-align-content="center"
					>
						<Override
							slot="Cell 0th"
							font="16px --fontFamily-googleFredoka"
							width="300px"
							height="10hv"
							align-self="center"
							order="0"
							display="flex"
							align-items="center"
							margin="2px 2px 0px 2px"
							max-width="300px"
							lg-width="35vw"
							md-order="0"
							md-flex-wrap="wrap"
							md-flex-direction="row"
							md-justify-content="space-between"
							md-align-self="center"
							md-width="300px"
							xs-min-width="fit-content"
							xs-width="225px"
						/>
						<Override slot="cell-0">
							<Text
								margin="0px 0px 0px 0px"
								color="#ffffff"
								font="15px --fontFamily-googleFredoka"
								lg-width="inherit"
								md-margin="1vh 1 1vh 1px"
								md-padding="1vh 1vh 1vh 1v0h"
							>
								Utilizing
ternary operators to create a game of Whack-A-Mole within two of three
components and state variables. Implementing
math.random as a timer for when a mole shows on screen and disappears to avoid
being “Whacked”.{" "}
							</Text>
						</Override>
						<Override slot="cell-1">
							<Link
								href="https://github.com/tamccullough88/react-a-mole"
								color="#ffffff"
								font="25px --fontFamily-googleFredoka"
								hover-color="#008cff"
								md-margin="1vh 1 1vh 1px"
								md-padding="1vh 1vh 1vh 1v0h"
							>
								React-A-Mole
							</Link>
						</Override>
						<Override slot="cell-2">
							<Image
								src="https://uploads.quarkly.io/65d793ba1d712a00233098ec/images/Capture.JPG?v=2024-03-06T23:28:35.446Z"
								display="block"
								max-height="325px"
								max-width="325px"
								xs-width="225px"
								srcSet="https://smartuploads.quarkly.io/65d793ba1d712a00233098ec/images/Capture.JPG?v=2024-03-06T23%3A28%3A35.446Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/65d793ba1d712a00233098ec/images/Capture.JPG?v=2024-03-06T23%3A28%3A35.446Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/65d793ba1d712a00233098ec/images/Capture.JPG?v=2024-03-06T23%3A28%3A35.446Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/65d793ba1d712a00233098ec/images/Capture.JPG?v=2024-03-06T23%3A28%3A35.446Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/65d793ba1d712a00233098ec/images/Capture.JPG?v=2024-03-06T23%3A28%3A35.446Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/65d793ba1d712a00233098ec/images/Capture.JPG?v=2024-03-06T23%3A28%3A35.446Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/65d793ba1d712a00233098ec/images/Capture.JPG?v=2024-03-06T23%3A28%3A35.446Z&quality=85&w=3200 3200w"
								sizes="(max-width: 414px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,(max-width: 414px) 100vw,(max-width: 300px) 100vw,100vw"
							/>
						</Override>
					</Override>
				</Structure>
				<Structure
					inner-width="20vw"
					display="flex"
					order="1"
					align-items="center"
					justify-content="center"
					align-content="center"
					background="rgba(41, 126, 196, 0.68)"
					border-radius="10%"
					padding="24px 2vw 24px 2vw"
					margin="1vh 1vw 1vh 1vw"
					width="350px"
					height="350px"
					md-margin="1vh 0px 1vh 0px"
					md-padding="1vh 0px 1vh 0px"
					xs-width="250px"
					xs-height="fit-content"
				>
					<Override
						slot="Content"
						display="flex"
						flex-direction="column-reverse"
						border-radius="25px"
						padding="5px 5px 5px 5px"
						margin="5px 5px 5px 5px"
						max-width="325px"
						flex="0 1 auto"
						xs-width="250px"
						xs-min-width="inherit"
						xs-align-items="center"
						xs-justify-content="center"
						xs-align-content="center"
					>
						<Override
							slot="Cell 0th"
							font="16px --fontFamily-googleFredoka"
							width="300px"
							height="10hv"
							align-self="center"
							order="0"
							display="flex"
							align-items="center"
							margin="2px 2px 0px 2px"
							max-width="300px"
							lg-width="35vw"
							md-order="0"
							md-flex-wrap="wrap"
							md-flex-direction="row"
							md-justify-content="space-between"
							md-align-self="center"
							md-width="300px"
							xs-min-width="fit-content"
							xs-width="225px"
						/>
						<Override slot="cell-0">
							<Text margin="0px 0px 0px 0px" color="#ffffff" font="15px --fontFamily-googleFredoka" lg-width="inherit">
								Generic password generator built using vanilla Javascript. Utilizing Math.Random(), the password generator will make a password with random letters, numbers, and characters based on user input.{" "}
							</Text>
						</Override>
						<Override slot="cell-1">
							<Link href="https://tamccullough88.github.io/Password-Generator/" color="#ffffff" font="25px --fontFamily-googleFredoka" hover-color="#008cff">
								Password Generator{" "}
							</Link>
						</Override>
						<Override slot="cell-2">
							<Image
								src="https://uploads.quarkly.io/65d793ba1d712a00233098ec/images/JS%20Password.JPG?v=2024-03-06T23:31:36.633Z"
								display="block"
								max-height="180px"
								max-width="325px"
								xs-width="225px"
								width="300px"
								align-self="center"
								srcSet="https://smartuploads.quarkly.io/65d793ba1d712a00233098ec/images/JS%20Password.JPG?v=2024-03-06T23%3A31%3A36.633Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/65d793ba1d712a00233098ec/images/JS%20Password.JPG?v=2024-03-06T23%3A31%3A36.633Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/65d793ba1d712a00233098ec/images/JS%20Password.JPG?v=2024-03-06T23%3A31%3A36.633Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/65d793ba1d712a00233098ec/images/JS%20Password.JPG?v=2024-03-06T23%3A31%3A36.633Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/65d793ba1d712a00233098ec/images/JS%20Password.JPG?v=2024-03-06T23%3A31%3A36.633Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/65d793ba1d712a00233098ec/images/JS%20Password.JPG?v=2024-03-06T23%3A31%3A36.633Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/65d793ba1d712a00233098ec/images/JS%20Password.JPG?v=2024-03-06T23%3A31%3A36.633Z&quality=85&w=3200 3200w"
								sizes="(max-width: 414px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,(max-width: 414px) 100vw,(max-width: 300px) 100vw,100vw"
							/>
						</Override>
					</Override>
				</Structure>
			</Box>
		</Box>
		<Link
			font={"--capture"}
			font-size={"10px"}
			position={"fixed"}
			bottom={"12px"}
			right={"12px"}
			z-index={"4"}
			border-radius={"4px"}
			padding={"5px 12px 4px"}
			background-color={"--dark"}
			opacity={"0.6"}
			hover-opacity={"1"}
			color={"--light"}
			cursor={"pointer"}
			transition={"--opacityOut"}
			quarkly-title={"Badge"}
			text-decoration-line={"initial"}
			href={"https://quarkly.io/"}
			target={"_blank"}
		>
			Made on Quarkly
		</Link>
		<RawHtml>
			<style place={"endOfHead"} rawKey={"65d793ba1d712a00233098ea"}>
				{":root {\n  box-sizing: border-box;\n}\n\n* {\n  box-sizing: inherit;\n}"}
			</style>
			<link place={"endOfHead"} rawKey={"65de0afe792798aeae118980"} />
			<script src={"https://kit.fontawesome.com/e9ddb13395.js"} crossorigin={"anonymous"} place={"endOfHead"} rawKey={"65de0b103964c473fe42fcf5"} />
		</RawHtml>
	</Theme>;
});