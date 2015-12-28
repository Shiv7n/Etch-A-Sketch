var $container = $('#container');
var $containerH = $container.height();
var $containerW = $container.width();
var divBackground = "white";
var divColor = "white";
//buttons
var $clear = $('.clear');
var $newGrid = $('.newGrid');
var $disco = $('.disco');
var $trail = $('.trail');
var $darken = $('.darken');
var $div = $container.find('div');


//function to create square divs i x j
function createDivs(amount)
{
    var divWidth = ($containerW/amount);
    var divHeight = ($containerH/amount);

    for(var i = 0; i < amount; i++)
    {
        for(var j = 0; j < amount; j++)
        {
        var div = document.createElement("div");
        div.className = i+"."+j;
        div.style.width = divWidth+"px";
        div.style.height = divHeight + "px";
        div.style.background = divBackground;
        div.style.color = divColor;
            document.getElementById("container").appendChild(div);
        }
    }
    $("div").hover(function()
    {
        $(this).css("background-color", "#FFBD72");
    });
}

//jquery functions
$(document).ready(function(){
    createDivs(7);
    $("button").click(function() {      // reset event handlers for the animations when choosing a new type of animation

        $container.find('div').unbind();

    });
    $container.prop('disabled', true);
    //clear function on click------------->
    $clear.on("click", function() {
        $container.find('div').css({
            "background": "white",
            "opacity" : "1"
        });
    });

    //create newGrid using same function but with user parameters
    $newGrid.on("click", function(){
        var size = prompt("How many squares per row would you like to have? (1-100)");
        while(size<=0 || size>100 || size === null)
        {
            size = prompt("How many squares per row would you like to have? (1-100)");
        }
        $container.empty();
        createDivs(size);
    });

    //disco! use random color for background
    $disco.on('click',function(){
        $("div").hover(function()
        {
            var color = "#" + Math.random().toString(16).slice(2, 8);
            $(this).css({
                "background-color":color,
                "opacity" : 1
            });
        });
    });

    //leaving trail function
    $trail.on('click', function(){
        $container.find('div').mouseenter(function() {

            $(this).fadeTo(100, 0);

        });

        $container.find('div').mouseleave(function() {

            $(this).fadeTo(400, 1);

        });

    });

});


