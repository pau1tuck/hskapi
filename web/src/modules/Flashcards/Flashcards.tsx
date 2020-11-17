import React from "react";
import "./Flashcards.css";

const TestData = {};

export const Flashcards = () => {
	return (
		<div className="card">
			<div className="button-container">
				<div className="button">中文</div>
				<div className="button">拼音</div>
				<div className="button button-en">EN</div>
			</div>
			<div className="card-content">CSS is a bitch.</div>
			<div className="controls">LEFT RIGHT</div>
		</div>
	);
};
