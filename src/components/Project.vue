<template>
    <dl class="project_wrap" v-bind:class="{ on: isActive }">
      <dt class="project_title">{{project.title}}</dt>
      <button class="btn_project_toggle" @click="isActive=!isActive">
          <span class="blind">열기</span>
      </button>
      <dd class="project_content">
          <div class="project_dates">
              <span class="date">{{project.start}}</span><span class="date">{{project.end}}</span>
          </div>
          <div class="project_duty">
              {{project.duty}}
          </div>
          <p class="project_summary">
              {{project.summary}}
          </p>
      </dd>
  </dl>
</template>

<script>
export default {
  name: 'Project',
  props: {
    projects: Array,
    project: Object
  },
  data: function () {
    return {
      isActive: false
    }
  }
}
</script>
