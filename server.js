<!DOCTYPE html>
<html lang="bn">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>ইসলামিয়া টেইলার্স এন্ড ফেব্রিক্স</title>
<link href="https://fonts.googleapis.com/css2?family=Hind+Siliguri:wght@300;400;500;600;700&display=swap" rel="stylesheet">
<style>
:root {
  --red: #e31e24;
  --blue: #1a6fc4;
  --dark: #0f172a;
  --light-bg: #f4f6fb;
  --border: #dde3ed;
  --white: #fff;
  --success: #16a34a;
  --muted: #64748b;
  --gold: #d4a017;
  --shadow: 0 2px 12px rgba(0,0,0,0.07);
}
*{box-sizing:border-box;margin:0;padding:0}
html{scroll-behavior:smooth}
body{font-family:'Hind Siliguri',sans-serif;background:var(--light-bg);color:var(--dark);min-height:100vh}

/* ── HEADER ── */
#app-header{background:#fff;border-bottom:2px solid var(--border);padding:10px 20px;display:flex;align-items:center;justify-content:space-between;position:sticky;top:0;z-index:300;box-shadow:var(--shadow)}
.logo-wrap{text-align:center;cursor:pointer}
.logo-bn{font-size:1.9rem;font-weight:700;color:var(--red);line-height:1;letter-spacing:-1px}
.logo-en{font-size:.8rem;color:#555}
.user-box{display:flex;align-items:center;gap:9px}
.avatar{width:34px;height:34px;border-radius:50%;background:#e8f0fe;display:flex;align-items:center;justify-content:center;font-size:1rem}
.uname{font-weight:600;font-size:.88rem}
.logout-btn{font-size:.75rem;color:var(--muted);cursor:pointer;text-decoration:underline}
.lang-sel{background:#f1f5f9;border:1px solid var(--border);border-radius:6px;padding:5px 10px;font-family:inherit;font-size:.8rem;cursor:pointer}

/* ── NAV ── */
#app-nav{background:#fff;border-bottom:1px solid var(--border);display:flex;justify-content:center;overflow-x:auto;-webkit-overflow-scrolling:touch}
#app-nav a{padding:11px 22px;text-decoration:none;color:var(--dark);font-size:.92rem;font-weight:500;border-bottom:3px solid transparent;cursor:pointer;white-space:nowrap;transition:all .18s}
#app-nav a:hover{color:var(--blue)}
#app-nav a.active{color:var(--blue);border-bottom-color:var(--blue);background:#f0f6ff}

/* ── PAGES ── */
.page{display:none;max-width:1000px;margin:0 auto;padding:22px 14px 70px}
.page.show{display:block}

/* ── CARDS ── */
.card{background:#fff;border-radius:12px;border:1.5px solid var(--border);padding:20px;margin-bottom:18px;box-shadow:var(--shadow)}
.card-title{font-size:1.05rem;font-weight:700;color:var(--dark);margin-bottom:16px;padding-bottom:9px;border-bottom:2px solid var(--border);display:flex;align-items:center;gap:7px}
.card-title::before{content:'';display:inline-block;width:4px;height:18px;background:var(--red);border-radius:2px;flex-shrink:0}
.pg-title{text-align:center;font-size:1.35rem;font-weight:700;background:#fff;border:1.5px solid var(--border);border-radius:10px;padding:13px;margin-bottom:20px;box-shadow:var(--shadow)}

/* ── LOGIN ── */
#login-wrap{min-height:100vh;display:flex;align-items:center;justify-content:center;background:linear-gradient(135deg,#f8faff 60%,#fde8e8)}
.login-box{background:#fff;border-radius:18px;padding:42px 34px;max-width:410px;width:100%;box-shadow:0 8px 40px rgba(0,0,0,0.12);text-align:center}
.login-logo{font-size:2.8rem;font-weight:700;color:var(--red);line-height:1}
.login-sub{font-size:1rem;color:#444;margin-bottom:28px}
.ifield{width:100%;border:1.5px solid var(--border);border-radius:8px;padding:12px 14px;font-family:inherit;font-size:.97rem;margin-bottom:13px;outline:none;transition:border .2s}
.ifield:focus{border-color:var(--blue)}
.btn{display:block;width:100%;padding:13px;background:var(--blue);color:#fff;border:none;border-radius:8px;font-family:inherit;font-size:1rem;font-weight:600;cursor:pointer;transition:background .2s}
.btn:hover{background:#155fa0}
.btn-red{background:var(--red)}.btn-red:hover{background:#c01a1f}
.btn-green{background:var(--success)}.btn-green:hover{background:#15803d}
.btn-dark{background:var(--dark)}.btn-dark:hover{background:#1e293b}
.btn-sm{display:inline-block;width:auto;padding:8px 18px;font-size:.87rem;border-radius:7px}
.btn-outline{background:#fff;color:var(--blue);border:1.5px solid var(--blue)}.btn-outline:hover{background:#f0f6ff}

/* ── STEPS ── */
.steps{display:flex;overflow-x:auto;margin-bottom:20px;border-radius:8px;overflow:hidden;border:1px solid var(--border)}
.step{flex:1;text-align:center;padding:10px 6px;background:#fff;font-size:.78rem;color:var(--muted);white-space:nowrap;min-width:80px}
.step.done{background:#e8f4ff;color:var(--blue);font-weight:600}
.step.active{background:var(--blue);color:#fff;font-weight:700}

/* ── FABRIC GRID ── */
.sec-hd{font-size:1.05rem;font-weight:700;color:var(--dark);border-left:4px solid var(--red);padding-left:10px;margin-bottom:13px}
.fabric-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(130px,1fr));gap:12px;margin-bottom:20px}
.fc{background:#fff;border:1.5px solid var(--border);border-radius:10px;padding:11px;text-align:center;cursor:pointer;transition:all .18s}
.fc:hover{border-color:var(--blue);transform:translateY(-2px);box-shadow:0 4px 16px rgba(26,111,196,.12)}
.fc.sel{border-color:var(--blue);background:#f0f6ff}
.fc-ico{width:72px;height:72px;border-radius:8px;margin:0 auto 8px;display:flex;align-items:center;justify-content:center;font-size:2.2rem;background:#f1f5f9}
.fc-name{font-size:.82rem;font-weight:600}
.fc-price{font-size:.8rem;color:var(--red);font-weight:700;margin-top:2px}

/* ── MEASURE GRID ── */
.mg{display:grid;grid-template-columns:repeat(auto-fill,minmax(200px,1fr));gap:13px;margin-bottom:14px}
.mi label{display:block;font-size:.84rem;font-weight:600;margin-bottom:5px}
.mi input,.mi select,.mi textarea{width:100%;border:1.5px solid var(--border);border-radius:7px;padding:9px 11px;font-family:inherit;font-size:.93rem;outline:none;transition:border .18s}
.mi input:focus,.mi select:focus,.mi textarea:focus{border-color:var(--blue)}

/* ── FABRIC RESULT ── */
.fab-res{background:linear-gradient(135deg,#f0f6ff,#e8f4fd);border:1.5px solid var(--blue);border-radius:10px;padding:13px 18px;margin-bottom:18px;display:none}
.fab-res.show{display:block}
.fr-lbl{font-size:.8rem;color:var(--muted)}
.fr-val{font-size:1.25rem;font-weight:700;color:var(--blue)}
.fr-note{font-size:.76rem;color:var(--muted);margin-top:3px}

/* ── OPTION TOGGLES ── */
.opt-wrap{display:flex;flex-wrap:wrap;gap:8px;margin-bottom:12px}
.opt{display:flex;align-items:center;gap:6px;background:#f8fafc;border:1.5px solid var(--border);border-radius:8px;padding:7px 13px;cursor:pointer;font-size:.86rem;user-select:none;transition:all .15s}
.opt:hover{border-color:var(--blue);background:#f0f6ff}
.opt.on{border-color:var(--blue);background:#e8f4ff;color:var(--blue);font-weight:600}
.opt .ck{font-size:.9rem;color:#ccc}
.opt.on .ck{color:var(--blue)}

/* ── SUB OPTIONS ── */
.sub{background:#f8fafd;border:1px solid var(--border);border-radius:8px;padding:12px 14px;margin-top:8px;display:none}
.sub.show{display:block}
.sub label{font-size:.84rem;display:flex;align-items:center;gap:7px;margin-bottom:6px;cursor:pointer}
.sub input[type=radio],.sub input[type=checkbox]{accent-color:var(--blue)}
.inline-m{display:flex;align-items:center;gap:8px;flex-wrap:wrap;margin-top:7px}
.inline-m label{font-size:.82rem;color:var(--muted);white-space:nowrap}
.inline-m input{border:1.5px solid var(--border);border-radius:6px;padding:5px 9px;font-family:inherit;font-size:.86rem;width:88px;outline:none}
.inline-m input:focus{border-color:var(--blue)}

/* ── COLOR PICKER ── */
.cprow{display:flex;align-items:center;gap:9px;margin-top:9px;flex-wrap:wrap}
.cprow label{font-size:.83rem;color:var(--muted)}
.cprow input[type=color]{width:34px;height:28px;border:1.5px solid var(--border);border-radius:5px;cursor:pointer;padding:0}
.cprow input[type=text]{border:1.5px solid var(--border);border-radius:6px;padding:5px 9px;font-family:inherit;font-size:.84rem;width:120px;outline:none}

/* ── SUMMARY ── */
.sum-block{border:1px solid var(--border);border-radius:8px;padding:13px 15px;margin-bottom:12px}
.sum-row{display:flex;justify-content:space-between;font-size:.86rem;margin-bottom:5px}
.sum-row .sl{color:var(--muted)}
.sum-row .sv{font-weight:600}
.total-row{display:flex;justify-content:space-between;font-size:1.05rem;font-weight:700;color:var(--red);border-top:2px solid var(--border);padding-top:10px;margin-top:6px}

/* ── PAYMENT ── */
.pay-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(130px,1fr));gap:10px}
.pm{border:2px solid var(--border);border-radius:10px;padding:12px;cursor:pointer;text-align:center;transition:all .16s}
.pm:hover{border-color:var(--blue)}
.pm.on{border-color:var(--blue);background:#f0f6ff}
.pm-ico{font-size:1.5rem;margin-bottom:4px}
.pm-name{font-size:.82rem;font-weight:600}

/* ── TRACKING ── */
.track-bar{display:flex;gap:9px;margin-bottom:16px}
.track-bar input{flex:1;border:1.5px solid var(--border);border-radius:8px;padding:10px 13px;font-family:inherit;font-size:.93rem;outline:none}
.track-bar input:focus{border-color:var(--blue)}
.track-bar button{padding:10px 20px;background:var(--blue);color:#fff;border:none;border-radius:8px;font-family:inherit;font-size:.93rem;font-weight:600;cursor:pointer}
.ord-card{background:#fff;border:1.5px solid var(--border);border-radius:10px;padding:15px;margin-bottom:13px}
.ord-hd{display:flex;justify-content:space-between;align-items:center;margin-bottom:9px}
.ord-id{font-weight:700;color:var(--blue);font-size:.95rem}
.badge{padding:3px 11px;border-radius:20px;font-size:.75rem;font-weight:700}
.b-proc{background:#dbeafe;color:#1d4ed8}
.b-done{background:#dcfce7;color:#15803d}
.b-pend{background:#fef9c3;color:#854d0e}
.timeline{padding-left:18px;position:relative}
.tl-item{position:relative;padding-bottom:13px;font-size:.83rem}
.tl-item::before{content:'';position:absolute;left:-14px;top:5px;width:7px;height:7px;border-radius:50%;background:var(--border)}
.tl-item.done::before{background:var(--success)}
.tl-item.active::before{background:var(--blue);box-shadow:0 0 0 3px #bfdbfe}
.tl-time{color:var(--muted);font-size:.76rem}

/* ── STATS ── */
.stats{display:grid;grid-template-columns:repeat(auto-fit,minmax(160px,1fr));gap:14px;margin-bottom:18px}
.stat{background:#fff;border:1.5px solid var(--border);border-radius:12px;padding:16px;text-align:center;box-shadow:var(--shadow)}
.stat-ico{font-size:1.8rem;margin-bottom:6px}
.stat-val{font-size:1.7rem;font-weight:700;color:var(--blue)}
.stat-lbl{font-size:.78rem;color:var(--muted);margin-top:2px}

/* ── FAQ ── */
.faq{border:1px solid var(--border);border-radius:8px;margin-bottom:7px;overflow:hidden}
.faq-q{padding:12px 15px;font-weight:600;cursor:pointer;display:flex;justify-content:space-between;font-size:.9rem}
.faq-a{padding:0 15px;font-size:.84rem;color:var(--muted);max-height:0;overflow:hidden;transition:all .3s}
.faq-a.open{max-height:200px;padding:0 15px 12px}

/* ── NOTIFICATION ── */
.notif{position:fixed;bottom:22px;right:22px;padding:12px 20px;border-radius:10px;font-weight:600;color:#fff;font-size:.9rem;z-index:9999;transform:translateY(60px);opacity:0;transition:all .3s;max-width:300px}
.notif.show{transform:translateY(0);opacity:1}

/* ── INFO BOX ── */
.info-box{background:#fffbeb;border:1px solid #fcd34d;border-radius:8px;padding:9px 13px;font-size:.83rem;color:#78350f;margin-bottom:13px}
.sep{border:none;border-top:1px solid var(--border);margin:14px 0}
.sec-sep{font-size:.95rem;font-weight:700;border-bottom:2px dashed var(--border);padding-bottom:7px;margin:16px 0 12px;color:var(--dark)}

/* ── PROFILE ── */
.prof-av{width:76px;height:76px;border-radius:50%;background:#dbeafe;border:3px solid var(--blue);display:flex;align-items:center;justify-content:center;font-size:2.3rem;margin:0 auto 12px}

/* ── FOOTER ── */
footer{text-align:center;padding:14px;color:var(--muted);font-size:.78rem;border-top:1px solid var(--border);background:#fff}

@media(max-width:600px){
  #app-header{padding:9px 11px}
  .logo-bn{font-size:1.45rem}
  #app-nav a{padding:9px 13px;font-size:.82rem}
  .page{padding:14px 9px 60px}
  .mg{grid-template-columns:1fr 1fr}
  .fabric-grid{grid-template-columns:repeat(auto-fill,minmax(95px,1fr))}
}
</style>
</head>
<body>

<!-- ════════════ LOGIN ════════════ -->
<div id="login-wrap">
  <div class="login-box">
    <div class="login-logo">ইসলামিয়া</div>
    <div class="login-sub">টেইলার্স এন্ড ফেব্রিক্স</div>
    <input class="ifield" id="lu" type="text" placeholder="ব্যবহারকারী নাম / ইমেল">
    <input class="ifield" id="lp" type="password" placeholder="পাসওয়ার্ড">
    <button class="btn" onclick="doLogin()">লগিন</button>
    <p style="margin-top:14px;font-size:.82rem;color:var(--muted)">
      <a style="color:var(--blue);cursor:pointer">পাসওয়ার্ড ভুলে গেছেন?</a> &nbsp;|&nbsp;
      <a style="color:var(--blue);cursor:pointer">নতুন অ্যাকাউন্ট তৈরি করুন</a>
    </p>
    <p style="margin-top:16px;font-size:.75rem;color:#aaa">আমাদের সম্পর্কে | যোগাযোগ | শর্তাবলী</p>
  </div>
</div>

<!-- ════════════ MAIN APP ════════════ -->
<div id="app" style="display:none">

<header id="app-header">
  <button class="lang-sel">ভাষা: বাংলা ▼</button>
  <div class="logo-wrap" onclick="nav('dashboard')">
    <div class="logo-bn">ইসলামিয়া</div>
    <div class="logo-en">টেইলার্স এন্ড ফেব্রিক্স</div>
  </div>
  <div class="user-box">
    <div class="avatar">👤</div>
    <div>
      <div class="uname">মোস্তাফিজ</div>
      <div class="logout-btn" onclick="doLogout()">লগআউট</div>
    </div>
  </div>
</header>

<nav id="app-nav">
  <a id="n-dashboard" class="active" onclick="nav('dashboard')">ড্যাশবোর্ড</a>
  <a id="n-buy" onclick="nav('buy')">কাপড় কিনুন</a>
  <a id="n-tracking" onclick="nav('tracking')">অর্ডার ট্র্যাকিং</a>
  <a id="n-profile" onclick="nav('profile')">প্রোফাইল</a>
  <a id="n-help" onclick="nav('help')">সহায়তা</a>
</nav>

<!-- ═══════════════════════════════════
     PAGE: DASHBOARD
════════════════════════════════════ -->
<div id="p-dashboard" class="page show">
  <div class="pg-title">স্বাগতম, মোস্তাফিজ! 👋</div>
  <div class="stats">
    <div class="stat"><div class="stat-ico">📦</div><div class="stat-val">৩</div><div class="stat-lbl">মোট অর্ডার</div></div>
    <div class="stat"><div class="stat-ico">⏳</div><div class="stat-val">১</div><div class="stat-lbl">চলমান</div></div>
    <div class="stat"><div class="stat-ico">✅</div><div class="stat-val">২</div><div class="stat-lbl">সম্পন্ন</div></div>
    <div class="stat"><div class="stat-ico">💰</div><div class="stat-val" style="font-size:1.3rem">৳৭,২৫০</div><div class="stat-lbl">মোট ব্যয়</div></div>
  </div>
  <div class="card">
    <div class="card-title">সাম্প্রতিক অর্ডার</div>
    <div class="ord-card">
      <div class="ord-hd"><span class="ord-id">#ITF-2024-0042</span><span class="badge b-proc">তৈরি হচ্ছে</span></div>
      <div style="font-size:.83rem;color:var(--muted)">পাঞ্জাবি + পাজামা • আসাসফি • ৳২,৫৩৫</div>
    </div>
    <div class="ord-card">
      <div class="ord-hd"><span class="ord-id">#ITF-2024-0038</span><span class="badge b-done">সম্পন্ন ✓</span></div>
      <div style="font-size:.83rem;color:var(--muted)">শার্ট • ফ্লোরাল প্রিন্ট • ৳১,৮২০</div>
    </div>
    <div style="text-align:center;margin-top:12px">
      <button class="btn btn-sm btn-outline" onclick="nav('tracking')">সব অর্ডার দেখুন</button>
    </div>
  </div>
  <div class="card">
    <div class="card-title">নতুন অর্ডার করুন</div>
    <div style="display:flex;gap:10px;flex-wrap:wrap">
      <button class="btn btn-sm btn-red" onclick="nav('buy')">পাঞ্জাবি অর্ডার →</button>
      <button class="btn btn-sm btn-dark" onclick="nav('buy')">কাপড় দেখুন</button>
    </div>
  </div>
</div>

<!-- ═══════════════════════════════════
     PAGE: BUY — multi-step
════════════════════════════════════ -->
<div id="p-buy" class="page">

  <!-- ── STEP 1: Fabric ── -->
  <div id="s1">
    <div class="pg-title">কাপড়ের সংগ্রহ</div>
    <div class="steps">
      <div class="step active">১. কাপড়</div>
      <div class="step">২. পাঞ্জাবির মাপ</div>
      <div class="step">৩. কাস্টমাইজেশন</div>
      <div class="step">৪. সারসংক্ষেপ</div>
      <div class="step">৫. পেমেন্ট</div>
    </div>
    <div class="card">
      <div class="sec-hd">এক কালারের থান কাপড়</div>
      <div class="fabric-grid" id="solid-grid">
        <div class="fc" onclick="selFab(this,'আসাসফি',400,'🔵')"><div class="fc-ico">🔵</div><div class="fc-name">আসাসফি</div><div class="fc-price">৳৪০০/গজ</div></div>
        <div class="fc" onclick="selFab(this,'এলেক্ট্রো ট্রে',380,'🟦')"><div class="fc-ico">🟦</div><div class="fc-name">এলেক্ট্রো ট্রে</div><div class="fc-price">৳৩৮০/গজ</div></div>
        <div class="fc" onclick="selFab(this,'চায়না প্রেসিডেন্ট',420,'⬛')"><div class="fc-ico">⬛</div><div class="fc-name">চায়না প্রেসিডেন্ট</div><div class="fc-price">৳৪২০/গজ</div></div>
        <div class="fc" onclick="selFab(this,'প্রেসিডেন্ট ট্রে',360,'🟫')"><div class="fc-ico">🟫</div><div class="fc-name">প্রেসিডেন্ট ট্রে</div><div class="fc-price">৳৩৬০/গজ</div></div>
        <div class="fc" onclick="selFab(this,'জাপানি ট্রে',450,'🟩')"><div class="fc-ico">🟩</div><div class="fc-name">জাপানি ট্রে</div><div class="fc-price">৳৪৫০/গজ</div></div>
        <div class="fc" onclick="selFab(this,'পাকিস্তানি ট্রে',340,'🫒')"><div class="fc-ico">🫒</div><div class="fc-name">পাকিস্তানি ট্রে</div><div class="fc-price">৳৩৪০/গজ</div></div>
      </div>
      <div id="fab-sel-info" style="display:none;background:#e8f4ff;border:1.5px solid var(--blue);border-radius:8px;padding:11px 15px;margin-bottom:14px;font-size:.88rem">
        ✅ নির্বাচিত: <strong id="fsi-name"></strong> — <span style="color:var(--red);font-weight:700">৳<span id="fsi-price"></span>/গজ</span>
      </div>

      <div class="sec-sep">প্রিন্ট কাপড়</div>
      <div class="fabric-grid" id="print-grid">
        <div class="fc" onclick="selFab(this,'ফ্লোরাল প্রিন্ট ১',320,'🌸')"><div class="fc-ico">🌸</div><div class="fc-name">ফ্লোরাল প্রিন্ট ১</div><div class="fc-price">৳৩২০/গজ</div></div>
        <div class="fc" onclick="selFab(this,'জ্যামিতিক প্রিন্ট ১',320,'🔷')"><div class="fc-ico">🔷</div><div class="fc-name">জ্যামিতিক প্রিন্ট ১</div><div class="fc-price">৳৩২০/গজ</div></div>
        <div class="fc" onclick="selFab(this,'জ্যামিতিক প্রিন্ট ২',320,'🔶')"><div class="fc-ico">🔶</div><div class="fc-name">জ্যামিতিক প্রিন্ট ২</div><div class="fc-price">৳৩২০/গজ</div></div>
        <div class="fc" onclick="selFab(this,'ফ্লোরাল প্রিন্ট ২',320,'🌺')"><div class="fc-ico">🌺</div><div class="fc-name">ফ্লোরাল প্রিন্ট ২</div><div class="fc-price">৳৩২০/গজ</div></div>
        <div class="fc" onclick="selFab(this,'ঐতিহ্যবাহী প্রিন্ট ১',320,'🪢')"><div class="fc-ico">🪢</div><div class="fc-name">ঐতিহ্যবাহী প্রিন্ট ১</div><div class="fc-price">৳৩২০/গজ</div></div>
        <div class="fc" onclick="selFab(this,'ঐতিহ্যবাহী প্রিন্ট ২',320,'🎋')"><div class="fc-ico">🎋</div><div class="fc-name">ঐতিহ্যবাহী প্রিন্ট ২</div><div class="fc-price">৳৩২০/গজ</div></div>
      </div>

      <div class="sec-sep">পাজামার কাপড় (ঐচ্ছিক)</div>
      <div class="fabric-grid" id="paj-grid">
        <div class="fc" onclick="selPaj(this,'লিলেন সাদা',300)"><div class="fc-ico">⬜</div><div class="fc-name">লিলেন (সাদা)</div><div class="fc-price">৳৩০০/গজ</div></div>
        <div class="fc" onclick="selPaj(this,'লিলেন কালো',310)"><div class="fc-ico">⬛</div><div class="fc-name">লিলেন (কালো)</div><div class="fc-price">৳৩১০/গজ</div></div>
        <div class="fc" onclick="selPaj(this,'কটন সাদা',280)"><div class="fc-ico">🤍</div><div class="fc-name">কটন (সাদা)</div><div class="fc-price">৳২৮০/গজ</div></div>
      </div>
      <div id="paj-sel-info" style="display:none;background:#f0fdf4;border:1.5px solid var(--success);border-radius:8px;padding:9px 13px;margin-bottom:13px;font-size:.85rem">
        পাজামার কাপড়: <strong id="psi-name"></strong> — ৳<span id="psi-price"></span>/গজ
      </div>

      <button class="btn" onclick="goS2()">পরবর্তী ধাপ → মাপ দিন</button>
    </div>
  </div>

  <!-- ── STEP 2: Measurements ── -->
  <div id="s2" style="display:none">
    <div class="pg-title">পাঞ্জাবির মাপের তথ্য</div>
    <div class="steps">
      <div class="step done">১. কাপড়</div>
      <div class="step active">২. পাঞ্জাবির মাপ</div>
      <div class="step">৩. কাস্টমাইজেশন</div>
      <div class="step">৪. সারসংক্ষেপ</div>
      <div class="step">৫. পেমেন্ট</div>
    </div>
    <div class="card">
      <div class="card-title">জামার মাপ</div>
      <div class="info-box">✏️ মাপ দিলে স্বয়ংক্রিয়ভাবে কাপড়ের পরিমাণ হিসাব হবে</div>
      <div class="mg">
        <div class="mi"><label>জামার লম্বা</label><input id="m-len" type="number" placeholder="ইঞ্চি" oninput="calcFab()"></div>
        <div class="mi"><label>ফিটিং বডির মাপ</label><input id="m-chest" type="number" placeholder="ইঞ্চি" oninput="calcFab()"></div>
        <div class="mi"><label>কাঁধের মাপ</label><input id="m-shldr" type="number" placeholder="ইঞ্চি"></div>
        <div class="mi"><label>হাতের লম্বার মাপ</label><input id="m-slv" type="number" placeholder="ইঞ্চি"></div>
        <div class="mi"><label>হাতের মুঠির মাপ</label><input id="m-wrist" type="number" placeholder="ইঞ্চি"></div>
        <div class="mi"><label>কলার</label><input id="m-clr" type="number" placeholder="ইঞ্চি"></div>
        <div class="mi"><label>বডির লুজ কত হবে</label><input id="m-loose" type="number" placeholder="ইঞ্চি"></div>
        <div class="mi"><label>জামার নিচের পাশ কত হবে</label><input id="m-bot" type="number" placeholder="ইঞ্চি"></div>
      </div>

      <!-- AUTO FABRIC RESULT -->
      <div class="fab-res" id="fab-res">
        <div class="fr-lbl">প্রয়োজনীয় কাপড়ের পরিমাণ (পাঞ্জাবি)</div>
        <div class="fr-val" id="fr-val">—</div>
        <div class="fr-note" id="fr-note"></div>
      </div>
    </div>

    <div class="card">
      <div class="card-title">পাজামার মাপ</div>
      <div class="mg">
        <div class="mi"><label>পাজামার লম্বা</label><input type="number" placeholder="ইঞ্চি"></div>
        <div class="mi"><label>মাজার / কোমরের মাপ</label><input type="number" placeholder="ইঞ্চি"></div>
        <div class="mi"><label>পাজামার মুঠির মাপ</label><input type="number" placeholder="ইঞ্চি"></div>
        <div class="mi"><label>তৈরির পর রনেন লুজের মাপ</label><input type="number" placeholder="ইঞ্চি"></div>
        <div class="mi"><label>পকেট মাপ ও হাইয়ের মাপ</label><input type="text" placeholder="ইঞ্চি"></div>
      </div>
      <label style="display:flex;align-items:center;gap:7px;font-size:.86rem;margin-top:4px;cursor:pointer">
        <input type="checkbox" id="paj-pocket" checked style="accent-color:var(--blue)"> পাজামার পকেটে চেইন হবে
      </label>
    </div>

    <div class="card">
      <label style="font-weight:600;font-size:.9rem">অতিরিক্ত তথ্য এবং অনুরোধ</label>
      <textarea id="extra-notes" style="width:100%;border:1.5px solid var(--border);border-radius:8px;padding:9px 11px;font-family:inherit;font-size:.88rem;margin-top:8px;resize:vertical;min-height:76px;outline:none" placeholder="অতিরিক্ত তথ্য লিখুন..."></textarea>
    </div>

    <div style="display:flex;gap:9px">
      <button class="btn btn-sm btn-outline" onclick="goS(1)" style="flex:1;padding:12px">← পেছনে</button>
      <button class="btn" onclick="goS3()" style="flex:2">পরবর্তী → কাস্টমাইজেশন</button>
    </div>
  </div>

  <!-- ── STEP 3: Customization ── -->
  <div id="s3" style="display:none">
    <div class="pg-title">পাঞ্জাবির কাস্টমাইজেশন</div>
    <div class="steps">
      <div class="step done">১. কাপড়</div>
      <div class="step done">২. মাপ</div>
      <div class="step active">৩. কাস্টমাইজেশন</div>
      <div class="step">৪. সারসংক্ষেপ</div>
      <div class="step">৫. পেমেন্ট</div>
    </div>

    <!-- পকেট ও চেইন -->
    <div class="card">
      <div class="card-title">পকেট ও চেইন</div>
      <div class="opt-wrap">
        <div class="opt" onclick="tog(this)"><span class="ck">✔</span> পকেটে চেইন</div>
        <div class="opt" onclick="tog(this)"><span class="ck">✔</span> বুকে গোল্ডেন চেইন</div>
        <div class="opt" onclick="tog(this)"><span class="ck">✔</span> বুকে হিডেন চেইন</div>
        <div class="opt" onclick="tog(this)"><span class="ck">✔</span> স্নাপ বাটন</div>
      </div>
    </div>

    <!-- কলার স্টাইল -->
    <div class="card">
      <div class="card-title">কলার স্টাইল</div>
      <div class="opt-wrap" id="clr-grp">
        <div class="opt opt-r" onclick="radOpt('clr-grp',this)"><span class="ck">✔</span> শার্ট কলার</div>
        <div class="opt opt-r" onclick="radOpt('clr-grp',this)"><span class="ck">✔</span> বেন কলার</div>
        <div class="opt opt-r" onclick="radOpt('clr-grp',this)"><span class="ck">✔</span> শেরওয়ানি কলার</div>
        <div class="opt opt-r" onclick="radOpt('clr-grp',this)"><span class="ck">✔</span> গোল কলার</div>
      </div>
      <div class="inline-m" style="margin-top:9px">
        <label>কলারের চওড়া:</label>
        <input type="number" placeholder="ইঞ্চি">
        <label>ইঞ্চি</label>
      </div>
    </div>

    <!-- প্লেট -->
    <div class="card">
      <div class="card-title">প্লেটের ধরন</div>
      <div class="opt-wrap" id="plt-grp">
        <div class="opt opt-r" onclick="radOpt('plt-grp',this)"><span class="ck">✔</span> ডাবল প্লেট</div>
        <div class="opt opt-r" onclick="radOpt('plt-grp',this)"><span class="ck">✔</span> উলটা প্লেট</div>
        <div class="opt opt-r" onclick="radOpt('plt-grp',this)"><span class="ck">✔</span> মাদানি প্লেট</div>
      </div>
      <div class="inline-m" style="margin-top:9px">
        <label>প্লেটের লম্বা:</label><input type="number" placeholder="ইঞ্চি">
        <label>প্লেটের চওড়া:</label><input type="number" placeholder="ইঞ্চি">
      </div>
    </div>

    <!-- হাতার ডিজাইন -->
    <div class="card">
      <div class="card-title">হাতার ডিজাইন</div>
      <div class="opt-wrap" id="slv-grp">
        <div class="opt opt-r" onclick="radOpt('slv-grp',this);showSub('sub-caf',false);showSub('sub-cfln',false)"><span class="ck">✔</span> সাধারণ হাতা</div>
        <div class="opt opt-r" onclick="radOpt('slv-grp',this);showSub('sub-caf',true);showSub('sub-cfln',false)"><span class="ck">✔</span> হাতে কাফ</div>
        <div class="opt opt-r" onclick="radOpt('slv-grp',this);showSub('sub-cfln',true);showSub('sub-caf',false)"><span class="ck">✔</span> কাফলিন হাতা</div>
      </div>
      <div class="sub" id="sub-caf">
        <strong style="font-size:.84rem">কাফের বিবরণ</strong>
        <div class="inline-m" style="margin-top:7px">
          <label>কাফের চওড়া:</label><input type="number" placeholder="ইঞ্চি">
        </div>
      </div>
      <div class="sub" id="sub-cfln">
        <strong style="font-size:.84rem">কাফলিন বাটন</strong>
        <label style="margin-top:7px"><input type="radio" name="cfln" checked> কাফলিন বাটন সহ</label>
        <label><input type="radio" name="cfln"> কাফলিন বাটন ছাড়া</label>
        <div class="inline-m" style="margin-top:6px">
          <label>কাফলিন চওড়া:</label><input type="number" placeholder="ইঞ্চি">
        </div>
      </div>
    </div>

    <!-- পাঞ্জাবির নিচ -->
    <div class="card">
      <div class="card-title">পাঞ্জাবির নিচের ডিজাইন</div>
      <div class="opt-wrap">
        <div class="opt" onclick="tog(this)"><span class="ck">✔</span> পাঞ্জাবির নিচ রাউন্ড</div>
      </div>
    </div>

    <!-- পাইপিন -->
    <div class="card">
      <div class="card-title">পাইপিন অপশন</div>
      <div class="opt-wrap">
        <div class="opt" id="pip-tog" onclick="togPiping(this)"><span class="ck">✔</span> পাইপিন যোগ করুন</div>
      </div>
      <div class="sub" id="sub-pip">
        <strong style="font-size:.84rem;display:block;margin-bottom:8px">পাইপিন কোথায় হবে?</strong>
        <label><input type="checkbox"> কলারে</label>
        <label><input type="checkbox"> হাতে</label>
        <label><input type="checkbox"> প্লেটে</label>
        <hr class="sep">
        <strong style="font-size:.84rem;display:block;margin-bottom:7px">পাইপিন কত সাইড?</strong>
        <label><input type="radio" name="pip-side" checked> এক সাইড</label>
        <label><input type="radio" name="pip-side"> দুই সাইড</label>
        <hr class="sep">
        <strong style="font-size:.84rem;display:block;margin-bottom:7px">পাইপিনের রঙ</strong>
        <div class="cprow">
          <label>রঙ বাছুন:</label>
          <input type="color" id="pip-clr" value="#e31e24" oninput="pipClr()">
          <input type="text" id="pip-clr-name" placeholder="রঙের নাম" value="লাল">
        </div>
        <div id="pip-clr-preview" style="margin-top:8px;display:flex;align-items:center;gap:8px;font-size:.82rem">
          <div id="pip-swatch" style="width:24px;height:24px;border-radius:4px;background:#e31e24;border:1px solid #ddd"></div>
          <span id="pip-clr-label">লাল (#e31e24)</span>
        </div>
      </div>
    </div>

    <div style="display:flex;gap:9px">
      <button class="btn btn-sm btn-outline" onclick="goS(2)" style="flex:1;padding:12px">← পেছনে</button>
      <button class="btn" onclick="goS4()" style="flex:2">পরবর্তী → সারসংক্ষেপ</button>
    </div>
  </div>

  <!-- ── STEP 4: Summary ── -->
  <div id="s4" style="display:none">
    <div class="pg-title">অর্ডার সারসংক্ষেপ</div>
    <div class="steps">
      <div class="step done">১. কাপড়</div><div class="step done">২. মাপ</div><div class="step done">৩. কাস্টম</div>
      <div class="step active">৪. সারসংক্ষেপ</div><div class="step">৫. পেমেন্ট</div>
    </div>
    <div class="card">
      <div class="card-title">১. পাঞ্জাবি / জামা অংশ</div>
      <div class="sum-block">
        <div class="sum-row"><span class="sl">কাপড়ের নাম:</span><span class="sv" id="sum-fab">—</span></div>
        <div class="sum-row"><span class="sl">প্রয়োজনীয় কাপড়:</span><span class="sv" id="sum-qty">—</span></div>
        <div class="sum-row"><span class="sl">প্রতি গজের দাম:</span><span class="sv" id="sum-ppu">—</span></div>
        <div class="sum-row"><span class="sl">মোট কাপড়ের দাম:</span><span class="sv" id="sum-fabt">—</span></div>
        <div class="sum-row"><span class="sl">তৈরির মজুরি:</span><span class="sv">৳৫০০</span></div>
      </div>
    </div>
    <div class="card">
      <div class="card-title">২. পাজামা অংশ</div>
      <div class="sum-block">
        <div class="sum-row"><span class="sl">কাপড়ের নাম:</span><span class="sv" id="sum-paj">লিলেন (সাদা)</span></div>
        <div class="sum-row"><span class="sl">প্রয়োজনীয় কাপড়:</span><span class="sv">২.২৫ গজ</span></div>
        <div class="sum-row"><span class="sl">মোট কাপড়ের দাম:</span><span class="sv">৳৬৭৫</span></div>
        <div class="sum-row"><span class="sl">তৈরির মজুরি:</span><span class="sv">৳২০০</span></div>
      </div>
    </div>
    <div class="card">
      <div class="sum-row"><span class="sl">সাব-টোটাল:</span><span class="sv" id="sum-sub">—</span></div>
      <div class="sum-row"><span class="sl">ডেলিভারি চার্জ:</span><span class="sv">৳৬০</span></div>
      <div class="total-row"><span>সর্বমোট প্রদেয়:</span><span id="sum-total">—</span></div>
    </div>
    <div style="display:flex;gap:9px">
      <button class="btn btn-sm btn-outline" onclick="goS(3)" style="flex:1;padding:12px">← পেছনে</button>
      <button class="btn btn-red" onclick="goS5()" style="flex:2">কনফার্ম করুন →</button>
    </div>
  </div>

  <!-- ── STEP 5: Payment ── -->
  <div id="s5" style="display:none">
    <div class="pg-title">পেমেন্ট অপশন নির্বাচন করুন</div>
    <div class="steps">
      <div class="step done">১. কাপড়</div><div class="step done">২. মাপ</div><div class="step done">৩. কাস্টম</div>
      <div class="step done">৪. সারসংক্ষেপ</div><div class="step active">৫. পেমেন্ট</div>
    </div>
    <div class="card">
      <div style="text-align:right;color:var(--red);font-weight:700;font-size:1rem;margin-bottom:16px">
        সর্বমোট প্রদেয়: <span id="pay-amt">—</span> টাকা
      </div>

      <div style="font-weight:700;margin-bottom:10px;font-size:.9rem">১. মোবাইল ব্যাংকিং</div>
      <div class="pay-grid" style="grid-template-columns:repeat(4,1fr);margin-bottom:14px">
        <div class="pm" onclick="selPay(this)"><div class="pm-ico">📱</div><div class="pm-name">বিকাশ</div></div>
        <div class="pm" onclick="selPay(this)"><div class="pm-ico">🔴</div><div class="pm-name">নগদ</div></div>
        <div class="pm" onclick="selPay(this)"><div class="pm-ico">🟠</div><div class="pm-name">রকেট</div></div>
        <div class="pm" onclick="selPay(this)"><div class="pm-ico">🟡</div><div class="pm-name">উপায়</div></div>
      </div>
      <hr class="sep">
      <div style="font-weight:700;margin-bottom:10px;font-size:.9rem">২. কার্ড পেমেন্ট</div>
      <div class="pay-grid" style="grid-template-columns:repeat(3,1fr);margin-bottom:14px">
        <div class="pm" onclick="selPay(this)"><div class="pm-ico">💳</div><div class="pm-name">Visa</div></div>
        <div class="pm" onclick="selPay(this)"><div class="pm-ico">💳</div><div class="pm-name">Mastercard</div></div>
        <div class="pm" onclick="selPay(this)"><div class="pm-ico">💳</div><div class="pm-name">AMEX</div></div>
      </div>
      <hr class="sep">
      <div style="font-weight:700;margin-bottom:10px;font-size:.9rem">৩. অনলাইন গেটওয়ে</div>
      <div class="pay-grid" style="grid-template-columns:repeat(2,1fr);margin-bottom:14px">
        <div class="pm" onclick="selPay(this)"><div class="pm-ico">🔒</div><div class="pm-name">SSLCommerz</div></div>
        <div class="pm" onclick="selPay(this)"><div class="pm-ico">💚</div><div class="pm-name">AmarPay</div></div>
      </div>
      <hr class="sep">
      <div style="font-weight:700;margin-bottom:10px;font-size:.9rem">৪. ইন্টারনেট ব্যাংকিং</div>
      <select class="ifield" style="margin-bottom:14px">
        <option>ব্যাংক নির্বাচন করুন</option>
        <option>বাংলা ব্যাংক</option><option>ব্র্যাক ব্যাংক</option>
        <option>ডাচ বাংলা ব্যাংক</option><option>ইসলামী ব্যাংক</option>
        <option>সোনালী ব্যাংক</option><option>মার্কেন্টাইল ব্যাংক</option>
      </select>
      <hr class="sep">
      <div class="pm" onclick="selPay(this)" style="display:flex;align-items:center;gap:10px;justify-content:flex-start;padding:13px 16px">
        <span style="font-size:1.4rem">💵</span>
        <span style="font-weight:600">৫. ক্যাশ অন ডেলিভারি</span>
      </div>

      <button class="btn btn-green" onclick="placeOrder()" style="margin-top:18px;font-size:1rem;padding:14px">
        পেমেন্ট নিশ্চিত করুন ✓
      </button>
    </div>
  </div>
</div><!-- end buy page -->

<!-- ═══════════════════════════════════
     PAGE: TRACKING
════════════════════════════════════ -->
<div id="p-tracking" class="page">
  <div class="pg-title">অর্ডার ট্র্যাকিং</div>
  <div class="card">
    <div class="track-bar">
      <input type="text" id="tid" placeholder="অর্ডার আইডি লিখুন (যেমন: ITF-2024-0042)">
      <button onclick="trackOrd()">খুঁজুন</button>
    </div>
  </div>
  <div class="card">
    <div class="card-title">সকল অর্ডার</div>
    <div class="ord-card">
      <div class="ord-hd"><span class="ord-id">#ITF-2024-0042</span><span class="badge b-proc">তৈরি হচ্ছে</span></div>
      <div style="font-size:.82rem;color:var(--muted);margin-bottom:11px">পাঞ্জাবি + পাজামা • আসাসফি • ৳২,৫৩৫ • ০৫/১১/২০২৪</div>
      <div class="timeline">
        <div class="tl-item done">অর্ডার গৃহীত<div class="tl-time">০৫ নভেম্বর ২০২৪, ১০:৩২ AM</div></div>
        <div class="tl-item done">পেমেন্ট নিশ্চিত<div class="tl-time">০৫ নভেম্বর ২০২৪, ১০:৪৫ AM</div></div>
        <div class="tl-item active">কাপড় কাটা হচ্ছে<div class="tl-time">০৬ নভেম্বর ২০২৪</div></div>
        <div class="tl-item">সেলাই চলছে</div>
        <div class="tl-item">মান পরীক্ষা</div>
        <div class="tl-item">ডেলিভারি</div>
      </div>
    </div>
    <div class="ord-card">
      <div class="ord-hd"><span class="ord-id">#ITF-2024-0038</span><span class="badge b-done">সম্পন্ন ✓</span></div>
      <div style="font-size:.82rem;color:var(--muted)">শার্ট • ফ্লোরাল প্রিন্ট • ৳১,৮২০ • ডেলিভারি: ০১/১১/২০২৪</div>
    </div>
    <div class="ord-card">
      <div class="ord-hd"><span class="ord-id">#ITF-2024-0031</span><span class="badge b-done">সম্পন্ন ✓</span></div>
      <div style="font-size:.82rem;color:var(--muted)">পাঞ্জাবি • জাপানি ট্রে • ৳২,৯৯৫ • ডেলিভারি: ১৫/১০/২০২৪</div>
    </div>
  </div>
</div>

<!-- ═══════════════════════════════════
     PAGE: PROFILE
════════════════════════════════════ -->
<div id="p-profile" class="page">
  <div class="pg-title">আমার প্রোফাইল</div>
  <div class="card" style="text-align:center">
    <div class="prof-av">👤</div>
    <div style="font-size:1.2rem;font-weight:700">মোস্তাফিজুর রহমান</div>
    <div style="color:var(--muted);font-size:.85rem;margin-bottom:16px">mostafiz@email.com</div>
    <button class="btn btn-sm" style="background:var(--blue);color:#fff;width:auto;padding:9px 22px">প্রোফাইল সম্পাদনা</button>
  </div>
  <div class="card">
    <div class="card-title">ব্যক্তিগত তথ্য</div>
    <div class="mg">
      <div class="mi"><label>পূর্ণ নাম</label><input type="text" value="মোস্তাফিজুর রহমান"></div>
      <div class="mi"><label>ফোন নম্বর</label><input type="text" value="01XXXXXXXXX"></div>
      <div class="mi"><label>ইমেল</label><input type="text" value="mostafiz@email.com"></div>
      <div class="mi"><label>ঠিকানা</label><input type="text" placeholder="আপনার ঠিকানা"></div>
    </div>
    <button class="btn" style="margin-top:8px">তথ্য সংরক্ষণ করুন</button>
  </div>
  <div class="card">
    <div class="card-title">সংরক্ষিত মাপ</div>
    <div class="sum-block">
      <div class="sum-row"><span class="sl">জামার লম্বা:</span><span class="sv">৪২ ইঞ্চি</span></div>
      <div class="sum-row"><span class="sl">বুকের মাপ:</span><span class="sv">৩৮ ইঞ্চি</span></div>
      <div class="sum-row"><span class="sl">কাঁধ:</span><span class="sv">১৭ ইঞ্চি</span></div>
      <div class="sum-row"><span class="sl">হাতের লম্বা:</span><span class="sv">২৩ ইঞ্চি</span></div>
      <div class="sum-row"><span class="sl">কলার:</span><span class="sv">১৫ ইঞ্চি</span></div>
    </div>
    <button class="btn btn-sm btn-dark" style="margin-top:8px">মাপ আপডেট করুন</button>
  </div>
</div>

<!-- ═══════════════════════════════════
     PAGE: HELP
════════════════════════════════════ -->
<div id="p-help" class="page">
  <div class="pg-title">সহায়তা কেন্দ্র</div>
  <div class="card">
    <div class="card-title">আমাদের সাথে যোগাযোগ করুন</div>
    <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(160px,1fr));gap:12px">
      <div style="text-align:center;padding:14px;background:#f8fafc;border-radius:10px"><div style="font-size:1.8rem">📞</div><div style="font-weight:700;margin:5px 0 2px;font-size:.9rem">ফোন</div><div style="font-size:.82rem;color:var(--muted)">01XXXXXXXXX</div></div>
      <div style="text-align:center;padding:14px;background:#f8fafc;border-radius:10px"><div style="font-size:1.8rem">💬</div><div style="font-weight:700;margin:5px 0 2px;font-size:.9rem">WhatsApp</div><div style="font-size:.82rem;color:var(--muted)">01XXXXXXXXX</div></div>
      <div style="text-align:center;padding:14px;background:#f8fafc;border-radius:10px"><div style="font-size:1.8rem">📧</div><div style="font-weight:700;margin:5px 0 2px;font-size:.9rem">ইমেল</div><div style="font-size:.82rem;color:var(--muted)">info@islamia.bd</div></div>
      <div style="text-align:center;padding:14px;background:#f8fafc;border-radius:10px"><div style="font-size:1.8rem">📍</div><div style="font-weight:700;margin:5px 0 2px;font-size:.9rem">ঠিকানা</div><div style="font-size:.82rem;color:var(--muted)">ঢাকা, বাংলাদেশ</div></div>
    </div>
  </div>
  <div class="card">
    <div class="card-title">সাধারণ প্রশ্নাবলী</div>
    <div class="faq"><div class="faq-q" onclick="togFaq(this)">পাঞ্জাবি তৈরিতে কত সময় লাগে? <span>▼</span></div><div class="faq-a">সাধারণত ৫–৭ কার্যদিবস সময় লাগে। ঈদ বা উৎসবের সময় একটু বেশি লাগতে পারে। জরুরি অর্ডারের জন্য আমাদের সাথে সরাসরি যোগাযোগ করুন।</div></div>
    <div class="faq"><div class="faq-q" onclick="togFaq(this)">কাপড়ের পরিমাণ কীভাবে হিসাব হয়? <span>▼</span></div><div class="faq-a">জামার লম্বা ও বুকের মাপের উপর ভিত্তি করে স্বয়ংক্রিয়ভাবে হিসাব হয়। আড়াই গজের উপরে লাগলে পৌনে ৩ গজ ধরা হয়, সোয়া ২ গজ হলে আড়াই গজ ধরা হয়।</div></div>
    <div class="faq"><div class="faq-q" onclick="togFaq(this)">ডেলিভারি চার্জ কত? <span>▼</span></div><div class="faq-a">ঢাকার ভেতরে ৬০ টাকা, ঢাকার বাইরে ১২০ টাকা ডেলিভারি চার্জ। ৫,০০০ টাকার উপরে অর্ডারে ডেলিভারি ফ্রি।</div></div>
    <div class="faq"><div class="faq-q" onclick="togFaq(this)">মাপ ভুল হলে কী করব? <span>▼</span></div><div class="faq-a">অর্ডার দেওয়ার ২৪ ঘণ্টার মধ্যে আমাদের সাথে যোগাযোগ করুন। আমরা বিনামূল্যে সংশোধন করে দেব।</div></div>
    <div class="faq"><div class="faq-q" onclick="togFaq(this)">রিটার্ন পলিসি কী? <span>▼</span></div><div class="faq-a">পণ্য পাওয়ার ৭২ ঘণ্টার মধ্যে কোনো সমস্যা থাকলে জানান। কাস্টম তৈরি পোশাকের ক্ষেত্রে মান নিশ্চিত না হলে বিনামূল্যে পরিবর্তন করা হয়।</div></div>
  </div>
</div>

</div><!-- end #app -->

<!-- Notification -->
<div class="notif" id="notif"></div>

<footer>© ২০২৪ ইসলামিয়া টেইলার্স এন্ড ফেব্রিক্স | সর্বস্বত্ব সংরক্ষিত</footer>

<script>
// ════════ STATE ════════
const S = { fab:{name:'',price:0}, paj:{name:'',price:0}, fabQty:2.5, fabQtyLabel:'আড়াই গজ' };

// ════════ LOGIN ════════
function doLogin(){
  const u=document.getElementById('lu').value.trim();
  const p=document.getElementById('lp').value.trim();
  if(!u||!p){toast('ব্যবহারকারী নাম ও পাসওয়ার্ড দিন','#e31e24');return;}
  document.getElementById('login-wrap').style.display='none';
  document.getElementById('app').style.display='block';
  document.querySelector('footer').style.display='block';
}
document.getElementById('lp').addEventListener('keydown',e=>{if(e.key==='Enter')doLogin()});
function doLogout(){
  document.getElementById('login-wrap').style.display='flex';
  document.getElementById('app').style.display='none';
  document.querySelector('footer').style.display='none';
}

// ════════ NAV ════════
function nav(pg){
  document.querySelectorAll('.page').forEach(p=>p.classList.remove('show'));
  document.querySelectorAll('#app-nav a').forEach(a=>a.classList.remove('active'));
  document.getElementById('p-'+pg).classList.add('show');
  document.getElementById('n-'+pg).classList.add('active');
  window.scrollTo(0,0);
}

// ════════ FABRIC SELECTION ════════
function selFab(el,name,price){
  document.querySelectorAll('#solid-grid .fc,#print-grid .fc').forEach(c=>c.classList.remove('sel'));
  el.classList.add('sel');
  S.fab={name,price};
  document.getElementById('fab-sel-info').style.display='block';
  document.getElementById('fsi-name').textContent=name;
  document.getElementById('fsi-price').textContent=price;
  calcFab();
}
function selPaj(el,name,price){
  const wasOn=el.classList.contains('sel');
  document.querySelectorAll('#paj-grid .fc').forEach(c=>c.classList.remove('sel'));
  if(!wasOn){
    el.classList.add('sel');
    S.paj={name,price};
    document.getElementById('paj-sel-info').style.display='block';
    document.getElementById('psi-name').textContent=name;
    document.getElementById('psi-price').textContent=price;
  } else {
    S.paj={name:'',price:0};
    document.getElementById('paj-sel-info').style.display='none';
  }
}

// ════════ FABRIC CALCULATION ════════
function calcFab(){
  const len=parseFloat(document.getElementById('m-len')?.value)||0;
  const chest=parseFloat(document.getElementById('m-chest')?.value)||0;
  if(!len||!chest){document.getElementById('fab-res')?.classList.remove('show');return;}
  // Formula: (length/36)*2 + sleeve allowance 0.5 gaj
  const raw=(len/36)*2+0.5;
  let label,note,qty;
  if(raw>2.5){
    qty=2.75;label='পৌনে ৩ গজ (২.৭৫ গজ)';
    note='আড়াই গজের উপরে হওয়ায় পৌনে ৩ গজ ধরা হয়েছে';
  } else if(raw>2.25){
    qty=2.5;label='আড়াই গজ (২.৫ গজ)';
    note='সোয়া দুই গজের বেশি হওয়ায় আড়াই গজ ধরা হয়েছে';
  } else if(raw>2.0){
    qty=2.25;label='সোয়া দুই গজ (২.২৫ গজ)';note='';
  } else {
    qty=2;label='দুই গজ (২.০ গজ)';note='';
  }
  S.fabQty=qty; S.fabQtyLabel=label;
  document.getElementById('fab-res').classList.add('show');
  document.getElementById('fr-val').textContent=label;
  document.getElementById('fr-note').textContent=note;
}

// ════════ STEP NAVIGATION ════════
function goS(n){
  for(let i=1;i<=5;i++) document.getElementById('s'+i).style.display='none';
  document.getElementById('s'+n).style.display='block';
  window.scrollTo(0,0);
}
function goS2(){
  if(!S.fab.name){toast('প্রথমে পাঞ্জাবির কাপড় বাছুন','#e31e24');return;}
  goS(2);
}
function goS3(){goS(3);}
function goS4(){
  // populate summary
  const fc=Math.round(S.fabQty*S.fab.price);
  const paj=S.paj.name?S.paj.name:'লিলেন (সাদা)';
  const sub=fc+500+675+200;
  const total=sub+60;
  document.getElementById('sum-fab').textContent=S.fab.name||'—';
  document.getElementById('sum-qty').textContent=S.fabQtyLabel;
  document.getElementById('sum-ppu').textContent='৳'+S.fab.price+'/গজ';
  document.getElementById('sum-fabt').textContent='৳'+fc.toLocaleString();
  document.getElementById('sum-paj').textContent=paj;
  document.getElementById('sum-sub').textContent='৳'+sub.toLocaleString();
  document.getElementById('sum-total').textContent='৳'+total.toLocaleString();
  document.getElementById('pay-amt').textContent='৳'+total.toLocaleString();
  goS(4);
}
function goS5(){goS(5);}
function placeOrder(){
  toast('🎉 অর্ডার সফলভাবে দেওয়া হয়েছে!','#16a34a');
  setTimeout(()=>{goS(1);nav('tracking');},2200);
}

// ════════ OPTION TOGGLES ════════
function tog(el){
  el.classList.toggle('on');
}
function radOpt(grpId,el){
  document.querySelectorAll('#'+grpId+' .opt-r').forEach(o=>o.classList.remove('on'));
  el.classList.add('on');
}
function showSub(id,show){
  const el=document.getElementById(id);
  if(el) show?el.classList.add('show'):el.classList.remove('show');
}
function togPiping(el){
  el.classList.toggle('on');
  showSub('sub-pip',el.classList.contains('on'));
}

// ════════ PAYMENT ════════
function selPay(el){
  document.querySelectorAll('.pm').forEach(p=>p.classList.remove('on'));
  el.classList.add('on');
}

// ════════ PIPING COLOR ════════
function pipClr(){
  const hex=document.getElementById('pip-clr').value;
  const names={'#ff0000':'লাল','#e31e24':'লাল','#0000ff':'নীল','#008000':'সবুজ',
    '#ffffff':'সাদা','#000000':'কালো','#ffff00':'হলুদ','#ffa500':'কমলা',
    '#800080':'বেগুনী','#c8a84b':'সোনালী','#d4a017':'সোনালী','#ffc0cb':'গোলাপী',
    '#a52a2a':'বাদামী','#808080':'ধূসর'};
  document.getElementById('pip-swatch').style.background=hex;
  const name=names[hex.toLowerCase()]||'';
  if(name) document.getElementById('pip-clr-name').value=name;
  document.getElementById('pip-clr-label').textContent=(name||'কাস্টম')+' ('+hex+')';
}

// ════════ TRACKING ════════
function trackOrd(){
  const id=document.getElementById('tid').value.trim();
  if(!id){toast('অর্ডার আইডি লিখুন','#e31e24');return;}
  toast('অর্ডার #'+id+' খোঁজা হচ্ছে...','#1a6fc4');
}

// ════════ FAQ ════════
function togFaq(el){
  const ans=el.nextElementSibling;
  ans.classList.toggle('open');
  el.querySelector('span').textContent=ans.classList.contains('open')?'▲':'▼';
}

// ════════ NOTIFICATION ════════
function toast(msg,bg='#16a34a'){
  const n=document.getElementById('notif');
  n.textContent=msg; n.style.background=bg;
  n.classList.add('show');
  setTimeout(()=>n.classList.remove('show'),3000);
}

// ════════ INIT ════════
document.querySelector('footer').style.display='none';
</script>
</body>
</html>
