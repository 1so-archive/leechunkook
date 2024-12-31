$(document).ready(function(){
    $('.open-menu').click(function(){
        $('.open-menu').fadeOut(0);
        $('.mobile-menu, .close-menu').fadeIn(0);
    });
    $('.close-menu').click(function(){
        $('.mobile-menu, .close-menu').fadeOut(0);
        $('.open-menu').fadeIn(0);
    });
});

// document.addEventListener("DOMContentLoaded", () => {
//     const transitionEl = document.querySelector(".page-transition");
//     const links = document.querySelectorAll("a.fade-link");

//     // 페이지 로드 시 500ms 후에 페이드인 효과 적용
//     setTimeout(() => {
//         transitionEl.classList.add("visible"); // 페이지 내용 보이기
//     }, 500); // 500ms 후 페이드인 시작

//     // 링크 클릭 시 페이드아웃 효과
//     links.forEach(link => {
//         link.addEventListener("click", e => {
//             e.preventDefault(); // 기본 동작 방지
//             const targetUrl = link.href;

//             // 페이드아웃 효과 활성화
//             transitionEl.classList.add("hidden"); // 하얀색 페이드 아웃

//             // 페이지 전환 (페이드아웃 효과가 끝날 때까지 기다린 후 전환)
//             setTimeout(() => {
//                 window.location.href = targetUrl;
//             }, 1000); // 페이드아웃 시간과 동일하게 설정 (1초)
//         });
//     });
// });

document.addEventListener("DOMContentLoaded", () => {
    const transitionEl = document.querySelector(".page-transition");
    const links = document.querySelectorAll("a.fade-link");

    // 페이지 로드 후 일정 시간 후 페이드아웃 효과 적용
    setTimeout(() => {
        transitionEl.classList.add("hidden");
    }, 500);

    // 링크 클릭 시 페이드인 효과
    links.forEach(link => {
        link.addEventListener("click", e => {
            e.preventDefault(); // 기본 동작 방지
            const targetUrl = link.href;

            // 페이드인 효과 활성화
            transitionEl.classList.remove("hidden");
            transitionEl.classList.add("visible");

            // 페이지 전환
            setTimeout(() => {
                window.location.href = targetUrl;
            }, 500); // CSS와 동일한 transition 시간
        });
    });
});


document.addEventListener('DOMContentLoaded', () => {
    const video = document.querySelector('.background-video');

    video.addEventListener('loadedmetadata', () => {
        video.playbackRate = 0.5;
    });

    video.addEventListener('ended', function () {
        video.style.opacity = 0;
        video.currentTime = 0;
        video.play();
        setTimeout(() => {
            video.style.opacity = 1;
        }, 100);
    });
});
