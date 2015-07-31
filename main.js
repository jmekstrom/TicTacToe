var player = 1;
var player_clicks = [1,2,3,4,5,6,7,8,9];
var Win_Array = [];
var board_width;
var click_num = 0;

function smWaffle(size) {
    var container = $("<div>", {
        class: container
    })
    $("#gameboard").append(container);
    for(var j = 1; j <= size; j++) {
        //create row object
        var row = $("<div>",{
            class: "row"+j,
        })
        $(".container").append(row);
        for (var i = 1; i < size + i; i++) {
            var slot = $("<div>", {
                class: "slot",
                id: "slot" + i,
                onclick: "XO(" + i + ")"
            })
            $(".row" + j).append(slot);
        }
    }
}

function mdWaffle() {
    $('#gameboard').html(
        '<div class="container">' +
        '<div class="smWaffleGrid">' +
        '<div class="row">' +
        '<div class="slot" onclick=XO(1)></div>' +
        '<div class="slot" onclick=XO(2)></div>' +
        '<div class="slot" onclick=XO(3)></div>' +
        '</div>' +
        '<div class="row">' +
        '<div class="slot" onclick=XO(4)></div>' +
        '<div class="slot" onclick=XO(5)></div>' +
        '<div class="slot" onclick=XO(6)></div>' +
        '<div>' +
        '</div class="row">' +
        '<div class="slot" onclick=XO(7)></div>' +
        '<div class="slot" onclick=XO(8)></div>' +
        '<div class="slot" onclick=XO(9)></div>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '<div class="container">' +
        '<div class="smWaffleGrid">' +
        '<div class="row">' +
        '<div class="slot" onclick=XO(1)></div>' +
        '<div class="slot" onclick=XO(2)></div>' +
        '<div class="slot" onclick=XO(3)></div>' +
        '</div>' +
        '<div class="row">' +
        '<div class="slot" onclick=XO(4)></div>' +
        '<div class="slot" onclick=XO(5)></div>' +
        '<div class="slot" onclick=XO(6)></div>' +
        '<div>' +
        '</div class="row">' +
        '<div class="slot" onclick=XO(7)></div>' +
        '<div class="slot" onclick=XO(8)></div>' +
        '<div class="slot" onclick=XO(9)></div>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '<div class="container">' +
        '<div class="smWaffleGrid">' +
        '<div class="row">' +
        '<div class="slot" onclick=XO(1)></div>' +
        '<div class="slot" onclick=XO(2)></div>' +
        '<div class="slot" onclick=XO(3)></div>' +
        '</div>' +
        '<div class="row">' +
        '<div class="slot" onclick=XO(4)></div>' +
        '<div class="slot" onclick=XO(5)></div>' +
        '<div class="slot" onclick=XO(6)></div>' +
        '<div>' +
        '</div class="row">' +
        '<div class="slot" onclick=XO(7)></div>' +
        '<div class="slot" onclick=XO(8)></div>' +
        '<div class="slot" onclick=XO(9)></div>' +
        '</div>' +
        '</div>' +
        '</div>');
}

