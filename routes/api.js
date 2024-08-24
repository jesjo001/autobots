// routes/api.js
import { Router } from 'express';
import { AutobotView } from '../views/AutobotView.js';
import rateLimit from 'express-rate-limit';

const router = Router();

// Rate limiting
const limiter = rateLimit({
  windowMs: 60 * 1000,
  max: 5,
});

router.get('/autobots', limiter, AutobotView.getAutobots);
router.get('/autobots/:id/posts', limiter, AutobotView.getAutobotPosts);
router.get('/posts/:id/comments', limiter, AutobotView.getPostComments);

export default router;
