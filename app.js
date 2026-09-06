
const CASE = {
  victim: {
    name: "Dr. Adrian Vale",
    age: 53,
    role: "Purdue professor and research director"
  },
  suspects: [
    {name:"Dr. Evelyn Shaw", relation:"Research associate and former protégé", campus:"Claims she left Lilly Hall about 4:55 PM", status:"Timeline disputed"},
    {name:"Daniel Price", relation:"Laboratory manager", campus:"Claims 3:12–4:45 PM", status:"Campus visit supported"},
    {name:"Jonah Reed", relation:"Doctoral student", campus:"Claims 3:26–4:52 PM", status:"Campus visit supported"},
    {name:"Helena Vale", relation:"Victim's younger sister", campus:"Did not claim a campus visit", status:"Family dispute"},
    {name:"Prof. Simon Graves", relation:"Former collaborator and friend", campus:"Did not claim a campus visit", status:"Professional dispute"}
  ]
};

const phoneData = {
  messages: [
    {from:"Evelyn Shaw", date:"21 NOV 2005 16:16", text:"We need to discuss this privately."},
    {from:"Adrian Vale", date:"21 NOV 2005 16:18", text:"Tonight. My house. 7:30."},
    {from:"Evelyn Shaw", date:"21 NOV 2005 16:20", text:"Please don't file anything until we talk."},
    {from:"Adrian Vale", date:"21 NOV 2005 22:42", text:"My decision stands."},
    {from:"Daniel Price", date:"22 NOV 2005 13:08", text:"You have no idea how much damage this will do."},
    {from:"Adrian Vale", date:"22 NOV 2005 13:11", text:"I know exactly what it will do."},
    {from:"Jonah Reed", date:"23 NOV 2005 21:44", text:"Please give me until Monday."},
    {from:"Adrian Vale", date:"23 NOV 2005 21:49", text:"No. Friday."},
    {from:"Helena Vale", date:"23 NOV 2005 19:18", text:"Are you still sick?"},
    {from:"Adrian Vale", date:"23 NOV 2005 19:21", text:"Much better today. Dinner is still happening."}
  ],
  calls: [
    {date:"22 NOV 08:14", who:"Dr. Keller", type:"OUTGOING", duration:"04:37"},
    {date:"21 NOV 19:28", who:"Evelyn Shaw", type:"INCOMING", duration:"00:21"},
    {date:"24 NOV 17:18", who:"BLOCKED", type:"MISSED", duration:"--"}
  ],
  calendar: [
    {date:"25 NOV 2005", title:"09:00 — Submit Research Integrity Packet", detail:"Initials in note: E.S. / D.P. / J.R."}
  ],
  notes: [
    "Friday. 9 AM. No more delays.",
    "If anything happens to me, check the archive record.",
    "Mom's birthday is still the only number I remember."
  ]
};

function route(){
  let p = location.pathname;
  const base = getBase();
  if(base && p.startsWith(base)) p = p.slice(base.length) || "/";
  return p.replace(/\/+$/,"") || "/";
}
function getBase(){
  const parts = location.pathname.split("/").filter(Boolean);
  if(location.hostname.endsWith("github.io") && parts.length){
    return "/" + parts[0];
  }
  return "";
}
function go(path){
  const base = getBase();
  history.pushState({}, "", base + path);
  render();
}
window.addEventListener("popstate", render);

