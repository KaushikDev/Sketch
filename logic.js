
var canvas = document.getElementById("canvas");
	var ctx = canvas.getContext("2d");
	
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight * 0.80;
	
	var link = document.getElementById("save");
	
	var moveX = 1;
	var moveY = 1;
	var currentX;
	var currentY;
	var flagMouseDown = false;
	var flagTouchStart = false;
	var brushColor = "white";
	var brushSize = 2;
	
		function draw(currentX, currentY){
			
			ctx.lineWidth = brushSize;
			ctx.lineTo(currentX, currentY);
			ctx.strokeStyle=brushColor;
			ctx.stroke();
			}
		
		canvas.addEventListener("mouseup", mouseUpHandler, false);
		canvas.addEventListener("mousemove", mouseMoveHandler, false);
		canvas.addEventListener("mousedown", mouseDownHandler, false);
		canvas.addEventListener("touchstart", touchStartHandler, {passive: false});
		canvas.addEventListener("touchmove", touchMoveHandler, {passive: false});
		canvas.addEventListener("touchend", touchEndHandler, false);
		
		function mouseDownHandler(e) {
			
			flagMouseDown = true;
			ctx.beginPath();
			
        }
		
		function mouseMoveHandler(e) {
			if(flagMouseDown){
			currentX = e.clientX - canvas.offsetLeft;
			currentY = e.clientY - canvas.offsetTop;
			draw(currentX, currentY);
			}
		}
		
		function mouseUpHandler(e) {
            flagMouseDown = false;
			ctx.closePath();
        }
		
		function touchStartHandler(e) {
            flagTouchStart = true;
			ctx.beginPath();
			
        }
		
		function touchMoveHandler(e) {
            if(flagTouchStart){
			currentX = e.touches[0].clientX - canvas.offsetLeft;
			currentY = e.touches[0].clientY  - canvas.offsetTop;
			draw(currentX, currentY);
			}
        }
		
		function touchEndHandler(e) {
            flagTouchStart = false;
			ctx.closePath();
        }
		
		function colorPicker(color){
			brushColor=color;
			console.log("Brush Color is : "+color);
		}
		
		function brushPicker(size){
			brushSize=size;
			console.log("Brush Size is : "+size);
		}
		
		function clear(){
			
			//ctx.clearRect(0,0,canvas.width,canvas.height);
			
		}
		
		function save(){
			
			link.href = canvas.toDataURL();
			link.download = "KaushikCodeArt_image.png";
			
			
		}