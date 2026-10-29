export interface Coin {
  name: string;
  symbol: string;
  icon: string;
  price: number;
  dayChange: number;
  marketCap: number;
  // watch: boolean;
}
export interface Category {
  id: string;
  name: string;
}
export interface SortList {
  id: string;
  name: string;
}