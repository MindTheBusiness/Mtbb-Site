<script>
  // Tailwind extras
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
  document.getElementById('yr').textContent = new Date().getFullYear();

  // mobile nav
  const btn=document.getElementById('menuBtn'); const nav=document.getElementById('mobileNav');
  btn?.addEventListener('click',()=>nav.classList.toggle('hidden'));

  // footer links from data.json
  try {
    const data = await fetch('/Mtbb-Site/data.json').then(r=>r.json());
    const p = (data.brand && data.brand.policies) || {};
    if (document.getElementById('privacyLink')) document.getElementById('privacyLink').href = p.privacy || '#';
    if (document.getElementById('termsLink')) document.getElementById('termsLink').href = p.terms || '#';
    if (document.getElementById('refundsLink')) document.getElementById('refundsLink').href = p.refunds || '#';
    if (document.getElementById('supportLink')) document.getElementById('supportLink').href = p.support || 'mailto:'+(data.brand?.email||'mindthebusinessmtbb@gmail.com');
  } catch(e) {}
}
loadShared();
</script>
