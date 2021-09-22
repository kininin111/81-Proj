canvas = document.getElementById("myCanvas");
ctx= canvas.getContext("2d");

color = "yellow";

ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 2;
ctx.arc(200, 200, 40, 0, 2*Math.PI)
ctx.stroke();


canvas.addEventListener("mousedown", my_mousedown);

function_mymousedown(e) 
{
    color = document.getElementById("color").value;
    console.log(color);

    mouse_x = e.clientX - canvas.offsetLeft;
    mouse_y = e.clientY - canvas.offsetTop;
    
    console.log("X = " + mouse_x + " ,Y = " + mouse_y);
    circle(mouse_x , mouse_y);
}



canvas = document.getElementById("myCanvas");
ctx= canvas.getContext("2d");

color = "blue";

ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 2;
ctx.arc( 230, 70, 40, 0, 2*Math.PI)
ctx.stroke();

canvas.addEventListener("mousedown", my_mousedown);

function_mymousedown(e)
{
    color = document.getElementById("color").value;
    console.log(color);

    mouse_x = e.clientX - canvas.offsetLeft;
    mouse_y = e.clientY - canvas.offsetTop;
    
    console.log("X = " + mouse_x + " ,Y = " + mouse_y);
    circle(mouse_x , mouse_y);
}


canvas = document.getElementById("myCanvas");
ctx= canvas.getContext("2d");

color = "black";

ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 2;
ctx.arc(200, 230, 40, 0, 2*Math.PI)
ctx.stroke();


canvas.addEventListener("mousedown", my_mousedown);

function_mymousedown(e) 
{
    color = document.getElementById("color").value;
    console.log(color);

    mouse_x = e.clientX - canvas.offsetLeft;
    mouse_y = e.clientY - canvas.offsetTop;
    
    console.log("X = " + mouse_x + " ,Y = " + mouse_y);
    circle(mouse_x , mouse_y);
}


canvas = document.getElementById("myCanvas");
ctx= canvas.getContext("2d");

color = "green";

ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 2;
ctx.arc(230, 100, 40, 0, 2*Math.PI)
ctx.stroke();


canvas.addEventListener("mousedown", my_mousedown);

function_mymousedown(e) 
{
    color = document.getElementById("color").value;
    console.log(color);

    mouse_x = e.clientX - canvas.offsetLeft;
    mouse_y = e.clientY - canvas.offsetTop;
    
    console.log("X = " + mouse_x + " ,Y = " + mouse_y);
    circle(mouse_x , mouse_y);
}


canvas = document.getElementById("myCanvas");
ctx= canvas.getContext("2d");

color = "red";

ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 2;
ctx.arc(200, 230, 40, 0, 2*Math.PI)
ctx.stroke();


canvas.addEventListener("mousedown", my_mousedown);

function_mymousedown(e) 
{
    color = document.getElementById("color").value;
    console.log(color);

    mouse_x = e.clientX - canvas.offsetLeft;
    mouse_y = e.clientY - canvas.offsetTop;
    
    console.log("X = " + mouse_x + " ,Y = " + mouse_y);
    circle(mouse_x , mouse_y);
}
