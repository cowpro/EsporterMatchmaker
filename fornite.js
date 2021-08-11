document.getElementById("submitFornite").addEventListener("click", function () {
  let username = document.getElementById("usernameFornite").value;
  let apikey = "1a8e1c28-386a943d-45ad5820-c31b657d"
  fetch("https://fortniteapi.io/v1/lookup?username=" + username, {
    headers: {
      "Authorization": apikey
    }
  })
  .then(result => result.json())
  .then((resultp2) => {
    console.log(resultp2);
    fetch("https://fortniteapi.io/v1/stats?account=" + resultp2.account_id, {
      headers: {
        "Authorization": apikey
      }
    })
    .then(response => response.json())
    .then((account) => {
      document.getElementById("usernameResultFornite").innerHTML = account.name;
      document.getElementById("levelResultFornite").innerHTML = "Level: " + account.account.level;
      document.getElementById("winsSoloResultFornite").innerHTML = "Wins Solo: " + account.global_stats.solo.placetop1;
      document.getElementById("winsDuoResultFornite").innerHTML = "Wins Duo: " + account.global_stats.duo.placetop1;
      document.getElementById("winsSquadResultFornite").innerHTML = "Wins Squad: " + account.global_stats.squad.placetop1;
      document.getElementById("kdSoloResultFornite").innerHTML = "KD Solo: " + account.global_stats.solo.kd;
      document.getElementById("kdDuoResultFornite").innerHTML = "KD Duo: " + account.global_stats.duo.kd;
      document.getElementById("kdSquadResultFornite").innerHTML = "KD Squad: " + account.global_stats.squad.kd;
      document.getElementById("killSoloResultFornite").innerHTML = "Kills Solo: " + account.global_stats.solo.kills;
      document.getElementById("killDuoResultFornite").innerHTML = "Kills Duo: " + account.global_stats.duo.kills;
      document.getElementById("killSquadResultFornite").innerHTML = "Kills Squad: " + account.global_stats.squad.kills;
      document.getElementById("matchesSoloResultFornite").innerHTML = "Matches Played Solo: " + account.global_stats.solo.matchesplayed;
      document.getElementById("matchesDuoResultFornite").innerHTML = "Matches Played Duo: " + account.global_stats.duo.matchesplayed;
      document.getElementById("matchesSquadResultFornite").innerHTML = "Matches Played Squad: " + account.global_stats.squad.matchesplayed;
      document.getElementById("outlivedSoloResultFornite").innerHTML = "Players Outlived Solo: " + account.global_stats.solo.playersoutlived;
      document.getElementById("outlivedDuoResultFornite").innerHTML = "Players Outlived Duo: " + account.global_stats.duo.playersoutlived;
      document.getElementById("outlivedSquadResultFornite").innerHTML = "Players Outlived Squad: " + account.global_stats.squad.playersoutlived;
    })
  })
});
