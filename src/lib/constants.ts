import { APIError, Category, Tag } from "@/lib/models";

export const categories: Omit<Category, "description">[] = [
  {
    slug: "mobile",
    name: "Mobile",
  },
  {
    slug: "programacao",
    name: "Programação",
  },
  {
    slug: "frontend",
    name: "Front-end",
  },
  {
    slug: "devops",
    name: "DevOps",
  },
  {
    slug: "ux-design",
    name: "UX & Design",
  },
  {
    slug: "data-science",
    name: "Data Science",
  },
  {
    slug: "inovacao-gestao",
    name: "Inovação & Gestão",
  },
];

export const tags: Tag[] = [
  {
    slug: "tecnologia",
    name: "Tecnologia",
  },
  {
    slug: "programacao",
    name: "Programação",
  },
  {
    slug: "web",
    name: "Web",
  },
  {
    slug: "mobile",
    name: "Mobile",
  },
  {
    slug: "design",
    name: "Design",
  },
  {
    slug: "negocios",
    name: "Negócios",
  },
  {
    slug: "startup",
    name: "Startup",
  },
  {
    slug: "inovacao",
    name: "Inovação",
  },
  {
    slug: "frontend",
    name: "Frontend",
  },
  {
    slug: "backend",
    name: "Backend",
  },
  {
    slug: "devops",
    name: "DevOps",
  },
  {
    slug: "data-science",
    name: "Data Science",
  },
];

type APIErrorMessages = {
  [key in APIError]: string;
};

export const errorMessages: APIErrorMessages = {
  not_found:
    "Postagem, categoria ou tag não encontrada. Por favor, revise a sua pesquisa e tente novamente.",
  out_of_bounds:
    "Você tentou ir para uma página que não existe. Por favor, refaça a sua pesquisa.",
  unexpected: "Um erro desconhecido ocorreu. Tente novamente mais tarde.",
};
