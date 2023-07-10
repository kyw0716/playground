import { rest } from 'msw';
import { TodoType } from '../components/types';
import { v4 } from 'uuid';

const todos: TodoType[] = [];

export const todoHandlers = [
  rest.get('/todo', (req, res, ctx) => {
    return res(ctx.json(todos), ctx.delay(1000), ctx.status(200));
  }),
  rest.post('/todo', async (req, res, ctx) => {
    const request = await req.json();
    const todo = request.todo;
    const id = request.id;

    if (Math.random() > 0.8) {
      return res(ctx.json('failed'), ctx.status(400));
    }

    if (id) {
      const modifiedTodoIndex = todos.findIndex((todo) => todo.id === id);

      todos[modifiedTodoIndex].todo = todo;

      return res(ctx.json('modify todo success'), ctx.status(200));
    }

    todos.push({ id: v4(), todo });

    return res(ctx.json('add todo success'), ctx.status(200));
  }),
  rest.delete('/todo', (req, res, ctx) => {
    const todoId = req.url.searchParams.get('todoId');
    const deleteTodoIndex = todos.findIndex((todoData) => todoData.id === todoId);

    if (Math.random() > 0.3) {
      return res(ctx.json('failed'), ctx.status(400));
    }

    todos.splice(deleteTodoIndex, 1);

    return res(ctx.json('success'), ctx.status(200));
  }),
];
