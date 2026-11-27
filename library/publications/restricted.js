const escape=value=>String(value).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const bytes=s=>Uint8Array.from(atob(s),c=>c.charCodeAt(0));
export async function unlockPaper(p,el){
 document.title=p.title+' | Restricted reprint · WLLU Library';
 el.innerHTML=`<div class="eyebrow">Restricted research reprint</div><h1>${escape(p.title)}</h1><p>${p.authors.map(escape).join(' · ')}</p><p class="meta">${escape(p.journal)} · ${p.year}</p><div class="notice"><strong>Locked · Depositor access restriction</strong><p>Full-text circulation restricted at the request of Professor Nathaniel Whitmore. An authorized Library Manager Access Code is required to consult this reprint.</p></div><form id="paper-access"><label for="paper-code">Library Manager Access Code</label><div class="search"><input id="paper-code" type="password" inputmode="numeric" pattern="[0-9]{8}" minlength="8" maxlength="8" autocomplete="off" required><button type="submit">Unlock paper</button></div></form><p id="paper-access-status" class="status" role="status" aria-live="polite"></p><p><a href="../">Return to catalog</a></p>`;
 const form=el.querySelector('#paper-access'),status=el.querySelector('#paper-access-status');
 return new Promise(resolve=>{
 let busy=false;
 async function attempt(code){
  if(busy)return;busy=true;const button=form.querySelector('button');button.disabled=true;status.textContent='Checking access…';
  try{
   if(!/^\d{8}$/.test(code))throw Error('code');
   const response=await fetch('../'+p.sealedPdf,{cache:'no-store'});if(!response.ok)throw Error('service');const sealed=await response.json();
   const key=await crypto.subtle.importKey('raw',await crypto.subtle.digest('SHA-256',new TextEncoder().encode(code)),{name:'AES-GCM'},false,['decrypt']);
   let plaintext;try{plaintext=await crypto.subtle.decrypt({name:'AES-GCM',iv:bytes(sealed.iv)},key,bytes(sealed.data));}catch{throw Error('code');}
   const url=URL.createObjectURL(new Blob([plaintext],{type:'application/pdf'}));window.addEventListener('pagehide',()=>URL.revokeObjectURL(url),{once:true});sessionStorage.setItem('wlu-archive',code);resolve({...p,pdf:url});
  }catch(error){if(error.message==='code'){sessionStorage.removeItem('wlu-archive');status.textContent='Access code not recognized. Consult your issued library reference materials.';}else status.textContent='Restricted reprint unavailable. Refresh and try again.';}
  finally{busy=false;button.disabled=false;}
 }
 form.addEventListener('submit',event=>{event.preventDefault();attempt(el.querySelector('#paper-code').value.trim());});
 const saved=sessionStorage.getItem('wlu-archive');if(saved)attempt(saved);
 });
}
