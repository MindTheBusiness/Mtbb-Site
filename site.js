<script>
  // Tailwind
  tailwind.config={theme:{extend:{colors:{brand:{DEFAULT:'#6d73ff'}},boxShadow:{soft:'0 10px 30px rgba(0,0,0,.24)'}}}};
</script>
<script>
async function loadShared(){
  // inject header/footer
  const [h,f] = await Promise.all([
    fetch('/Mtbb-Site/header.html').then(r=>r.text()),
    fetch('/Mtbb-Site/footer.html').then(r=>r.text())
  ]);
  document.getElementById('header-slot').innerHTML = h;
  document.getElementById('footer-slot').innerHTML = f;

  document.getElementById('yr').textContent = new Date().getFullYear();
  const btn=document.getElementById('menuBtn'); const nav=document.getElementById('mobileNav');
  btn?.addEventListener('click',()=>nav.classList.toggle('hidden'));

  // brand data for footer policy links
  const data = await fetch('/Mtbb-Site/data.json').then(r=>r.json());
  const p=data.brand?.policies||{};
  document.getElementById('privacyLink').href = p.privacy || '#';
  document.getElementById('termsLink').href = p.terms || '#';
  document.getElementById('refundsLink').href = p.refunds || '#';
  document.getElementById('supportLink').href = p.support || 'mailto:'+ (data.brand.email||'mindthebusinessmtbb@gmail.com');

  // mark active nav
  const here = document.body.dataset.page;
  document.querySelectorAll('[data-nav="'+here+'"]').forEach(a=>a.classList.add('text-brand'));
}
loadShared();
</script>
