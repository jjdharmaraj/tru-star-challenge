import "./Footer.css"

function Footer() {
  return(
    <div className="footer">
      <button className="btn-footer">PROFILE</button>
      <button className="btn-footer"><a href="/daily-game">CHALLENGES</a></button>
      <button className="btn-footer"><a href="/leaderboard">LEADERBOARD</a></button>
    </div>
  );
}

export default Footer;