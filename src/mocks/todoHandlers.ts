import { rest } from 'msw';

const todos: string[] = [];

export const todoHandlers = [
  rest.get('/todo', (req, res, ctx) => {
    return res(ctx.json(todos), ctx.delay(1000));
  }),
  rest.post('/todo', async (req, res, ctx) => {
    const request = await req.json();
    const todo = request.todo;

    todos.push(todo);

    return res(ctx.json('success'), ctx.delay(1000));
  }),
];
