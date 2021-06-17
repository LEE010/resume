<template>
    <section id="about" class="resume_about">
        <h2 class="section_title">
            <span class="about_title">About.</span>
        </h2>
        <div class="about_wrap">
            <about-items :abouts="abouts"/>
        </div>
    </section>
</template>

<script>
import AboutItems from '@/components/AboutItems'

export default {
  name: 'About',
  components: {
    AboutItems
  }
}
</script>
