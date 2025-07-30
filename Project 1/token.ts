console.log("token.ts class loaded");
 
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
    private _svg:SVGGraphicsElement;
    private _element_parent:SVGGraphicsElement;
    private _element_circle_0:SVGCircleElement;
    private _element_circle_1:SVGCircleElement;

    private _cur_x:number;
    private _cur_y:number;

    private _width:number;
    private _unique_id:string;

    private dragging_d:{dx:number, dy:number} | null; // difference between center of token and grabbed coordinates
    private dragging_s:{sx:number, sy:number} | null; // start drag's coordinates
    private _selected:boolean;
    private _movement_allowed:boolean;

    private _previous_border_0:string; 
    private _previous_border_1:string;

    private _health:number; private _mana:number; private _armor:number; private _speed:number;

    constructor(name = '(no name given)', element_parent:SVGGraphicsElement, cur_x=0, cur_y=0, width:number, unique_id:string) {
        //uses _var naming scheme to prevent idefinite recursive calls
        this._name = name;

        this._element_parent = element_parent as SVGGraphicsElement;
        this._element_circle_0 = element_parent.children[0] as SVGCircleElement; //first circle
        this._element_circle_1 = element_parent.children[1] as SVGCircleElement; //second circle
        this._svg = element_parent.parentNode as SVGGraphicsElement;

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
        
        this.set_position(cur_x, cur_y); //called in constructor to update the start position
        this.dragging_d = null; 
        this.dragging_s = null;
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
    
    get svg() { return this._svg;}
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
    

    set cur_x(new_x) { this._cur_x = new_x; }
    set cur_y(new_y) { this._cur_y = new_y; }
    set name(new_name) { this._name = new_name; }
    set health(new_health) { this._health = new_health; }
    set mana(new_mana) { this._mana = new_mana; }
    set selected(new_selected) { //replace all with filter w/ hue rotate and a sepperate css class
        if(new_selected == true && this.selected == false) {
            this._previous_border_0 = this.element_circle_0.style.getPropertyValue("stroke");
            this._previous_border_1 = this.element_circle_1.style.getPropertyValue("stroke");
            
            this.element_circle_0.style.setProperty("stroke", "rgb(50, 50, 177)");
            this.element_circle_1.style.setProperty("stroke", "rgb(35, 35, 150)");
        } else {
            this.element_circle_0.style.setProperty("stroke", this._previous_border_0);
            this.element_circle_1.style.setProperty("stroke", this._previous_border_1);
            this._previous_border_0 = '';
            this._previous_border_1 = '';
        }
        this._selected = new_selected;
    }
    prevent_movement() { this._movement_allowed = false; }
    allow_movement() { this._movement_allowed = true; }
    

    set_position(new_x:number, new_y:number) {
        let grid_width = 2000;
        let grid_height = 1000;

        //fix grid length and height for this
        this.cur_x = snap_to_grid(clamp(new_x, (this.width / 2), grid_width - (this.width / 2)), 20, (this.width / 2));
        this.cur_y = snap_to_grid(clamp(new_y, (this.width / 2), grid_height - (this.width / 2)), 20, (this.width / 2));

        this.element_parent.setAttribute("transform", "translate(" + this.cur_x + "," + this.cur_y + ")");
        
        // clamps value, returns x value clamped between the lo and hi
        function clamp(x:number, lo:number, hi:number) { 
            return x < lo ? lo : x > hi ? hi : x 
        }
        // snaps value to closest factor of unit_length if it's lower or higher (closest square)
        function snap_to_grid(x:number, unit_length:number, width:number) {
            var remainder = x % unit_length;
            if(width % 20 == 0) { //token is even width
                if(remainder < unit_length/2) {
                    return x - remainder;
                }else {
                    return x - remainder + unit_length;
                }
            }else { //token is odd width
                if(remainder + unit_length/2 < unit_length/2) { //unit_length/2 accounts for odd width
                    return x - remainder - unit_length/2;
                }else {
                    return x - remainder + unit_length - unit_length/2;
                } 
            }
        }
    }
    

    // drag handlers
    event_to_svg_coordinates = (event:PointerEvent, el=event.currentTarget) => {//converts event's argument coordinates to svg coordinates
        // let p = svg.createSVGPoint(); //deprecated
        let p = new DOMPoint();
        p.x = event.clientX;
        p.y = event.clientY;
        p = p.matrixTransform(this.svg.getScreenCTM()!.inverse()); 
        return p;
    }
    
    start_drag = (event:PointerEvent) => { //starting dragging event handler
        if (event.button !== 0) return; //on left click
        if (!this.movement_allowed) return;
        let target:HTMLElement = event.target as HTMLElement;
        if (target == null) { return; }
        if (target.parentElement!.id != this.unique_id && this.selected == false) return; //check unique id matches that of element on cursor (needed because handler bound to gameboard), and will drag anyway if its selected

        let {x, y} = this.event_to_svg_coordinates(event);
        this.dragging_d = {dx: this.cur_x - x, dy: this.cur_y - y}; 
        this.dragging_s = {sx: x, sy: y};
        
        this.element_parent.classList.add('dragging');
        this.element_parent.setPointerCapture(event.pointerId);

    }

    move_drag = (event:PointerEvent) => { //dragging on mouse move event handler
        if (!this.dragging_d || !this.dragging_s) return;
        if (!this.movement_allowed) return;

        let {x, y} = this.event_to_svg_coordinates(event);
        let zoom:number = this.svg.style.zoom != "" ? Number(this.svg.style.zoom.slice(0, -1))/100 : 1; //catches empty zoom
        let zoom_adjustment_x:number = (x - this.dragging_s.sx) - (x - this.dragging_s.sx)/zoom; //calculate difference between non-zoomed starting pos and zoomed starting pos.
        let zoom_adjustment_y:number = (y - this.dragging_s.sy) - (y - this.dragging_s.sy)/zoom;

        this.set_position(x + this.dragging_d.dx - zoom_adjustment_x, y + this.dragging_d.dy - zoom_adjustment_y);
    }

    end_drag = (_event:PointerEvent) => { //ending drag event handler
        this.dragging_d = null;
        this.dragging_s = null;
        this.element_parent.classList.remove('dragging');
    }
    

    // set draggable
    make_draggable() {
        console.log("adding dragability to " + this.name);
        
        // binding handlers to board so multi-select can have control
        this.svg.addEventListener('pointerdown', this.start_drag);
        this.svg.addEventListener('pointerup', this.end_drag);
        this.svg.addEventListener('pointercancel', this.end_drag);
        this.svg.addEventListener('pointermove', this.move_drag);
        this.svg.addEventListener('touchstart', (event) => event.preventDefault());
    }

    remove_draggable() { 
        console.log("removing draggability from " + this.name);
        this.svg.removeEventListener('pointerdown', this.start_drag);
        this.svg.removeEventListener('pointerup', this.end_drag);
        this.svg.removeEventListener('pointercancel', this.end_drag);
        this.svg.removeEventListener('pointermove', this.move_drag);
        this.svg.removeEventListener('touchstart', (event) => event.preventDefault());
        
    }
    

    // style
    set_border(inner_color:number[], outer_color:number[]) {
        console.log("setting border");
        //var woot = window.getComputedStyle(this._element_circle_0).stroke; 
        // setting width
        let stroke_width:number = this.width/7;
        this.element_circle_0.style.setProperty("stroke-width", stroke_width + "px");
        this.element_circle_1.style.setProperty("stroke-width", Number(stroke_width / 3) + "px");
        // setting color
        this.element_circle_0.style.setProperty("stroke", "rgb(" + outer_color[0] + "," + outer_color[1] + "," + outer_color[2] + ")");
        this.element_circle_1.style.setProperty("stroke", "rgb(" + inner_color[0] + "," + inner_color[1] + "," + inner_color[2] + ")");

    }
}