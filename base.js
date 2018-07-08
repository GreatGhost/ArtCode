//常用
function setStyle(element){
	var ele=document.querySelector(element)[0];
}
setStyle.prototype.fontSize=function(font){
	this.fontSize=font;
	return this;
}
setStyle.prototype.color=function(color){
	this.color=color;
	return this;
}