function nav(){
  return `
  <div class="topbar">
    <div class="brand">CASE 112405 // DIGITAL ARCHIVE</div>
    <div class="nav">
      <a href="#" onclick="go('/');return false;">HOME</a>
      <a href="#" onclick="go('/phone');return false;">PHONE</a>
      <a href="#" onclick="go('/purdue');return false;">PURDUE</a>
      <a href="#" onclick="go('/archive/weather');return false;">WEATHER</a>
      <a href="#" onclick="go('/forensics');return false;">FORENSICS</a>
      <a href="#" onclick="go('/files');return false;">FILES</a>
      <a href="#" onclick="go('/terminal');return false;">TERMINAL</a>
    </div>
  </div>`;
}
function page(content){
  document.getElementById("app").innerHTML = `<div class="shell">${nav()}${content}</div>`;
}
function home(){
  page(`
    <div class="card">
      <div class="small">SYSTEM DATE: 24 NOV 2005</div>
      <h1>CASE 112405</h1>
      <h2>VALE RESIDENCE HOMICIDE</h2>
      <p>Archive reconstruction active. Exit is locked until the original homicide is solved.</p>
      <p class="warning">WARNING: Some records are incomplete, corrupted, or intentionally falsified.</p>
    </div>
    <div class="grid">
      <a class="linkcard" href="#" onclick="go('/phone');return false;"><h3>Recovered Nokia</h3><p>Messages, call register, calendar, notes.</p></a>
      <a class="linkcard" href="#" onclick="go('/purdue');return false;"><h3>Purdue Archive</h3><p>Personnel and collection records.</p></a>
      <a class="linkcard" href="#" onclick="go('/archive/weather');return false;"><h3>Weather Archive</h3><p>Historical sunset record.</p></a>
      <a class="linkcard" href="#" onclick="go('/forensics');return false;"><h3>Forensics</h3><p>Evidence and chemistry references.</p></a>
      <a class="linkcard" href="#" onclick="go('/files');return false;"><h3>Encrypted Files</h3><p>Recovered documents requiring passwords.</p></a>
      <a class="linkcard" href="#" onclick="go('/terminal');return false;"><h3>Final Terminal</h3><p>Submit the case theory.</p></a>
    </div>
  `);
}
function phone(){
  page(`
    <div class="phone-wrap">
      <div class="nokia">
        <div class="nokia-brand">NOKIA</div>
        <div class="screen" id="phoneScreen"></div>
        <div class="dpad">
          <button class="up">▲</button>
          <button class="left">◀</button>
          <button class="ok">OK</button>
          <button class="right">▶</button>
          <button class="down">▼</button>
        </div>
        <div class="keypad">
          ${["1","2 ABC","3 DEF","4 GHI","5 JKL","6 MNO","7 PQRS","8 TUV","9 WXYZ","*","0","+ #"].map(x=>`<div class="key">${x}</div>`).join("")}
        </div>
      </div>
    </div>
  `);
  phoneMenu();
}
function screenWrap(title, body){
  document.getElementById("phoneScreen").innerHTML = `
    <div class="screen-head"><span>${title}</span><span>▮▮ 17:42</span></div>${body}`;
}
function phoneMenu(){
  screenWrap("Menu", `
    <div class="phone-menu">
      <button onclick="showMessages()">1 Messages</button>
      <button onclick="showCalls()">2 Call register</button>
      <button onclick="showCalendar()">3 Calendar</button>
      <button onclick="showNotes()">4 Notes</button>
      <button onclick="showContacts()">5 Contacts</button>
    </div>`);
}
window.showMessages = function(){
  screenWrap("Messages", phoneData.messages.map(m=>`<div class="msg"><b>${m.from}</b><br><span>${m.date}</span><br>${m.text}</div>`).join("") + `<button class="backbtn" onclick="phoneMenu()">Back</button>`);
}
window.showCalls = function(){
  screenWrap("Call register", phoneData.calls.map(c=>`<div class="msg"><b>${c.who}</b><br>${c.date}<br>${c.type} ${c.duration}</div>`).join("") + `<button class="backbtn" onclick="phoneMenu()">Back</button>`);
}
window.showCalendar = function(){
  screenWrap("Calendar", phoneData.calendar.map(c=>`<div class="msg"><b>${c.date}</b><br>${c.title}<br>${c.detail}</div>`).join("") + `<button class="backbtn" onclick="phoneMenu()">Back</button>`);
}
window.showNotes = function(){
  screenWrap("Notes", phoneData.notes.map((n,i)=>`<div class="msg"><b>Note ${i+1}</b><br>${n}</div>`).join("") + `<button class="backbtn" onclick="phoneMenu()">Back</button>`);
}
window.showContacts = function(){
  const people=["Evelyn Shaw","Daniel Price","Jonah Reed","Helena Vale","Simon Graves","Dr. Keller"];
  screenWrap("Contacts", people.map(p=>`<div class="msg">${p}</div>`).join("") + `<button class="backbtn" onclick="phoneMenu()">Back</button>`);
}

