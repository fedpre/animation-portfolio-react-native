export enum ProjectScreens {
  SpotifyStickyHeader = "SpotifyStickyHeader",
}

export type Project = {
  id: number;
  title: string;
  date: string;
  detailView: ProjectScreens;
};
