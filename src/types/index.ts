export interface character {
  id: string;
  name: string;
  status: string;
  species?: string;
  type?: string;
  gender: string;
  origin?: {
    name?: string;
    url?: string;
  };
  location?: {
    name?: string;
    url?: string;
  };
  image: string;
  episode?: string[];
  url?: string;
  created?: string;
}
export interface commonContext {
  onSearchText: (text: string) => void;
  toggleFav: (text: string) => void;
  onGenderChange: (text: string) => void;
  onStatusChange: (text: string) => void;
  onPageChange: (page: number) => void;
  isFav: (id: string) => boolean;
  searchText: string;
  gender: string;
  status: string;
  totalPages: number;
  currentPage: number;
  characters: character[];
  refresh: boolean;
  loading: boolean;
}
