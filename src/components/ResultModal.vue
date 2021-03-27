<template>
    <div id="res-modal" class="result_modal">
        <div class="modal">
            <div class="modal_header">
                <h3 class="modal_title">{{ resultName }}</h3>
            </div>
            <div class="modal_body">
                <div class="modal_content">
                    <span class="modal_content_head">주요기술</span>
                    <ul class="result_skills">
                        <li class="result_skill" :class="'logo_' + skill" v-for="skill in skills" :key="skill">
                            <span class="blind">{{ skill }}</span>
                        </li>
                    </ul>
                </div>

                <div class="modal_content" v-for="(content, head) in contents" :key="head">
                    <span class="modal_content_head">{{ head }}</span>
                    <p class="modal_content_item">{{ content }}</p>
                </div>
            </div>
            <div class="modal_footer">
                <ul class="result_links">
                    <li class="result_link" v-for="(link, name) in links" :key="name">
                        <a class="modal_btn" target="_blank" :href="link">{{ name }}</a>
                    </li>
                </ul>
                <button class="modal_close_btn" @click="closeResModal()">
                    <span class="blind">닫기</span>
                </button>
            </div>
        </div>
    </div>
</template>

<script>
import { useStore } from 'vuex'

export default {
  name: 'ResultModal',
  setup () {
    const emitter = useStore().state.emitter

    const closeResModal = () => {
      emitter.emit('closeResModal')
    }

    return { closeResModal }
  },
  props: {
    resultName: String,
    skills: Array,
    contents: Object,
    links: Object
  }
}
</script>
