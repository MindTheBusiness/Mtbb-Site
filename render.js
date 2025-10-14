async function load() {
  const res = await fetch('./data.json');
  const data = await res.json();

  // Trust bullets
  const trust = document.getElementById('trust');
  trust.innerHTML = `
    <div class="flex flex-col md:flex-row items-center gap-4 justify-between">
      <p class="text-sm">Trusted by indie founders, freelancers, and local brands.</p>
      <ul class="flex flex-wrap gap-3 text-xs opacity-90">
        ${data.brand.trustBullets.map(b=>`<li class="px-3 py-1 rounded-lg bg-neutral-900/70">${b}</li>`).join('')}
      </ul>
    </div>
  `;

  // Tools
  const toolsEl = document.getElementById('toolsGrid');
  toolsEl.innerHTML = data.tools.map(t=>`
    <article class="glass rounded-2xl p-5 hover:shadow-soft transition">
      <h3 class="font-semibold text-lg">${t.name}</h3>
      <p class="text-neutral-300 text-sm mt-1">${t.desc}</p>
      <div class="mt-3 text-neutral-400 text-sm">${t.price ? `Price: ${t.price}`:''}</div>
      <div class="mt-4 flex gap-2">
        ${t.buy ? `<a href="${t.buy}" class="px-3 py-2 rounded-lg bg-brand text-neutral-900 text-sm font-semibold">Buy ${t.price || ''}</a>` : `<span class="px-3 py-2 rounded-lg bg-neutral-800 text-sm">Buy link soon</span>`}
        <a href="${t.demo || '#'}" class="px-3 py-2 rounded-lg bg-neutral-900 text-sm">Demo</a>
      </div>
    </article>
  `).join('');

  // Bundles
  const bundlesEl = document.getElementById('bundlesGrid');
  bundlesEl.innerHTML = data.bundles.map(b=>`
    <div class="glass rounded-2xl p-6">
      <h3 class="text-xl font-semibold">${b.name}</h3>
      <p class="text-neutral-300 mt-1">${b.desc}</p>
      <div class="text-3xl font-extrabold mt-4">${b.price}</div>
      <a href="${b.buy || '#'}" class="mt-6 inline-block px-4 py-2 rounded-xl ${b.buy ? 'bg-brand text-neutral-900 font-semibold':'bg-neutral-900'}">${b.buy ? 'Buy' : 'Coming soon'}</a>
    </div>
  `).join('');
  document.getElementById('lifetimeNote').textContent = data.brand.lifetimeNote || '';

  // Media (videos)
  const mediaEl = document.getElementById('mediaGrid');
  mediaEl.innerHTML = data.videos.slice(0,2).map(v=>`
    <div class="aspect-video rounded-2xl overflow-hidden border border-neutral-900/60">
      <iframe class="w-full h-full" src="${v.embed}" title="${v.title}" frameborder="0" allowfullscreen></iframe>
    </div>
  `).join('') + (data.videos.length>2 ? `
    <div class="col-span-full text-sm text-neutral-400 mt-2">More demos coming soon.</div>` : '');

  // Gallery (images)
  const gal = document.getElementById('galleryGrid');
  gal.innerHTML = data.images.map(img=>`
    <figure class="glass rounded-2xl overflow-hidden border border-neutral-900/60">
      <img class="w-full h-48 object-cover" src="${img.src}" alt="${img.title}">
      <figcaption class="p-3 text-sm text-neutral-300">${img.title}</figcaption>
    </figure>
  `).join('');

  // FAQ
  const faq = document.getElementById('faqGrid');
  faq.innerHTML = data.faq.map(f=>`
    <div class="glass rounded-2xl p-5">
      <h3 class="font-semibold">${f.q}</h3>
      <p class="mt-2 text-neutral-300">${f.a}</p>
    </div>
  `).join('');

  // About + footer/policy links + blog button
  document.getElementById('about').textContent = data.brand.about;
  document.getElementById('privacyLink').href = data.brand.policies.privacy || '#';
  document.getElementById('termsLink').href = data.brand.policies.terms || '#';
  document.getElementById('refundsLink').href = data.brand.policies.refunds || '#';
  document.getElementById('supportLink').href = data.brand.policies.support || 'mailto:'+(data.brand.email||'');
  document.getElementById('blogBtn').href = data.brand.blogUrl || '#';
}
load();
