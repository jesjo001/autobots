import { createAutobots } from '../services/AutobotService.js';

export const AutobotPresenter = {
  createAutobotsJob: async () => {
    await createAutobots();
  },
};
