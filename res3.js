var firstname1="";
var cit="";
var loca1="";
var xd="";
var hs1="";
var fcn="";
var xdx="";
var T="";
var T22="";
var xdx1="";
function myFunction() {
    var x =document.getElementById("nameval2").value;
    var x1 =document.getElementById("nameval3");
    x1.value=" ";
    sessionStorage.setItem("firstname",x)
    firstname1 = sessionStorage.getItem("firstname")
    document.getElementById("nameval1").innerHTML=firstname1
}
function myFunction1()
{
    var y = document.getElementById("nameval3").value;
    sessionStorage.setItem("lastname",y)
    let lasstname1 = sessionStorage.getItem("lastname")
    document.getElementById("nameval1").innerHTML=firstname1+" "+lasstname1;
}
function funcon1()
{
    var c1 = document.getElementById("con11")
    sessionStorage.setItem("email",c1.value);
    var email1 = sessionStorage.getItem("email")
    document.getElementById("con1").innerHTML="• " +" "+email1;
}
function funcon2()
{
    var c2 = document.getElementById("con22")
    sessionStorage.setItem("phone",c2.value);
    var phone1 = sessionStorage.getItem("phone")
    document.getElementById("con2").innerHTML="• " +" "+phone1;
}
function funcon3()
{
    var c3 = document.getElementById("con33")
    sessionStorage.setItem("loca",c3.value);
    loca1 = sessionStorage.getItem("loca")
    document.getElementById("con3").innerHTML="• " +" "+loca1;
}
function funcon34()
{
    var c4 = document.getElementById("con34")
    sessionStorage.setItem("local",c4.value);
    var loca2 = sessionStorage.getItem("local")
    document.getElementById("con3").innerHTML="• " +" "+loca1+", "+loca2;
}
function funcareer()
{
    var x = document.getElementById("careerobj2").textContent;
    sessionStorage.setItem("job",x)
    let job1 = sessionStorage.getItem("job");
    let job111 = job1[0].toLocaleUpperCase()+job1.slice(1);
    document.getElementById("careerobj1").innerHTML =" "+job111; 
}

