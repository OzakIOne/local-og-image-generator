// TODO faire un autre type pour le web
// TODO union prop
interface CliOptions {
  output?: string;
  help?: boolean;
  font?: string;
  type: ImageType;
}

type ImageType = 'doc' | 'blog' | 'default';

export type {CliOptions, ImageType};
