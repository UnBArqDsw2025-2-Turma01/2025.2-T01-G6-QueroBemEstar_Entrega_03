import express from "express";
import path from "path";
import { PostService } from "./components/PostService";
import { ScoreService } from "./components/ScoreService";
import { NotificationService } from "./components/NotificationService";
import { RankingService } from "./components/RankingService";
import { FeedService } from "./components/FeedService";
import { CompetitionMediator } from "./mediator/CompetitionMediator";
import { IMediator } from "./mediator/IMediator";
import { CompetitionPostData, RecipeData } from "./models/types";

const app = express();
app.use(express.json());

// Serviços
const postService = new PostService();
const scoreService = new ScoreService();
const notificationService = new NotificationService();
const rankingService = new RankingService();
const feedService = new FeedService();

// Mediator
const mediator: IMediator = new CompetitionMediator(
  postService,
  scoreService,
  notificationService,
  rankingService
);

// ---------- ENDPOINTS ----------

// Competição
app.post("/competition/posts", (req, res) => {
  const post: CompetitionPostData = req.body;
  postService.createPost(post);
  mediator.postCreated(post.postId, post.userId, post.competitionId);
  res.json({ message: "Post da competição criado" });
});

app.post("/competition/posts/:id/like", (req, res) => {
  const postId = req.params.id;
  const { likedBy } = req.body;
  const post = postService.getPosts().find(p => p.postId === postId);
  if (!post) return res.status(404).json({ message: "Post não encontrado" });

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
  const recipe: RecipeData = req.body;
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
app.use(express.static(path.join(__dirname, "../frontend/build")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/build/index.html"));
});

// ---------- CONFIGURAÇÃO INICIAL ----------
mediator.registerCompetition("comp1", ["userA", "userB", "userC"]);
scoreService.getScores();

const PORT = 3000;
app.listen(PORT, () => console.log(`Servidor rodando em http://localhost:${PORT}`));
