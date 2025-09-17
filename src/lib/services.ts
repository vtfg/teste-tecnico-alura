import { Post, Pagination, APIError } from "@/lib/models";

interface GetPostsParams {
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
  page = 1,
}: GetPostsParams): Promise<GetPostsResult> {
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
