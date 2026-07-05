// ═══════════════════════════════════
// DATA
// ═══════════════════════════════════
const CATEGORIES = [
  {id:'legumes',  icon:'🫘', name:'Legumes',     count:86},
  {id:'dried-fruits',icon:'🍇',name:'Dried Fruits',count:114},
  {id:'grains',   icon:'🌾', name:'Grains',      count:72},
  {id:'nuts',     icon:'🥜', name:'Nuts',        count:58},
  {id:'seeds',    icon:'🌱', name:'Seeds',       count:34},
  {id:'herbs',    icon:'🌿', name:'Herbs',       count:29},
  {id:'spices',   icon:'🧂', name:'Spices',      count:47},
  {id:'superfoods',icon:'✨',name:'Superfoods',  count:22},
];

let PRODUCTS = [];
async function loadProducts() {
    const response = await fetch("./products.json");
    PRODUCTS = await response.json();

    initHome();
    renderCatalog();
}
const BASE_TITLE = 'BEANS — Premium Dry Goods | Legumes, Dried Fruits, Nuts & Grains';
const BASE_DESC  = 'BEANS is a premium dry goods marketplace. Buy organic legumes, dried fruits, nuts, grains and seeds. Sold per 1 kg. Call +998-91-530-93-90 for prices.';
const BASE_URL   = 'https://anzor1234.github.io/BEANS/';
const BASE_IMG   = 'https://images.unsplash.com/photo-1515543904379-3d757abe528f?w=1200&q=80';
const COUNTRIES = [
  {flag:'🇺🇸',name:'United States',code:'+1'},{flag:'🇬🇧',name:'United Kingdom',code:'+44'},
  {flag:'🇩🇪',name:'Germany',code:'+49'},{flag:'🇫🇷',name:'France',code:'+33'},
  {flag:'🇮🇳',name:'India',code:'+91'},{flag:'🇨🇳',name:'China',code:'+86'},
  {flag:'🇯🇵',name:'Japan',code:'+81'},{flag:'🇰🇷',name:'South Korea',code:'+82'},
  {flag:'🇷🇺',name:'Russia',code:'+7'},{flag:'🇺🇿',name:'Uzbekistan',code:'+998'},
  {flag:'🇹🇷',name:'Turkey',code:'+90'},{flag:'🇮🇷',name:'Iran',code:'+98'},
  {flag:'🇦🇺',name:'Australia',code:'+61'},{flag:'🇨🇦',name:'Canada',code:'+1'},
  {flag:'🇧🇷',name:'Brazil',code:'+55'},{flag:'🇲🇽',name:'Mexico',code:'+52'},
  {flag:'🇿🇦',name:'South Africa',code:'+27'},{flag:'🇳🇬',name:'Nigeria',code:'+234'},
  {flag:'🇪🇬',name:'Egypt',code:'+20'},{flag:'🇸🇦',name:'Saudi Arabia',code:'+966'},
  {flag:'🇦🇪',name:'UAE',code:'+971'},{flag:'🇵🇰',name:'Pakistan',code:'+92'},
  {flag:'🇧🇩',name:'Bangladesh',code:'+880'},{flag:'🇮🇩',name:'Indonesia',code:'+62'},
  {flag:'🇵🇭',name:'Philippines',code:'+63'},{flag:'🇻🇳',name:'Vietnam',code:'+84'},
  {flag:'🇹🇭',name:'Thailand',code:'+66'},{flag:'🇮🇹',name:'Italy',code:'+39'},
  {flag:'🇪🇸',name:'Spain',code:'+34'},{flag:'🇵🇱',name:'Poland',code:'+48'},
  {flag:'🇳🇱',name:'Netherlands',code:'+31'},{flag:'🇸🇪',name:'Sweden',code:'+46'},
  {flag:'🇦🇷',name:'Argentina',code:'+54'},{flag:'🇺🇦',name:'Ukraine',code:'+380'},
  {flag:'🇰🇿',name:'Kazakhstan',code:'+7'},{flag:'🇦🇿',name:'Azerbaijan',code:'+994'},
  {flag:'🇬🇪',name:'Georgia',code:'+995'},{flag:'🇦🇲',name:'Armenia',code:'+374'},
];

const PHONE_FORMATS = {
  '+1':  [10,v=>{let f='';if(v.length>0)f='('+v.slice(0,3);if(v.length>=4)f+=') '+v.slice(3,6);if(v.length>=7)f+='-'+v.slice(6,8);if(v.length>=9)f+='-'+v.slice(8,10);return f;},'(555) 000-0000'],
  '+44': [10,v=>{let f='';if(v.length>0)f=v.slice(0,4);if(v.length>=5)f+=' '+v.slice(4,7);if(v.length>=8)f+=' '+v.slice(7,10);return f;},'7700 900000'],
  '+49': [11,v=>{let f='';if(v.length>0)f=v.slice(0,3);if(v.length>=4)f+=' '+v.slice(3,7);if(v.length>=8)f+=' '+v.slice(7,11);return f;},'151 12345678'],
  '+33': [9, v=>{let f='';for(let i=0;i<v.length;i+=2){if(i>0)f+=' ';f+=v.slice(i,i+2);}return f;},'06 12 34 56 78'],
  '+91': [10,v=>{let f='';if(v.length>0)f=v.slice(0,5);if(v.length>=6)f+=' '+v.slice(5,10);return f;},'98765 43210'],
  '+86': [11,v=>{let f='';if(v.length>0)f=v.slice(0,3);if(v.length>=4)f+=' '+v.slice(3,7);if(v.length>=8)f+=' '+v.slice(7,11);return f;},'131 2345 6789'],
  '+81': [11,v=>{let f='';if(v.length>0)f=v.slice(0,2);if(v.length>=3)f+='-'+v.slice(2,6);if(v.length>=7)f+='-'+v.slice(6,11);return f;},'90-1234-5678'],
  '+82': [10,v=>{let f='';if(v.length>0)f=v.slice(0,3);if(v.length>=4)f+='-'+v.slice(3,7);if(v.length>=8)f+='-'+v.slice(7,10);return f;},'010-1234-5678'],
  '+7':  [10,v=>{let f='';if(v.length>0)f='('+v.slice(0,3);if(v.length>=4)f+=') '+v.slice(3,6);if(v.length>=7)f+='-'+v.slice(6,8);if(v.length>=9)f+='-'+v.slice(8,10);return f;},'(999) 123-45-67'],
  '+998':[9, v=>{let f='';if(v.length>0)f=v.slice(0,2);if(v.length>=3)f+=' '+v.slice(2,5);if(v.length>=6)f+=' '+v.slice(5,7);if(v.length>=8)f+=' '+v.slice(7,9);return f;},'90 123 45 67'],
  '+90': [10,v=>{let f='';if(v.length>0)f='('+v.slice(0,3);if(v.length>=4)f+=') '+v.slice(3,6);if(v.length>=7)f+='-'+v.slice(6,8);if(v.length>=9)f+='-'+v.slice(8,10);return f;},'(532) 123-4567'],
  '+98': [10,v=>{let f='';if(v.length>0)f=v.slice(0,3);if(v.length>=4)f+=' '+v.slice(3,7);if(v.length>=8)f+=' '+v.slice(7,10);return f;},'912 345 6789'],
  '+61': [9, v=>{let f='';if(v.length>0)f=v.slice(0,3);if(v.length>=4)f+=' '+v.slice(3,6);if(v.length>=7)f+=' '+v.slice(6,9);return f;},'412 345 678'],
  '+55': [11,v=>{let f='';if(v.length>0)f='('+v.slice(0,2);if(v.length>=3)f+=') '+v.slice(2,7);if(v.length>=8)f+='-'+v.slice(7,11);return f;},'(11) 91234-5678'],
  '+966':[9, v=>{let f='';if(v.length>0)f=v.slice(0,2);if(v.length>=3)f+=' '+v.slice(2,5);if(v.length>=6)f+=' '+v.slice(5,9);return f;},'50 123 4567'],
  '+971':[9, v=>{let f='';if(v.length>0)f=v.slice(0,2);if(v.length>=3)f+=' '+v.slice(2,5);if(v.length>=6)f+=' '+v.slice(5,9);return f;},'50 123 4567'],
  '+380':[9, v=>{let f='';if(v.length>0)f=v.slice(0,2);if(v.length>=3)f+=' '+v.slice(2,5);if(v.length>=6)f+=' '+v.slice(5,7);if(v.length>=8)f+=' '+v.slice(7,9);return f;},'50 123 45 67'],
  '+994':[9, v=>{let f='';if(v.length>0)f=v.slice(0,2);if(v.length>=3)f+=' '+v.slice(2,5);if(v.length>=6)f+=' '+v.slice(5,7);if(v.length>=8)f+=' '+v.slice(7,9);return f;},'50 123 45 67'],
  '+995':[9, v=>{let f='';if(v.length>0)f=v.slice(0,3);if(v.length>=4)f+=' '+v.slice(3,6);if(v.length>=7)f+=' '+v.slice(6,9);return f;},'555 12 34 56'],
  '+374':[8, v=>{let f='';if(v.length>0)f=v.slice(0,2);if(v.length>=3)f+=' '+v.slice(2,5);if(v.length>=6)f+=' '+v.slice(5,8);return f;},'77 123 456'],
};
function getPhoneFmt(code){return PHONE_FORMATS[code]||[12,v=>v,'000 000 0000'];}
// ─── STATE ───
let wishlist = new Set(
  JSON.parse(localStorage.getItem('wishlist') || '[]')
);
let user = null;
let selectedCountry = COUNTRIES[0];
let activeFilter = 'all';
let activeCat = 'all';
 
