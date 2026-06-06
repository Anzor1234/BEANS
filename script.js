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

const PRODUCTS = [
  {id:1, name:'Red Kidney Beans',          origin:'Krasnodar, Russia',    cat:'legumes',      inStock:true,  badge:'eco',  badgeText:'Organic',     rating:4.9,reviews:312, img:'https://avatars.mds.yandex.net/i?id=a69929b7215737929f8d6619e9ca1528c66c7869-5190189-images-thumbs&n=13',     desc:'Premium organic red kidney beans, hand-sorted for quality. Rich in protein and fiber, perfect for soups, stews and salads.',protein:'24g',fiber:'15g'},
  {id:2, name:'Natural Apricots (No Sulfur)',origin:'Uzbekistan',          cat:'dried-fruits', inStock:true,  badge:'new',  badgeText:'New',          rating:5.0,reviews:184, img:'https://avatars.mds.yandex.net/i?id=9dfd3e2ff072179e0f72bcb31f8750e82be19f5d-4076614-images-thumbs&n=13',     desc:'Sun-dried apricots with no added sulfur or preservatives. Naturally sweet, deep amber color from the Fergana Valley.',protein:'3.4g',fiber:'7.3g'},
  {id:3, name:'Large Chickpeas',           origin:'Turkey',               cat:'legumes',      inStock:true,  badge:'hot',  badgeText:'Best Seller',  rating:4.7,reviews:520, img:'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=500&q=80',     desc:'Premium Turkish chickpeas, large caliber grade. Ideal for hummus, curries, roasted snacks and stews.',protein:'19g',fiber:'12g'},
  {id:4, name:'Golden Raisins (Kishmish)', origin:'Afghanistan',          cat:'dried-fruits', inStock:true,  badge:'hot',  badgeText:'Best Seller',  rating:4.9,reviews:741, img:'https://avatars.mds.yandex.net/i?id=4c20025993a2fc2b9e5cea18c9d0a20eec1327d0-10350400-images-thumbs&n=13',     desc:'Naturally sweet golden kishmish raisins, seedless. Perfect for baking, trail mix and snacking.',protein:'3.1g',fiber:'3.7g'},
  {id:5, name:'Green Lentils',             origin:'Altai, Russia',        cat:'legumes',      inStock:true,  badge:'eco',  badgeText:'Organic',      rating:4.8,reviews:210, img:'https://avatars.mds.yandex.net/i?id=d06e3d4ed7d5e25a2c520487227655d87ffa4f8e-7753204-images-thumbs&n=13',     desc:'Small green lentils direct from Altai family farms. Cook in 20 min, no soaking needed. High in iron and folate.',protein:'26g',fiber:'11g'},
  {id:6, name:'Medjool Dates',             origin:'Iran',                 cat:'dried-fruits', inStock:true,  badge:'new',  badgeText:'New',          rating:5.0,reviews:98,  img:'https://avatars.mds.yandex.net/i?id=97cde92ade2183d75453873fd3f8b6ea9fdf15f5-4394907-images-thumbs&n=13',     desc:'Large, plump Medjool dates with a rich caramel flavor. No additives. A natural energy booster.',protein:'1.8g',fiber:'6.7g'},
  {id:7, name:'Split Yellow Peas',         origin:'Voronezh, Russia',     cat:'legumes',      inStock:false, badge:'hot',  badgeText:'Best Seller',  rating:4.6,reviews:437, img:'https://avatars.mds.yandex.net/i?id=67d86d0ba3e69c001fd1d63800b2d85bd7c5bbdd-8548977-images-thumbs&n=13',     desc:'Halved yellow peas for fast-cooking soups and dals. Rich in plant protein and B vitamins.',protein:'25g',fiber:'8g'},
  {id:8, name:'Smoked Prunes (Pitted)',    origin:'Moldova',              cat:'dried-fruits', inStock:true,  badge:'hot',  badgeText:'Best Seller',  rating:4.9,reviews:603, img:'https://avatars.mds.yandex.net/i?id=7cb7ddf6ae7c4399bc31d039d56389ac7b64c282-3475740-images-thumbs&n=13',     desc:'Traditional smoked pitted prunes with a deep, complex flavor. Excellent for compotes, baking and snacking.',protein:'2.2g',fiber:'7.1g'},
  {id:9, name:'Raw Walnut Halves',         origin:'Chile',                cat:'nuts',         inStock:true,  badge:'eco',  badgeText:'Organic',      rating:4.9,reviews:389, img:'https://avatars.mds.yandex.net/i?id=923681e0e8bb0a265e7cecd31d29490751df75ba-8220238-images-thumbs&n=13',     desc:'Premium raw walnut halves, vacuum-sealed for freshness. Rich in omega-3 fatty acids.',protein:'15g',fiber:'6.7g'},
  {id:10,name:'Basmati Rice Extra Long',   origin:'India',                cat:'grains',       inStock:true,  badge:'hot',  badgeText:'Best Seller',  rating:4.8,reviews:812, img:'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=500&q=80',     desc:'Aged extra-long grain basmati rice with a distinctive aroma. Perfect fluffy texture every time.',protein:'7g',fiber:'0.6g'},
  {id:11,name:'Pumpkin Seeds (Pepitas)',   origin:'Mexico',               cat:'seeds',        inStock:true,  badge:'new',  badgeText:'New',          rating:4.7,reviews:156, img:'https://avatars.mds.yandex.net/i?id=a0544c1dc8f3ea8b8b98847a11932e8c3a19acd0-8497211-images-thumbs&n=13',     desc:'Raw hulled pumpkin seeds, rich in magnesium and zinc. Great for salads, granola and snacking.',protein:'30g',fiber:'6g'},
  {id:12,name:'Black Beluga Lentils',      origin:'Canada',               cat:'legumes',      inStock:false, badge:'hot',  badgeText:'Best Seller',  rating:4.9,reviews:267, img:'https://avatars.mds.yandex.net/i?id=b5db7c02f1e830b655f8bd0bca42236cd0b18816-9380290-images-thumbs&n=13',     desc:'Tiny black beluga lentils that hold their shape beautifully. Earthy flavor, stunning in salads.',protein:'26g',fiber:'8g'},
  {id:13,name:'Chia Seeds',               origin:'Bolivia',              cat:'seeds',        inStock:true,  badge:'eco',  badgeText:'Organic',      rating:5.0,reviews:445, img:'https://avatars.mds.yandex.net/i?id=16073fb3f7808ccebacf354427e66d0d33b32b57-5877601-images-thumbs&n=13',     desc:'Organic chia seeds loaded with omega-3, fiber and antioxidants. Add to smoothies, puddings or baking.',protein:'17g',fiber:'34g'},
  {id:14,name:'Whole Cashews (W320)',      origin:'Vietnam',              cat:'nuts',         inStock:true,  badge:'hot',  badgeText:'Best Seller',  rating:4.8,reviews:334, img:'https://avatars.mds.yandex.net/i?id=395a4ba3b0312ffa3b97d9c37c0c331e16e87dc0-5221583-images-thumbs&n=13',     desc:'Whole W320 grade cashews, the premium snacking nut. Creamy, buttery flavor, lightly toasted.',protein:'18g',fiber:'3.3g'},
  {id:15,name:'White Quinoa',             origin:'Peru',                 cat:'grains',       inStock:true,  badge:'eco',  badgeText:'Organic',      rating:4.9,reviews:521, img:'https://avatars.mds.yandex.net/i?id=6a2e25c7d3416b8297e74aa00c84a1ae5b8e5a68-9137656-images-thumbs&n=13',     desc:'White quinoa from the Andean highlands. Complete protein with all essential amino acids. Gluten-free.',protein:'14g',fiber:'7g'},
  {id:16,name:'Dried Figs (Smyrna)',      origin:'Turkey',               cat:'dried-fruits', inStock:true,  badge:'new',  badgeText:'New',          rating:4.8,reviews:188, img:'https://avatars.mds.yandex.net/i?id=1d9e6e6706761821a7ad2ccd3f5448ca9cc113a1-4055809-images-thumbs&n=13',     desc:'Soft and sweet Smyrna-variety dried figs from Turkey. Rich in calcium and natural sugars.',protein:'3.3g',fiber:'9.8g'},
  {id:17,name:'Korean Chili Flakes',      origin:'South Korea',          cat:'spices',       inStock:true,  badge:'hot',  badgeText:'Best Seller',  rating:4.7,reviews:293, img:'https://avatars.mds.yandex.net/i?id=c01445cf6c7305cee8fb418342587b42e04bfc52-7045635-images-thumbs&n=13',     desc:'Gochugaru chili flakes, medium heat with a fruity undertone. Essential for kimchi and marinades.',protein:'12g',fiber:'27g'},
  {id:18,name:'Jumbo Rolled Oats',        origin:'Scotland',             cat:'grains',       inStock:true,  badge:'eco',  badgeText:'Organic',      rating:4.8,reviews:672, img:'https://avatars.mds.yandex.net/i?id=49b8c01189696acb94988b282537c1810e7922e6-5254303-images-thumbs&n=13',     desc:'Thick Scottish jumbo rolled oats, slow release energy for breakfast. Certified gluten-free facility.',protein:'13g',fiber:'10g'},
  {id:19,name:'Goji Berries',             origin:'China',                cat:'superfoods',   inStock:true,  badge:'eco',  badgeText:'Organic',      rating:4.9,reviews:412, img:'https://avatars.mds.yandex.net/i?id=4d2ed81117df3ed09c45ea015362d34c505fa40d-5345374-images-thumbs&n=13',     desc:'Sun-dried Ningxia goji berries. High in antioxidants, vitamin C and beta-carotene.',protein:'14g',fiber:'13g'},
  {id:20,name:'Dried Mango Slices',       origin:'Philippines',          cat:'dried-fruits', inStock:false, badge:'new',  badgeText:'New',          rating:4.7,reviews:224, img:'https://avatars.mds.yandex.net/i?id=df8d92b685fb433374d648dccdb9d91686d17a71-3744215-images-thumbs&n=13',     desc:'Sweet and chewy sun-dried mango slices with no added sugar or sulfites.',protein:'2.4g',fiber:'2.4g'},
  {id:21,name:'Dried Lavender Buds',      origin:'Provence, France',     cat:'herbs',        inStock:true,  badge:'new',  badgeText:'New',          rating:4.9,reviews:87,  img:'https://avatars.mds.yandex.net/i?id=9f0ad8e2d5bede7f3bd8aed3c3b6ce562208257f-6726315-images-thumbs&n=13',     desc:'Culinary-grade dried lavender buds. Use in teas, desserts, cookies and marinades.',protein:'6g',fiber:'37g'},
  {id:22,name:'Amaranth Grain',           origin:'Mexico',               cat:'grains',       inStock:true,  badge:'eco',  badgeText:'Organic',      rating:4.8,reviews:143, img:'https://avatars.mds.yandex.net/i?id=b5e287f85609183a878671b1f7ef11c64a3048f4-10102345-images-thumbs&n=13',     desc:'Ancient Aztec grain, naturally gluten-free. Pop it like popcorn or cook as porridge.',protein:'14g',fiber:'7g'},
  {id:23,name:'Raw Whole Almonds',        origin:'California, USA',      cat:'nuts',         inStock:true,  badge:'hot',  badgeText:'Best Seller',  rating:4.9,reviews:891, img:'https://avatars.mds.yandex.net/i?id=908340018a7916a542d2a86fba2ce1415a189895-5859957-images-thumbs&n=13',     desc:'California Nonpareil raw almonds. Rich in vitamin E and magnesium.',protein:'21g',fiber:'12.5g'},
  {id:24,name:'Golden Flaxseeds',         origin:'Canada',               cat:'seeds',        inStock:true,  badge:'eco',  badgeText:'Organic',      rating:4.7,reviews:267, img:'https://avatars.mds.yandex.net/i?id=571abe1a55d68eab4300d091d4ded91c-5161098-images-thumbs&n=13',     desc:'Golden flaxseeds, milder flavor than brown flax. Excellent source of omega-3 and lignans.',protein:'18g',fiber:'27g'},
  {id:25,name:'Mung Beans',               origin:'India',                cat:'legumes',      inStock:true,  badge:'new',  badgeText:'New',          rating:4.8,reviews:178, img:'https://avatars.mds.yandex.net/i?id=062cd57cda2f425754f1a2d0ec1576c0eb6dd559-4552607-images-thumbs&n=13',     desc:'Small green mung beans, a staple across Asian cuisines. Quick-cooking, nutty and versatile.',protein:'24g',fiber:'16g'},
  {id:26,name:'Dried Cranberries',        origin:'USA',                  cat:'dried-fruits', inStock:true,  badge:'hot',  badgeText:'Best Seller',  rating:4.7,reviews:342, img:'https://avatars.mds.yandex.net/i?id=2f1d73032f5b63ca1b9dc02509298c86a4125f73-5597410-images-thumbs&n=13',     desc:'Tart and sweet dried cranberries, great for baking, trail mix and oatmeal.',protein:'0.1g',fiber:'5.7g'},
  {id:27,name:'Pine Nuts',                origin:'Russia',               cat:'nuts',         inStock:false, badge:'hot',  badgeText:'Best Seller',  rating:4.9,reviews:203, img:'https://avatars.mds.yandex.net/i?id=3adcf401c649fc2745cfc80a325e1dfdfac167c8-5690841-images-thumbs&n=13',     desc:'Wild-harvested Siberian pine nuts, buttery and delicate. Perfect for pesto and salads.',protein:'14g',fiber:'3.7g'},
  {id:28,name:'Sunflower Seeds (Hulled)', origin:'Ukraine',              cat:'seeds',        inStock:true,  badge:'eco',  badgeText:'Organic',      rating:4.6,reviews:389, img:'https://avatars.mds.yandex.net/i?id=d5d107b1e47298d743f6bce783252c2a7fcfc002-5878741-images-thumbs&n=13',     desc:'Hulled organic sunflower seeds, ready to eat. Rich in vitamin E and selenium.',protein:'21g',fiber:'8.6g'},
  {id:29,name:'Turmeric Powder',          origin:'India',                cat:'spices',       inStock:true,  badge:'eco',  badgeText:'Organic',      rating:4.9,reviews:514, img:'https://avatars.mds.yandex.net/i?id=598b4392e3a54473b2b21c7c3d55c415e40c73ee-5452446-images-thumbs&n=13',     desc:'High-curcumin organic turmeric powder. Vibrant color and powerful anti-inflammatory properties.',protein:'9.7g',fiber:'21g'},
  {id:30,name:'Moringa Leaf Powder',      origin:'Ghana',                cat:'superfoods',   inStock:true,  badge:'new',  badgeText:'New',          rating:4.8,reviews:134, img:'https://avatars.mds.yandex.net/i?id=ba8a07098434963faf7b3be48b45680fddf64a7b-5222115-images-thumbs&n=13',     desc:'Nutrient-dense moringa leaf powder, packed with vitamins, minerals and antioxidants.',protein:'27g',fiber:'19g'},
];

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
let wishlist = new Set();
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
          +998 91 539-39-0
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
// AUTH
// ═══════════════════════════════════
function openAuth(){ document.getElementById('authOverlay').classList.add('open'); goAStep('s-phone'); }
function closeAuth(){ document.getElementById('authOverlay').classList.remove('open'); }
document.getElementById('openAuthBtn').onclick = openAuth;
document.getElementById('authOverlay').addEventListener('click',e=>{ if(e.target===document.getElementById('authOverlay')) closeAuth(); });
 
