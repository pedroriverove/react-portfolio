import React from "react";
import { Button } from "react-bootstrap";

const DownloadButtons = () => {
	const handleDownload = (url, filename) => {
		try {
			if (!url || !filename) {
				throw new Error("La URL o el nombre de archivo no están definidos.");
			}

			const element = document.createElement("a");
			element.href = url;
			element.download = filename;
			document.body.appendChild(element);
			element.click();
			document.body.removeChild(element);

			console.log(`Archivo ${filename} descargado exitosamente.`);
		} catch (error) {
			console.error("Ocurrió un error al intentar descargar el archivo:", error.message);
		}
	};

	return (
		<div className="d-grid gap-2">
			<Button
				className="outline-dark"
				variant="outline-dark"
				size="lg"
				onClick={() => handleDownload("documents/curriculo-pedro-rivero.pdf", "curriculo-pedro-rivero.pdf")}
				style={{ marginBottom: 10 }}
			>
				Descargar CV
			</Button>
			<Button
				className="outline-dark"
				variant="outline-dark"
				size="lg"
				onClick={() => handleDownload("documents/app-release.apk", "app-release.apk")}
				style={{ marginBottom: 10 }}
			>
				Descargar APK
			</Button>
		</div>
	);
};

export default DownloadButtons;
