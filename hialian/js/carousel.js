// 这个变量表示当前是第几张图片
var currentImg=0;
// img表示获取里面的图片，他是一个数组
var img=document.getElementById('img_box').getElementsByTagName('img');
// img_num是下面那几个点，也是一个数组
var img_num=document.getElementById('img_num').getElementsByTagName('li');
// showImg作用是用来显示某一张图片num就代表显示的那种图片，比如showImg(0)这就代表显示第一张图片的意思
function showImg(num){
	currentImg=num;
	for (var i = 0; i < img.length; i++) {
		if(num==i){
			img[i].style.display="block";
			img_num[i].style.backgroundImage="url(img/26.png)";
		}else{
			img[i].style.display="none";
			img_num[i].style.backgroundImage="url(img/25.png)";
		}
	}
}
// 左翻页
function changeLeft(){
	if(currentImg==0){
		currentImg=img.length;
	}
	showImg(currentImg-1);
}
// 右翻页
function changeRight(){
	if(currentImg==(img.length-1)){
		currentImg=-1;
	}
	showImg(currentImg+1);

}

// 设置定时
var time=setInterval(changeRight,2000)
// 停止定时
function stopBanner(){
	clearInterval(time);
}
// 开始定时
function startBanner(){
	time=setInterval(changeRight,2000)
}