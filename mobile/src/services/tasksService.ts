import { z } from 'zod';

import apiClient from './apiClient';
import { Task } from '../types/tasks';

const taskSchema = z.object({
  id: z.string(),
  title: z.string(),
  completed: z.boolean(),
});

const tasksResponseSchema = z.array(taskSchema);

export const tasksService = {
  async fetchTasks(): Promise<Task[]> {
    const { data } = await apiClient.get('/tasks');
    return tasksResponseSchema.parse(data);
  },
};
