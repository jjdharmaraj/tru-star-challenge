import "./DailyGame.css";
import Footer from "../Footer/Footer";

function showInfo() {
  let toggleElem = document.getElementById("hidden1");
  let toggleButton = document.getElementById("challenge1select");
  if (toggleElem.style.display === "inline") {
    toggleElem.style.display = "none";
    toggleButton.innerHTML = "Learn More";
  } else {
    toggleElem.style.display = "inline";
    toggleButton.innerHTML = "Minimize";
  }
}

function DailyGame() {
  return (
    <div className="App">
      <header className="App-header">
        <div id="challenges">
          <img
            alt="logo"
            id="logo"
            src="https://truestarfoundation.org/wp-content/uploads/thegem-logos/logo_364c37e5b8371ced5c35fe432177ee71_2x.png"
          ></img>
          <h1>Pick a challenge!</h1>
          <div id="challenge1" className="dailychallenge">
            <h2>Create a mood board</h2>
            <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fc0.wallpaperflare.com%2Fpreview%2F364%2F345%2F243%2Fcollage-poster-advertisement-wall.jpg&f=1&nofb=1"></img>
            <p>Challenge 1 description goes here.</p>
            <div className="hidden" id="hidden1">
              <p>
                Put together a mood board for your very own business card! May
                include:
                <ul>
                  <li>Contact information</li>
                  <li>A call to action</li>
                  <li>A logo that represents you</li>
                </ul>
                Need inspiration? Check out this{" "}
                <a href="">article from 99designs</a>!
              </p>
              <input type="file" />
              <a href="/challenge-complete">
                <button className="challengeselect">Upload</button>
              </a>
            </div>
            <button
              className="challengeselect"
              id="challenge1select"
              onClick={showInfo}
            >
              Learn More
            </button>
          </div>
          <div id="challenge2" className="dailychallenge">
            <h1>Challenge #2</h1>
            <p>Challenge 1 description goes here.</p>
            <button className="challengeselect" onClick="#">
              Learn More
            </button>
          </div>
          <div id="challenge3" className="dailychallenge">
            <h1>Challenge #3</h1>
            <p>Challenge 1 description goes here.</p>
            <button className="challengeselect" onClick="#">
              Learn More
            </button>
          </div>
        </div>
        {<Footer />}
      </header>
    </div>
  );
}

export default DailyGame;
