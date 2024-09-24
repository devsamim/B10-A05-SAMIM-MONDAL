

document.getElementById('donate-btn-1').addEventListener('click',function(){
  const exitingBalance = getTextValueById('valueOne');
  const donate1Value = getInputValueById('donate-input-one');
  const newBalance = exitingBalance + donate1Value;
  if(isNaN(donate1Value) || donate1Value <=0 ){
   alert('invalid donate amount!..');
   return;
  };
  document.getElementById('valueOne').innerText = newBalance;
  const mainWallet = getTextValueById('mainWallet');
  const donateWallet = mainWallet - donate1Value ;
  document.getElementById('mainWallet').innerText = donateWallet;
  
  // modal add
  document.getElementById("my_modal_6").checked = true; 

  const div = document.createElement('div');
  div.style.border = '1px solid gray';    
  div.style.padding = '10px';             
  div.style.margin = '10px 0'; 
  div.innerHTML = `
      <p>${donate1Value} Tk. Donate for Flood at Noakhali, Bangladesh</p>
  `;
  document.getElementById('history-container').appendChild(div);
  const currentDateTime = new Date().toLocaleString(); 
  const dateTimePara = document.createElement('p');
  dateTimePara.innerText = `Date: ${currentDateTime}`;
  div.appendChild(dateTimePara); 
  
  

 
});
document.getElementById('donate-btn-2').addEventListener('click',function(){
  const exitingBalance = getTextValueById('valueTwo');
  const donate1Value = getInputValueById('donate-input-two');
  const newBalance = exitingBalance + donate1Value;
  if(isNaN(donate1Value) || donate1Value <=0 ){
    alert('invalid donate amount!..');
    return;
   };
   document.getElementById('valueTwo').innerText =newBalance;
   const mainWallet = getTextValueById('mainWallet');
   const donateWallet = mainWallet - donate1Value ;
   document.getElementById('mainWallet').innerText = donateWallet;

  // modal add
  document.getElementById("my_modal_6").checked = true; 
const div = document.createElement('div');
div.style.border = '1px solid gray';    
div.style.padding = '10px';             
div.style.margin = '10px 0'; 
div.innerHTML = `
    <p> ${donate1Value} Tk. Donate for Flood at Noakhali, Bangladesh </p>
`;
document.getElementById('history-container').appendChild(div);

const dateTimePara = document.createElement('p');
const currentDateTime = new Date().toLocaleString(); 
dateTimePara.innerText = `Date: ${currentDateTime}`;
div.appendChild(dateTimePara); 
  
    
});
document.getElementById('donate-btn-3').addEventListener('click',function(){
  const exitingBalance = getTextValueById('valueThree');
  const donate1Value = getInputValueById('donate-input-three');
  const newBalance = exitingBalance + donate1Value;
  if(isNaN(donate1Value) || donate1Value <=0 ){
    alert('invalid donate amount!..');
    return;
   };
   document.getElementById("my_modal_6").checked = true; 

  document.getElementById('valueThree').innerText =newBalance;
  const mainWallet = getTextValueById('mainWallet');
  const donateWallet = mainWallet - donate1Value ;
  document.getElementById('mainWallet').innerText = donateWallet;
  const div = document.createElement('div');
  div.style.border = '1px solid gray';    
  div.style.padding = '10px';             
  div.style.margin = '10px 0'; 
  div.innerHTML = `
    <p> ${donate1Value} Tk. Aid for Injured in the Quota Movement </p>
    `;
document.getElementById('history-container').appendChild(div);

const dateTimePara = document.createElement('p');
const currentDateTime = new Date().toLocaleString(); 
dateTimePara.innerText = `Date: ${currentDateTime}`;
div.appendChild(dateTimePara); 
  
  
});


