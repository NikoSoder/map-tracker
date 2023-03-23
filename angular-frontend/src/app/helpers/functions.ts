import { Map } from 'src/app/types/map.interface';

export function isMapAlreadyAdded(arr: Map[], val: string) {
  return arr.some((map) => val === map.map_name);
}
