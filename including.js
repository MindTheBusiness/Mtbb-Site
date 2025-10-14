<script>
document.addEventListener('DOMContentLoaded', async () => {
  const targets = Array.from(document.querySelectorAll('[data-include]'));
  await Promise.all(targets.map(async el => {
    let url = el.getAttribute('data-include');
    const bust = (url.includes('?') ? '&' : '?') + 'v=' + Date.now();
    url = url + bust;
    try {
      const res = await fetch(url);
      if(!res.ok) throw new Error(res.status);
      el.innerHTML = await res.text();
      el.dataset.loaded = 'true';
    } catch (e) {
      el.innerHTML = `<div class="p-3 rounded-lg bg-red-900/40 text-red-300 text-sm">Failed to load ${url}</div>`;
    }
  }));
});
</script>
