const handleCard = ({ data: [], target }) => {
    const swiperSlide = document.querySelector(target);
    data.forEach((item) => {
        swiperSlide.innerHTML += `
        <li
            class="detail-factor list-item color-light poppins-medium font-paragraph"
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
                content: `Volume sampah sangat besar
            dan tidak diimbangi oleh
            daya tamping TPA sehingga
            melebihi kapasitasnya.`,
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

export { handleFirstCard };
