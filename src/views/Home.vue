<template>
    <Intro />
    <About :abouts="abouts" />
    <Exps :exps="exps"/>
    <Contact />
</template>

<script>
import { abouts, exps } from '@/data.json'
import Intro from '@/components/Intro'
import About from '@/components/About'
import Exps from '@/components/Exps'
import Contact from '@/components/Contact'

export default {
  name: 'Home',
  components: { Intro, About, Exps, Contact },
  data () {
    return {
      abouts,
      exps
    }
  }
}
</script>
