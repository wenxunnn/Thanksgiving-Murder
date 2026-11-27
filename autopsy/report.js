const cover=document.querySelector('#sealed-file'),report=document.querySelector('#report'),open=document.querySelector('#open-report');
open.addEventListener('click',()=>{cover.hidden=true;report.hidden=false;open.setAttribute('aria-expanded','true');document.querySelector('#report-title').focus();window.scrollTo(0,0);});
document.querySelector('#close-report').addEventListener('click',()=>{report.hidden=true;cover.hidden=false;open.setAttribute('aria-expanded','false');open.focus();window.scrollTo(0,0);});
document.querySelector('#print-report').addEventListener('click',()=>window.print());
