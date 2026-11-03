/* ---------- accordion ---------- */
document.querySelectorAll('.acc-item').forEach(item=>{
  item.querySelector('.acc-head').addEventListener('click',()=>{
    const isOpen = item.classList.contains('open');
    document.querySelectorAll('.acc-item').forEach(i=>{
      i.classList.remove('open');
      i.querySelector('.acc-toggle').textContent='+';
    });
    if(!isOpen){
      item.classList.add('open');
      item.querySelector('.acc-toggle').textContent='−';
    }
  });
});

/* ---------- testimonials ---------- */
const testis = [
  {quote:'We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads. The team is professional, responsive, and genuinely invested in our success.',name:'John Smith',role:'Marketing Director at XYZ Corp'},
  {quote:'Positivus helped us turn a scattered marketing plan into a clear strategy. Our organic traffic has grown steadily, and we now understand exactly what is driving results.',name:'Sarah Chen',role:'Founder at Bloom & Wildflower'},
  {quote:'The paid campaign they built brought in more qualified enquiries in the first few months than we had seen in the previous year. Communication has been excellent throughout.',name:'Marcus Rivera',role:'Sales Director at Northstar Systems'},
  {quote:'Their social media team understood our audience straight away. Engagement is up, our brand feels more consistent, and the content calendar has made planning much easier.',name:'Priya Patel',role:'Brand Manager at Fresh Table'},
  {quote:'From the initial audit to monthly reporting, everything has been thoughtful and transparent. We have improved conversions without losing the personal feel of our business.',name:'Olivia Brooks',role:'Owner at Brooks & Co.'}
];

const track = document.getElementById('testiTrack');
const dotsWrap = document.getElementById('testiDots');
track.innerHTML = testis.map(t=>`
  <div class="testi-card">
    <p>"${t.quote}"</p>
    <div class="testi-name">${t.name}</div>
    <div class="testi-role">${t.role}</div>
  </div>
`).join('');
track.append(track.querySelector('.testi-card').cloneNode(true));
dotsWrap.innerHTML = testis.map(()=>'<span></span>').join('');

let tIndex = 0;
const cards = track.querySelectorAll('.testi-card');
const dots = dotsWrap.querySelectorAll('span');

function renderTesti(){
  const cardWidth = cards[0].getBoundingClientRect().width + 28;
  track.style.transform = `translateX(${-tIndex*cardWidth}px)`;
  cards.forEach((c,i)=>c.classList.toggle('active', i===tIndex));
  dots.forEach((d,i)=>d.classList.toggle('active', i===tIndex));
}
document.getElementById('testiNext').onclick=()=>{ tIndex=(tIndex+1)%testis.length; renderTesti(); };
document.getElementById('testiPrev').onclick=()=>{ tIndex=(tIndex-1+testis.length)%testis.length; renderTesti(); };
window.addEventListener('resize', renderTesti);
renderTesti();