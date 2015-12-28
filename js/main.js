//---------------------------------//
//        Cached&variables         //
//---------------------------------//
var $container = $('#container');
var $containerH = $container.height();
var $containerW = $container.width();
var divBackground = "white";
var divColor = "white";
var $clear = $('.clear');
var $newGrid = $('.newGrid');
var $disco = $('.disco');
var $trail = $('.trail');
var $darken = $('.darken');
var $div = $container.find('div');
//----------------------------------------------//
//          Square generating function          //
//----------------------------------------------//
function createDivs(amount) {
    var divWidth = ($containerW / amount);
    var divHeight = ($containerH / amount);
    for (var i = 0; i < amount; i++) {
        for (var j = 0; j < amount; j++) {
            var div = document.createElement("div");
            div.className = i + "." + j;
            div.style.width = divWidth + "px";
            div.style.height = divHeight + "px";
            div.style.background = divBackground;
            div.style.color = divColor;
            document.getElementById("container").appendChild(div);
        }
    }
    clear();
    hover();
}
//----------------------------------------------//
//          Default hover function              //
//----------------------------------------------//
function hover() {
    $("div").hover(function() {
        $(this).css("background-color", "#FFBD72");
    });
}
//----------------------------------------------//
//                     Clear                    //
//----------------------------------------------//
function clear() {
    $container.find('div').css("background-color", "white");
    $container.find('div').css("opacity", 1);
    hover();
}
//----------------------------------------------//
// Generate grids function based on user input  //
//----------------------------------------------//
function newGrid(amount) {
    var size = prompt("How many squares would you like to have in row?(1-100)");
    while (size <= 0 || size > 100 || size === null) {
        size = prompt("How many squares would you like to have in row?(1-100)");
    }
    $container.find('div').remove();
    createDivs(size);
}
//----------------------------------------------//
//          Random color effect on hover        //
//----------------------------------------------//
function disco() {
    $("div").hover(function() {
        var color = '#' + Math.floor(Math.random() * 16777215).toString(16);
        $(this).css("background-color", color);
    });
    return false;
}
//----------------------------------------------//
//         Trail effect on mouseenter/leave     //
//----------------------------------------------//
function trail() {
    //disco().break();
    $container.find('div').mouseenter(function() {
        $(this).fadeTo(100, 0);
    });
    $container.find('div').mouseleave(function() {
        $(this).fadeTo(400, 1);
    });
}
//----------------------------------------------//
//       Function to reset each function        //
//      (so they won't overlap each other)      //
//----------------------------------------------//
function unbind() {
    $('nav').find('a').click(function() { // reset event handlers for the animations when choosing a new type of animation
        $container.find('div').unbind();
    });
}
//----------------------------------------------//
//  Decrease opacity function on mouseenter     //
//----------------------------------------------//
function darken() {
    $container.find('div').mouseenter(function() {
        var currentOpacity = $(this).css("opacity");
        if (!(currentOpacity === 0)) {
            $(this).css("opacity", currentOpacity - 0.3);
        }
    });
}
//----------------------------------------------//
//              Main jQuery program             //
//----------------------------------------------//
$(document).ready(function() {
    //create squares - default is 7
    createDivs(7);
    //prevent from running animations all at once
    unbind();
    //attach functions to buttons(a)
    $clear.on('click', clear);
    $newGrid.on('click', newGrid);
    $disco.on('click', disco);
    $trail.on('click', trail);
    $darken.on('click', darken);
});
