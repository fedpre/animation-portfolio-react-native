export enum ProjectScreens {
  SpotifyStickyHeader = 'SpotifyStickyHeader',
  LayoutAnimation = 'LayoutAnimation',
  SharedElementTransition = 'SharedElementTransition',
  OnboardingCarousel = 'OnboardingCarousel',
}

export type Project = {
  id: number;
  title: string;
  date: string;
  detailView: ProjectScreens;
};
