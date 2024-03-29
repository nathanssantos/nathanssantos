type Repository = {
  id: number;
  name: string;
  description?: string;
  stargazers_count: number;
  language: string;
  license?: {
    key: string;
    name: string;
    spdx_id: string;
  };
  homepage?: string;
  html_url: string;
};

type Job = {
  key: string;
  name: string;
  logo: string;
  url: string;
  tags: string[];
};
