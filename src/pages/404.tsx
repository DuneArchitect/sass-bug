import React, { ReactElement } from 'react';
import { withPrismicUnpublishedPreview } from 'gatsby-plugin-prismic-previews';

function NotFoundPage(): ReactElement {
  return (
    <>
      <h1>404: Not Found</h1>
      <p>You just hit a route that doesn&#39;t exist...</p>
    </>
  );
}

export default withPrismicUnpublishedPreview(NotFoundPage);
