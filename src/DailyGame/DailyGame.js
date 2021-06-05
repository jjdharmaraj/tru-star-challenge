import "./DailyGame.css";

function showInfo() {
  let toggleElem = document.getElementById("hidden1");
  if (toggleElem.style.display == "inline") {
    toggleElem.style.display = "none";
  } else {
    toggleElem.style.display = "inline";
  }
}

function DailyGame() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Daily Game</p>
        
        <div id="challenges">
          <h1>Pick a challenge!</h1>
          <div id="challenge1" className="dailychallenge">
            <h1>Challenge #1</h1>
            <div id="videoplaceholder"></div>
            <p>Challenge 1 description goes here.</p>
            <div className="hidden" id="hidden1">
              <p>This is more information! </p>
              <button id="challengeselect" onClick="">Select</button>
            </div>
            <button id="challengeselect" onClick={showInfo}>Information</button>
          </div>
          <div id="challenge2" className="dailychallenge">
            <h1>Challenge #2</h1>
            <p>Challenge 1 description goes here.</p>
            <button id="challengeselect" onClick="#">Information</button>
          </div>
          <div id="challenge3" className="dailychallenge">
            <h1>Challenge #3</h1>
            <p>Challenge 1 description goes here.</p>
            <button id="challengeselect" onClick="#">Information</button>
          </div>
        </div>
      </header>
    </div>
  );
}

export default DailyGame;
