# Users

This is where you manage the access of the actors of your station.

[[toc]]

## Creating or updating a user
From this page, you can add a user of your station to the system.

### Active vs passive users
When you create or update a user, you will have the option to make said user either _passive_ or _active_. _Passive_ users are created for information purpose only (for example to add to the _author_ field of a show RSS feed for podcasts), and will **not** be able to log in Útvarp. On the other side, an _active_ user will have the ability to log in and complete actions according to its role.

This is a switch that can be changed over time, so a user could be created _active_ and switched to _passive_ when its show is removed from the schedule, or could go from _passive_ account for a co-host to an _active_ one when said user takes over the show.

In either case, you will be asked to provide a password for the user. This is quirk of our system, but please make it as hard and <a href="https://www.random.org/passwords/" target="_blank">random</a> as possible.

### Association with a show
When you have added [one or more show](/shows) to the system, you will be able to associate your users to their shows. Doing so will insure their names gets added to corresponding logs, reports and RSS feeds.

Associating with a show is **not mandatory**, but should always be done in case the user gets assignd the "_host_" role (see below). You can also associate a user with _multiple_ shows by `ctrl+ckicking` multiple shows in the list.

### User roles
A user can be assigned to one of those predefined roles in Útvarp:

- `Owner`: this is the highest role for a station's user and usually only one of them has this role per station. The `owner` has the same set of power than a `manager`, plus the ability to change some administrative options and give another user the `owner` role.
- `Manager`: this is the role for a station _employee_. The `manager`s can create users, shows, moderate show logs and generate reports, in addition of being able to do what a `host` can.
- `host`: this is the lowest role un Útvarp. A `host` can see the shows that's been associated with its account, fill an episode's logs, and submit them for approval by a manager.