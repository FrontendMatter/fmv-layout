<template>
  <perfect-scrollbar
    ref="ps" 
    :class="classes"
    class="sidebar o-hidden">
    <slot />
  </perfect-scrollbar>
</template>

<script>
import PerfectScrollbar from './PerfectScrollbar.vue'
import SidebarProps from './Sidebar.props'

export default {
  components: {
    PerfectScrollbar
  },
  mixins: [SidebarProps],
  computed: {
    isRTL() {
      if (!process.server && this.$el) {
        return window.getComputedStyle(this.$el).direction === 'rtl'
      }
    },
    position() {
      let position = this.align
      let isRTL = this.isRTL

      if (isRTL && ['left', 'right'].includes(position)) {
        if (position === 'left') {
          position = 'right'
        } else if (position === 'right') {
          position = 'left'
        }
      }

      if (this.align === 'start') {
        position = isRTL ? 'right' : 'left'
      }
      if (this.align === 'end') {
        position = isRTL ? 'left' : 'right'
      }

      return position
    },
    classes() {
      let classes = {}
      classes[`sidebar-${this.type}`] = true
      classes[`sidebar-${this.position}`] = true

      if (this.variant) {
        this.variant.split(' ').map(variant => (classes[variant] = true))
      }

      return classes
    }
  },
  methods: {
    update() {
      this.$nextTick(() => {
        if (this.$refs.ps) {
          this.$refs.ps.update()
        }
      })
    }
  }
}
</script>
