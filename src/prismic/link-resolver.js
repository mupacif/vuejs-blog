/**
 * To learn more about Link Resolving check out the Prismic documentation
 * https://prismic.io/docs/vuejs/beyond-the-api/link-resolving
 */

export default function (doc) {

  if (doc.isBroken) {
    return 'not-found'
  }

  if (doc.type === 'blog_home') {
    return '/vuejs-blog'
  }

  if (doc.type === 'section') {
    return '/vuejs-blog/' + doc.uid
  }

  return 'not-found'
}
