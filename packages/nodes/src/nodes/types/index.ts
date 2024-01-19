interface DefaultProps extends DocProps {
  moto?: string;
}

interface BlogProps extends DocProps {
  author?: string;
  authorURL?: string;
  tags?: string[];
}

type DocProps = {
  title?: string;
  description?: string;
};

export type {DefaultProps, BlogProps, DocProps};
