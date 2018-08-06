# WordPress plugin

Our WordPress plugin makes it a breeze to interact with the Útvarp API from your own WordPress site!

Once installed, a new menu entry to your WordPress administration panel will appear under the name `Útvarp`. There you will find all of what is currently possible with the plugin.

## Setup
Look for the `options` to input the two required values necessary for the plugin to work: `Api Key` and `Station Identifier`. Both are available from your station's option page in Útvarp.

Once those options are saved, you are ready to use the plugin!

### Staging API
This option is there for development purpose only. Unless specifically asked, this option should _always_ be set at `no`.

## Search for what was on air
Note: this requires a minimum knowledge of `javascript`, and a web developper will probably be needed on your part.

The WordPress plugin provides an easy way for you to offer your listeners a way to query the database for what was played on air. It registers a small `jQuery` scripts that needs only one `button` and two `input` and a `table` for it to work it's magic. When called, it will query Útvarp's API and place the results in an HTML table and in a global javascript variable for your to use with more liberty.

The table, button and inputs needs to be named as such, and needs not to be included within a `<form>` field:

```html
<-- The date from when we start the search -->
<input type="date" id="utvarp-music-entries-search-date-from">

<-- The date to when we end the search -->
<input type="date" id="utvarp-music-entries-search-date-to">

<-- The button that will call the search -->
<button id="utvarp-search-music-entries-search-send">Send</button>

<!-- And the table that will display the results -->
<table id="utvarp-results-table">
    <tr>
        <th>Datetime</th>
        <th>Title</th>
        <th>Artist</th>
    </tr>
</table>
```

If the call is successfull, you will be able to see the result from Útvarp's global variable `utvarp.results` and in the table. Note that you can style the table as you want, but it *needs* to have the `id` named correctly and the first row for headers set.

The content of the global variable will look like this example:

```javascript
// Outputting content to the console
console.log(utvarp.results);

// would output something like so when successfull
{
	"when": "2018-08-01 14:00:34",
	"song": "Awikatchikaën",
	"artist" : "Les Cowboys Fringuants",
	"language" : "French"
},
{
	"when": "2018-08-01 14:04:58",
	"song": "In From The Storm",
	"artist" : "Jimmy Hendrix",
	"language" : "English"
},
```
If there is no results to the search, `utvarp.results` will be `null`.

With this data, you can then output to whatever format you would like to.
