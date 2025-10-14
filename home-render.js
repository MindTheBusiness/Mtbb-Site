<script>
(async function(){
  try {
    const data = await fetch('/Mtbb-Site/data.json').then(r=>r.json());

    // SERVICES
    const sv = document.getElementById('servicesGrid');
    if (sv && data.services) {
      sv.innerHTML = data.services.map(s => `
        <article class="glass rounded-2xl p-6 card">
          <h3 class="text-xl font-semibold">${s.title}</h3>
          <p class="text-neutral-300 mt-2">${s.desc}</p>
          <ul class="text-neutral-400 text-sm mt-3 space-y-1">
            ${s.bullets.map(b=>`<li>• ${b}</li>`).join('')}
          </ul>
          ${s.cta ? `<a href="${s.cta === 'book' ? 'https://calendly.com/mindthebusinessmtbb/1hour' : s.cta}" class="mt-4 inline-block px-4 py-2 rounded-xl bg-brand text-neutral-900 font-semibold text-sm">Get Started</a>` : ''}
        </article>
      `).join('');
    }

    // PACKAGES
    const pk = document.getElementById('packagesGrid');
    if (pk && data.packages) {
      pk.innerHTML = data.packages.map(p => `
        <article class="glass rounded-2xl p-6 card">
          <h3 class="text-2xl font-semibold">${p.name}</h3>
          <p class="text-neutral-300 mt-2">${p.desc}</p>
          <ul class="text-neutral-400 text-sm mt-3 space-y-1">
            ${p.deliverables.map(d=>`<li>• ${d}</li>`).join('')}
          </ul>
          <a href="${p.cta || 'https://calendly.com/mindthebusinessmtbb/1hour'}" class="mt-4 inline-block px-4 py-2 rounded-xl bg-brand text-neutral-900 font-semibold text-sm">Request Quote</a>
        </article>
      `).join('');
    }
  } catch(e) {}
})();
</script>
