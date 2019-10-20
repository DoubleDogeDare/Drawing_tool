let angle = 0
let paint_mode = false
let paint_size = 50
let brush_type = 'line'
let opacity = 245
let r = 0
let g = 0
let b = 0
let framer = 60
let ermode = false

function setup() {

	frameRate(framer)

	 let canvas = createCanvas(900, 700)
	 	canvas.parent("p5")
		rect(0, 0, width, height)
		angleMode(DEGREES)
		noStroke()
	fill(0, 255, 0, opacity)

}
//brush functions
function candvc() {
	rect(0, 0, width, height)
	angleMode(DEGREES)
	noStroke()
}

function default_brush() {
	brush_type = 'default'
}


function square_brush() {
	brush_type = 'square'
}

function nova_brush() {
	brush_type = 'nova'
}

function bloch_brush() {
	brush_type = 'bloch'
}

function line_brush() {
	brush_type = 'line'
}

function tri_brush() {
	brush_type = 'tri'
}

function tre_brush() {
	brush_type = 'tre'
}

//DRAW
function draw() {


	if (paint_mode == true) {

		fill(r, g, b, opacity)

		if (mouseX < width && mouseX > 0 && mouseY < height && mouseY > 0) {
				//brush type 
				if (brush_type == 'default') {
				ellipse(mouseX, mouseY, paint_size, paint_size)
			}
			if (brush_type == 'square') {
				rect(mouseX, mouseY, paint_size, paint_size)
			}

			if (brush_type == 'nova') {
				ellipse(mouseX, mouseY, random(0,paint_size), random(0,paint_size))
				function mousepressed() {
					framer = 15
				}
			}

			if (brush_type == 'bloch') {
				ellipse( mouseX + random(2, paint_size), mouseY, random(0, paint_size/2))
			}

			if (brush_type == 'line') {
				push()
				stroke(r, g, b, opacity)
				strokeWeight(paint_size)
				line(mouseX, mouseY, pmouseX, pmouseY)
				pop()
			}

			if (brush_type == 'tri') {
				push()
				stroke(r, g, b, opacity)
				strokeWeight(paint_size/10)
				line(mouseX, mouseY, pmouseX + paint_size, pmouseY)
				line(mouseX, mouseY, pmouseX , pmouseY + paint_size)
				line(mouseX, mouseY, pmouseX, pmouseY)
				pop()
			}

			if (brush_type == 'tre') {
				push()
				stroke(r, g, b, opacity)
				strokeWeight(paint_size)
				triangle(mouseX - paint_size/10, mouseY - paint_size/10, mouseX - paint_size/5, mouseY - paint_size/5, mouseX, mouseY - paint_size/10)
				pop()
			}
		}

	}




	push()
	noFill()
	stroke(0)
	rect(0, 0, width, height)
	pop()

	if (paint_size > 300) {
		paint_size = 300
	}

	if (paint_size < 3) {
		paint_size = 3
	}
}




//mouse functions
function mousePressed() {
 paint_mode = true

}

function mouseReleased() {
paint_mode = false

}

function mouseClicked() {

}





//size

function smallpaint() {
	paint_size = paint_size - 10
}

function bigpaint() {
	paint_size = paint_size + 10
}



//key bindings
function keyPressed() { 
	if (keyCode === 221) {
		paint_size = paint_size + 10
	}
	if (keyCode === 219) {
		paint_size = paint_size - 10
	}
	if  (keyCode === 186) {
		opacity = opacity - 10
	}
	if (keyCode === 222) {
		opacity = opacity + 10
	}
	if (opacity < 0) {
		opacity = 10
	}
	if (opacity > 255) {
	opacity = 255
	}
}






//opacity

function moreopacity() {
opacity = opacity + 10

print(opacity)
}

function lessopacity() {
opacity = opacity - 10

print(opacity)
}


if (opacity > 255) {
	opacity = 255
}

if (opacity < 0) {
	opacity = 10
}





//colors

function colorblue() {
	r = 0
	g = 0
	b = 255
}

function colorblack() {
	r = 0
	g = 0
	b = 0
}

function colorred() {
	r = 255
	g = 0
	b = 0
}

function colorlightblue() {
	r = 123
	g = 209 
	b = 254
}

function colorhotpink() {
	r = 255
	g = 0
	b = 255
}

function coloryellow() {
	r = 255
	g = 255
	b = 0
}

function colororange() {
	r = 255
	g = 132
	b = 0
}

function colorgreen() {
	r = 0
	g = 255
	b = 0
}

function colordarkgreen() {
	r = 31
	g = 102
	b = 0
}

function coloraqua() {
	r = 0
	g = 255
	b = 204
}

function colorlightorange() {
	r = 255
	g = 180
	b = 0
}

function color50grey() {
	r = 127
	g = 127
	b = 127
}

function colormorewhite() {
	r = 185
	g = 185
	b = 185
}

function colormoreblack() {
	r = 61
	g = 61
	b = 61
}

function colorrandom() {
	r = random(0, 255)
	g = random(0, 255)
	b = random(0, 255)
}

function undoe() {
	r = 255
	g = 255
	b = 255
}



//colorshift buttons

function redshiftplus() {
	r = r + 25
}
function redshiftminus() {
	r = r - 25
}
if (r > 255) {
	r = 255
}
if (r < 0) {
	r = 0
}
function greenshiftplus() {
	g = g + 25
}

function greenshiftminus() {
	g = g - 25
}

if (g > 255) {
	g = 255
}

if (g < 0) {
	g = 0
}

function blueshiftplus() {
	b = b + 25
}

function blueshiftminus() {
	b = b - 25
}

if (b > 255) {
	b = 255
}

if (b < 0) {
	b = 0
}