function goAStep(id){
  document.querySelectorAll('#authOverlay .astep').forEach(s=>s.classList.remove('on'));
  document.getElementById(id).classList.add('on');
}
 
function fmtPhone(inp){
  const [maxDigits, fmtFn] = getPhoneFmt(selectedCountry.code);
  const v = inp.value.replace(/\D/g,'').slice(0, maxDigits);
  inp.value = fmtFn(v);
}
 
let resendIv;
function sendCode(){
  const ph = document.getElementById('phoneInput').value.replace(/\D/g,'');
  if(ph.length < 6){ showToast('Please enter a valid phone number'); return; }
  document.getElementById('phoneMask').textContent = selectedCountry.code+' '+document.getElementById('phoneInput').value;
  goAStep('s-otp');
  document.getElementById('otp0').focus();
  startTimer();
}
 
function startTimer(){
  let sec = 60;
  document.getElementById('resendT').style.display='block';
  document.getElementById('resendL').style.display='none';
  clearInterval(resendIv);
  resendIv = setInterval(()=>{
    sec--;
    document.getElementById('timerSec').textContent = sec;
    if(sec<=0){ clearInterval(resendIv); document.getElementById('resendT').style.display='none'; document.getElementById('resendL').style.display='block'; }
  },1000);
}
function resendCode(){ showToast('Code resent!'); startTimer(); }
 
