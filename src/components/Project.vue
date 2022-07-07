<template>
    <dl class="project_wrap" v-bind:class="{ on: isActive }">
        <dt class="project_title">
            {{ project.title }}
            <button class="btn_project_toggle" @click="isActive = !isActive">
                <span class="blind">열기</span>
            </button>
        </dt>
        <Transition name="slide"
            @before-enter="beforeEnter"
            @enter="enter"
            @before-leave="beforeLeave"
            @leave="leave"
        >
            <dd class="project_content" v-show="isActive">
                <div class="project_dates">
                    <span class="project_date">{{ project.start }}</span>
                    <span class="project_date">{{ project.end }}</span>
                </div>
                <p class="project_summary">
                    {{ project.summary }}
                </p>
                <div class="project_skills_wrap">
                    <span class="project_skills_head">주요기술</span>
                    <ul class="project_skills">
                        <li class="project_skill"
                            v-for="skill in project.skills"
                            :class="'logo_' + skill"
                            :key="skill"
                        >
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
        </Transition>
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
  },
  methods: {
    beforeEnter (element) {
      element.style.height = 0
    },
    enter (element) {
      element.style.height = `${element.scrollHeight}px`
    },
    beforeLeave (element) {
      element.style.height = `${element.scrollHeight}px`
    },
    leave (element) {
      element.style.height = 0
    }
  }
}
</script>
