// docs/swaggerAnnotations.js

/**
 * @swagger
 * tags:
 *   name: Autobots
 *   description: API to manage Autobots.
 */

/**
 * @swagger
 * /autobots:
 *   get:
 *     summary: Retrieve a list of Autobots
 *     tags: [Autobots]
 *     responses:
 *       200:
 *         description: A list of Autobots.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                   username:
 *                     type: string
 *                   email:
 *                     type: string
 *       500:
 *         description: Internal Server Error
 */

/**
 * @swagger
 * /autobots/{autobotId}/posts:
 *   get:
 *     summary: Retrieve a list of posts for a specific Autobot
 *     tags: [Autobots]
 *     parameters:
 *       - in: path
 *         name: autobotId
 *         schema:
 *           type: integer
 *         required: true
 *         description: The ID of the Autobot
 *     responses:
 *       200:
 *         description: A list of posts.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                   title:
 *                     type: string
 *                   body:
 *                     type: string
 *       404:
 *         description: Autobot not found
 *       500:
 *         description: Internal Server Error
 */

/**
 * @swagger
 * /posts/{postId}/comments:
 *   get:
 *     summary: Retrieve a list of comments for a specific post
 *     tags: [Autobots]
 *     parameters:
 *       - in: path
 *         name: postId
 *         schema:
 *           type: integer
 *         required: true
 *         description: The ID of the Post
 *     responses:
 *       200:
 *         description: A list of comments.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                   body:
 *                     type: string
 *       404:
 *         description: Post not found
 *       500:
 *         description: Internal Server Error
 */
