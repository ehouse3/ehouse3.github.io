console.log("token.ts class loaded");
// export class Token {
//     private _name:string;
//     constructor(name:string) {
//         this._name = name;
//     }
// }
export class Token {
    /*
    class to create a movable and storable token objects:
    name: name of the token
    element: html element
    cur_x: current x coordinate
    cur_y: current y coordinate
    width: width of token (multiple of 12)
    unique_id: id assigned to distinguish tokens (element attribute)
    */

    private _name:string;
    private _element_parent:HTMLElement;
    private _element_circle_0:Element;
    private _element_circle_1:Element;

    private _cur_x:number;
    private _cur_y:number;

    private _width:number;
    private _unique_id:string;

    private dragging:boolean | null; //adjust later
    private _selected:boolean;
    private _movement_allowed:boolean;

    private _previous_border_0:string; //adjust later
    private _previous_border_1:string;

    private _health:number; private _mana:number; private _armor:number; private _speed:number;


    constructor(name = '(no name given)', element_parent:HTMLElement, cur_x=0, cur_y=0, width:number, unique_id:number) {
        //uses _var naming scheme to prevent idefinite recursive calls
        this._name = name;

        this._element_parent = element_parent;
        this._element_circle_0 = element_parent.children[0]; //first circle
        this._element_circle_1 = element_parent.children[1]; //second circle

        this._cur_x = cur_x;
        this._cur_y = cur_y;
        if(width) { 
            this._width = width;
            this.element_circle_0.setAttribute("r", Number(this.width / 2) + "px");
            this.element_circle_1.setAttribute("r", Number(this.width / 2) + "px");
        } else {
            //this._width = this.element_circle_0.getAttribute("r");
            this._width = 1; //remove later
        }

        this._unique_id = unique_id;
        this.element_parent.id = String(this.unique_id);
        
        //this.set_position(cur_x, cur_y); //called in constructor to update the start position
        this.dragging = null; //currently dragging
        this._selected = false;
        this._previous_border_0 = '';
        this._previous_border_1 = '';
        this._movement_allowed = true; //intermittent movement check for dragging

        //token game stats
        this._health = 10;
        this._mana = 5;
        this._armor = 0;
        this._speed = 0;
    }
    //getter functions
    get element_parent() { return this._element_parent; }
    get element_circle_0() { return this._element_circle_0; }
    get element_circle_1() { return this._element_circle_1; }
    get width() { return this._width; }
    get cur_x() { return this._cur_x; }
    get cur_y() { return this._cur_y; }
    get selected() { return this._selected; }
    get unique_id() { return this._unique_id; }
    get movement_allowed() { return this._movement_allowed; }

    get name() { return this._name; }
    get health() { return this._health; }
    get mana() { return this._mana; }
}