import { IGatsbyImageData } from 'gatsby-plugin-image';

interface PrismicImageObject {
  readonly gatsbyImageData?: IGatsbyImageData;
}

const getImage = (imgObj: PrismicImageObject | null | undefined): IGatsbyImageData => {
  if (!imgObj || !imgObj.gatsbyImageData) {
    throw new ReferenceError('Missing gatsbyImageData!');
  }
  return imgObj.gatsbyImageData;
};

// eslint-disable-next-line import/prefer-default-export
export { getImage };
