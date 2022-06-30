<template>
    <div class="work_projects">
        <ul class="projects">
            <li class="project" v-for="(project, index) in projects" :key="'project-'+ index">
                <project :project="project"/>
            </li>
        </ul>
    </div>
</template>

<script>
import Project from '@/components/Project'

export default {
  name: 'Projects',
  components: {
    Project
  },
  props: {
    projects: Array,
    project: Object
  }
}
</script>
