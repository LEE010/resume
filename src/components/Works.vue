<template>
    <section id="works" class="resume_works">
        <h2 class="section_title">
            <span class="work_title">Works.</span>
        </h2>
        <work-contents :works="works" />
    </section>
</template>

<script>
import WorkContents from '@/components/WorkContents'

export default {
  name: 'ResumeWorks',
  components: {
    WorkContents
  },
  props: {
    works: Array
  }
}
</script>
