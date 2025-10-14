<script>
  tailwind.config={theme:{extend:{colors:{brand:{DEFAULT:'#6d73ff'}},boxShadow:{soft:'0 10px 30px rgba(0,0,0,.24)'}}}};
</script>
<script>
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

  // (optional) could load brand data for footer links, but we hard-linked them for now
}
loadShared();
</script>