function purdue(){
  page(`
    <div class="paper">
      <div class="small">PURDUE UNIVERSITY // ARCHIVED INTRANET // 2005</div>
      <h1>Biological Collections Portal</h1>
      <p>Recovered mirror. Some links are incomplete.</p>
      <div class="grid">
        <a class="linkcard" href="#" onclick="go('/purdue/fungarium');return false;"><h3>Arthur Fungarium</h3><p>Collection accession records.</p></a>
        <a class="linkcard" href="#" onclick="go('/purdue/personnel/eshaw');return false;"><h3>Personnel Lookup</h3><p>Employee credential information.</p></a>
        <a class="linkcard" href="#" onclick="go('/purdue/access');return false;"><h3>Access Logs</h3><p>Partial campus records.</p></a>
      </div>
    </div>
  `);
}
function fungarium(){
  page(`
    <div class="paper">
      <h1>Arthur Fungarium — Recovered Catalog</h1>
      <p><b>Fictional game record:</b> Restricted Teaching Collection, Cabinet F-12.</p>
      <table>
        <tr><th>Accession</th><th>Taxon</th><th>Status</th></tr>
        <tr><td>PUR-F-77421</td><td><i>Amanita phalloides</i></td><td>RECORD DISCREPANCY</td></tr>
        <tr><td>PUR-F-77422</td><td>Teaching reference</td><td>Present</td></tr>
      </table>
      <p class="warning">Archive note: specimen-handling details suppressed in this reconstruction.</p>
      <p>Last audit flag: <b>21 NOV 2005</b>.</p>
    </div>
  `);
}
function personnel(){
  page(`
    <div class="paper">
      <h1>Personnel Record</h1>
      <p><b>Name:</b> Evelyn Shaw</p>
      <p><b>Department:</b> Research staff</p>
      <p><b>Credential:</b> ES-417</p>
      <p><b>Status:</b> Active, Fall 2005</p>
      <p><b>Note:</b> Credential ES-417 is referenced in one damaged collection-access file.</p>
    </div>
  `);
}
function access(){
  page(`
    <div class="paper">
      <h1>Campus Access Summary — 24 NOV 2005</h1>
      <table>
        <tr><th>Person</th><th>Observed/Recorded</th><th>Notes</th></tr>
        <tr><td>Daniel Price</td><td>3:12 PM — 4:45 PM</td><td>Supported by surviving records</td></tr>
        <tr><td>Jonah Reed</td><td>3:26 PM — 4:52 PM</td><td>Supported by surviving records</td></tr>
        <tr><td>Evelyn Shaw</td><td>Entry: 4:31 PM</td><td>Departure record damaged</td></tr>
      </table>
      <p>One witness statement claims Shaw left "before sunset, about 4:55 PM."</p>
    </div>
  `);
}
function weather(){
  page(`
    <div class="paper">
      <div class="small">HISTORICAL WEATHER ARCHIVE // LAFAYETTE, IN</div>
      <h1>November 2005 Solar Times</h1>
      <p>This in-game archive gives the reconstructed local sunset times used by the case.</p>
      <table>
        <tr><th>Date</th><th>Sunrise</th><th>Sunset</th></tr>
        <tr><td>Nov 21</td><td>7:40 AM</td><td>5:28 PM</td></tr>
        <tr><td>Nov 22</td><td>7:41 AM</td><td>5:27 PM</td></tr>
        <tr><td>Nov 23</td><td>7:42 AM</td><td>5:26 PM</td></tr>
        <tr><td><b>Nov 24</b></td><td><b>7:43 AM</b></td><td><b>5:25 PM</b></td></tr>
        <tr><td>Nov 25</td><td>7:44 AM</td><td>5:25 PM</td></tr>
      </table>
      <div class="card">
        <b>Witness statement fragment:</b>
        <p>"I saw Shaw coming out while the sun was right on the horizon."</p>
      </div>
      <p><b>Deduction:</b> A person leaving during actual sunset could not also have left around 4:55 PM.</p>
    </div>
  `);
}
function forensics(){
  page(`
    <div class="card">
      <h1>Forensic Reference Database</h1>
      <div class="grid">
        <a class="linkcard" href="#" onclick="go('/forensics/toxicology');return false;"><h3>Toxicology</h3><p>Death-cap poisoning reference.</p></a>
        <a class="linkcard" href="#" onclick="go('/forensics/chemistry');return false;"><h3>Chemistry</h3><p>Evidence B14 and B19.</p></a>
      </div>
    </div>
  `);
}
function toxicology(){
  page(`
    <div class="paper">
      <h1>Toxicology Reference — Death Cap</h1>
      <p><i>Amanita phalloides</i> poisoning may involve delayed gastrointestinal illness followed by an apparent improvement period while severe internal injury continues.</p>
      <ul>
        <li>Symptoms are not typically immediate.</li>
        <li>A victim may appear to improve before becoming critically ill.</li>
        <li>Simple pH testing does <b>not</b> identify amatoxin.</li>
      </ul>
      <p class="warning">This game intentionally omits preparation, extraction, dosage, or administration details.</p>
      <div class="card">
        <b>Case relevance:</b>
        <p>Adrian reported severe illness on Tuesday and improvement on Wednesday. His fatal exposure therefore may have occurred before Thanksgiving Day.</p>
      </div>
    </div>
  `);
}
function chemistry(){
  page(`
    <div class="paper">
      <h1>Evidence Chemistry Reference</h1>
      <table>
        <tr><th>Evidence</th><th>Indicator result</th><th>Interpretation</th></tr>
        <tr><td>B14 — Cigar</td><td>Basic</td><td>Matches fictional archive-tracking residue ALK-5</td></tr>
        <tr><td>B19 — Candle</td><td>Acidic</td><td>Matches fictional compound PX-17</td></tr>
      </table>
      <h3>PX-17</h3>
      <p>Fictional acidic research compound used only for the game narrative. Real-life prop substitute: food-grade citric acid.</p>
      <h3>ALK-5</h3>
      <p>Fictional alkaline tracking material associated with the game archive. Real-life prop substitute: baking soda.</p>
      <p><b>Important:</b> Neither pH result is a direct test for death-cap toxin.</p>
    </div>
  `);
}

