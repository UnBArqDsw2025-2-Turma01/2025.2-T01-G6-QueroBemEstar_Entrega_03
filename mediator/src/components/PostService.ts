import { CompetitionPostData } from "../models/types";

export class PostService {
  private posts: CompetitionPostData[] = [];
  private likes: { [postId: string]: string[] } = {}; 

  createPost(post: CompetitionPostData) {
    this.posts.push(post);
    this.likes[post.postId] = [];
    console.log(`[PostService] Post competição criado: ${post.postId}`);
  }

  likePost(postId: string, likedBy: string) {
    if (!this.likes[postId]) this.likes[postId] = [];
    if (!this.likes[postId].includes(likedBy)) {
      this.likes[postId].push(likedBy);
    }
    console.log(`[PostService] Post ${postId} curtido por ${likedBy}`);
  }

  getLikes(postId: string) {
    return this.likes[postId] || [];
  }

  getPosts() {
    return this.posts;
  }
}
