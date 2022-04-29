<template>
  <form @submit.prevent="createBlog">
    <div class="mb-3">
      <label for="title" class="form-label">Title</label>
      <input
        type="text"
        class="form-control"
        name="title"
        id="title"
        aria-describedby="helpId"
        placeholder="Create Title..."
        v-model="newBlog.title"
      />
    </div>
    <div class="mb-3">
      <label for="url" class="form-label">Image Url</label>
      <input
        type="url"
        class="form-control"
        name="url"
        id="url"
        aria-describedby="helpId"
        placeholder="Enter Url..."
        v-model="newBlog.imgUrl"
      />
    </div>
    <div class="mb-3">
      <label for="post" class="form-label">Blog Post</label>
      <textarea
        class="form-control"
        name="post"
        id="post"
        rows="5"
        v-model="newBlog.body"
      ></textarea>
    </div>
    <button class="btn btn-success">Create</button>
  </form>
</template>


<script>
import { ref } from '@vue/reactivity'
import { blogsService } from '../services/BlogsService'
export default {
  setup(){
    const newBlog = ref({})
    return {
      newBlog,
      async createBlog(){
        try {
         await blogsService.createBlog(newBlog.value)  
        } catch (error) {
          logger.error(error)
          Pop.toast(error.message, 'error')
        }
      }
    }
  }
}
</script>


<style lang="scss" scoped>
</style>