<script setup>
import { ref } from 'vue';
const num = ref(1)
</script>
<template>
    <div class="container2">
        <div class="header">
            <div class="portal-logo">
                <img style="height:100%" src="https://webvpn.ujs.edu.cn/wengine-vpn/js/image/logo.png">
            </div>
            <div class="aline">
            </div>
            <div class="portal-title">
                <span style="line-height: 48px;">江苏大学WebVPN</span>
            </div>
        </div>
        <div class="container">
            <div class="notice-panel">
                <div class="notice-box">
                    <div class="notice-title">
                        通知
                    </div>
                    <div class="notice-break-line"></div>
                    <div class="notice-content">
                        <div class="ql-snow">
                            <div id="ql-editor" class="ql-editor">
                                <p><strong>本VPN仅支持以下浏览器：</strong><strong
                                        style="color: rgb(255, 255, 0);">360浏览器极速模式、Chrome、Edge。</strong></p>
                                <p><strong>初次使用请耐心阅读完以下文字，如您使用的是360浏览器，必须先切换到极速模式（切换方法</strong><a
                                        href="https://browser.360.cn/se/help/browser.html" rel="noopener noreferrer"
                                        target="_blank"
                                        style="color: rgb(255, 255, 0);"><strong><u>点此进入</u></strong></a><strong>）。点击右侧“CAS统一身份认证登录”按钮（</strong><strong
                                        style="color: rgb(255, 255, 0);">如在右侧未见到按钮，请切换浏览器到极速模式，或使用Chrome等浏览器</strong><strong>）。使用一卡通号及密码（门户密码）登录。登录成功后无需安装插件即可直接使用。</strong>
                                </p>
                                <p><strong style="color: rgb(255, 255, 0);">推荐：</strong><strong>通过CARSI在校外</strong><strong
                                        style="color: rgb(255, 255, 0);">无需VPN</strong><strong>即可访问常用国内外图书馆电子资源，包括</strong><strong
                                        style="color: rgb(255, 255, 0);">CNKI、EI、Web of Science、Science
                                        Direct、EBSCO、IEEE、ProQuest、SpringerLink</strong><strong>等11种常用电子资源。使用详情参见</strong><a
                                        href="https://lib.ujs.edu.cn/info/1812/12428.htm" rel="noopener noreferrer"
                                        target="_blank"
                                        style="color: rgb(255, 255, 0);"><strong>链接</strong></a><strong>。</strong></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="login-panel">
                <div class="login-box">
                    <div class="login-nav-header">
                        <div class="login-nav-wrap">
                            <span class="login-nav-prev"><i class="layui-icon layui-icon-left"></i></span>
                            <span class="login-nav-next"><i class="layui-icon layui-icon-right"></i></span>
                            <div class="login-nav-scroll">
                                <div class="login-nav-nav">
                                    <div :class="{ 'login-nav-item': true, 'on': num == 1 }" data-type="cas" id="cas"
                                        @click="num = 1">统一认证</div>
                                    <div :class="{ 'login-nav-item': true, 'on': num == 2 }" data-type="local" id="local"
                                        @click="num = 2">账号登录</div>
                                    <div :class="{ 'login-nav-item': true, 'on': num == 3 }" data-type="auth_web_wechat"
                                        id="auth_web_wechat" @click="num = 3">企业微信</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <form class="el-form el-form--label-top" id="form">
                        <input name="auth_type" type="hidden" value="local">
                        <div class="login-form-item">
                            <div :class="['el-input', 'user-input', num == 2 ? 'open' : 'close']">
                                <input autocomplete="new-password" id="user_name" placeholder="用户名" type="text"
                                    name="username">
                            </div>
                        </div>
                        <div :class="['login-form-item', num == 2 ? 'open' : 'close']">
                            <div class="el-input password-input">
                                <input autocomplete="new-password" placeholder="密码" type="password" name="password"
                                    aria-autocomplete="list">
                            </div>
                        </div>
                        <div class="upper-login-field">
                            <div class="msg" id="error-message">
                            </div>
                            <div :class="['remember-field', num == 2 ? 'open' : 'close']">
                                <input type="checkbox" name="remember_cookie" style="vertical-align: middle;">
                                <span>下次自动登录</span>
                            </div>
                        </div>
                        <div :class="['wechat-qrcode', num == 3 ? 'open' : 'close']" style="margin-top: -25px; ">
                            <div id="wechat-qrcode" style="color: #737C84;font-weight: 400;font-size: 13px;">
                                <img style="height:200px" src="https://qgdd.oss-cn-hangzhou.aliyuncs.com/img/20230605172316.png">
                                <div class="status status_browser js_status" id="wx_default_tip"><p>请使用企业微信扫描二维码登录</p><p>“A.WebVPN”</p></div>
                            </div>
                        </div>
                        <div :class="['el-button-login', num == 1 ? 'open' : 'close']" style="margin-bottom: 20px;" id="cas_login">
                            <a id="cas-login" class="link-login" href="/#/login"
                                style="text-decoration:none;color:rgba(0,0,0,0.66);font-weight: bold;">
                                CAS统一身份认证登录
                            </a>
                        </div>
                        <button type="button" :class="['el-button-login', num == 2 ? 'open' : 'close']"
                            style="margin-bottom: 20px; " id="login">
                            <span>登录</span>
                        </button>
                    </form>
                    <div class="mobile-notice-panel">
                        <div class="notice-box">
                            <div class="notice-break-line"></div>
                            <div class="notice-title">
                                通知
                            </div>
                            <div class="notice-content">
                                <div class="ql-snow">
                                    <div id="mobile-ql-editor" class="ql-editor">
                                        <p><strong>本VPN仅支持以下浏览器：</strong><strong
                                                style="color: rgb(255, 255, 0);">360浏览器极速模式、Chrome、Edge。</strong></p>
                                        <p><strong>初次使用请耐心阅读完以下文字，如您使用的是360浏览器，必须先切换到极速模式（切换方法</strong><a
                                                href="https://browser.360.cn/se/help/browser.html" rel="noopener noreferrer"
                                                target="_blank"
                                                style="color: rgb(255, 255, 0);"><strong><u>点此进入</u></strong></a><strong>）。点击右侧“CAS统一身份认证登录”按钮（</strong><strong
                                                style="color: rgb(255, 255, 0);">如在右侧未见到按钮，请切换浏览器到极速模式，或使用Chrome等浏览器</strong><strong>）。使用一卡通号及密码（门户密码）登录。登录成功后无需安装插件即可直接使用。</strong>
                                        </p>
                                        <p><strong
                                                style="color: rgb(255, 255, 0);">推荐：</strong><strong>通过CARSI在校外</strong><strong
                                                style="color: rgb(255, 255, 0);">无需VPN</strong><strong>即可访问常用国内外图书馆电子资源，包括</strong><strong
                                                style="color: rgb(255, 255, 0);">CNKI、EI、Web of Science、Science
                                                Direct、EBSCO、IEEE、ProQuest、SpringerLink</strong><strong>等11种常用电子资源。使用详情参见</strong><a
                                                href="https://lib.ujs.edu.cn/info/1812/12428.htm" rel="noopener noreferrer"
                                                target="_blank"
                                                style="color: rgb(255, 255, 0);"><strong>链接</strong></a><strong>。</strong>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="wechat_tip" style="display:none;padding:10px">
                <div style="font-size:16px">1. 请先扫描二维码并关注该服务公众号</div>
                <img src="/wengine-vpn/js/image/wx.png" style="width:120px;height:120px;margin-left:15px;">
                <div style="font-size:16px">2. 进入公众号点击”用户认证“进行认证</div>
            </div>
        </div>
        <div class="footer" style="text-align: center;margin-top: 20px;margin-bottom: 10px;">
            <div class="ql-snow">
                <div id="copyright-ql-editor" class="ql-editor">
                    <p class="ql-align-center">Copyright@版权所有：江苏大学</p>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
