interface PaginationResponse<T> {
  current_page: number;
  data: T[];
  from: number;
  last_page: number;
  last_page_url: string;
  links: Link[];
  next_page_url: string | null;
  path: string;
  per_page: number;
  prev_page_url: string | null;
  to: number;
  total: number;
}

interface DefaultResponse<T> {
  data?: T;
  code?: number;
  message?: string;
}

interface Link {
  url: string | null;
  label: string;
  active: boolean;
}