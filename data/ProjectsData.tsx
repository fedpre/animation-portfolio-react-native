import { Project, ProjectScreens } from '../model/Project';

export const projectsData: Project[] = [
  {
    id: 1,
    title: 'Spotify Sticky Header',
    date: '2023-12-27',
    detailView: ProjectScreens.SpotifyStickyHeader,
  },
  {
    id: 2,
    title: 'Layout Animation',
    date: '2024-01-01',
    detailView: ProjectScreens.LayoutAnimation,
  },
  {
    id: 3,
    title: 'Shared Element Transition',
    date: '2024-01-02',
    detailView: ProjectScreens.SharedElementTransition,
  },
  {
    id: 4,
    title: 'Onboarding Carousel',
    date: '2024-01-19',
    detailView: ProjectScreens.OnboardingCarousel,
  },
  {
    id: 5,
    title: 'Text Blur',
    date: '2024-01-30',
    detailView: ProjectScreens.TextBlur,
  },
];
