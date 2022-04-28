<template>
  <form action="">
    <div class="mb-3">
      <label for="title" class="form-label">Title</label>
      <input
        type="text"
        class="form-control"
        name="title"
        id="title"
        aria-describedby="helpId"
        placeholder="Create Title..."
      />
      <small id="helpId" class="form-text text-muted">Help text</small>
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
      />
    </div>
    <div class="mb-3">
      <label for="post" class="form-label">Blog Post</label>
      <textarea class="form-control" name="post" id="post" rows="5"></textarea>
    </div>
  </form>
</template>


<script>
export default {
  setup(){
    return {}
  }
}
</script>


<style lang="scss" scoped>
</style>