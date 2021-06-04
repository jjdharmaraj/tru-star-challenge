import "./Leaderboard.css";
import faker from "faker";

var rows = [];


for (const i of Array(19).keys()) {
  rows.push({
    rank: i + 2,
    avatar: faker.internet.avatar(),
    username: faker.internet.userName(),
    score: Math.floor(Math.random() * (17 - 1) + 1)
  });
}


function Leaderboard() {
  return (
    <div className="App">
      <header className="App-nav">
        <p>Leaderboard</p>
      </header>
      <table className="App-leaderboard">
        <thead>
          <tr>
            <th>Rank</th>
            <th>Avatar</th>
            <th>Username</th>
            <th>Challenges Completed</th>        
           </tr>
          </thead>
          <tbody>

           <tr>
             <td>1</td>
             <td> <img alt="User avatar" class="avatar" src={ faker.internet.avatar() }/> </td>
             <td>{faker.internet.userName()}</td>
             <td>17</td>
           </tr>
           {rows.map((row, index) => (
             <tr>
              <td>{ row.rank } </td>
              <td> <img alt="User avatar" class="avatar" src={ row.avatar } /></td>
              <td> { row.username } </td>
              <td> { row.score } </td> 
             </tr>
             ))
         }
         </tbody>
      </table>
    </div>
  );
}



export default Leaderboard;