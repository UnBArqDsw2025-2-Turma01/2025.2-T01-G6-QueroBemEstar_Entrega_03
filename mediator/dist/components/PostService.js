"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostService = void 0;
class PostService {
    constructor() {
        this.posts = [];
        this.likes = {};
    }
    createPost(post) {
        this.posts.push(post);
        this.likes[post.postId] = [];
        console.log(`[PostService] Post competição criado: ${post.postId}`);
    }
    likePost(postId, likedBy) {
        if (!this.likes[postId])
            this.likes[postId] = [];
        if (!this.likes[postId].includes(likedBy)) {
            this.likes[postId].push(likedBy);
        }
        console.log(`[PostService] Post ${postId} curtido por ${likedBy}`);
    }
    getLikes(postId) {
        return this.likes[postId] || [];
    }
    getPosts() {
        return this.posts;
    }
}
exports.PostService = PostService;
