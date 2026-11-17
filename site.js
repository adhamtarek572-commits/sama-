(async()=>{
 const $=id=>document.getElementById(id);
 $('year').textContent=new Date().getFullYear();
 $('mobileMenu').addEventListener('click',()=>$('nav').classList.toggle('open'));
 document.querySelectorAll('#nav a').forEach(a=>a.addEventListener('click',()=>$('nav').classList.remove('open')));
 try{
  const response=await fetch('/api/content',{headers:{'Accept':'application/json'}});
  if(!response.ok)return;
  const data=await response.json();
  const set=(id,value)=>{if(value&&$(id))$(id).textContent=value};
  set('heroTitle',data.heroTitle);set('heroText',data.heroText);set('aboutText',data.aboutText);set('productName',data.productName);set('productText',data.productText);set('phoneText',data.phone);set('addressText',data.address);
  if(Array.isArray(data.gallery)&&data.gallery.length){$('galleryGrid').innerHTML=data.gallery.slice(0,6).map((g,i)=>`<figure><img src="${safeUrl(g.url)}" alt="${escapeHtml(g.title||'صورة من سما فلور')}" loading="lazy"><figcaption>${escapeHtml(g.title||'سما فلور')}</figcaption></figure>`).join('')}
  if(data.phoneLink){document.querySelectorAll('a[href^="tel:"]').forEach(a=>a.href='tel:'+data.phoneLink);document.querySelectorAll('a[href^="https://wa.me/"]').forEach(a=>{const u=new URL(a.href);a.href='https://wa.me/'+data.phoneLink.replace(/\D/g,'')+(u.search||'')})}
 }catch(e){/* keep the complete static page available if API is not configured */}
 function escapeHtml(s){return String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]))}
 function safeUrl(s){try{const u=new URL(s);return ['https:'].includes(u.protocol)?u.href:''}catch{return ''}}
})();