// ═══════════════════════════════════
// PAGE NAVIGATION
// ═══════════════════════════════════
function showPage(id){
  document.querySelectorAll('.page').forEach(p=>p.classList.remove('active'));
  document.getElementById('page-'+id).classList.add('active');
  document.querySelectorAll('.nav-links a').forEach(a=>{
    a.classList.toggle('active', a.dataset&&a.dataset.page===id);
  });
  document.getElementById('mainFooter').style.display=(id==='product')?'none':'block';
  window.scrollTo({top:0,behavior:'smooth'});
  if(id==='catalog') renderCatalog();
  if(id==='wishlist') renderWishlist();
  if(id==='home') renderHome()
  if(id==='about') renderAbout()
  if(id==='contact') renderContact()
}
 
// ═══════════════════════════════════
// RENDER HELPERS
// ═══════════════════════════════════
function renderCatGrid(elId, clickFn){
  const el=document.getElementById(elId);
  if(!el) return;
  el.innerHTML=CATEGORIES.map(c=>`
    <div class="cat-card ${activeCat===c.id?'active-cat':''}" onclick="${clickFn}('${c.id}')">
      <div class="cat-icon2">${c.icon}</div>
      <div class="cat-n">${c.name}</div>
      <div class="cat-c">${c.count} items</div>
    </div>`).join('');
}
 
function productCard(p){
  const wished = wishlist.has(p.id);
  const stockClass = p.inStock ? 'in-stock' : 'out-stock';
  const stockText  = p.inStock ? '✓ In Stock' : '✗ Out of Stock';
  return `<div class="pc" id="pc-${p.id}">
    <div class="pc-img" onclick="openProduct(${p.id})">
      <img src="${p.img}" alt="${p.name}" loading="lazy">
      <div class="pbadge badge-${p.badge}">${p.badgeText}</div>
      <div class="stock-badge ${stockClass}">${stockText}</div>
      <button class="pc-wish ${wished?'wished':''}" id="wish-${p.id}" onclick="toggleWish(${p.id},event)">
        <svg viewBox="0 0 24 24" fill="${wished?'currentColor':'none'}" stroke-width="1.5"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
      </button>
    </div>
    <div class="pc-info">
      <div class="pc-origin">${p.origin}</div>
      <div class="pc-name" onclick="openProduct(${p.id})">${p.name}</div>
      <div class="pc-meta">
        <span class="pc-rating"><span class="stars">★</span> ${p.rating} (${p.reviews})</span>
        <span class="pc-unit">1 kg</span>
      </div>
      <div class="pc-price-msg">Price available by phone</div>
      <button class="btn-call ${!p.inStock?'unavailable':''}" onclick="${p.inStock?'openCallModal('+p.id+')':'showToast(\'Currently out of stock\')'}">
        <svg viewBox="0 0 24 24" fill="none" stroke-width="1.5"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.62 3.38 2 2 0 0 1 3.6 1.21h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.85a16 16 0 0 0 6 6l.95-.95a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
        ${p.inStock ? 'Call to Order' : 'Out of Stock'}
      </button>
    </div>
  </div>`;
}
 
// ═══════════════════════════════════
// HOME
// ═══════════════════════════════════
function initHome(){
  renderCatGrid('homeCats','homeCatClick');
  const featured = PRODUCTS.filter(p=>p.inStock).slice(0,8);
  document.getElementById('homeProducts').innerHTML = featured.map(productCard).join('');
}
 
function homeCatClick(catId){
  activeCat = catId;
  showPage('catalog');
}
 
// ═══════════════════════════════════
// CATALOG
// ═══════════════════════════════════
function renderCatalog(){
  renderCatGrid('catalogCats','setCat');
  let list = [...PRODUCTS];
  if(activeCat !== 'all') list = list.filter(p=>p.cat===activeCat);
  if(activeFilter === 'instock')  list = list.filter(p=>p.inStock);
  else if(activeFilter === 'outstock') list = list.filter(p=>!p.inStock);
  else if(activeFilter !== 'all') list = list.filter(p=>p.badge===activeFilter);
  const sort = document.getElementById('sortSelect').value;
  if(sort==='rating')    list.sort((a,b)=>b.rating-a.rating);
  else if(sort==='name') list.sort((a,b)=>a.name.localeCompare(b.name));
  else if(sort==='name-desc') list.sort((a,b)=>b.name.localeCompare(a.name));
  const grid = document.getElementById('catalogProducts');
  if(!list.length){
    grid.innerHTML=`<div class="no-results"><svg viewBox="0 0 24 24" fill="none" stroke-width="1"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg><p>No products found</p></div>`;
    return;
  }
  grid.innerHTML = list.map(productCard).join('');
}
 
function setCat(id){
  activeCat = activeCat===id ? 'all' : id;
  renderCatalog();
  renderCatGrid('catalogCats','setCat');
}
 
function setFilter(val, btn){
  activeFilter = val;
  document.querySelectorAll('.filter-btn').forEach(b=>b.classList.remove('active-f'));
  btn.classList.add('active-f');
  renderCatalog();
}
 
// ═══════════════════════════════════
// PRODUCT DETAIL
// ═══════════════════════════════════
function openProduct(id){
  const p = PRODUCTS.find(x=>x.id===id);
  if(!p) return;
  const wished = wishlist.has(p.id);
  const catName = CATEGORIES.find(c=>c.id===p.cat)?.name || p.cat;
  document.getElementById('pdBreadcrumb').innerHTML=`
    <span onclick="showPage('home')">Home</span><span class="sep">›</span>
    <span onclick="showPage('catalog')">Shop</span><span class="sep">›</span>
    <span onclick="showPage('catalog');setCat('${p.cat}')">${catName}</span>
    <span class="sep">›</span><span style="color:var(--ink)">${p.name}</span>`;
  const stockDot  = p.inStock ? 'dot-green' : 'dot-red';
  const stockTxt  = p.inStock ? 'In Stock'  : 'Out of Stock';
  const stockColor= p.inStock ? 'var(--green)':'var(--red)';
  document.getElementById('pdLayout').innerHTML=`
    <div>
      <img class="pd-img-main" id="pdMainImg" src="${p.img}" alt="${p.name}">
      <div class="pd-thumbs">
        <img class="pd-thumb active-t" src="${p.img}" onclick="switchImg(this,'${p.img}')">
        <img class="pd-thumb" src="${p.img}" onclick="switchImg(this,'${p.img}')">
        <img class="pd-thumb" src="${p.img}" onclick="switchImg(this,'${p.img}')">
      </div>
    </div>
    <div class="pd-info">
      <div class="pd-origin-tag">${p.origin}</div>
      <h1 class="pd-title">${p.name}</h1>
      <div class="pd-rating-row">
        <span><span class="stars">★★★★★</span> ${p.rating}</span>
        <span>(${p.reviews} reviews)</span>
      </div>
      <div class="pd-stock-row">
        <div class="pd-stock-dot ${stockDot}"></div>
        <span class="pd-stock-txt" style="color:${stockColor}">${stockTxt}</span>
      </div>
      <div class="pd-unit-info">
        Sold per <strong>1 kg</strong> · Price available by phone
      </div>
      <p class="pd-desc">${p.desc||'Premium quality product sourced directly from trusted farms.'}</p>
      <div class="pd-call-box">
        <div class="pd-call-box-title">To order or ask for the price:</div>
        <div class="pd-call-num">
          <svg viewBox="0 0 24 24" fill="none" stroke-width="1.5"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.62 3.38 2 2 0 0 1 3.6 1.21h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.85a16 16 0 0 0 6 6l.95-.95a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
          +998 91 530 93 90
        </div>
        <div class="pd-call-hint">Mon–Sat, 9am–7pm · We'll give you today's price immediately</div>
      </div>
      <div class="pd-btn-row">
        <button class="pd-add-btn ${!p.inStock?'unavail':''}" onclick="${p.inStock?'openCallModal('+p.id+')':'showToast(\'Currently out of stock\')'}">
          <svg viewBox="0 0 24 24" fill="none" stroke-width="1.5" style="width:16px;height:16px;stroke:#fff"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.62 3.38 2 2 0 0 1 3.6 1.21h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.85a16 16 0 0 0 6 6l.95-.95a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
          ${p.inStock ? 'Call to Order' : 'Out of Stock'}
        </button>
        <button class="pd-wish-btn ${wished?'on':''}" id="pdWishBtn" onclick="toggleWish(${p.id},null,true)">
          <svg viewBox="0 0 24 24" fill="${wished?'var(--red)':'none'}" stroke-width="1.5"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
        </button>
      </div>
      <div class="pd-divider"></div>
      <div class="pd-facts">
        <div class="pd-fact"><div class="pdf-val">${p.protein||'—'}</div><div class="pdf-lbl">Protein / 100g</div></div>
        <div class="pd-fact"><div class="pdf-val">${p.fiber||'—'}</div><div class="pdf-lbl">Fiber / 100g</div></div>
        <div class="pd-fact"><div class="pdf-val">1 kg</div><div class="pdf-lbl">Unit size</div></div>
      </div>
      <div class="pd-tags">
        <span class="pd-tag">Non-GMO</span>
        <span class="pd-tag">No additives</span>
        <span class="pd-tag">${p.origin}</span>
        ${p.badge==='eco'?'<span class="pd-tag" style="background:var(--acl);border-color:var(--accent);color:var(--accent)">Organic</span>':''}
      </div>
    </div>`;
  const related = PRODUCTS.filter(x=>x.cat===p.cat&&x.id!==p.id).slice(0,4);
  document.getElementById('relatedProducts').innerHTML = related.map(productCard).join('');
  showPage('product');
}
 
