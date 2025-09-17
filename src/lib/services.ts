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

interface GetPostByIdParams {
  id: string;
}

interface GetPostByIdResult {
  error?: APIError;
  data?: Post;
}

export async function getPostById({
  id,
}: GetPostByIdParams): Promise<GetPostByIdResult> {
  try {
    const response = await fetch(process.env.API_URL + "/api/posts/id/" + id);

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
      data: json.post,
    };
  } catch (error) {
    return {
      error: "unexpected",
    };
  }
}

interface GetRelatedPostsParams {
  currentPostId: string;
  category: string;
  tags: string[];
}

interface GetRelatedPostsResult {
  error?: APIError;
  data?: {
    posts: Post[];
  };
}

export async function getRelatedPosts({
  currentPostId,
  category,
  tags,
}: GetRelatedPostsParams): Promise<GetRelatedPostsResult> {
  try {
    const params = new URLSearchParams({
      limit: "9",
    });

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

    const posts = json.posts as Post[];

    // Only include posts with the same category or at least one tag in common, excluding the current post
    const filteredPosts = posts.filter((post) => {
      if (post.id === currentPostId) {
        return false;
      }

      return (
        post.category.slug === category ||
        post.tags.some((tag) => tags.includes(tag.slug))
      );
    });

    return {
      data: {
        posts: filteredPosts.slice(0, 3),
      },
    };
  } catch (error) {
    return {
      error: "unexpected",
    };
  }
}
