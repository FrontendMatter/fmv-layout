import FmvDrawer from './components/Drawer.vue'
import FmvDrawerLayout from './components/DrawerLayout.vue'
import FmvHeader from './components/Header.vue'
import FmvHeaderLayout from './components/HeaderLayout.vue'
import FmvPerfectScrollbar from './components/PerfectScrollbar.vue'
import FmvSidebar from './components/Sidebar.vue'
import FmvSidebarMenu from './components/SidebarMenu.vue'

import listenOnRootMixin from './mixins/listen-on-root'

import { isArray } from './utils/array'
import { prefixProps } from './utils/props'

import FmvToggle from './directives/toggle'

const utils = {
  isArray,
  prefixProps
}

const mixins = {
  listenOnRootMixin
}

export {
  FmvDrawer,
  FmvDrawerLayout,
  FmvHeader,
  FmvHeaderLayout,
  FmvPerfectScrollbar,
  FmvSidebar,
  FmvSidebarMenu,
  FmvToggle,
  mixins,
  utils,
}
