export enum ProjectScreens {
  SpotifyStickyHeader = 'SpotifyStickyHeader',
  LayoutAnimation = 'LayoutAnimation',
  SharedElementTransition = 'SharedElementTransition',
  OnboardingCarousel = 'OnboardingCarousel',
  TextBlur = 'TextBlur',
}

export type Project = {
  id: number;
  title: string;
  date: string;
  detailView: ProjectScreens;
};
