function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
var y = prompt('Nhập một số!')
var x=getRandomInt(1, 10)
while(x!=y){
     y = prompt('Sai rồi! Nhập lại nhé!')
}
alert("Binggo!!!Bạn đã chọn đúng số may mắn!")