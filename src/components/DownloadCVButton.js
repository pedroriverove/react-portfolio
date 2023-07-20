import React from "react";
import {Button} from "react-bootstrap";

const DownloadCVButton = () => {
	const handleDownload = () => {
		const url = "documents/curriculo-pedro-rivero.pdf";
		const filename = "curriculo-pedro-rivero.pdf";
		const element = document.createElement("a");
		element.href = url;
		element.download = filename;
		element.click();
	};

	return (
		<div className="d-grid gap-2">
			<Button
				variant="outline-dark"
				size="lg"
				onClick={handleDownload}
				download
				style={{marginBottom: 10}}
			>
				Descargar CV
			</Button>
		</div>
	);
};

export default DownloadCVButton;
