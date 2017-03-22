module.exports = (config) => [
  require('stylelint')(),
  require('postcss-cssnext')({
    browsers: 'last 2 versions',
    features: {
      customProperties: {
        variables: {
          maxWidth: '60rem',
          colorPrimaryDark: '#107491',
          colorPrimary: '#007acc',
          colorSecondaryDark: '#22846C',
          colorSecondary: '#46BE77',
          colorNeutralDark: '#111',
          colorNeutral: '#8C8D91',
          colorNeutralLight: '#FBFCFC',
          colorText: '#555',
          backgroundColor: '#fff',
          primaryColor: '#0645ad',
          primaryColorLight: '#90caf9',
          primaryColorContrasted: '#fafafa',
          secondaryColor: '#E91E63',
          secondaryColorLight: 'F48FB1',
          pageWidth: '60rem',
          navBarWidth: '13rem'
        }
      }
    }
  }),
  require('postcss-reporter')(),
  ...!config.production ? [
    require('postcss-browser-reporter')()
  ] : []
]
