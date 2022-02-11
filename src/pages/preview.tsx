import React, { ReactElement} from 'react';
import { withPrismicPreviewResolver } from 'gatsby-plugin-prismic-previews';

function PreviewPage(): ReactElement {
  return (
    <div>
      <h1>Loading preview…</h1>
    </div>
  );
}

export default withPrismicPreviewResolver(PreviewPage);
