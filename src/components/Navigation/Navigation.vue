<template>
  <b-navbar class="nav-custom" toggleable="md" type="dark" variant="info">

    <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

    <b-navbar-brand>
      <router-link to="/" class="nav-link">Where's The Money?</router-link>
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
import './navigation.scss';

export default {
  name: 'Navigation'
};
</script>

