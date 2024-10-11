import { useContext } from "react";
import { assets } from "../../assets/assets";
import "./main.css";
import { Context } from "../../context/Context";
const Main = () => {
	const {
		onSent,
		recentPrompt,
		showResults,
		loading,
		resultData,
		setInput,
		input,
	} = useContext(Context);

    const handleCardClick = (promptText) => {
			setInput(promptText);
		};
	return (
		<div className="main">
			<div className="nav">
				<img className="img1" src={assets.logo} alt="" />
				<img className="img2" src={assets.profile} alt="" />
			</div>
			<div className="main-container">
				{!showResults ? (
					<>
						<div className="greet">
							<p>
								<span>Hello, I am </span>
								<span className="box">Hireholi's smart bot </span>
							</p>
							<p>How Can i Help You Today?</p>
						</div>
						<div className="cards">
							<div
								className="card"
								onClick={() =>
									handleCardClick("Explain what is MERN stack.")
								}
							>
								<p>Explain what is MERN stack.</p>
								<img src={assets.compass_icon} alt="" />
							</div>
							<div
								className="card"
								onClick={() =>
									handleCardClick(
										"What is DevOps."
									)
								}
							>
								<p>What is DevOps.</p>
								<img src={assets.message_icon} alt="" />
							</div>
							<div
								className="card"
								onClick={() =>
									handleCardClick("What is DeepLearning?")
								}
							>
								<p>What is DeepLearning?</p>
								<img src={assets.bulb_icon} alt="" />
							</div>
							<div
								className="card"
								onClick={() => {
									handleCardClick(
										"What is Hacktoberfest?"
									);
								}}
							>
								<p>What is Hacktoberfest?</p>
								<img src={assets.code_icon} alt="" />
							</div>
						</div>
					</>
				) : (
					<div className="result">
						<div className="result-title">
							<img src={assets.side} alt="" />
							<p className="result-p">{recentPrompt}</p>
						</div>
						<div className="result-data">
							<img src={assets.side} alt="" />
							{loading ? (
								<div className="loader">
									<hr />
									<hr />
									<hr />
								</div>
							) : (
								<p className="result-pdata" dangerouslySetInnerHTML={{ __html: resultData }}></p>
							)}
						</div>
					</div>
				)}

				<div className="main-bottom">
					<div className="search-box">
						<input
							onChange={(e) => {
								setInput(e.target.value);
							}}
							value={input}
							type="text"
							placeholder="Enter the Prompt Here"
						/>
						<div>
							<img src={assets.gallery_icon} alt="" />
							<img src={assets.mic_icon} alt="" />
							<img
								src={assets.send_icon}
								alt=""
								onClick={() => {
									onSent();
								}}
							/>
						</div>
					</div>
					<div className="bottom-info">
						<p>
							tHinkbot may display inaccurate info, including about people, so
							double-check its responses.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Main;
