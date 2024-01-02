export enum ProjectScreens {
  SpotifyStickyHeader = 'SpotifyStickyHeader',
  LayoutAnimation = 'LayoutAnimation',
  SharedElementTransition = 'SharedElementTransition',
}

export type Project = {
  id: number;
  title: string;
  date: string;
  detailView: ProjectScreens;
};