function switchImg(thumb, src){
  document.getElementById('pdMainImg').src = src;
  document.querySelectorAll('.pd-thumb').forEach(t=>t.classList.remove('active-t'));
  thumb.classList.add('active-t');
}
 
// ═══════════════════════════════════
// WISHLIST
// ═══════════════════════════════════
function toggleWish(id, event, fromDetail=false){
  if(event) event.stopPropagation();
  if(wishlist.has(id)){ wishlist.delete(id); showToast('Removed from wishlist'); }
  else { wishlist.add(id); showToast('Added to wishlist ♥'); }
  updateWishBadge();
  const btn = document.getElementById('wish-'+id);
  if(btn){
    btn.classList.toggle('wished', wishlist.has(id));
    btn.querySelector('svg').setAttribute('fill', wishlist.has(id)?'currentColor':'none');
  }
  if(fromDetail){
    const wb = document.getElementById('pdWishBtn');
    if(wb){
      wb.classList.toggle('on', wishlist.has(id));
      wb.querySelector('svg').setAttribute('fill', wishlist.has(id)?'var(--red)':'none');
    }
  }
  // refresh wishlist page if open
  if(document.getElementById('page-wishlist').classList.contains('active')) renderWishlist();
}
 localStorage.setItem(
  'wishlist',
  JSON.stringify([...wishlist])
);
function updateWishBadge(){
  const b = document.getElementById('wishBadge');
  b.style.display = wishlist.size > 0 ? 'flex' : 'none';
  b.textContent = wishlist.size;
}
 
function renderWishlist(){
  const el = document.getElementById('wishlistProducts');
  if(wishlist.size === 0){
    el.innerHTML=`<div class="empty-state">
      <svg viewBox="0 0 24 24" fill="none" stroke-width="1"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
      <h2>Your wishlist is empty</h2>
      <p>Click the heart on any product to save it here</p>
    </div>`;
    return;
  }
  el.innerHTML = PRODUCTS.filter(p=>wishlist.has(p.id)).map(productCard).join('');
}
 
// ═══════════════════════════════════
// SEARCH
// ═══════════════════════════════════
function handleSearch(val){
  const drop = document.getElementById('searchDrop');
  if(!val.trim()){ drop.classList.remove('open'); return; }
  const q = val.toLowerCase();
  const matches = PRODUCTS.filter(p=>
    p.name.toLowerCase().includes(q) ||
    p.origin.toLowerCase().includes(q) ||
    p.cat.toLowerCase().includes(q)
  ).slice(0,6);
  if(!matches.length){
    drop.innerHTML=`<div class="sr-none">No products found</div>`;
  } else {
    drop.innerHTML = matches.map(p=>`
      <div class="sr-item" onclick="openProduct(${p.id});closeSearchDrop();document.getElementById('searchInput').value=''">
        <img src="${p.img}" alt="${p.name}">
        <div>
          <div class="sr-item-name">${p.name}</div>
          <div class="sr-item-meta">${p.origin} · 1 kg · ${p.inStock?'<span style="color:var(--green)">In Stock</span>':'<span style="color:var(--red)">Out of Stock</span>'}</div>
        </div>
      </div>`).join('');
  }
  drop.classList.add('open');
}
function openSearchDrop(){ if(document.getElementById('searchInput').value.trim()) document.getElementById('searchDrop').classList.add('open'); }
function closeSearchDrop(){ document.getElementById('searchDrop').classList.remove('open'); }
 
// ═══════════════════════════════════
// CALL MODAL
// ═══════════════════════════════════
function openCallModal(id){
  const p = PRODUCTS.find(x=>x.id===id);
  document.getElementById('callModalProd').textContent = p ? 'You are enquiring about: '+p.name : '';
  document.getElementById('callOverlay').classList.add('open');
}
function closeCallModal(){ document.getElementById('callOverlay').classList.remove('open'); }
function copyPhone(){
  navigator.clipboard.writeText('+99891539390').then(()=>showToast('Number copied!')).catch(()=>showToast('+99891539390'));
}
document.getElementById('callOverlay').addEventListener('click',e=>{ if(e.target===document.getElementById('callOverlay')) closeCallModal(); });
 

 
// ═══════════════════════════════════
// COUNTRY SELECTOR
// ═══════════════════════════════════
function renderCountryList(filter=''){
  const list = COUNTRIES.filter(c=>c.name.toLowerCase().includes(filter.toLowerCase())||c.code.includes(filter));
  document.getElementById('countryList').innerHTML = list.map(c=>`
    <div class="copt" onclick="selectCountry('${c.flag}','${c.name}','${c.code}')">
      <span>${c.flag}</span>
      <span class="copt-name">${c.name}</span>
      <span class="copt-code">${c.code}</span>
    </div>`).join('');
}
 
function toggleCountryDrop(e){
  e.stopPropagation();
  const drop = document.getElementById('countryDrop');
  drop.classList.toggle('open');
  if(drop.classList.contains('open')){
    renderCountryList();
    document.getElementById('countrySearch').value='';
    setTimeout(()=>document.getElementById('countrySearch').focus(),50);
  }
}
function filterCountries(val){ renderCountryList(val); }
 
function selectCountry(flag,name,code){
  selectedCountry = {flag,name,code};
  document.getElementById('selFlag').textContent = flag;
  document.getElementById('selCode').textContent = code;
  document.getElementById('countryDrop').classList.remove('open');
  // update placeholder
  const [,, ph] = getPhoneFmt(code);
  document.getElementById('phoneInput').placeholder = ph;
  document.getElementById('phoneInput').value = '';
  document.getElementById('phoneInput').focus();
}
 
document.addEventListener('click',e=>{
  if(!document.getElementById('countrySel').contains(e.target))
    document.getElementById('countryDrop').classList.remove('open');
});
 
// ═══════════════════════════════════
// MOBILE MENU
// ═══════════════════════════════════
let mobileMenuOpen = false;
 
function toggleMobileMenu(){
  mobileMenuOpen ? closeMobileMenu() : openMobileMenu();
}
function openMobileMenu(){
  mobileMenuOpen = true;
  document.getElementById('mobileMenu').classList.add('open');
  document.getElementById('mobileMenuOverlay').classList.add('open');
  document.getElementById('hamburger').classList.add('open');
  document.body.style.overflow = 'hidden';
  updateMobileAuthArea();
}
function closeMobileMenu(){
  mobileMenuOpen = false;
  document.getElementById('mobileMenu').classList.remove('open');
  document.getElementById('mobileMenuOverlay').classList.remove('open');
  document.getElementById('hamburger').classList.remove('open');
  document.body.style.overflow = '';
}
function updateMobileAuthArea(){
  const el = document.getElementById('mobileAuthArea');
  if(!el) return;
  if(user){
    el.innerHTML=`<div style="display:flex;align-items:center;gap:10px;padding:14px 0;border-top:1px solid var(--paper3)">
      <div style="width:36px;height:36px;border-radius:50%;background:var(--acl);display:flex;align-items:center;justify-content:center;font-family:'Playfair Display',serif;font-size:15px;font-weight:700;color:var(--accent)">${user.name.slice(0,2).toUpperCase()}</div>
      <span style="font-size:14px;color:var(--ink2);flex:1">${user.name}</span>
      <button onclick="askLogout();closeMobileMenu()" style="background:none;border:1px solid var(--paper3);padding:6px 12px;font-family:'Jost',sans-serif;font-size:11px;color:var(--ink3);cursor:pointer;letter-spacing:.05em;text-transform:uppercase">Sign Out</button>
    </div>`;
  } else {
    el.innerHTML=`<button onclick="openAuth();closeMobileMenu()" style="width:100%;padding:14px;background:var(--ink);color:var(--paper);border:none;cursor:pointer;font-family:'Jost',sans-serif;font-size:12px;letter-spacing:.08em;text-transform:uppercase;display:flex;align-items:center;justify-content:center;gap:8px">
      <svg viewBox="0 0 24 24" fill="none" stroke-width="1.5" style="width:16px;height:16px;stroke:#fff"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
      Sign In
    </button>`;
  }
}
 
// Mobile search
function handleMobileSearch(val){
  const drop = document.getElementById('mobileSearchDrop');
  if(!val.trim()){ drop.classList.remove('open'); return; }
  const q = val.toLowerCase();
  const matches = PRODUCTS.filter(p=>
    p.name.toLowerCase().includes(q)||p.origin.toLowerCase().includes(q)||p.cat.toLowerCase().includes(q)
  ).slice(0,5);
  if(!matches.length){
    drop.innerHTML=`<div class="sr-none">No products found</div>`;
  } else {
    drop.innerHTML = matches.map(p=>`
      <div class="sr-item" onclick="openProduct(${p.id});closeMobileSearchDrop();this.closest('.mobile-search').querySelector('input').value=''">
        <img src="${p.img}" alt="${p.name}">
        <div>
          <div class="sr-item-name">${p.name}</div>
          <div class="sr-item-meta">${p.origin} · ${p.inStock?'<span style="color:var(--green)">In Stock</span>':'<span style="color:var(--red)">Out of Stock</span>'}</div>
        </div>
      </div>`).join('');
  }
  drop.classList.add('open');
}
function openMobileSearchDrop(){
  const inp = document.querySelector('.mobile-search input');
  if(inp && inp.value.trim()) document.getElementById('mobileSearchDrop').classList.add('open');
}
function closeMobileSearchDrop(){ document.getElementById('mobileSearchDrop').classList.remove('open'); }
 
