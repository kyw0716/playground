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

      return res.networkError('네트워크 에러가 발생했습니다 ㅠㅠㅠ');
    }

    if (requestCase === 'fail')
      return res(
        ctx.status(404),
        ctx.delay(2000),
        ctx.json('서버에서 값을 가져오지 못했습니다 ㅠㅠㅠ')
      );

    return res(
      ctx.status(200),
      ctx.delay(2000),
      ctx.json('서버에서 값을 성공적으로 받아왔습니다!')
    );
  }),
];
