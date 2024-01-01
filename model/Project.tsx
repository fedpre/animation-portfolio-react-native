export enum ProjectScreens {
  SpotifyStickyHeader = 'SpotifyStickyHeader',
  LayoutAnimation = 'LayoutAnimation',
}

export type Project = {
  id: number;
  title: string;
  date: string;
  detailView: ProjectScreens;
};