// ═══════════════════════════════════
// TOAST
// ═══════════════════════════════════
let toastTmr;
function showToast(msg){
  clearTimeout(toastTmr);
  document.getElementById('toastMsg').textContent = msg;
  document.getElementById('toast').classList.add('show');
  toastTmr = setTimeout(()=>document.getElementById('toast').classList.remove('show'), 2800);
}
 
// ═══════════════════════════════════
// INIT
// ═══════════════════════════════════
// Patch showPage to also update mobile nav
const _origShowPage = showPage;
// redefine to also update mobile nav links
function originalshowPage(id){
  document.querySelectorAll('.page').forEach(p=>p.classList.remove('active'));
  document.getElementById('page-'+id).classList.add('active');
  document.querySelectorAll('.nav-links a').forEach(a=>{
    a.classList.toggle('active', a.dataset&&a.dataset.page===id);
  });
  document.querySelectorAll('.mobile-menu-nav a').forEach(a=>{
    a.classList.toggle('active', a.dataset&&a.dataset.mpage===id);
  });
  document.getElementById('mainFooter').style.display=(id==='product')?'none':'block';
  window.scrollTo({top:0,behavior:'smooth'});
  if(id==='catalog') renderCatalog();
  if(id==='wishlist') renderWishlist();
}

 
// Patch updateWishBadge to also refresh mobile count
const _origUpdateWishBadge = updateWishBadge;
function updateWishBadge(){
  _origUpdateWishBadge();
  const mc = document.getElementById('mobileWishCount');
  if(mc){
    mc.style.display = wishlist.size > 0 ? 'inline' : 'none';
    mc.textContent = '('+wishlist.size+')';
  }
}
 
initHome();
renderCountryList();
updateMobileAuthArea();
// ═══════════════════════════════════
// DYNAMIC SEO
// ═══════════════════════════════════


function setMeta(title, desc, url, img){
  document.title = title;
  setTag('meta[name="description"]',        'content', desc);
  setTag('meta[property="og:title"]',       'content', title);
  setTag('meta[property="og:description"]', 'content', desc);
  setTag('meta[property="og:url"]',         'content', url || BASE_URL);
  setTag('meta[property="og:image"]',       'content', img || BASE_IMG);
  setTag('meta[name="twitter:title"]',      'content', title);
  setTag('meta[name="twitter:description"]','content', desc);
  setTag('meta[name="twitter:image"]',      'content', img || BASE_IMG);
  const can = document.querySelector('link[rel="canonical"]');
  if(can) can.href = url || BASE_URL;
}
function setTag(sel, attr, val){
  const el = document.querySelector(sel);
  if(el) el.setAttribute(attr, val);
}

function showPage(id){
  originalshowPage(id);

  if(id==='home'){
    setMeta(BASE_TITLE, BASE_DESC, BASE_URL, BASE_IMG);

  } else if(id==='catalog'){
    const CAT = {
      'legumes':'Legumes',
      'dried-fruits':'Dried Fruits',
      'grains':'Grains',
      'nuts':'Nuts',
      'seeds':'Seeds',
      'herbs':'Herbs',
      'spices':'Spices',
      'superfoods':'Superfoods'
    };

    const cat = activeCat !== 'all' ? CAT[activeCat] : null;

    setMeta(
      cat
        ? `Buy ${cat} — 1 kg | BEANS Store`
        : 'Shop All Dry Goods | BEANS Store',
      cat
        ? `Browse organic ${cat.toLowerCase()} sold per 1 kg. Call +998-91-530-93-90 for price.`
        : 'Browse 400+ dry goods: legumes, fruits, nuts, grains. All per 1 kg.',
      BASE_URL + '#shop'
    );

  } else if(id==='about'){
    setMeta(
      'About BEANS — Our Story',
      'BEANS — premium dry goods from trusted farms worldwide. 400+ products.',
      BASE_URL + '#about'
    );

  } else if(id==='contact'){
    setMeta(
      'Contact BEANS — +998-91-530-93-90',
      'Call us for prices and orders. 12/7.',
      BASE_URL + '#contact'
    );
  }
}

const __openProduct = openProduct;
function openProduct(id){
  __openProduct(id);
  const p = PRODUCTS.find(x=>x.id===id);
  if(!p) return;
  const catName = CATEGORIES.find(c=>c.id===p.cat)?.name || p.cat;
  setMeta(
    `${p.name} — ${catName} · 1 kg | BEANS Store`,
    `${p.name} from ${p.origin}. ${p.desc?p.desc.slice(0,120)+'...':''} Sold per 1 kg. Call: +998-91-530-93-90.`,
    `${BASE_URL}#product-${p.id}`,
    p.img
  );
  let sc = document.getElementById('dynamic-product-schema');
  if(!sc){ sc=document.createElement('script'); sc.type='application/ld+json'; sc.id='dynamic-product-schema'; document.head.appendChild(sc); }
  sc.textContent = JSON.stringify({
    "@context":"https://schema.org","@type":"Product",
    "name":p.name,"image":p.img,"description":p.desc||p.name,
    "brand":{"@type":"Brand","name":"BEANS Store"},
    "offers":{"@type":"Offer","priceCurrency":"USD",
      "availability":p.inStock?"https://schema.org/InStock":"https://schema.org/OutOfStock",
      "url":BASE_URL+'#product-'+p.id,
      "seller":{"@type":"Organization","name":"BEANS Store","telephone":"+998-91-530-93-90"}
    },
    "aggregateRating":{"@type":"AggregateRating","ratingValue":p.rating,"reviewCount":p.reviews,"bestRating":"5","worstRating":"1"},
    "nutrition":{"@type":"NutritionInformation","servingSize":"100g","proteinContent":p.protein||"","fiberContent":p.fiber||""}
  });
}
// ═══════════════════════════════════
// TRANSLATIONS
// ═══════════════════════════════════
const LANGS = [
  {code:'en', flag:'🇺🇸', name:'English',    native:'English',    dir:'ltr'},
  {code:'ru', flag:'🇷🇺', name:'Russian',    native:'Русский',    dir:'ltr'},
  {code:'uz', flag:'🇺🇿', name:'Uzbek',      native:"O'zbek",     dir:'ltr'},
  {code:'zh', flag:'🇨🇳', name:'Chinese',    native:'中文',        dir:'ltr'},
  {code:'ar', flag:'🇸🇦', name:'Arabic',     native:'العربية',    dir:'rtl'},
  {code:'tr', flag:'🇹🇷', name:'Turkish',    native:'Türkçe',     dir:'ltr'},
  {code:'de', flag:'🇩🇪', name:'German',     native:'Deutsch',    dir:'ltr'},
  {code:'fr', flag:'🇫🇷', name:'French',     native:'Français',   dir:'ltr'},
  {code:'es', flag:'🇪🇸', name:'Spanish',    native:'Español',    dir:'ltr'},
  {code:'hi', flag:'🇮🇳', name:'Hindi',      native:'हिन्दी',      dir:'ltr'},
  {code:'pt', flag:'🇧🇷', name:'Portuguese', native:'Português',  dir:'ltr'},
  {code:'ko', flag:'🇰🇷', name:'Korean',     native:'한국어',       dir:'ltr'},
  {code:'ja', flag:'🇯🇵', name:'Japanese',   native:'日本語',       dir:'ltr'},
];

