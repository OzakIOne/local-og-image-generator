interface CliOptions extends ImageProps {
  output?: string;
  help?: boolean;
  font?: string;
  type: ImageType;
}

type ImageProps = {
  title?: string;
  description?: string;
  moto?: string;
  author?: string;
  authorURL?: string;
  tags?: string[];
};

type ImageType = 'doc' | 'blog' | 'default';

export type {CliOptions, ImageProps, ImageType};
