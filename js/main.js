var $container = $('#container');
var $containerH = $container.height();
var $containerW = $container.width();
var divBackground = "gainsboro";
var divColor = "white";


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
}

//default hover function
function hover()
{
    $("div").hover(function()
    {
        $(this).css("background-color", "#FFBD72");
    });
}

//clear function - change background to default
function clear(){
    $container.find('div').css("background", "white");
}


$(document).ready(function(){
    createDivs(40);
    hover();

    function clear(){
        $container.find('div').css("background", "white");
    }
});


