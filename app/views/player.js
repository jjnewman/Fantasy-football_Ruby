

// for (var id = 1; id <= 40; id++) {
//   $.ajax({
//     url: "http://fantasy.premierleague.com/web/api/elements/" + id + "/",
//     dataType: 'json'
//     }).done(function(data) {

//         var str = "." + data.type_name.toLowerCase() + "s"
//         var team = data.team_name
//         $(str).append(
//           $('<option></option>').html(data.web_name + " " + team + " £"+ data.now_cost/10 + "m").val(data.now_cost));
//     });
// };

//to be transferred to Ruby
// function populateTeam(selectorClass, positionArray, positionClass, positionCode, positionMax){
//    $(selectorClass).change(function() {
//     var player_name = $('option:selected', $(this)).html();
//     var player_cost = $('option:selected', $(this)).val();

//     if(positionArray.indexOf(player_name) === -1 && positionArray.length < positionMax && team){
//       positionArray.push(player_name);
//       playersArray = goalkeeperArray.concat(defenderArray, midfielderArray, forwardArray);
      
//       total_cost = total_cost + parseInt(player_cost)
//       console.log(typeof team)
//       if(total_cost < 1000){

//       $(positionClass).append('<div id=' + player_name + '>' + positionCode + player_name  + '</div>' );

//        $("#" + player_name.split(" ", 2) + "").click(function() {
//         $(this).remove();
//         positionArray.splice($.inArray(player_name, positionArray),1);
//         playersArray.splice($.inArray(player_name, positionArray),1);
        
//         console.log(playersArray);
        
//         total_cost = total_cost - parseInt(player_cost)
//         console.log(total_cost)
//          $('.cost').text(total_cost/10 + 'm');
//       });
//       $('.cost').text(total_cost/10 + 'm');
//       }
//       } else {return false}
//     });
// };

// goalkeeperArray = []; defenderArray = []; midfielderArray = []; forwardArray = []; playersArray = [];

// populateTeam('.goalkeepers', goalkeeperArray, '.gk', 'GK: ', 2)
// populateTeam('.defenders', defenderArray, '.def', 'DEF: ', 5)
// populateTeam('.midfielders', midfielderArray, '.mid', 'MID: ', 5)
// populateTeam('.forwards', forwardArray, '.fwd', 'FWD: ', 3)

