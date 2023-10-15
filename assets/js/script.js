const handleCard = ({ data, target }) => {
    const swiperSlide = document.querySelector(target);
    data.forEach((item) => {
        swiperSlide.innerHTML += `
            <li
                class="detail-factor factor-item color-light poppins-medium font-paragraph"
            >
                ${item.content}
            </li>
        `;
    });
};

const handleFirstCard = () =>
    handleCard({
        data: [
            {
                id: 1,
                content: `Lahan TPA semakin menyempit akibat tergusur oleh pengunaan lain. `,
            },
            {
                id: 2,
                content: `Jarak TPA dan pusat sampah
                        relatif jauh hingga waktu
                        untuk menganggut sampah
                        kurang efektif.`,
            },
            {
                id: 3,
                content: `Fasilitas pengakutan sampah
                        terbatas dan tidak mampu
                        menganggut seluruh sampah.`,
            },
        ],
        target: "#first-swiper-slide",
    });

const hideElements = () => {
    var elementsToHide = document.getElementsByClassName("factor-hidden-item");
    for (var i = 0; i < elementsToHide.length; i++) {
        elementsToHide[i].style.display = "none";
    }
};
