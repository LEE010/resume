<template>
    <header class="resume_header">
        <h1 class="page_title">
            <a href="/" class="page_logo">
                <span class="logo_txt">LDH's Web Portfolio.</span>
            </a>
        </h1>
        <nav class="page_nav">
            <ul class="nav_items">
                <li class="nav_item"><a href="#about" class="nav_link">About</a></li>
                <li class="nav_item"><a href="#exps" class="nav_link">Exps</a></li>
                <li class="nav_item"><a href="#contact" class="nav_link">Contact</a></li>
            </ul>
        </nav>
    </header>
</template>

<script>
export default {
  name: 'NavBar'
}
</script>

<style lang="scss" scoped>

    .resume_header {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        z-index: 100;
        background-color: #00334e;
        min-width: 1024px;
    }

    .page_title {
        display: inline-block;
    }

    .page_logo {
        display: inline-block;
        color: #f6f5f5;
        font-weight: bold;
        font-size: 20px;
        line-height: 25px;
        padding: 20px 40px;

        &:hover {
            color: #fff;
        }
    }

    .logo_txt {
        position: relative;
        display: inline-block;
        background-color: #00334e;
        padding: 0 3px;
    }

    .page_logo:hover .logo_txt:before,
    .page_logo:hover .logo_txt:after,
    .page_logo:focus .logo_txt:before,
    .page_logo:focus .logo_txt:after {
        background-color: #ee6f57;
    }

    .logo_txt:before,
    .logo_txt:after {
        position: absolute;
        content: '';
        width: 10px;
        height: 10px;
        z-index: -1;
    }

    .logo_txt:before {
        top: -3px;
        left: -3px;
    }

    .logo_txt:after {
        right: -3px;
        bottom: -3px;
    }

    .page_nav {
        position: absolute;
        top: 0;
        right: 0;
    }

    .nav_items:after {
        content: '';
        display: block;
        clear: both;
    }

    .nav_item {
        float: left;
    }

    .nav_link {
        display: inline-block;
        box-sizing: border-box;
        width: 150px;
        padding: 20px 40px;
        color: #f2f4f7;
        text-align: center;
        font-size: 18px;
        line-height: 25px;
    }

    .nav_link:after {
        display: block;
        content: '';
        height: 2px;
    }

    .nav_link:hover {
        color: #fff;
        font-weight: bold;
    }

    .nav_link:hover:after,
    .nav_link:focus:after {
        background-color: #ee6f57;
    }
</style>
