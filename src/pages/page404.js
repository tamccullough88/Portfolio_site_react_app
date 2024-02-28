import React from "react";
import theme from "theme";
import { Theme } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml } from "@quarkly/components";
function Page404() {
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
		<RawHtml>
			<style place={"endOfHead"} rawKey={"65d793ba1d712a00233098ea"}>
				{":root {\n  box-sizing: border-box;\n}\n\n* {\n  box-sizing: inherit;\n}"}
			</style>
			<link place={"endOfHead"} rawKey={"65de0afe792798aeae118980"} />
			<script src={"https://kit.fontawesome.com/e9ddb13395.js"} crossorigin={"anonymous"} place={"endOfHead"} rawKey={"65de0b103964c473fe42fcf5"} />
		</RawHtml>
	</Theme>;
};

export default Page404