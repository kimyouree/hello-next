import React from "react";

import "./styles.css";

function RootLayout({ children }) {
	return (
		<html lang="en">
			<body>
				{children}
				<footer>Copyright RII Inc.🍦</footer>
			</body>
		</html>
	);
}

export default RootLayout;
