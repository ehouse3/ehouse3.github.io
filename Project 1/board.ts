import { Token } from './token.js';
console.log("board.ts script loaded");

let tokens_list: Token[] = []; //list of moveable/selectable tokens
let selected_tokens_list: Token[] = []; //list of currently selected tokens

// const zoom_slider: HTMLInputElement = document.getElementById('zoom-slider') as HTMLInputElement;
const board: SVGGraphicsElement = document.getElementById('game-board-svg')! as unknown as SVGGraphicsElement;
const board_container: HTMLElement = document.getElementById('game-board')!;

// panning
let panning: boolean = false;
function start_pan(event: PointerEvent) { //starting pan event handler
    if (event.button == 2) {
        panning = true;
        board_container.style.cursor = "move";
        event.preventDefault();
    }
}
function end_pan(event: PointerEvent) { //ending pan event handler
    if (panning) {
        panning = false;
        board_container.style.cursor = "default";
    }
}
function move_pan(event: PointerEvent) { //panning on mouse movement event handler
    if (panning) {
        board_container.scrollBy(Number(event.movementX) * -1, Number(event.movementY) * -1)
    }
}
board_container.addEventListener('pointerdown', start_pan);
board_container.addEventListener('pointerup', end_pan);
board_container.addEventListener('pointercancel', end_pan);
board_container.addEventListener('pointermove', move_pan);
board_container.addEventListener("contextmenu", (event) => event.preventDefault()); //prevent the right click contextmenu from opening on the gameboard


// select
let box_selecting: boolean = false;
let start_x: number = 0;
let start_y: number = 0;
let x: number = 0;
let y: number = 0;
let selector_element: HTMLElement = document.getElementById("selector")!;
let cur_displayed_token: Token | null = null;

function event_to_svg_coordinates(event: PointerEvent,) {//converts event's argument coordinates to svg coordinates
    let p = new DOMPoint();
    p.x = event.clientX;
    p.y = event.clientY;
    p = p.matrixTransform(board.getScreenCTM()!.inverse());
    return p;
}


