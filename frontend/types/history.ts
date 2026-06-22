export interface HistoryItem {
  _id: string;

  location: string;

  purpose: string;

  start_date: string;

  end_date: string;

  cache_enabled: boolean;

  created_at: string;
}

export interface HistoryResponse {
  success: boolean;

  page: number;

  limit: number;

  total: number;

  results: HistoryItem[];
}