.open {
    display: block;
}
.close {
    display: none;
}
.container2 {
    text-align: center;
    line-height: 1.15;
    height: 100vh;
    width: 100vw;
    background: url(https://webvpn.ujs.edu.cn/wengine-vpn/js/image/background.jpg?v=10600);
    background-repeat: no-repeat;
    background-size: cover;
}
html,
body {
    height: 100%;
    font-family: 'Microsoft YaHei';
}
.background {
    display: block;
    position: fixed;
    background: url(/wengine-vpn/js/image/background.jpg?v=10600);
    background-repeat: no-repeat;
    background-size: cover;
    top: 0px;
    height: 100%;
    width: 100%;
    z-index: -10;
    overflow: hidden;
}
.main {
    text-align: center;
    height: 100%;
}
.header {
    padding-top: 70px;
    text-align: left;
    margin: 0 auto;
    height: 48px;
    width: 70%;
}
.portal-logo {
    display: inline-block;
    height: 100%;
    vertical-align: bottom;
}
.aline {
    height: 90%;
    display: inline-block;
    vertical-align: middle;
    content: "";
    width: 2px;
    margin-left: 20px;
    background-color: white;
}
.portal-blank-logo {
    display: inline-block;
    height: 100%;
    width: 0px;
}
.portal-title {
    display: inline-block;
    margin-left: 20px;
    font-size: 33px;
    color: #ffffff;
    height: 100%;
    vertical-align: bottom;
}
.no-logo {
    margin-left: 0 !important;
}
.container {
    position: relative;
    margin-top: 50px;
    margin-left: auto;
    margin-right: auto;
    width: 70%;
    height: 100%;
    max-height: 420px;
    display: flex;
}
.notice-panel {
    flex: 5;
    float: left;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.66);
    overflow: auto;
    display: block;
    border-radius: 6px;
}
.mobile-notice-panel {
    display: none;
}
.notice-break-line {
    background-color: white;
    width: 100%;
    margin-top: 14px;
    margin-bottom: 20px;
    height: 2px;
}
.notice-box {
    padding-top: 40px;
    padding-left: 50px;
    padding-right: 50px;
}
.notice-title {
    font-weight: bold;
    font-size: 21px;
    color: white;
}
.notice-content {
    text-align: left;
    text-indent: 2em;
    font-size: 16px;
    color: white;
    line-height: 2;
}
.notice-content img {
    max-width: 100%;
}
.login-panel {
    color: white;
    margin-left: 20px;
    width: 350px;
    height: 100%;
    border-radius: 6px;
    background-color: rgba(0, 0, 0, 0.66);
}
.login-panel a {
    color: white;
}
.login-nav {
    font-size: 16px;
    display: flex;
}
.login-box {
    padding-top: 40px;
    padding-left: 30px;
    padding-right: 30px;
}
.login-nav div {
    flex: 1;
    height: 44px;
    line-height: 44px;
    cursor: pointer;
    border-bottom: 1px solid white;
}
.login-nav div.on {
    box-sizing: border-box;
    border-bottom: 2px solid white;
}
.login-nav.only-auth div.on {
    height: auto;
    line-height: normal;
    padding-bottom: 14px;
    font-weight: bold;
    font-size: 21px;
}
.login-form-item {
    height: 40px;
    margin-top: 20px;
}
::placeholder {
    color: white;
    opacity: 1;
}
.el-input {
    background-repeat: no-repeat;
    background-position: left;
    background-position-x: 15px;
    background-size: 19px 19px;
    font-size: 14px;
    width: 100%;
    height: 42px;
}
.user-input {
    background-image: url(/wengine-vpn/js/image/login-user.png?v=10600);
}
.password-input {
    background-image: url(/wengine-vpn/js/image/password.png?v=10600);
}
.phone-code-input {
    background-image: url(/wengine-vpn/js/image/code.png?v=10600);
}
.phone-input {
    background-image: url(/wengine-vpn/js/image/phone.png?v=10600);
}
.code-input {
    background-image: url(/wengine-vpn/js/image/code.png?v=10600);
}
.footer {
    width: 100%;
    bottom: 5px;
    font-size: 14px;
    color: white;
    position: absolute;
}
.link-field {
    margin-top: 0;
    margin-left: auto;
    display: flex;
    font-size: 14px;
    color: white;
    text-align: left;
}
.link-login {
    flex: 1;
    padding-left: 5px;
}
.link-login img {
    width: 22px;
    margin-right: 5px;
}
.upper-login-field {
    margin-top: 10px;
    display: flex;
}
.remember-field {
    margin-left: auto;
    text-align: right;
    font-size: 14px;
    width: 120px;
}
.msg {
    text-align: left;
    color: #ff4505;
    flex: 1;
    padding-left: 5px;
}
.el-input input {
    background: none;
    text-indent: 41px;
    -webkit-appearance: none;
    border-radius: 14px;
    border: 1px solid white;
    box-sizing: border-box;
    color: white;
    display: block;
    font-size: inherit;
    height: 42px;
    line-height: 1;
    outline: 0;
    transition: border-color .2s cubic-bezier(.645, .045, .355, 1);
    width: 100%;
}
.phone-code-input {
    display: flex;
}
.code-input {
    display: flex;
}
.captcha-div {
    height: 42px;
    float: left;
    line-height: 1;
    vertical-align: middle;
    margin-left: 17px;
    width: 100px;
}
.captcha {
    background: white;
    display: block;
    height: 40px;
    width: 100px;
    border-radius: 15px;
}
.captcha-img {
    height: 100%;
    width: 100%;
}
.el-button {
    display: inline-block;
    line-height: 1;
    white-space: nowrap;
    cursor: pointer;
    background: #fff;
    border: 1px solid #dcdfe6;
    color: #606266;
    -webkit-appearance: none;
    text-align: center;
    box-sizing: border-box;
    outline: 0;
    transition: .1s;
    font-weight: 500;
    border-radius: 4px;
}
#send-sms {
    float: left;
    height: 42px;
    width: 118px;
    margin-left: 11px;
    white-space: nowrap;
    cursor: pointer;
    -webkit-appearance: none;
    text-align: center;
    box-sizing: border-box;
    outline: 0;
    transition: .1s;
    font-weight: 500;
    border-radius: 15px;
    background-color: white;
    color: black;
    line-height: 42px;
}
.el-button-send {
    padding: 8px;
    font-size: 14px;
    height: 40px;
    color: #fff;
    background-color: #409eff;
    border-color: #409eff;
    margin-left: 11px;
}
.el-button-login {
    padding: 6px 20px;
    font-size: 14px;
    font-weight: bold;
    margin-top: 10px;
    height: 47px;
    width: 100%;
    color: #000;
    background-color: #fff;
    border: none;
    border-radius: 15px;
}
.help-mark {
    height: 22px;
    width: 22px;
    display: inline-block;
    margin-top: 10px;
    margin-left: 7px;
    text-align: center;
}
.captcha--input {
    width: 150px;
}
.layer-form-title {
    width: 100%;
    height: 40px;
    text-align: left;
    background: #fff;
    font-size: 16px;
    font-weight: bold;
    padding-left: 20px;
    line-height: 40px;
    border-bottom: 1px solid #e5e5e5;
}
.second-login-layer {
    width: 400px;
    height: 200px;
    background: #fff;
    font-size: 14px;
    padding: 20px;
}
/* .login-panel-loading {
    display: none;
    position: absolute;
    width: 350px;
    height: 100%;
    background-color: rgba(255, 255, 255, .7);
    z-index: 100;
}
.login-panel-loading img {
    width: 50px;
    margin-top: 140px;
} */
@media only screen and (max-width: 1367px) {
    .container {
        margin-top: 40px;
    }
}
@media only screen and (max-width: 769px) {
    body {
        background: url(/wengine-vpn/js/image/background_mobile.jpg);
        background-attachment: fixed;
        font-size: 12px;
        height: auto;
    }
    .background {
        display: none;
    }
    .header {
        padding-top: 50px;
        height: 100%;
        text-align: center;
        display: block;
    }
    .portal-blank-logo {
        display: none;
    }
    .portal-logo {
        height: 33px;
    }
    .portal-logo::after {
        width: 0;
        margin-left: 0;
    }
    .portal-title {
        margin-left: auto;
        margin-right: auto;
        font-size: 25px;
        color: #ffffff;
    }
    .notice-panel {
        display: none;
    }
    .mobile-notice-panel {
        display: block;
    }
    .container {
        margin-top: 33px;
        margin-left: 0;
        margin-right: 0;
        height: auto;
        width: 100%;
        max-height: none;
    }
    .login-box {
        padding-top: 23px;
    }
    .el-form-item {
        width: auto;
    }
    .el-input {}
    #send-sms {
        width: 78px;
    }
    .login-panel {
        width: 500px;
        margin-bottom: 10px;
        margin-left: auto;
        margin-right: auto;
    }
    .notice-title {
        margin-top: 11px;
        font-size: 20px;
    }
    .notice-box {
        padding-top: 10px;
        padding-bottom: 20px;
        padding-left: 0;
        padding-right: 0;
    }
    .notice-content {
        font-size: 12px;
        line-height: 24px;
        margin: 12px 5px;
        width: auto;
    }
    .el-button-login {
        width: 95%;
    }
    .oauth-field {
        width: 95%;
    }
    .footer {
        position: relative;
        padding: 7px 0 9px;
        width: 100%;
        margin-top: 30px;
        margin-bottom: 20px;
        text-align: center;
        font-size: 14px;
        color: white;
    }
}
div.el-button-login {
    padding: 20px 0px;
    height: auto;
}
.login-nav-header {
    border-bottom: 1px solid #fff;
    color: #fff;
    padding: 0;
    position: relative;
    margin: 0 0 15px;
}
.login-nav-wrap {
    overflow: hidden;
    margin-bottom: -1px;
    position: relative;
    padding: 0 15px;
}
.login-nav-prev {
    left: 0;
    position: absolute;
    cursor: pointer;
    line-height: 44px;
    font-size: 12px;
    color: #8392a5;
}
.login-nav-next {
    right: 0;
    position: absolute;
    cursor: pointer;
    line-height: 44px;
    font-size: 12px;
    color: #8392a5;
}
.login-nav-scroll {
    overflow: hidden;
}
.login-nav-nav {
    position: relative;
    transition: transform .3s;
    float: left;
    transform: translateX(0px);
    white-space: nowrap;
}
.login-nav-active-bar {
    width: 84px;
    transform: translateX(0px);
    position: absolute;
    bottom: 0;
    left: 0;
    height: 3px;
    background-color: #1b9ef3;
    z-index: 1;
    transition: transform .3s cubic-bezier(.645, .045, .355, 1);
    list-style: none;
}
.login-nav-item {
    padding: 0 10px;
    height: 44px;
    box-sizing: border-box;
    line-height: 44px;
    display: inline-block;
    list-style: none;
    font-size: 16px;
    color: #8392a5;
    position: relative;
    border-bottom: 1px solid #fff;
    color: #fff;
}
.login-nav-nav div.on {
    box-sizing: border-box;
    border-bottom: 2px solid white;
}
@media only screen and (max-width: 416px) {
    .login-panel {
        width: 90%;
        margin-bottom: 10px;
        margin-left: auto;
        margin-right: auto;
    }
}
/*!
 * Quill Editor v1.3.6
 * https://quilljs.com/
 * Copyright (c) 2014, Jason Chen
 * Copyright (c) 2013, salesforce.com
 */
