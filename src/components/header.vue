<template>
    <div>
        <header id="header" class="header has-sticky sticky-jump" style="">
            <div class="header-wrapper">
                <div id="top-bar" class="header-top hide-for-sticky nav-dark hide-for-medium">
                    <div class="flex-row container">
                        <div class="flex-col hide-for-medium flex-left">
                            <ul class="nav nav-left medium-nav-center nav-small  nav-divided">
                                <li class="html custom html_topbar_left">
                                    <p class="mona_html showroom">319 - C16 Lý Thường Kiệt, P.15, Q.11, Tp.HCM</p>
                                </li>
                                <li class="header-divider"></li>
                                <li class="html custom html_topbar_right">
                                    <p class="mona_html hotline"><a href="tel:0769220162">076 922 0162</a></p>
                                </li>
                                <li class="header-divider"></li>
                                <li class="html custom html_top_right_text">
                                    <p class="mona_html email"><a
                                            href="mailto:demonhunterg@gmail.com">demonhunterg@gmail.com</a></p>
                                </li>
                            </ul>
                        </div><!-- flex-col left -->

                        <div class="flex-col hide-for-medium flex-center">
                            <ul class="nav nav-center nav-small  nav-divided">
                            </ul>
                        </div><!-- center -->

                        <div class="flex-col hide-for-medium flex-right">
                            <ul class="nav top-bar-nav nav-right nav-small  nav-divided">
                                <li class="html header-social-icons ml-0">
                                    <div class="social-icons follow-icons "><a href="http://url" target="_blank"
                                            data-label="Facebook" rel="noopener noreferrer nofollow"
                                            class="icon plain facebook tooltip tooltipstered"><i
                                                class="icon-facebook"></i></a><a href="http://url" target="_blank"
                                            rel="noopener noreferrer nofollow" data-label="Instagram"
                                            class="icon plain  instagram tooltip tooltipstered"><i
                                                class="icon-instagram"></i></a><a href="http://url" target="_blank"
                                            data-label="Twitter" rel="noopener noreferrer nofollow"
                                            class="icon plain  twitter tooltip tooltipstered"><i
                                                class="icon-twitter"></i></a></div>
                                </li>
                            </ul>
                        </div><!-- .flex-col right -->


                    </div><!-- .flex-row -->
                </div><!-- #header-top -->
                <div id="masthead" class="header-main ">
                    <div class="header-inner flex-row container logo-left medium-logo-center" role="navigation">

                        <!-- Logo -->
                        <div id="logo" class="flex-col logo">
                            <!-- Header logo -->
                            <a href="https://mauweb.monamedia.net/blueuni/" title="Blue University" rel="home">
                                <img width="200" height="80"
                                    src="http://mauweb.monamedia.net/blueuni/wp-content/uploads/2019/02/logo.png"
                                    class="header_logo header-logo" alt="Blue University"></a>
                        </div>

                        <!-- Mobile Left Elements -->
                        <div class="flex-col show-for-medium flex-left">
                            <ul class="mobile-nav nav nav-left ">
                                <li class="nav-icon has-icon">
                                    <a href="#" data-open="#main-menu" data-pos="left" data-bg="main-menu-overlay"
                                        data-color="" class="is-small" aria-controls="main-menu" aria-expanded="false">

                                        <i class="icon-menu"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <!-- Left Elements -->
                        <div class="flex-col hide-for-medium flex-left flex-grow">
                            <ul class="header-nav header-nav-main nav nav-left nav-size-medium nav-uppercase">
                                <li id="menu-item-22"
                                    class="menu-item menu-item-type-post_type menu-item-object-page  menu-item-22"><a
                                        href="/">Giới thiệu</a></li>
                                <li id="menu-item-778"
                                    class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-has-children  menu-item-778 has-dropdown">
                                    <a href="https://mauweb.monamedia.net/blueuni/category/thong-tin-nganh-hoc/"
                                        class="nav-top-link">Thông tin ngành học<i class="icon-angle-down"></i></a>
                                    <ul class="nav-dropdown nav-dropdown-simple" style="">
                                        <li id="menu-item-805"
                                            class="menu-item menu-item-type-custom menu-item-object-custom  menu-item-805">
                                            <a
                                                href="http://mauweb.monamedia.net/blueuni/thuc-tap-sinh-dieu-duong-tai-nhat-ban/">Điều
                                                dưỡng</a>
                                        </li>
                                    </ul>
                                </li>
                                <li id="menu-item-25"
                                    class="menu-item menu-item-type-taxonomy menu-item-object-category  menu-item-25">
                                 
                                    <router-link to="/sinhvien/thongbao">   <a
                                        
                                        class="nav-top-link">Thông báo chung
                                    </a></router-link>
                                </li>
                                        <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                                        data-bs-toggle="dropdown" aria-expanded="false">
                                        Sinh Viên <i class="icon-angle-down"></i>
                                    </a>
                                    <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <li>
                                            <router-link to="/sinhvien/thongtin" class="dropdown-item">Thông tin sinh viên</router-link>
                                        </li>

                                        <li>
                                            <router-link to="/sinhvien/diem" class="dropdown-item">Xem điểm</router-link>
                                        </li>
                                        <li>
                                            <router-link to="/sinhvien/dangkyhocphan" class="dropdown-item">Đăng ký học phần</router-link>
                                        </li>
                                        <li>
                                            <router-link to="/sinhvien/hocphandadangky" class="dropdown-item">Học phần đã đăng ký</router-link>
                                        </li>
                                        <li v-if="!isAuthenticated">
                                            <router-link to="/login" class="dropdown-item">Đăng nhập</router-link>
                                        </li>
                                        <li v-if="isAuthenticated">
                                            <a class="dropdown-item" href="/" @click="handleLogout">Đăng xuất</a>
                                        </li>
                                        
                                    </ul>
                                </li>
                                <li id="menu-item-23"
                                    class="menu-item menu-item-type-post_type menu-item-object-page  menu-item-23"><a
                                        href="https://mauweb.monamedia.net/blueuni/lien-he/" class="nav-top-link">Liên
                                        hệ</a></li>
                                        <li class="nav-item dropdown">
                                        
                                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                                        data-bs-toggle="dropdown" aria-expanded="false">
                                        <i class="icon-angle-down"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <!-- Right Elements -->
                        <!-- Mobile Right Elements -->
                        <div class="flex-col show-for-medium flex-right">
                            <ul class="mobile-nav nav nav-right ">
                            </ul>
                        </div>

                    </div><!-- .header-inner -->

                    <!-- Header divider -->
                    
                </div><!-- .header-main -->
                <div class="header-bg-container fill">
                    <div class="header-bg-image fill"></div>
                    <div class="header-bg-color fill"></div>
                </div><!-- .header-bg-container -->
            </div><!-- header-wrapper-->
        </header>
    </div>
</template>

<script>
import { useStore } from 'vuex';
import { ref } from 'vue'; // Import ref for reactive variable
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';

export default {
  name: 'HeaderComponents',
  setup() {
    const store = useStore();
    const isAuthenticated = ref(false); // Use ref to create reactive variable
    

    // Lấy đối tượng auth
    const auth = getAuth();

    // Kiểm tra trạng thái đăng nhập khi component được tạo
    onAuthStateChanged(auth, (user) => {
      isAuthenticated.value = !!user; // Update isAuthenticated variable
    });

    // Xử lý đăng xuất
    const handleLogout = async () => {
      await signOut(auth); // Đăng xuất khỏi Firebase Auth
      await store.dispatch('logOut'); // Xóa trạng thái đăng nhập từ Vuex
    }

    return { isAuthenticated, handleLogout };
  }
};
</script>
<style scoped>
.header,
.header-wrapper {
    width: 100%;
    z-index: 30;
    position: relative;
    background-size: cover;
    background-position: 50% 0;
    transition: background-color .3s, opacity .3s;
}

article,
aside,
details,
figcaption,
figure,
footer,
header,
main,
menu,
nav,
section,
summary {
    display: block;
}

*,
*:before,
*:after {
    box-sizing: border-box;
}

header {
    display: block;
    unicode-bidi: isolate;
}

.header,
.header-wrapper {
    width: 100%;
    z-index: 30;
    position: relative;
    background-size: cover;
    background-position: 50% 0;
    transition: background-color .3s, opacity .3s;
}

.header-top {
    background-color: #0071bb !important;
}

.header-top {
    min-height: 30px;
}

.header-top {
    background-color: #446084;
    z-index: 11;
    position: relative;
    min-height: 20px;
}

.header-top,
.header-bottom {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-align: center;
    align-items: center;
    -ms-flex-wrap: no-wrap;
    flex-wrap: no-wrap;
}

.header .flex-row {
    height: 100%;
}

.full-width .ubermenu-nav,
.container,
.row {
    max-width: 1230px;
}

.flex-row {
    -js-display: flex;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-flow: row nowrap;
    flex-flow: row nowrap;
    -ms-flex-align: center;
    align-items: center;
    -ms-flex-pack: justify;
    justify-content: space-between;
    width: 100%;
}

.flex-left {
    margin-right: auto;
}

.flex-col {
    max-height: 100%;
}

.nav-left {
    -ms-flex-pack: start;
    justify-content: flex-start;
}

.nav {
    width: 100%;
    position: relative;
    display: inline-block;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-flow: row wrap;
    flex-flow: row wrap;
    -ms-flex-align: center;
    align-items: center;
}

.nav,
.nav ul:not(.nav-dropdown) {
    margin: 0;
    padding: 0;
}

pre,
blockquote,
form,
figure,
p,
dl,
ul,
ol {
    margin-bottom: 1.3em;
}

ol,
ul {
    margin-top: 0;
    padding: 0;
}

ul {
    list-style: disc;
}

.nav-small.nav>li.html {
    font-size: .75em;
}

.nav>li.html {
    font-size: .85em;
}

.nav li:first-child {
    margin-left: 0 !important;
}

.nav-divided>li {
    margin: 0 .7em;
}

.nav>li {
    display: inline-block;
    list-style: none;
    margin: 0;
    padding: 0;
    position: relative;
    margin: 0 7px;
    transition: background-color .3s;
}

li {
    margin-bottom: .6em;
}

*,
*:before,
*:after {
    box-sizing: border-box;
}

li {
    display: list-item;
    text-align: -webkit-match-parent;
    unicode-bidi: isolate;
}

.mona_html {
    font-size: 12px;
}

