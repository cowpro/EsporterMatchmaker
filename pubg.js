document.getElementById("submitPubg").addEventListener("click", function () {
  let username = document.getElementById("usernamePubg").value;
  let platform = document.getElementById("platformPubg").value;
  let apikey = "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJqdGkiOiI1ZjllNDk5MC1kNmMyLTAxMzktZTRmNS02Mzk3ZDNjNzNlYmIiLCJpc3MiOiJnYW1lbG9ja2VyIiwiaWF0IjoxNjI4MDIwMzk4LCJwdWIiOiJibHVlaG9sZSIsInRpdGxlIjoicHViZyIsImFwcCI6Ii03M2NlOTdmYi1iZmRmLTQwMWUtOGMyMy0zNTMxNGUyYzJlNjMifQ.OVXDxAzlU3LVzN0K1ZabRalTiUso1atwOPmn8yyBPGs"
  fetch("https://api.pubg.com/shards/" + platform + "/players?filter[playerNames]=" + username, {
    headers: {
      "Authorization": apikey,
      "Accept": "application/vnd.api+json"
    }
  })
  .then(result => result.json())
  .then((resultp2) => {
    fetch("https://api.pubg.com/shards/" + platform + "/players/" + resultp2.data[0].id + "/seasons/lifetime", {
      headers: {
        "Authorization": apikey,
        "Accept": "application/vnd.api+json"
      }
    })
    .then(response => response.json())
    .then((account) => {
      document.getElementById("usernameResultPubg").innerHTML = resultp2.data[0].attributes.name;
      document.getElementById("bestRankPointResultPubg").innerHTML = "Best Rank Point: " + account.data.attributes.bestRankPoint;
      document.getElementById("soloKillsResultFPSPubg").innerHTML = "Kils Solo FPS: " + account.data.attributes.gameModeStats["solo-fpp"].kills;
      document.getElementById("soloKillsResultTPSPubg").innerHTML = "Kills Solo TPS: " + account.data.attributes.gameModeStats["solo"].kills;
      document.getElementById("duoKillsResultFPSPubg").innerHTML = "Kills Duo FPS: " + account.data.attributes.gameModeStats["duo-fpp"].kills;
      document.getElementById("duoKillsResultTPSPubg").innerHTML = "Kills Duo TPS: " + account.data.attributes.gameModeStats["duo"].kills;
      document.getElementById("squadKillsResultFPSPubg").innerHTML = "Kills Squad FPS:  " + account.data.attributes.gameModeStats["squad-fpp"].kills;
      document.getElementById("squadKillsResultTPSPubg").innerHTML = "Kills Squad TPS: " + account.data.attributes.gameModeStats["squad"].kills;
      document.getElementById("soloAssistsResultFPSPubg").innerHTML = "Assists Solo FPS: " + account.data.attributes.gameModeStats["solo-fpp"].assists;
      document.getElementById("soloAssistsResultTPSPubg").innerHTML = "Assists Solo TPS: " + account.data.attributes.gameModeStats["solo"].assists;
      document.getElementById("duoAssistsResultFPSPubg").innerHTML = "Assists Duo FPS: " + account.data.attributes.gameModeStats["duo-fpp"].assists;
      document.getElementById("duoAssistsResultTPSPubg").innerHTML = "Assists Duo TPS: " + account.data.attributes.gameModeStats["duo"].assists;
      document.getElementById("squadAssistsResultFPSPubg").innerHTML = "Assists Squad FPS: " + account.data.attributes.gameModeStats["squad-fpp"].assists;
      document.getElementById("squadAssistsResultTPSPubg").innerHTML = "Assists Squad TPS: " + account.data.attributes.gameModeStats["squad"].assists;
      document.getElementById("soloWinsResultFPSPubg").innerHTML = "Wins Solo FPS: " + account.data.attributes.gameModeStats["solo-fpp"].wins;
      document.getElementById("soloWinsResultTPSPubg").innerHTML = "Wins Solo TPS: " + account.data.attributes.gameModeStats["solo"].wins;
      document.getElementById("duoWinsResultFPSPubg").innerHTML = "Wins Duo FPS: " + account.data.attributes.gameModeStats["duo-fpp"].wins;
      document.getElementById("duoWinsResultTPSPubg").innerHTML = "Wins Duo TPS: " + account.data.attributes.gameModeStats["duo"].wins;
      document.getElementById("squadWinsResultFPSPubg").innerHTML = "Wins Squad FPS: " + account.data.attributes.gameModeStats["squad-fpp"].wins;
      document.getElementById("squadWinsResultTPSPubg").innerHTML = "Wins Squad TPS: " + account.data.attributes.gameModeStats["squad"].wins;
      document.getElementById("soloDamageResultFPSPubg").innerHTML = "Damage Solo FPS: " + account.data.attributes.gameModeStats["solo-fpp"].damageDealt;
      document.getElementById("soloDamageResultTPSPubg").innerHTML = "Damage Solo TPS: " + account.data.attributes.gameModeStats["solo"].damageDealt;
      document.getElementById("duoDamageResultFPSPubg").innerHTML = "Damage Duo TPS: " + account.data.attributes.gameModeStats["duo-fpp"].damageDealt;
      document.getElementById("duoDamageResultTPSPubg").innerHTML = "Damage Duo TPS: " + account.data.attributes.gameModeStats["duo"].damageDealt;
      document.getElementById("squadDamageResultFPSPubg").innerHTML = "Damage Squad FPS: " + account.data.attributes.gameModeStats["squad-fpp"].damageDealt;
      document.getElementById("squadDamageResultTPSPubg").innerHTML = "Damage Squad TPS: " + account.data.attributes.gameModeStats["squad"].damageDealt;
    })
  })
});
