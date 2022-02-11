import { IGatsbyImageData } from 'gatsby-plugin-image';

interface PrismicImage {
  readonly gatsbyImageData?: IGatsbyImageData;
  dimensions?: { height: number; width: number } | null;
}

// eslint-disable-next-line import/prefer-default-export
export type { PrismicImage };
