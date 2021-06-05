import "./ChallengeComplete.css";
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
            <a href="/ar-test">
              <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 32 32" viewBox="0 0 32 32"><rect width="539" height="176" x="-278" y="-72" fill="#F3EEE9" display="none"/><path fill="#231F20" d="M25,6h-1c-1.103,0-2-0.897-2-2V3c0-0.552-0.447-1-1-1h-4c-0.553,0-1,0.448-1,1v17.5c0,1.378-1.121,2.5-2.5,2.5S11,21.878,11,20.5s1.121-2.5,2.5-2.5c0.089,0,0.168-0.029,0.25-0.05C13.832,17.971,13.911,18,14,18c0.553,0,1-0.448,1-1v-4c0-0.552-0.447-1-1-1c-0.089,0-0.168,0.029-0.25,0.05C13.668,12.029,13.589,12,13.5,12C8.813,12,5,15.813,5,20.5S8.813,29,13.5,29c4.461,0,8.124-3.457,8.466-7.832C21.976,21.111,22,21.059,22,21v-9.338c1.554,0.529,3.049,0.34,3.132,0.329C25.629,11.925,26,11.501,26,11V7C26,6.448,25.553,6,25,6z M24,10.023c-0.688-0.039-1.647-0.21-2.368-0.798c-0.299-0.244-0.711-0.293-1.061-0.128C20.223,9.262,20,9.614,20,10v10.5c0,3.584-2.916,6.5-6.5,6.5S7,24.084,7,20.5c0-3.415,2.649-6.218,6-6.475v2.025c-2.244,0.252-4,2.139-4,4.449c0,2.481,2.019,4.5,4.5,4.5s4.5-2.019,4.5-4.5V4h2c0,2.206,1.794,4,4,4V10.023z"/></svg>
             </a>
              </div>
            <div class="icon">  
            <a href="ar-test">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19.7 23.5H4.3c-2.1 0-3.8-1.7-3.8-3.8V4.3C.5 2.2 2.2.5 4.3.5h15.3c2.1 0 3.8 1.7 3.8 3.8v15.3c.1 2.2-1.6 3.9-3.7 3.9zM4.3 1.5c-1.6 0-2.8 1.3-2.8 2.8v15.3c0 1.6 1.3 2.8 2.8 2.8h15.3c1.6 0 2.8-1.3 2.8-2.8V4.3c0-1.6-1.3-2.8-2.8-2.8H4.3z"/><path d="M11.9 18.8h-.3c-.5 0-1-.3-1.3-.5-.1-.1-.2-.2-.4-.2-.3-.2-.6-.4-.9-.5-.3-.1-.8 0-1.3.1h-.3-.2c-.2-.1-.4-.2-.5-.5 0-.1-.1-.2-.1-.3v-.1H6.3c-.4-.1-.7-.2-1.1-.4-.1 0-.2-.1-.3-.2-.2-.2-.2-.5-.2-.8 0-.1.1-.1.1-.2.2-.3.4-.3.6-.4.4-.1.7-.2.9-.4.5-.4.9-.8 1.2-1.4.1-.2.1-.3.1-.4l-.1-.1-.2-.1c-.3-.1-.5-.2-.8-.4l-.1-.1c-.2-.1-.3-.3-.3-.5v-.1c0-.2.1-.5.5-.8.2-.2.5-.2.8-.2H7.7c.1 0 .1 0 .2.1v-.7c0-.7 0-1.3.2-2v-.1c.3-.6.7-1.2 1.3-1.6.9-.7 1.9-.8 2.6-.8h.7c.7.1 1.4.3 1.9.7.8.6 1.4 1.4 1.6 2.4v.1c.1.4.1.9 0 1.4v.6h.1l.2-.1c.3-.1.6-.1.9.1.1.1.3.2.5.5.1.2.1.5 0 .7-.1.1-.2.2-.2.3-.3.3-.6.4-.9.5-.3.1-.3.2-.4.2.2.3.3.6.6.9.4.5.9.9 1.5 1.1.2 0 .3.1.5.2.1 0 .1.1.1.1.1.1.2.3.2.4 0 .2 0 .4-.1.5v.1c-.2.2-.4.4-.6.4h-.2c-.3.1-.6.2-1 .3v.4c0 .1-.1.2-.1.3-.1.2-.3.2-.5.3h-.2c-.3 0-.6-.1-.9-.1H15c-.2.1-.5.3-.8.5l-.6.3c-.3.2-.6.3-1 .3-.3.2-.5.2-.7.2zm-.2-1h.8c.2 0 .4-.1.5-.2h.1c.2-.1.3-.2.5-.3.3-.2.6-.4 1-.5.2-.1.4-.1.6-.1H16.4c.1-.2.1-.4.3-.6.2-.2.4-.2.6-.2.2 0 .4-.1.6-.2-.7-.2-1.4-.7-1.9-1.4-.3-.4-.5-.8-.7-1.2-.1-.3-.1-.7.1-.9.2-.3.5-.4.8-.5.2-.1.4-.1.5-.2h-.1c-.1 0-.2.1-.4.1h-.7c-.2-.1-.3-.2-.3-.4v-.1V10 8.7c-.2-.9-.6-1.5-1.2-2-.4-.3-.9-.5-1.5-.5H12c-.9 0-1.6.2-2.1.6-.4.4-.7.8-.9 1.3-.2.5-.2 1-.1 1.6V11c0 .2-.2.4-.4.5h-.8c-.1 0-.2 0-.3-.1.1.1.3.1.4.2H8c.4.2.6.4.7.7.1.4-.1.8-.2 1-.4.7-.9 1.3-1.5 1.8-.3.2-.6.3-.9.4.1 0 .3.1.4.1h.2c.2 0 .3.1.5.1.1 0 .2.1.2.2v.2c0 .1.1.2.1.3.5-.1 1.1-.1 1.6 0s.8.4 1.2.6c.1.1.2.1.3.2.4.4.7.6 1.1.6-.1 0-.1 0 0 0z"/></svg>
            </a>
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
