function clock()
{
    var date=new Date()
    var hh=date.getHours()
    var mm=date.getMinutes()
    var ss=date.getSeconds()
    var dd=date.getDate()
    var mo=date.getMonth()
    var yy=date.getFullYear()
    var day=date.getDay()
    var am_pm="AM"
    if(hh>=12)
    {
        am_pm="PM"
        if(hh>=13)
        {
            hh-=12;
        }
    }
    if(hh==0)
    {
        hh=12;
    }
    if(mo==0)
    {
        mo="jan"
    }
    else if(mo==1)
    {
        mo="feb"
    }
    else if(mo==2)
    {
        mo="mar"
    } 
    else if(mo==3)
    {
        mo="apr"
    }
    else if(mo==4)
    {
        mo="may"
    }
    else if(mo==5)
    {
        mo="jun"
    }
    else if(mo==6)
    {
        mo="july"
    }
    else if(mo==7)
    {
        mo="aug"
    }
    else if(mo==8)
    {
        mo="sep"
    }
    else if(mo==9)
    {
        mo="oct"
    }
    else if(mo==10)
    {
        mo="nov"
    }
    else (mo==11)
    {
        mo="dec"
    }
    var fullTime=hh+":"+mm+":"+ss+":"+am_pm
    var fullDate=dd+"/"+mo+"/"+yy
    switch(day)
    {
        case 0:
            day="Sunday"
            document.getElementById("a").style.backgroundImage="URL(./churchgod.jpg)"
            break;
            case 1:
            day="Monday"
            document.getElementById("a").style.backgroundImage="URL(./shivagod.jpg)"
            break;
            case 2:
            day="Tuesday"
            document.getElementById("a").style.backgroundImage="URL(./humangod.jpg)"
            break;
            case 3:
            day="Wednsday"
            document.getElementById("a").style.backgroundImage="URL(./ayyappagod.jpg)"
            break;
            case 4:
            day="Thursday"
            document.getElementById("a").style.backgroundImage="URL(./saibabagod.jpg)"
            break;
            case 5:
            day="Friday"
            document.getElementById("a").style.backgroundImage="URL(./laxmigod.jpg)"
            break;
            case 6:
            day="Saturday"
            document.getElementById("a").style.backgroundImage="URL(./venkateswaragod.jpg)"
            break;
    }
    document.getElementById("Date").innerHTML=fullDate
    document.getElementById("Time").innerHTML=fullTime
    document.getElementById("Day").innerHTML=day 
    var refreshclk=setTimeout(function(){clock()},1000)
}
function greet()
{
    var greettime=Date()
    var Time=greettime.greetTime()
    if(time>=6&&time<12)
    {
        document.getElementById("textgreet").innerHTML="Good Morning"
    }
    else if(time>=12&&time<=16)
    {
        document.getElementById("textgreet").innerHTML="Good Afternoon"
    }
    else{
        document.getElementById("textgreet").innerHTML="Good Evening"
    }
   document.getElementById("greet").removeAttribute("style") 
}
/*greet()*/var greettimeout=setTimeout(greet,5000)
function closetab()
{
    document.getElementById("greet").setAttribute("style","display:none")
}