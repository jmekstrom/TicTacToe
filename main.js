var player = 1;
var player_clicks = [];
var Win_Array = [];
var board_width;
var click_num = 0;
var container;
var player1_wins = 0;
var player2_wins = 0;
var tie = 0;
var game_size = 3;

$(document).ready(function() {
    build_gameboard(game_size);
    Build_Win_Array(game_size);
    $(".player1").addClass("active_player");
    $(".3by").addClass("active_size");
    $("#player1_score").html(player1_wins);
    $("#player2_score").html(player2_wins);
    $("#tie_score").html(tie);
})

function build_gameboard(size) {
    $("#gameboard").empty();
    click_num = 0;
    var k = 0;
    for (var i = 0; i < size * size; i += size) {
        //create row object
        var row = $("<tr>", {
            class: "row" + k,
        })

        $("#gameboard").append(row);
        for (var j = i; j < size + i; j++) {
            var slot = $("<td>", {
                class: "slot",
                id: "slot" + (j + 1),
                onclick: "XO(" + (j + 1) + ")"
            })
            $(".row" + k).append(slot);
        }
        k++;
    }

}


function XO(n) {
    click_num++;
    console.log("Slot:", n, "has been clicked");
    $("#slot" + n).removeAttr('onclick');
    if (player == 1) {
        player_clicks[n - 1] = "x";
        player = 2;
        $("#slot" + n).text("X");
        $(".player1").removeClass("active_player");
        $(".player2").addClass("active_player");
    } else {
        player_clicks[n - 1] = "o";
        player = 1;
        $("#slot" + n).text("O");
        $(".player2").removeClass("active_player");
        $(".player1").addClass("active_player");
    }
    console.log(player_clicks)
    var won = win_check();
    console.log(won, "won");
    if (won == "x") {
        console.log("Game Won by", won)
        player1_wins++;
        $("#player1_score").html(player1_wins);
        reset_game();
    } else if (won == "o") {
        player2_wins++;
        $("#player2_score").html(player2_wins);
        reset_game();
    }
    if (click_num == player_clicks.length && won == undefined) {
        console.log("Tie Game")
        tie++;
        $("#tie_score").html(tie);
        reset_game();
    }
}

function reset_game() {
    $("table").effect("shake", 500);
    setTimeout(function() {
        build_gameboard(game_size);
        Build_Win_Array(game_size);
    }, 500);
}

function win_check() {
    //iterates through the Win_Array and checks for win conditions

    //Outer for loop iterates the each individual win condition
    for (var i = 0; i < Win_Array.length; i++) {
        //Inner for loop interates through the win condition array (nested in the win array) 
        //and points to the player click array and looks for the amount of matches equal to 
        //game_size -1
        var match = 0;
        var previous_value = null;
        for (var j = 0; j < Win_Array[i].length; j++) {
            var current_value = player_clicks[Win_Array[i][j]];
            //console.log("cv:",current_value,", pv:",previous_value)
            if (current_value == previous_value) {
                match++;
                console.log("match:", match)
                if (match == game_size - 1) {
                    return current_value
                }
            }
            var previous_value = player_clicks[Win_Array[i][j]];
        }
    }
}

function Build_Win_Array(width) {
    player_clicks = [];
    for (var i = 0; i < width * width; i++) {
        player_clicks.push(i + 1);
    }
    var size = width;
    var Win_Condition = [];

    //horizontal win conditions
    for (var i = 0; i < size * size; i += size) {
        for (var j = i; j < size + i; j++) {
            Win_Condition.push(j);
        }
        console.log("Win Condition", Win_Condition);
        Win_Array.push(Win_Condition);
        Win_Condition = [];
    }
    //console.log("WA", WA);

    //vertical win conditions
    for (var i = 0; i < size; i++) {
        for (var j = i; j < size * size; j += size) {
            Win_Condition.push(j);
        }
        console.log("Win Condition", Win_Condition);
        Win_Array.push(Win_Condition);
        Win_Condition = [];
    }
    //console.log("WA", WA);

    //diagonal top-left to bottom-right win conditions
    for (var i = 0; i < size * size; i += size + 1) {
        Win_Condition.push(i);
    }
    console.log("Win Condition", Win_Condition);
    Win_Array.push(Win_Condition);
    //console.log("WA", WA);
    Win_Condition = [];

    //diagonal top-right to bottom-left win conditions
    for (var i = size - 1; i <= size * size - size; i += size - 1) {
        Win_Condition.push(i);
    }
    console.log("Win Condition", Win_Condition);
    Win_Array.push(Win_Condition);
    console.log("Win Array", Win_Array);
    Win_Condition = [];

}

function update_board_size(size) {
    game_size = size;
    build_gameboard(game_size);
    Build_Win_Array(game_size);
    $(".boardsize").removeClass("active_size");
    $("."+size+"by").addClass("active_size");
}
