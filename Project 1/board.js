import { Token } from './token.js';
console.log("board.ts script loaded");
var tokens_list = []; //list of moveable/selectable tokens
var selected_tokens_list = []; //list of currently selected tokens
var zoom_slider = document.getElementById('zoom-slider');
var board = document.getElementById('game-board-svg');
var board_container = document.getElementById('game-board');
// panning
var panning = false;
function start_pan(event) {
    if (event.button == 2) {
        panning = true;
        board_container.style.cursor = "move";
        event.preventDefault();
    }
}
function end_pan(event) {
    if (panning) {
        panning = false;
        board_container.style.cursor = "default";
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
// select
var box_selecting = false;
var start_x = 0;
var start_y = 0;
var x = 0;
var y = 0;
var selector_element = document.getElementById("selector");
var cur_displayed_token = null;
function event_to_svg_coordinates(event) {
    var p = new DOMPoint();
    p.x = event.clientX;
    p.y = event.clientY;
    p = p.matrixTransform(board.getScreenCTM().inverse());
    return p;
}
function start_select(event) {
    if (event.button !== 0)
        return; //mouse 0 only
    var target = event.target;
    if (target == null) {
        return;
    }
    if (target.parentElement.classList.contains("token")) { //will not box select on a token piece, instead will 'select it' and let movement handler deal with it
        var target_id = target.parentElement.id;
        var i = 0;
        while (i < tokens_list.length) { //itterates through tokens until it finds the one that the cursor is over
            if (target_id == tokens_list[i].unique_id && tokens_list[i].selected == false) {
                tokens_list[i].selected = true;
                selected_tokens_list.push(tokens_list[i]);
                cur_displayed_token = tokens_list[i];
                i = tokens_list.length; //exit loop
            }
            i++;
        }
        // update_token_information();
        return;
    }
    //unselects previous tokens & clears selected list
    for (var selected_tokens_list_i = 0; selected_tokens_list_i < selected_tokens_list.length; selected_tokens_list_i++) { //remove all selected
        selected_tokens_list[selected_tokens_list_i].selected = false;
    }
    selected_tokens_list = [];
    //prevent and remove dragging for all tokens
    for (var token_i = 0; token_i < tokens_list.length; token_i++) {
        tokens_list[token_i].prevent_movement();
        tokens_list[token_i].element_parent.classList.remove('dragging'); //forcefully remove dragging because handler still fires...
    }
    box_selecting = true;
    //sets immediate cursor position, adding current screen board location, then adjusting for zoom. (800 is for margin)
    var c = event_to_svg_coordinates(event);
    start_x = c.x;
    start_y = c.y;
    selector_element.setAttribute("x", String(start_x));
    selector_element.setAttribute("y", String(start_y));
}
function move_select(event) {
    if (!box_selecting)
        return;
    //selection-box movement starts at cursor
    var c = event_to_svg_coordinates(event);
    x = c.x;
    y = c.y;
    //setting front selector end element size
    //box element's width created towards the right. If cursor moves left, adjusts the selection box's starting position (x), rather than width
    if (x > start_x) {
        selector_element.setAttribute("width", x - start_x + "px");
        selector_element.setAttribute("x", start_x + "px");
    }
    else {
        selector_element.setAttribute("width", start_x - x + "px");
        selector_element.setAttribute("x", x + "px");
    }
    //box element's height created towards the top. If cursor moves down, adjusts the selection box's starting position (y), rather than height
    if (y > start_y) {
        selector_element.setAttribute("height", y - start_y + "px");
        selector_element.setAttribute("y", start_y + "px");
    }
    else {
        selector_element.setAttribute("height", start_y - y + "px");
        selector_element.setAttribute("y", y + "px");
    }
}
function end_select(event) {
    //create function to find all elements in selector_element, and set 'selected' instance let for each token to true.
    if (!box_selecting) {
        //unselects previous tokens & clears selected list
        for (var selected_tokens_list_i = 0; selected_tokens_list_i < selected_tokens_list.length; selected_tokens_list_i++) { //remove all selected
            selected_tokens_list[selected_tokens_list_i].selected = false;
        }
        selected_tokens_list = [];
        return;
    }
    //itterates through all tokens, and if their position is inside the selection_box, add Token to selected_tokens_list
    for (var token_i = 0; token_i < tokens_list.length; token_i++) {
        if (x != 0 && y != 0) { //cursor moved at least once
            //each statement corresponds to the selection-box mouse moving towards a quadrant.
            //fix to include if selected on not center of token
            if ((tokens_list[token_i].cur_x < x && tokens_list[token_i].cur_x > start_x) && (tokens_list[token_i].cur_y < y && tokens_list[token_i].cur_y > start_y)) { //bottom-right
                selected_tokens_list.push(tokens_list[token_i]);
            }
            else if ((tokens_list[token_i].cur_x > x && tokens_list[token_i].cur_x < start_x) && (tokens_list[token_i].cur_y < y && tokens_list[token_i].cur_y > start_y)) { //bottom-left
                selected_tokens_list.push(tokens_list[token_i]);
            }
            else if ((tokens_list[token_i].cur_x < x && tokens_list[token_i].cur_x > start_x) && (tokens_list[token_i].cur_y > y && tokens_list[token_i].cur_y < start_y)) { //top-right
                selected_tokens_list.push(tokens_list[token_i]);
            }
            else if ((tokens_list[token_i].cur_x > x && tokens_list[token_i].cur_x < start_x) && (tokens_list[token_i].cur_y > y && tokens_list[token_i].cur_y < start_y)) { //top-left
                selected_tokens_list.push(tokens_list[token_i]);
            }
        }
        tokens_list[token_i].allow_movement();
    }
    //itterates through selected tokens list and sets all selected to true
    for (var selected_tokens_list_i = 0; selected_tokens_list_i < selected_tokens_list.length; selected_tokens_list_i++) {
        selected_tokens_list[selected_tokens_list_i].selected = true;
    }
    //reseting all letiables for next box-selection
    box_selecting = false;
    x = 0;
    y = 0;
    selector_element.setAttribute("width", "0");
    selector_element.setAttribute("height", "0");
    selector_element.setAttribute("x", "0");
    selector_element.setAttribute("y", "0");
}
//binding handlers
board_container.addEventListener('pointerdown', start_select);
board_container.addEventListener('pointerup', end_select);
board_container.addEventListener('pointercancel', end_select);
board_container.addEventListener('pointermove', move_select);
// let cur_displayed_token = '';
var name_element = document.getElementById("name");
var health_element = document.getElementById("health");
var mana_element = document.getElementById("mana");
var size_element = document.getElementById("size");
function update_token_information() {
    if (!(cur_displayed_token === null || cur_displayed_token === void 0 ? void 0 : cur_displayed_token.name)) {
        if (name_element) {
            name_element.innerHTML = "token name";
        }
        if (health_element) {
            health_element.innerHTML = "health points";
        }
        if (mana_element) {
            mana_element.innerHTML = "mana points";
        }
        if (size_element) {
            size_element.innerHTML = "size";
        }
    }
    else {
        if (name_element) {
            name_element.innerHTML = cur_displayed_token.name;
        }
        if (health_element) {
            health_element.innerHTML = "hp : " + cur_displayed_token.health;
        }
        if (mana_element) {
            mana_element.innerHTML = "mp : " + cur_displayed_token.mana;
        }
        if (size_element) {
            size_element.innerHTML = "size : " + cur_displayed_token.width;
        }
    }
}
// create token
var new_element = document.getElementsByClassName("token")[0];
var new_token = new Token("starting token S", new_element, 100, 100, 20, "a");
new_token.make_draggable();
new_token.set_border([160, 60, 60], [178, 78, 78]);
tokens_list.push(new_token);
var new_element2 = document.getElementsByClassName("token")[1];
var new_token2 = new Token("starting token M", new_element2, 140, 100, 40, "b");
new_token2.make_draggable();
new_token2.set_border([160, 60, 60], [178, 78, 78]);
tokens_list.push(new_token2);
var new_element3 = document.getElementsByClassName("token")[2];
var new_token3 = new Token("starting token L", new_element3, 180, 80, 60, "c");
new_token3.make_draggable();
new_token3.set_border([160, 60, 60], [178, 78, 78]);
tokens_list.push(new_token3);
