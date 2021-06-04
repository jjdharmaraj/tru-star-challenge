import snapchatGhost from "./Snapchat-Ghost-logo.png";
import tiktokLogo from "./tik-tok-logo.png";
import "./Login.css";

function Login() {
  return (
    <div className="App">
      <header className="App-header">
        <a className="App-link" href="/daily-game" rel="noopener noreferrer">
          {/* Log in with Snapchat{" "} */}
          <img
            src={snapchatGhost}
            className="App-logo"
            alt="Snapchat Ghost logo"
          />
        </a>
        <a className="App-link" href="/daily-game" rel="noopener noreferrer">
          <img src={tiktokLogo} className="App-logo" alt="TikTok logo" />
        </a>
      </header>
    </div>
  );
}

export default Login;
