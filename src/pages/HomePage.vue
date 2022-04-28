<template>
  <div class="home container">
    <div class="row">
      <div class="col-12">
        <h1>BLOGGER</h1>
      </div>
    </div>
    <BlogPost v-for="b in blogs" :key="b.id" :blog="b" />
  </div>
</template>

<script>
import { computed, onMounted } from '@vue/runtime-core'
import { blogsService } from '../services/BlogsService.js'
import { logger } from '../utils/Logger.js'
import Pop from '../utils/Pop.js'
import { AppState } from '../AppState.js'
export default {
  name: 'Home',
setup(){
  onMounted(async()=> {
try {
 await  blogsService.getBlogs()
} catch (error) {
  logger.error(error)
  Pop.toast(error.message, 'error')
}
    })
  return{
    blogs: computed(()=> AppState.blogs)
    }
}
    }
</script>

<style scoped lang="scss">
</style>