function lgWaffle() {
    $('#gameboard').html(
        '<div class="container">' +
        '<div class="smWaffleGrid">' +
        '<div class="row">' +
        '<div class="slot" onclick=XO(1)></div>' +
        '<div class="slot" onclick=XO(2)></div>' +
        '<div class="slot" onclick=XO(3)></div>' +
        '</div>' +
        '<div class="row">' +
        '<div class="slot" onclick=XO(4)></div>' +
        '<div class="slot" onclick=XO(5)></div>' +
        '<div class="slot" onclick=XO(6)></div>' +
        '<div>' +
        '</div class="row">' +
        '<div class="slot" onclick=XO(7)></div>' +
        '<div class="slot" onclick=XO(8)></div>' +
        '<div class="slot" onclick=XO(9)></div>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '<div class="container">' +
        '<div class="smWaffleGrid">' +
        '<div class="row">' +
        '<div class="slot" onclick=XO(1)></div>' +
        '<div class="slot" onclick=XO(2)></div>' +
        '<div class="slot" onclick=XO(3)></div>' +
        '</div>' +
        '<div class="row">' +
        '<div class="slot" onclick=XO(4)></div>' +
        '<div class="slot" onclick=XO(5)></div>' +
        '<div class="slot" onclick=XO(6)></div>' +
        '<div>' +
        '</div class="row">' +
        '<div class="slot" onclick=XO(7)></div>' +
        '<div class="slot" onclick=XO(8)></div>' +
        '<div class="slot" onclick=XO(9)></div>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '<div class="container">' +
        '<div class="smWaffleGrid">' +
        '<div class="row">' +
        '<div class="slot" onclick=XO(1)></div>' +
        '<div class="slot" onclick=XO(2)></div>' +
        '<div class="slot" onclick=XO(3)></div>' +
        '</div>' +
        '<div class="row">' +
        '<div class="slot" onclick=XO(4)></div>' +
        '<div class="slot" onclick=XO(5)></div>' +
        '<div class="slot" onclick=XO(6)></div>' +
        '<div>' +
        '</div class="row">' +
        '<div class="slot" onclick=XO(7)></div>' +
        '<div class="slot" onclick=XO(8)></div>' +
        '<div class="slot" onclick=XO(9)></div>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '<div class="container">' +
        '<div class="smWaffleGrid">' +
        '<div class="row">' +
        '<div class="slot" onclick=XO(1)></div>' +
        '<div class="slot" onclick=XO(2)></div>' +
        '<div class="slot" onclick=XO(3)></div>' +
        '</div>' +
        '<div class="row">' +
        '<div class="slot" onclick=XO(4)></div>' +
        '<div class="slot" onclick=XO(5)></div>' +
        '<div class="slot" onclick=XO(6)></div>' +
        '<div>' +
        '</div class="row">' +
        '<div class="slot" onclick=XO(7)></div>' +
        '<div class="slot" onclick=XO(8)></div>' +
        '<div class="slot" onclick=XO(9)></div>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '<div class="container">' +
        '<div class="smWaffleGrid">' +
        '<div class="row">' +
        '<div class="slot" onclick=XO(1)></div>' +
        '<div class="slot" onclick=XO(2)></div>' +
        '<div class="slot" onclick=XO(3)></div>' +
        '</div>' +
        '<div class="row">' +
        '<div class="slot" onclick=XO(4)></div>' +
        '<div class="slot" onclick=XO(5)></div>' +
        '<div class="slot" onclick=XO(6)></div>' +
        '<div>' +
        '</div class="row">' +
        '<div class="slot" onclick=XO(7)></div>' +
        '<div class="slot" onclick=XO(8)></div>' +
        '<div class="slot" onclick=XO(9)></div>' +
        '</div>' +
        '</div>' +
        '</div>');
}

function XO(n) {
    click_num++;
    console.log("Slot:", n, "has been clicked");
    $("#slot" + n).removeAttr('onclick');
    if (player == 1) {
        player_clicks[n-1] = "x";
        player = 2;
        $("#slot" + n).append("<img class='tile_img' src='images/blueberry.png'>");
    } else {
        player_clicks[n-1] = "o";
        player = 1;
        $("#slot" + n).append("<img class='tile_img' src='images/raspberry.png'>");
    }
    console.log(player_clicks)
    var won = win_check();
    if(won != undefined){
        console.log("Game Won by",won)
    }
    if(click_num==9 && won == undefined){
        console.log("Tie Game")
    }
}

function win_check() {
    //iterates through the Win_Array and checks for win conditions

    //Outer for loop iterates the each individual win condition
    for (var i = 0; i < Win_Array.length; i++) {
        //Inner for loop interates through the win condition array (nested in the win array) 
        //and points to the player click array and looks for the amount of matches equal to 
        //board width -1
        var match = 0;
        var previous_value = null;
        for (var j = 0; j < Win_Array[i].length; j++) {
            var current_value = player_clicks[Win_Array[i][j]];
            //console.log("cv:",current_value,", pv:",previous_value)
            if (current_value == previous_value) {
                match++;
                console.log("match:",match)
                if (match == board_width - 1) {
                    return current_value
                }
            }
            var previous_value = player_clicks[Win_Array[i][j]];
        }
    }
}

function Build_Win_Array(width) {

    var size = width;
    board_width = size;
    var Win_Condition = [];

    //horizontal conditions
    for (var i = 0; i < size * size; i += size) {
        for (var j = i; j < size + i; j++) {
            Win_Condition.push(j);
        }
        console.log("Win Condition", Win_Condition);
        Win_Array.push(Win_Condition);
        Win_Condition = [];
    }
    //console.log("WA", WA);

    //vertical conditions
    for (var i = 0; i < size; i++) {
        for (var j = i; j < size * size; j += size) {
            Win_Condition.push(j);
        }
        console.log("Win Condition", Win_Condition);
        Win_Array.push(Win_Condition);
        Win_Condition = [];
    }
    //console.log("WA", WA);

    //diagonal tl to br
    for (var i = 0; i < size * size; i += size + 1) {
        Win_Condition.push(i);
    }
    console.log("Win Condition", Win_Condition);
    Win_Array.push(Win_Condition);
    //console.log("WA", WA);
    Win_Condition = [];

    //diagonal tr to bl
    for (var i = size - 1; i <= size * size - size; i += size - 1) {
        Win_Condition.push(i);
    }
    console.log("Win Condition", Win_Condition);
    Win_Array.push(Win_Condition);
    console.log("Win Array", Win_Array);
    Win_Condition = [];

}



