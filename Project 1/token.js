console.log("token.ts class loaded");
var Token = /** @class */ (function () {
    function Token(name, element_parent, cur_x, cur_y, width, unique_id) {
        if (name === void 0) { name = '(no name given)'; }
        if (cur_x === void 0) { cur_x = 0; }
        if (cur_y === void 0) { cur_y = 0; }
        var _this = this;
        // drag handlers
        this.event_to_svg_coordinates = function (event, el) {
            if (el === void 0) { el = event.currentTarget; }
            // let p = svg.createSVGPoint(); //deprecated
            var p = new DOMPoint();
            p.x = event.clientX;
            p.y = event.clientY;
            p = p.matrixTransform(_this.svg.getScreenCTM().inverse());
            return p;
        };
        this.start_drag = function (event) {
            if (event.button !== 0)
                return; //on left click
            if (!_this.movement_allowed)
                return;
            var target = event.target;
            if (target == null) {
                return;
            }
            if (target.parentElement.id != _this.unique_id && _this.selected == false)
                return; //check unique id matches that of element on cursor (needed because handler bound to gameboard), and will drag anyway if its selected
            var _a = _this.event_to_svg_coordinates(event), x = _a.x, y = _a.y;
            _this.dragging_d = { dx: _this.cur_x - x, dy: _this.cur_y - y };
            _this.dragging_s = { sx: x, sy: y };
            _this.element_parent.classList.add('dragging');
            _this.element_parent.setPointerCapture(event.pointerId);
        };
        this.move_drag = function (event) {
            if (!_this.dragging_d || !_this.dragging_s)
                return;
            if (!_this.movement_allowed)
                return;
            var _a = _this.event_to_svg_coordinates(event), x = _a.x, y = _a.y;
            var zoom = _this.svg.style.zoom != "" ? Number(_this.svg.style.zoom.slice(0, -1)) / 100 : 1; //catches empty zoom
            var zoom_adjustment_x = (x - _this.dragging_s.sx) - (x - _this.dragging_s.sx) / zoom; //calculate difference between non-zoomed starting pos and zoomed starting pos.
            var zoom_adjustment_y = (y - _this.dragging_s.sy) - (y - _this.dragging_s.sy) / zoom;
            _this.set_position(x + _this.dragging_d.dx - zoom_adjustment_x, y + _this.dragging_d.dy - zoom_adjustment_y);
        };
        this.end_drag = function (_event) {
            _this.dragging_d = null;
            _this.dragging_s = null;
            _this.element_parent.classList.remove('dragging');
        };
        //uses _var naming scheme to prevent idefinite recursive calls
        this._name = name;
        this._element_parent = element_parent;
        this._element_circle_0 = element_parent.children[0]; //first circle
        this._element_circle_1 = element_parent.children[1]; //second circle
        this._svg = element_parent.parentNode;
        this._cur_x = cur_x;
        this._cur_y = cur_y;
        if (width) {
            this._width = width;
            this.element_circle_0.setAttribute("r", Number(this.width / 2) + "px");
            this.element_circle_1.setAttribute("r", Number(this.width / 2) + "px");
        }
        else {
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
        this._is_draggable = false;
        //token game stats
        this._health = 10;
        this._mana = 5;
        this._armor = 0;
        this._speed = 0;
    }
    Object.defineProperty(Token.prototype, "svg", {
        get: function () { return this._svg; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Token.prototype, "element_parent", {
        get: function () { return this._element_parent; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Token.prototype, "element_circle_0", {
        get: function () { return this._element_circle_0; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Token.prototype, "element_circle_1", {
        get: function () { return this._element_circle_1; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Token.prototype, "width", {
        get: function () { return this._width; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Token.prototype, "cur_x", {
        get: function () { return this._cur_x; },
        set: function (new_x) { this._cur_x = new_x; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Token.prototype, "cur_y", {
        get: function () { return this._cur_y; },
        set: function (new_y) { this._cur_y = new_y; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Token.prototype, "selected", {
        get: function () { return this._selected; },
        set: function (new_selected) {
            if (new_selected == true && this.selected == false) {
                this._previous_border_0 = this.element_circle_0.style.getPropertyValue("stroke");
                this._previous_border_1 = this.element_circle_1.style.getPropertyValue("stroke");
                this.element_circle_0.style.setProperty("stroke", "rgb(50, 50, 177)");
                this.element_circle_1.style.setProperty("stroke", "rgb(35, 35, 150)");
            }
            else {
                this.element_circle_0.style.setProperty("stroke", this._previous_border_0);
                this.element_circle_1.style.setProperty("stroke", this._previous_border_1);
                this._previous_border_0 = '';
                this._previous_border_1 = '';
            }
            this._selected = new_selected;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Token.prototype, "unique_id", {
        get: function () { return this._unique_id; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Token.prototype, "movement_allowed", {
        get: function () { return this._movement_allowed; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Token.prototype, "is_draggable", {
        get: function () { return this._is_draggable; },
        set: function (new_is_draggable) { this._is_draggable = new_is_draggable; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Token.prototype, "name", {
        get: function () { return this._name; },
        set: function (new_name) { this._name = new_name; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Token.prototype, "health", {
        get: function () { return this._health; },
        set: function (new_health) { this._health = new_health; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Token.prototype, "mana", {
        get: function () { return this._mana; },
        set: function (new_mana) { this._mana = new_mana; },
        enumerable: false,
        configurable: true
    });
    Token.prototype.prevent_movement = function () { this._movement_allowed = false; };
    Token.prototype.allow_movement = function () { this._movement_allowed = true; };
    Token.prototype.set_position = function (new_x, new_y) {
        var grid_width = 2000;
        var grid_height = 1000;
        //fix grid length and height for this
        this.cur_x = snap_to_grid(clamp(new_x, (this.width / 2), grid_width - (this.width / 2)), 20, (this.width / 2));
        this.cur_y = snap_to_grid(clamp(new_y, (this.width / 2), grid_height - (this.width / 2)), 20, (this.width / 2));
        this.element_parent.setAttribute("transform", "translate(" + this.cur_x + "," + this.cur_y + ")");
        // clamps value, returns x value clamped between the lo and hi
        function clamp(x, lo, hi) {
            return x < lo ? lo : x > hi ? hi : x;
        }
        // snaps value to closest factor of unit_length if it's lower or higher (closest square)
        function snap_to_grid(x, unit_length, width) {
            var remainder = x % unit_length;
            if (width % 20 == 0) { //token is even width
                if (remainder < unit_length / 2) {
                    return x - remainder;
                }
                else {
                    return x - remainder + unit_length;
                }
            }
            else { //token is odd width
                if (remainder + unit_length / 2 < unit_length / 2) { //unit_length/2 accounts for odd width
                    return x - remainder - unit_length / 2;
                }
                else {
                    return x - remainder + unit_length - unit_length / 2;
                }
            }
        }
    };
    // set draggable
    Token.prototype.make_draggable = function () {
        console.log("adding draggability to " + this.name);
        this.is_draggable = true;
        // binding handlers to board so multi-select can have control
        this.svg.addEventListener('pointerdown', this.start_drag);
        this.svg.addEventListener('pointerup', this.end_drag);
        this.svg.addEventListener('pointercancel', this.end_drag);
        this.svg.addEventListener('pointermove', this.move_drag);
        this.svg.addEventListener('touchstart', function (event) { return event.preventDefault(); });
    };
    Token.prototype.remove_draggable = function () {
        console.log("removing draggability from " + this.name);
        this.is_draggable = false;
        this.svg.removeEventListener('pointerdown', this.start_drag);
        this.svg.removeEventListener('pointerup', this.end_drag);
        this.svg.removeEventListener('pointercancel', this.end_drag);
        this.svg.removeEventListener('pointermove', this.move_drag);
        this.svg.removeEventListener('touchstart', function (event) { return event.preventDefault(); });
    };
    // style
    Token.prototype.set_border = function (inner_color, outer_color) {
        console.log("setting border");
        // setting width
        var stroke_width = 4;
        this.element_circle_0.style.setProperty("stroke-width", stroke_width + "px");
        this.element_circle_1.style.setProperty("stroke-width", stroke_width / 3 + "px");
        // setting color
        this.element_circle_0.style.setProperty("stroke", "rgb(" + outer_color[0] + "," + outer_color[1] + "," + outer_color[2] + ")");
        this.element_circle_1.style.setProperty("stroke", "rgb(" + inner_color[0] + "," + inner_color[1] + "," + inner_color[2] + ")");
    };
    return Token;
}());
export { Token };
