// 팝업
document.addEventListener('DOMContentLoaded', () => {
    const gridItems = document.querySelectorAll('.grid-item');
    const popup = document.getElementById('popup-container');
    const popupImage = document.getElementById('popup-image');
    const closePopupButton = document.getElementById('close-popup');
    const prevButton = document.getElementById('prev-btn');
    const nextButton = document.getElementById('next-btn');

    let currentIndex = 0; // 현재 이미지의 인덱스 추적

    // 팝업 열기
    gridItems.forEach((item, index) => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            const img = item.querySelector('.work-img');
            const imgSrc = img.getAttribute('src');
            const imgAlt = img.getAttribute('alt');

            currentIndex = index; // 클릭한 이미지의 인덱스 저장
            popupImage.src = imgSrc;
            popupImage.alt = imgAlt;
            popup.classList.remove('hidden');
        });
    });

    // 팝업 닫기
    closePopupButton.addEventListener('click', () => {
        popup.classList.add('hidden');
        popupImage.src = ''; // 이미지 초기화
    });

    // 팝업 외부 클릭 시 닫기
    popup.addEventListener('click', (e) => {
        if (e.target === popup) {
            popup.classList.add('hidden');
            popupImage.src = ''; // 이미지 초기화
        }
    });

    // 이전 이미지로 이동
    prevButton.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + gridItems.length) % gridItems.length; // 인덱스 순환
        updatePopupImage();
    });

    // 다음 이미지로 이동
    nextButton.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % gridItems.length; // 인덱스 순환
        updatePopupImage();
    });

    // 팝업 이미지 업데이트
    function updatePopupImage() {
        const img = gridItems[currentIndex].querySelector('.work-img');
        const imgSrc = img.getAttribute('src');
        const imgAlt = img.getAttribute('alt');

        popupImage.src = imgSrc;
        popupImage.alt = imgAlt;
    }
});
