<!doctype html>
<html lang="vi">

<?php include('head.php'); ?>

<body>

    <?php include('header.php'); ?>

    <!-- BANNER -->
    <section class="section-banner relative bg-gradient-to-b from-[#C6E2D3] to-[#92BAA3] text-center overflow-hidden">
        <img class="banner-pc" src="assets/images/banner-pc.jpg" alt="banner for PC" />
        <img class="banner-sp" src="assets/images/banner-sp.jpg" alt="banner for SP" />
        <a href="#" class="btn-more">TÌM HIỂU NGAY</a>
    </section>

    <!-- Section ĐI RỪNG KIỂU MỚI -->
    <section class="secion-di-rung-kieu-moi relative bg-[#08564B] py-16 overflow-hidden">
        <div class="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-[20px] md:gap-12 px-6">
            <!-- Bên trái: Nội dung -->
            <div class="text-white">
                <h2 class="text-4xl md:text-5xl font-bold leading-tight mb-10">
                    Tổ Ong muốn mời bạn<br>
                    thử một cách “đi rừng”<br>
                    hoàn toàn mới
                </h2>

                <!-- Icon + gạch đứt đoạn -->
                <div class="flex items-center mb-6">
                    <div class="flex-1 h-px border-t border-dashed border-white/40"></div>
                    <div class="icon-bag w-15 h-15 flex items-center justify-center rounded-full border-1 border-white">
                        <!-- Biểu tượng túi (SVG) -->
                        <img src="assets/images/icon-bag.svg" alt="Icon Bag" class="w-8" />
                    </div>
                    <div class="flex-1 h-px border-t border-dashed border-white/40"></div>
                </div>

                <!-- Chấm tròn active, caption, sub-caption -->
                <div class="box-desc mb-4">
                    <span class="square"></span>
                    <p class="caption text-base text-white">
                        Đây sẽ là lần đầu tiên bạn có thể bắt đầu một chuyến đi mà không biết trước đích đến,
                        không cần chuẩn bị gì ngoài một chút háo hức và tinh thần sẵn sàng cho những điều bất ngờ.
                    </p>
                    <div class="sub-caption mt-8 italic text-white text-base md:text-sm font-semibold">
                        Mỗi chiếc túi là một cánh cửa về rừng, ẩn chứa những hành trình bất ngờ đang chờ bạn mở ra.
                    </div>
                </div>
            </div>

            <!-- Bên phải: Ảnh + nút slider -->
            <!-- <div class="section-slider md:col-span-1 flex justify-center items-center">
                <div class="image-slider w-full max-w-md">
                    <div><img src="assets/images/slide01.jpg" alt="Ảnh 1" class="w-full" /></div>
                    <div><img src="assets/images/slide02.jpg" alt=" Ảnh 2" class="w-full" /></div>
                    <div><img src="assets/images/slide03.jpg" alt="Ảnh 3" class="w-full" /></div>
                    <div><img src="assets/images/slide04.jpg" alt="Ảnh 4" class="w-full" /></div>
                    <div><img src="assets/images/slide05.jpg" alt="Ảnh 5" class="w-full" /></div>
                </div>
            </div> -->

            <div class="section-slider md:col-span-1 flex justify-center items-center">
                <div class="swiper image-slider w-full max-w-md rounded-[10px] overflow-hidden">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide"><img src="assets/images/slide01.jpg" alt="Ảnh 1" class="w-full h-full object-cover rounded-[10px] shadow" /></div>
                        <div class="swiper-slide"><img src="assets/images/slide02.jpg" alt="Ảnh 2" class="w-full h-full object-cover rounded-[10px] shadow" /></div>
                        <div class="swiper-slide"><img src="assets/images/slide03.jpg" alt="Ảnh 3" class="w-full h-full object-cover rounded-[10px] shadow" /></div>
                        <div class="swiper-slide"><img src="assets/images/slide04.jpg" alt="Ảnh 4" class="w-full h-full object-cover rounded-[10px] shadow" /></div>
                        <div class="swiper-slide"><img src="assets/images/slide05.jpg" alt="Ảnh 5" class="w-full h-full object-cover rounded-[10px] shadow" /></div>
                    </div>
                    <!-- Nút điều hướng -->
                    <div class="swiper-button-prev"></div>
                    <div class="swiper-button-next"></div>
                </div>
            </div>

        </div>
    </section>


    <section class="section-about py-12 bg-white">
        <div class=" max-w-[1184px] mx-auto px-4">
            <!-- Tiêu đề -->
            <h2 class="text-4xl mb-8 tracking-tight">
                GIỚI THIỆU 3 CHIẾC TÚI
            </h2>

            <!-- Cards wrapper -->
            <div class="md:flex md:flex-row gap-6 hidden md:flex">
                <!-- Card 1: Hiện đầy đủ -->
                <div class="card-item flex-1 rounded-[10px] overflow-hidden shadow-lg bg-[#F5EAC7] flex flex-col md:max-w-[70%] z-10 cursor-pointer active-card">
                    <div class="box-img relative">
                        <img src="assets/images/first-bag.png" alt="Túi Lần Đầu" class="w-full h-full object-cover" />
                        <a href="#" class="btn-more absolute right-3 top-4 bg-white/80 hover:bg-white text-[#154734] rounded-[3px] p-2 shadow">
                            <svg width="20" height="20" fill="none" viewBox="0 0 20 20">
                                <path d="M8 5l5 5-5 5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </a>
                    </div>

                    <!-- Nội dung -->
                    <div class="about-content">
                        <h3 class="text-2xl md:text-3xl font-bold text-[#154734] mb-2 uppercase">
                            TÚI LẦN ĐẦU <span>(màu trắng)</span>
                        </h3>
                        <p class="text-[#154734] mb-4">
                            Dành cho người lần đầu về rừng: cung đường thoáng đãng, dễ đi, đẹp vừa đủ để làm bạn yêu thiên nhiên ngay từ lần chạm đầu tiên.
                        </p>
                        <a href="#" class="btn-chitiet float-right inline-block px-5 py-2 bg-[#154734] text-white rounded-[5px] font-semibold text-sm hover:bg-[#0f3926] transition">
                            Chi tiết thông tin
                        </a>
                    </div>
                </div>

                <!-- Card 2: Mờ, overlay -->
                <div class="card-item flex-1 rounded-[10px] overflow-hidden shadow-lg relative group bg-[#FC8A2D] flex flex-col md:max-w-[15%] z-0 cursor-pointer">
                    <div class="box-img relative">
                        <img src="assets/images/third-bag.png" alt="Túi Mùa Hè" class="w-full h-full object-cover" />
                        <a href="#" class="btn-more absolute right-3 top-4 bg-white/80 hover:bg-white text-[#154734] rounded-[3px] p-2 shadow">
                            <svg width="20" height="20" fill="none" viewBox="0 0 20 20">
                                <path d="M8 5l5 5-5 5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </a>
                    </div>

                    <!-- Nội dung mở rộng: ẩn khi chưa active -->
                    <div class="about-content">
                        <h3 class="text-2xl font-bold text-[#fff] mb-2 uppercase">TÚI MÙA HÈ <span>(màu nâu)</span></h3>
                        <p class="text-[#fff] mb-4">Hành trình rực rỡ và sôi động, lý tưởng cho mùa hè khám phá thiên nhiên.</p>
                        <a href="#" class="btn-chitiet float-right inline-block px-5 py-2 bg-[#154734] text-white rounded-[5px] font-semibold text-sm hover:bg-[#0f3926] transition">Chi tiết thông tin</a>
                    </div>
                </div>

                <!-- Card 3: Mờ, overlay -->
                <div class="card-item flex-1 rounded-[10px] overflow-hidden shadow-lg relative group bg-[#003F3B] flex flex-col md:max-w-[15%] z-0 cursor-pointer">
                    <div class="box-img relative">
                        <img src="assets/images/second-bag.png" alt="Túi Rừng Xanh" class="w-full h-full object-cover" />
                        <a href="#" class="btn-more absolute right-3 top-4 bg-white/80 hover:bg-white text-[#154734] rounded-[3px] p-2 shadow">
                            <svg width="20" height="20" fill="none" viewBox="0 0 20 20">
                                <path d="M8 5l5 5-5 5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </a>
                    </div>
                    <!-- Nội dung mở rộng: ẩn khi chưa active -->
                    <div class="about-content">
                        <h3 class="text-2xl font-bold text-[#154734] mb-2 uppercase">TÚI RỪNG XANH <span>(màu xanh lá)</span></h3>
                        <p class="text-[#154734] mb-4">Khám phá những cung đường rừng xanh mát, mang đến cảm giác bình yên và thư giãn.</p>
                        <a href="#" class="btn-chitiet float-right inline-block px-5 py-2 bg-[#154734] text-white rounded-[5px] font-semibold text-sm hover:bg-[#0f3926] transition">Chi tiết thông tin</a>
                    </div>
                </div>
            </div>

            <!-- Mobile slider (ẩn trên md up) -->
            <div class="block md:hidden">
                <div class="swiper mySwiper">
                    <div class="swiper-wrapper">
                        <!-- Card 1 -->
                        <div class="swiper-slide">
                            <!-- Nội dung card 1 giống như trên, chỉ sửa class width về w-full và bo tròn, padding phù hợp mobile -->
                            <div class="rounded-[10px] overflow-hidden shadow-lg bg-[#F5EAC7] flex flex-col w-full">
                                <div class="box-img relative">
                                    <img src="assets/images/first-bag.png" alt="Túi Lần Đầu" class="w-full h-full object-cover" />
                                    <a href="#" class="btn-more absolute right-3 top-4 bg-white/80 hover:bg-white text-[#154734] rounded-[3px] p-2 shadow">
                                        <svg width="20" height="20" fill="none" viewBox="0 0 20 20">
                                            <path d="M8 5l5 5-5 5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    </a>
                                </div>

                                <!-- Nội dung -->
                                <div class="about-content">
                                    <h3 class="text-2xl md:text-3xl font-bold text-[#154734] mb-2 uppercase">
                                        TÚI LẦN ĐẦU <span>(màu trắng)</span>
                                    </h3>
                                    <p class="text-[#154734] mb-4">
                                        Dành cho người lần đầu về rừng: cung đường thoáng đãng, dễ đi, đẹp vừa đủ để làm bạn yêu thiên nhiên ngay từ lần chạm đầu tiên.
                                    </p>
                                    <a href="#" class="btn-chitiet float-right inline-block px-5 py-2 bg-[#154734] text-white rounded-[5px] font-semibold text-sm hover:bg-[#0f3926] transition">
                                        Chi tiết thông tin
                                    </a>
                                </div>
                            </div>
                        </div>
                        <!-- Card 2 -->
                        <div class="swiper-slide">
                            <div class="rounded-[10px] overflow-hidden shadow-lg bg-[#FC8A2D] flex flex-col w-full">
                                <div class="box-img relative">
                                    <img src="assets/images/third-bag.png" alt="Túi Mùa Hè" class="w-full h-full object-cover" />
                                    <a href="#" class="btn-more absolute right-3 top-4 bg-white/80 hover:bg-white text-[#154734] rounded-[3px] p-2 shadow">
                                        <svg width="20" height="20" fill="none" viewBox="0 0 20 20">
                                            <path d="M8 5l5 5-5 5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    </a>
                                </div>

                                <!-- Nội dung mở rộng: ẩn khi chưa active -->
                                <div class="about-content summer">
                                    <h3 class="text-2xl font-bold text-[#fff] mb-2 uppercase">TÚI MÙA HÈ <span>(màu nâu)</span></h3>
                                    <p class="text-[#fff] mb-4">Hành trình rực rỡ và sôi động, lý tưởng cho mùa hè khám phá thiên nhiên.</p>
                                    <a href="#" class="btn-chitiet float-right inline-block px-5 py-2 bg-[#154734] text-white rounded-[5px] font-semibold text-sm hover:bg-[#0f3926] transition">Chi tiết thông tin</a>
                                </div>
                            </div>
                        </div>
                        <!-- Card 3 -->
                        <div class="swiper-slide">
                            <div class="rounded-[10px] overflow-hidden shadow-lg bg-[#003F3B] flex flex-col w-full">
                                <div class="box-img relative">
                                    <img src="assets/images/second-bag.png" alt="Túi Rừng Xanh" class="w-full h-full object-cover" />
                                    <a href="#" class="btn-more absolute right-3 top-4 bg-white/80 hover:bg-white text-[#154734] rounded-[3px] p-2 shadow">
                                        <svg width="20" height="20" fill="none" viewBox="0 0 20 20">
                                            <path d="M8 5l5 5-5 5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    </a>
                                </div>
                                <!-- Nội dung mở rộng: ẩn khi chưa active -->
                                <div class="about-content forest">
                                    <h3 class="text-2xl font-bold text-[#154734] mb-2 uppercase">TÚI RỪNG XANH <span>(màu xanh lá)</span></h3>
                                    <p class="text-[#154734] mb-4">Khám phá những cung đường rừng xanh mát, mang đến cảm giác bình yên và thư giãn.</p>
                                    <a href="#" class="btn-chitiet float-right inline-block px-5 py-2 bg-[#154734] text-white rounded-[5px] font-semibold text-sm hover:bg-[#0f3926] transition">Chi tiết thông tin</a>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    </section>

    <section class="section-bag py-12 px-2 bg-white">
        <div class="wrapper-bag max-w-6xl mx-auto flex flex-col md:flex-row items-start gap-[100px]">
            <!-- Cột trái: Ảnh -->
            <div class="w-full md:w-1/2 flex justify-center">
                <div class="relative w-full rounded-[16px] overflow-hidden shadow">
                    <img src="assets/images/first-bag2.jpg"
                        alt="Túi Lần Đầu" class="w-full object-cover rounded-[16px]" />
                </div>
            </div>

            <!-- Cột phải: Nội dung -->
            <div class="w-full md:w-1/2">
                <h2 class="text-4xl md:text-[50px] font-extrabold mb-3 uppercase">TÚI LẦN ĐẦU</h2>
                <div class="mb-3">
                    <span class="inline-block px-4 py-2 bg-[#154734] text-white font-semibold rounded-[10px] text-[12px] md:text-[20px]">
                        Đủ chill để yêu rừng ngay từ lần đầu gặp mặt
                    </span>
                </div>
                <div class="text-[#w-12 h-12] mb-2 text-[12px] md:text-[17px]">
                    Dành cho người lần đầu về rừng: cung đường thoáng đãng, dễ đi, đẹp vừa đủ để làm bạn yêu thiên nhiên ngay từ lần chạm đầu tiên.
                </div>
                <div class="text-[#w-12 h-12] mb-2 text-[12px] md:text-[17px]">
                    Cung đường: Hòn Bà, 8 Nàng Tiên, Bù Gia Mập, Tà Năng Phan Dũng, Đà Bắc, Nậm Me, Lảo Thẩn, Tà Chì Nhù, Bidoup - Tà Giang
                </div>
                <div class="flex flex-col gap-3 mt-6 mb-6">
                    <div class="flex items-center gap-3 text-[#154734] font-bold text-[12px] md:text-[20px]">
                        <img src="assets/images/decor.svg" alt="Decor" class="w-12 h-12">
                        Kèm theo 1 dấu ấn hành trình độc quyền từ TOA
                    </div>
                    <div class="flex items-center gap-3 text-[#154734] font-bold text-[12px] md:text-[20px]">
                        <img src="assets/images/coupon.svg" alt="coupon" class="w-12 h-12">
                        Voucher giảm 5-15%
                    </div>
                    <div class="flex items-center gap-3 text-[#154734] font-bold text-[12px] md:text-[20px]">
                        <img src="assets/images/gift-card.svg" alt="Gift Card" class="w-12 h-12">
                        Voucher & ưu đãi riêng từ đối tác của TOA
                    </div>
                </div>
                <div class="mt-2 mb-2 text-[#154734] font-bold text-[12px] md:text-[20px]">
                    Khấu trừ vào giá tour
                </div>
                <div class="flex items-center gap-4 mt-1 justify-between">
                    <div class="text-1xl md:text-5xl font-extrabold text-orange-500 tracking-wider">99,000 VNĐ</div>
                    <a href="#" class="btn-buy-now px-6 py-3 bg-[#154734]">MUA NGAY</a>
                </div>
            </div>
        </div>
    </section>

    <section class="section-bag py-12 px-2 bg-white">
        <div class="wrapper-bag max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-start gap-[100px]">
            <!-- Cột trái: Nội dung -->
            <div class="w-full md:w-1/2">
                <h2 class="text-4xl md:text-[50px] font-extrabold mb-3 uppercase">TÚI MÙA HÈ</h2>
                <div class="mb-3">
                    <span class="inline-block px-4 py-1 bg-[#154734] text-white font-semibold rounded-[10px] text-[12px] md:text-[20px]">
                        Hành trình mát lành giữa mùa hè oi ả
                    </span>
                </div>
                <div class="text-[#w-12 h-12] mb-2 text-[12px] md:text-[17px]">
                    Dẫn bạn đến những nơi có suối trong, thác đổ, có khi chạm cả hơi biển – để bạn được ngâm mình trong những điều tươi mới nhất.
                </div>
                <div class="text-[#w-12 h-12] mb-2 text-[12px] md:text-[17px]">
                    Cung đường: Thác K50, 8 Nàng Tiên, Đá Bia, Nặm Me, Ngũ Long Công Chúa, Đà Bắc.
                </div>
                <div class="flex flex-col gap-3 mt-6 mb-6">
                    <div class="flex items-center gap-3 text-[#154734] font-bold text-[12px] md:text-[20px]">
                        <img src="assets/images/decor.svg" alt="Decor" class="w-12 h-12">
                        Kèm theo 1 dấu ấn hành trình độc quyền từ TOA
                    </div>
                    <div class="flex items-center gap-3 text-[#154734] font-bold text-[12px] md:text-[20px]">
                        <img src="assets/images/coupon.svg" alt="coupon" class="w-12 h-12">
                        Voucher giảm 5-15%
                    </div>
                    <div class="flex items-center gap-3 text-[#154734] font-bold text-[12px] md:text-[20px]">
                        <img src="assets/images/gift-card.svg" alt="Gift Card" class="w-12 h-12">
                        Voucher & ưu đãi riêng từ đối tác của TOA
                    </div>
                </div>
                <div class="mt-2 mb-2 text-[#154734] font-bold  text-[12px] md:text-[20px]">
                    Khấu trừ vào giá tour
                </div>
                <div class="flex items-center gap-4 mt-1 justify-between">
                    <div class="text-1xl md:text-5xl font-extrabold text-orange-500 tracking-wider">99,000 VNĐ</div>
                    <a href="#" class="btn-buy-now px-6 py-3 bg-[#154734]">MUA NGAY</a>
                </div>
            </div>

            <!-- Cột phải: Ảnh -->
            <div class="w-full md:w-1/2 flex justify-center">
                <div class="relative w-full rounded-[16px] overflow-hidden shadow">
                    <img src="assets/images/summer-bag.jpg"
                        alt="Túi Lần Đầu" class="w-full object-cover rounded-[16px]" />
                </div>
            </div>

        </div>
    </section>


    <section class="section-bag py-12 px-2 bg-white">
        <div class="wrapper-bag max-w-6xl mx-auto flex flex-col md:flex-row items-start gap-[100px]">
            <!-- Cột trái: Ảnh -->
            <div class="w-full md:w-1/2 flex justify-center">
                <div class="relative w-full rounded-[16px] overflow-hidden shadow">
                    <img src="assets/images/green-forest-bag.jpg"
                        alt="Túi Lần Đầu" class="w-full object-cover rounded-[16px]" />
                </div>
            </div>

            <!-- Cột phải: Nội dung -->
            <div class="w-full md:w-1/2">
                <h2 class="text-4xl md:text-[50px] font-extrabold mb-3 uppercase">TÚI RỪNG XANH</h2>
                <div class="mb-3">
                    <span class="inline-block px-4 py-1 bg-[#154734] text-white font-semibold rounded-[10px] text-[12px] md:text-[20px]">
                        Nơi những cánh rừng vẫn còn giữ mùi của nguyên sơ
                    </span>
                </div>
                <div class="text-[#w-12 h-12] mb-2 text-[12px] md:text-[17px]">
                    Nếu bạn muốn thử thách vừa phải, dạo bước trong những cánh rừng nguyên sinh, nghe tiếng lá rơi và chân mình lội qua con suối nhỏ – chiếc túi này đang chờ bạn.
                </div>
                <div class="text-[#w-12 h-12] mb-2 text-[12px] md:text-[17px]">
                    Cung đường: Bù Gia Mập, Bidoup, Hòn Bà, Ngũ Long Công Chúa, Bidoup - Tà Giang
                </div>
                <div class="flex flex-col gap-3 mt-6 mb-6">
                    <div class="flex items-center gap-3 text-[#154734] font-bold text-[12px] md:text-[20px]">
                        <img src="assets/images/decor.svg" alt="Decor" class="md:w-12 md:h-12 w-10 h-10">
                        Kèm theo 1 dấu ấn hành trình độc quyền từ TOA
                    </div>
                    <div class="flex items-center gap-3 text-[#154734] font-bold text-[12px] md:text-[20px]">
                        <img src="assets/images/coupon.svg" alt="coupon" class="md:w-12 md:h-12 w-10 h-10">
                        Voucher giảm 5-15%
                    </div>
                    <div class="flex items-center gap-3 text-[#154734] font-bold text-[12px] md:text-[20px]">
                        <img src="assets/images/gift-card.svg" alt="Gift Card" class="md:w-12 md:h-12 w-10 h-10">
                        Voucher & ưu đãi riêng từ đối tác của TOA
                    </div>
                </div>
                <div class="mt-2 mb-2 text-[#154734] font-bold text-[12px] md:text-[20px]">
                    Khấu trừ vào giá tour
                </div>
                <div class="flex items-center gap-4 mt-1 justify-between">
                    <div class="text-1xl md:text-5xl font-extrabold text-orange-500 tracking-wider">99,000 VNĐ</div>
                    <a href="#" class="btn-buy-now px-6 py-3 bg-[#154734] text-white">MUA NGAY</a>
                </div>
            </div>
        </div>
    </section>

    <section class="section-banner-special-board">
        <img src="assets/images/banner-special-board.jpg" alt="Banner Special Board" class="w-full" />
    </section>

    <div class="relative w-full bg-[#01433f] overflow-hidden py-2">
        <div id="marquee-auto" class="marquee flex items-center whitespace-nowrap">
            <div class="marquee-content flex items-center">
                <span class="text-white font-bold text-3xl mx-4">Tổ Ong Adventure</span>
                <svg class="mx-4 inline-block" width="32" height="32" viewBox="0 0 32 32" fill="#FC8A2D">
                    <polygon points="16,6 27,13 23,26 9,26 5,13" />
                </svg>
                <span class="text-white font-bold text-3xl mx-4">Tổ Ong Adventure</span>
                <svg class="mx-4 inline-block" width="32" height="32" viewBox="0 0 32 32" fill="#FC8A2D">
                    <polygon points="16,6 27,13 23,26 9,26 5,13" />
                </svg>
            </div>
        </div>
    </div>



    <section class="section-bag-opening-process bg-[#fff]">
        <div class="wrapper bg-[#F1E5C3] rounded-[10px] md:rounded-[36px]">
            <div class="max-w-6xl mx-auto px-md-2">
                <!-- Tiêu đề -->
                <h2 class="text-4xl md:text-5xl font-extrabold text-[#003F3B] mb-10 text-center tracking-tight">
                    LÀM SAO ĐỂ “MỞ TÚI VỀ RỪNG”?
                </h2>

                <!-- Các bước -->
                <div class="grid grid-cols-2 md:grid-cols-4 gap-[15px] md:gap-[25px] mb-0 md:mb-8">
                    <!-- Bước 1 -->
                    <div class="steps flex flex-col items-center bg-[#003F3B] rounded-[18px] px-[22px] py-8 min-h-[336px]">
                        <div class="steps-icon">
                            <img src="assets/images/money-bag.png" alt="Túi" class="w-15 h-15 md:w-26 md:h-26 mb-3 rounded-full bg-[#A5905D] object-contain" />
                        </div>
                        <div class="font-bold text-white text-lg mb-1 text-center text-[12px] md:text-[18px]">Chọn một chiếc túi bạn thích</div>
                        <div class="text-white text-center text-base text-[12px] md:text-[17px]">Lần Đầu - Mùa Hè - Rừng Xanh</div>
                    </div>

                    <!-- Bước 2 -->
                    <div class="steps flex flex-col items-center bg-[#003F3B] rounded-[18px] px-[22px] py-8 min-h-[336px]">
                        <div class="steps-icon">
                            <img src="assets/images/deposit.png" alt="Đặt cọc" class="w-15 h-15 md:w-26 md:h-26 mb-3 rounded-full bg-[#A5905D] object-contain" />
                        </div>
                        <div class="font-bold text-white text-lg mb-1 text-center text-[12px] md:text-[18px]">Đặt cọc giữ slot</div>
                        <div class="text-white text-center text-base text-[12px] md:text-[17px]">
                            99.000 VNĐ đồng giá cho cả 3 chiếc túi<br>
                            <span class="opacity-90">Điền form thông tin, chọn ngày khởi hành mong muốn và chuyển khoản trực tiếp theo hướng dẫn.</span>
                        </div>
                    </div>

                    <!-- Bước 3 -->
                    <div class="steps flex flex-col items-center bg-[#003F3B] rounded-[18px] px-[22px] py-8 min-h-[336px]">
                        <div class="steps-icon">
                            <img src="assets/images/livestream.png" alt="Livestream" class="w-15 h-15 md:w-26 md:h-26 mb-3 rounded-full bg-[#A5905D] object-contain" />
                        </div>
                        <div class="font-bold text-white text-lg mb-1 text-center text-[12px] md:text-[18px]">Chờ đến ngày livestream mở túi</div>
                        <div class="text-white text-center text-base text-[12px] md:text-[17px]">
                            TOA sẽ công bố hành trình bạn sẽ đi, quà tặng & <span class="font-bold">mức ưu đãi 5–15%</span> giảm trực tiếp vào giá tour
                        </div>
                    </div>

                    <!-- Bước 4 -->
                    <div class="steps flex flex-col items-center bg-[#003F3B] rounded-[18px] px-[22px] py-8 min-h-[336px]">
                        <div class="steps-icon">
                            <img src="assets/images/payment.png" alt="Thanh toán" class="w-15 h-15 md:w-26 md:h-26 mb-3 rounded-full bg-[#A5905D] object-contain" />
                        </div>
                        <div class="font-bold text-white text-lg mb-1 text-center text-[12px] md:text-[18px]">Xác nhận & hoàn tất thanh toán</div>
                        <div class="text-white text-center text-base text-[12px] md:text-[17px]">
                            Sau livestream, đội ngũ TOA sẽ liên hệ với bạn để chốt slot và báo chi phí còn lại (đã trừ hết ưu đãi).<br>
                            <span class="block mt-1">Hạn cuối thanh toán: trước lịch khởi hành 7 ngày</span>
                        </div>
                    </div>
                </div>
                <!-- Box chú ý -->
                <div class="bg-white rounded-[12px] p-5 text-center md:mx-auto mx-3 w-fit">
                    <span class="text-[#FC8A2D] text-[12px] md:text-[20px] font-bold italic">
                        Lưu ý: Đăng ký mua túi mù trước lịch khởi hành bạn mong muốn 10 ngày
                    </span>
                </div>
            </div>
        </div>
    </section>


    <section class="section-order-gift relative w-full overflow-hidden">
        <img src="assets/images/banner-order-gif.jpg" alt="Rừng" class="w-full h-full object-cover" />

        <div class="relative z-20 bg-black w-full py-[25px] md:py-10 px-[20px] md:px-6">
            <div class="max-w-6xl mx-auto">
                <ul class="text-white text-[15px] md:text-[24px] mb-6 space-y-1 list-disc list-inside">
                    <li>Hàng trăm voucher & ưu đãi riêng từ đối tác của TOA</li>
                    <li>Ưu đãi 5–15% chỉ khi mở túi</li>
                    <li>Cơ hội mở ra phiên bản đặc biệt trị giá lên đến 1 triệu đồng</li>
                    <li>Khấu trừ 99k vào giá Tour</li>
                    <li>Càng đặt sớm – quà càng hời</li>
                </ul>
                <div class="flex justify-center">
                    <a href="#" class="btn-buy-now px-8 py-3 bg-[#154734]">
                        MUA NGAY
                    </a>
                </div>
            </div>
        </div>
    </section>

    <section class="section-fqa bg-[#F4F4F4] py-16 overflow-hidden">
        <div class="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-12 px-4 md:px-8">
            <!-- Bên trái: Tiêu đề, hotline, hình minh họa -->
            <div class="flex flex-col justify-start">
                <h2 class="text-[26px] md:text-[32px] font-extrabold text-[#181818] mb-3 leading-tight">
                    NHỮNG CÂU HỎI<br>THƯỜNG GẶP
                </h2>
                <div class="text-[17px] text-[#2C2C2C] mb-6">
                    Tư vấn chi tiết liên hệ hotline
                    <a href="tel:0933227878" class="text-[#000] underline ml-1">0933 22 78 78</a>
                </div>
                <img src="assets/images/faq-forest.png" alt="FAQ Illustration" class="w-full faq-forest">
            </div>

            <!-- Bên phải: FAQ accordion -->
            <div>
                <div id="faq" class="flex flex-col gap-4">
                    <!-- 1 FAQ item -->
                    <div class="faq-item bg-white rounded-xl px-6 py-5 shadow transition-all duration-300">
                        <button type="button" class="faq-question flex justify-between items-center w-full text-left font-bold text-[17px] md:text-[21px] text-[#181818] focus:outline-none">
                            <span>
                                Nếu tôi muốn đi tour cùng nhóm bạn thì sao?
                            </span>
                            <span class="faq-icon text-2xl text-[#0B8564] font-semibold transition-all">+</span>
                        </button>
                        <div class="faq-answer !block animate-fadeInDown mt-3 text-[#464646] text-[17px] transition-all duration-500">
                            ✔️ Bạn hoàn toàn có thể đi cùng nhóm!
                            Chỉ cần 1 người đại diện mua túi cho cả nhóm (ví dụ: nhóm 5 người thì chọn cùng 1 loại và thanh toán cả 5 túi), khi khui túi trong livestream, cả nhóm sẽ cùng được phân bổ chung một điểm đến.<br>
                            📦 Túi vật lý & quà tặng cũng sẽ được gửi đến cho từng thành viên trong nhóm trước ngày khởi hành
                        </div>
                    </div>
                    <!-- 2 FAQ item -->
                    <div class="faq-item bg-white rounded-xl px-6 py-5 shadow transition-all duration-300">
                        <button type="button" class="faq-question flex justify-between items-center w-full text-left font-bold text-[17px] md:text-[21px] text-[#181818] focus:outline-none">
                            <span>
                                Mở túi ra là được đi tour miễn phí luôn hả?
                            </span>
                            <span class="faq-icon text-2xl text-[#0B8564] font-semibold transition-all">+</span>
                        </button>
                        <div class="faq-answer mt-3 text-[#464646] text-[17px] hidden transition-all duration-300">
                            Mức phí 99.000đ là chi phí tham gia trải nghiệm khui túi và mở hành trình bí mật, không phải phí tour.
                            Với số tiền này, bạn sẽ nhận được:
                            <ul>
                                <li>Hàng trăm voucher & ưu đãi riêng từ đối tác của TOA</li>
                                <li>Mức giảm giá tour từ 5–15%</li>
                                <li>Khấu trừ 99k vào giá Tour</li>
                                <li>1 Dấn ấn hành trình độc quyền của TOA</li>
                                <li>Cơ hội mở ra chiếc túi phiên bản đặc biệt với tổng trị giá lên đến 1 triệu đồng</li>
                                <li>Sau khi khui túi, Tổ Ong sẽ liên hệ bạn qua mail/điện thoại để hoàn tất đăng ký và thanh toán phần còn lại của tour.</li>
                            </ul>
                        </div>
                    </div>
                    <!-- 3 FAQ item -->
                    <div class="faq-item bg-white rounded-xl px-6 py-5 shadow transition-all duration-300">
                        <button type="button" class="faq-question flex justify-between items-center w-full text-left font-bold text-[17px] md:text-[21px] text-[#181818] focus:outline-none">
                            <span>
                                Tôi có thể hoàn, hủy hoặc bán lại túi không?
                            </span>
                            <span class="faq-icon text-2xl text-[#0B8564] font-semibold transition-all">+</span>
                        </button>
                        <div class="faq-answer mt-3 text-[#464646] text-[17px] hidden transition-all duration-300">
                            ⛔ Túi sau khi mua sẽ không được hoàn hoặc hủy.<br>
                            ✅ Bạn có thể chuyển nhượng túi 1 lần duy nhất cho người khác nếu không thể tham gia.
                        </div>
                    </div>
                    <!-- 4 FAQ item -->
                    <div class="faq-item bg-white rounded-xl px-6 py-5 shadow transition-all duration-300">
                        <button type="button" class="faq-question flex justify-between items-center w-full text-left font-bold text-[17px] md:text-[21px] text-[#181818] focus:outline-none">
                            <span>
                                Tôi có được nhận túi thật không?
                            </span>
                            <span class="faq-icon text-2xl text-[#0B8564] font-semibold transition-all">+</span>
                        </button>
                        <div class="faq-answer mt-3 text-[#464646] text-[17px] hidden transition-all duration-300">
                            🎒 Có chứ!
                            Khi bạn tham gia tour, Tổ Ong sẽ gửi đến bạn một chiếc túi vật lý thật, kèm theo những phần quà hấp dẫn. Mỗi chiếc túi không chỉ mang tính biểu tượng mà còn chứa đựng những bất ngờ nhỏ đầy thú vị!
                        </div>
                    </div>
                    <!-- 5 FAQ item -->
                    <div class="faq-item bg-white rounded-xl px-6 py-5 shadow transition-all duration-300">
                        <button type="button" class="faq-question flex justify-between items-center w-full text-left font-bold text-[17px] md:text-[21px] text-[#181818] focus:outline-none">
                            <span>
                                Nếu tôi lỡ phiên livestream thì làm sao biết mình sẽ đi đâu?
                            </span>
                            <span class="faq-icon text-2xl text-[#0B8564] font-semibold transition-all">+</span>
                        </button>
                        <div class="faq-answer mt-3 text-[#464646] text-[17px] hidden transition-all duration-300">
                            📩 Đừng lo! Sau mỗi phiên livestream, Tổ Ong sẽ gửi thông báo chi tiết về điểm đến và hành trình bạn nhận được qua email hoặc điện thoại.<br>
                            Bạn chỉ cần theo dõi inbox và chuẩn bị sẵn sàng cho chuyến đi thôi!
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>



    <?php include('js-footer.php'); ?>

</body>
<?php include('footer.php'); ?>

</html>