.nav-dark .nav>li.header-divider {
    border-color: rgba(255, 255, 255, 0.1);
}

.dark.nav-dropdown.nav-dropdown-bold>li.nav-dropdown-col,
.dark.nav-dropdown.nav-dropdown-simple>li.nav-dropdown-col,
.nav-dropdown.dark .nav-column>li>a,
.nav-dropdown.dark>li>a,
.nav-dark .nav>li.header-divider,
.nav-dark .header-divider:after,
.nav-dark .nav-divided>li+li>a:after {
    border-color: rgba(255, 255, 255, 0.2);
}

.nav>li.header-divider {
    border-left: 1px solid rgba(0, 0, 0, 0.1);
    height: 30px;
    vertical-align: middle;
    position: relative;
    margin: 0 7.5px;
}

.nav-divided>li {
    margin: 0 .7em;
}

.nav>li {
    display: inline-block;
    list-style: none;
    margin: 0;
    padding: 0;
    position: relative;
    margin: 0 7px;
    transition: background-color .3s;
}

.dark .nav-vertical li li.menu-item-has-children>a,
.nav-dark .nav-vertical li li.menu-item-has-children>a,
.nav-dark .nav>li.html,
.nav-dark .header-button {
    color: #fff;
}

.nav-small.nav>li.html {
    font-size: .75em;
}

.nav>li.html {
    font-size: .85em;
}

.nav-divided>li {
    margin: 0 .7em;
}

.nav>li {
    display: inline-block;
    list-style: none;
    margin: 0;
    padding: 0;
    position: relative;
    margin: 0 7px;
    transition: background-color .3s;
}

p {
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    unicode-bidi: isolate;
}

.dark .nav-vertical li li.menu-item-has-children>a,
.nav-dark .nav-vertical li li.menu-item-has-children>a,
.nav-dark .nav>li.html,
.nav-dark .header-button {
    color: #fff;
}

.nav-small.nav>li.html {
    font-size: .75em;
}

.nav p {
    margin: 0;
    padding-bottom: 0;
}

.mona_html {
    font-size: 12px;
}

.dark .nav-vertical li li.menu-item-has-children>a,
.nav-dark .nav-vertical li li.menu-item-has-children>a,
.nav-dark .nav>li.html,
.nav-dark .header-button {
    color: #fff;
}

.nav-small.nav>li.html {
    font-size: .75em;
}

.nav>li.html {
    font-size: .85em;
}

.nav li:last-child {
    margin-right: 0 !important;
}

.nav-divided>li {
    margin: 0 .7em;
}

.nav>li {
    display: inline-block;
    list-style: none;
    margin: 0;
    padding: 0;
    position: relative;
    margin: 0 7px;
    transition: background-color .3s;
}

.nav p {
    margin: 0;
    padding-bottom: 0;
}

.mona_html {
    font-size: 12px;
}

.mona_html a {
    color: #fff;
}

a {
    color: #334862;
    text-decoration: none;
}

.flex-center {
    margin: 0 auto;
}

.flex-col {
    max-height: 100%;
}

.nav-center {
    -ms-flex-pack: center;
    justify-content: center;
}

.nav {
    width: 100%;
    position: relative;
    display: inline-block;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-flow: row wrap;
    flex-flow: row wrap;
    -ms-flex-align: center;
    align-items: center;
}

.nav,
.nav ul:not(.nav-dropdown) {
    margin: 0;
    padding: 0;
}

.flex-right {
    margin-left: auto;
}

.flex-col {
    max-height: 100%;
}

*,
*:before,
*:after {
    box-sizing: border-box;
}

div {
    display: block;
    unicode-bidi: isolate;
}

.nav-right {
    -ms-flex-pack: end;
    justify-content: flex-end;
}

.nav {
    width: 100%;
    position: relative;
    display: inline-block;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-flow: row wrap;
    flex-flow: row wrap;
    -ms-flex-align: center;
    align-items: center;
}

.nav,
.nav ul:not(.nav-dropdown) {
    margin: 0;
    padding: 0;
}

.dark .nav-vertical li li.menu-item-has-children>a,
.nav-dark .nav-vertical li li.menu-item-has-children>a,
.nav-dark .nav>li.html,
.nav-dark .header-button {
    color: #fff;
}

.nav-small.nav>li.html {
    font-size: .75em;
}

.nav>li.html {
    font-size: .85em;
}

.nav li:last-child {
    margin-right: 0 !important;
}

.nav li:first-child {
    margin-left: 0 !important;
}

.nav-divided>li {
    margin: 0 .7em;
}

.nav>li {
    display: inline-block;
    list-style: none;
    margin: 0;
    padding: 0;
    position: relative;
    margin: 0 7px;
    transition: background-color .3s;
}

.html .social-icons {
    font-size: 1.2em;
}

.nav-dark .social-icons,
.dark .social-icons {
    color: #FFF;
}

.html .social-icons {
    font-size: 1em;
}

.social-icons {
    display: inline-block;
    vertical-align: middle;
    font-size: .85em;
    color: #999;
}

.header .nav-small a.icon:not(.button) {
    font-size: 1em;
}

.header a.icon:not(.button) {
    margin-left: .3em;
    margin-right: .3em;
}

button.icon:not(.button),
a.icon:not(.button) {
    font-family: sans-serif;
    margin-left: .25em;
    margin-right: .25em;
    font-size: 1.2em;
}

a.plain {
    color: currentColor;
    transition: color .3s, opacity .3s, transform .3s;
}

a {
    color: #334862;
    text-decoration: none;
}

a,
button,
input {
    -ms-touch-action: manipulation;
    touch-action: manipulation;
}

a {
    background-color: transparent;
}

.social-icons i {
    min-width: 1em;
}

.links>li>a:before,
i[class^="icon-"],
i[class*=" icon-"] {
    font-family: 'fl-icons' !important;
    speak: none !important;
    margin: 0;
    padding: 0;
    display: inline-block;
    font-style: normal !important;
    font-weight: normal !important;
    font-variant: normal !important;
    text-transform: none !important;
    position: relative;
    line-height: 1.2;
}

.header-main {
    height: 80px;
}

.header-main {
    z-index: 10;
    position: relative;
}

.header .flex-row {
    height: 100%;
}

.full-width .ubermenu-nav,
.container,
.row {
    max-width: 1230px;
}

#logo {
    width: 200px;
}

.logo-left .logo {
    margin-left: 0;
    margin-right: 30px;
}

.logo {
    line-height: 1;
    margin: 0;
}

.flex-col {
    max-height: 100%;
}

#logo {
    width: 200px;
}

.logo-left .logo {
    margin-left: 0;
    margin-right: 30px;
}

.logo {
    line-height: 1;
    margin: 0;
}

.flex-col {
    max-height: 100%;
}

.accordion-title.active,
.has-icon-bg .icon .icon-inner,
.logo a,
.primary.is-underline,
.primary.is-link,
.badge-outline .badge-inner,
.nav-outline>li.active>a,
.nav-outline>li.active>a,
.cart-icon strong,
[data-color='primary'],
.is-outline.primary {
    color: #0071bb;
}

.logo a {
    text-decoration: none;
    display: block;
    color: #446084;
    font-size: 32px;
    text-transform: uppercase;
    font-weight: bolder;
    margin: 0;
}

a {
    color: #334862;
    text-decoration: none;
}

a,
button,
input {
    -ms-touch-action: manipulation;
    touch-action: manipulation;
}

#logo img {
    max-height: 80px;
}

.header-wrapper:not(.stuck) .logo img {
    transition: max-height .5s;
}

.logo img {
    display: block;
    width: auto;
}

img {
    transition: opacity 1s;
    opacity: 1;
}

img {
    max-width: 100%;
    height: auto;
    display: inline-block;
    vertical-align: middle;
}

img {
    border-style: none;
}

.flex-left {
    margin-right: auto;
}

.flex-grow {
    -ms-flex: 1;
    flex: 1;
    -ms-flex-negative: 1;
    -ms-flex-preferred-size: auto !important;
}

.flex-col {
    max-height: 100%;
}

.nav-left {
    -ms-flex-pack: start;
    justify-content: flex-start;
}

.nav {
    width: 100%;
    position: relative;
    display: inline-block;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-flow: row wrap;
    flex-flow: row wrap;
    -ms-flex-align: center;
    align-items: center;
}

.nav,
.nav ul:not(.nav-dropdown) {
    margin: 0;
    padding: 0;
}

.nav li:first-child {
    margin-left: 0 !important;
}

.header-main ul li {
    padding: 0px 12px;
}

.nav>li {
    display: inline-block;
    list-style: none;
    margin: 0;
    padding: 0;
    position: relative;
    margin: 0 7px;
    transition: background-color .3s;
}

.header:not(.transparent) .header-nav.nav>li>a {
    color: #000000;
}

.header-main .nav>li>a {
    line-height: 16px;
}

.nav>li>a {
    font-weight: 700;
}

.nav>li>a {
    font-family: "Roboto", sans-serif;
}

.nav-size-medium>li>a {
    font-size: .9em;
}

.nav>li>a {
    font-size: .8em;
}

.nav-uppercase>li>a {
    letter-spacing: .02em;
    text-transform: uppercase;
    font-weight: bolder;
}

.nav>li>a,
.nav-dropdown>li>a,
.nav-column>li>a {
    color: rgba(102, 102, 102, 0.85);
    transition: all .2s;
}

.nav>li>a {
    padding: 10px 0;
    display: inline-block;
    display: -ms-inline-flexbox;
    display: inline-flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    -ms-flex-align: center;
    align-items: center;
}

a {
    color: #334862;
    text-decoration: none;
}

.flex-right {
    margin-left: auto;
}

.flex-col {
    max-height: 100%;
}

.nav-right {
    -ms-flex-pack: end;
    justify-content: flex-end;
}

.nav {
    width: 100%;
    position: relative;
    display: inline-block;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-flow: row wrap;
    flex-flow: row wrap;
    -ms-flex-align: center;
    align-items: center;
}

.nav,
.nav ul:not(.nav-dropdown) {
    margin: 0;
    padding: 0;
}

pre,
blockquote,
form,
figure,
p,
dl,
ul,
ol {
    margin-bottom: 1.3em;
}

ol,
ul {
    margin-top: 0;
    padding: 0;
}

ul {
    list-style: disc;
}

.nav>li.html {
    font-size: .85em;
}

.nav li:last-child {
    margin-right: 0 !important;
}

