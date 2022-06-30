<template>
    <dl class="project_wrap" v-bind:class="{ on: isActive }">
      <dt class="project_title">{{project.title}}</dt>
      <button class="btn_project_toggle" @click="isActive=!isActive">
          <span class="blind">열기</span>
      </button>
      <dd class="project_content">
          <div class="project_dates">
              <span class="project_date">{{project.start}}</span>
              <span class="project_date">{{project.end}}</span>
          </div>
          <p class="project_summary">
              {{project.summary}}
          </p>
          <div class="project_skills_wrap">
              <span class="project_skills_head">주요기술</span>
              <ul class="project_skills">
                  <li class="project_skill" :class="'logo_' + skill" v-for="skill in project.skills" :key="skill">
                      <span class="blind">{{ skill }}</span>
                  </li>
              </ul>
          </div>
          <ul class="project_contents">
              <li class="project_content_detail" v-for="(content, head) in project.contents" :key="head">
                  <span class="project_content_head">{{ head }}</span>
                  <div class="project_content_item_wrap">
                      <p class="project_content_item" v-for="(p, idx) in content.split('\n')" :key="idx">
                          {{ p }}
                      </p>
                  </div>
              </li>
          </ul>
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
