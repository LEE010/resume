<template>
    <header class="resume_header">
        <h1 class="page_title">
            <router-link to="/" class="page_logo">
                <span class="logo_txt">신입 개발자 이동현의 이력서</span>
            </router-link>
        </h1>
        <nav class="page_nav">
            <ul class="nav_items">
                <li class="nav_item"><a href="#about" class="nav_link">About</a></li>
                <li class="nav_item"><a href="#works" class="nav_link">Works</a></li>
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