.nav li:first-child {
    margin-left: 0 !important;
}

.header-main ul li {
    padding: 0px 12px;
}

.nav>li {
    display: inline-block;
    list-style: none;
    margin: 0;
    padding: 0;
    position: relative;
    margin: 0 7px;
    transition: background-color .3s;
}

.search-form {
    width: 100%;
}

.relative {
    position: relative !important;
}

li {
    margin-bottom: .6em;
}

div {
    display: block;
    unicode-bidi: isolate;
}

.nav>li.html {
    font-size: .85em;
}

.nav>li {
    display: inline-block;
    list-style: none;
    margin: 0;
    padding: 0;
    position: relative;
    margin: 0 7px;
    transition: background-color .3s;
}

.searchform-wrapper {
    width: 100%;
}

.relative {
    position: relative !important;
}

.is-normal {
    font-weight: normal;
}

*,
*:before,
*:after {
    box-sizing: border-box;
}

user agent stylesheet div {
    display: block;
    unicode-bidi: isolate;
}

.nav>li.html {
    font-size: .85em;
}

.nav>li {
    display: inline-block;
    list-style: none;
    margin: 0;
    padding: 0;
    position: relative;
    margin: 0 7px;
    transition: background-color .3s;
}

li {
    text-align: -webkit-match-parent;
}

.searchform-wrapper form {
    margin-bottom: 0;
}

.searchform {
    position: relative;
}

.header .flex-row {
    height: 100%;
}

.relative {
    position: relative !important;
}

.flex-row {
    -js-display: flex;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-flow: row nowrap;
    flex-flow: row nowrap;
    -ms-flex-align: center;
    align-items: center;
    -ms-flex-pack: justify;
    justify-content: space-between;
    width: 100%;
}

.flex-grow {
    -ms-flex: 1;
    flex: 1;
    -ms-flex-negative: 1;
    -ms-flex-preferred-size: auto !important;
}

.flex-col {
    max-height: 100%;
}

*,
*:before,
*:after {
    box-sizing: border-box;
}

div {
    display: block;
    unicode-bidi: isolate;
}

li.html .row,
li.html form,
li.html select,
li.html input {
    margin: 0;
}

.flex-col {
    max-height: 100%;
}

.searchform .button.icon {
    margin: 0;
}

.widget_search .submit-button,
.searchform-wrapper:not(.form-flat) .submit-button {
    border-top-left-radius: 0 !important;
    border-bottom-left-radius: 0 !important;
}

.searchform .button.icon i {
    font-size: 1.2em;
}

.button.icon i {
    font-size: 1.2em;
}

button i,
.button i {
    vertical-align: middle;
    top: -1.5px;
}

.links>li>a:before,
i[class^="icon-"],
i[class*=" icon-"] {
    font-family: 'fl-icons' !important;
    speak: none !important;
    margin: 0;
    padding: 0;
    display: inline-block;
    font-style: normal !important;
    font-weight: normal !important;
    font-variant: normal !important;
    text-transform: none !important;
    position: relative;
    line-height: 1.2;
}

.col .live-search-results,
.header-block .live-search-results,
.header .search-form .live-search-results {
    text-align: left;
    color: #111;
    top: 105%;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
    left: 0;
    right: 0;
    background-color: rgba(255, 255, 255, 0.95);
    position: absolute;
}

.z-top {
    z-index: 9995;
}

.text-left {
    text-align: left;
}

.header-block .autocomplete-suggestions,
.header .search-form .autocomplete-suggestions {
    max-height: 80vh;
}

.searchform-wrapper .autocomplete-suggestions {
    overflow-y: scroll;
    -webkit-overflow-scrolling: touch;
    max-height: 50vh;
    overflow-y: auto;
}

.full-width .ubermenu-nav,
.container,
.row {
    max-width: 1230px;
}

.container-width,
.full-width .ubermenu-nav,
.container,
.row {
    max-width: 1080px;
}

.container {
    padding-left: 15px;
    padding-right: 15px;
}

body,
.container,
.full-width .ubermenu-nav,
.container-width,
.row {
    width: 100%;
    margin-left: auto;
    margin-right: auto;
}

.top-divider {
    margin-bottom: -1px;
    border-top: 1px solid currentColor;
    opacity: 0.1;
}

.full-width,
.expand {
    width: 100% !important;
    max-width: 100% !important;
    padding-left: 0 !important;
    padding-right: 0 !important;
    display: block;
}

.fill {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    right: 0;
    bottom: 0;
    padding: 0 !important;
    margin: 0 !important;
}

body.framed,
body.framed header,
body.framed .header-wrapper,
body.boxed,
body.boxed header,
body.boxed .header-wrapper,
body.boxed .is-sticky-section {
    max-width: 1170px
}

@media screen and (min-width: 850px) {
    body.framed {
        margin: 30px auto
    }
}

.flex-row {
    -js-display: flex;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-flow: row nowrap;
    flex-flow: row nowrap;
    -ms-flex-align: center;
    align-items: center;
    -ms-flex-pack: justify;
    justify-content: space-between;
    width: 100%
}

.flex-row-col {
    -js-display: flex;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-direction: column;
    flex-direction: column;
    -ms-flex-pack: start;
    justify-content: flex-start
}

.text-center .flex-row {
    -ms-flex-pack: center;
    justify-content: center
}

.header .flex-row {
    height: 100%
}

.flex-col {
    max-height: 100%
}

.flex-grow {
    -ms-flex: 1;
    flex: 1;
    -ms-flex-negative: 1;
    -ms-flex-preferred-size: auto !important
}

.flex-center {
    margin: 0 auto
}

.flex-left {
    margin-right: auto
}

.flex-right {
    margin-left: auto
}

.flex-wrap {
    -ms-flex-wrap: wrap;
    flex-wrap: wrap
}

.flex-has-center>.nav-row>.flex-col:not(.flex-center),
.flex-has-center>.flex-row>.flex-col:not(.flex-center),
.flex-has-center>.flex-col:not(.flex-center) {
    -ms-flex: 1;
    flex: 1
}

@media (max-width: 849px) {
    .medium-flex-wrap {
        -ms-flex-flow: column wrap;
        flex-flow: column wrap
    }

    .medium-flex-wrap .flex-col {
        padding-top: 5px;
        padding-bottom: 5px;
        -ms-flex-positive: 0;
        flex-grow: 0;
        width: 100%
    }
}

@media (max-width: 549px) {
    .small-flex-wrap {
        -ms-flex-flow: column wrap;
        flex-flow: column wrap
    }

    .small-flex-wrap .flex-col {
        -ms-flex-positive: 0;
        flex-grow: 0;
        width: 100%
    }
}

@media (min-width: 850px) {

    .col2-set,
    .u-columns {
        -js-display: flex;
        display: -ms-flexbox;
        display: flex
    }

    .col2-set>div+div,
    .u-columns>div+div {
        padding-left: 30px
    }
}

.row-grid .box .image-cover {
    padding: 0;
    height: 100%
}

.grid-col>.col-inner {
    height: 100%
}

.grid-col .slider:not(.flickity-enabled),
.grid-col>.col-inner>.img,
.grid-col>.col-inner>.img div,
.grid-col>.col-inner>.img .img-inner>img,
.grid-col .slider>.img,
.grid-col .flickity-slider>.img,
.grid-col .col-inner>.img,
.grid-col .slider-wrapper,
.grid-col .slider,
.grid-col .banner,
.grid-col .box,
.grid-col .box-image,
.grid-col .box-image img,
.grid-col .image-cover,
.grid-col .image-cover img {
    object-fit: cover;
    width: 100%;
    position: absolute !important;
    top: 0;
    bottom: 0;
    height: 100%;
    padding: 0 !important
}

.grid-col .box-image img {
    font-family: 'object-fit: cover;'
}

.grid-col .flickity-viewport {
    height: 100% !important
}

.grid-col .box:not(.box-shade):not(.box-overlay):not(.box-badge) .box-text {
    background-color: rgba(255, 255, 255, 0.95);
    position: absolute;
    bottom: 0;
    padding-left: 1.5em;
    padding-right: 1.5em
}

@media all and (-ms-high-contrast: none) {
    .payment-icon svg {
        max-width: 50px
    }

    .slider-nav-circle .flickity-prev-next-button svg {
        height: 36px !important
    }

    .nav>li>a>i {
        top: -1px
    }
}

.row,
.gallery {
    width: 100%;
    -js-display: flex;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-flow: row wrap;
    flex-flow: row wrap
}

.row>div:not(.col):not([class^="col-"]) {
    width: 100% !important
}

.row.row-masonry,
.row.row-grid {
    display: block
}

.row.row-masonry>.col,
.row.row-grid>.col {
    float: left
}

.row .gallery,
.row .row:not(.row-collapse),
.container .row:not(.row-collapse),
.lightbox-content .row:not(.row-collapse) {
    padding-left: 0;
    padding-right: 0;
    margin-left: -15px;
    margin-right: -15px;
    width: auto
}

.row .container {
    padding-left: 0;
    padding-right: 0
}

.slider-wrapper+.row:not(.row-collapse),
.banner-grid-wrapper+.row:not(.row-collapse),
.banner+.row:not(.row-collapse),
.section+.row:not(.row-collapse) {
    margin-top: 30px
}

.row-full-width {
    max-width: 100% !important
}

.row-isotope {
    transition: height .3s
}

.row-reverse {
    -ms-flex-direction: row-reverse;
    flex-direction: row-reverse
}

@media screen and (max-width: 549px) {
    .small-row-reverse {
        -ms-flex-direction: column-reverse;
        flex-direction: column-reverse
    }
}

@media screen and (max-width: 849px) {
    .medium-row-reverse {
        -ms-flex-direction: row-reverse;
        flex-direction: row-reverse
    }
}

.row-collapse {
    padding: 0
}

.row-collapse>.flickity-viewport>.flickity-slider>.col,
.row-collapse>.col {
    padding: 0 !important
}

.row-collapse>.col .container {
    max-width: 100%
}

.row .row-small:not(.row-collapse),
.container .row-small:not(.row-collapse) {
    margin-left: -10px;
    margin-right: -10px;
    margin-bottom: 0
}

.row-small>.flickity-viewport>.flickity-slider>.col,
.row-small>.col {
    padding: 0 9.8px 19.6px;
    margin-bottom: 0
}

