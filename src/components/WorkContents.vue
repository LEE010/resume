<template>
    <div class="work_wrap">
        <ul class="exps">
            <work-content v-for="(work, index) in works" :key="'work'+ index" :work="work"/>
        </ul>
    </div>
</template>

<script>
import WorkContent from '@/components/WorkContent'

export default {
  name: 'WorkContents',
  components: {
    WorkContent
  },
  props: {
    works: Array
  }
}
</script>
