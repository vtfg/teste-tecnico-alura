export type Post = {
  id: string;
  title: string;
  content: string;
  category: {
    slug: string;
    name: string;
    description: string;
  };
  tags: Tag[];
  imageUrl: string;

  author: string;
  likes: number;
  createdAt: Date;
};

export type Pagination = {
  currentPage: number;
  totalPages: number;
  totalPosts: number;
  postsPerPage: number;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
};

export type Category = {
  slug: string;
  name: string;
  description: string;
};

export type Tag = {
  slug: string;
  name: string;
};

export type APIError = "out_of_bounds" | "not_found" | "unexpected";
