(()=>{
  const button=document.querySelector('.theme-toggle');
  const updateThemeLabel=()=>{if(button){const dark=document.documentElement.dataset.theme==='dark';button.setAttribute('aria-label',dark?'Switch to light theme':'Switch to dark theme');button.setAttribute('title',dark?'Switch to light theme':'Switch to dark theme')}};
  updateThemeLabel();
  button?.addEventListener('click',()=>{const theme=document.documentElement.dataset.theme==='dark'?'light':'dark';document.documentElement.dataset.theme=theme;try{localStorage.setItem('hyun-theme',theme)}catch{}updateThemeLabel()});
  const filters=document.querySelectorAll('[data-filter]');
  filters.forEach(button=>button.addEventListener('click',()=>{const filter=button.dataset.filter;filters.forEach(b=>b.setAttribute('aria-pressed',String(b===button)));document.querySelectorAll('[data-pub-type]').forEach(p=>p.hidden=filter!=='all'&&p.dataset.pubType!==filter);document.querySelectorAll('.publication-group').forEach(group=>group.hidden=!group.querySelector('[data-pub-type]:not([hidden])'));const count=document.querySelectorAll('[data-pub-type]:not([hidden])').length;const status=document.querySelector('#filter-status');if(status)status.textContent=`Showing ${count} publications`;}));
})();
