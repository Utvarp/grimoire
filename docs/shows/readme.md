# Shows
Shows are the center of everything in Útvarp. This is where you specify what is on air at your station, and it's with this information that we can record podcast at the right time, create show logs, and more.

## Active vs archived show
Station managers can set a show either as active or archived. An active show is one that Útvarp will generate podcasts or logs for. In order to correctly generate reports and RSS feeds, you will **not** be able to delete a if there is still any podcasts or logs attached to it. In case of any error after archival, the recommenced workflow would be to archive the show, then recreate or duplicate it (see _duplicate an archived show_ below).

An archived show will be kept in the system until all of its podcasts or logs have been removed, at which point it will be purged.

### Duplicate an archived show
When a show is archived, a buttons will appear at the top of its page: _duplicate this show_. It will recreate a show in the system, with the exact same informations as its source, and move the next occurence of the show (for recording and logs creation) at the next one after duplication.

Use case for duplicating a show would be that there was an error in one that has already started, or the reactivation of a show that was cancelled. **If you know that a show will be back on air at some point in the future, you should not archive it**, rather you should put it on hold, as explained in the section below.

<!-- It is important to note that **duplicating a show has an incidence on podcasts** as it will move any existing ones from the source to the newly created show. Meaning that the source's RSS will be be emptied and all of it's content will be made available in the _new_ show's feed. Concretly, it means that if you are actively using the source's RSS feed, you will have to check and update any sites and services that may be using RSS to access its podcasts. -->

## Rebroadcasts
When a show has been created, station manangers will have the ability to add a _rebroadcast_ to it. This feature will automatically link a rebroadcast's log to it's parent broadcast's so that station managers and show hosts do not have to redo their log for each rebroadcasting the show.

You can add as many rebroadcast you want for a show. You only need to give the system two information: after how many days after the official show is the rebroadcast taking place, and at which hour.

Adding a rebroadcast will **not** record a new podcast. This feature is intended only for show logs.

## Putting a show on hold
Station managers can put an active show on hold. Doing so will halt the recording of any episode and creation of logs _until the specified date_ (inclusively). If you want to put a show on hold indefinitly, you should be archiving the show.

## Create show
From this page, you can add a show to the system.

Please be aware in order to correctly insure that past shows logs and reports are generated as faithfully as possible, _you cannot edit a show after it has been added to the system_. (See _active vs archived show_ above.) 

### Show informations
The _show information_ is basic infos that we need in order to make things run smoothly.
- **Name** is the name of this show.
- **Start time** is the time at which the show start on air. **Make sure you enter the time in the specified 24h format** For example: `21:34`. That the hour (21, a.k.a 9 pm), followed by a colon, followed by the minutes.
- **Duration** is the number of minutes that the show run over the air.
- **Syndicated** is needed for CRTC reports to tell the difference between a show who is _local content_ (produced locally by your station), or not.
- **Target group** is needed for CRTC reports so you can show which _ethnic group_ or _language_ the show is addressed to.

### RSS specific informations
If your station has the podcasting service enabled, you will see this section appear. You will see contextual information to help you corrctly fill each fields. **You should not leave any of those fields empty** in order to insure maximum compatibility with major podcasting software and providers (iTunes Store, Google Play Store, etc.).

Some of those fields could also be used in reports.

### Recurrence
This section will establish the recurrence of the show. If it's daily, every 3 weeks and until <a href="https://en.wikipedia.org/wiki/Back_to_the_Future_Part_II" target="_blank">October 21, 2015</a>, this is where you set it up.

If you have a show that does not fit into the current recurrence options, please contact us!