export const normalizeName=value=>String(value).normalize('NFKD').toLowerCase().replace(/[\u0300-\u036f]/g,'').replace(/[^a-z0-9]/g,'');
export const isCorrectAccusation=value=>['victor','victorlin','drvictorlin','doctorvictorlin'].includes(normalizeName(value));
export function initFinale(doc,win,loadStory=()=>import('./reconstruction.js?v=1')){
 const get=id=>doc.getElementById(id),form=get('accusation-form'),input=get('accused'),feedback=get('submission-feedback'),submission=get('submission'),accepted=get('accepted'),reconstruction=get('reconstruction'),submit=get('submit-accusation');
 let authorized=false,story=null,request=0;
 function restart(){request++;authorized=false;story=null;reconstruction.replaceChildren();reconstruction.hidden=true;accepted.hidden=true;submission.hidden=false;form.reset();input.removeAttribute('aria-invalid');feedback.replaceChildren();feedback.className='feedback';submit.disabled=false;input.focus();win.scrollTo(0,0);}
 form.addEventListener('submit',async event=>{
  event.preventDefault();const value=input.value.trim();
  if(!value){feedback.textContent='Enter a name before submitting your final accusation.';input.setAttribute('aria-invalid','true');input.focus();return;}
  if(!isCorrectAccusation(value)){feedback.innerHTML='<h2>Case remains open</h2><p>The evidence does not support this conclusion. Reconsider the estimated time of death, the toxicology findings, and who had access to Nathaniel\'s drinking glass.</p>';feedback.className='feedback incorrect';input.setAttribute('aria-invalid','true');return;}
  submit.disabled=true;input.removeAttribute('aria-invalid');feedback.textContent='Opening the final case file…';const token=++request;
  try{const loaded=await loadStory();if(token!==request)return;story=loaded;authorized=true;submission.hidden=true;accepted.hidden=false;feedback.replaceChildren();get('solved-title').focus();win.scrollTo(0,0);}
  catch{feedback.textContent='The final case file could not be loaded. Please check your connection and submit again.';}
  finally{if(token===request)submit.disabled=false;}
 });
 get('view-reconstruction').addEventListener('click',()=>{
  if(!authorized||!story)return;
  story.renderReconstruction(reconstruction);accepted.hidden=true;reconstruction.hidden=false;
  reconstruction.querySelector('[data-restart]').addEventListener('click',restart);
  reconstruction.querySelector('[data-print]').addEventListener('click',()=>win.print());
  reconstruction.querySelector('[data-expand]').addEventListener('click',()=>{for(const section of reconstruction.querySelectorAll('.timeline-phase'))section.open=true;});
  reconstruction.querySelector('[data-collapse]').addEventListener('click',()=>{for(const section of reconstruction.querySelectorAll('.timeline-phase'))section.open=false;});
  reconstruction.querySelector('#truth-title').focus();win.scrollTo(0,0);
 });
 get('restart-accepted').addEventListener('click',restart);
 // Each visit and refresh begins with a new, unrevealed submission. No answer is stored.
 return {restart};
}
if(typeof document!=='undefined')initFinale(document,window);
