import React from "react";
import theme from "theme";
import { Theme, Link, Text, LinkBox, Box, Section, Strong } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Override, SocialMedia } from "@quarkly/components";
import * as Components from "components";
import { FiMenu } from "react-icons/fi";
import { AiOutlineMenu } from "react-icons/ai";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"about"} />
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
			xs-display="flex"
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
				md-display="flex"
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
				xs-display="flex"
			>
				<Section
					background="rgba(41, 126, 196, 0.66)"
					padding="80px 0 80px 0"
					xs-height="fit-content"
					xs-width="fit-content"
					xs-align-items="center"
					xs-padding="80px 10px 80px 10px"
					md-width="fit-content"
					md-padding="80px 10px 80px 10px"
				>
					<Override slot="SectionContent" xs-height="inherit" />
					<Box
						display="flex"
						align-items="center"
						flex-direction="column"
						justify-content="center"
						padding="0px 200px 0px 200px"
						lg-padding="0px 0px 0px 0px"
					>
						<Text
							margin="0px 0px 30px 0px"
							font="4em --fontFamily-googleFredoka"
							color="--light"
							text-align="center"
							sm-font="normal 700 62px/1.2 &quot;Source Sans Pro&quot;, sans-serif"
							xs-font="4em --fontFamily-googleFredoka"
						>
							About Me
						</Text>
						<Text
							margin="0px 0px 48px 0px"
							font="1.em --fontFamily-googleFredoka"
							color="--light"
							text-align="center"
							xs-font="1em --fontFamily-googleFredoka"
						>
							Hey!
							<br />
							<br />
							My name is Thomas McCullough. I am a junior software developer who has recently graduated from a 10 month long boot camp that taught me JavaScript, React.JS, Express.JS, MongoBD, SQL, Python, Styling with CSS and SCSS, and, of course, the all mighty HTML! But that's not why you came to this page. You want to learn who I am!
							<br />
							<br />
							<br />
							<Strong
								overflow-wrap="normal"
								word-break="normal"
								white-space="normal"
								text-indent="0"
								text-overflow="clip"
								hyphens="manual"
								user-select="auto"
								pointer-events="auto"
							>
								Employment:
							</Strong>
							<br />
							I am currently a employed as a Paid Search Analyst. I have outgrown my current position at my place of employment and am looking to make a change that will grow with me. I remembered that I found joy in coding by helping clients make better shopping feeds for Google with PHP. Wanting to learn more, I decided to take classes on software development. I would like to make this my career ad am actively working towards that.{" "}
							<br />
							<br />
							<br />
							<Strong
								overflow-wrap="normal"
								word-break="normal"
								white-space="normal"
								text-indent="0"
								text-overflow="clip"
								hyphens="manual"
								user-select="auto"
								pointer-events="auto"
							>
								More About Me:
							</Strong>
							<br />
							In my free time, I like to date my amazing wife, play with my little boy,

smoke meats, go fishing, go off-roading/camping,  learn more coding techniques, play bass in my church band, take care of my veggie and native plant garden, and various other things.{" "}
							<br />
							<br />
							<br />
							<Strong>
								Next Projects:
							</Strong>
							<br />
							Some projects I am looking to start are:
							<br />
							- Simple C++ projects with Arduino
							<br />
							- Christmas Light Controller
							<br />
							- Text to Morse Code and back for ham radio
							<br />
							- Theremin
							<br />
							- Temperature controller for my smoker{" "}
							<br />
						</Text>
						<Link
							href="mailto:tamccullough88@gmail.com"
							text-align="center"
							color="--light"
							font="1em --fontFamily-googleFredoka"
							text-decoration-line="underline"
							margin="0px 0px 16px 0px"
							xs-font="1em --fontFamily-googleFredoka"
						>
							TAMcCullough88@gmail.com
						</Link>
						<SocialMedia margin="0px 0px 0px 0px" linked-in="https://www.linkedin.com/in/thomas-andrew-mccullough/" github="https://github.com/tamccullough88">
							<Override
								slot="link"
								border-radius="50%"
								color="--grey"
								hover-color="--light"
								background="#191E22"
								hover-background="--color-primary"
								margin="0 5px 0 5px"
								padding="5x 5px 5px 5px"
								width="48px"
								height="48px"
								align-items="center"
								display="flex"
								justify-content="center"
								hover-transition="background-color 0.2s ease-in-out 0s"
								transition="background-color 0.2s ease-in-out 0s"
							/>
							<Override
								slot="icon"
								color="--light"
								padding="7px 7px 7px 7px"
								border-width="0px"
								size="38px"
								border-radius="50px"
							/>
						</SocialMedia>
					</Box>
				</Section>
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