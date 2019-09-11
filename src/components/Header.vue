<template>
  <div
    :data-effects="headerEffects" 
    class="mdk-header js-mdk-header">
    <div class="mdk-header__content">
      <slot>
        <div data-primary>
          // header
        </div>
      </slot>
    </div>
  </div>
</template>

<script>
import { handler } from 'dom-factory'
import 'material-design-kit/dist/header.js'
import { isArray } from '../utils/array'

export default {
  props: {
    fixed: {
      type: Boolean,
      default: true
    },
    disabled: {
      type: Boolean,
      default: false
    },
    reveals: {
      type: Boolean,
      default: false
    },
    condenses: {
      type: Boolean,
      default: false
    },
    effects: {
      type: [String, Array],
      default: null
    }
  },
  computed: {
    props() {
      return ['fixed', 'disabled', 'reveals', 'condenses']
    },
    headerEffects() {
      if (this.effects) {
        let effects = isArray(this.effects) ? this.effects : [this.effects]
        return effects.join(' ')
      }
    }
  },
  mounted() {
    this.$el.addEventListener(
      'domfactory-component-upgraded',
      this.init.bind(this)
    )
    this.$nextTick(() => handler.upgradeElement(this.$el, 'mdk-header'))
  },
  beforeDestroy() {
    handler.downgradeElement(this.$el, 'mdk-header')
    this.$el.removeEventListener(
      'domfactory-component-upgraded',
      this.init.bind(this)
    )
  },
  methods: {
    init() {
      this.props.map(prop => {
        this.$el.mdkHeader[prop] = this[prop]
        this.$watch(prop, val => (this.$el.mdkHeader[prop] = val))
      })
    }
  }
}
</script>
