import { Token } from './token.js';
console.log("board.ts script loaded");
// let newToken = new Token("john doe");
var tokens_list = []; //list of moveable/selectable tokens
var selected_tokens_list = []; //list of currently selected tokens
var zoom_slider = document.getElementById('zoom-slider');
var board = document.getElementById('game-board-svg');
var board_container = document.getElementById('game-board-container');
//ZOOMING
var cur_zoom_value = 100;
var cur_board_width = ((board_container.getBoundingClientRect().width) / cur_zoom_value) * 100;
var cur_board_height = ((board_container.getBoundingClientRect().height) / cur_zoom_value) * 100;
// var cur_board_width:number = (board.getBoundingClientRect().width);
// var cur_board_height:number = (board.getBoundingClientRect().height);
// board_container.scrollBy(6000, 0);
// console.log(board_container.scrollLeft);
// console.log("board.boundingclient ", board.getBoundingClientRect().width);
//sets zoom of board, then scrolls to center screen on cursor if able
function set_zoom(new_zoom_value, cursor_x, cursor_y) {
    board.style.zoom = new_zoom_value + "%"; //update zoom
    var new_board_width = ((board_container.getBoundingClientRect().width) / cur_zoom_value) * 100;
    var new_board_height = ((board_container.getBoundingClientRect().height) / cur_zoom_value) * 100;
    // var new_board_width:number = (board.getBoundingClientRect().width);
    // var new_board_height:number = (board.getBoundingClientRect().height);
    //board movement for zoom (scroll wheel and zoom slider)
    if (cursor_x == null && cursor_y == null) { //zoom slider
        //board_container.scrollBy((cur_board_width - new_board_width)/2 , (cur_board_height - new_board_height)/2); //centers screen
    }
    else if (cursor_x && cursor_y) { //scroll wheel & mouse
        //translates screen by cursor amount proportional to zoom (the more zoomed in, the less it translates)
        // console.log("container.offsetwidth ", board_container.offsetWidth);
        // console.log("container.clientwidth ", board_container.clientWidth); //the star
        // console.log("container.boundingclient ", board_container.getBoundingClientRect().width);
        // console.log("\n");
        // console.log("board.client ", board.clientWidth);
        // console.log("board.boundingclient ", board.getBoundingClientRect().width);
        // console.log("\n");
        // console.log("zooming to ", new_zoom_value);
        // console.log("container client width / new zoom",board_container.clientWidth/new_zoom_value);
        // console.log("container client width / (new zoom/100)",board_container.clientWidth/(new_zoom_value/100));
        // console.log("final movement",(cur_board_width - new_board_width)/-2)
        // console.log("\n---------------\n\n");
        board_container.scrollBy((cur_board_width - new_board_width) / 2, (cur_board_height - new_board_height) / 2); //centers screen
        // var cur_centered_cursor_x = ((cursor_x-(board.clientWidth/2)) / (cur_zoom_value/100));
        // var cur_centered_cursor_y = ((cursor_y-(board.clientWidth/2)) / (cur_zoom_value/100));
        // var new_centered_cursor_x = ((cursor_x-(board.clientWidth/2)) / (new_zoom_value/100));
        // var new_centered_cursor_y = ((cursor_y-(board.clientWidth/2)) / (new_zoom_value/100));
        // board_container.scrollBy(cur_centered_cursor_x - new_centered_cursor_x, cur_centered_cursor_y - new_centered_cursor_y); 
    }
    cur_board_width = new_board_width;
    cur_board_height = new_board_height;
    cur_zoom_value = new_zoom_value;
}
//zoom slider handler
zoom_slider.oninput = function () {
    set_zoom(Number(zoom_slider.value), null, null); //calls zoom slider
};
//sets zoom_slider value to +1/-1 step then calls set_zoom() to match the new value
function mouse_zoom(event) {
    var step = Number(zoom_slider.getAttribute("step"));
    event.preventDefault();
    if (event.deltaY < 0) {
        zoom_slider.value = String(Number(zoom_slider.value) + step); //manually increases zoom by 1 step
        set_zoom(Number(zoom_slider.value), event.clientX, event.clientY);
    }
    else {
        zoom_slider.value = String(Number(zoom_slider.value) - step); //manually decreases zoom by 1 step
        set_zoom(Number(zoom_slider.value), event.clientX, event.clientY);
    }
}
board_container.addEventListener("wheel", mouse_zoom);
//PANNING
var panning = false;
function start_pan(event) {
    if (event.button == 2) {
        panning = true;
        event.preventDefault();
    }
}
function end_pan(event) {
    if (panning) {
        panning = false;
    }
}
function move_pan(event) {
    if (panning) {
        board_container.scrollBy(Number(event.movementX) * -1, Number(event.movementY) * -1);
    }
}
board_container.addEventListener('pointerdown', start_pan);
board_container.addEventListener('pointerup', end_pan);
board_container.addEventListener('pointercancel', end_pan);
board_container.addEventListener('pointermove', move_pan);
board_container.addEventListener("contextmenu", function (event) { return event.preventDefault(); }); //prevent the right click contextmenu from opening on the gameboard
//creating starting tokens
var new_element = document.getElementsByClassName("token")[0];
var new_token = new Token("starting token S", new_element, 100, 100, 20, "a");
new_token.health = 25;
new_token.make_draggable();
new_token.set_border([160, 60, 60], [178, 78, 78]);
tokens_list.push(new_token);
