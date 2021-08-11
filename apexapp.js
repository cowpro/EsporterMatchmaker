console.log("Present");
document.getElementById("submitApex").addEventListener("click", function () {
  console.log("Choosen");
  let username = document.getElementById("usernameApex").value;
  let platform = document.getElementById("platformApex").value;
  let apikey = "zfSHkgtMWEEsoXTNRMnj"

  fetch("https://api.mozambiquehe.re/bridge?auth=" + apikey + "&version=5&platform=" + platform + "&player=" + username)
  .then(response => response.json())
  .then((account) => {
    document.getElementById("usernameResultApex").innerHTML = account.global.name;
    document.getElementById("levelResultApex").innerHTML = "Level: " + account.global.level;
    document.getElementById("rankResultApex").innerHTML = "Rank: " + account.global.rank.rankName + " " + account.global.rank.rankDiv
  })
});