const T = {
  en: {
    nav_home:'Home', nav_shop:'Shop', nav_wishlist:'Wishlist', nav_about:'About', nav_contact:'Contact',
    signin:'Sign In', signout:'Sign Out',
    hero_eyebrow:'Natural Products · Direct from Farms',
    hero_title:'Grains, Beans\n& Dried Fruits',
    hero_title_em:'Dried Fruits',
    hero_p:'Premium legumes, dried fruits, nuts and grains sourced directly from trusted farms worldwide. Pure, organic, chemical-free. Sold per 1 kg.',
    hero_call_label:'To find out prices and place an order, call us:',
    hero_btn_browse:'Browse Products', hero_btn_about:'Our Story',
    stat_products:'Products', stat_farmers:'Farmers', stat_rating:'Rating',
    cats_title:'Browse', cats_em:'Categories', cats_all:'All categories',
    feat_title:'Featured', feat_em:'Products', feat_all:'View all',
    call_title:'Want to know the', call_em:'price?',
    call_desc:'All our products are sold at market prices that change regularly. Call us to get today\'s price, check availability and place your order.',
    call_label:'Call to order · Mon–Sat 9am–7pm',
    call_or:'or', call_msg:'Send a Message',
    price_msg:'Price available by phone',
    unit:'1 kg',
    btn_call:'Call to Order', btn_outstock:'Out of Stock',
    in_stock:'✓ In Stock', out_stock:'✗ Out of Stock',
    shop_title:'All Products', shop_sub:'All items sold per 1 kg · Call for price:',
    filter_all:'All', filter_new:'New Arrivals', filter_eco:'Organic', filter_hot:'Best Sellers', filter_in:'In Stock', filter_out:'Out of Stock',
    sort_default:'Sort: Default', sort_rating:'Top Rated', sort_az:'A → Z', sort_za:'Z → A',
    about_title:'We believe in', about_em:'real food',
    contact_title:'Contact', contact_em:'Us',
    contact_call_label:'Call to order / ask about prices',
    contact_hours:'Mon–Sat · 9:00am – 7:00pm',
    wishlist_title:'My Wishlist', wishlist_sub:'Products you\'ve saved',
    wishlist_empty_h:'Your wishlist is empty', wishlist_empty_p:'Click the heart on any product to save it here',
    footer_desc:'Premium dry goods marketplace. Beans, legumes, dried fruits, nuts and grains. All sold per 1 kg at market prices.',
    footer_shop:'Shop', footer_cats:'Categories', footer_info:'Info',
    footer_copy:'© 2025 BEANS. All rights reserved.',
    footer_price:'All prices by phone:',
    call_modal_title:'Place an Order',
    call_modal_hint:'Call us to find out today\'s price and place your order. All products are sold per 1 kg. We work Mon–Sat, 9am–7pm.',
    copy_number:'Copy number',
    logout_title:'Sign Out?', logout_msg:'Are you sure you want to sign out of your account?',
    logout_cancel:'Cancel', logout_yes:'Yes, Sign Out',
    contact_bar_ship:'Free shipping on orders over $30',
    contact_bar_new:'New customer discount:',
    promo_unit:'Sold per 1 kg',
    signin_sub:'Enter your phone number — we\'ll send a verification code',
    signin_label:'Phone Number',
    signin_btn:'Get Verification Code',
    otp_sub:'Code sent to', otp_sub2:'. Enter the 4-digit code:',
    otp_btn:'Verify Code',
    resend_in:'Resend in', resend_link:'Resend code',
    change_num:'← Change number',
    name_sub:'Almost there — what\'s your name?',
    name_label:'Your Name', name_ph:'Enter your name',
    name_btn:'Finish & Enter Store',
    welcome:'Welcome!', welcome_sub:'You\'re now signed in to BEANS',
    no_results:'No products found',
  },
  ru: {
    nav_home:'Главная', nav_shop:'Магазин', nav_wishlist:'Избранное', nav_about:'О нас', nav_contact:'Контакты',
    signin:'Войти', signout:'Выйти',
    hero_eyebrow:'Натуральные продукты · Прямые поставки',
    hero_title:'Крупы, бобовые\nи сухофрукты',
    hero_title_em:'сухофрукты',
    hero_p:'Бобовые, сухофрукты, орехи и крупы напрямую от проверенных фермеров по всему миру. Чисто, органично, без химии. Продаётся по 1 кг.',
    hero_call_label:'Узнать цены и сделать заказ — позвоните нам:',
    hero_btn_browse:'Смотреть каталог', hero_btn_about:'О нас',
    stat_products:'Товаров', stat_farmers:'Поставщиков', stat_rating:'Рейтинг',
    cats_title:'Категории', cats_em:'товаров', cats_all:'Все категории',
    feat_title:'Популярные', feat_em:'товары', feat_all:'Смотреть все',
    call_title:'Хотите узнать', call_em:'цену?',
    call_desc:'Все товары продаются по рыночным ценам, которые меняются. Позвоните нам — назовём сегодняшнюю цену, проверим наличие и оформим заказ.',
    call_label:'Звонки Пн–Сб 9:00–19:00',
    call_or:'или', call_msg:'Написать нам',
    price_msg:'Цена по звонку',
    unit:'1 кг',
    btn_call:'Позвонить и заказать', btn_outstock:'Нет в наличии',
    in_stock:'✓ В наличии', out_stock:'✗ Нет в наличии',
    shop_title:'Все товары', shop_sub:'Продаётся по 1 кг · Цена по звонку:',
    filter_all:'Все', filter_new:'Новинки', filter_eco:'Органик', filter_hot:'Хиты', filter_in:'В наличии', filter_out:'Нет в наличии',
    sort_default:'Сортировка', sort_rating:'По рейтингу', sort_az:'А → Я', sort_za:'Я → А',
    about_title:'Мы верим в', about_em:'настоящую еду',
    contact_title:'Свяжитесь', contact_em:'с нами',
    contact_call_label:'Позвонить для заказа / узнать цены',
    contact_hours:'Пн–Сб · 9:00 – 19:00',
    wishlist_title:'Избранное', wishlist_sub:'Сохранённые товары',
    wishlist_empty_h:'Избранное пусто', wishlist_empty_p:'Нажмите на сердечко на любом товаре',
    footer_desc:'Маркетплейс натуральных сухих продуктов. Бобовые, сухофрукты, орехи и крупы. Всё по 1 кг по рыночным ценам.',
    footer_shop:'Магазин', footer_cats:'Категории', footer_info:'Компания',
    footer_copy:'© 2025 BEANS. Все права защищены.',
    footer_price:'Цены по телефону:',
    call_modal_title:'Оформить заказ',
    call_modal_hint:'Позвоните нам, чтобы узнать сегодняшнюю цену и сделать заказ. Все товары по 1 кг. Пн–Сб, 9:00–19:00.',
    copy_number:'Скопировать номер',
    logout_title:'Выйти?', logout_msg:'Вы уверены, что хотите выйти из аккаунта?',
    logout_cancel:'Отмена', logout_yes:'Да, выйти',
    contact_bar_ship:'Бесплатная доставка от $30',
    contact_bar_new:'Скидка новым покупателям:',
    promo_unit:'Продаётся по 1 кг',
    signin_sub:'Введите номер телефона — мы отправим код подтверждения',
    signin_label:'Номер телефона',
    signin_btn:'Получить код',
    otp_sub:'Код отправлен на', otp_sub2:'. Введите 4 цифры:',
    otp_btn:'Подтвердить',
    resend_in:'Отправить повторно через', resend_link:'Отправить снова',
    change_num:'← Изменить номер',
    name_sub:'Почти готово — как вас зовут?',
    name_label:'Ваше имя', name_ph:'Введите имя',
    name_btn:'Готово, войти',
    welcome:'Добро пожаловать!', welcome_sub:'Вы успешно вошли в BEANS',
    no_results:'Товары не найдены',
  },
  uz: {
    nav_home:"Bosh sahifa", nav_shop:"Do'kon", nav_wishlist:"Sevimlilar", nav_about:"Biz haqimizda", nav_contact:"Aloqa",
    signin:"Kirish", signout:"Chiqish",
    hero_eyebrow:"Tabiiy mahsulotlar · To'g'ridan-to'g'ri fermalardan",
    hero_title:"Don, dukkaklilar\nva quritilgan mevalar",
    hero_title_em:"quritilgan mevalar",
    hero_p:"Butun dunyo bo'ylab ishonchli fermalardan keltirilgan dukkaklilar, quritilgan mevalar, yong'oqlar va donlar. Toza, organik, kimyosiz. 1 kg sotiladi.",
    hero_call_label:"Narxlarni bilish va buyurtma berish uchun qo'ng'iroq qiling:",
    hero_btn_browse:"Katalogni ko'rish", hero_btn_about:"Biz haqimizda",
    stat_products:"Mahsulotlar", stat_farmers:"Ta'minotchilar", stat_rating:"Reyting",
    cats_title:"Ko'rib chiqing", cats_em:"Kategoriyalar", cats_all:"Barcha kategoriyalar",
    feat_title:"Mashhur", feat_em:"mahsulotlar", feat_all:"Hammasini ko'rish",
    call_title:"Narxni bilmoqchimisiz?", call_em:"",
    call_desc:"Barcha mahsulotlar o'zgarib turuvchi bozor narxlarida sotiladi. Bugungi narxni bilish va buyurtma berish uchun qo'ng'iroq qiling.",
    call_label:"Qo'ng'iroqlar Du–Sha 9:00–19:00",
    call_or:"yoki", call_msg:"Xabar yuborish",
    price_msg:"Narx qo'ng'iroq orqali",
    unit:"1 kg",
    btn_call:"Buyurtma berish", btn_outstock:"Mavjud emas",
    in_stock:"✓ Mavjud", out_stock:"✗ Mavjud emas",
    shop_title:"Barcha mahsulotlar", shop_sub:"1 kg sotiladi · Narx uchun qo'ng'iroq qiling:",
    filter_all:"Hammasi", filter_new:"Yangilar", filter_eco:"Organik", filter_hot:"Eng ko'p sotilgan", filter_in:"Mavjud", filter_out:"Mavjud emas",
    sort_default:"Saralash", sort_rating:"Reyting bo'yicha", sort_az:"A → Z", sort_za:"Z → A",
    about_title:"Biz ishonamiz", about_em:"haqiqiy ovqatga",
    contact_title:"Biz bilan", contact_em:"bog'laning",
    contact_call_label:"Buyurtma berish / narx so'rash uchun qo'ng'iroq",
    contact_hours:"Du–Sha · 9:00 – 19:00",
    wishlist_title:"Sevimlilar", wishlist_sub:"Saqlangan mahsulotlar",
    wishlist_empty_h:"Sevimlilar bo'sh", wishlist_empty_p:"Mahsulotdagi yurakchani bosib saqlang",
    footer_desc:"Tabiiy quruq mahsulotlar bozori. Dukkaklilar, quritilgan mevalar, yong'oqlar. 1 kg sotiladi.",
    footer_shop:"Do'kon", footer_cats:"Kategoriyalar", footer_info:"Kompaniya",
    footer_copy:"© 2025 BEANS. Barcha huquqlar himoyalangan.",
    footer_price:"Narxlar telefon orqali:",
    call_modal_title:"Buyurtma berish",
    call_modal_hint:"Bugungi narxni bilish va buyurtma berish uchun qo'ng'iroq qiling. Barcha mahsulotlar 1 kg sotiladi. Du–Sha, 9:00–19:00.",
    copy_number:"Raqamni nusxalash",
    logout_title:"Chiqishni xohlaysizmi?", logout_msg:"Hisobdan chiqishni tasdiqlaysizmi?",
    logout_cancel:"Bekor qilish", logout_yes:"Ha, chiqish",
    contact_bar_ship:"$30 dan ortiq buyurtmalarda bepul yetkazib berish",
    contact_bar_new:"Yangi xaridorlar uchun chegirma:",
    promo_unit:"1 kg sotiladi",
    signin_sub:"Telefon raqamingizni kiriting — tasdiqlash kodi yuboramiz",
    signin_label:"Telefon raqami",
    signin_btn:"Kod olish",
    otp_sub:"Kod yuborildi", otp_sub2:". 4 raqamni kiriting:",
    otp_btn:"Tasdiqlash",
    resend_in:"Qayta yuborish:", resend_link:"Kodni qayta yuborish",
    change_num:"← Raqamni o'zgartirish",
    name_sub:"Deyarli tayyor — ismingiz nima?",
    name_label:"Ismingiz", name_ph:"Ismingizni kiriting",
    name_btn:"Tayyor, kirish",
    welcome:"Xush kelibsiz!", welcome_sub:"BEANS ga muvaffaqiyatli kirdingiz",
    no_results:"Mahsulotlar topilmadi",
  },
  zh: {
    nav_home:'首页', nav_shop:'商店', nav_wishlist:'收藏', nav_about:'关于我们', nav_contact:'联系我们',
    signin:'登录', signout:'退出',
    hero_eyebrow:'天然产品 · 直接来自农场',
    hero_title:'谷物、豆类\n与干果',
    hero_title_em:'干果',
    hero_p:'来自全球可信农场的优质豆类、干果、坚果和谷物。纯天然、有机、无化学添加。每1公斤出售。',
    hero_call_label:'了解价格并下订单，请致电：',
    hero_btn_browse:'浏览产品', hero_btn_about:'我们的故事',
    stat_products:'产品', stat_farmers:'供应商', stat_rating:'评分',
    cats_title:'浏览', cats_em:'分类', cats_all:'所有分类',
    feat_title:'精选', feat_em:'产品', feat_all:'查看全部',
    call_title:'想了解', call_em:'价格？',
    call_desc:'所有产品按市场价格销售，价格每日变动。致电我们获取今日价格、确认库存并下单。',
    call_label:'周一至周六 9:00–19:00',
    call_or:'或', call_msg:'发送消息',
    price_msg:'价格请致电查询',
    unit:'1公斤',
    btn_call:'致电订购', btn_outstock:'缺货',
    in_stock:'✓ 有货', out_stock:'✗ 缺货',
    shop_title:'全部产品', shop_sub:'每1公斤出售 · 价格致电:',
    filter_all:'全部', filter_new:'新品', filter_eco:'有机', filter_hot:'畅销', filter_in:'有货', filter_out:'缺货',
    sort_default:'排序', sort_rating:'按评分', sort_az:'A → Z', sort_za:'Z → A',
    about_title:'我们相信', about_em:'真实的食物',
    contact_title:'联系', contact_em:'我们',
    contact_call_label:'致电订购 / 询问价格',
    contact_hours:'周一至周六 · 9:00 – 19:00',
    wishlist_title:'我的收藏', wishlist_sub:'已保存的产品',
    wishlist_empty_h:'收藏夹为空', wishlist_empty_p:'点击产品上的心形图标保存',
    footer_desc:'优质干货市场。豆类、干果、坚果和谷物。全部按每公斤销售。',
    footer_shop:'商店', footer_cats:'分类', footer_info:'公司',
    footer_copy:'© 2025 BEANS. 版权所有。',
    footer_price:'价格请致电:',
    call_modal_title:'下订单',
    call_modal_hint:'致电了解今日价格并下单。所有产品每1公斤出售。周一至周六，9:00–19:00。',
    copy_number:'复制号码',
    logout_title:'退出登录？', logout_msg:'确定要退出账号吗？',
    logout_cancel:'取消', logout_yes:'是的，退出',
    contact_bar_ship:'订单满$30免费配送',
    contact_bar_new:'新客户优惠码:',
    promo_unit:'每1公斤出售',
    signin_sub:'输入您的手机号码 — 我们将发送验证码',
    signin_label:'手机号码',
    signin_btn:'获取验证码',
    otp_sub:'验证码已发送至', otp_sub2:'。请输入4位数字:',
    otp_btn:'验证',
    resend_in:'重新发送倒计时', resend_link:'重新发送验证码',
    change_num:'← 更改号码',
    name_sub:'最后一步 — 您叫什么名字？',
    name_label:'您的姓名', name_ph:'请输入您的姓名',
    name_btn:'完成，进入商店',
    welcome:'欢迎！', welcome_sub:'您已成功登录BEANS',
    no_results:'未找到产品',
  },
  ar: {
    nav_home:'الرئيسية', nav_shop:'المتجر', nav_wishlist:'المفضلة', nav_about:'عن المتجر', nav_contact:'اتصل بنا',
    signin:'تسجيل الدخول', signout:'تسجيل الخروج',
    hero_eyebrow:'منتجات طبيعية · مباشرة من المزارع',
    hero_title:'حبوب وبقوليات\nوفواكه مجففة',
    hero_title_em:'وفواكه مجففة',
    hero_p:'بقوليات فاخرة وفواكه مجففة ومكسرات وحبوب من مزارع موثوقة حول العالم. نقية وعضوية وخالية من المواد الكيميائية. تُباع بكيلو واحد.',
    hero_call_label:'لمعرفة الأسعار وتقديم الطلب، اتصل بنا:',
    hero_btn_browse:'تصفح المنتجات', hero_btn_about:'قصتنا',
    stat_products:'منتج', stat_farmers:'مورد', stat_rating:'التقييم',
    cats_title:'تصفح', cats_em:'الفئات', cats_all:'جميع الفئات',
    feat_title:'منتجات', feat_em:'مميزة', feat_all:'عرض الكل',
    call_title:'هل تريد معرفة', call_em:'السعر؟',
    call_desc:'تُباع جميع منتجاتنا بأسعار السوق التي تتغير يومياً. اتصل بنا للحصول على سعر اليوم والطلب.',
    call_label:'الاتصال الإثنين–السبت 9:00–19:00',
    call_or:'أو', call_msg:'أرسل رسالة',
    price_msg:'السعر متاح عبر الهاتف',
    unit:'١ كجم',
    btn_call:'اتصل للطلب', btn_outstock:'غير متوفر',
    in_stock:'✓ متوفر', out_stock:'✗ غير متوفر',
    shop_title:'جميع المنتجات', shop_sub:'تُباع بكيلو واحد · اتصل للسعر:',
    filter_all:'الكل', filter_new:'الجديد', filter_eco:'عضوي', filter_hot:'الأكثر مبيعاً', filter_in:'متوفر', filter_out:'غير متوفر',
    sort_default:'ترتيب', sort_rating:'الأعلى تقييماً', sort_az:'أ → ي', sort_za:'ي → أ',
    about_title:'نؤمن بـ', about_em:'الطعام الحقيقي',
    contact_title:'تواصل', contact_em:'معنا',
    contact_call_label:'اتصل للطلب / السؤال عن الأسعار',
    contact_hours:'الإثنين–السبت · 9:00 – 19:00',
    wishlist_title:'المفضلة', wishlist_sub:'المنتجات المحفوظة',
    wishlist_empty_h:'قائمة المفضلة فارغة', wishlist_empty_p:'انقر على القلب في أي منتج لحفظه',
    footer_desc:'سوق المنتجات الجافة الفاخرة. بقوليات وفواكه مجففة ومكسرات. كل شيء يُباع بكيلو واحد.',
    footer_shop:'المتجر', footer_cats:'الفئات', footer_info:'الشركة',
    footer_copy:'© 2025 BEANS. جميع الحقوق محفوظة.',
    footer_price:'الأسعار عبر الهاتف:',
    call_modal_title:'تقديم طلب',
    call_modal_hint:'اتصل بنا لمعرفة سعر اليوم وتقديم طلبك. جميع المنتجات تُباع بكيلو. الإثنين–السبت، 9:00–19:00.',
    copy_number:'نسخ الرقم',
    logout_title:'تسجيل الخروج؟', logout_msg:'هل أنت متأكد أنك تريد الخروج؟',
    logout_cancel:'إلغاء', logout_yes:'نعم، خروج',
    contact_bar_ship:'شحن مجاني للطلبات فوق $30',
    contact_bar_new:'خصم للعملاء الجدد:',
    promo_unit:'تُباع بكيلو واحد',
    signin_sub:'أدخل رقم هاتفك — سنرسل رمز التحقق',
    signin_label:'رقم الهاتف',
    signin_btn:'احصل على الرمز',
    otp_sub:'تم إرسال الرمز إلى', otp_sub2:'. أدخل 4 أرقام:',
    otp_btn:'تحقق',
    resend_in:'إعادة الإرسال خلال', resend_link:'إعادة إرسال الرمز',
    change_num:'← تغيير الرقم',
    name_sub:'خطوة أخيرة — ما اسمك؟',
    name_label:'اسمك', name_ph:'أدخل اسمك',
    name_btn:'تم، ادخل المتجر',
    welcome:'مرحباً!', welcome_sub:'لقد سجلت الدخول بنجاح',
    no_results:'لم يتم العثور على منتجات',
  },
  tr: {
    nav_home:'Ana Sayfa', nav_shop:'Mağaza', nav_wishlist:'Favoriler', nav_about:'Hakkımızda', nav_contact:'İletişim',
    signin:'Giriş Yap', signout:'Çıkış Yap',
    hero_eyebrow:'Doğal Ürünler · Doğrudan Çiftliklerden',
    hero_title:'Tahıllar, Baklagiller\nve Kuru Meyveler',
    hero_title_em:'Kuru Meyveler',
    hero_p:'Dünya çapındaki güvenilir çiftliklerden doğrudan temin edilen premium baklagiller, kuru meyveler, kuruyemişler ve tahıllar. Saf, organik, kimyasız. 1 kg olarak satılır.',
    hero_call_label:'Fiyatları öğrenmek ve sipariş vermek için arayın:',
    hero_btn_browse:'Ürünleri Keşfet', hero_btn_about:'Hikayemiz',
    stat_products:'Ürün', stat_farmers:'Tedarikçi', stat_rating:'Puan',
    cats_title:'Kategorilere', cats_em:'Göz Atın', cats_all:'Tüm kategoriler',
    feat_title:'Öne Çıkan', feat_em:'Ürünler', feat_all:'Tümünü gör',
    call_title:'Fiyatı öğrenmek', call_em:'ister misiniz?',
    call_desc:'Tüm ürünlerimiz değişen piyasa fiyatlarıyla satılmaktadır. Güncel fiyat için arayın.',
    call_label:'Pt–Ct 9:00–19:00 arası',
    call_or:'veya', call_msg:'Mesaj Gönder',
    price_msg:'Fiyat telefonda öğrenilir',
    unit:'1 kg',
    btn_call:'Sipariş İçin Ara', btn_outstock:'Stokta Yok',
    in_stock:'✓ Stokta Var', out_stock:'✗ Stokta Yok',
    shop_title:'Tüm Ürünler', shop_sub:'1 kg olarak satılır · Fiyat için arayın:',
    filter_all:'Tümü', filter_new:'Yeni Gelenler', filter_eco:'Organik', filter_hot:'Çok Satanlar', filter_in:'Stokta', filter_out:'Stokta Yok',
    sort_default:'Sırala', sort_rating:'En Yüksek Puanlı', sort_az:'A → Z', sort_za:'Z → A',
    about_title:'Gerçek', about_em:'gıdaya inanıyoruz',
    contact_title:'İletişime', contact_em:'Geçin',
    contact_call_label:'Sipariş / fiyat öğrenmek için arayın',
    contact_hours:'Pt–Ct · 9:00 – 19:00',
    wishlist_title:'Favorilerim', wishlist_sub:'Kaydettiğiniz ürünler',
    wishlist_empty_h:'Favori listeniz boş', wishlist_empty_p:'Kaydetmek için ürünün kalbine tıklayın',
    footer_desc:'Premium kuru gıda pazarı. Baklagiller, kuru meyveler, kuruyemişler. Hepsi 1 kg olarak satılır.',
    footer_shop:'Mağaza', footer_cats:'Kategoriler', footer_info:'Şirket',
    footer_copy:'© 2025 BEANS. Tüm hakları saklıdır.',
    footer_price:'Fiyatlar telefonda:',
    call_modal_title:'Sipariş Ver',
    call_modal_hint:'Güncel fiyat öğrenmek ve sipariş vermek için arayın. Tüm ürünler 1 kg satılır. Pt–Ct, 9:00–19:00.',
    copy_number:'Numarayı Kopyala',
    logout_title:'Çıkış Yap?', logout_msg:'Hesabınızdan çıkmak istediğinizden emin misiniz?',
    logout_cancel:'İptal', logout_yes:'Evet, Çık',
    contact_bar_ship:"$30 üzeri siparişlerde ücretsiz kargo",
    contact_bar_new:'Yeni müşteri indirimi:',
    promo_unit:'1 kg olarak satılır',
    signin_sub:'Telefon numaranızı girin — doğrulama kodu göndereceğiz',
    signin_label:'Telefon Numarası',
    signin_btn:'Kod Al',
    otp_sub:'Kod gönderildi:', otp_sub2:'. 4 rakamı girin:',
    otp_btn:'Doğrula',
    resend_in:'Yeniden gönder:', resend_link:'Kodu yeniden gönder',
    change_num:'← Numarayı değiştir',
    name_sub:'Neredeyse bitti — adınız nedir?',
    name_label:'Adınız', name_ph:'Adınızı girin',
    name_btn:'Tamamla ve Gir',
    welcome:'Hoş geldiniz!', welcome_sub:"BEANS'e başarıyla giriş yaptınız",
    no_results:'Ürün bulunamadı',
  },
  de: {
    nav_home:'Startseite',nav_shop:'Shop',nav_wishlist:'Wunschliste',nav_about:'Über uns',nav_contact:'Kontakt',
    signin:'Anmelden',signout:'Abmelden',
    hero_eyebrow:'Natürliche Produkte · Direkt von Bauernhöfen',
    hero_title:'Getreide, Hülsenfrüchte\nund Trockenfrüchte',
    hero_title_em:'Trockenfrüchte',
    hero_p:'Premium Hülsenfrüchte, Trockenfrüchte, Nüsse und Getreide aus vertrauenswürdigen Betrieben weltweit. Rein, organisch, chemikalienfrei. Verkauf per 1 kg.',
    hero_call_label:'Für Preise und Bestellungen anrufen:',
    hero_btn_browse:'Produkte entdecken',hero_btn_about:'Unsere Geschichte',
    stat_products:'Produkte',stat_farmers:'Lieferanten',stat_rating:'Bewertung',
    cats_title:'Kategorien',cats_em:'durchsuchen',cats_all:'Alle Kategorien',
    feat_title:'Empfohlene',feat_em:'Produkte',feat_all:'Alle anzeigen',
    call_title:'Preis erfahren?',call_em:'',
    call_desc:'Alle Produkte werden zu tagesaktuellen Marktpreisen verkauft. Rufen Sie uns an.',
    call_label:'Mo–Sa 9:00–19:00 Uhr',
    call_or:'oder',call_msg:'Nachricht senden',
    price_msg:'Preis per Telefon erfragen',
    unit:'1 kg',
    btn_call:'Anrufen & Bestellen',btn_outstock:'Nicht verfügbar',
    in_stock:'✓ Verfügbar',out_stock:'✗ Nicht verfügbar',
    shop_title:'Alle Produkte',shop_sub:'Verkauf per 1 kg · Preis per Telefon:',
    filter_all:'Alle',filter_new:'Neu',filter_eco:'Bio',filter_hot:'Bestseller',filter_in:'Verfügbar',filter_out:'Nicht verfügbar',
    sort_default:'Sortieren',sort_rating:'Beste Bewertung',sort_az:'A → Z',sort_za:'Z → A',
    about_title:'Wir glauben an',about_em:'echtes Essen',
    contact_title:'Kontakt',contact_em:'aufnehmen',
    contact_call_label:'Anrufen für Bestellungen / Preisanfragen',
    contact_hours:'Mo–Sa · 9:00 – 19:00 Uhr',
    wishlist_title:'Meine Wunschliste',wishlist_sub:'Gespeicherte Produkte',
    wishlist_empty_h:'Wunschliste ist leer',wishlist_empty_p:'Klicken Sie auf das Herz, um zu speichern',
    footer_desc:'Premium Trockenwarenmarkt. Hülsenfrüchte, Trockenfrüchte, Nüsse und Getreide. Alles per 1 kg.',
    footer_shop:'Shop',footer_cats:'Kategorien',footer_info:'Unternehmen',
    footer_copy:'© 2025 BEANS. Alle Rechte vorbehalten.',
    footer_price:'Preise per Telefon:',
    call_modal_title:'Bestellung aufgeben',
    call_modal_hint:'Rufen Sie uns an für den heutigen Preis. Alle Produkte werden per 1 kg verkauft. Mo–Sa, 9:00–19:00.',
    copy_number:'Nummer kopieren',
    logout_title:'Abmelden?',logout_msg:'Möchten Sie sich wirklich abmelden?',
    logout_cancel:'Abbrechen',logout_yes:'Ja, abmelden',
    contact_bar_ship:'Kostenloser Versand ab $30',contact_bar_new:'Neukunden-Rabatt:',promo_unit:'Verkauf per 1 kg',
    signin_sub:'Geben Sie Ihre Telefonnummer ein — wir senden einen Code',
    signin_label:'Telefonnummer',signin_btn:'Code erhalten',
    otp_sub:'Code gesendet an',otp_sub2:'. Geben Sie 4 Ziffern ein:',
    otp_btn:'Bestätigen',
    resend_in:'Erneut senden in',resend_link:'Code erneut senden',
    change_num:'← Nummer ändern',
    name_sub:'Fast geschafft — wie heißen Sie?',
    name_label:'Ihr Name',name_ph:'Name eingeben',
    name_btn:'Fertig, eintreten',
    welcome:'Willkommen!',welcome_sub:'Sie sind bei BEANS angemeldet',
    no_results:'Keine Produkte gefunden',
  },
  fr: {
    nav_home:'Accueil',nav_shop:'Boutique',nav_wishlist:'Favoris',nav_about:'À propos',nav_contact:'Contact',
    signin:'Se connecter',signout:'Se déconnecter',
    hero_eyebrow:'Produits naturels · Directement des fermes',
    hero_title:'Céréales, légumineuses\net fruits secs',
    hero_title_em:'fruits secs',
    hero_p:'Légumineuses, fruits secs, noix et céréales de qualité provenant directement de fermes de confiance. Pur, bio, sans produits chimiques. Vendu par 1 kg.',
    hero_call_label:'Pour connaître les prix et passer commande, appelez-nous :',
    hero_btn_browse:'Voir les produits',hero_btn_about:'Notre histoire',
    stat_products:'Produits',stat_farmers:'Fournisseurs',stat_rating:'Note',
    cats_title:'Parcourir les',cats_em:'Catégories',cats_all:'Toutes les catégories',
    feat_title:'Produits',feat_em:'vedettes',feat_all:'Voir tout',
    call_title:'Vous voulez connaître le',call_em:'prix ?',
    call_desc:'Tous nos produits sont vendus aux prix du marché qui varient quotidiennement. Appelez-nous.',
    call_label:'Lun–Sam 9h00–19h00',
    call_or:'ou',call_msg:'Envoyer un message',
    price_msg:'Prix disponible par téléphone',
    unit:'1 kg',
    btn_call:'Appeler pour commander',btn_outstock:'Rupture de stock',
    in_stock:'✓ En stock',out_stock:'✗ Rupture de stock',
    shop_title:'Tous les produits',shop_sub:'Vendu par 1 kg · Prix par téléphone :',
    filter_all:'Tous',filter_new:'Nouveautés',filter_eco:'Bio',filter_hot:'Meilleures ventes',filter_in:'En stock',filter_out:'Rupture',
    sort_default:'Trier',sort_rating:'Mieux notés',sort_az:'A → Z',sort_za:'Z → A',
    about_title:'Nous croyons en la',about_em:'vraie nourriture',
    contact_title:'Nous',contact_em:'contacter',
    contact_call_label:'Appeler pour commander / demander les prix',
    contact_hours:'Lun–Sam · 9h00 – 19h00',
    wishlist_title:'Mes favoris',wishlist_sub:'Produits sauvegardés',
    wishlist_empty_h:'Votre liste est vide',wishlist_empty_p:'Cliquez sur le cœur pour sauvegarder',
    footer_desc:'Marché de produits secs premium. Légumineuses, fruits secs, noix. Tout vendu par 1 kg.',
    footer_shop:'Boutique',footer_cats:'Catégories',footer_info:'Société',
    footer_copy:'© 2025 BEANS. Tous droits réservés.',
    footer_price:'Prix par téléphone :',
    call_modal_title:'Passer une commande',
    call_modal_hint:"Appelez-nous pour le prix du jour. Tous les produits sont vendus par 1 kg. Lun–Sam, 9h–19h.",
    copy_number:'Copier le numéro',
    logout_title:'Se déconnecter ?',logout_msg:'Êtes-vous sûr de vouloir vous déconnecter ?',
    logout_cancel:'Annuler',logout_yes:'Oui, se déconnecter',
    contact_bar_ship:'Livraison gratuite dès $30',contact_bar_new:'Réduction nouveaux clients :',promo_unit:'Vendu par 1 kg',
    signin_sub:'Entrez votre numéro de téléphone — nous vous enverrons un code',
    signin_label:'Numéro de téléphone',signin_btn:'Obtenir le code',
    otp_sub:'Code envoyé au',otp_sub2:'. Entrez 4 chiffres :',
    otp_btn:'Vérifier',
    resend_in:'Renvoyer dans',resend_link:'Renvoyer le code',
    change_num:'← Changer de numéro',
    name_sub:'Presque terminé — quel est votre prénom ?',
    name_label:'Votre prénom',name_ph:'Entrez votre prénom',
    name_btn:'Terminer et entrer',
    welcome:'Bienvenue !',welcome_sub:'Vous êtes connecté à BEANS',
    no_results:'Aucun produit trouvé',
  },
};

