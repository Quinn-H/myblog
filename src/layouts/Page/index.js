import React, { PropTypes } from 'react'
import Helmet from 'react-helmet'
import invariant from 'invariant'
import { BodyContainer, joinUri } from 'phenomic'

import Loading from '../../components/Loading'
import NavigationMenu from '../../components/NavigationMenu'

import styles from './index.css'

const Page = (
  {
    isLoading,
    __filename,
    __url,
    head,
    body,
    header,
    footer,
    children
  },
  {
    metadata: { pkg }
  }
) => {
  invariant(
    typeof head.title === 'string',
    `Your page '${__filename}' needs a title`
  )

  const metaTitle = head.metaTitle ? head.metaTitle : head.title

  const meta = [
    { property: 'og:type', content: 'article' },
    { property: 'og:title', content: metaTitle },
    {
      property: 'og:url',
      content: joinUri(process.env.PHENOMIC_USER_URL, __url)
    },
    { property: 'og:description', content: head.description },
    { name: 'twitter:card', content: 'summary' },
    { name: 'twitter:title', content: metaTitle },
    { name: 'twitter:creator', content: `@${pkg.twitter}` },
    { name: 'twitter:description', content: head.description },
    { name: 'description', content: head.description }
  ]

  let link = []
  if (head.latex) {
    link = [
      {'rel': 'stylesheet', 'href': 'https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/katex.min.css', 'async': undefined}
    ]
  }
  return (
    <section className={styles.page}>
      <Helmet
        title={metaTitle}
        meta={meta}
        link={link}
      />
      <NavigationMenu />
      <main className={styles.main}>
        {
          head.title &&
          <h2 className={styles.heading}>{ head.title }</h2>
        }
        { header }
        {
          isLoading
          ? <Loading />
          : <BodyContainer>
            { body }
          </BodyContainer>
        }
        { children }
        { footer }
      </main>
    </section>
  )
}

Page.propTypes = {
  isLoading: PropTypes.bool,
  children: PropTypes.node,
  __filename: PropTypes.string,
  __url: PropTypes.string,
  head: PropTypes.object.isRequired,
  body: PropTypes.string,
  header: PropTypes.element,
  footer: PropTypes.element
}

Page.contextTypes = {
  metadata: PropTypes.object.isRequired
}

export default Page
