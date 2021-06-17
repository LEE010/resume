<template>
    <resume-intro />
    <resume-about />
    <resume-exps :exps="exps"/>
    <resume-contact />
</template>

<script>
import { exps } from '@/data.json'
import ResumeIntro from '@/components/Intro'
import ResumeAbout from '@/components/About'
import ResumeExps from '@/components/Exps'
import ResumeContact from '@/components/Contact'

export default {
  name: 'Home',
  components: { ResumeIntro, ResumeAbout, ResumeExps, ResumeContact },
  data () {
    return {
      exps
    }
  }
}
</script>
