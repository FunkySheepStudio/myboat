<template>
  <v-app>
    <mainMenu/>
    <router-view />
  </v-app>
</template>
<script>
module.exports = {
  components: {
    'mainMenu': Vue.defineAsyncComponent( () => loadModule('./components/organisms/main_menu.vue', options)),
  },
  data() {
    return {
      items: [
    {
        label: 'Finder',
        icon: 'https://primefaces.org/cdn/primevue/images/dock/finder.svg',
        command: () => {
            this.displayFinder = true;
        }
    },
    {
        label: 'Terminal',
        icon: 'https://primefaces.org/cdn/primevue/images/dock/terminal.svg',
        command: () => {
            this.displayTerminal = true;
        }
    },
    {
        label: 'App Store',
        icon: 'https://primefaces.org/cdn/primevue/images/dock/appstore.svg',
        url: 'https://www.apple.com/app-store/'
    },
    {
        label: 'Safari',
        icon: 'https://primefaces.org/cdn/primevue/images/dock/safari.svg',
        command: () => {
            toast.add({ severity: 'warn', summary: 'Safari has stopped working', group: 'tc', life: 3000 });
        }
    }
]
    }
  },
  mounted () {
  }
}
</script>
<style>
</style>