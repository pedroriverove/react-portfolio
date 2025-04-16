import React from "react";
import {Button} from "react-bootstrap";

const DownloadCVButton = () => {
	const handleDownload = () => {
		try {
			const url = "documents/app-release.apk";
			const filename = "app-release.apk";

			// Verifica si la URL existe
			if (!url || !filename) {
				throw new Error("La URL o el nombre de archivo no están definidos.");
			}

			// Crea un elemento <a> para la descarga
			const element = document.createElement("a");
			element.href = url;
			element.download = filename;

			// Agrega el elemento al DOM, realiza el clic y lo elimina del DOM
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
