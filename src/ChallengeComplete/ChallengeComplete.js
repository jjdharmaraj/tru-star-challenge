import "./ChallengeComplete.css";
import tiktokLogo from "./tiktokimg.png";
import Footer from "../Footer/Footer";

function ChallengeComplete() {
  return (
    <div className="App">
      <header className="App-header">
        <div id="challenges">
          <img alt="logo" id="logo" src="https://truestarfoundation.org/wp-content/uploads/thegem-logos/logo_364c37e5b8371ced5c35fe432177ee71_2x.png"></img>
          <h1>CHALLENGE</h1>
          <div id="challenge1" className="Completed-challenge">
            <img alt="challenge" className="challenge-photo" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fc0.wallpaperflare.com%2Fpreview%2F364%2F345%2F243%2Fcollage-poster-advertisement-wall.jpg&f=1&nofb=1"></img>
          </div>
          <div id="social-icons">
            <div class="icon">
              <img src={tiktokLogo} className="App-logo" alt="TikTok logo" />
              </div>
            <div class="icon">  
              <img src={tiktokLogo} className="App-logo" alt="TikTok logo" />
            </div>
          </div>
          <div className="Badge-section">
          <h4>YOU EARNED YOUR FIRST BADGE!</h4>
          <div className="badge">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-award"><circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline></svg>
            <span class="badge-description">Rookie of the Year</span>
          </div>
          </div>
        </div>
      {<Footer/>}
      </header>
    </div>
  );
}

export default ChallengeComplete;
