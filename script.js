const searchBtn=document.getElementById('searchBtn'), modal=document.getElementById('search'), close=document.getElementById('closeSearch');
searchBtn?.addEventListener('click',()=>modal.classList.add('open')); close?.addEventListener('click',()=>modal.classList.remove('open'));
document.addEventListener('keydown',e=>{if(e.key==='Escape')modal.classList.remove('open')});
document.getElementById('signup')?.addEventListener('submit',e=>{e.preventDefault();document.getElementById('formMsg').textContent="YOU'RE IN. WE'LL CALL WHEN IT'S TIME TO STRIKE.";e.target.reset()});
document.querySelectorAll('a[href^="#"]').forEach(a=>a.addEventListener('click',e=>{const el=document.querySelector(a.getAttribute('href'));if(el){e.preventDefault();el.scrollIntoView({behavior:'smooth'})}}));
