<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-warning px-3">
    <router-link class="navbar-brand d-flex" :to="{ name: 'Home' }">
      <div class="d-flex flex-column align-items-center text-dark">
        <h1><i class="mdi mdi-email"></i>Blogger</h1>
      </div>
    </router-link>
    <button
      class="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarText"
      aria-controls="navbarText"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon" />
    </button>
    <div class="collapse navbar-collapse" id="navbarText">
      <ul class="navbar-nav me-auto">
        <li>
          <router-link
            :to="{ name: 'About' }"
            class="text-warning text-uppercase"
          >
            About
          </router-link>
        </li>
      </ul>
      <button
        class="btn btn-info rounded me-4"
        data-bs-toggle="modal"
        data-bs-target="#mod"
        @click="createBlog()"
      >
        Create Post
      </button>
      <!-- LOGIN COMPONENT HERE -->
      <Login />
    </div>
  </nav>
  <Modal id="mod">
    <template #title> Create </template>
    <template #body> <BlogForm /></template>
  </Modal>
</template>

<script>
import { onMounted } from '@vue/runtime-core';
import { logger } from '../utils/Logger';
import Pop from '../utils/Pop';
import { blogsService } from '../services/BlogsService';
export default {
  setup() {
    
    return {};
  },
};
</script>

<style scoped>
a:hover {
  text-decoration: none;
}
.nav-link {
  text-transform: uppercase;
}
.navbar-nav .router-link-exact-active {
  border-bottom: 2px solid var(--bs-success);
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}
</style>