.row .row-xsmall:not(.row-collapse),
.container .row-xsmall:not(.row-collapse) {
    margin-left: -2px;
    margin-right: -2px;
    margin-bottom: 0
}

.row-xsmall>.flickity-viewport>.flickity-slider>.col,
.row-xsmall>.col {
    padding: 0 2px 3px;
    margin-bottom: 0
}

@media screen and (min-width: 850px) {
    .row-large {
        padding-left: 0;
        padding-right: 0
    }

    .row .row-large:not(.row-collapse),
    .container .row-large:not(.row-collapse) {
        margin-left: -30px;
        margin-right: -30px;
        margin-bottom: 0
    }

    .row-large>.flickity-viewport>.flickity-slider>.col,
    .row-large>.col {
        padding: 0 30px 30px;
        margin-bottom: 0
    }
}

.row-dashed,
.row-solid {
    overflow: hidden
}

.row-dashed .col,
.row-solid .col {
    position: relative;
    padding: 0
}

.row-dashed .col-inner,
.row-solid .col-inner {
    padding: 15px
}

.row-dashed .col:before,
.row-solid .col:before {
    position: absolute;
    content: " ";
    height: 100%;
    top: 0;
    left: -1px;
    border-left: 1px dashed #ddd
}

.row-dashed .col:after,
.row-solid .col:after {
    position: absolute;
    content: " ";
    width: 100%;
    height: 0;
    top: auto;
    left: 0;
    bottom: -1px;
    border-bottom: 1px dashed #ddd
}

.row-solid .col:before {
    border-left-style: solid
}

.row-solid .col:after {
    border-bottom-style: solid
}

.dark .row-solid .col:before,
.dark .row-solid .col:after,
.dark .row-dashed .col:before,
.dark .row-dashed .col:after {
    border-color: rgba(255, 255, 255, 0.2)
}

.block-html-after-header .row .col {
    padding-bottom: 0
}

.wpb-js-composer .row:before {
    display: block !important
}

.section {
    padding: 30px 0;
    position: relative;
    min-height: auto;
    width: 100%;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-flow: row;
    flex-flow: row;
    -ms-flex-align: center;
    align-items: center
}

.section.dark {
    background-color: #666
}

.section-bg {
    overflow: hidden
}

.section-bg,
.section-content {
    width: 100%
}

.section-content {
    z-index: 1
}

.has-parallax {
    overflow: hidden
}

.container .section,
.row .section {
    padding-left: 30px;
    padding-right: 30px
}

.is-sticky-section+.sticky-section-helper {
    min-height: 100vh !important;
    background-color: #000
}

.sticky-section-helper+div {
    position: relative;
    background-color: #FFF;
    box-shadow: 15px 15px 15px 15px rgba(0, 0, 0, 0.1)
}

.sticky-section {
    padding: 0 !important;
    height: 100% !important;
    height: 100vh !important;
    width: 100% !important;
    top: 0;
    left: 0;
    right: 0;
    margin: 0 auto;
    background-color: #fff;
    position: relative;
    overflow: hidden
}

.is-sticky-section {
    position: fixed !important
}

.nav-dropdown {
    position: absolute;
    min-width: 260px;
    max-height: 0;
    z-index: 9;
    padding: 20px 0 20px;
    opacity: 0;
    margin: 0;
    transition: opacity .25s;
    box-shadow: 1px 1px 15px rgba(0, 0, 0, 0.15);
    border: 2px solid #ddd;
    color: #777;
    background-color: #fff;
    text-align: left;
    display: table;
    left: -99999px
}

.dark.nav-dropdown {
    color: #f1f1f1
}

.nav-dropdown:after {
    visibility: hidden;
    display: block;
    content: "";
    clear: both;
    height: 0
}

.nav-dropdown li {
    display: block;
    margin: 0;
    vertical-align: top
}

.nav-dropdown li ul {
    margin: 0;
    padding: 0
}

.nav-dropdown>li.html {
    min-width: 260px
}

li.current-dropdown>.nav-dropdown,
.next-prev-thumbs li.has-dropdown:hover>.nav-dropdown,
.no-js li.has-dropdown:hover>.nav-dropdown {
    opacity: 1;
    max-height: inherit;
    left: -15px
}

.nav-right li.current-dropdown:last-child>.nav-dropdown,
.nav-right li.has-dropdown:hover:last-child>.nav-dropdown {
    left: auto;
    right: -15px
}

.nav-column li>a,
.nav-dropdown>li>a {
    width: auto;
    display: block;
    padding: 10px 20px;
    line-height: 1.3
}

.nav-column>li:last-child:not(.nav-dropdown-col)>a,
.nav-dropdown>li:last-child:not(.nav-dropdown-col)>a {
    border-bottom: 0 !important
}

.dropdown-uppercase.nav-dropdown .nav-column>li>a,
.nav-dropdown.dropdown-uppercase>li>a {
    text-transform: uppercase;
    font-size: .85em
}

.nav-dropdown>li.nav-dropdown-col,
.nav-dropdown>li.image-column {
    text-align: left;
    display: table-cell;
    white-space: nowrap;
    width: 160px;
    min-width: 160px;
    border-right: 1px solid transparent
}

.nav-dropdown .menu-item-has-children>a,
.nav-dropdown .title>a,
.nav-dropdown .nav-dropdown-col>a {
    text-transform: uppercase;
    font-size: .8em;
    font-weight: bolder;
    color: #000
}

.nav-dropdown .nav-dropdown-col .menu-item-has-children {
    margin-top: 5px
}

.nav-dropdown li.image-column {
    margin: 0 !important;
    padding: 0 !important;
    border: 0 !important
}

.nav-dropdown li.image-column>a {
    line-height: 0 !important;
    font-size: 0 !important;
    padding: 0 !important;
    margin-left: 0 !important;
    margin-right: 0 !important;
    margin-top: -20px !important;
    margin-bottom: -20px !important
}

.nav-dropdown li.image-column>a img {
    margin: 0;
    display: block;
    width: 100%
}

.nav-dropdown li.image-column>a:hover {
    opacity: .8
}

.nav-dropdown-default li.image-column:first-child>a {
    margin-left: -20px !important;
    margin-right: 20px !important
}

.nav-dropdown-default li.image-column:last-child>a {
    margin-right: -20px !important
}

.nav-dropdown.nav-dropdown-bold>li.nav-dropdown-col,
.nav-dropdown.nav-dropdown-simple>li.nav-dropdown-col {
    border-color: #f1f1f1
}

.nav-dropdown-default .nav-column li>a,
.nav-dropdown.nav-dropdown-default>li>a {
    padding-left: 0;
    padding-right: 0;
    margin: 0 10px;
    border-bottom: 1px solid #ececec
}

.nav-dropdown-default {
    padding: 20px
}

.nav-dropdown-bold .nav-column li>a,
.nav-dropdown.nav-dropdown-bold>li>a {
    margin: 0 10px;
    padding-left: 10px;
    border-radius: 10px;
    padding-right: 5px
}

.nav-dropdown-bold .nav-column li>a:hover,
.nav-dropdown.nav-dropdown-bold>li>a:hover,
.nav-dropdown-bold.dark .nav-column li>a:hover,
.nav-dropdown.nav-dropdown-bold.dark>li>a:hover {
    color: #fff !important;
    background-color: #446084
}

.nav-dropdown-simple .nav-column li>a:hover,
.nav-dropdown.nav-dropdown-simple>li>a:hover {
    background-color: rgba(0, 0, 0, 0.03)
}

.nav-dropdown.nav-dropdown-simple li.html,
.nav-dropdown.nav-dropdown-bold li.html {
    padding: 0 20px 10px
}

li.current-dropdown>.nav-dropdown-full,
li.has-dropdown:hover>.nav-dropdown-full {
    position: fixed;
    margin-left: 0 !important;
    margin-right: 0 !important;
    left: 50% !important;
    transition: opacity 0.3s !important;
    -ms-transform: translateX(-50%);
    transform: translateX(-50%);
    right: auto;
    width: 100%;
    max-width: 1150px !important;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap
}

.nav-dropdown-full>li.nav-dropdown-col {
    white-space: normal
}

.nav-dropdown-has-arrow li.has-dropdown:after,
.nav-dropdown-has-arrow li.has-dropdown:before {
    bottom: -2px;
    z-index: 10;
    opacity: 0;
    left: 50%;
    border: solid transparent;
    content: '';
    height: 0;
    width: 0;
    position: absolute;
    pointer-events: none
}

.nav-dropdown-has-arrow li.has-dropdown:after {
    border-color: rgba(221, 221, 221, 0);
    border-bottom-color: #fff;
    border-width: 8px;
    margin-left: -8px
}

.nav-dropdown-has-arrow li.has-dropdown:before {
    z-index: -999;
    border-bottom-color: #ddd;
    border-width: 11px;
    margin-left: -11px
}

.nav-dropdown-has-arrow li.current-dropdown.has-dropdown:before,
.nav-dropdown-has-arrow li.current-dropdown.has-dropdown:after {
    transition: opacity .25s;
    opacity: 1
}

.label-new.menu-item>a:after,
.label-hot.menu-item>a:after,
.label-sale.menu-item>a:after,
.label-popular.menu-item>a:after {
    content: '';
    display: inline-block;
    font-size: 9px;
    line-height: 9px;
    text-transform: uppercase;
    letter-spacing: -0.1px;
    margin-left: 4px;
    background-color: #000;
    font-weight: bolder;
    border-radius: 2px;
    color: #fff;
    padding: 2px 3px 3px;
    position: relative;
    top: -2px
}

.label-new.menu-item>a:after {
    background-color: #446084
}

.label-sale.menu-item>a:after {
    background-color: #d26e4b
}

.label-popular.menu-item>a:after {
    background-color: #7a9c59
}

.label-hot.menu-item>a:after {
    background-color: #b20000
}

.nav p {
    margin: 0;
    padding-bottom: 0
}

.nav,
.nav ul:not(.nav-dropdown) {
    margin: 0;
    padding: 0
}

.nav>li>a.button,
.nav>li>button {
    margin-bottom: 0
}

.nav {
    width: 100%;
    position: relative;
    display: inline-block;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-flow: row wrap;
    flex-flow: row wrap;
    -ms-flex-align: center;
    align-items: center
}

.nav>li {
    display: inline-block;
    list-style: none;
    margin: 0;
    padding: 0;
    position: relative;
    margin: 0 7px;
    transition: background-color .3s
}

