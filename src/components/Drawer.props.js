export const drawerProps = {
  id: {
    type: String,
    default: () => 'default-drawer'
  },
  align: {
    type: String,
    default: 'start',
    validator: val => ['start', 'end', 'left', 'right'].includes(val)
  },
  persistent: {
    type: Boolean,
    default: false
  },
  opened: {
    type: Boolean,
    default: false
  }
}
