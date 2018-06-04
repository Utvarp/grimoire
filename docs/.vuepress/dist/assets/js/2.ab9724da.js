(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{52:function(e,t,a){"use strict";a.r(t);var o=a(0),s=Object(o.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"content"},[a("h1",{attrs:{id:"shows"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#shows","aria-hidden":"true"}},[e._v("#")]),e._v(" Shows")]),a("p",[e._v("Shows are the center of everything in Útvarp. This is where you specify what is on air at your station, and it's with this information that we can record podcast at the right time, create show logs, and more.")]),a("h2",{attrs:{id:"active-vs-archived-show"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#active-vs-archived-show","aria-hidden":"true"}},[e._v("#")]),e._v(" Active vs archived show")]),a("p",[e._v("Station managers can set a show either as active or archived. An active show is one that Útvarp will generate podcasts or logs for. In order to correctly generate reports and RSS feeds, you will "),a("strong",[e._v("not")]),e._v(" be able to delete a if there is still any podcasts or logs attached to it. In case of any error after archival, the recommenced workflow would be to archive the show, then recreate or duplicate it (see "),a("em",[e._v("duplicate an archived show")]),e._v(" below).")]),a("p",[e._v("An archived show will be kept in the system until all of its podcasts or logs have been removed, at which point it will be purged.")]),a("h3",{attrs:{id:"duplicate-an-archived-show"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#duplicate-an-archived-show","aria-hidden":"true"}},[e._v("#")]),e._v(" Duplicate an archived show")]),a("p",[e._v("When a show is archived, a buttons will appear at the top of its page: "),a("em",[e._v("duplicate this show")]),e._v(". It will recreate a show in the system, with the exact same informations as its source, and move the next occurence of the show (for recording and logs creation) at the next one after duplication.")]),a("p",[e._v("Use case for duplicating a show would be that there was an error in one that has already started, or the reactivation of a show that was cancelled. "),a("strong",[e._v("If you know that a show will be back on air at some point in the future, you should not archive it")]),e._v(", rather you should put it on hold, as explained in the section below.")]),a("h2",{attrs:{id:"rebroadcasts"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rebroadcasts","aria-hidden":"true"}},[e._v("#")]),e._v(" Rebroadcasts")]),a("p",[e._v("When a show has been created, station manangers will have the ability to add a "),a("em",[e._v("rebroadcast")]),e._v(" to it. This feature will automatically link a rebroadcast's log to it's parent broadcast's so that station managers and show hosts do not have to redo their log for each rebroadcasting the show.")]),a("p",[e._v("You can add as many rebroadcast you want for a show. You only need to give the system two information: after how many days after the official show is the rebroadcast taking place, and at which hour.")]),a("p",[e._v("Adding a rebroadcast will "),a("strong",[e._v("not")]),e._v(" record a new podcast. This feature is intended only for show logs.")]),a("h2",{attrs:{id:"putting-a-show-on-hold"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#putting-a-show-on-hold","aria-hidden":"true"}},[e._v("#")]),e._v(" Putting a show on hold")]),a("p",[e._v("Station managers can put an active show on hold. Doing so will halt the recording of any episode and creation of logs "),a("em",[e._v("until the specified date")]),e._v(" (inclusively). If you want to put a show on hold indefinitly, you should be archiving the show.")]),a("h2",{attrs:{id:"create-show"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#create-show","aria-hidden":"true"}},[e._v("#")]),e._v(" Create show")]),a("p",[e._v("From this page, you can add a show to the system.")]),a("p",[e._v("Please be aware in order to correctly insure that past shows logs and reports are generated as faithfully as possible, "),a("em",[e._v("you cannot edit a show after it has been added to the system")]),e._v(". (See "),a("em",[e._v("active vs archived show")]),e._v(" above.)")]),a("h3",{attrs:{id:"show-informations"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#show-informations","aria-hidden":"true"}},[e._v("#")]),e._v(" Show informations")]),a("p",[e._v("The "),a("em",[e._v("show information")]),e._v(" is basic infos that we need in order to make things run smoothly.")]),a("ul",[a("li",[a("strong",[e._v("Name")]),e._v(" is the name of this show.")]),a("li",[a("strong",[e._v("Start time")]),e._v(" is the time at which the show start on air. "),a("strong",[e._v("Make sure you enter the time in the specified 24h format")]),e._v(" For example: "),a("code",[e._v("21:34")]),e._v(". That the hour (21, a.k.a 9 pm), followed by a colon, followed by the minutes.")]),a("li",[a("strong",[e._v("Duration")]),e._v(" is the number of minutes that the show run over the air.")]),a("li",[a("strong",[e._v("Syndicated")]),e._v(" is needed for CRTC reports to tell the difference between a show who is "),a("em",[e._v("local content")]),e._v(" (produced locally by your station), or not.")]),a("li",[a("strong",[e._v("Target group")]),e._v(" is needed for CRTC reports so you can show which "),a("em",[e._v("ethnic group")]),e._v(" or "),a("em",[e._v("language")]),e._v(" the show is addressed to.")])]),a("h3",{attrs:{id:"rss-specific-informations"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rss-specific-informations","aria-hidden":"true"}},[e._v("#")]),e._v(" RSS specific informations")]),a("p",[e._v("If your station has the podcasting service enabled, you will see this section appear. You will see contextual information to help you corrctly fill each fields. "),a("strong",[e._v("You should not leave any of those fields empty")]),e._v(" in order to insure maximum compatibility with major podcasting software and providers (iTunes Store, Google Play Store, etc.).")]),a("p",[e._v("Some of those fields could also be used in reports.")]),a("h3",{attrs:{id:"recurrence"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#recurrence","aria-hidden":"true"}},[e._v("#")]),e._v(" Recurrence")]),a("p",[e._v("This section will establish the recurrence of the show. If it's daily, every 3 weeks and until "),a("a",{attrs:{href:"https://en.wikipedia.org/wiki/Back_to_the_Future_Part_II",target:"_blank"}},[e._v("October 21, 2015")]),e._v(", this is where you set it up.")]),a("p",[e._v("If you have a show that does not fit into the current recurrence options, please contact us!")])])}],!1,null,null,null);t.default=s.exports}}]);