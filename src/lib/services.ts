import { Post, Pagination, APIError } from "@/lib/models";

interface GetPostsParams {
  category?: string;
  page?: number;
}

interface GetPostsResult {
  error?: APIError;
  data?: {
    posts: Post[];
    pagination: Pagination;
  };
}

export async function getPosts({
  category,
  page = 1,
}: GetPostsParams): Promise<GetPostsResult> {
  if (category) {
    return getPostsByCategory({ page, category });
  }

  return getAllPosts({ page });
}

interface GetAllPostsParams {
  page?: number;
}

async function getAllPosts({
  page = 1,
}: GetAllPostsParams): Promise<GetPostsResult> {
  const params = new URLSearchParams({
    page: page.toString(),
    limit: "6",
  });

  try {
    const response = await fetch(
      process.env.API_URL + "/api/posts?" + params.toString()
    );

    if (!response.ok) {
      switch (response.status) {
        case 400:
          return {
            error: "out_of_bounds",
          };
        case 404:
          return {
            error: "not_found",
          };
        case 500:
          return {
            error: "unexpected",
          };
      }
    }

    const json = await response.json();

    return {
      data: json,
    };
  } catch (error) {
    return {
      error: "unexpected",
    };
  }
}

interface GetPostsByCategoryParams {
  category: string;
  page?: number;
}

async function getPostsByCategory({
  category,
  page = 1,
}: GetPostsByCategoryParams): Promise<GetPostsResult> {
  const params = new URLSearchParams({
    page: page.toString(),
    limit: "6",
  });

  try {
    const response = await fetch(
      process.env.API_URL +
        "/api/posts/category/" +
        `${category}?${params.toString()}`
    );

    if (!response.ok) {
      switch (response.status) {
        case 400:
          return {
            error: "out_of_bounds",
          };
        case 404:
          return {
            error: "not_found",
          };
        case 500:
          return {
            error: "unexpected",
          };
      }
    }

    const json = await response.json();

    return {
      data: json,
    };
  } catch (error) {
    return {
      error: "unexpected",
    };
  }
}
