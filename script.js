const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
function openWaitlist(){document.getElementById('modal').classList.add('open');document.body.style.overflow='hidden'}
function closeWaitlist(){document.getElementById('modal').classList.remove('open');document.body.style.overflow=''}
function submitWaitlist(e){e.preventDefault();document.getElementById('form-msg').textContent='YOU ARE ON THE LIST. WE’LL BE IN TOUCH.';e.target.reset()}
document.getElementById('modal').addEventListener('click',e=>{if(e.target.id==='modal')closeWaitlist()});
document.querySelector('.menu').addEventListener('click',()=>document.querySelector('.nav nav').classList.toggle('mobile-open'));
