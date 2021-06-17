<template>
    <section id="exps" class="resume_exp">
        <h2 class="section_title">
            <span class="exp_title">Exps.</span>
        </h2>
        <em class="notice">결과물을 보고싶으시면 아이콘을 클릭해주세요.</em>
        <exp-contents :exps="exps" />
    </section>
</template>

<script>
import ExpContents from '@/components/ExpContents'

export default {
  name: 'ResumeExps',
  components: { ExpContents },
  props: {
    exps: Array
  }
}
</script>
