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
	print('circle brush is selected')

}


function square_brush() {
	brush_type = 'square'
	print('sqaure brush is selected')
}

function nova_brush() {
	brush_type = 'nova'
	print('nova brush is selected')
}

function bloch_brush() {
	brush_type = 'bloch'
	print('bubble brush is selected')
}

function line_brush() {
	brush_type = 'line'
print('line brush is selected')
}

function tri_brush() {
	brush_type = 'tri'
	print('spine brush is selected')
}

function tre_brush() {
	brush_type = 'tre'
	print('triangle brush is selected')
}

function abl_brush() {
	brush_type = 'abl'
	print('pokey brush is selected')
}

function pen_brush() {
	brush_type = "pen"
	print('angle brush is selected')
}

function star_brush() {
	brush_type = 'star'
	print('star brush is selected')
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
				triangle(mouseX - paint_size/20, mouseY - paint_size/random(3,5), mouseX - paint_size/10, mouseY - paint_size/20, mouseX, mouseY - paint_size/20)
				pop()

				
			}

			if (brush_type == 'abl') {
				
				push()
				
				stroke(r, g, b, opacity)
				strokeWeight(paint_size/20)
				line(mouseX, mouseY, mouseX + random(-paint_size, paint_size), mouseY - random(1, paint_size))
				pop()

				
			}

			if (brush_type == 'pen') {
				push()
				
				framer = 60
				stroke(r, g, b, opacity)
				strokeWeight(paint_size/10)
				line(mouseX, mouseY, pmouseX + paint_size/2, pmouseY - paint_size )
				pop()
			}

			if (brush_type == 'star') {
				push()
				fill(r, g, b)
				translate(random(1, paint_size), random(1, paint_size))
				quad(mouseX, mouseY + paint_size/10,   mouseX + paint_size/10, mouseY,   mouseX, mouseY - paint_size/10,  mouseX - paint_size/10, mouseY)
				translate(random(1, paint_size), random(1, paint_size))
				quad(mouseX, mouseY + paint_size/10,   mouseX + paint_size/10, mouseY,   mouseX, mouseY - paint_size/10,  mouseX - paint_size/10, mouseY)
				translate(random(1, paint_size), random(1, paint_size))
				quad(mouseX, mouseY - paint_size/10,   mouseX - paint_size/10, mouseY,   mouseX, mouseY + paint_size/10,  mouseX + paint_size/10, mouseY)
				translate(random(1, paint_size), random(1, paint_size))
				quad(mouseX, mouseY - paint_size/10,   mouseX - paint_size/10, mouseY,   mouseX, mouseY + paint_size/10,  mouseX + paint_size/10, mouseY)
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

	print('brush size is ' + paint_size)
}

function bigpaint() {
	paint_size = paint_size + 10

	print('brush size is ' + paint_size)
}



//key bindings
function keyPressed() { 
	if (keyCode === 221) {
		paint_size = paint_size + 10
		print('brush size is ' + paint_size)
	}
	if (keyCode === 219) {
		paint_size = paint_size - 10
		print('brush size is ' + paint_size)
	}
	if  (keyCode === 186) {
		opacity = opacity - 10
		print('opacity is ' + opacity)

	}
	if (keyCode === 222) {
		opacity = opacity + 10
		print('opacity is ' + opacity)

	}
	if (opacity < 0) {
		opacity = 10
	}
	if (opacity > 255) {
	opacity = 255
	}
	if (keyCode === 70) {
		let fs = fullscreen();
    fullscreen(!fs);
	}
	if  (keyCode === 69) {
		r = 255
		g = 255
		b = 255
	}

}






//opacity

function moreopacity() {
opacity = opacity + 10

print('opacity is ' + opacity)
}

function lessopacity() {
opacity = opacity - 10

print('opacity is ' + opacity)
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

	print('color is blue')
}

function colorblack() {
	r = 0
	g = 0
	b = 0

	print('color is black')
}

function colorred() {
	r = 255
	g = 0
	b = 0

	print('color is red')
}

function colorlightblue() {
	r = 123
	g = 209 
	b = 254

	print('color is light blue')
}

function colorhotpink() {
	r = 255
	g = 0
	b = 255

	print('color is hot pink')
}

function coloryellow() {
	r = 255
	g = 255
	b = 0

	print('color is yellow')
}

function colororange() {
	r = 255
	g = 132
	b = 0

	print('color is orange')
}

function colorgreen() {
	r = 0
	g = 255
	b = 0


	print('color is green')
}

function colordarkgreen() {
	r = 31
	g = 102
	b = 0

	print('color is dark green')
}

function coloraqua() {
	r = 0
	g = 255
	b = 204

	print('color is aqua')
}

function colorlightorange() {
	r = 255
	g = 180
	b = 0
	print('color is light orange')
}

function color50grey() {
	r = 127
	g = 127
	b = 127

	print('color is 50% grey')
}

function colormorewhite() {
	r = 185
	g = 185
	b = 185

	print ('color is 25% grey')
}

function colormoreblack() {
	r = 61
	g = 61
	b = 61

	print('color is 80% black')
}

function colorrandom() {
	r = random(0, 255)
	g = random(0, 255)
	b = random(0, 255)

	print('your random color is R = ' + r + ' G = ' + g + ' B = ' + b)
}

function undoe() {
	r = 255
	g = 255
	b = 255

	print('color is eraser/white')
}



//colorshift buttons

function redshiftplus() {
	r = r + 25

	print('added red')
	print('red is ' + r)
}
function redshiftminus() {
	r = r - 25

	print('subtracted red')
	print('red is ' + r)
}
if (r > 255) {
	r = 255
}
if (r < 0) {
	r = 0
}
function greenshiftplus() {
	g = g + 25

	print('added green')
	print('green is ' + g)
}

function greenshiftminus() {
	g = g - 25

	print('subtracted green')
	print('green is ' + g)
}

if (g > 255) {
	g = 255
}

if (g < 0) {
	g = 0
}

function blueshiftplus() {
	b = b + 25

	print('added blue')
	print('blue is ' + b)
}

function blueshiftminus() {
	b = b - 25

	print('subtracted blue')
	print('blue is ' + b)
}

if (b > 255) {
	b = 255
}

if (b < 0) {
	b = 0
}