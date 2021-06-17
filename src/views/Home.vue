<template>
    <intro />
    <about :abouts="abouts" />
    <exps :exps="exps"/>
    <contact />
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
