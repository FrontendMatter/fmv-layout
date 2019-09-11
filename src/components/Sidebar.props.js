export default {
  props: {
    type: {
      type: String,
      default: 'light',
      validator: val => ['dark', 'light'].includes(val)
    },
    variant: {
      type: String,
      default: null
    },
    align: {
      type: String,
      default: 'start',
      validator: val => ['start', 'end', 'left', 'right'].includes(val)
    }
  }
}