// fill remaining languages with English fallback
['es','hi','pt','ko','ja'].forEach(c => { T[c] = T[c] || {...T.en}; });

let currentLang = 'en';

// ── build lang dropdown ──
function buildLangDrop(){
  const d = document.getElementById('langDrop');
  if(!d) return;
  d.innerHTML = LANGS.map(l=>`
    <div class="lang-opt ${l.code===currentLang?'active-lang':''}" onclick="selectLang('${l.code}')">
      <span class="lang-flag">${l.flag}</span>
      <span class="lang-name">${l.name}</span>
      <span class="lang-native">${l.native}</span>
    </div>`).join('');
}

function toggleLangDrop(e){
  e.stopPropagation();
  buildLangDrop();
  document.getElementById('langDrop').classList.toggle('open');
}

document.addEventListener('click', ()=>{ 
  const d=document.getElementById('langDrop');
  if(d) d.classList.remove('open');
});

function selectLang(code){
  currentLang = code;
  const lang = LANGS.find(l=>l.code===code);
  document.getElementById('langFlag').textContent = lang.flag;
  document.getElementById('langCode').textContent  = lang.code.toUpperCase();
  document.getElementById('langDrop').classList.remove('open');
  // RTL
  document.documentElement.setAttribute('dir', lang.dir);
  document.documentElement.setAttribute('lang', code);
  applyTranslations();
  // re-render current page content
  const activePage = document.querySelector('.page.active')?.id?.replace('page-','');
  if(activePage==='catalog') renderCatalog();
  if(activePage==='wishlist') renderWishlist();
  if(activePage==='home') initHome();
}

