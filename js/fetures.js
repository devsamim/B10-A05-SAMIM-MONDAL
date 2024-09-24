

document.getElementById('donate-btn-1').addEventListener('click',function(){
  const exitingBalance = getTextValueById('valueOne');
  const donate1Value = getInputValueById('donate-input-one');
  const newBalance = exitingBalance + donate1Value;
  if(isNaN(donate1Value) || donate1Value <=0 ){
   alert('invalid input!..');
   return;
  };
  document.getElementById('valueOne').innerText = newBalance;
  const mainWallet = getTextValueById('mainWallet');
  const donateWallet = mainWallet - donate1Value ;
  console.log(donateWallet);
  document.getElementById('mainWallet').innerText = donateWallet;
  
  // modal add
  document.getElementById("my_modal_6").checked = true; 
    // add to transaction history
    const p = document.createElement('p');
    p.innerText = ` ${donate1Value} Tk. Donate for Flood at Noakhali, Bangladesh`;
     

    // should be a common function
    document.getElementById('history-container').appendChild(p);
    
  
});
document.getElementById('donate-btn-2').addEventListener('click',function(){
  const exitingBalance = getTextValueById('valueTwo');
  const donate1Value = getInputValueById('donate-input-two');
  const newBalance = exitingBalance + donate1Value;
  if(isNaN(donate1Value) || donate1Value <=0 ){
    alert('invalid input!..');
    return;
   };
  // modal add
  document.getElementById("my_modal_6").checked = true; 
  // add to transaction history
  const p = document.createElement('p');
  p.innerText = ` ${donate1Value} Tk. Donate for Flood at Noakhali, Bangladesh`;
  console.log(p); 

  // should be a common function
  document.getElementById('history-container').appendChild(p);

  document.getElementById('valueTwo').innerText =newBalance;
  const mainWallet = getTextValueById('mainWallet');
  const donateWallet = mainWallet - donate1Value ;
  document.getElementById('mainWallet').innerText = donateWallet;
  
});
document.getElementById('donate-btn-3').addEventListener('click',function(){
  const exitingBalance = getTextValueById('valueThree');
  const donate1Value = getInputValueById('donate-input-three');
  const newBalance = exitingBalance + donate1Value;
  if(isNaN(donate1Value) || donate1Value <=0 ){
    alert('invalid input!..');
    return;
   };
  // modal add
 
  document.getElementById('valueThree').innerText =newBalance;
  const mainWallet = getTextValueById('mainWallet');
  const donateWallet = mainWallet - donate1Value ;
  document.getElementById('mainWallet').innerText = donateWallet;
  
  document.getElementById("my_modal_6").checked = true; 
});

  

const p = document.createElement('p');
 p.style.padding='6px';
 p.style.margin='10px';
 p.style.textAlign='center';
 p.style.backgroundColor='white';
 p.style.borderRadius='8px';
 p.innerText =` ${donate1Value} Aid for Injured in the Quota Movement
 `;
document.getElementById('show-txn-history').appendChild(p);

const newDate = new Date();
console.log(newDate);