function mylan1()
{
    var x = document.getElementById("inplan1").value;
    sessionStorage.setItem("lan",x)
    let lan1 = sessionStorage.getItem("lan");
    let lan11 = lan1[0].toLocaleUpperCase()+lan1.slice(1);
    document.getElementById("lan1").innerHTML ="• "+" "+lan11; 
}
function mylan2()
{
    var x = document.getElementById("inplan2").value;
    sessionStorage.setItem("lan",x)
    let lan2 = sessionStorage.getItem("lan");
    let lan22 = lan2[0].toLocaleUpperCase()+lan2.slice(1);
    document.getElementById("lan2").innerHTML ="• "+" "+lan22; 
}
function mylan3()
{
    var x = document.getElementById("inplan3").value;
    sessionStorage.setItem("lan",x)
    let lan3 = sessionStorage.getItem("lan");
    let lan33 = lan3[0].toLocaleUpperCase()+lan3.slice(1);
    document.getElementById("lan3").innerHTML ="• "+" "+lan33; 
}
function addskl1()
{
    var s = document.getElementById("sklinp1").value;
    // sessionStorage.setItem("skl",x)
    // let skll3 = sessionStorage.getItem("skl");
    ss5 = s[0].toLocaleUpperCase()+s.slice(1);
    document.getElementById("skl1").innerHTML ="• "+" "+ss5;
}
function addskl2()
{
    var s1 = document.getElementById("sklinp2").value;
    ss4 = s1[0].toLocaleUpperCase()+s1.slice(1);
    document.getElementById("skl2").innerHTML ="• "+" "+ss4;
}
function addskl3()
{
    var s1 = document.getElementById("sklinp3").value;
    ss3 = s1[0].toLocaleUpperCase()+s1.slice(1);
    document.getElementById("skl3").innerHTML ="• "+" "+ss3;
}
function addskl4()
{
    var s1 = document.getElementById("sklinp4").value;
    ss2 = s1[0].toLocaleUpperCase()+s1.slice(1);
    document.getElementById("skl4").innerHTML ="• "+" "+ss2;
}
function addskl5()
{
    var s1 = document.getElementById("sklinp5").value;
    ss1 = s1[0].toLocaleUpperCase()+s1.slice(1);
    document.getElementById("skl5").innerHTML ="• "+" "+ss1;
}
function SchFun()
{
    let hs = document.getElementById("hsdd1").value;
    hs1 = hs[0].toLocaleUpperCase()+hs.slice(1);
    document.getElementById("hsd1").innerHTML="• "+" "+hs1;
    document.getElementById("nts").innerHTML=hs1;

}
function DegFun()
{
    let dg = document.getElementById("hsdd2").value;
    let dg1 = dg[0].toLocaleUpperCase()+dg.slice(1);
    document.getElementById("hsd2").innerHTML="• "+" "+dg1+" "+"Stream";

}
function CitFun()
{
    let ct = document.getElementById("hsdd32").value;
    cit = ct[0].toLocaleUpperCase()+ct.slice(1);
    document.getElementById("hsd3").innerHTML="• "+" "+cit;

}
function StaFun()
{
    let st = document.getElementById("hsdd33").value;
    let st1 =st[0].toLocaleUpperCase()+st.slice(1);
    document.getElementById("hsd3").innerHTML="• "+" "+cit+", "+st1;
}
function StdFun()
{
    let l4 = document.getElementById("hsdd43").value;
    xd = l4[0]+l4[1]+l4[2]+l4[3];
}
function EndFun()
{
    let l5 = document.getElementById("hsdd44").value;
    let xd2 = xd +"-"+l5[2]+l5[3];
    document.getElementById("hsd1").innerHTML="• "+" "+hs1+"("+xd2+")";
}
function savehsd()
{
    var l6 = document.getElementById("hsdd5").value;
    let l7 =l6[0].toLocaleUpperCase()+l6.slice(1);
    document.getElementById("hsd4").innerHTML="• "+" "+l7;
}
function FunCName()
{
    let fc = document.getElementById("cdd1").value;
    fcn=fc[0].toLocaleUpperCase()+fc.slice(1)
    document.getElementById("cd1").innerHTML="• "+" "+fcn
    document.getElementById("cdnz").innerHTML=fcn
}
function FunDName()
{
    let fc1 = document.getElementById("cdd2").value;
    if(fc1=="BCA"||fc1=="bca"||fc1=="Bca"||fc1=="BCa"||fc1=="BcA"||fc1=="bCA"||fc1=="bcA")
    {
        fc1="Bachelor of Computer Applications"
    }
    else if(fc1=="BBA"||fc1=="bba"||fc1=="Bba"||fc1=="BBa"||fc1=="BbA"||fc1=="bBA"||fc1=="bbA")
    {
        fc1="Bachelor of Business Administration"
    }
    else if(fc1==" ")
    {
        fc1 = " "
    }
    let fcn1=fc1[0].toLocaleUpperCase()+fc1.slice(1)
    document.getElementById("cd2").innerHTML="• "+" "+fcn1
}
function FunCitName()
{
    let ct = document.getElementById("cdd3").value;
    cit = ct[0].toLocaleUpperCase()+ct.slice(1);
    document.getElementById("cd3").innerHTML="• "+" "+cit;
}
function FunStaName()
{
    let st = document.getElementById("cdd4").value;
    let st1 =st[0].toLocaleUpperCase()+st.slice(1);
    document.getElementById("cd3").innerHTML="• "+" "+cit+", "+st1;
}
function FunStDate()
{
    let l4 = document.getElementById("cdd5").value;
    xdx = l4[0]+l4[1]+l4[2]+l4[3];
}
function FunEndDate()
{
    let l5 = document.getElementById("cdd6").value;
    let xd2 = xdx +"-"+l5[2]+l5[3];
    document.getElementById("cd1").innerHTML="• "+" "+fcn+"("+xd2+")";
}
function FunDis()
{
    var xz = document.getElementById("cdd7").textContent;
    // sessionStorage.setItem("job",xz)
    // let job1z = sessionStorage.getItem("job");
    let job111z = xz[0].toLocaleUpperCase()+xz.slice(1);
    document.getElementById("cxd4").innerHTML="• "+" "+job111z; 
}
function FunT()
{
    T = document.getElementById("interr1").value;
}
function FunEName()
{
    let T1 = document.getElementById("interr2").value;
    let T11 = T1[0].toLocaleUpperCase()+T1.slice(1);
    document.getElementById("inter2").innerHTML="• "+" "+T11+"("+T+")"
}
function FunIName()
{
    let T2 = document.getElementById("interr3").value;
    T22 = T2[0].toLocaleUpperCase()+T2.slice(1);
    document.getElementById("inter1").innerHTML="• "+" "+T22
}
function FunCSName()
{
    let T3 = document.getElementById("interr4").value
    document.getElementById("inter1").innerHTML="• "+" "+T22+" ("+T3+")"
}
function FunIntStDate()
{
    let l4 = document.getElementById("interr5").value;
    var val1;
if(l4[5]=="1")
{
    if(l4[6]=="0")
    {
        val1 = "Oct"
    }
    if(l4[6]=="1")
    {
        val1 = "Nov"
    }
    if(l4[6]=="2")
    {
        val1 = "Dec"
    }
}
else if(l4[5]=="0")
{
    if(l4[6]=="1")
    {
        val1 = "Jan"
    }
    if(l4[6]=="2")
    {
        val1 = "Fab"
    }
    if(l4[6]=="3")
    {
        val1 = "March"
    }
    if(l4[6]=="4")
    {
        val1 = "Apr"
    }
    if(l4[6]=="5")
    {
        val1 = "May"
    }
    if(l4[6]=="6")
    {
        val1 = "June"
    }
    if(l4[6]=="7")
    {
        val1 = "July"
    }
    if(l4[6]=="8")
    {
        val1 = "Aug"
    }
    if(l4[6]=="9")
    {
        val1 = "Sep"
    }
}
    xdx1 = val1+" " +l4[0]+l4[1]+l4[2]+l4[3];
}
function FunIntEndDate()
{
    let l5 = document.getElementById("interr6").value;
    let val12
    if(l5[5]=="1")
{
    if(l5[6]=="0")
    {
        val12 = "Oct"
    }
    if(l5[6]=="1")
    {
        val12 = "Nov"
    }
    if(l5[6]=="2")
    {
        val12 = "Dec"
    }
}
else if(l5[5]=="0")
{
    if(l5[6]=="1")
    {
        val12 = "Jan"
    }
    if(l5[6]=="2")
    {
        val12 = "Fab"
    }
    if(l5[6]=="3")
    {
        val12 = "March"
    }
    if(l5[6]=="4")
    {
        val12 = "Apr"
    }
    if(l5[6]=="5")
    {
        val12 = "May"
    }
    if(l5[6]=="6")
    {
        val12 = "June"
    }
    if(l5[6]=="7")
    {
        val12 = "July"
    }
    if(l5[6]=="8")
    {
        val12 = "Aug"
    }
    if(l5[6]=="9")
    {
        val12 = "Sep"
    }
}
    let xd2 = xdx1 +" To "+val12+" "+l5[0]+l5[1]+l5[2]+l5[3];
    document.getElementById("inter3").innerHTML="• "+" "+" From "+xd2;
}
function FunIDes()
{
    var xzz = document.getElementById("interr7").textContent;
    document.getElementById("inter4").innerHTML="• "+" "+xzz; 
}
function FunAch1()
{
    let ac1 = document.getElementById("inpAch1").value;
    document.getElementById("Achi1").innerHTML="• "+" "+ac1; 
}
function FunAch2()
{
    let ac2 = document.getElementById("inpAch2").value;
    document.getElementById("Achi2").innerHTML="• "+" "+ac2; 
}
function FunAch3()
{
    let ac3 = document.getElementById("inpAch3").value;
    document.getElementById("Achi3").innerHTML="• "+" "+ac3; 
}
function FunAch4()
{
    let ac4 = document.getElementById("inpAch4").value;
    document.getElementById("Achi4").innerHTML="• "+" "+ac4; 
}
function FunAch5()
{
    let ac5 = document.getElementById("inpAch5").value;
    document.getElementById("Achi5").innerHTML="• "+" "+ac5; 
}