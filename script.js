const leftItems = document.querySelectorAll(".left-item");

leftItems.forEach(item => {
    item.addEventListener("click", () => {
        document.querySelector(".left-item.active")?.classList.remove("active");
        item.classList.add("active");
    });
});

// ==================== 컬러 설정 ====================

// 헤더 배경색 변경
document.getElementById("headerBgColor").addEventListener("input", e => {
    document.documentElement.style.setProperty('--table-header-bg', e.target.value);
});

// 헤더 글자색 변경
document.getElementById("headerTextColor").addEventListener("input", e => {
    document.documentElement.style.setProperty('--table-header-text', e.target.value);
});

// 행 배경색 변경
document.getElementById("rowBgColor").addEventListener("input", e => {
    document.documentElement.style.setProperty('--table-row-bg', e.target.value);
});

// 행 텍스트색 변경
document.getElementById("rowTextColor").addEventListener("input", e => {
    document.documentElement.style.setProperty('--table-row-text', e.target.value);
});
