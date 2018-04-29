module.exports = {
  title: "Útvarp's Grimoire",
  description: 'Lets do some magic!',
  themeConfig: {
    sidebar: [
    	"/",
    	'/dashboard/',
    	'/station/',
    	'/users/',
      '/shows/',
      '/station/automation-logs-review/',
      '/shows/logs/'
    ]
  },
  markdown: {
  	toc: {
  		includeLevel: [2, 3] 
  	}
  }
}