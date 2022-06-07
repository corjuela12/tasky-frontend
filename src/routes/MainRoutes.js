import React from 'react';
import {
  PublicPage, HomePage, AboutPage, DummyPage, TaskPage,
} from '../pages';

const MainRoutes = {
  path: '/',
  element: <PublicPage />,
  children: [
    {
      path: 'home',
      element: <HomePage />,
    },
    {
      path: 'about',
      element: <AboutPage />,
    },
    {
      path: 'dummies',
      element: <DummyPage />,
    },
    {
      path: 'task',
      element: <TaskPage />,
    },
  ],
};

export default MainRoutes;