const lockedFiles = [
  {
    id:"report",
    name:"REPORT.DOC",
    hint:"Password hint: Tomorrow's date. MMDDYY",
    password:"112505",
    body:`RESEARCH INTEGRITY DRAFT

Submission scheduled: Friday, 25 November 2005, 09:00.

Subjects under review:
E.S.
D.P.
J.R.

The evidence is sufficient. I will not delay again.

— A.V.`
  },
  {
    id:"access",
    name:"ACCESS_LOG.DAT",
    hint:"Password hint: Evelyn's employee credential.",
    password:"ES417",
    body:`RECOVERED ACCESS FRAGMENT

21 NOV 2005
18:32 — Credential ES-417
Restricted Teaching Collection
Cabinet: F-12

POST-ACCESS AUDIT:
One accession record entered discrepancy state.

24 NOV 2005
05:02 PM — administrative terminal opened
05:24 PM — session ended

Record edits detected.`
  },
  {
    id:"archive",
    name:"ARCHIVE_F12.LOG",
    hint:"Password hint: Cabinet + Monday date, no punctuation.",
    password:"F12112105",
    body:`CABINET F-12 AUDIT

Accession PUR-F-77421
Species: Amanita phalloides
Status after 21 NOV audit: DISCREPANCY

WARNING:
Handling instructions intentionally removed from digital reconstruction.

Cross-reference:
Credential ES-417.`
  }
];
function files(){
  page(`
    <div class="card">
      <h1>Encrypted Files</h1>
      <p>Recovered from Adrian Vale's computer backup.</p>
      ${lockedFiles.map(f=>`
        <div class="lockbox">
          <h3>${f.name}</h3>
          <div class="small">${f.hint}</div>
          <input id="${f.id}-pw" placeholder="Password" />
          <button onclick="unlockFile('${f.id}')">Decrypt</button>
          <pre id="${f.id}-out"></pre>
        </div><br>`).join("")}
    </div>
  `);
}
window.unlockFile = function(id){
  const f=lockedFiles.find(x=>x.id===id);
  const input=document.getElementById(id+"-pw").value.trim().toUpperCase();
  const out=document.getElementById(id+"-out");
  if(input===f.password.toUpperCase()){
    out.className="status-ok";
    out.textContent="\nACCESS GRANTED\n\n"+f.body;
  }else{
    out.className="status-bad";
    out.textContent="\nACCESS DENIED";
  }
};

