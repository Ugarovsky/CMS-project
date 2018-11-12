var car = {
time:undefined,
line:undefined, 
}

var system_x = 1200;
var y_line_one = 80;
var y_line_two = 106;
var y_line_tree = 121;
var y_line_four = 132;

function timer(hour_now,minute_now,second_now,hour,minute,second){
var timenow = hour_now*3600 + minute_now*60 + second_now;
var timeout = hour*3600 + minute*60 + second;
var time_in_video = timeout - timenow;
if(time_in_video <= 0){
    alert("Проверьте вводимые данные");
    return false;
1}
else{
   return time_in_video * 100; //машина находится в виде (измеряется в 0.1 секудах);
}
}

function line_one() {
    var arr = [];
hour_now = prompt("Вермя начала движения (в часах)", " ");
minute_now = prompt("Время начала движения в минутах","");
second_now = prompt("Время начала движения (в секундах", "");
hour = prompt("Вермя окончания движения (в часах)", " ");
minute= prompt("Время окончания движения в минутах","");
second = prompt("Время окончания движения (в секундах", "");
var time_in_video = timer (hour_now,minute_now,second_now,hour,minute,second);
  //расчет производиться каждые 0.1 секунду (сколько расчетов успеет произойти);
var speed = system_x/time_in_video*10;
var steps = system_x/speed;
    var position_x = speed;
    var virst = speed;
for(;steps >= 1; steps--){
    arr.push(position_x);
    position_x += virst ;
}
console.log("x ЗА КАЖДУЮ 0.1 СЕКУНДУ ВРЕМЕНИ");
console.log(arr);
console.log("Координаты по y");
console.log(y_line_one);
}




function line_two() {
    var arr = [];
hour_now = prompt("Вермя начала движения (в часах)", " ");
minute_now = prompt("Время начала движения в минутах)","");
second_now = prompt("Время начала движения (в секундах)", "");
hour = prompt("Вермя окончания движения (в часах)", " ");
minute= prompt("Время окончания движения в минутах)","");
second = prompt("Время окончания движения (в секундах)", "");
var time_in_video = timer (hour_now,minute_now,second_now,hour,minute,second);
  //расчет производиться каждые 0.1 секунду (сколько расчетов успеет произойти);
var speed = system_x/time_in_video*10;
var steps = system_x/speed;
    var position_x = speed;
    var virst = speed;
for(;steps >= 1; steps--){
    arr.push(position_x);
    position_x += virst ;
}
console.log("x ЗА КАЖДУЮ 0.1 СЕКУНДУ ВРЕМЕНИ");
console.log(arr);
console.log("Координаты по y");
console.log(y_line_two);

}


function line_tree() {
    var arr = [];
hour_now = prompt("Вермя начала движения (в часах)", " ");
minute_now = prompt("Время начала движения в минутах","");
second_now = prompt("Время начала движения (в секундах", "");
hour = prompt("Вермя окончания движения (в часах)", " ");
minute= prompt("Время окончания движения в минутах)"," ");
second = prompt("Время окончания движения (в секундах)", " ");
var time_in_video = timer (hour_now,minute_now,second_now,hour,minute,second);
  //расчет производиться каждые 0.1 секунду (сколько расчетов успеет произойти);
var speed = system_x/time_in_video*10;
var steps = system_x/speed;
    var position_x = speed;
    var virst = speed;
for(;steps >= 1; steps--){
    arr.unshift(position_x);
    position_x += virst ;
}
console.log("x ЗА КАЖДУЮ 0.1 СЕКУНДУ ВРЕМЕНИ");
console.log(arr);
console.log("Координаты по y");
console.log(y_line_tree);
}



function line_four() {
    var arr = [];
hour_now = prompt("Вермя начала движения (в часах)", " ");
minute_now = prompt("Время начала движения в минутах","");
second_now = prompt("Время начала движения (в секундах", "");
hour = prompt("Вермя окончания движения (в часах)", " ");
minute= prompt("Время окончания движения в минутах","");
second = prompt("Время окончания движения (в секундах", "");
var time_in_video = timer (hour_now,minute_now,second_now,hour,minute,second);
  //расчет производиться каждые 0.1 секунду (сколько расчетов успеет произойти);
var speed = system_x/time_in_video*10;
var steps = system_x/speed;
    var position_x = speed;
    var virst = speed;
for(;steps >= 1; steps--){
    arr.unshift(position_x);
    position_x += virst ;
}
console.log("x ЗА КАЖДУЮ 0.1 СЕКУНДУ ВРЕМЕНИ");
console.log(arr);
console.log("Координаты по y");
c
йonsole.log(y_line_four);
}








