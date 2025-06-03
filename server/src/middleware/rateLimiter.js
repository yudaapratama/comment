// src/middleware/rateLimiter.js
const Redis = require('ioredis');
const { RateLimiterRedis } = require('rate-limiter-flexible');

const redis = new Redis({
  host: process.env.REDIS_HOST || 'redis',
  port: Number(process.env.REDIS_PORT) || 6379,
});

const limiter = new RateLimiterRedis({
  storeClient: redis,
  keyPrefix: 'like_or_comment_rl',
  points: Number(process.env.LIMITER_POINT) || 10,      // points allowed
  duration: Number(process.env.LIMITER_DURATION) || 30, // per …seconds
  blockDuration: Number(process.env.LIMITER_BLOCK_DURATION) || 300, // ban time
});

module.exports = () => {
  return async (ctx, next) => {
    const isPostComment = ctx.method === 'POST' &&
                          ctx.path === '/api/comment';
    const isPutComment  = ctx.method === 'PUT'  &&
                          /^\/api\/comment\/\w+/.test(ctx.path);

    if (!isPostComment && !isPutComment) {
      return next();
    }

    const key = ctx.state.userInfo?.objectId
      ? `user:${ctx.state.userInfo.objectId}`
      : `ip:${ctx.ip}`;

    try {
      await limiter.consume(key, 1);
    } catch (err) {
      if (ctx.state.userInfo) {
        // 1️⃣  Ban the user (applies to POST & PUT)
        await ctx.model('Users')
          .where({ id: ctx.state.userInfo.objectId })
          .update({ is_banned: 1 });

        // 2️⃣  Delete ONLY recent comments (applies to POST *only*)
            if (isPostComment) {
              const oneHourAgo = new Date(Date.now() - 60 * 60 * 1000);

              // Convert to MySQL-friendly string: 2025-05-31 17:48:32
              const cutoff = think.datetime(oneHourAgo, 'YYYY-MM-DD HH:mm:ss');

              await ctx.model('Comment')
                .where({
                  user_id: ctx.state.userInfo.objectId,
                  insertedAt: ['>=', cutoff],  
                })
                .delete();
            }
      }

      ctx.status = 429;
      ctx.body = {
        success: false,
        message: 'Anda Ketahuan Nyepam, Kami Ban Di Tempat.',
      };
      return; 
    }
    await next();
  };
};