function terminal(){
  page(`
    <div class="terminal">
      <h1>> CASE RESOLUTION TERMINAL</h1>
      <p>> Identify the murderer and explain the conflicting attempts.</p>
      <p>Murderer:<br><select id="murderer">
        <option value="">-- SELECT --</option>
        ${CASE.suspects.map(s=>`<option>${s.name}</option>`).join("")}
      </select></p>
      <p>Person who physically attempted a separate murder:<br><select id="attempted">
        <option value="">-- SELECT --</option>
        ${CASE.suspects.map(s=>`<option>${s.name}</option>`).join("")}
      </select></p>
      <p>Person who planned murder but backed out:<br><select id="planned">
        <option value="">-- SELECT --</option>
        ${CASE.suspects.map(s=>`<option>${s.name}</option>`).join("")}
      </select></p>
      <p>Why was the cigar contaminated?<br>
      <select id="cigar">
        <option value="">-- SELECT --</option>
        <option value="staged">To stage the balcony as the place/time of poisoning</option>
        <option value="fatal">Because the cigar itself delivered the fatal toxin</option>
        <option value="accident">It was accidental contamination</option>
      </select></p>
      <button onclick="submitCase()">SUBMIT CASE</button>
      <pre id="result"></pre>
    </div>
  `);
}
window.submitCase=function(){
  const murderer=document.getElementById("murderer").value;
  const attempted=document.getElementById("attempted").value;
  const planned=document.getElementById("planned").value;
  const cigar=document.getElementById("cigar").value;
  const out=document.getElementById("result");
  if(murderer==="Dr. Evelyn Shaw" && attempted==="Daniel Price" && planned==="Jonah Reed" && cigar==="staged"){
    out.className="status-ok";
    out.textContent=`\n> MURDERER IDENTIFIED: DR. EVELYN SHAW
> SECOND ATTEMPT: DANIEL PRICE
> ABANDONED PLAN: JONAH REED
> BALCONY STAGING: CONFIRMED

> CASE 112405 SOLVED.
> ARCHIVE RELEASED.
> RETURNING TO 2026...`;
  }else{
    out.className="status-bad";
    out.textContent="\n> THEORY REJECTED.\n> One or more conclusions conflict with the evidence.";
  }
}

function notFound(){
  page(`<div class="card"><h1>404 // ARCHIVE CORRUPTED</h1><p>This record does not exist.</p><button onclick="go('/')">Return to archive</button></div>`);
}
function render(){
  const p=route();
  const routes={
    "/":home,
    "/phone":phone,
    "/purdue":purdue,
    "/purdue/fungarium":fungarium,
    "/purdue/personnel/eshaw":personnel,
    "/purdue/access":access,
    "/archive/weather":weather,
    "/forensics":forensics,
    "/forensics/toxicology":toxicology,
    "/forensics/chemistry":chemistry,
    "/files":files,
    "/terminal":terminal
  };
  (routes[p]||notFound)();
}
render();
