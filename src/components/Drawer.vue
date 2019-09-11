<template>
  <div
    :id="id"
    :data-align="align"
    class="mdk-drawer js-mdk-drawer">
    <div class="mdk-drawer__content">
      <slot/>
    </div>
  </div>
</template>

<script>
import { handler } from 'dom-factory'
import 'material-design-kit/dist/drawer.js'
import listenOnRootMixin from '../mixins/listen-on-root'
import { drawerProps } from './Drawer.props'

// Events we emit on $root
const EVENT_STATE = 'fm::drawer::state'

// Events we listen to on $root
const EVENT_TOGGLE = 'fm::toggle::drawer'

export default {
  mixins: [listenOnRootMixin],
  props: drawerProps,
  data() {
    return {
      show: this.opened
    }
  },
  computed: {
    state() {
      return {
        id: this.id,
        show: this.show,
        align: this.align,
        persistent: this.persistent
      }
    }
  },
  watch: {
    show(newVal, oldVal) {
      if (newVal !== oldVal) {
        this.try(() => {
          this.$el.mdkDrawer[newVal ? 'open' : 'close']()
          this.emitState()
        })
      }
    },
    align(newVal, oldVal) {
      if (newVal !== oldVal) {
        this.try(() => {
          this.$el.mdkDrawer.align = newVal
          this.emitState()
        })
      }
    }
  },
  created() {
    // Listen for toggle events to open/close us
    this.listenOnRoot(EVENT_TOGGLE, this.handleToggleEvt)
  },
  mounted() {
    this.$el.addEventListener('mdk-drawer-change', () => this.onChangeHandler())
    this.$el.addEventListener('domfactory-component-upgraded', () =>
      this.onInitHandler()
    )
    this.$nextTick(() => handler.upgradeElement(this.$el, 'mdk-drawer'))
  },
  beforeDestroy() {
    handler.downgradeElement(this.$el, 'mdk-drawer')
    this.$el.removeEventListener('mdk-drawer-change', () =>
      this.onChangeHandler()
    )
    this.$el.removeEventListener('domfactory-component-upgraded', () =>
      this.onInitHandler()
    )
  },
  methods: {
    onInitHandler() {
      if (this.opened) {
        this.open()
      }
    },
    onChangeHandler() {
      if (this.$el.mdkDrawer) {
        this.show = this.$el.mdkDrawer.opened
      }
    },
    try(callback) {
      try {
        callback()
      } catch (e) {
        this.$el.addEventListener(
          'domfactory-component-upgraded',
          callback.bind(this)
        )
      }
    },
    toggle() {
      this.show = !this.show
    },
    open() {
      this.show = true
    },
    close() {
      this.open = false
    },
    emitState() {
      this.$emit('input', this.show)
      // Let toggle know the state of this drawer
      this.$root.$emit(EVENT_STATE, this.id, this.state)
    },
    handleToggleEvt(target) {
      if (target !== this.id) {
        return
      }
      this.toggle()
    }
  }
}
</script>
