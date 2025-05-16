import type { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/characters-list',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: 'characters-list', component: () => import('pages/CharactersList.vue') },
      {
        path: 'character/:id',
        name: 'character-details',
        component: () => import('pages/CharacterDetails.vue'),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
