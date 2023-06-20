import { rest } from 'msw';

type RequestCase = 'success' | 'fail';

export const mockApis = [
  rest.get('/api/suspense', (req, res, ctx) => {
    const requestCase = req.url.searchParams.get('case') as RequestCase;

    if (requestCase === 'fail')
      return res(
        ctx.status(404),
        ctx.delay(2000),
        ctx.json('에러가 발생했습니다!')
      );
    return res(ctx.status(200), ctx.delay(2000), ctx.json('ㅎㅇㅎㅇ'));
  }),
];
