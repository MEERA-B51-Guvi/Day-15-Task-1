const body=document.getElementsByTagName("body");

const maindiv=document.createElement("div");
maindiv.setAttribute("class", "maindiv");
document.body.appendChild(maindiv);

const display=document.createElement("input");
display.setAttribute("id", "displayonscreen");
display.setAttribute("placeholder", "0");
maindiv.appendChild(display);

const br=document.createElement("br");
maindiv.appendChild(br);

const key1=document.createElement("button");
key1.setAttribute("onClick", "diplay('1')");
key1.innerText="1";
maindiv.appendChild(key1);


const key2=document.createElement("button");
key2.setAttribute("onClick", "diplay('2')");
key2.innerText="2";
maindiv.appendChild(key2);


const key3=document.createElement("button");
key3.setAttribute("onClick", "diplay('3')");
key3.innerText="3";
maindiv.appendChild(key3);


const keyplus=document.createElement("button");
keyplus.setAttribute("onClick", "diplay('+')");
keyplus.innerText="+";
maindiv.appendChild(keyplus);

const br1=document.createElement("br");
maindiv.appendChild(br1);


const key4=document.createElement("button");
key4.setAttribute("onClick", "diplay('4')");
key4.innerText="4";
maindiv.appendChild(key4);


const key5=document.createElement("button");
key5.setAttribute("onClick", "diplay('5')");
key5.innerText="5";
maindiv.appendChild(key5);


const key6=document.createElement("button");
key6.setAttribute("onClick", "diplay('6')");
key6.innerText="6";
maindiv.appendChild(key6);


const keysub=document.createElement("button");
keysub.setAttribute("onClick", "diplay('-')");
keysub.innerText="_";
maindiv.appendChild(keysub);

const br3=document.createElement("br");
maindiv.appendChild(br3);


const key7=document.createElement("button");
key7.setAttribute("onClick", "diplay('7')");
key7.innerText="7";
maindiv.appendChild(key7);


const key8=document.createElement("button");
key8.setAttribute("onClick", "diplay('8')");
key8.innerText="8";
maindiv.appendChild(key8);


const key9=document.createElement("button");
key9.setAttribute("onClick", "diplay('9')");
key9.innerText="9";
maindiv.appendChild(key9);


const keymul=document.createElement("button");
keymul.setAttribute("onClick", "diplay('*')");
keymul.innerText="*";
maindiv.appendChild(keymul);


const br4=document.createElement("br");
maindiv.appendChild(br4);


const keydiv=document.createElement("button");
keydiv.setAttribute("onClick", "diplay('/')");
keydiv.innerText="/";
maindiv.appendChild(keydiv);


const key0=document.createElement("button");
key0.setAttribute("onClick", "diplay('0')");
key0.innerText="0";
maindiv.appendChild(key0);


const CL=document.createElement("button");
CL.setAttribute("onClick", "Clear()");
CL.setAttribute("id", "clbtn")
CL.innerText="CL";
maindiv.appendChild(CL);


const keyequl=document.createElement("button");
keyequl.setAttribute("onClick", "Calculate()");
keyequl.setAttribute("id","equalbtn")
keyequl.innerText="=";
maindiv.appendChild(keyequl);

const displayscreen=document.getElementById("displayonscreen");

function diplay(num){
    displayscreen.value+=num;
}
function Calculate(){
    try{
        displayscreen.value = eval(displayscreen.value);
    }
    catch(err){
        alert("invalid")
    }
}
function Clear(){
    displayscreen.value="";
}