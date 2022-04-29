<template>
  <div
    class="component my-5 shadow rounded row border border-dark bg-light d-flex"
  >
    <div class="col-8 d p-2">
      <div class="d-flex align-items-center" @click="seeProfile">
        <img
          class="avatar rounded-pill"
          :src="blog.creator.picture"
          alt="creator picture"
        />
        <h6 class="ms-3">{{ blog.creator.name }}</h6>
      </div>
      <div class="d-flex flex-column justify-content-between">
        <h4>{{ blog.title }}</h4>
        <p>
          {{ blog.body }}
        </p>
        <p>{{ blog.creator.createdAt }}</p>
      </div>
    </div>
    <div class="col-4 d-flex align-items-center p-2">
      <img class="coverImg rounded" :src="blog.imgUrl" alt="blog picture" />
    </div>
  </div>
</template>


<script>
import { useRouter } from 'vue-router'
export default {
  props: {
    blog: {
      type: Object,
      required: true}
  },
  setup(props){
    const router = useRouter()
    return {
      seeProfile(props){
        router.push({name: "Profile", params: { id: props.blog.creatorId}})
      }
    }
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

