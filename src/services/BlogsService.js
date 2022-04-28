import { AppState } from "../AppState"
import { logger } from "../utils/Logger"
import { api } from "./AxiosService"

class BlogsService {
  async getBlogs() {
    const res = await api.get('api/blogs')
    // logger.log(res.data, "this is the res.data")
    AppState.blogs = res.data
  }

  async createBlog({ }) {
    // const res = await api.post('api/blogs', {})
    // logger.log(res, "this is res on post")
    // AppState.blogs.push({})
  }
}


export const blogsService = new BlogsService()