.nav>li>a {
    padding: 10px 0;
    display: inline-block;
    display: -ms-inline-flexbox;
    display: inline-flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    -ms-flex-align: center;
    align-items: center
}

.html .nav>li>a {
    padding-top: 0;
    padding-bottom: 0
}

.nav-small .nav>li>a,
.nav.nav-small>li>a {
    vertical-align: top;
    padding-top: 5px;
    padding-bottom: 5px;
    font-weight: normal
}

.nav-small.nav>li.html {
    font-size: .75em
}

.nav-center {
    -ms-flex-pack: center;
    justify-content: center
}

.nav-fill {
    -ms-flex-pack: justify;
    justify-content: space-between
}

.nav-left {
    -ms-flex-pack: start;
    justify-content: flex-start
}

.dropdown-menu {
    list-style: none;
}

li {
    list-style: none;
}

.nav-right {
    -ms-flex-pack: end;
    justify-content: flex-end
}

@media (max-width: 849px) {
    .medium-nav-center {
        -ms-flex-pack: center;
        justify-content: center
    }
}

@media (max-width: 549px) {
    .small-nav-center {
        -ms-flex-pack: center;
        justify-content: center
    }
}

.nav>li>a,
.nav-dropdown>li>a,
.nav-column>li>a {
    color: rgba(102, 102, 102, 0.85);
    transition: all .2s
}

.nav-dropdown>li>a,
.nav-column>li>a {
    display: block
}

.nav>li>a:hover,
.nav>li.active>a,
.nav>li.current>a,
.nav>li>a.active,
.nav>li>a.current,
.nav-dropdown li.active>a,
.nav-column li.active>a,
.nav-dropdown>li>a:hover,
.nav-column li>a:hover {
    color: rgba(17, 17, 17, 0.85)
}

.nav li:first-child {
    margin-left: 0 !important
}

.nav li:last-child {
    margin-right: 0 !important
}

.nav-uppercase>li>a {
    letter-spacing: .02em;
    text-transform: uppercase;
    font-weight: bolder
}

.nav-thin>li>a {
    font-weight: thin !important
}

@media (min-width: 850px) {
    .nav-divided>li {
        margin: 0 .7em
    }

    .nav-divided>li+li>a:after {
        content: "";
        position: absolute;
        top: 50%;
        width: 1px;
        border-left: 1px solid rgba(0, 0, 0, 0.1);
        height: 15px;
        margin-top: -7px;
        left: -1em
    }

    .nav-divided>li+li.icon-top>a:after {
        height: 50px;
        margin-top: -25px
    }
}

li.html .row,
li.html form,
li.html select,
li.html input {
    margin: 0
}

li.html>.button {
    margin-bottom: 0
}

li.hide-title>a {
    display: none !important
}

.nav-pagination>li>span,
.nav-pagination>li>a {
    font-size: 1.1em;
    display: block;
    height: 2.25em;
    line-height: 2em;
    text-align: center;
    width: auto;
    min-width: 2.25em;
    padding: 0 7px;
    font-weight: bolder;
    border-radius: 99px;
    border: 2px solid currentColor;
    transition: all .3s;
    vertical-align: top
}

.nav-pagination>li i {
    font-size: 1.2em;
    vertical-align: middle;
    top: -1px
}

.nav-pagination>li>.current,
.nav-pagination>li>span:hover,
.nav-pagination>li>a:hover {
    border-color: #446084;
    background-color: #446084;
    color: #FFF
}

.nav-line-bottom>li>a:before,
.nav-line-grow>li>a:before,
.nav-line>li>a:before {
    content: " ";
    position: absolute;
    top: 0;
    left: 50%;
    -ms-transform: translateX(-50%);
    transform: translateX(-50%);
    width: 100%;
    background-color: #446084;
    transition: all 0.3s;
    opacity: 0;
    height: 3px
}

.nav-line-bottom>li:hover>a:before,
.nav-line-grow>li:hover>a:before,
.nav-line-bottom>li.active>a:before,
.nav-line-grow>li.active>a:before,
.nav-line>li.active>a:before,
.nav-line>li:hover>a:before {
    opacity: 1
}

.nav:hover>li:not(:hover)>a:before {
    opacity: 0
}

.tabbed-content .nav-line-bottom:before {
    top: auto;
    bottom: 0
}

.nav-line-grow>li>a:before {
    width: 0%
}

.nav-line-grow>li.active>a:before,
.nav-line-grow>li:hover>a:before {
    width: 100%
}

.nav-line-bottom>li:before,
.nav-line-bottom>li:after {
    display: none
}

.nav-line-bottom>li>a:before {
    top: auto;
    bottom: 0
}

.nav-box>li.active>a,
.nav-pills>li.active>a {
    opacity: 1;
    color: #fff;
    background-color: #446084
}

.nav-tabs>li.active>a {
    background-color: #fff
}

.nav-dark .nav.nav-tabs>li.active>a {
    color: #000
}

.nav-outline>li.active>a {
    color: #446084;
    border-color: currentColor
}

.tabbed-content {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-flow: row wrap;
    flex-flow: row wrap
}

.tabbed-content .nav,
.tabbed-content .tab-panels {
    width: 100%
}

.tab-panels {
    padding-top: 1em
}

.tab-panels .entry-content {
    padding: 0
}

.tab-panels .panel:not(.active) {
    zoom: 1;
    float: "left";
    visibility: hidden;
    height: 0;
    padding: 0;
    display: block;
    overflow: hidden;
    opacity: .0
}

.tab-panels .panel.active {
    display: block !important
}

.nav-box>li,
.nav-tabs>li,
.nav-outline>li,
.nav-pills>li {
    margin: 0
}

.nav-box>li>a {
    padding: 0 .75em;
    line-height: 2.5em
}

.nav-pills>li>a {
    padding: 0 .75em;
    border-radius: 99px;
    line-height: 2.5em
}

.nav-tabs>li>a {
    border-top: 2px solid #ddd;
    border-left: 1px solid #ddd;
    border-right: 1px solid #ddd;
    background-color: rgba(0, 0, 0, 0.04);
    padding-left: 15px;
    padding-right: 15px
}

.nav-tabs>li.active>a {
    border-top-color: #446084
}

.nav-dark .nav-tabs>li:not(.active)>a {
    background-color: rgba(255, 255, 255, 0.1);
    border-color: transparent
}

.tabbed-content .nav-tabs>li {
    margin: 0 .1em;
    margin-bottom: -1px
}

.nav-tabs+.tab-panels {
    border: 1px solid #ddd;
    background-color: #fff;
    padding: 30px
}

.nav-outline>li>a {
    line-height: 2.4em;
    padding: 0 .75em;
    position: relative;
    z-index: 10;
    border: 2px solid transparent;
    border-radius: 32px
}

@media (min-width: 850px) {
    .tabbed-content .nav-vertical {
        padding-top: 0;
        width: 25%
    }

    .nav-vertical+.tab-panels {
        margin-top: 0 !important;
        border-left: 1px solid #ddd;
        padding: 0 30px 30px;
        -ms-flex: 1;
        flex: 1
    }

    .tabbed-content .nav-vertical.nav-outline {
        padding-right: 15px
    }
}

@media (max-width: 549px) {
    .small-nav-collapse>li {
        width: 100%;
        margin: 0 !important
    }

    .small-nav-collapse>li a {
        width: 100%;
        display: block
    }
}

@media (max-width: 549px) {
    .small-nav-touch {
        -webkit-overflow-scrolling: touch;
        overflow-x: auto;
        overflow-y: hidden;
        white-space: nowrap;
        -ms-flex-flow: nowrap;
        flex-flow: nowrap
    }

    .small-nav-touch>li {
        display: inline-block
    }
}

.toggle {
    height: auto;
    width: 45px;
    line-height: 1;
    box-shadow: none !important;
    padding: 0;
    color: currentColor;
    opacity: .6;
    margin: 0 5px 0 0
}

.toggle i {
    font-size: 1.8em;
    transition: all .3s
}

.toggle:focus {
    color: currentColor
}

.toggle:hover {
    cursor: pointer;
    opacity: 1
}

.active>.toggle {
    -ms-transform: rotate(-180deg);
    transform: rotate(-180deg)
}

.active>ul.children {
    display: block !important
}

.active>ul.sub-menu {
    display: block !important
}

.widget .toggle {
    width: 1em;
    min-height: 1em;
    margin: 0 0 0 5px
}

.widget .toggle i {
    top: 1px;
    font-size: 1.2em
}

.nav.nav-vertical {
    -ms-flex-flow: column;
    flex-flow: column
}

.nav-vertical li {
    list-style: none;
    margin: 0;
    width: 100%
}

.nav-vertical li li {
    font-size: 1em;
    padding-left: .5em
}

.nav-vertical .image-column {
    display: none
}

.nav-vertical>li {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-flow: row wrap;
    flex-flow: row wrap;
    -ms-flex-align: center;
    align-items: center
}

.nav-vertical>li ul {
    width: 100%
}

.nav-vertical li li.menu-item-has-children {
    margin-bottom: 1em
}

.nav-vertical>li>ul>li a,
.nav-vertical>li>a {
    display: block;
    width: auto;
    -ms-flex-positive: 1;
    flex-grow: 1
}

.nav-vertical li li.menu-item-has-children>a {
    color: #000;
    text-transform: uppercase;
    font-size: .8em;
    font-weight: bolder
}

.nav-vertical>li.html {
    padding-top: 1em;
    padding-bottom: 1em
}

.nav-vertical>li>ul li a {
    transition: color .2s;
    color: #666
}

.nav-vertical>li>ul li a:hover {
    opacity: 1;
    color: #111
}

.nav-vertical>li>ul {
    margin: 0 0 2em;
    padding-left: 1em
}

.nav .children {
    position: fixed;
    opacity: 0;
    left: -99999px;
    transition: background-color 0.6s, transform 0.3s, opacity 0.3s;
    -ms-transform: translateX(-10px);
    transform: translateX(-10px)
}

.nav .active>.children {
    position: inherit;
    opacity: 1;
    left: auto;
    padding-bottom: 30px;
    -ms-transform: translateX(0);
    transform: translateX(0)
}

.nav-sidebar.nav-vertical>li.menu-item.active,
.nav-sidebar.nav-vertical>li.menu-item:hover {
    background-color: rgba(0, 0, 0, 0.05)
}

.nav-sidebar.nav-vertical>li+li {
    border-top: 1px solid #ececec
}

