import { rest } from 'msw';

const todos: string[] = ['투두 리스트 만들기'];

export const todoHandlers = [
  rest.get('/todo', (req, res, ctx) => {
    return res(ctx.json(todos));
  }),
  rest.post('/todo', async (req, res, ctx) => {
    const request = await req.json();
    const todo = request.body.todo;

    todos.push(todo);

    return res(ctx.json('success'));
  }),
];
