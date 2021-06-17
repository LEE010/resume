<template>
    <section id="about" class="resume_about">
        <h2 class="section_title">
            <span class="about_title">About.</span>
        </h2>
        <div class="about_wrap">
            <h3 class="about_opening">
                개발자로서 <span class="about_point">지속적인 성장</span>을 위해 최선을 다합니다.
            </h3>
            <ul class="about_items">
                <li class="about_item" v-for="(about, index) in abouts" :key="index">
                    <div class="about_thumb">
                        <img :src="require('@/assets/icons/icon-' + about.icon + '.png')" :alt="about.icon" class="about_img" width="100" height="100">
                    </div>
                    <div class="about_content">
                        <strong class="about_head">{{ about.head }}</strong>
                        <p class="about_body">{{ about.body }}</p>
                    </div>
                </li>
            </ul>
            <div class="about_ending">
                이러한 역량을 바탕으로 치열하게 배우며 일할 <span class="about_point">준비가 되어있습니다</span>.
            </div>
        </div>
    </section>
</template>

<script>
export default {
  name: 'ResumeAbout',
  props: ['abouts']
}
</script>
