export type Optional<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;

export interface DrawerItem {
  id: number;
  label: string;
  icon: string;
  route: string;
}
