<template>
  <div>
    <ul
      v-if="menu"
      :class="menuClass" 
      class="sidebar-menu">
      
      <template v-for="(item, itemIdx) in localMenu">
        <template v-if="item.children !== undefined && item.children.length">
          <li 
            :key="`smi-collapse-${itemIdx}`"
            :class="{ 'open': item.open }"
            class="sidebar-menu-item">
            <a 
              v-b-toggle="getId(item)"
              class="sidebar-menu-button"
              href="#"
              @click.prevent>
              <component
                v-if="!!item.icon"
                :is="item.icon.type"
                :class="{ 
                  'sidebar-menu-icon--left': item.icon.align === undefined || item.icon.align === 'left',
                  'sidebar-menu-icon--right': item.icon.align === 'right',
                }"
                class="sidebar-menu-icon"
                v-text="item.icon.id" />
              {{ item.label }}
              <span class="ml-auto sidebar-menu-toggle-icon" />
            </a>
            <b-collapse
              :id="getId(item)"
              v-model="item.open"
              class="sidebar-submenu sm-indent"
              tag="ul"
              @shown="emitState(getId(item), true)"
              @hidden="emitState(getId(item), false)">
              <router-link
                v-for="(child, idx) in item.children"
                :key="`smi-${idx}-${$store.state.locale}`"
                :to="child.route"
                tag="li"
                class="sidebar-menu-item"
                exact>
                <a class="sidebar-menu-button">
                  <span class="sidebar-menu-text">{{ child.label }}</span>
                </a>
              </router-link>
            </b-collapse>
          </li>
        </template>

        <component
          :is="item.route ? 'router-link' : 'li'"
          v-else
          :key="`smi-${itemIdx}-${$store.state.locale}`"
          :to="item.route ? item.route : {}"
          @click="onClick($event, item.click)"
          class="sidebar-menu-item"
          tag="li"
          :exact="item.exact !== false">
          <a class="sidebar-menu-button">
            <component
              v-if="!!item.icon" 
              :is="item.icon.type" 
              class="sidebar-menu-icon sidebar-menu-icon--left"
              v-text="item.icon.id" />
            <span 
              class="sidebar-menu-text" 
              v-text="item.label" />
            <b-badge
              v-if="item.badge"
              :variant="item.badge.variant" 
              class="sidebar-menu-badge ml-auto"
              v-text="item.badge.label" />
          </a>
        </component>

      </template>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'FmvSidebarMenu',
  props: {
    menu: {
      type: Array,
      default() {
        return []
      }
    },
    menuClass: {
      type: [Array, String, Object],
      default: null
    }
  },
  data() {
    return {
      localMenu: []
    }
  },
  watch: {
    '$route': {
      deep: true,
      handler() {
        this.matchRoute()
      }
    },
    '$root.$i18n.locale': {
      handler(val, oldVal) {
        if (val !== oldVal) {
          this.setMenu(this.menu)
        }
      }
    }
  },
  created() {
    this.setMenu(this.menu)
    this.$root.$on('fmv::sidebar-menu::reload', () => this.setMenu(this.menu))
    this.$root.$on('bv::collapse::state', (collapseId, open) => {
      this.emitState(collapseId, false, open)
    })
  },
  methods: {
    setMenu(menu) {
      try {
        this.localMenu = menu.map(item => {
          return {
            id: item.id,
            label: item.label,
            icon: !!item.icon ? {
              id: item.icon.id,
              type: item.icon.type,
            } : null,
            open: item.open,
            click: item.click,
            route: item.route,
            exact: item.exact,
            children: item.children
          }
        })
        this.matchRoute()
      } catch(e) {
        console.warn(`
          Invalid sidebar menu structure. Valid example:
          [
            {
              id: <String> 'auth',
              label: <String> 'Auth',
              icon: <Object> {
                id: 'md-icon',
                type: 'tune',
              },
              open: <Boolean> false,
              click: <Function> function(event){},
              route: <String|Object>,
              exact: <Boolean> true,
              children: <Array> [
                {
                  label: <String> 'Sign up',
                  route: <String|Object> '/signup'
                }
              ]
            }
          ]
        `)
      }
    },
    matchRoute() {
      this.$nextTick(() => {
        this.localMenu.map(item => {
          const open = this.routeMatches(item)
          this[
            open ? 'open' : 'close'
          ](item)
        })
      })
    },
    open(target) {
      if (target.open !== true) {
        const targetId = this.getId(target)
        this.$set(target, 'open', true)
        this.$emit('open', targetId)
        this.$root.$emit('bv::toggle::collapse', targetId)
      }
    },
    close(target) {
      this.$set(target, 'open', false)
      this.$emit('close', this.getId(target))
    },
    emitState(targetId, opened, open) {
      const state = {
        targetId,
        open,
        opened
      }
      this.$emit('state', state)
      this.$root.$emit('fmv::sidebar-menu::state', state)
    },
    getId(item) {
      return `sm${item.id}`
    },
    routeMatches(item) {
      let route
      if (process.server) {
        return false
      }
      try {
        item.children.map(child => {
          if (typeof child.route === 'string') {
            route = route || this.$route.name === child.route
            route = route || this.$route.path === child.route

            if (this.$i18n) {
              this.$i18n.locales.map(locale => {
                const localeRoute = `${child.route}__${locale.code}`

                route = route || this.$route.name === localeRoute
                route = route || this.$route.path === localeRoute
              })
            }
          }
          
          route = route || this.$route.name === child.route.name
          route = route || this.$route.path === child.route.path
        })
      } catch(e) {}

      return route
    },
    onClick(e, callback) {
      if (callback) {
        e.preventDefault()
        callback(e)
      }
    }
  }
}
</script>
