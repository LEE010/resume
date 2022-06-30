<template>
    <resume-intro />
    <resume-about />
    <resume-works :works="works"/>
    <resume-exps :exps="exps"/>
    <resume-contact />
</template>

<script>
import { exps, works } from '@/data.json'
import ResumeIntro from '@/components/Intro'
import ResumeAbout from '@/components/About'
import ResumeWorks from '@/components/Works'
import ResumeExps from '@/components/Exps'
import ResumeContact from '@/components/Contact'

export default {
  name: 'Home',
  components: { ResumeIntro, ResumeAbout, ResumeWorks, ResumeExps, ResumeContact },
  data () {
    return {
      exps, works
    }
  }
}
</script>
