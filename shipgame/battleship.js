var view = {
  displayMessage: function(msg) {
    var messageAre= document.getElementById("messageAre");
    messageArea.innerHTML = msg;
  },
  displayHit: function(location){
    var call = document.getElementById(location);
    cell.setAttribute("class", "hit");
  },
  displayMiss: function(location){
    var call = document.getElementById(location);
    cell.setAttribute("class", "miss");
  }
};
view.displayMiss("00");
view.displayHit("34");
view.displayMiss("55");
view.displayHit("12");
view.displayMiss("25");
view.displayHit("26");
view.displayMessage("Tap tap, is this thing on?");