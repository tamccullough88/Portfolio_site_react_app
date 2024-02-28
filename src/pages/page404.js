import React from "react";
import theme from "theme";
import { Theme, Link } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml } from "@quarkly/components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"404"} />
		<Helmet>
			<title>
				Thomas McCullough
			</title>
			<meta name={"description"} content={"Web site created using quarkly.io"} />
			<meta property={"og:title"} content={"Thomas McCullough"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/65d793ba1d712a00233098ec/images/_af68a1b9-8759-4539-bd9e-587403783fcf.jpeg?v=2024-02-22T20:19:04.623Z"} type={"image/x-icon"} />
		</Helmet>
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