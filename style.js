* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

:root {
    --bg: #0d0d0f;
    --card: #18181b;
    --card-light: #222225;
    --text: #ffffff;
    --muted: #9a9a9f;
    --line: rgba(255,255,255,0.08);
    --accent: #ffffff;
}

body {
    font-family: Arial, Helvetica, sans-serif;
    background: var(--bg);
    color: var(--text);
    min-height: 100vh;
}

button {
    border: 0;
    outline: 0;
    cursor: pointer;
    color: inherit;
    font-family: inherit;
}

.app {
    width: 100%;
    max-width: 600px;
    min-height: 100vh;
    margin: auto;
    padding-bottom: 100px;
}

/* HEADER */

.header {
    height: 72px;
    padding: 0 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.brand {
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 21px;
    font-weight: 700;
}

.brand-icon {
    width: 34px;
    height: 34px;
    border-radius: 11px;
    background: #fff;
    color: #111;
    display: flex;
    align-items: center;
    justify-content: center;
}

.header-actions {
    display: flex;
    gap: 8px;
}

.header-actions button {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: var(--card);
    font-size: 20px;
}

/* HERO */

.hero {
    margin: 8px 16px 28px;
    min-height: 310px;
    border-radius: 28px;
    overflow: hidden;
    position: relative;
    background:
        radial-gradient(circle at 80% 20%, #56515d, transparent 32%),
        radial-gradient(circle at 20% 80%, #35323b, transparent 38%),
        linear-gradient(135deg, #29272d, #101012);
}

.hero::after {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(
        to top,
        rgba(0,0,0,.8),
        rgba(0,0,0,.05)
    );
}

.hero-content {
    position: absolute;
    z-index: 2;
    left: 24px;
    right: 24px;
    bottom: 24px;
}

.hero-label {
    font-size: 11px;
    letter-spacing: 3px;
    color: #bcbcc1;
}

.hero h1 {
    margin-top: 8px;
    font-size: 36px;
    line-height: 1.02;
    letter-spacing: -1.5px;
}

.hero p {
    margin-top: 12px;
    color: #c1c1c5;
    font-size: 14px;
}

.start-btn {
    margin-top: 18px;
    padding: 13px 19px;
    border-radius: 18px;
    background: #fff;
    color: #111;
    font-weight: 700;
    font-size: 14px;
}

.start-btn span {
    margin-right: 7px;
}

/* SECTIONS */

.create-section,
.content-section,
.tools-section {
    padding: 0 18px;
    margin-bottom: 30px;
}

.section-heading {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 15px;
}

.section-heading h2 {
    font-size: 21px;
}

.section-heading p {
    color: var(--muted);
    font-size: 12px;
    margin-top: 4px;
}

.section-heading button {
    background: transparent;
    color: #a9a9ae;
    font-size: 13px;
}

/* CREATE CARDS */

.create-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
}

.create-card {
    min-height: 125px;
    padding: 14px;
    border-radius: 20px;
    background: var(--card);
    text-align: left;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    transition: .2s;
}

.create-card:active,
.tools-grid button:active {
    transform: scale(.96);
}

.create-icon {
    width: 42px;
    height: 42px;
    border-radius: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--card-light);
    font-size: 20px;
}

.create-card strong {
    font-size: 15px;
}

.create-card small {
    color: var(--muted);
    font-size: 10px;
    line-height: 1.3;
}

/* POPULAR CARDS */

.horizontal-cards {
    display: flex;
    gap: 12px;
    overflow-x: auto;
    scrollbar-width: none;
}

.horizontal-cards::-webkit-scrollbar {
    display: none;
}

.visual-card {
    min-width: 155px;
    height: 190px;
    border-radius: 23px;
    position: relative;
    overflow: hidden;
    display: flex;
    align-items: flex-end;
    padding: 15px;
}

.visual-card::before {
    content: "";
    position: absolute;
    inset: 0;
    background:
        radial-gradient(circle at 70% 25%, #888, transparent 25%),
        linear-gradient(145deg, #4a484d, #111);
}

.card-two::before {
    background:
        radial-gradient(circle at 30% 25%, #777, transparent 22%),
        linear-gradient(145deg, #303034, #0b0b0c);
}

.card-three::before {
    background:
        radial-gradient(circle at 65% 55%, #999, transparent 20%),
        linear-gradient(145deg, #535158, #111);
}

.visual-card span {
    position: relative;
    z-index: 2;
    font-size: 11px;
    letter-spacing: 2px;
    font-weight: 700;
}

/* TOOLS */

.tools-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 9px;
}

.tools-grid button {
    min-height: 90px;
    border-radius: 19px;
    background: var(--card);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 9px;
}

.tools-grid span {
    font-size: 21px;
}

.tools-grid small {
    color: #b7b7bc;
    font-size: 11px;
}

/* BOTTOM NAV */

.bottom-nav {
    position: fixed;
    left: 50%;
    bottom: 12px;
    transform: translateX(-50%);
    width: min(94%, 570px);
    height: 72px;
    padding: 7px 12px;
    border-radius: 25px;
    background: rgba(25,25,28,.94);
    border: 1px solid var(--line);
    backdrop-filter: blur(18px);
    display: flex;
    align-items: center;
    justify-content: space-around;
    z-index: 20;
}

.nav-item {
    background: transparent;
    min-width: 70px;
    height: 58px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 4px;
    color: #77777d;
}

.nav-item span {
    font-size: 21px;
}

.nav-item small {
    font-size: 10px;
}

.nav-item.active {
    color: #fff;
}

.add-button {
    width: 49px;
    height: 49px;
    border-radius: 17px;
    background: #fff;
    color: #111;
    font-size: 28px;
    display: flex;
    align-items: center;
    justify-content: center;
}

/* MOBILE */

@media (max-width: 380px) {

    .hero h1 {
        font-size: 31px;
    }

    .create-grid {
        gap: 7px;
    }

    .create-card {
        padding: 11px;
    }

    .tools-grid small {
        font-size: 10px;
    }
               }