.dark .nav-sidebar.nav-vertical>li+li {
    border-color: rgba(255, 255, 255, 0.2)
}

.nav-vertical>li+li {
    border-top: 1px solid #ececec
}

.nav-vertical.nav-line>li>a:before {
    right: -2px;
    z-index: 1;
    left: auto;
    width: 3px;
    height: 100%
}

.nav-vertical.nav-tabs>li>a {
    border: 0
}

.nav-vertical.nav-tabs>li.active>a {
    border-left: 3px solid #446084
}

.text-center .toggle {
    margin-left: -35px
}

.text-center .nav-vertical li {
    border: 0
}

.text-center.nav-vertical li li,
.text-center .nav-vertical li li {
    padding-left: 0
}

@media screen and (max-width: 549px) {
    .small-nav-vertical {
        -ms-flex-flow: column;
        flex-flow: column;
        margin-bottom: 20px
    }

    .small-nav-vertical>li {
        list-style: none;
        margin: 0 !important;
        width: 100%;
        border-bottom: 1px solid #ececec
    }
}

.nav-vertical .mega-menu-item {
    width: 100%
}

.nav-vertical .social-icons,
.nav-vertical .header-button {
    display: block;
    width: 100%
}

@media screen and (min-width: 849px) {
    .col-divided>.col-inner>.nav-wrapper>.nav-vertical {
        width: calc(100% + 31px)
    }
}

.badge-container {
    margin: 30px 0 0 0
}

.badge {
    display: table;
    z-index: 20;
    pointer-events: none;
    height: 2.8em;
    width: 2.8em;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden
}

.badge.top {
    left: 0
}

.badge-inner {
    display: table-cell;
    vertical-align: middle;
    text-align: center;
    width: 100%;
    height: 100%;
    background-color: #446084;
    line-height: .85;
    color: #fff;
    font-weight: bolder;
    padding: 2px;
    white-space: nowrap;
    transition: background-color .3s, color .3s, border .3s
}

.badge-small {
    width: 2.3em;
    height: 2.3em
}

.badge-small .badge-inner {
    line-height: .7
}

.badge+.badge {
    opacity: .9;
    width: 2.5em;
    height: 2.5em
}

.badge+.badge+.badge {
    opacity: .8
}

.badge-frame .badge-inner,
.badge-outline .badge-inner {
    color: #446084;
    background-color: #fff;
    border: 2px solid currentColor
}

.has-hover:hover .badge-outline .badge-inner {
    border-color: #446084;
    background-color: #446084;
    color: #FFF
}

.badge-outline,
.badge-circle {
    margin-left: -.4em
}

.badge-circle-inside {
    margin-left: 1em
}

.badge-circle+.badge {
    margin-top: -.4em;
    margin-left: -.4em
}

.badge-circle-inside .badge-inner,
.badge-circle .badge-inner {
    border-radius: 999px
}

.badge-frame .badge-inner,
.widget .badge-outline .badge-inner {
    background-color: transparent
}

.badge-frame {
    height: 2em;
    margin-left: -4px
}

.widget .badge {
    margin: 0 !important
}

.dark .widget .badge-outline .badge-inner {
    color: #fff;
    opacity: .7
}

.row-collapse .badge-circle {
    margin-left: 15px
}

.banner {
    position: relative;
    background-color: #446084;
    width: 100%;
    min-height: 30px
}

.banner-bg {
    overflow: hidden
}

.banner-layers {
    max-height: 100%;
    height: 100%;
    position: relative
}

@media (max-width: 549px) {
    .banner-layers {
        overflow: auto;
        -webkit-overflow-scrolling: touch
    }
}

.banner-layers>* {
    position: absolute !important
}

.dark .banner a {
    color: #fff
}

.video-bg {
    object-fit: cover;
    object-position: 50% 50%;
    font-family: 'object-fit: cover; object-position: center center;';
    position: absolute;
    width: 100%;
    height: 100%
}

@media (min-width: 549px) {
    .has-video .bg {
        display: none
    }
}

.box {
    width: 100%;
    position: relative;
    margin: 0 auto
}

.box>a {
    width: 100%;
    display: block
}

.box a {
    display: inline-block
}

.box,
.box-image,
.box-text {
    transition: opacity 0.3s, transform 0.3s, background-color 0.3s
}

.box-image>a,
.box-image>div>a {
    display: block
}

.box-text {
    padding-top: .7em;
    padding-bottom: 1.4em;
    position: relative;
    width: 100%;
    font-size: .9em
}

.has-shadow .box-text {
    padding-left: 1.2em;
    padding-right: 1.2em
}

@media (max-width: 549px) {
    .box-text {
        font-size: 85%
    }
}

.box-image {
    position: relative;
    height: auto;
    margin: 0 auto;
    overflow: hidden
}

.box-overlay .box-image {
    -webkit-mask-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAIAAACQd1PeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAA5JREFUeNpiYGBgAAgwAAAEAAGbA+oJAAAAAElFTkSuQmCC)
}

.box-image-inner {
    position: relative;
    overflow: hidden;
    z-index: 0
}

.box-text.text-center {
    padding-left: 10px;
    padding-right: 10px
}

.box-image img {
    max-width: 100%;
    width: 100%;
    transform: translateZ(0);
    margin: 0 auto
}

.box-label {
    overflow: hidden
}

.box-label .box-text.text-center {
    -ms-transform: translateX(-50%);
    transform: translateX(-50%);
    left: 50%;
    margin: 10% 0
}

.box-label .box-text.text-right {
    right: 0;
    left: auto
}

.box-label .box-text {
    position: absolute;
    bottom: 0;
    width: auto;
    padding: 0;
    margin: 10%;
    padding: .5em 1.5em .55em;
    background-color: #FFF;
    opacity: .95;
    box-shadow: 1px 1px 3px 0 rgba(0, 0, 0, 0.1)
}

.box-label:hover .box-text {
    opacity: 1
}

.box-badge {
    overflow: hidden
}

.box-badge .box-text {
    background-color: rgba(255, 255, 255, 0.95);
    padding: .8em 1em 1em;
    position: absolute;
    bottom: 15%;
    transition: background .3s;
    z-index: 1
}

.dark .box-badge .box-text {
    background-color: rgba(0, 0, 0, 0.95)
}

.box-badge:hover .box-text {
    background-color: #446084
}

.box-bounce .box-text {
    padding: 15px 15px 20px;
    z-index: 1
}

.box-bounce:hover .box-text {
    -ms-transform: translateY(-15px);
    transform: translateY(-15px);
    background-color: #fff
}

.dark .box-bounce:hover .box-text {
    background-color: #222
}

.box-bounce:hover .box-image {
    -ms-transform: translateY(-5px);
    transform: translateY(-5px)
}

.box-push .box-text {
    padding: 15px 20px;
    background-color: rgba(255, 255, 255, 0.95);
    max-width: 85%;
    margin: -15% auto 0
}

.box-overlay .box-text,
.box-shade .box-text {
    position: absolute;
    width: 100%;
    max-height: 100%;
    bottom: 0;
    padding-left: 1.5em;
    padding-right: 1.5em
}

.box-overlay.dark .box-text,
.box-shade.dark .box-text {
    text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.5)
}

.box-none .box-text {
    display: none !important
}

.has-post-icon:hover .box-shade .box-text,
.has-post-icon:hover .box-overlay .box-text {
    opacity: 0 !important
}

.box-text-middle.box-overlay .box-text,
.box-text-middle.box-shade .box-text {
    position: absolute;
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
    top: 50%;
    bottom: auto !important;
    z-index: 16;
    left: 0;
    right: 0
}

.box-vertical .box-text-middle .box-text {
    position: relative;
    top: auto;
    bottom: auto;
    -ms-transform: translateY(0);
    transform: translateY(0)
}

.has-box-vertical .col {
    width: 100% !important;
    max-width: 100% !important
}

@media screen and (max-width: 549px) {
    .box-vertical .box-image {
        width: 100% !important
    }
}

@media screen and (min-width: 550px) {
    .box-list-view .col {
        -ms-flex-preferred-size: 100% !important;
        flex-basis: 100% !important;
        max-width: 100% !important
    }

    .box-list-view .box,
    .box-vertical {
        display: table;
        width: 100%
    }

    .box-list-view .box .image-right,
    .box-vertical .image-right {
        direction: rtl
    }

    .box-list-view .box .box-image,
    .box-list-view .box .box-text,
    .box-vertical .box-image,
    .box-vertical .box-text {
        direction: ltr;
        display: table-cell;
        vertical-align: middle
    }

    .box-list-view .box .box-text,
    .box-vertical .box-text {
        padding-left: 1.5em;
        padding-right: 1.5em
    }

    .box-list-view .box .box-image,
    .box-vertical .box-image {
        width: 50%
    }

    .box-list-view .box.align-top .box-text,
    .box-vertical.align-top .box-text {
        vertical-align: top
    }
}

.button,
button,
input[type='submit'],
input[type='reset'],
input[type='button'] {
    position: relative;
    display: inline-block;
    background-color: transparent;
    text-transform: uppercase;
    font-size: .97em;
    letter-spacing: .03em;
    -ms-touch-action: none;
    touch-action: none;
    cursor: pointer;
    font-weight: bolder;
    text-align: center;
    color: currentColor;
    text-decoration: none;
    border: 1px solid transparent;
    vertical-align: middle;
    border-radius: 0;
    margin-top: 0;
    margin-right: 1em;
    text-shadow: none;
    line-height: 2.4em;
    min-height: 2.5em;
    padding: 0 1.2em;
    max-width: 100%;
    transition: transform .3s, border .3s, background .3s, box-shadow .3s, opacity .3s, color .3s;
    text-rendering: optimizeLegibility;
    box-sizing: border-box
}

.button span {
    display: inline-block;
    line-height: 1.6
}

.button.is-outline {
    line-height: 2.19em
}

.nav>li>a.button:hover,
.nav>li>a.button {
    padding-top: 0;
    padding-bottom: 0
}

.nav>li>a.button:hover {
    color: #FFF
}

.button,
input[type='submit'],
input[type='submit'].button,
input[type='reset'].button,
input[type='button'].button {
    color: #fff;
    background-color: #446084;
    background-color: var(--primary-color);
    border-color: rgba(0, 0, 0, 0.05)
}

.button.is-outline,
input[type='submit'].is-outline,
input[type='reset'].is-outline,
input[type='button'].is-outline {
    border: 2px solid currentColor;
    background-color: transparent
}

