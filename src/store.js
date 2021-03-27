import {
  createStore
} from 'vuex'
import mitt from 'mitt'

const store = createStore({
  state: {
    emitter: mitt(),
    curResName: 'empty',
    resModalVisible: false
  }
})

export default store
