<template>
    <li class="exp">
        <div class="exp_date">
            <div class="date_start"><span class="date">{{exp.start}}</span></div>
            <div class="date_end"><span class="date">{{exp.end}}</span></div>
        </div>
        <div class="exp_info">
            <strong class="exp_head">{{ exp.name }}</strong>
            <div class="exp_subhead">{{ exp.subname }}</div>
            <p class="exp_detail">{{ exp.content }}</p>
            <exp-content-results v-if="exp.results.length > 0" :expResults="exp.results"/>
        </div>
    </li>
</template>

<script>
import ExpContentResults from '@/components/ExpContentResults'

export default {
  name: 'ExpContent',
  components: {
    ExpContentResults
  },
  props: {
    exp: Object
  }
}
</script>