.dark .button.is-form:hover,
.button:hover,
input[type='submit']:hover,
input[type='reset']:hover,
input[type='button']:hover {
    outline: none;
    opacity: 1;
    color: #fff;
    box-shadow: inset 0 0 0 100px rgba(0, 0, 0, 0.2)
}

.button.is-underline,
.button.is-link {
    background-color: transparent !important;
    border-color: transparent !important;
    padding-left: .15em;
    padding-right: .15em
}

.button.is-underline:before {
    content: "";
    height: 2px;
    background-color: currentColor;
    opacity: .3;
    transition: all .3s;
    position: absolute;
    bottom: 0;
    left: 20%;
    width: 60%
}

.button.is-underline:hover:before {
    left: 0%;
    width: 100%;
    opacity: 1
}

.is-link,
.is-underline {
    color: #666
}

.dark .button.is-underline:hover,
.dark .button.is-link:hover {
    color: #FFF;
    opacity: .8
}

.button.is-underline:hover,
.button.is-link:hover {
    color: #333;
    box-shadow: none
}

.is-form,
button.is-form,
input[type='submit'].is-form,
input[type='reset'].is-form,
input[type='button'].is-form {
    overflow: hidden;
    position: relative;
    background-color: #f9f9f9;
    text-shadow: 1px 1px 1px #fff;
    color: #666;
    border: 1px solid #ddd;
    text-transform: none;
    font-weight: normal
}

.button.is-form:hover {
    color: #000;
    background-color: #f1f1f1
}

.dark .button,
.dark input[type='submit'],
.dark input[type='reset'],
.dark input[type='button'] {
    color: #fff
}

.dark .button.is-form,
.dark input[type='submit'].is-form,
.dark input[type='reset'].is-form,
.dark input[type='button'].is-form {
    color: #000
}

.is-round {
    border-radius: 99px
}

.is-shade,
.is-bevel,
.is-gloss {
    overflow: hidden
}

.is-gloss:after,
.is-shade:after,
.is-bevel:after {
    content: "";
    position: absolute;
    top: 0;
    left: -25%;
    height: 100%;
    width: 150%;
    box-shadow: inset 0 1.2em 0 0 rgba(255, 255, 255, 0.1)
}

.is-shade:after {
    box-shadow: inset 1px 1px 0 0 rgba(255, 255, 255, 0.1), inset 0 2em 15px 0 rgba(255, 255, 255, 0.2)
}

.is-bevel:after {
    left: 0;
    width: 100%;
    box-shadow: inset -0.01em -0.1em 0 0 rgba(0, 0, 0, 0.15)
}

.is-outline {
    color: silver
}

.is-outline:hover {
    box-shadow: none !important
}

input[type='submit'],
input[type='submit'].button,
input[type='submit'],
.primary {
    background-color: #446084
}

.primary.is-underline,
.primary.is-link,
.primary.is-outline {
    color: #446084
}

.is-outline:hover,
.primary.is-outline:hover {
    color: #fff;
    background-color: #446084;
    border-color: #446084
}

.success {
    background-color: #7a9c59
}

.success.is-underline,
.success.is-link,
.success.is-outline {
    color: #7a9c59
}

.success.is-outline:hover {
    background-color: #7a9c59;
    border-color: #7a9c59;
    color: #fff
}

.white {
    background-color: #fff !important;
    color: #666 !important
}

.white.button.is-outline {
    background-color: transparent;
    color: currentColor !important
}

.white.is-underline,
.white.is-link,
.white.is-outline {
    color: #fff !important;
    background-color: transparent !important
}

.white.is-outline:hover {
    background-color: #fff !important;
    border-color: #fff;
    color: #666 !important
}

.secondary,
.checkout-button,
.button.checkout,
.button.alt {
    background-color: #d26e4b
}

.secondary.is-underline,
.secondary.is-link,
.secondary.is-outline {
    color: #d26e4b
}

.secondary.is-outline:hover {
    background-color: #d26e4b;
    border-color: #d26e4b;
    color: #fff
}

a.primary:not(.button),
a.secondary:not(.button) {
    background-color: transparent
}

.alert {
    background-color: #b20000
}

.alert.is-link,
.alert.is-outline {
    color: #b20000
}

.alert.is-outline:hover {
    background-color: #b20000;
    border-color: #b20000;
    color: #fff
}

.text-center .button:first-of-type {
    margin-left: 0 !important
}

.text-right .button:last-of-type,
.text-center .button:last-of-type {
    margin-right: 0 !important
}

.button.disabled,
button.disabled,
.button[disabled],
button[disabled] {
    opacity: .6
}

.header-buttons .button {
    margin-bottom: 0;
    margin-right: .65em
}

.header-button {
    display: inline-block
}

.header-button .is-outline:not(:hover) {
    color: #999
}


.nav-dark .header-button .is-outline:not(:hover) {
    color: #fff
}

.header-button .button {
    margin: 0
}

.scroll-for-more {
    margin-left: 0 !important
}

.scroll-for-more:not(:hover) {
    opacity: .7
}

.flex-col button,
.flex-col .button,
.flex-col input {
    margin-bottom: 0
}

.button br {
    display: none
}

code {
    padding: .2rem .5rem;
    margin: 0 .2rem;
    font-size: .9em;
    background: #F1F1F1;
    border: 1px solid #E1E1E1;
    border-radius: 4px
}

pre>code {
    display: block;
    padding: 1rem 1.5rem;
    white-space: pre
}

.dark code {
    border-color: #000;
    background-color: rgba(0, 0, 0, 0.5)
}

.is-divider {
    height: 3px;
    display: block;
    background-color: rgba(0, 0, 0, 0.1);
    margin: 1em 0 1em;
    width: 100%;
    max-width: 30px
}

.widget .is-divider {
    margin-top: .66em
}

.dark .is-divider {
    background-color: rgba(255, 255, 255, 0.3)
}

form {
    margin-bottom: 0
}

input[type='email'],
input[type='date'],
input[type='search'],
input[type='number'],
input[type='text'],
input[type='tel'],
input[type='url'],
input[type='password'],
textarea,
select,
.select-resize-ghost,
.select2-container .select2-choice,
.select2-container .select2-selection {
    box-sizing: border-box;
    border: 1px solid #ddd;
    padding: 0 .75em;
    height: 2.507em;
    font-size: .97em;
    border-radius: 0;
    max-width: 100%;
    width: 100%;
    vertical-align: middle;
    background-color: #fff;
    color: #333;
    box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1);
    transition: color .3s, border .3s, background .3s, opacity .3s
}

input[type='email'],
input[type='search'],
input[type='number'],
input[type='url'],
input[type='tel'],
input[type='text'],
textarea {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none
}

textarea {
    padding-top: 0.7em;
    min-height: 120px
}

input[type='email']:focus,
input[type='search']:focus,
input[type='number']:focus,
input[type='tel']:focus,
input[type='text']:focus,
input[type='password']:focus,
textarea:focus,
select:focus {
    box-shadow: 0 0 5px #ccc;
    opacity: 1 !important;
    outline: 0;
    color: #333;
    background-color: #fff
}

label,
legend {
    font-weight: bold;
    display: block;
    font-size: .9em;
    margin-bottom: 0.4em
}

legend {
    width: 100%;
    font-size: 1em;
    text-transform: uppercase;
    font-weight: bold;
    border-bottom: 1px solid #f1f1f1;
    padding-bottom: 10px;
    margin: 30px 0 15px
}

fieldset {
    border-width: 0;
    padding: 0
}

input[type='checkbox'],
input[type='radio'] {
    display: inline;
    margin-right: 10px;
    font-size: 16px
}

label>.label-body {
    display: inline-block;
    font-weight: normal;
    margin-left: .5em
}

abbr[title="required"] {
    color: #b20000
}

input[type='checkbox']+label,
input[type='radio']+label {
    display: inline
}

select,
.select-resize-ghost,
.select2-container .select2-choice,
.select2-container .select2-selection {
    box-shadow: inset 0 -1.4em 1em 0 rgba(0, 0, 0, 0.02);
    background-color: #fff;
    -webkit-appearance: none;
    -moz-appearance: none;
    background-image: url("data:image/svg+xml;charset=utf8, %3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%23333' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-chevron-down'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E");
    background-position: right .45em top 50%;
    background-repeat: no-repeat;
    padding-right: 1.4em;
    background-size: auto 16px;
    border-radius: 0;
    display: block
}

.select-resize-ghost {
    display: inline-block;
    width: auto;
    position: absolute;
    opacity: 0
}

select.resize-select {
    width: 55px
}

.select2-selection__arrow b {
    border-color: transparent !important
}

.select2-container .selection .select2-selection--multiple {
    padding: 10px;
    height: auto;
    max-height: 200px;
    background-image: none;
    line-height: 1.7em
}

.select2-container .selection .select2-selection--multiple .select2-selection__choice {
    padding: 5px
}

input:hover,
textarea:hover,
select:hover {
    box-shadow: inset 0 -1.8em 1em 0 rgba(0, 0, 0, 0)
}

@media screen and (-ms-high-contrast: active),
(-ms-high-contrast: none) {
    select::-ms-expand {
        display: none
    }

    select:focus::-ms-value {
        background: transparent;
        color: currentColor
    }
}

.form-flat input:not([type="submit"]),
.form-flat textarea,
.form-flat select {
    background-color: rgba(0, 0, 0, 0.03);
    box-shadow: none;
    border-color: rgba(0, 0, 0, 0.09);
    color: currentColor !important;
    border-radius: 99px
}

.form-flat button,
.form-flat input {
    border-radius: 99px
}

.form-flat textarea {
    border-radius: 15px
}

.form-flat .flex-row .flex-col,
.flex-row.form-flat .flex-col {
    padding-right: 4px
}

.dark .form-flat input:not([type="submit"]),
.dark .form-flat textarea,
.dark .form-flat select,
.nav-dark .form-flat input:not([type="submit"]),
.nav-dark .form-flat textarea,
.nav-dark .form-flat select {
    background-color: rgba(255, 255, 255, 0.2) !important;
    border-color: rgba(255, 255, 255, 0.09);
    color: #FFF
}

.dark .form-flat select option {
    color: #333
}

.nav-dark .form-flat select,
.dark .form-flat select {
    background-image: url("data:image/svg+xml;charset=utf8, %3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%23fff' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-chevron-down'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E")
}

