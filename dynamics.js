var keycount = 0;
var start,end,time;
var div = document.getElementById('div');
var mystring = "This is a sample text";
var j=0;
var flag = [];
for(i=0;i<mystring.length;i++)
flag[i] = 0;
for(i=0;i<mystring.length;i++)
{
  var p = document.createElement('p');
  p.textContent = mystring[i];
  div.appendChild(p);
}
var input = document.getElementById('textbox');
var dupe = "";
var inp = "";
// for(i=0;i<mystring.length;i++)

function func(event){

  if(event.which!=8) keycount++;
  if(event.which==8 &&inp!="")   //backspace
  {
    inp = inp.substring(0,inp.length-1);
  }
  else if(event.which==8 && inp=="");


  else{
    var str = String.fromCharCode(event.which);
    inp+=str;
    if(!flag[j])
    {
      dupe+=mystring[j];
      flag[j] = 1;
    }



  if(inp==dupe)
  {
  div.children[j].className = "correct";
j++;
   }

   else div.children[j].className = "wrong";

}
console.log(dupe);
console.log(inp);
if(keycount==1)
{
start = new Date().getTime();
  console.log(start);
}
if(j==mystring.length){
  end  = new Date().getTime();
  console.log(end);
   time = end - start;
  time = time/1000;
  input.disabled = true;
  var endpara = document.getElementById("ec")
  var para = document.createElement('p');
  input.value = mystring;
  para.innerHTML = "You have reached the end of the text. Your typing speed is "+ parseFloat(mystring.length/time).toPrecision(3) + " characters/s";
  endpara.appendChild(para);

}

}
