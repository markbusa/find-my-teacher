import mutations from './mutations.js';
import actions from './actions.js';
import getters from './getters.js';

export default {
  namespaced: true,
  state() {
    return {
      lastFetch: null,
      coaches: [
        {
          id: 'c1',
          firstName: 'Olakoja',
          lastName: ' Adewale',
          areas: ['frontend', 'backend', 'career'],
          description:
            "I'm Olakojo and I've worked as a freelance web developer for years. Let me help you become a developer as well!",
          hourlyRate: 5000
        },
        {
          id: 'c2',
          firstName: 'Adewale',
          lastName: 'Ray',
          areas: ['frontend', 'career'],
          description:
            'I am Eric and as a freelance developer, I can help you get your first job or progress in your current role.',
          hourlyRate: 3000
        }
      ]
    };
  },
  mutations,
  actions,
  getters
};