.nav-dark .form-flat input::-webkit-input-placeholder,
.dark .form-flat input::-webkit-input-placeholder {
    color: #FFF
}

.form-flat .button.icon {
    color: currentColor !important;
    border-color: transparent !important;
    background-color: transparent !important;
    box-shadow: none
}

input.wpcf7-not-valid,
.woocommerce-invalid input {
    border-color: #b20000;
    color: #b20000
}

.woocommerce-invalid select {
    border-color: #b20000
}

.select2-container {
    text-align: left
}

.form-row .select2-container {
    margin-bottom: 1em
}

.select2-search__field {
    margin-bottom: 0
}

.select2-container--default .select2-selection--single .select2-selection__arrow {
    width: 30px
}

.select2-container .select2-choice>.select2-chosen,
.select2-container .select2-selection--single .select2-selection__rendered,
.select2-selection {
    padding: 0;
    line-height: 2.507em
}

.select2-container--default .select2-selection--single .select2-selection__arrow {
    height: 2.507em
}

.fl-wrap {
    position: relative
}

.loading-site .fl-labels label[for]:first-child {
    display: none
}

.fl-labels .fl-wrap label[for]:first-child {
    transition: all .3s;
    font-size: 12px;
    white-space: nowrap;
    position: absolute;
    line-height: 1;
    top: .5em;
    opacity: 0;
    pointer-events: none;
    left: 1.1em;
    font-weight: normal
}

.dark .fl-wrap label {
    color: #000
}

.fl-wrap.fl-is-active>label[for]:first-child {
    z-index: 1;
    opacity: .8
}

.fl-labels .form-row input:not([type="checkbox"]),
.fl-labels .form-row textarea,
.fl-labels .form-row select {
    height: 3.0084em;
    transition: padding .3s
}

.form-row .fl-is-active input,
.form-row .fl-is-active textarea {
    padding-top: 1.1em;
    padding-bottom: 0.5em
}

.form-row .fl-is-active select {
    padding-top: 1.1em;
    padding-bottom: 0.4em
}

.icon-box .icon-box-img {
    margin-bottom: 1em;
    max-width: 100%;
    position: relative
}

.slider>.icon-box,
.flickity-slider>.icon-box {
    padding-right: 3% !important;
    padding-left: 3% !important
}

.icon-box-img svg,
.icon-box-img img {
    padding-top: .2em;
    width: 100%
}

.icon-box-img svg {
    width: 100%;
    height: 100%;
    transition: all .3s;
    fill: currentColor
}

.icon-box-img svg path {
    fill: currentColor
}

.icon-box:hover .has-icon-bg svg path,
.icon-box:hover .has-icon-bg svg,
.icon-box:hover .has-icon-bg i {
    fill: #fff
}

.has-icon-bg .icon {
    padding-top: 100%;
    height: 0;
    overflow: hidden;
    position: relative
}

.has-icon-bg .icon .icon-inner {
    color: #446084;
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    border: 2px solid currentColor;
    border-radius: 100%;
    transition: all .3s
}

.icon-box:hover .has-icon-bg .icon .icon-inner {
    background-color: currentColor
}

.has-icon-bg .icon svg,
.has-icon-bg .icon i,
.has-icon-bg .icon img {
    position: absolute;
    left: 0;
    object-fit: cover;
    padding: 0;
    top: 50%;
    margin: 0;
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
    width: 60%;
    margin-left: 20%;
    margin-right: 20%
}

.icon-box-left .has-icon-bg .icon {
    position: absolute;
    width: 100%
}

.icon-box-left,
.icon-box-right {
    -js-display: flex;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-flow: row wrap;
    flex-flow: row wrap;
    width: 100%
}

.icon-box-left .icon-box-img,
.icon-box-right .icon-box-img {
    -ms-flex: 0 0 auto;
    flex: 0 0 auto;
    margin-bottom: 0;
    max-width: 200px
}

.icon-box-left .icon-box-text,
.icon-box-right .icon-box-text {
    -ms-flex: 1 1 0px;
    flex: 1 1 0px
}

.icon-box-right .icon-box-text {
    -ms-flex-order: -1;
    order: -1
}

.icon-box-left .icon-box-img+.icon-box-text {
    padding-left: 1em
}

.icon-box-right .icon-box-img+.icon-box-text {
    padding-right: 1em
}

.icon-box-center .icon-box-img {
    margin: 0 auto 1em
}

.lazy-icons i[class^="icon-"] {
    visibility: hidden
}

.links>li>a:before,
i[class^="icon-"],
i[class*=" icon-"] {
    font-family: 'fl-icons' !important;
    speak: none !important;
    margin: 0;
    padding: 0;
    display: inline-block;
    font-style: normal !important;
    font-weight: normal !important;
    font-variant: normal !important;
    text-transform: none !important;
    position: relative;
    line-height: 1.2
}

.widget-title i {
    opacity: .35;
    margin-right: 4px
}

button i,
.button i {
    vertical-align: middle;
    top: -1.5px
}

.button.open-video i {
    top: -.027em
}

a.remove,
a.icon-remove {
    display: block;
    width: 24px;
    height: 24px;
    font-size: 15px !important;
    line-height: 19px !important;
    border-radius: 100%;
    color: #ccc;
    font-weight: bold;
    text-align: center;
    border: 2px solid currentColor
}

button.icon:not(.button),
a.icon:not(.button) {
    font-family: sans-serif;
    margin-left: .25em;
    margin-right: .25em;
    font-size: 1.2em
}

.header a.icon:not(.button) {
    margin-left: .3em;
    margin-right: .3em
}

.header .nav-small a.icon:not(.button) {
    font-size: 1em
}

.button.icon {
    margin-left: .12em;
    margin-right: .12em;
    min-width: 2.5em;
    padding-left: .6em;
    padding-right: .6em;
    display: inline-block
}

.button.icon i {
    font-size: 1.2em
}

.button.icon i+span {
    padding-right: .5em
}

.button.icon.is-small {
    border-width: 1px
}

.button.icon.is-small i {
    top: -1px
}

.button.icon.circle {
    padding-left: 0;
    padding-right: 0
}

.button.icon.circle>span {
    margin: 0 8px
}

.button.icon.circle>span+i {
    margin-left: -4px
}

.button.icon.circle>i {
    margin: 0 8px
}

.button.icon.circle>i+span {
    margin-left: -4px
}

.button.icon.circle>i:only-child {
    margin: 0
}

.nav>li>a>i {
    vertical-align: middle;
    transition: color .3s;
    font-size: 20px
}

.nav>li>a>i+span {
    margin-left: 5px
}

.nav>li.has-icon-left>a>i {
    margin-right: 5px
}

.nav>li>a>span+i {
    margin-left: 5px
}

.nav-small>li>a>i {
    font-size: 1em
}

.nav>li>a>i.icon-search {
    font-size: 1.2em
}

.nav>li>a>i.icon-menu {
    font-size: 1.9em
}

.nav>li.has-icon>a>i {
    min-width: 1em
}

.nav-vertical>li>a>i {
    font-size: 16px;
    opacity: .6;
    top: -2px
}

.header-button a.icon:not(.button) {
    display: inline-block;
    padding: 6px 0
}

.header-button a.icon:not(.button) i {
    font-size: 24px
}

.header-button a.icon:not(.button) i.icon-search {
    font-size: 16px
}

.nav-small .header-button a.icon:not(.button) {
    padding: 3px 0
}

.nav p {
    margin: 0;
    padding-bottom: 0
}

.nav,
.nav ul:not(.nav-dropdown) {
    margin: 0;
    padding: 0
}

.nav>li>a.button,
.nav>li>button {
    margin-bottom: 0
}

.nav {
    width: 100%;
    position: relative;
    display: inline-block;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-flow: row wrap;
    flex-flow: row wrap;
    -ms-flex-align: center;
    align-items: center
}

.nav>li {
    display: inline-block;
    list-style: none;
    margin: 0;
    padding: 0;
    position: relative;
    margin: 0 7px;
    transition: background-color .3s
}

.nav>li>a {
    padding: 10px 0;
    display: inline-block;
    display: -ms-inline-flexbox;
    display: inline-flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    -ms-flex-align: center;
    align-items: center
}

.html .nav>li>a {
    padding-top: 0;
    padding-bottom: 0
}

.nav-small .nav>li>a,
.nav.nav-small>li>a {
    vertical-align: top;
    padding-top: 5px;
    padding-bottom: 5px;
    font-weight: normal
}

.nav-small.nav>li.html {
    font-size: .75em
}

.nav-center {
    -ms-flex-pack: center;
    justify-content: center
}

.nav-fill {
    -ms-flex-pack: justify;
    justify-content: space-between
}

.nav-left {
    -ms-flex-pack: start;
    justify-content: flex-start
}

.nav-right {
    -ms-flex-pack: end;
    justify-content: flex-end
}

@media (max-width: 849px) {
    .medium-nav-center {
        -ms-flex-pack: center;
        justify-content: center
    }
}

@media (max-width: 549px) {
    .small-nav-center {
        -ms-flex-pack: center;
        justify-content: center
    }
}

.nav>li>a,
.nav-dropdown>li>a,
.nav-column>li>a {
    color: rgba(102, 102, 102, 0.85);
    transition: all .2s
}

.nav-dropdown>li>a,
.nav-column>li>a {
    display: block
}

.nav>li>a:hover,
.nav>li.active>a,
.nav>li.current>a,
.nav>li>a.active,
.nav>li>a.current,
.nav-dropdown li.active>a,
.nav-column li.active>a,
.nav-dropdown>li>a:hover,
.nav-column li>a:hover {
    color: rgba(17, 17, 17, 0.85)
}

.nav li:first-child {
    margin-left: 0 !important
}

.nav li:last-child {
    margin-right: 0 !important
}

.nav-uppercase>li>a {
    letter-spacing: .02em;
    text-transform: uppercase;
    font-weight: bolder
}

.nav-thin>li>a {
    font-weight: thin !important
}

@media (min-width: 850px) {
    .nav-divided>li {
        margin: 0 .7em
    }

    .nav-divided>li+li>a:after {
        content: "";
        position: absolute;
        top: 50%;
        width: 1px;
        border-left: 1px solid rgba(0, 0, 0, 0.1);
        height: 15px;
        margin-top: -7px;
        left: -1em
    }

    .nav-divided>li+li.icon-top>a:after {
        height: 50px;
        margin-top: -25px
    }
}
</style>