function start_select(event: PointerEvent) { //selection start handler
    if (event.button !== 0) return; //mouse 0 only
    let target: HTMLElement | null = event.target as HTMLElement | null;
    if (target == null) { return; }
    if (target.parentElement == null) { return; }
    if (target.parentElement.classList.contains("token")) { //will not box select on a token piece, instead will 'select it' and let movement handler deal with it
        let target_id: string = target.parentElement.id;
        let i: number = 0;
        while (i < tokens_list.length) { //itterates through tokens until it finds the one that the cursor is over
            if (target_id == tokens_list[i].unique_id && tokens_list[i].selected == false) {
                tokens_list[i].selected = true;
                selected_tokens_list.push(tokens_list[i]);
                cur_displayed_token = tokens_list[i];

                i = tokens_list.length; //exit loop
            }
            i++;
        }

        update_token_information();
        return;
    }

    //unselects previous tokens & clears selected list
    for (let i = 0; i < selected_tokens_list.length; i++) { //remove all selected
        selected_tokens_list[i].selected = false;
    }
    selected_tokens_list = [];

    //prevent and remove dragging for all tokens
    for (let token_i = 0; token_i < tokens_list.length; token_i++) {
        tokens_list[token_i].prevent_movement();
        tokens_list[token_i].element_parent.classList.remove('dragging'); //forcefully remove dragging because handler still fires...
    }

    box_selecting = true;
    //sets immediate cursor position, adding current screen board location, then adjusting for zoom. (800 is for margin)
    let c = event_to_svg_coordinates(event);
    start_x = c.x;
    start_y = c.y;
    selector_element.setAttribute("x", String(start_x));
    selector_element.setAttribute("y", String(start_y));

}
function move_select(event: PointerEvent) { //selection move handler
    if (!box_selecting) return;

    //selection-box movement starts at cursor
    let c = event_to_svg_coordinates(event);
    x = c.x;
    y = c.y;

    //setting front selector end element size
    //box element's width created towards the right. If cursor moves left, adjusts the selection box's starting position (x), rather than width
    if (x > start_x) {
        selector_element.setAttribute("width", x - start_x + "px");
        selector_element.setAttribute("x", start_x + "px");
    } else {
        selector_element.setAttribute("width", start_x - x + "px");
        selector_element.setAttribute("x", x + "px");
    }
    //box element's height created towards the top. If cursor moves down, adjusts the selection box's starting position (y), rather than height
    if (y > start_y) {
        selector_element.setAttribute("height", y - start_y + "px");
        selector_element.setAttribute("y", start_y + "px");
    } else {
        selector_element.setAttribute("height", start_y - y + "px");
        selector_element.setAttribute("y", y + "px");
    }
}
function end_select(event: PointerEvent) { //selection end handler
    //create function to find all elements in selector_element, and set 'selected' instance let for each token to true.
    if (!box_selecting) {
        //unselects previous tokens & clears selected list
        for (let selected_tokens_list_i = 0; selected_tokens_list_i < selected_tokens_list.length; selected_tokens_list_i++) { //remove all selected
            selected_tokens_list[selected_tokens_list_i].selected = false;
        }
        selected_tokens_list = [];
        return;
    }

    //itterates through all tokens, and if their position is inside the selection_box, add Token to selected_tokens_list
    for (let token_i = 0; token_i < tokens_list.length; token_i++) {
        if (x != 0 && y != 0) { //cursor moved at least once
            //each statement corresponds to the selection-box mouse moving towards a quadrant.
            //fix to include if selected on not center of token
            if ((tokens_list[token_i].cur_x < x && tokens_list[token_i].cur_x > start_x) && (tokens_list[token_i].cur_y < y && tokens_list[token_i].cur_y > start_y)) { //bottom-right
                selected_tokens_list.push(tokens_list[token_i]);
            } else if ((tokens_list[token_i].cur_x > x && tokens_list[token_i].cur_x < start_x) && (tokens_list[token_i].cur_y < y && tokens_list[token_i].cur_y > start_y)) { //bottom-left
                selected_tokens_list.push(tokens_list[token_i]);
            } else if ((tokens_list[token_i].cur_x < x && tokens_list[token_i].cur_x > start_x) && (tokens_list[token_i].cur_y > y && tokens_list[token_i].cur_y < start_y)) { //top-right
                selected_tokens_list.push(tokens_list[token_i]);
            } else if ((tokens_list[token_i].cur_x > x && tokens_list[token_i].cur_x < start_x) && (tokens_list[token_i].cur_y > y && tokens_list[token_i].cur_y < start_y)) { //top-left
                selected_tokens_list.push(tokens_list[token_i]);
            }
        }
        tokens_list[token_i].allow_movement();
    }

    //itterates through selected tokens list and sets all selected to true
    for (let selected_tokens_list_i = 0; selected_tokens_list_i < selected_tokens_list.length; selected_tokens_list_i++) {
        selected_tokens_list[selected_tokens_list_i].selected = true;
    }

    //reseting all for next box-selection
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


let name_element = document.getElementById("name");
let health_element = document.getElementById("health");
let mana_element = document.getElementById("mana");
let size_element = document.getElementById("size");
function update_token_information() {
    if (!cur_displayed_token?.name) {
        if (name_element) { name_element.innerHTML = "token name"; }
        if (health_element) { health_element.innerHTML = "health points"; }
        if (mana_element) { mana_element.innerHTML = "mana points"; }
        if (size_element) { size_element.innerHTML = "size"; }
    } else {
        if (name_element) { name_element.innerHTML = cur_displayed_token.name; }
        if (health_element) { health_element.innerHTML = "hp : " + cur_displayed_token.health; }
        if (mana_element) { mana_element.innerHTML = "mp : " + cur_displayed_token.mana; }
        if (size_element) { size_element.innerHTML = "size : " + cur_displayed_token.width; }
    }
}

var token_prefab: HTMLElement | null = document.getElementById("token-prefab");
var newKey = 0; //assigns a different unique id to each created token
function create_new_token() { //clones and appends prefab. Then creates token with appropiate creation functions
    let new_element: SVGGraphicsElement = token_prefab?.cloneNode(true) as SVGGraphicsElement;
    if (new_element == null) { return; }
    board.appendChild(new_element);
    let new_token = new Token("new token " + newKey, new_element, 50, 50, 24, newKey.toString());
    tokens_list.push(new_token);

    new_token.make_draggable();
    new_token3.set_border([160, 60, 60], [178, 78, 78]);
    newKey++;
}
const create_token_button: HTMLElement | null = document.getElementById("create-token-button");
create_token_button?.addEventListener('pointerdown', create_new_token);
console.log(create_token_button);


function delete_token() { 
    console.log("removing token");
    if(cur_displayed_token && selected_tokens_list.length == 0) {
        let index = tokens_list.indexOf(cur_displayed_token);
        tokens_list.splice(index, 1);

        cur_displayed_token.remove_draggable(); //remove listener
        cur_displayed_token.element_parent.remove(); //remove element
        cur_displayed_token = null;
        update_token_information();
    } else {
        for(var token_i = 0; token_i < selected_tokens_list.length; token_i++) {        
            let index = tokens_list.indexOf(selected_tokens_list[token_i]);
            tokens_list.splice(index, 1);

            selected_tokens_list[token_i].remove_draggable(); //remove listener
            selected_tokens_list[token_i].element_parent.remove(); //remove element
            delete selected_tokens_list[token_i]; //garbage collection would reclaim anyway

        }
        selected_tokens_list = [];

    }
}
const delete_token_button = document.getElementById("delete_token_button");


function toggle_token_movement() {
    console.log("toggling token movement");
}
const toggle_movement_button = document.getElementById("toggle_movement_button");


// create token
const new_element = document.getElementsByClassName("token")[0] as SVGGraphicsElement;
let new_token = new Token("starting token S", new_element, 100, 100, 20, "a");
new_token.make_draggable();
new_token.set_border([160, 60, 60], [178, 78, 78]);
tokens_list.push(new_token);

const new_element2 = document.getElementsByClassName("token")[1] as SVGGraphicsElement;
let new_token2 = new Token("starting token M", new_element2, 140, 100, 40, "b");
new_token2.make_draggable();
new_token2.set_border([160, 60, 60], [178, 78, 78]);
tokens_list.push(new_token2);

const new_element3 = document.getElementsByClassName("token")[2] as SVGGraphicsElement;
let new_token3 = new Token("starting token L", new_element3, 180, 80, 60, "c");
new_token3.make_draggable();
new_token3.set_border([160, 60, 60], [178, 78, 78]);
tokens_list.push(new_token3);   