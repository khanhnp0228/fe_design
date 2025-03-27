<!doctype html>
<html lang="en">

<?php include('head.php'); ?>

<body>
    <?php include('header.php'); ?>

    <section class="cart-section">
        <div class="container">
            <div class="col-12">
                <h2 class="cart-title">Thông tin đơn hàng của bạn</h2>

                <table class="cart-table">
                    <thead>
                        <tr>
                            <th>HÀNH TRÌNH</th>
                            <th>GIÁ</th>
                            <th>SỐ LƯỢNG</th>
                            <th>THÀNH TIỀN</th>
                        </tr>
                    </thead>
                    <tbody>
                        <!-- Hàng 1 -->
                        <tr>
                            <td class="cart-item">
                                <button class="remove-btn"><img src="assets/images/payment/i-close.svg" alt="close" width="25"></button>
                                <div class="cart-item-img">
                                    <img src="assets/images/payment/trailbus.jpg" alt="Trail Bus - Núi Dinh">
                                </div>
                                <div class="cart-details">
                                    <strong>Trail bus - Núi Dinh</strong>
                                    <p>Ngày khởi hành: 15/02/2025</p>
                                    <p>Vé “Khám Phá”</p>
                                    <p>Vị trí ghế: A10, B10, A13</p>
                                </div>
                            </td>
                            <td class="cart-price">290,000 VND</td>
                            <td class="cart-quantity">
                                <div class="custom-number-input">
                                    <input type="number" min="1" max="10" value="3">
                                </div>
                            </td>
                            <td class="cart-total">870,000 VND</td>
                        </tr>

                        <!-- Hàng 2 -->
                        <tr>
                            <td class="cart-item">
                                <button class="remove-btn"><img src="assets/images/payment/i-close.svg" alt="close" width="25"></button>
                                <img src="assets/images/payment/pharaoh.png" alt="Chinh phục Thung lũng của Pharaoh">
                                <div class="cart-details">
                                    <strong>Chinh phục Thung lũng của Pharaoh - 42km / 14 ngày</strong>
                                </div>
                            </td>
                            <td class="cart-price">249,000 VND</td>
                            <td class="cart-quantity">
                                <div class="custom-number-input">
                                    <input type="number" min="1" max="10" value="3">
                                </div>
                            </td>
                            <td class="cart-total">498,000 VND</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </section>

    <section class="checkout-section">
        <div class="container">
            <div class="col-12">
                <div class="checkout-section-content">
                    <div class="checkout-left">
                        <!-- Voucher -->
                        <div class="voucher-box">
                            <h2>Áp dụng Voucher/Coupon Code:</h2>
                            <div class="voucher-input">
                                <input type="text" placeholder="Nhập mã giảm giá">
                                <button class="apply-btn">Áp dụng</button>
                            </div>
                        </div>

                        <!-- Form thông tin người đặt -->
                        <div class="checkout-info">
                            <h2>Thông tin người đặt</h2>
                            <div class="form-row">
                                <div class="form-group">
                                    <label><span>*</span> HỌ VÀ TÊN ĐỆM</label>
                                    <input type="text" placeholder="Nhập họ và tên đệm">
                                </div>
                                <div class="form-group">
                                    <label><span>*</span> TÊN</label>
                                    <input type="text" placeholder="Nhập tên">
                                </div>
                            </div>
                            <div class="form-row">
                                <div class="form-group">
                                    <label><span>*</span> SỐ ĐIỆN THOẠI</label>
                                    <input type="text" placeholder="Nhập số điện thoại">
                                </div>
                                <div class="form-group">
                                    <label><span>*</span> EMAIL</label>
                                    <input type="email" placeholder="Nhập email">
                                </div>
                            </div>
                            <p class="note">
                                <strong>Lưu ý:</strong> Kiểm tra thông tin email của bạn là chính xác. Thông tin mua hàng và vé hành trình sẽ gửi qua email này.
                            </p>
                        </div>

                        <!-- Hình thức thanh toán -->
                        <div class="payment-method">
                            <h2>Hình Thức Thanh Toán:</h2>
                            <div class="payment-option">
                                <!-- <input type="radio" checked>
                                <label> <img src="assets/images/payment/i-atm.svg" alt="icon payment" width="28"> Thanh toán bằng Onepay</label> -->
                            </div>

                            <label class="payment-option">
                                <input type="radio" name="payment-method" class="payment-radio" width="28" checked>
                                <img src="assets/images/payment/i-atm.svg" alt="ATM">
                                Thanh toán bằng Onepay
                            </label>

                            <div class="payment-desc">
                                <p>Inspire Trails hỗ trợ thanh toán qua OnePay với các hỗ trợ sau:</p>
                                <ul>
                                    <li>Mobile Banking (QR-Code các ngân hàng Việt Nam và Ví điện tử Momo, VinID, SmartPay)</li>
                                    <li>Thẻ ATM và Tài khoản Ngân hàng</li>
                                    <li>Thẻ thanh toán quốc tế Visa, MasterCard, JCB (Thẻ tín dụng, thẻ ghi nợ, thẻ trả trước)</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div class="checkout-right">
                        <!-- Thông tin thanh toán -->
                        <aside class="payment-summary">
                            <div class="payment-summary-body">
                                <h2>THÔNG TIN THANH TOÁN</h2>
                                <div class="summary-item">
                                    <p>Hành trình</p>
                                    <p class="price">Tổng</p>
                                </div>
                                <div class="summary-item">
                                    <div class="summary-item-custom">
                                        <p>Trail bus - Núi Dinh</p>
                                        <ul>
                                            <li>Ngày khởi hành: 15/02/2025</li>
                                            <li>Vé “Khám Phá”</li>
                                            <li>Vị trí ghế: A10, B10, A13</li>
                                        </ul>
                                    </div>
                                    <p class="price">870,000 VND</p>
                                </div>
                                <div class="summary-item">
                                    <p>Chinh phục Thung lũng của Pharaoh - 42km / 14 ngày</p>
                                    <p class="price">498,000 VND</p>
                                </div>
                                <div class="summary-item">
                                    <div class="summary-item-discountcode">
                                        <p class="mb-0">Mã giảm giá</p>
                                        <p class="discountcode">CODE20SGD</p>
                                    </div>
                                    <p class="price">498,000 VNĐ</p>
                                </div>
                                <div class="summary-item">
                                    <p>Tạm tính</p>
                                    <p class="price">870,000 VND</p>
                                </div>
                                <div class="summary-item">
                                    <p>Phí vận chuyển</p>
                                    <p class="price">30,000 VND</p>
                                </div>
                                <div class="summary-item total">
                                    <p><strong>Tổng tiền</strong></p>
                                    <p class="price"><strong>900,000 VND</strong></p>
                                </div>
                            </div>
                            <p class="terms"><i>Chọn “Đăng Ký Thử Thách” đồng nghĩa với việc bạn đồng ý tuân theo <a target="_blank" href="#">Quy định về Thanh toán & Hoàn hủy</a></i></p>
                            <button class="checkout-btn">Thanh Toán</button>
                        </aside>
                    </div>
                </div>
            </div>
        </div>
    </section>




    <?php include('js-footer.php'); ?>

</body>
<?php include('footer.php'); ?>

</html>