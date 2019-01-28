let box = 600
let sWidth = 120
let mWidth = 100
let sHeight = box-sWidth
let mHeight = (box-2*sWidth)-mWidth
let hHeight = box - 2*sWidth - 2*mWidth

function setup(){
  createCanvas(box,box);
}

function draw(){
  background(249, 146, 132);
	fill(129, 234, 137)
	rect(sWidth, sWidth, box-2*sWidth, box-2*sWidth)
	fill(59, 247, 237)
	rect(sWidth+mWidth, sWidth+mWidth, hHeight, hHeight)
	noStroke(255,255,255);
	var s = map(second(), 0, 60, 0, (box-sWidth)*4);
	var m = map(minute(), 0, 60, 0, (box-2*sWidth-mWidth)*4);
	var h = map(hour(), 0, 24, 0, box - 2*sWidth- 2*mWidth);
	
	sh = s % (box-sWidth)
	if (s < box-sWidth){
		s1 = sh
		s2 = 0
		s3 = 0
		s4 = 0
	}
	else if (s < (box-sWidth) * 2){
		s1 = box-sWidth
		s2 = sh
		s3 = 0
		s4 = 0
	}
	else if (s < (box-sWidth) * 3){
		s1 = box-sWidth
		s2 = box-sWidth
		s3 = sh
		s4 = 0
	}
	else if (s < (box-sWidth) * 4){
		s1 = box-sWidth
		s2 = box-sWidth
		s3 = box-sWidth
		s4 = sh
	}
	
	fill(239, 70, 47)
	rect(0, box - s1, sWidth, s1)
	rect(0, 0, s2, sWidth)
	rect(box-sWidth, 0, sWidth, s3)
	rect(box-s4, box-sWidth, s4, sWidth)
	
	mMaxHeight = (box-2*sWidth-mWidth)
	mh = m % mMaxHeight
	if (m < mMaxHeight){
		m1 = mh
		m2 = 0
		m3 = 0
		m4 = 0
	}
	else if (m < mMaxHeight * 2){
		m1 = mMaxHeight
		m2 = mh
		m3 = 0
		m4 = 0
	}
	else if (m < mMaxHeight * 3){
		m1 = mMaxHeight
		m2 = mMaxHeight
		m3 = mh
		m4 = 0
	}
	else if (m < mMaxHeight * 4){
		m1 = mMaxHeight
		m2 = mMaxHeight
		m3 = mMaxHeight
		m4 = mh
	}
	fill(13, 145, 24)
	rect(sWidth, box-sWidth-m1, mWidth, m1)
	rect(sWidth, sWidth, m2, mWidth)
	rect(box-sWidth-mWidth, sWidth, mWidth, m3)
	rect(box-sWidth-m4, box-sWidth-mWidth, m4, mWidth)
	
	fill(0,0,255)
	rect(sWidth+mWidth, box-sWidth-mWidth-h, hHeight, h)
	
	
}