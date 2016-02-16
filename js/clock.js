function startTime()
{
var today=new Date();
var h=today.getHours();
var m=today.getMinutes();
var s=today.getSeconds();
// add a zero in front of numbers<10
m=checkTime(m);
s=checkTime(s);
if (h > 12)
	{
	h = h-12;
	}
if (h == 0)
	{
	h = 12;
	}
document.getElementById('time').innerHTML=h+":"+m;
t=setTimeout(function(){startTime()},500);

var year=today.getYear()
if (year < 1000)
	year+=1900

var day=today.getDay()
var month=today.getMonth()
var daym=today.getDate()
if (daym<10)
daym="0"+daym
var dayarray=new Array("Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday")
var montharray=new Array("Jan.","Feb.","Mar.","Apr.","May","June","July","Aug.","Sep.","Oct.","Nov.","Dec.")
document.getElementById('date').innerHTML=dayarray[day]+", "+montharray[month]+" "+daym;
}

function checkTime(i)
{
if (i<10)
  {
  i="0" + i;
  }
return i;
}
