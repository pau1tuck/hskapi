import React, { useState, useEffect } from "react";
import { IoIosArrowRoundBack } from "react-icons/io";
import { IoIosArrowRoundForward } from "react-icons/io";
import Zoom from "react-reveal/Zoom";

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

// load Apollo data
shuffleCards(data.length);

export const Flashcard = ({ cardData, sequence }: any) => {
	const [ currentCard, setCurrentCard ] = useState(0);
	const [ currentMode, setCurrentMode ] = useState("simplified");
	const [ cardFrontSide, setCardFrontSide ] = useState(true);
	const [ btnZH, setbtnZH ] = useState("button inactive-button");
	const [ btnPY, setbtnPY ] = useState("button");
	const [ btnEN, setbtnEN ] = useState("button button-en");

	console.log(currentCard);

	const [ currentCardData, setCurrentCardData ] = useState(data[randomOrder[currentCard]].simplified_chinese);

	const handleForwardButton = () => {
		setCurrentCard(currentCard + 1);
	};

	const handleSimplifiedButton = () => {
		if (currentMode != "simplified") {
			setCurrentCardData(data[randomOrder[currentCard]].simplified_chinese);
			setCurrentMode("simplified");
		} else {
			setCurrentCardData(data[randomOrder[currentCard]].english);
			setCurrentMode("english");
		}
		setCardFrontSide(!cardFrontSide);
	};

	const handlePinyinButton = () => {
		if (currentMode != "pinyin") {
			setCurrentCardData(data[randomOrder[currentCard]].pinyin);
			setCurrentMode("pinyin");
		} else {
			setCurrentCardData(data[randomOrder[currentCard]].simplified_chinese);
			setCurrentMode("simplified");
		}
		setCardFrontSide(!cardFrontSide);
	};

	const handleEnglishButton = () => {
		if (currentMode != "english") {
			setCurrentCardData(data[randomOrder[currentCard]].english);
			setCurrentMode("english");
		} else {
			setCurrentCardData(data[randomOrder[currentCard]].simplified_chinese);
			setCurrentMode("simplified");
		}
		setCardFrontSide(!cardFrontSide);
	};

	// const cardContent = eval(cardMode)[randomOrder[this.state.card]];

	useEffect(
		() => {
			setCurrentCardData(data[randomOrder[currentCard]].simplified_chinese);
			setCurrentMode("simplified");
		},
		[ currentCard ]
	);

	return (
		<div>
			<div className="card-container">
				<div className="card">
					<div className="button-panel">
						<div id="btn-ZH" onClick={handleSimplifiedButton} className={btnZH}>
							中文
						</div>
						<div id="btn-PY" onClick={handlePinyinButton} className={btnPY}>
							拼音
						</div>
						<div id="btn-EN" onClick={handleEnglishButton} className={btnEN}>
							EN
						</div>
					</div>
					<Zoom duration={500} when={cardFrontSide}>
						<div className="card-content">{currentCardData}</div>
					</Zoom>
					<Zoom duration={500} when={!cardFrontSide}>
						<div className="card-content">{currentCardData}</div>
					</Zoom>
					<div className="control-panel">
						<div className="back-button">
							<IoIosArrowRoundBack />
						</div>
						<div onClick={handleForwardButton} className="forward-button">
							<IoIosArrowRoundForward />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
