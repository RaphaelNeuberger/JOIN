function includeSidebarHTML(){
  const placeholder = document.querySelector('[sidebar-html]');
  if(!placeholder) return;
  const src = placeholder.getAttribute('sidebar-html');
  fetch(src)
    .then(r=>r.text())
    .then(html=>{ placeholder.outerHTML = html; })
    .catch(()=>{});
}

function includeHeaderHTML(){
  const placeholder = document.querySelector('[header-html]');
  if(!placeholder) return;
  const src = placeholder.getAttribute('header-html');
  fetch(src)
    .then(r=>r.text())
    .then(html=>{ placeholder.outerHTML = html; })
    .catch(()=>{});
}