function t(key){ return (T[currentLang]&&T[currentLang][key]) || T.en[key] || key; }

function applyTranslations(){
  // NAV
  setTxt('[data-page="home"]',    t('nav_home'));
  setTxt('[data-page="catalog"]', t('nav_shop'));
  setTxt('[data-page="wishlist"]',t('nav_wishlist'));
  setTxt('[data-page="about"]',   t('nav_about'));
  setTxt('[data-page="contact"]', t('nav_contact'));
  // contact bar
  const cb = document.querySelector('.contact-bar');
  if(cb) cb.innerHTML=`<span>📞 ${t('nav_contact')}:</span>
    <a href="tel:+998915309390">+998 91 530-93-90</a>
    <span class="cb-sep">·</span><span>${t('promo_unit')}</span>`;
  // auth button
  const authBtn = document.getElementById('openAuthBtn');
  if(authBtn) authBtn.childNodes[authBtn.childNodes.length-1].textContent = ' '+t('signin');
  // page title bars
  setTxt('.page-title-bar h1', t('shop_title'));
  // footer copy
  const fc = document.querySelector('.footer-copy-txt');
  if(fc) fc.textContent = t('footer_copy');
  // wishlist badge nav tooltip
  const wb = document.querySelector('button[title="Wishlist"]');
  if(wb) wb.title = t('nav_wishlist');
}

