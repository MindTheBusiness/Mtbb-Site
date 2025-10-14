<script>
document.addEventListener('DOMContentLoaded', async () => {
  const targets = Array.from(document.querySelectorAll('[data-include]'));
  await Promise.all(targets.map(async el => {
    const url = el.getAttribute('data-include');
    try {
      const html = await (await fetch(url)).text();
      el.innerHTML = html;
    } catch (e) {
      el.innerHTML = '<div class="text-red-400 text-sm">Failed to load '+url+'</div>';
    }
  }));
});
</script>
