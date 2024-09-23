document.getElementById('home-text').addEventListener('click',function(){
  console.log('clicked blog')
  document.getElementById('home-text').innerText='Blog';
  window.location.href = "./index.html";
    
  })