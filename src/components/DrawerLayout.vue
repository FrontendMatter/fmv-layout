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
    this.$nextTick(() => handler.upgradeElement(this.$el, 'mdk-drawer-layout'))
  },
  beforeDestroy() {
    handler.downgradeElement(this.$el, 'mdk-drawer-layout')
  }
}
</script>
