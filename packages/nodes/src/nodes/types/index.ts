interface DefaultProps extends DocProps {
  moto: string;
}

interface BlogProps extends DocProps {
  author: string;
  authorURL: string;
  tags?: string[];
}
// TODO z.infer<typeof docSchema>
// https://www.remotion.dev/docs/schemas
type DocProps = {
  title: string;
  description: string;
};

export type {DefaultProps, BlogProps, DocProps};
