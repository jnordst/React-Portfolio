import React from "react";
import resume from "../assets/Resume.pdf";
import { Document, Page } from "react-pdf";
import { pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/TextLayer.css";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
	"pdfjs-dist/build/pdf.worker.min.js",
	import.meta.url
).toString();

const Resume = () => {
	return (
		<div className='flex flex-col'>
			<Document
				file={resume}
				className='max-[825px]:hidden min-[800px]:w-1/2 hover:cursor-pointer'
				onClick={() => window.open(resume)}>
				<Page
					className='h-full w-auto'
					pageNumber={1}
					renderTextLayer={false}
				/>
			</Document>
		</div>
	);
};

export default Resume;
