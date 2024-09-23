document.getElementById('btn-history').addEventListener('click',function(){
  showSectionById('history-container');
  const btnHist = document.getElementById('btn-history');
  const btnDone = document.getElementById('btnDone');
  btnHist.classList.add('bg-[#B4F461]');
  btnDone.classList.remove('bg-[#B4F461]');
  
})
document.getElementById('btnDone').addEventListener('click',function(){
  btnDone.classList.add('bg-[#B4F461]');
  const btnHist = document.getElementById('btn-history');
  btnHist.classList.remove('bg-[#B4F461]');

  document.getElementById('section1').classList.remove('hidden');
  document.getElementById('section2').classList.remove('hidden');
  document.getElementById('section3').classList.remove('hidden');
  document.getElementById('history-container').classList.add('hidden');
  
})