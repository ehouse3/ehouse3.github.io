import { Token } from './token.js';
console.log("board.ts script loaded");


// let newToken = new Token("john doe");
var tokens_list:Token[] = []; //list of moveable/selectable tokens
var selected_tokens_list:Token[] = []; //list of currently selected tokens

const zoom_slider:HTMLInputElement = document.getElementById('zoom-slider') as HTMLInputElement;
const board:SVGGraphicsElement = document.getElementById('game-board-svg')! as unknown as SVGGraphicsElement;
const board_container:HTMLElement = document.getElementById('game-board-container')!;

// #region zoom
var cur_zoom_value:number = 100;
var cur_board_width:number = ((board_container.getBoundingClientRect().width)/cur_zoom_value)*100;
var cur_board_height:number = ((board_container.getBoundingClientRect().height)/cur_zoom_value)*100;
// var cur_board_width:number = (board.getBoundingClientRect().width);
// var cur_board_height:number = (board.getBoundingClientRect().height);

// board_container.scrollBy(6000, 0);
// console.log(board_container.scrollLeft);
// console.log("board.boundingclient ", board.getBoundingClientRect().width);

//sets zoom of board, then scrolls to center screen on cursor if able
function set_zoom(new_zoom_value:number, cursor_x:null|number, cursor_y:null|number) {
    board.style.zoom = new_zoom_value + "%"; //update zoom
    var new_board_width:number = ((board_container.getBoundingClientRect().width)/cur_zoom_value)*100;
    var new_board_height:number = ((board_container.getBoundingClientRect().height)/cur_zoom_value)*100;
    // var new_board_width:number = (board.getBoundingClientRect().width);
    // var new_board_height:number = (board.getBoundingClientRect().height);
    
    //board movement for zoom (scroll wheel and zoom slider)
    if(cursor_x == null && cursor_y == null) { //zoom slider
        //board_container.scrollBy((cur_board_width - new_board_width)/2 , (cur_board_height - new_board_height)/2); //centers screen
    }else if(cursor_x && cursor_y) { //scroll wheel & mouse
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

        board_container.scrollBy((cur_board_width - new_board_width)/2 , (cur_board_height - new_board_height)/2); //centers screen
        
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
zoom_slider.oninput = function() {
    set_zoom(Number(zoom_slider.value), null, null); //calls zoom slider
}

//sets zoom_slider value to +1/-1 step then calls set_zoom() to match the new value
function mouse_zoom(event:WheelEvent) {
    let step:number = Number(zoom_slider.getAttribute("step")!);
    event.preventDefault();
    if(event.deltaY < 0){
        zoom_slider.value = String(Number(zoom_slider.value) + step); //manually increases zoom by 1 step
        set_zoom(Number(zoom_slider.value), event.clientX, event.clientY);
    }else{
        zoom_slider.value = String(Number(zoom_slider.value) - step); //manually decreases zoom by 1 step
        set_zoom(Number(zoom_slider.value), event.clientX, event.clientY);
    }
}
board_container.addEventListener("wheel", mouse_zoom);

// #region pan
var panning:boolean = false;    
function start_pan(event:PointerEvent) { //starting pan event handler
    if(event.button == 2){
        panning = true;   
        event.preventDefault();
    }
}
function end_pan(event:PointerEvent) { //ending pan event handler
    if(panning){
        panning = false;
    }   
}
function move_pan(event:PointerEvent) { //panning on mouse movement event handler
    if(panning) {  
        board_container.scrollBy(Number(event.movementX) * -1, Number(event.movementY) * -1)
    }
}
board_container.addEventListener('pointerdown', start_pan);
board_container.addEventListener('pointerup', end_pan);
board_container.addEventListener('pointercancel', end_pan);
board_container.addEventListener('pointermove', move_pan);
board_container.addEventListener("contextmenu", (event) => event.preventDefault()); //prevent the right click contextmenu from opening on the gameboard
// #endregion

// #region select
var box_selecting:boolean = false;
var start_x:number = 0;
var start_y:number = 0;
var x:number = 0;
var y:number = 0;
var selector_element:HTMLElement = document.getElementById("selector")!;
var cur_displayed_token:Token | null = null;

function event_to_svg_coordinates(event:PointerEvent, ) {//converts event's argument coordinates to svg coordinates
    // let p = board.createSVGPoint(); //deprecated
    let p = new DOMPoint();
    p.x = event.clientX;
    p.y = event.clientY;
    p = p.matrixTransform(board.getScreenCTM()!.inverse()); 
    return p;
}


function start_select(event:PointerEvent) { //selection start handler
    if(event.button !== 0) return; //mouse 0 only
    let target:HTMLElement = event.target as HTMLElement;
    if (target == null) { return; }
    if(target.parentElement!.classList.contains("token")) { //will not box select on a token piece, instead will 'select it' and let movement handler deal with it
        let target_id:string = target.parentElement!.id;
        let i:number = 0;
        while(i < tokens_list.length) { //itterates through tokens until it finds the one that the cursor is over
            if(target_id == tokens_list[i].unique_id && tokens_list[i].selected == false) {
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
    for(let selected_tokens_list_i = 0; selected_tokens_list_i < selected_tokens_list.length; selected_tokens_list_i++) { //remove all selected
        selected_tokens_list[selected_tokens_list_i].selected = false;
    }
    selected_tokens_list = [];
    
    //prevent and remove dragging for all tokens
    for(let token_i = 0; token_i < tokens_list.length; token_i++) { 
        tokens_list[token_i].prevent_movement();
        tokens_list[token_i].element_parent.classList.remove('dragging'); //forcefully remove dragging because handler still fires...
    }

    box_selecting = true;
    //sets immediate cursor position, adding current screen board location, then adjusting for zoom. (800 is for margin)
    let c = event_to_svg_coordinates(event);
    start_x = c.x / (cur_zoom_value/100); 
    start_y = c.y / (cur_zoom_value/100);
    selector_element.setAttribute("x", String(start_x)); 
    selector_element.setAttribute("y", String(start_y));

}
function move_select(event:PointerEvent) { //selection move handler
    if(!box_selecting) return;

    //selection-box movement starts at cursor
    let c = event_to_svg_coordinates(event);
    x = c.x / (cur_zoom_value/100); 
    y = c.y / (cur_zoom_value/100);
    
    //setting front end element size
    //box element's width created towards the right. If cursor moves left, adjusts the selection box's starting position (x), rather than width
    if(x > start_x) { 
        selector_element.setAttribute("width", x - start_x + "px");
        selector_element.setAttribute("x", start_x + "px");
    } else {
        selector_element.setAttribute("width", start_x - x + "px");  
        selector_element.setAttribute("x", x + "px");
    }
    //box element's height created towards the top. If cursor moves down, adjusts the selection box's starting position (y), rather than height
    if(y > start_y) {
        selector_element.setAttribute("height", y - start_y + "px");
        selector_element.setAttribute("y", start_y + "px");
    } else {
        selector_element.setAttribute("height", start_y - y + "px");  
        selector_element.setAttribute("y", y + "px");
    }
}
function end_select(event:PointerEvent) { //selection end handler
    //create function to find all elements in selector_element, and set 'selected' instance var for each token to true.
    if(!box_selecting) {
        //unselects previous tokens & clears selected list
        for(let selected_tokens_list_i = 0; selected_tokens_list_i < selected_tokens_list.length; selected_tokens_list_i++) { //remove all selected
            selected_tokens_list[selected_tokens_list_i].selected = false;
        }
        selected_tokens_list = [];
        return;
    }
    
    //itterates through all tokens, and if their position is inside the selection_box, add Token to selected_tokens_list
    for(let token_i = 0; token_i < tokens_list.length; token_i++) {
        if(x != 0 && y != 0){ //cursor moved at least once
            //each statement corresponds to the selection-box mouse moving towards a quadrant.
            //fix to include if selected on not center of token
            if((tokens_list[token_i].cur_x < x && tokens_list[token_i].cur_x > start_x) && (tokens_list[token_i].cur_y < y && tokens_list[token_i].cur_y > start_y)) { //bottom-right
                selected_tokens_list.push(tokens_list[token_i]);
            } else if((tokens_list[token_i].cur_x > x && tokens_list[token_i].cur_x < start_x) && (tokens_list[token_i].cur_y < y && tokens_list[token_i].cur_y > start_y)) { //bottom-left
                selected_tokens_list.push(tokens_list[token_i]);
            } else if((tokens_list[token_i].cur_x < x && tokens_list[token_i].cur_x > start_x) && (tokens_list[token_i].cur_y > y && tokens_list[token_i].cur_y < start_y)) { //top-right
                selected_tokens_list.push(tokens_list[token_i]);
            } else if((tokens_list[token_i].cur_x > x && tokens_list[token_i].cur_x < start_x) && (tokens_list[token_i].cur_y > y && tokens_list[token_i].cur_y < start_y)) { //top-left
                selected_tokens_list.push(tokens_list[token_i]);
            }
        }
        tokens_list[token_i].allow_movement();
    }
    
    //itterates through selected tokens list and sets all selected to true
    for(let selected_tokens_list_i = 0; selected_tokens_list_i < selected_tokens_list.length; selected_tokens_list_i++) {
        selected_tokens_list[selected_tokens_list_i].selected = true;
    }

    //reseting all variables for next box-selection
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

// #endregion


// #region create token
const new_element = document.getElementsByClassName("token")[0] as SVGGraphicsElement;
let new_token = new Token("starting token S", new_element, 100, 100, 20, "a");
new_token.health = 25;
new_token.make_draggable();
new_token.set_border([160, 60, 60],[178, 78, 78]);
tokens_list.push(new_token);