<template>
  <div class="component row border border-dark d-flex">
    <div class="col-8">
      <div>
        <img class="avatar" :src="blog.creator.picture" alt="creator picture" />
        <h6>{{ blog.creator.name }}</h6>
      </div>
      <div>
        <p>
          {{ blog.body }}
        </p>
      </div>
      <div>{{ blog.creator.createdAt }}</div>
    </div>
    <div class="col-4">
      <img class="coverImg" :src="blog.creator.coverImg" alt="blog picture" />
    </div>
  </div>
</template>


<script>
export default {
  props: {
    blog: {
      type: Object,
      required: true}
  },
  setup(){
    return {}
  }
}
</script>


<style lang="scss" scoped>
.avatar {
  height: 100px;
  max-width: 100px;
  object-fit: cover;
}

.coverImg {
  max-height: 100%;
  max-width: 100%;
  object-fit: cover;
}
</style>

