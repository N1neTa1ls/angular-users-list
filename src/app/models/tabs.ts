import { ITab } from "./tabs.model";

export const TABS: ITab[] = [
  {
    id: 0,
    title: 'Все'
  }, {
    id: 1,
    title: 'Активные',
    statusId: 1
  }, {
    id: 2,
    title: 'Заблокированные',
    statusId: 2
  }
];
