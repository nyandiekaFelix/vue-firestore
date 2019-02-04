<template>
  <b-navbar class="nav-custom" toggleable="md" type="dark" variant="info">

    <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

    <b-navbar-brand>
      <router-link to="/" class="nav-link">Money Matters</router-link>
    </b-navbar-brand>

    <b-collapse is-nav id="nav_collapse">
      <b-navbar-nav class="ml-auto">
        <router-link to="/budgets" class="nav-link">Budgets</router-link>
        <b-nav-item-dropdown text="Account" id="act-dropdown" right>
          <router-link to="/" class="dropdown-item">Profile</router-link>
          <router-link to="/" class="dropdown-item">Login</router-link>
          <router-link to="/" class="dropdown-item">Signup</router-link>
          <router-link to="/" class="dropdown-item">Logout</router-link>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
export default {
  name: 'Navigation'
}
</script>

<style>
.nav-custom{
  background-color: #41B883 !important;
  padding: 0 10px;
  margin-bottom: 20px;
}
a, a:hover, .nav-link {
  color: #34495E !important;
  text-decoration: none;
}

.dropdown-menu{
  margin-top: 8px;
  border-radius: 0;
}
</style>

