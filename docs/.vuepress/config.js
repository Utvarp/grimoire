module.exports = {
  title: "Útvarp's Grimoire",
  description: 'Lets do some magic!',
  themeConfig: {
    sidebar: [
    {
        title: 'Intro',
        collapsable: false,
        children: [
          '/',
        ]
      },
      {
        title: 'Show hosts and station managers',
        collapsable: false,
        children: [
          '/dashboard/',
          '/show-logs/'
        ]
      },
      {
        title: 'Station managers only',
        collapsable: false,
        children: [
          '/station/',
          '/users/',
          '/shows/',
          '/reviewing-automation-logs/',
        ]
      }
    ]
  },
  markdown: {
  	toc: {
  		includeLevel: [2, 3] 
  	}
  }
}