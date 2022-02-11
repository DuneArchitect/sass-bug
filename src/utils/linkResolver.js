exports.linkResolver = (doc) => {
  switch (doc.type) {
    case 'post':
      return `/post/${doc.uid}`;
    case 'page':
      return `/${doc.uid}`;
    default:
      return '/';
  }
};
