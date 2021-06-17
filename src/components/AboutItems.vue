<template>
    <ul class="about_items">
        <li class="about_item" v-for="(about, index) in abouts" :key="index">
            <div class="about_thumb" :class="'icon_'+about.name">
                <span class="blind">{{about.name}}</span>
            </div>
            <div class="about_content">
                <strong class="about_head">{{ about.head }}</strong>
                <p class="about_body">{{ about.body }}</p>
            </div>
            <about-details :list="about.details"/>
        </li>
    </ul>
</template>

<script>
import { abouts } from '@/data.json'
import AboutDetails from '@/components/AboutDetails'

export default {
  name: 'AboutItems',
  components: {
    AboutDetails
  },
  data () {
    return {
      abouts
    }
  }
}
</script>
