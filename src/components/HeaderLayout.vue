<template>
  <div class="mdk-header-layout js-mdk-header-layout">

    <!-- Header -->
    <app-header
      :fixed="headerFixed"
      :reveals="headerReveals"
      :condenses="headerCondenses"
      :disabled="headerDisabled"
      :effects="headerEffects"
      :class="headerClass">
      <slot name="header">
        // header
      </slot>
    </app-header>
    <!-- // END Header -->

    <!-- Header Layout Content -->
    <div
      :class="contentClass"
      class="mdk-header-layout__content">
      <slot/>
    </div>
    <!-- // END header-layout__content -->

  </div>
</template>

<script>
import { handler } from 'dom-factory'
import 'material-design-kit/dist/header-layout.js'
import AppHeader from './Header.vue'

export default {
  components: {
    AppHeader
  },
  props: {
    headerFixed: {
      type: Boolean,
      default: true
    },
    headerDisabled: {
      type: Boolean,
      default: false
    },
    headerReveals: {
      type: Boolean,
      default: false
    },
    headerCondenses: {
      type: Boolean,
      default: false
    },
    headerEffects: {
      type: [String, Array],
      default: null
    },
    headerClass: {
      type: [String, Array, Object],
      default: null
    },
    contentClass: {
      type: [String, Array, Object],
      default: null
    }
  },
  mounted() {
    this.$el.addEventListener(
      'domfactory-component-upgraded',
      this.onUpgrade.bind(this)
    )
    this.$nextTick(() => handler.upgradeElement(this.$el, 'mdk-header-layout'))
  },
  beforeDestroy() {
    this.$el.removeEventListener(
      'domfactory-component-upgraded',
      this.onUpgrade.bind(this)
    )
    handler.downgradeElement(this.$el, 'mdk-header-layout')
  },
  methods: {
    onUpgrade() {
      this.$el.mdkHeaderLayout._reset()
    }
  }
}
</script>
