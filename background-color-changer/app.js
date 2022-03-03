//Element Selection
const btn = document.querySelector('.change-color');
const color = document.getElementById('color');
const rgb_color = document.getElementById('rgb_color');
const color_btn = document.getElementById('color_copy');
const rgb_copy = document.getElementById('rgb_copy');
let div = null;

// function for copying hexacode
color_btn.addEventListener('click',()=>{
   if(div !=null){
      div.remove();
      div =null;
   }
   navigator.clipboard.writeText(color.value);
   if(color.value !=null){alertmessage(color.value);}
   
   // window.alert(color.value +" color Copied");
   
})

//functiont for creating a random number 
function rgbColorGenerator(n){
   return Math.floor(Math.random() * n);

}
 function hex2rgb(hexcode){
    const r = parseInt(hexcode.slice(0,2),16);
    const g = parseInt(hexcode.slice(2,4),16);
    const b = parseInt(hexcode.slice(4,6),16);
    return `rgb(${r},${g},${b})`;
 }
// add Eventlistener to the button
btn.addEventListener('click',()=>{
 const r = rgbColorGenerator(255);
 const g = rgbColorGenerator(255);
 const b = rgbColorGenerator(255);
 document.body.style.backgroundColor = `rgb(${r},${g},${b})`;
 color.value = '#'+r.toString(16)+g.toString(16)+b.toString(16);
 rgb_color.value = `rgb(${r},${g},${b})`;
})


rgb_copy.addEventListener('click',()=>{
   if(div !=null){
      div.remove();
      div =null;
   }
   navigator.clipboard.writeText(rgb_color.value);
   alertmessage(rgb_color.value);
   });
// creating Element for alert message
function alertmessage(msg){
   div = document.createElement('div');
   div.innerText = msg+" color Code Copied";
   div.className = 'toast_msg toast_msg-slide-in';
   div.addEventListener('click',function(){
      div.classList.add('toast_msg-slide-out');
      div.classList.remove('toast_msg-slide-in');
      div.addEventListener('click',()=>{
         div.remove();
         div = null;
      });
   });
   
   document.body.appendChild(div);


}
/**
 * 
 * @param {string} hexcode 
 * @returns 
 */
   function isValidHex(hexcode){
  if(hexcode.length ==7 && hexcode[0]=='#' ) {
   hexcode = hexcode.substring(1);
   return /^[0-9A-Fa-f]{6}$/i.test(hexcode);
  }
  else return false;
   
   }

   color.addEventListener('keyup',(e)=>{
      const hexcode = e.target.value;
      if(hexcode && isValidHex(hexcode)){
         document.body.style.backgroundColor = hexcode;
         rgb_color.value = hex2rgb(hexcode.slice(1,7));
      }
   })

