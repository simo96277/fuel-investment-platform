
const projects=[
 {id:1,name:"محطة الوقود A",location:"مشروع تجريبي",target:500000,raised:320000,min:500,progress:64},
 {id:2,name:"محطة الوقود B",location:"مشروع تجريبي",target:750000,raised:412500,min:1000,progress:55},
 {id:3,name:"محطة الوقود C",location:"مشروع تجريبي",target:300000,raised:270000,min:500,progress:90}
];

const money=n=>"$"+n.toLocaleString("en-US");
const grid=document.getElementById("projectGrid");
grid.innerHTML=projects.map(p=>`
 <article class="card">
   <div class="station-art" style="height:150px;font-size:55px">⛽</div>
   <div class="eyebrow" style="margin-top:15px">${p.location}</div>
   <h3>${p.name}</h3>
   <p class="muted">معلومات المشروع والوثائق ستكون متاحة هنا.</p>
   <div class="progress"><i style="width:${p.progress}%"></i></div>
   <div class="meta"><span>تم جمعه</span><b>${money(p.raised)}</b></div>
   <div class="meta"><span>الهدف</span><b>${money(p.target)}</b></div>
   <button class="btn primary full" onclick="openProject(${p.id})">عرض التفاصيل</button>
 </article>`).join("");

function openModal(type){
 const m=document.getElementById("modal"), c=document.getElementById("modalContent");
 if(type==="register") c.innerHTML=`<h2>فتح حساب</h2><div class="notice">هذه V1 تجريبية. التسجيل هنا لا ينشئ حساباً مالياً حقيقياً.</div><form class="form" onsubmit="demoSubmit(event,'تم إنشاء حساب تجريبي بنجاح')"><label>الاسم الكامل</label><input required><label>البريد الإلكتروني</label><input type="email" required><label>كلمة المرور</label><input type="password" required><button class="btn primary full">إنشاء الحساب</button></form>`;
 else c.innerHTML=`<h2>تسجيل الدخول</h2><div class="notice">الحسابات الحقيقية غير مفعلة في V1.</div><form class="form" onsubmit="demoSubmit(event,'تم تسجيل الدخول إلى الحساب التجريبي')"><label>البريد الإلكتروني</label><input type="email" required><label>كلمة المرور</label><input type="password" required><button class="btn dark full">دخول</button></form>`;
 m.classList.remove("hidden");
}
function closeModal(){document.getElementById("modal").classList.add("hidden")}
function demoSubmit(e,msg){e.preventDefault();alert(msg);closeModal();showDashboard()}
function openProject(id){
 const p=projects.find(x=>x.id===id);
 document.getElementById("modalContent").innerHTML=`<h2>${p.name}</h2><p class="muted">${p.location}</p><div class="notice">هذا مشروع تجريبي للواجهة. الاستثمار والدفع الحقيقيان غير مفعّلين.</div><div class="row"><span>الهدف</span><b>${money(p.target)}</b></div><div class="row"><span>تم جمعه</span><b>${money(p.raised)}</b></div><div class="row"><span>الحد الأدنى</span><b>${money(p.min)}</b></div><div class="progress"><i style="width:${p.progress}%"></i></div><button class="btn primary full" onclick="showDashboard()">فتح لوحة المستثمر</button>`;
 document.getElementById("modal").classList.remove("hidden");
}
function showDashboard(){
 document.getElementById("modalContent").innerHTML=`<h2>لوحة المستثمر</h2><div class="grid" style="grid-template-columns:1fr 1fr"><div class="card"><small>الرصيد المتاح</small><h3>$2,450</h3></div><div class="card"><small>إجمالي الاستثمار</small><h3>$7,500</h3></div></div><hr style="border:0;border-top:1px solid #eee;margin:22px 0"><h3>استثماراتي</h3><div class="card"><b>محطة الوقود A</b><div class="row"><span>المبلغ</span><b>$5,000</b></div><div class="row"><span>الحالة</span><b>نشط</b></div></div><div class="card" style="margin-top:12px"><b>محطة الوقود B</b><div class="row"><span>المبلغ</span><b>$2,500</b></div><div class="row"><span>الحالة</span><b>نشط</b></div></div><div class="notice">الإيداع والسحب والاستثمار الحقيقي غير متصلين في هذه النسخة.</div>`;
 document.getElementById("modal").classList.remove("hidden");
}
document.getElementById("modal").addEventListener("click",e=>{if(e.target.id==="modal")closeModal()});
