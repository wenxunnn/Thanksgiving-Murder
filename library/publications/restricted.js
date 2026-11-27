const escape=value=>String(value).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
export function showRestrictedPaper(p,el){
 document.title=p.title+' | Access denied · WLLU Library';
 el.innerHTML=`<div class="eyebrow">Restricted research holding</div><h1>${escape(p.title)}</h1><p>${p.authors.map(escape).join(' · ')}</p><p class="meta">${escape(p.journal)} · ${p.year}</p><div class="restriction-panel"><p class="denied-stamp">Access denied</p><h2>Full text withdrawn from circulation</h2><p>Access to this paper has been suspended at the request of Professor Nathaniel Whitmore.</p><p>This restriction applies to all reader accounts. Passwords and Library Manager Access Codes cannot open this paper. Online viewing, printing of the full text, and downloads are unavailable.</p><p class="meta">Catalogue metadata retained for reference.</p></div><p><a href="../">Return to catalog</a></p>`;
}