function otpNext(inp,i){
  inp.value = inp.value.replace(/\D/g,'');
  if(inp.value && i<5) document.getElementById('otp'+(i+1)).focus();
  if(i===5 && inp.value) setTimeout(verifyCode,300);
}
function otpBack(e,i){ if(e.key==='Backspace'&&!e.target.value&&i>0) document.getElementById('otp'+(i-1)).focus(); }
 
function verifyCode(){
 const code = [0,1,2,3,4,5]
  .map(i => document.getElementById('otp'+i).value)
  .join('');

 if(code.length < 6){
   showToast('Enter all 6 digits');
   return;
 }

 goAStep('s-name');
}
 
function completeAuth(){
  const n = document.getElementById('nameInput').value.trim() || 'Customer';
  user = { name:n, phone:document.getElementById('phoneInput').value };
  loginSuccess();
}
 
function loginSuccess(){
  goAStep('s-ok');
  updateAuthUI();
  setTimeout(closeAuth, 1800);
}
 
function updateAuthUI(){
  const area = document.getElementById('authArea');
  if(user){
    area.innerHTML=`<div class="user-chip" onclick="askLogout()">
      <div class="uavatar">${user.name.slice(0,2).toUpperCase()}</div>
      <span class="uname">${user.name}</span>
    </div>`;
  } else {
    area.innerHTML=`<button class="btn-auth-nav" id="openAuthBtn">
      <svg viewBox="0 0 24 24" fill="none" stroke-width="1.5"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
      Sign In</button>`;
    document.getElementById('openAuthBtn').onclick = openAuth;
  }
}
 
// ─── LOGOUT CONFIRM ───
function askLogout(){ document.getElementById('logoutOverlay').classList.add('open'); }
function closeLogout(){ document.getElementById('logoutOverlay').classList.remove('open'); }
function confirmLogout(){ user=null; updateAuthUI(); closeLogout(); showToast('You have been signed out'); }
document.getElementById('logoutOverlay').addEventListener('click',e=>{ if(e.target===document.getElementById('logoutOverlay')) closeLogout(); });
 
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
function showPage(id){
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
