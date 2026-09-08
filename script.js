const photoInput = document.getElementById("photoInput");
const videoInput = document.getElementById("videoInput");

const photoBtn = document.getElementById("photoBtn");
const videoBtn = document.getElementById("videoBtn");
const startBtn = document.getElementById("startBtn");
const addBtn = document.getElementById("addBtn");

photoBtn.addEventListener("click", () => {
    photoInput.click();
});

videoBtn.addEventListener("click", () => {
    videoInput.click();
});

startBtn.addEventListener("click", () => {
    chooseMedia();
});

addBtn.addEventListener("click", () => {
    chooseMedia();
});

function chooseMedia() {
    const choice = confirm(
        "Nə redaktə etmək istəyirsən?\n\n" +
        "OK → Foto\n" +
        "Cancel → Video"
    );

    if (choice) {
        photoInput.click();
    } else {
        videoInput.click();
    }
}

photoInput.addEventListener("change", (event) => {
    const file = event.target.files[0];

    if (!file) return;

    if (!file.type.startsWith("image/")) {
        alert("Zəhmət olmasa foto seç.");
        return;
    }

    alert("Foto seçildi: " + file.name);

    // Foto editorunu burada açacağıq
});

videoInput.addEventListener("change", (event) => {
    const file = event.target.files[0];

    if (!file) return;

    if (!file.type.startsWith("video/")) {
        alert("Zəhmət olmasa video seç.");
        return;
    }

    alert("Video seçildi: " + file.name);

    // Video editorunu burada açacağıq
});

document.getElementById("searchBtn").addEventListener("click", () => {
    alert("Axtarış bölməsi tezliklə əlavə olunacaq.");
});

document.getElementById("moreBtn").addEventListener("click", () => {
    alert("Daha çox seçimlər tezliklə əlavə olunacaq.");
});

document.getElementById("projectsNav").addEventListener("click", () => {
    alert("Layihələr bölməsi tezliklə əlavə olunacaq.");
});

document.getElementById("profileNav").addEventListener("click", () => {
    alert("Profil bölməsi tezliklə əlavə olunacaq.");
});

document.getElementById("homeNav").addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
