document.addEventListener('DOMContentLoaded',async()=>{
  const y=document.querySelector('[data-year]'); if(y) y.textContent=new Date().getFullYear();
  try{
    const res=await fetch('/content/home.json',{cache:'no-store'});
    if(res.ok){
      const data=await res.json();
      const h1=document.getElementById('hero-title');
      const p=document.getElementById('hero-sub');
      if(h1 && data.title) h1.textContent=data.title;
      if(p && data.subtitle) p.textContent=data.subtitle;
      const list=document.getElementById('features');
      if(list && Array.isArray(data.features)){
        list.innerHTML='';
        data.features.forEach(f=>{
          const card=document.createElement('div');
          card.className='card';
          card.innerHTML=`<span class="badge">${f.badge||''}</span><h3>${f.title||''}</h3><p>${f.text||''}</p>`;
          list.appendChild(card);
        });
      }
    }
  }catch(e){}
});