<template>
  <div id="app" class="bg-gray-900 min-h-screen">
    <p class="font-semibold text-red-600">ETG</p>
    <p class="text-xs text-gray-400">External Gaming Tools</p>

    <div id="nav" class="text-gray-400">
      <router-link to="/">Home</router-link> |
      <router-link to="/database">Database</router-link> |
      <router-link to="/create">Create</router-link> |
      <router-link to="/games">Games</router-link> |
      <router-link to="/games/add">Add Game</router-link>
    </div>
    <router-view class="text-white" />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
}

#nav a.router-link-exact-active {
  @apply text-red-600
}
</style>
