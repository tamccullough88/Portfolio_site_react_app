import React from "react";
import theme from "theme";
import { Theme, Link, Text, LinkBox, Box, Section, Image, Button } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Override, SocialMedia } from "@quarkly/components";
import * as Components from "components";
import { FiMenu } from "react-icons/fi";
import { AiOutlineMenu } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"index"} />
		<Helmet>
			<title>
				Thomas McCullough
			</title>
			<meta name={"description"} content={"Web site created using quarkly.io"} />
			<meta property={"og:title"} content={"Thomas McCullough"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/65d793ba1d712a00233098ec/images/_af68a1b9-8759-4539-bd9e-587403783fcf.jpeg?v=2024-02-22T20:19:04.623Z"} type={"image/x-icon"} />
		</Helmet>
		<Box
			md-display="block"
			sm-height="100vh"
			sm-width="100vw"
			sm-align-items="flex-start"
			sm-justify-content="center"
			sm-flex-direction="row"
			height="100vh"
			width="100vw"
			min-height="100vh"
			min-width="100vw"
			justify-content="flex-start"
			position="static"
			flex-direction="column"
			align-items="center"
			align-content="center"
			overflow-x="hidden"
			overflow-y="hidden"
			bottom="0px"
			top="0px"
			display="block"
		>
			<Section
				sm-padding="8px 0 8px 0"
				quarkly-title="Header-5"
				background="#171131"
				width="100vw"
				display="block"
				position="sticky"
				left="0px"
				height="100.46153846153847px"
				lg-padding="0px 0 24px 0"
				md-display="flex"
				md-flex-direction="column"
				md-justify-content="flex-start"
				md-height="10%"
				top="0px"
				md-z-index="1"
				md-bottom="0px"
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
						>
							<SocialMedia
								instagram=""
								margin="0px 0px 0px 0px"
								facebook=""
								youtube=""
								lg-display="flex"
								lg-grid-gap="12px"
								linked-in="https://www.linkedin.com/in/thomas-andrew-mccullough/"
							>
								<Override
									slot="link"
									border-radius="50%"
									background="transparent"
									hover-color="--light"
									display="flex"
									margin="0 5px 0 5px"
									padding="5x 5px 5px 5px"
									width="32px"
									height="32px"
									align-items="center"
									justify-content="center"
									md-position="relative"
									md-z-index="-1"
									md-opacity="1"
								/>
								<Override
									slot="icon"
									border-radius="50px"
									category="fa"
									icon={FaLinkedin}
									pointer-events="auto"
									color="#ffffff"
									md-z-index="1"
								/>
								<Override slot="link-facebook" margin="0px 5px 0px 0px">
									<div />
								</Override>
								<Override
									slot="link-linked-in"
									link-color="#009400"
									link-order="-1"
									link-align-self="baseline"
									link-font="25px sans-serif"
									md-font="25px "
									md-border-color="rgba(41, 126, 196, 0)"
									md-opacity="1"
									md-z-index="1"
								/>
								<Override
									slot="icon-linked-in"
									color="#ffffff"
									category="fa"
									icon={FaLinkedin}
									md-position="relative"
									md-z-index="1"
									pointer-events="auto"
								/>
							</SocialMedia>
						</Box>
					</Box>
				</Components.QuarklycommunityKitMobileSidePanel>
			</Section>
			<Box
				display="flex"
				lg-margin="10vh 0px 0px 0px"
				md-display="flex"
				md-flex-direction="column"
				md-align-items="center"
				md-justify-content="flex-start"
				sm-justify-content="center"
				sm-align-items="center"
				sm-height="100vh"
				sm-width="100vw"
				md-margin="0px 0px 0px 0px"
				lg-max-height="75vh"
				sm-margin="0px 0px 0px 0px"
				height="fit-content"
				align-self="stretch"
				flex="0 1 auto"
				order="0"
				width="100vw"
				flex-direction="column"
				align-items="center"
				justify-content="flex-start"
				align-content="center"
				flex-wrap="no-wrap"
				justify-items="center"
				position="absolute"
				bottom="358.00838461538467px"
				top="100.453px"
				overflow-x="hidden"
				overflow-y="hidden"
				lg-height="100vh"
				lg-width="100vw"
				lg-top="0px"
				lg-bottom="0px"
				sm-max-height="100vh"
			>
				<Image
					src="https://uploads.quarkly.io/65d793ba1d712a00233098ec/images/Untitled.png?v=2024-02-23T21:55:19.593Z"
					filter="opacity(86%)"
					flex-direction="column-reverse"
					align-content="center"
					align-items="center"
					justify-content="center"
					alt="the letters TAM in a curly bracket"
					sm-height="75%"
					sm-width="75%"
					sm-min-width="450px"
					max-height="65vh"
					height="75vh"
					display="flex"
					md-width="100vw"
					md-justify-content="flex-start"
					srcSet="https://smartuploads.quarkly.io/65d793ba1d712a00233098ec/images/Untitled.png?v=2024-02-23T21%3A55%3A19.593Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/65d793ba1d712a00233098ec/images/Untitled.png?v=2024-02-23T21%3A55%3A19.593Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/65d793ba1d712a00233098ec/images/Untitled.png?v=2024-02-23T21%3A55%3A19.593Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/65d793ba1d712a00233098ec/images/Untitled.png?v=2024-02-23T21%3A55%3A19.593Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/65d793ba1d712a00233098ec/images/Untitled.png?v=2024-02-23T21%3A55%3A19.593Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/65d793ba1d712a00233098ec/images/Untitled.png?v=2024-02-23T21%3A55%3A19.593Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/65d793ba1d712a00233098ec/images/Untitled.png?v=2024-02-23T21%3A55%3A19.593Z&quality=85&w=3200 3200w"
					sizes="(max-width: 414px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,(max-width: 414px) 100vw,(max-width: 300px) 100vw,100vw"
				/>
				<Box
					min-width="50px"
					min-height="50px"
					display="flex"
					align-items="center"
					justify-content="space-around"
					height="10vh"
					flex-direction="row"
					align-content="center"
					flex-wrap="no-wrap"
					lg-flex-direction="column"
					lg-height="55vh"
					md-width="400px"
					sm-height="100%"
					lg-margin="0px 0px 0px 0px"
					lg-justify-content="space-around"
					overflow-x="hidden"
					overflow-y="hidden"
				>
					<Button
						display="flex"
						align-items="center"
						justify-content="center"
						width="17vw"
						height="10vh"
						background="#297ec4"
						border-radius="100%"
						min-height="50px"
						lg-min-width="10vw"
						lg-min-height="2vh"
						lg-flex-direction="column-reverse"
						font="normal 300 4vh/75% --fontFamily-googleFredoka"
						padding="8px 50px 8px 50px"
						margin="0px 2.5vw 0px 2.5vw"
						max-width="300px"
						max-height="100px"
						min-width="75px"
						md-min-height="4vh"
						md-min-width="20vw"
						md-width="25vw"
						md-height="15vw"
						md-padding="0px 0px 0px 0px"
						sm-height="25vh"
						sm-width="50vw"
						href="/projects"
						user-select="auto"
						type="link"
						text-decoration-line="initial"
					>
						Projects
					</Button>
					<Button
						display="flex"
						align-items="center"
						justify-content="center"
						width="17vw"
						height="10vh"
						background="#297ec4"
						border-radius="100%"
						min-height="50px"
						lg-min-width="10vw"
						lg-min-height="2vh"
						lg-flex-direction="column-reverse"
						font="normal 300 4vh/75% --fontFamily-googleFredoka"
						padding="8px 50px 8px 50px"
						margin="0px 2.5vw 0px 2.5vw"
						max-width="300px"
						max-height="100px"
						min-width="75px"
						md-min-height="4vh"
						md-min-width="20vw"
						md-width="25vw"
						md-height="15vw"
						md-padding="0px 0px 0px 0px"
						sm-height="25vh"
						sm-width="50vw"
						type="link"
						href="https://drive.google.com/file/d/1C9uBn8Fu3hwlKKCGOoHsAqN9pZQB0P0J/view?usp=sharing"
					>
						Resume
					</Button>
					<Button
						display="flex"
						align-items="center"
						justify-content="center"
						width="17vw"
						height="10vh"
						background="#297ec4"
						border-radius="100%"
						min-height="50px"
						lg-min-width="10vw"
						lg-min-height="2vh"
						lg-flex-direction="column-reverse"
						font="normal 300 4vh/75% --fontFamily-googleFredoka"
						padding="8px 50px 8px 50px"
						margin="0px 2.5vw 0px 2.5vw"
						max-width="300px"
						max-height="100px"
						min-width="75px"
						md-min-height="4vh"
						md-min-width="20vw"
						md-width="25vw"
						md-height="15vw"
						md-padding="0px 0px 0px 0px"
						sm-height="25vh"
						sm-width="50vw"
						type="link"
						href="/contact"
						text-decoration-line="initial"
					>
						Contact
					</Button>
				</Box>
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