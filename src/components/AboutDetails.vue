<template>
    <ul class="about_details">
        <li class="about_detail" v-for="(item, index) in list" :key="index">
          {{item}}
        </li>
    </ul>
</template>

<script>
export default {
  name: 'AboutDetails',
  props: {
    list: Array
  }
}
</script>
