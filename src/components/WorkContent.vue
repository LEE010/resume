<template>
    <li class="exp">
        <div class="exp_date">
            <div class="date_start"><span class="date">{{work.start}}</span></div>
            <div class="date_end"><span class="date">{{work.end}}</span></div>
        </div>
        <div class="exp_info">
            <strong class="exp_head">{{ work.name }}</strong>
            <div class="exp_subhead">{{ work.subname }}</div>
            <p class="exp_detail">{{ work.content }}</p>
            <projects v-if="work.projects.length > 0" :projects="work.projects"/>
        </div>
    </li>
</template>

<script>
import Projects from '@/components/Projects'

export default {
  name: 'WorkContent',
  components: {
    Projects
  },
  props: {
    work: Object,
    projects: Array
  }
}
</script>
