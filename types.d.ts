interface Book {
  id?: number;
  title: string;
  author: string;
  genra?: string;
  rating?: number;
  total_copies: number;
  copies?: string;
  available_copies: number;
  description: string;
  color: string;
  cover: string;
  video: string;
  summary: string;
  isLoanedBook?: boolean;
}
