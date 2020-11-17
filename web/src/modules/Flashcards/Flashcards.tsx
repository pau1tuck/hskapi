import React, { useState } from "react";
import { IoIosArrowRoundBack } from "react-icons/io";
import { IoIosArrowRoundForward } from "react-icons/io";
import Zoom from "react-reveal/Zoom";
import "./Flashcards.css";

const data = [
	{
		simplified_chinese: "信用卡",
		pinyin: "xìnyòngkǎ",
		english: "credit card"
	},
	{
		simplified_chinese: "陪",
		pinyin: "péi",
		english: "accompany"
	},
	{
		simplified_chinese: "打算",
		pinyin: "dǎsuan",
		english: "plan to"
	},
	{
		simplified_chinese: "原因",
		pinyin: "yuányīn",
		english: "reason"
	}
];

let randomOrder: any = [];

const shuffleCards = (n: number) => {
	while (randomOrder.length < n) {
		let rnd = Math.floor(Math.random() * n);
		if (randomOrder.indexOf(rnd) === -1) randomOrder.push(rnd);
	}
};

export const Flashcards = () => {
	const [ cardFront, setCardFront ] = useState(true);
	const [ currentContent, setCurrentContent ] = useState(data[0].simplified_chinese);

	// load Apollo data
	shuffleCards(data.length);

	const handleZoom = () => {
		setCardFront(!cardFront);
	};

	const handleFlipButton = (e) => {};

	// const cardContent = eval(cardMode)[randomOrder[this.state.card]];

	return (
		<div>
			<div className="card-container">
				<div className="card">
					<div className="button-panel">
						<div id="simplified_chinese" onClick={handleZoom} className="button">
							中文
						</div>
						<div className="button">拼音</div>
						<div className="button button-en">EN</div>
					</div>
					<Zoom duration={500} when={cardFront}>
						<div className="card-content">{currentContent}</div>
					</Zoom>
					<Zoom duration={500} when={!cardFront}>
						<div className="card-content">{currentContent}</div>
					</Zoom>
					<div className="control-panel">
						<div className="back-button">
							<IoIosArrowRoundBack />
						</div>
						<div className="forward-button">
							<IoIosArrowRoundForward />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
