document.getElementById("submitOverwatch").addEventListener("click", function (){
  let username = document.getElementById("usernameOverwatch").value;
  let region = document.getElementById("regionOverwatch").value;
  let platform = document.getElementById("platformOverwatch").value;


  fetch("https://owapi.io/profile/" + platform + "/" + region + "/" + username)
  .then(response => response.json())
  .then((account) => {
    document.getElementById("usernameResultOverwatch").innerHTML = account.username;
    document.getElementById("levelResultOverwatch").innerHTML = "Level: " + account.level;
    document.getElementById("quickWinsResultOverwatch").innerHTML = "Quick Games Won: " + account.games.quickplay.won;
    document.getElementById("quickGamesResultOverwatch").innerHTML = "Quick Games Played: " + account.games.quickplay.played;
    document.getElementById("quickPlaytimeResultOverwatch").innerHTML = "Quick Games Playtime: " + account.playtime.quickplay;
    document.getElementById("competitiveWinsResultOverwatch").innerHTML = "Competitive Games Won: " + account.games.competitive.won;
    document.getElementById("competitiveGamesResultOverwatch").innerHTML = "Competitive Games Played: " + account.games.competitive.played;
    document.getElementById("competitivePlaytimeResultOverwatch").innerHTML = "Competitive Games Playtime: " + account.playtime.competitive;
  });
});
