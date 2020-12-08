fetch("https://script.google.com/macros/s/AKfycbzW9tl5JVbGKcWFcpAFTVqbYb5NBB_pQal_KGOgk66POd8p7jA/exec")
  .then(function (response) {
    return response.json();
  })
  .then(function (json) {
    console.log(json.claimedPids);
    populateClaimedField(json.claimedPids);
  })
  .catch(function (error) {
    console.log("Error: " + error);
  });

function populateClaimedField(claimedPids) {
  var pids = claimedPids.replaceAll(",", "<br>");
  claimed_pids_field.innerHTML = `<p>${pids}</p>`;
}