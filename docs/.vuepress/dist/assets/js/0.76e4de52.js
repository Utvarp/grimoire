(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{50:function(t,a,s){"use strict";s.r(a);var n=s(0),e=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"content"},[s("h1",{attrs:{id:"wordpress-plugin"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#wordpress-plugin","aria-hidden":"true"}},[t._v("#")]),t._v(" WordPress plugin")]),s("p",[t._v("Our WordPress plugin makes it a breeze to interact with the Útvarp API from your own WordPress site!")]),s("p",[t._v("Once installed, a new menu entry to your WordPress administration panel will appear under the name "),s("code",[t._v("Útvarp")]),t._v(". There you will find all of what is currently possible with the plugin.")]),s("h2",{attrs:{id:"setup"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#setup","aria-hidden":"true"}},[t._v("#")]),t._v(" Setup")]),s("p",[t._v("Look for the "),s("code",[t._v("options")]),t._v(" to input the two required values necessary for the plugin to work: "),s("code",[t._v("Api Key")]),t._v(" and "),s("code",[t._v("Station Identifier")]),t._v(". Both are available from your station's option page in Útvarp.")]),s("p",[t._v("Once those options are saved, you are ready to use the plugin!")]),s("h3",{attrs:{id:"staging-api"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#staging-api","aria-hidden":"true"}},[t._v("#")]),t._v(" Staging API")]),s("p",[t._v("This option is there for development purpose only. Unless specifically asked, this option should "),s("em",[t._v("always")]),t._v(" be set at "),s("code",[t._v("no")]),t._v(".")]),s("h2",{attrs:{id:"search-for-what-was-on-air"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#search-for-what-was-on-air","aria-hidden":"true"}},[t._v("#")]),t._v(" Search for what was on air")]),s("p",[t._v("Note: this requires a minimum knowledge of "),s("code",[t._v("javascript")]),t._v(", and a web developper will probably be needed on your part.")]),s("p",[t._v("The WordPress plugin provides an easy way for you to offer your listeners a way to query the database for what was played on air. It registers a small "),s("code",[t._v("jQuery")]),t._v(" scripts that needs only one "),s("code",[t._v("button")]),t._v(" and two "),s("code",[t._v("input")]),t._v(" and a "),s("code",[t._v("table")]),t._v(" for it to work it's magic. When called, it will query Útvarp's API and place the results in an HTML table and in a global javascript variable for your to use with more liberty.")]),s("p",[t._v("The table, button and inputs needs to be named as such, and needs not to be included within a "),s("code",[t._v("<form>")]),t._v(" field:")]),s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("--")]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("The")]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("date")]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("from")]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("when")]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("we")]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("start")]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("the")]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("search")]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("--")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("input")]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("type")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("date"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("id")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("utvarp-music-entries-search-date-from"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("--")]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("The")]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("date")]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("to")]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("when")]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("we")]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("end")]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("the")]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("search")]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("--")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("input")]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("type")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("date"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("id")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("utvarp-music-entries-search-date-to"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("--")]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("The")]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("button")]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("that")]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("will")]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("call")]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("the")]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("search")]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("--")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("button")]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("id")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("utvarp-search-music-entries-search-send"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("Send"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("button")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n"),s("span",{attrs:{class:"token comment"}},[t._v("\x3c!-- And the table that will display the results --\x3e")]),t._v("\n"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("table")]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("id")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("utvarp-results-table"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("tr")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("th")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("Datetime"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("th")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("th")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("Title"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("th")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("th")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("Artist"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("th")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("tr")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("table")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),s("p",[t._v("If the call is successfull, you will be able to see the result from Útvarp's global variable "),s("code",[t._v("utvarp.results")]),t._v(" and in the table. Note that you can style the table as you want, but it "),s("em",[t._v("needs")]),t._v(" to have the "),s("code",[t._v("id")]),t._v(" named correctly and the first row for headers set.")]),s("p",[t._v("The content of the global variable will look like this example:")]),s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{attrs:{class:"token comment"}},[t._v("// Outputting content to the console")]),t._v("\nconsole"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("log")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("utvarp"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("results"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{attrs:{class:"token comment"}},[t._v("// would output something like so when successfull")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),s("span",{attrs:{class:"token string"}},[t._v('"when"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v('"2018-08-01 14:00:34"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t"),s("span",{attrs:{class:"token string"}},[t._v('"song"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v('"Awikatchikaën"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t"),s("span",{attrs:{class:"token string"}},[t._v('"artist"')]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v('"Les Cowboys Fringuants"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t"),s("span",{attrs:{class:"token string"}},[t._v('"language"')]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v('"French"')]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),s("span",{attrs:{class:"token string"}},[t._v('"when"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v('"2018-08-01 14:04:58"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t"),s("span",{attrs:{class:"token string"}},[t._v('"song"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v('"In From The Storm"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t"),s("span",{attrs:{class:"token string"}},[t._v('"artist"')]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v('"Jimmy Hendrix"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t"),s("span",{attrs:{class:"token string"}},[t._v('"language"')]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v('"English"')]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])]),s("p",[t._v("If there is no results to the search, "),s("code",[t._v("utvarp.results")]),t._v(" will be "),s("code",[t._v("null")]),t._v(".")]),s("p",[t._v("With this data, you can then output to whatever format you would like to.")])])}],!1,null,null,null);a.default=e.exports}}]);