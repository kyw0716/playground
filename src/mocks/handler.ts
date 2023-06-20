import { rest } from 'msw';

type RequestCase = 'success' | 'fail' | 'network';

export const mockApis = [
  rest.get('/api/suspense', async (req, res, ctx) => {
    const requestCase = req.url.searchParams.get('case') as RequestCase;

    if (requestCase === 'network') {
      const temp = new Promise((resolve) => {
        setTimeout(() => {
          resolve('');
        }, 2000);
      });

      await temp;

      return res.networkError('Failed to fetch');
    }

    if (requestCase === 'fail')
      return res(
        ctx.status(404),
        ctx.delay(2000),
        ctx.json('에러가 발생했습니다!')
      );

    return res(
      ctx.status(200),
      ctx.delay(2000),
      ctx.json('서버에서 반환된 값')
    );
  }),
];
