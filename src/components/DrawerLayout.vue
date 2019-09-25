<template>
  <div
    :data-push="push"
    :data-responsive-width="responsiveWidth" 
    class="mdk-drawer-layout js-mdk-drawer-layout">
    <div
      :class="contentClass" 
      class="mdk-drawer-layout__content">
      <slot/>
    </div>
    <!-- // END drawer-layout__content -->

    <drawer
      :align="drawerAlign">
      <slot name="drawer">
        // drawer
      </slot>
    </drawer>
  </div>
</template>

<script>
import { handler } from 'dom-factory'
import 'material-design-kit/dist/drawer-layout.js'
import Drawer from './Drawer.vue'
import { drawerProps } from './Drawer.props'
import { prefixProps } from '../utils/props'

export default {
  components: {
    Drawer
  },
  props: {
    push: {
      type: Boolean,
      default: true
    },
    fullbleed: {
      type: Boolean
    },
    responsiveWidth: {
      type: String,
      default: '992px'
    },
    contentClass: {
      type: [String, Array, Object],
      default: null
    },
    ...prefixProps(drawerProps, 'drawer')
  },
  mounted() {
    this.$el.addEventListener(
      'domfactory-component-upgraded',
      this.init.bind(this)
    )
    this.$nextTick(() => handler.upgradeElement(this.$el, 'mdk-drawer-layout'))
  },
  beforeDestroy() {
    this.$el.removeEventListener(
      'domfactory-component-upgraded',
      this.init.bind(this)
    )
    handler.downgradeElement(this.$el, 'mdk-drawer-layout')
  },
  methods: {
    init() {
      ;['push', 'responsiveWidth', 'fullbleed'].map(prop => {
        this.$el.mdkDrawerLayout[prop] = this[prop]
        this.$watch(prop, val => (this.$el.mdkDrawerLayout[prop] = val))
      })
    }
  }
}
</script>
