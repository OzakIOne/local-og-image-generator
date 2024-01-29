import {BlogProps, DefaultProps, DocProps} from '@ozaki/nodes';

// TODO faire un autre type pour le web
// TODO union prop
interface CliOptions extends ImageOptions {
  output?: string;
  help?: boolean;
  font?: string;
}

interface ImageOptions extends BlogProps, DefaultProps, DocProps {
  type: ImageType;
}

type ImageType = 'doc' | 'blog' | 'default';

export type {CliOptions, ImageType, ImageOptions};
