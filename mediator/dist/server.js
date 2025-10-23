"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const PostService_1 = require("./components/PostService");
const ScoreService_1 = require("./components/ScoreService");
const NotificationService_1 = require("./components/NotificationService");
const RankingService_1 = require("./components/RankingService");
const FeedService_1 = require("./components/FeedService");
const CompetitionMediator_1 = require("./mediator/CompetitionMediator");
const app = (0, express_1.default)();
app.use(express_1.default.json());
// Serviços
const postService = new PostService_1.PostService();
const scoreService = new ScoreService_1.ScoreService();
const notificationService = new NotificationService_1.NotificationService();
const rankingService = new RankingService_1.RankingService();
const feedService = new FeedService_1.FeedService();
// Mediator
const mediator = new CompetitionMediator_1.CompetitionMediator(postService, scoreService, notificationService, rankingService);
// ---------- ENDPOINTS ----------
// Competição
app.post("/competition/posts", (req, res) => {
    const post = req.body;
    postService.createPost(post);
    mediator.postCreated(post.postId, post.userId, post.competitionId);
    res.json({ message: "Post da competição criado" });
});
app.post("/competition/posts/:id/like", (req, res) => {
    const postId = req.params.id;
    const { likedBy } = req.body;
    const post = postService.getPosts().find(p => p.postId === postId);
    if (!post)
        return res.status(404).json({ message: "Post não encontrado" });
    postService.likePost(postId, likedBy);
    // Notificar e checar prêmio via mediator (ele fará a validação/award)
    mediator.postLiked(postId, likedBy, post.userId);
    res.json({ message: "Like registrado na competição" });
});
app.get("/competition/posts", (req, res) => {
    const posts = postService.getPosts().map(post => ({
        ...post,
        likes: postService.getLikes(post.postId)
    }));
    res.json(posts);
});
app.get("/competition/scores", (req, res) => {
    res.json(scoreService.getScores());
});
// Feed de receitas
app.post("/feed/recipes", (req, res) => {
    const recipe = req.body;
    feedService.addRecipe(recipe);
    res.json({ message: "Receita adicionada ao feed" });
});
app.get("/feed/recipes", (req, res) => res.json(feedService.getRecipes()));
app.get("/notifications/:userId", (req, res) => {
    const { userId } = req.params;
    const notifications = notificationService.getNotificationsForUser(userId);
    res.json(notifications);
});
// ---------- SERVIR REACT ----------
app.use(express_1.default.static(path_1.default.join(__dirname, "../frontend/build")));
app.get("*", (req, res) => {
    res.sendFile(path_1.default.join(__dirname, "../frontend/build/index.html"));
});
// ---------- CONFIGURAÇÃO INICIAL ----------
mediator.registerCompetition("comp1", ["userA", "userB", "userC"]);
scoreService.getScores();
const PORT = 3000;
app.listen(PORT, () => console.log(`Servidor rodando em http://localhost:${PORT}`));
