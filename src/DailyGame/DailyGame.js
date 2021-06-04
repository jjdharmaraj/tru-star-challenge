import "./DailyGame.css";

function DailyGame() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Daily Game</p>
        
        <div id="challenges">
          <h1>Pick a challenge!</h1>
          <div id="challenge1" class="dailychallenge">
            <h1>Challenge #1</h1>
            <div id="videoplaceholder"></div>
            <p>Challenge 1 description goes here.</p>
            <button id="challengeselect" onclick="#">Select</button>
          </div>
          <div id="challenge2" class="dailychallenge">
            <h1>Challenge #2</h1>
            <p>Challenge 1 description goes here.</p>
            <button id="challengeselect" onclick="#">Select</button>
          </div>
          <div id="challenge3" class="dailychallenge">
            <h1>Challenge #3</h1>
            <p>Challenge 1 description goes here.</p>
            <button id="challengeselect" onclick="#">Select</button>
          </div>
        </div>
      </header>
    </div>
  );
}

export default DailyGame;