.ql-container {
    box-sizing: border-box;
    font-family: Helvetica, Arial, sans-serif;
    font-size: 13px;
    height: 100%;
    margin: 0px;
    position: relative;
}
.ql-container.ql-disabled .ql-tooltip {
    visibility: hidden;
}
.ql-container.ql-disabled .ql-editor ul[data-checked]>li::before {
    pointer-events: none;
}
.ql-clipboard {
    left: -100000px;
    height: 1px;
    overflow-y: hidden;
    position: absolute;
    top: 50%;
}
.ql-clipboard p {
    margin: 0;
    padding: 0;
}
.ql-editor {
    box-sizing: border-box;
    line-height: 1.42;
    height: 100%;
    outline: none;
    overflow-y: auto;
    padding: 12px 15px;
    tab-size: 4;
    -moz-tab-size: 4;
    text-align: left;
    white-space: pre-wrap;
    word-wrap: break-word;
}
.ql-editor>* {
    cursor: text;
}
.ql-editor p,
.ql-editor ol,
.ql-editor ul,
.ql-editor pre,
.ql-editor blockquote,
.ql-editor h1,
.ql-editor h2,
.ql-editor h3,
.ql-editor h4,
.ql-editor h5,
.ql-editor h6 {
    margin: 0;
    padding: 0;
    counter-reset: list-1 list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9;
}
.ql-editor ol,
.ql-editor ul {
    padding-left: 1.5em;
}
.ql-editor ol>li,
.ql-editor ul>li {
    list-style-type: none;
}
.ql-editor ul>li::before {
    content: '\2022';
}
.ql-editor ul[data-checked=true],
.ql-editor ul[data-checked=false] {
    pointer-events: none;
}
.ql-editor ul[data-checked=true]>li *,
.ql-editor ul[data-checked=false]>li * {
    pointer-events: all;
}
.ql-editor ul[data-checked=true]>li::before,
.ql-editor ul[data-checked=false]>li::before {
    color: #777;
    cursor: pointer;
    pointer-events: all;
}
.ql-editor ul[data-checked=true]>li::before {
    content: '\2611';
}
.ql-editor ul[data-checked=false]>li::before {
    content: '\2610';
}
.ql-editor li::before {
    display: inline;
    white-space: nowrap;
    width: 1.2em;
}
.ql-editor li:not(.ql-direction-rtl)::before {
    margin-left: -1.5em;
    margin-right: 0.3em;
    text-align: right;
}
.ql-editor li.ql-direction-rtl::before {
    margin-left: 0.3em;
    margin-right: -1.5em;
}
.ql-editor ol li:not(.ql-direction-rtl),
.ql-editor ul li:not(.ql-direction-rtl) {
    padding-left: 1.5em;
}
.ql-editor ol li.ql-direction-rtl,
.ql-editor ul li.ql-direction-rtl {
    padding-right: 1.5em;
}
.ql-editor ol li {
    counter-reset: list-1 list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9;
    counter-increment: list-0;
}
.ql-editor ol li:before {
    content: counter(list-0, decimal) '. ';
}
.ql-editor ol li.ql-indent-1 {
    counter-increment: list-1;
}
.ql-editor ol li.ql-indent-1:before {
    content: counter(list-1, lower-alpha) '. ';
}
.ql-editor ol li.ql-indent-1 {
    counter-reset: list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9;
}
.ql-editor ol li.ql-indent-2 {
    counter-increment: list-2;
}
.ql-editor ol li.ql-indent-2:before {
    content: counter(list-2, lower-roman) '. ';
}
.ql-editor ol li.ql-indent-2 {
    counter-reset: list-3 list-4 list-5 list-6 list-7 list-8 list-9;
}
.ql-editor ol li.ql-indent-3 {
    counter-increment: list-3;
}
.ql-editor ol li.ql-indent-3:before {
    content: counter(list-3, decimal) '. ';
}
.ql-editor ol li.ql-indent-3 {
    counter-reset: list-4 list-5 list-6 list-7 list-8 list-9;
}
.ql-editor ol li.ql-indent-4 {
    counter-increment: list-4;
}
.ql-editor ol li.ql-indent-4:before {
    content: counter(list-4, lower-alpha) '. ';
}
.ql-editor ol li.ql-indent-4 {
    counter-reset: list-5 list-6 list-7 list-8 list-9;
}
.ql-editor ol li.ql-indent-5 {
    counter-increment: list-5;
}
.ql-editor ol li.ql-indent-5:before {
    content: counter(list-5, lower-roman) '. ';
}
.ql-editor ol li.ql-indent-5 {
    counter-reset: list-6 list-7 list-8 list-9;
}
.ql-editor ol li.ql-indent-6 {
    counter-increment: list-6;
}
.ql-editor ol li.ql-indent-6:before {
    content: counter(list-6, decimal) '. ';
}
.ql-editor ol li.ql-indent-6 {
    counter-reset: list-7 list-8 list-9;
}
.ql-editor ol li.ql-indent-7 {
    counter-increment: list-7;
}
.ql-editor ol li.ql-indent-7:before {
    content: counter(list-7, lower-alpha) '. ';
}
.ql-editor ol li.ql-indent-7 {
    counter-reset: list-8 list-9;
}
.ql-editor ol li.ql-indent-8 {
    counter-increment: list-8;
}
.ql-editor ol li.ql-indent-8:before {
    content: counter(list-8, lower-roman) '. ';
}
.ql-editor ol li.ql-indent-8 {
    counter-reset: list-9;
}
.ql-editor ol li.ql-indent-9 {
    counter-increment: list-9;
}
.ql-editor ol li.ql-indent-9:before {
    content: counter(list-9, decimal) '. ';
}
.ql-editor .ql-indent-1:not(.ql-direction-rtl) {
    padding-left: 3em;
}
.ql-editor li.ql-indent-1:not(.ql-direction-rtl) {
    padding-left: 4.5em;
}
.ql-editor .ql-indent-1.ql-direction-rtl.ql-align-right {
    padding-right: 3em;
}
.ql-editor li.ql-indent-1.ql-direction-rtl.ql-align-right {
    padding-right: 4.5em;
}
.ql-editor .ql-indent-2:not(.ql-direction-rtl) {
    padding-left: 6em;
}
.ql-editor li.ql-indent-2:not(.ql-direction-rtl) {
    padding-left: 7.5em;
}
.ql-editor .ql-indent-2.ql-direction-rtl.ql-align-right {
    padding-right: 6em;
}
.ql-editor li.ql-indent-2.ql-direction-rtl.ql-align-right {
    padding-right: 7.5em;
}
.ql-editor .ql-indent-3:not(.ql-direction-rtl) {
    padding-left: 9em;
}
.ql-editor li.ql-indent-3:not(.ql-direction-rtl) {
    padding-left: 10.5em;
}
.ql-editor .ql-indent-3.ql-direction-rtl.ql-align-right {
    padding-right: 9em;
}
.ql-editor li.ql-indent-3.ql-direction-rtl.ql-align-right {
    padding-right: 10.5em;
}
.ql-editor .ql-indent-4:not(.ql-direction-rtl) {
    padding-left: 12em;
}
.ql-editor li.ql-indent-4:not(.ql-direction-rtl) {
    padding-left: 13.5em;
}
.ql-editor .ql-indent-4.ql-direction-rtl.ql-align-right {
    padding-right: 12em;
}
.ql-editor li.ql-indent-4.ql-direction-rtl.ql-align-right {
    padding-right: 13.5em;
}
.ql-editor .ql-indent-5:not(.ql-direction-rtl) {
    padding-left: 15em;
}
.ql-editor li.ql-indent-5:not(.ql-direction-rtl) {
    padding-left: 16.5em;
}
.ql-editor .ql-indent-5.ql-direction-rtl.ql-align-right {
    padding-right: 15em;
}
.ql-editor li.ql-indent-5.ql-direction-rtl.ql-align-right {
    padding-right: 16.5em;
}
.ql-editor .ql-indent-6:not(.ql-direction-rtl) {
    padding-left: 18em;
}
.ql-editor li.ql-indent-6:not(.ql-direction-rtl) {
    padding-left: 19.5em;
}
.ql-editor .ql-indent-6.ql-direction-rtl.ql-align-right {
    padding-right: 18em;
}
.ql-editor li.ql-indent-6.ql-direction-rtl.ql-align-right {
    padding-right: 19.5em;
}
.ql-editor .ql-indent-7:not(.ql-direction-rtl) {
    padding-left: 21em;
}
.ql-editor li.ql-indent-7:not(.ql-direction-rtl) {
    padding-left: 22.5em;
}
.ql-editor .ql-indent-7.ql-direction-rtl.ql-align-right {
    padding-right: 21em;
}
.ql-editor li.ql-indent-7.ql-direction-rtl.ql-align-right {
    padding-right: 22.5em;
}
.ql-editor .ql-indent-8:not(.ql-direction-rtl) {
    padding-left: 24em;
}
.ql-editor li.ql-indent-8:not(.ql-direction-rtl) {
    padding-left: 25.5em;
}
.ql-editor .ql-indent-8.ql-direction-rtl.ql-align-right {
    padding-right: 24em;
}
.ql-editor li.ql-indent-8.ql-direction-rtl.ql-align-right {
    padding-right: 25.5em;
}
.ql-editor .ql-indent-9:not(.ql-direction-rtl) {
    padding-left: 27em;
}
.ql-editor li.ql-indent-9:not(.ql-direction-rtl) {
    padding-left: 28.5em;
}
.ql-editor .ql-indent-9.ql-direction-rtl.ql-align-right {
    padding-right: 27em;
}
.ql-editor li.ql-indent-9.ql-direction-rtl.ql-align-right {
    padding-right: 28.5em;
}
.ql-editor .ql-video {
    display: block;
    max-width: 100%;
}
.ql-editor .ql-video.ql-align-center {
    margin: 0 auto;
}
.ql-editor .ql-video.ql-align-right {
    margin: 0 0 0 auto;
}
.ql-editor .ql-bg-black {
    background-color: #000;
}
.ql-editor .ql-bg-red {
    background-color: #e60000;
}
.ql-editor .ql-bg-orange {
    background-color: #f90;
}
.ql-editor .ql-bg-yellow {
    background-color: #ff0;
}
.ql-editor .ql-bg-green {
    background-color: #008a00;
}
.ql-editor .ql-bg-blue {
    background-color: #06c;
}
.ql-editor .ql-bg-purple {
    background-color: #93f;
}
.ql-editor .ql-color-white {
    color: #fff;
}
.ql-editor .ql-color-red {
    color: #e60000;
}
.ql-editor .ql-color-orange {
    color: #f90;
}
.ql-editor .ql-color-yellow {
    color: #ff0;
}
.ql-editor .ql-color-green {
    color: #008a00;
}
.ql-editor .ql-color-blue {
    color: #06c;
}
.ql-editor .ql-color-purple {
    color: #93f;
}
.ql-editor .ql-font-serif {
    font-family: Georgia, Times New Roman, serif;
}
.ql-editor .ql-font-monospace {
    font-family: Monaco, Courier New, monospace;
}
.ql-editor .ql-size-small {
    font-size: 0.75em;
}
.ql-editor .ql-size-large {
    font-size: 1.5em;
}
.ql-editor .ql-size-huge {
    font-size: 2.5em;
}
.ql-editor .ql-direction-rtl {
    direction: rtl;
    text-align: inherit;
}
.ql-editor .ql-align-center {
    text-align: center;
}
.ql-editor .ql-align-justify {
    text-align: justify;
}
.ql-editor .ql-align-right {
    text-align: right;
}
.ql-editor.ql-blank::before {
    color: rgba(0, 0, 0, 0.6);
    content: attr(data-placeholder);
    font-style: italic;
    left: 15px;
    pointer-events: none;
    position: absolute;
    right: 15px;
}
.ql-snow.ql-toolbar:after,
.ql-snow .ql-toolbar:after {
    clear: both;
    content: '';
    display: table;
}
.ql-snow.ql-toolbar button,
.ql-snow .ql-toolbar button {
    background: none;
    border: none;
    cursor: pointer;
    display: inline-block;
    float: left;
    height: 24px;
    padding: 3px 5px;
    width: 28px;
}
.ql-snow.ql-toolbar button svg,
.ql-snow .ql-toolbar button svg {
    float: left;
    height: 100%;
}
.ql-snow.ql-toolbar button:active:hover,
.ql-snow .ql-toolbar button:active:hover {
    outline: none;
}
.ql-snow.ql-toolbar input.ql-image[type=file],
.ql-snow .ql-toolbar input.ql-image[type=file] {
    display: none;
}
.ql-snow.ql-toolbar button:hover,
.ql-snow .ql-toolbar button:hover,
.ql-snow.ql-toolbar button:focus,
.ql-snow .ql-toolbar button:focus,
.ql-snow.ql-toolbar button.ql-active,
.ql-snow .ql-toolbar button.ql-active,
.ql-snow.ql-toolbar .ql-picker-label:hover,
.ql-snow .ql-toolbar .ql-picker-label:hover,
.ql-snow.ql-toolbar .ql-picker-label.ql-active,
.ql-snow .ql-toolbar .ql-picker-label.ql-active,
.ql-snow.ql-toolbar .ql-picker-item:hover,
.ql-snow .ql-toolbar .ql-picker-item:hover,
.ql-snow.ql-toolbar .ql-picker-item.ql-selected,
.ql-snow .ql-toolbar .ql-picker-item.ql-selected {
    color: #06c;
}
.ql-snow.ql-toolbar button:hover .ql-fill,
.ql-snow .ql-toolbar button:hover .ql-fill,
.ql-snow.ql-toolbar button:focus .ql-fill,
.ql-snow .ql-toolbar button:focus .ql-fill,
.ql-snow.ql-toolbar button.ql-active .ql-fill,
.ql-snow .ql-toolbar button.ql-active .ql-fill,
.ql-snow.ql-toolbar .ql-picker-label:hover .ql-fill,
.ql-snow .ql-toolbar .ql-picker-label:hover .ql-fill,
.ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-fill,
.ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-fill,
.ql-snow.ql-toolbar .ql-picker-item:hover .ql-fill,
.ql-snow .ql-toolbar .ql-picker-item:hover .ql-fill,
.ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-fill,
.ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-fill,
.ql-snow.ql-toolbar button:hover .ql-stroke.ql-fill,
.ql-snow .ql-toolbar button:hover .ql-stroke.ql-fill,
.ql-snow.ql-toolbar button:focus .ql-stroke.ql-fill,
.ql-snow .ql-toolbar button:focus .ql-stroke.ql-fill,
.ql-snow.ql-toolbar button.ql-active .ql-stroke.ql-fill,
.ql-snow .ql-toolbar button.ql-active .ql-stroke.ql-fill,
.ql-snow.ql-toolbar .ql-picker-label:hover .ql-stroke.ql-fill,
.ql-snow .ql-toolbar .ql-picker-label:hover .ql-stroke.ql-fill,
.ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-stroke.ql-fill,
.ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-stroke.ql-fill,
.ql-snow.ql-toolbar .ql-picker-item:hover .ql-stroke.ql-fill,
.ql-snow .ql-toolbar .ql-picker-item:hover .ql-stroke.ql-fill,
.ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-stroke.ql-fill,
.ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-stroke.ql-fill {
    fill: #06c;
}
.ql-snow.ql-toolbar button:hover .ql-stroke,
.ql-snow .ql-toolbar button:hover .ql-stroke,
.ql-snow.ql-toolbar button:focus .ql-stroke,
.ql-snow .ql-toolbar button:focus .ql-stroke,
.ql-snow.ql-toolbar button.ql-active .ql-stroke,
.ql-snow .ql-toolbar button.ql-active .ql-stroke,
.ql-snow.ql-toolbar .ql-picker-label:hover .ql-stroke,
.ql-snow .ql-toolbar .ql-picker-label:hover .ql-stroke,
.ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-stroke,
.ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-stroke,
.ql-snow.ql-toolbar .ql-picker-item:hover .ql-stroke,
.ql-snow .ql-toolbar .ql-picker-item:hover .ql-stroke,
.ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-stroke,
.ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-stroke,
.ql-snow.ql-toolbar button:hover .ql-stroke-miter,
.ql-snow .ql-toolbar button:hover .ql-stroke-miter,
.ql-snow.ql-toolbar button:focus .ql-stroke-miter,
.ql-snow .ql-toolbar button:focus .ql-stroke-miter,
.ql-snow.ql-toolbar button.ql-active .ql-stroke-miter,
.ql-snow .ql-toolbar button.ql-active .ql-stroke-miter,
.ql-snow.ql-toolbar .ql-picker-label:hover .ql-stroke-miter,
.ql-snow .ql-toolbar .ql-picker-label:hover .ql-stroke-miter,
.ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-stroke-miter,
.ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-stroke-miter,
.ql-snow.ql-toolbar .ql-picker-item:hover .ql-stroke-miter,
.ql-snow .ql-toolbar .ql-picker-item:hover .ql-stroke-miter,
.ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-stroke-miter,
.ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-stroke-miter {
    stroke: #06c;
}
@media (pointer: coarse) {
    .ql-snow.ql-toolbar button:hover:not(.ql-active),
    .ql-snow .ql-toolbar button:hover:not(.ql-active) {
        color: #444;
    }
    .ql-snow.ql-toolbar button:hover:not(.ql-active) .ql-fill,
    .ql-snow .ql-toolbar button:hover:not(.ql-active) .ql-fill,
    .ql-snow.ql-toolbar button:hover:not(.ql-active) .ql-stroke.ql-fill,
    .ql-snow .ql-toolbar button:hover:not(.ql-active) .ql-stroke.ql-fill {
        fill: #444;
    }
    .ql-snow.ql-toolbar button:hover:not(.ql-active) .ql-stroke,
    .ql-snow .ql-toolbar button:hover:not(.ql-active) .ql-stroke,
    .ql-snow.ql-toolbar button:hover:not(.ql-active) .ql-stroke-miter,
    .ql-snow .ql-toolbar button:hover:not(.ql-active) .ql-stroke-miter {
        stroke: #444;
    }
}
.ql-snow {
    box-sizing: border-box;
}
.ql-snow * {
    box-sizing: border-box;
}
.ql-snow .ql-hidden {
    display: none;
}
.ql-snow .ql-out-bottom,
.ql-snow .ql-out-top {
    visibility: hidden;
}
.ql-snow .ql-tooltip {
    position: absolute;
    transform: translateY(10px);
}
.ql-snow .ql-tooltip a {
    cursor: pointer;
    text-decoration: none;
}
.ql-snow .ql-tooltip.ql-flip {
    transform: translateY(-10px);
}
.ql-snow .ql-formats {
    display: inline-block;
    vertical-align: middle;
}
.ql-snow .ql-formats:after {
    clear: both;
    content: '';
    display: table;
}
.ql-snow .ql-stroke {
    fill: none;
    stroke: #444;
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke-width: 2;
}
.ql-snow .ql-stroke-miter {
    fill: none;
    stroke: #444;
    stroke-miterlimit: 10;
    stroke-width: 2;
}
.ql-snow .ql-fill,
.ql-snow .ql-stroke.ql-fill {
    fill: #444;
}
.ql-snow .ql-empty {
    fill: none;
}
.ql-snow .ql-even {
    fill-rule: evenodd;
}
.ql-snow .ql-thin,
.ql-snow .ql-stroke.ql-thin {
    stroke-width: 1;
}
.ql-snow .ql-transparent {
    opacity: 0.4;
}
.ql-snow .ql-direction svg:last-child {
    display: none;
}
.ql-snow .ql-direction.ql-active svg:last-child {
    display: inline;
}
.ql-snow .ql-direction.ql-active svg:first-child {
    display: none;
}
.ql-snow .ql-editor h1 {
    font-size: 2em;
}
.ql-snow .ql-editor h2 {
    font-size: 1.5em;
}
.ql-snow .ql-editor h3 {
    font-size: 1.17em;
}
.ql-snow .ql-editor h4 {
    font-size: 1em;
}
.ql-snow .ql-editor h5 {
    font-size: 0.83em;
}
.ql-snow .ql-editor h6 {
    font-size: 0.67em;
}
.ql-snow .ql-editor a {
    text-decoration: underline;
}
.ql-snow .ql-editor blockquote {
    border-left: 4px solid #ccc;
    margin-bottom: 5px;
    margin-top: 5px;
    padding-left: 16px;
}
.ql-snow .ql-editor code,
.ql-snow .ql-editor pre {
    background-color: #f0f0f0;
    border-radius: 3px;
}
.ql-snow .ql-editor pre {
    white-space: pre-wrap;
    margin-bottom: 5px;
    margin-top: 5px;
    padding: 5px 10px;
}
.ql-snow .ql-editor code {
    font-size: 85%;
    padding: 2px 4px;
}
.ql-snow .ql-editor pre.ql-syntax {
    background-color: #23241f;
    color: #f8f8f2;
    overflow: visible;
}
.ql-snow .ql-editor img {
    max-width: 100%;
}
.ql-snow .ql-picker {
    color: #444;
    display: inline-block;
    float: left;
    font-size: 14px;
    font-weight: 500;
    height: 24px;
    position: relative;
    vertical-align: middle;
}
.ql-snow .ql-picker-label {
    cursor: pointer;
    display: inline-block;
    height: 100%;
    padding-left: 8px;
    padding-right: 2px;
    position: relative;
    width: 100%;
}
.ql-snow .ql-picker-label::before {
    display: inline-block;
    line-height: 22px;
}
.ql-snow .ql-picker-options {
    background-color: #fff;
    display: none;
    min-width: 100%;
    padding: 4px 8px;
    position: absolute;
    white-space: nowrap;
}
.ql-snow .ql-picker-options .ql-picker-item {
    cursor: pointer;
    display: block;
    padding-bottom: 5px;
    padding-top: 5px;
}
.ql-snow .ql-picker.ql-expanded .ql-picker-label {
    color: #ccc;
    z-index: 2;
}
.ql-snow .ql-picker.ql-expanded .ql-picker-label .ql-fill {
    fill: #ccc;
}
.ql-snow .ql-picker.ql-expanded .ql-picker-label .ql-stroke {
    stroke: #ccc;
}
.ql-snow .ql-picker.ql-expanded .ql-picker-options {
    display: block;
    margin-top: -1px;
    top: 100%;
    z-index: 1;
}
.ql-snow .ql-color-picker,
.ql-snow .ql-icon-picker {
    width: 28px;
}
.ql-snow .ql-color-picker .ql-picker-label,
.ql-snow .ql-icon-picker .ql-picker-label {
    padding: 2px 4px;
}
.ql-snow .ql-color-picker .ql-picker-label svg,
.ql-snow .ql-icon-picker .ql-picker-label svg {
    right: 4px;
}
.ql-snow .ql-icon-picker .ql-picker-options {
    padding: 4px 0px;
}
.ql-snow .ql-icon-picker .ql-picker-item {
    height: 24px;
    width: 24px;
    padding: 2px 4px;
}
.ql-snow .ql-color-picker .ql-picker-options {
    padding: 3px 5px;
    width: 152px;
}
.ql-snow .ql-color-picker .ql-picker-item {
    border: 1px solid transparent;
    float: left;
    height: 16px;
    margin: 2px;
    padding: 0px;
    width: 16px;
}
.ql-snow .ql-picker:not(.ql-color-picker):not(.ql-icon-picker) svg {
    position: absolute;
    margin-top: -9px;
    right: 0;
    top: 50%;
    width: 18px;
}
.ql-snow .ql-picker.ql-header .ql-picker-label[data-label]:not([data-label=''])::before,
.ql-snow .ql-picker.ql-font .ql-picker-label[data-label]:not([data-label=''])::before,
.ql-snow .ql-picker.ql-size .ql-picker-label[data-label]:not([data-label=''])::before,
.ql-snow .ql-picker.ql-header .ql-picker-item[data-label]:not([data-label=''])::before,
.ql-snow .ql-picker.ql-font .ql-picker-item[data-label]:not([data-label=''])::before,
.ql-snow .ql-picker.ql-size .ql-picker-item[data-label]:not([data-label=''])::before {
    content: attr(data-label);
}
.ql-snow .ql-picker.ql-header {
    width: 98px;
}
.ql-snow .ql-picker.ql-header .ql-picker-label::before,
.ql-snow .ql-picker.ql-header .ql-picker-item::before {
    content: 'Normal';
}
.ql-snow .ql-picker.ql-header .ql-picker-label[data-value="1"]::before,
.ql-snow .ql-picker.ql-header .ql-picker-item[data-value="1"]::before {
    content: 'Heading 1';
}
.ql-snow .ql-picker.ql-header .ql-picker-label[data-value="2"]::before,
.ql-snow .ql-picker.ql-header .ql-picker-item[data-value="2"]::before {
    content: 'Heading 2';
}
.ql-snow .ql-picker.ql-header .ql-picker-label[data-value="3"]::before,
.ql-snow .ql-picker.ql-header .ql-picker-item[data-value="3"]::before {
    content: 'Heading 3';
}
.ql-snow .ql-picker.ql-header .ql-picker-label[data-value="4"]::before,
.ql-snow .ql-picker.ql-header .ql-picker-item[data-value="4"]::before {
    content: 'Heading 4';
}
.ql-snow .ql-picker.ql-header .ql-picker-label[data-value="5"]::before,
.ql-snow .ql-picker.ql-header .ql-picker-item[data-value="5"]::before {
    content: 'Heading 5';
}
.ql-snow .ql-picker.ql-header .ql-picker-label[data-value="6"]::before,
.ql-snow .ql-picker.ql-header .ql-picker-item[data-value="6"]::before {
    content: 'Heading 6';
}
.ql-snow .ql-picker.ql-header .ql-picker-item[data-value="1"]::before {
    font-size: 2em;
}
.ql-snow .ql-picker.ql-header .ql-picker-item[data-value="2"]::before {
    font-size: 1.5em;
}
.ql-snow .ql-picker.ql-header .ql-picker-item[data-value="3"]::before {
    font-size: 1.17em;
}
.ql-snow .ql-picker.ql-header .ql-picker-item[data-value="4"]::before {
    font-size: 1em;
}
.ql-snow .ql-picker.ql-header .ql-picker-item[data-value="5"]::before {
    font-size: 0.83em;
}
.ql-snow .ql-picker.ql-header .ql-picker-item[data-value="6"]::before {
    font-size: 0.67em;
}
.ql-snow .ql-picker.ql-font {
    width: 108px;
}
.ql-snow .ql-picker.ql-font .ql-picker-label::before,
.ql-snow .ql-picker.ql-font .ql-picker-item::before {
    content: 'Sans Serif';
}
.ql-snow .ql-picker.ql-font .ql-picker-label[data-value=serif]::before,
.ql-snow .ql-picker.ql-font .ql-picker-item[data-value=serif]::before {
    content: 'Serif';
}
.ql-snow .ql-picker.ql-font .ql-picker-label[data-value=monospace]::before,
.ql-snow .ql-picker.ql-font .ql-picker-item[data-value=monospace]::before {
    content: 'Monospace';
}
.ql-snow .ql-picker.ql-font .ql-picker-item[data-value=serif]::before {
    font-family: Georgia, Times New Roman, serif;
}
.ql-snow .ql-picker.ql-font .ql-picker-item[data-value=monospace]::before {
    font-family: Monaco, Courier New, monospace;
}
.ql-snow .ql-picker.ql-size {
    width: 98px;
}
.ql-snow .ql-picker.ql-size .ql-picker-label::before,
.ql-snow .ql-picker.ql-size .ql-picker-item::before {
    content: 'Normal';
}
.ql-snow .ql-picker.ql-size .ql-picker-label[data-value=small]::before,
.ql-snow .ql-picker.ql-size .ql-picker-item[data-value=small]::before {
    content: 'Small';
}
.ql-snow .ql-picker.ql-size .ql-picker-label[data-value=large]::before,
.ql-snow .ql-picker.ql-size .ql-picker-item[data-value=large]::before {
    content: 'Large';
}
.ql-snow .ql-picker.ql-size .ql-picker-label[data-value=huge]::before,
.ql-snow .ql-picker.ql-size .ql-picker-item[data-value=huge]::before {
    content: 'Huge';
}
.ql-snow .ql-picker.ql-size .ql-picker-item[data-value=small]::before {
    font-size: 10px;
}
.ql-snow .ql-picker.ql-size .ql-picker-item[data-value=large]::before {
    font-size: 18px;
}
.ql-snow .ql-picker.ql-size .ql-picker-item[data-value=huge]::before {
    font-size: 32px;
}
.ql-snow .ql-color-picker.ql-background .ql-picker-item {
    background-color: #fff;
}
.ql-snow .ql-color-picker.ql-color .ql-picker-item {
    background-color: #000;
}
.ql-toolbar.ql-snow {
    border: 1px solid #ccc;
    box-sizing: border-box;
    font-family: 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif;
    padding: 8px;
}
.ql-toolbar.ql-snow .ql-formats {
    margin-right: 15px;
}
.ql-toolbar.ql-snow .ql-picker-label {
    border: 1px solid transparent;
}
.ql-toolbar.ql-snow .ql-picker-options {
    border: 1px solid transparent;
    box-shadow: rgba(0, 0, 0, 0.2) 0 2px 8px;
}
.ql-toolbar.ql-snow .ql-picker.ql-expanded .ql-picker-label {
    border-color: #ccc;
}
.ql-toolbar.ql-snow .ql-picker.ql-expanded .ql-picker-options {
    border-color: #ccc;
}
.ql-toolbar.ql-snow .ql-color-picker .ql-picker-item.ql-selected,
.ql-toolbar.ql-snow .ql-color-picker .ql-picker-item:hover {
    border-color: #000;
}
.ql-toolbar.ql-snow+.ql-container.ql-snow {
    border-top: 0px;
}
.ql-snow .ql-tooltip {
    background-color: #fff;
    border: 1px solid #ccc;
    box-shadow: 0px 0px 5px #ddd;
    color: #444;
    padding: 5px 12px;
    white-space: nowrap;
}
.ql-snow .ql-tooltip::before {
    content: "Visit URL:";
    line-height: 26px;
    margin-right: 8px;
}
.ql-snow .ql-tooltip input[type=text] {
    display: none;
    border: 1px solid #ccc;
    font-size: 13px;
    height: 26px;
    margin: 0px;
    padding: 3px 5px;
    width: 170px;
}
.ql-snow .ql-tooltip a.ql-preview {
    display: inline-block;
    max-width: 200px;
    overflow-x: hidden;
    text-overflow: ellipsis;
    vertical-align: top;
}
.ql-snow .ql-tooltip a.ql-action::after {
    border-right: 1px solid #ccc;
    content: 'Edit';
    margin-left: 16px;
    padding-right: 8px;
}
.ql-snow .ql-tooltip a.ql-remove::before {
    content: 'Remove';
    margin-left: 8px;
}
.ql-snow .ql-tooltip a {
    line-height: 26px;
}
.ql-snow .ql-tooltip.ql-editing a.ql-preview,
.ql-snow .ql-tooltip.ql-editing a.ql-remove {
    display: none;
}
.ql-snow .ql-tooltip.ql-editing input[type=text] {
    display: inline-block;
}
.ql-snow .ql-tooltip.ql-editing a.ql-action::after {
    border-right: 0px;
    content: 'Save';
    padding-right: 0px;
}
.ql-snow .ql-tooltip[data-mode=link]::before {
    content: "Enter link:";
}
.ql-snow .ql-tooltip[data-mode=formula]::before {
    content: "Enter formula:";
}
.ql-snow .ql-tooltip[data-mode=video]::before {
    content: "Enter video:";
}
.ql-snow a {
    color: #06c;
}
.ql-container.ql-snow {
    border: 1px solid #ccc;
}</style>