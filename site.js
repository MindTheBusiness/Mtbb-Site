async function loadShared(){
  const [h,f] = await Promise.all([
    fetch('/Mtbb-Site/header.html').then(r=>r.text()),
    fetch('/Mtbb-Site/footer.html').then(r=>r.text())
  ]);
  document.getElementById('header-slot').innerHTML = h;
  document.getElementById('footer-slot').innerHTML = f;

  // year
  const yr=document.getElementById('yr'); if(yr) yr.textContent=new Date().getFullYear();

  // mobile nav
  const btn=document.getElementById('menuBtn'); const nav=document.getElementById('mobileNav');
  btn?.addEventListener('click',()=>nav.classList.toggle('hidden'));
}
loadShared();