function setTxt(sel, val){
  const el = document.querySelector(sel);
  if(el) el.textContent = val;
}

// Override productCard to use t()
const _origProductCard = productCard;
function productCard(p){
  const wished = wishlist.has(p.id);
  const stockClass = p.inStock ? 'in-stock' : 'out-stock';
  const stockText  = p.inStock ? t('in_stock') : t('out_stock');
  return `<div class="pc" id="pc-${p.id}">
    <div class="pc-img" onclick="openProduct(${p.id})">
      <img src="${p.img}" alt="${p.name}" loading="lazy">
      <div class="pbadge badge-${p.badge}">${p.badgeText}</div>
      <div class="stock-badge ${stockClass}">${stockText}</div>
      <button class="pc-wish ${wished?'wished':''}" id="wish-${p.id}" onclick="toggleWish(${p.id},event)">
        <svg viewBox="0 0 24 24" fill="${wished?'currentColor':'none'}" stroke-width="1.5"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
      </button>
    </div>
    <div class="pc-info">
      <div class="pc-origin">${p.origin}</div>
      <div class="pc-name" onclick="openProduct(${p.id})">${p.name}</div>
      <div class="pc-meta">
        <span class="pc-rating"><span class="stars">★</span> ${p.rating} (${p.reviews})</span>
        <span class="pc-unit">${t('unit')}</span>
      </div>
      <div class="pc-price-msg">${t('price_msg')}</div>
      <button class="btn-call ${!p.inStock?'unavailable':''}" onclick="${p.inStock?'openCallModal('+p.id+')':'showToast(t(\'btn_outstock\'))'}">
        <svg viewBox="0 0 24 24" fill="none" stroke-width="1.5"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.62 3.38 2 2 0 0 1 3.6 1.21h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.85a16 16 0 0 0 6 6l.95-.95a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
        ${p.inStock ? t('btn_call') : t('btn_outstock')}
      </button>
    </div>
  </div>`;
}
loadProducts();
//call to order

async function saveOrder(phone, product){

 await addDoc(
   collection(window.db,"orders"),
   {
     phone,
     product,
     createdAt: serverTimestamp()
   }
 );

}
async function snapcode() {
  const snap = await getDoc(
    doc(window.db, "otp", phone)
  );

  const saved = snap.data().code;

  if (code === saved) {
    completeAuth();
  } else {
    showToast("Wrong code");
  }
}

