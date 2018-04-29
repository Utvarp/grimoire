# Station's options

Accessible to station owners and managers, the _station_ presents pages relating to managing your stations on Útvarp, and tasks that are not accessible to show hosts.

[[toc]]

## Station options
Here you will manage different options that will influence your usage of Útvarp and how we can communicate with you. 

### Basic informations
- **Contact email**: This is the email address where we will send any communication _related to the platform_ to, including, for example, notices of creation of show logs, or errors while recording a podcast.
- **Streaming URL**: This is the URL of your station's audio stream. We are using this to record podcasts.
- **Timezone**: Make sure the timezome is accuratly corresponding to your station' so we accuratly schedule our tasks.

### Podcasting options
Available if you are subscribed to the podcasting services.

- **Recording buffer**: In minutes (between 1 and 5), the amount of time that we will start the recording of podcast, _before_ the actual schedule. This is to make sure we don't miss anything important! For example, if a show is scheduled on a monday, from 5pm to 6pm, and the buffer is set to 5 minutes, the effective recording will last 1 hour and 5 minutes, recorded between 4:55pm and 6pm.

### Notification options
If you are using Slack, you can get multiple type of notification on what is happening for your station on the system. For that, you will need to create a webhook URL on your Slack account and add it here. [More informations on Webhooks on Slack here.](https://api.slack.com/incoming-webhooks)

### API Access
You will find your API token here. This is necessary for any interaction with our API from your own scripts, or the WordPress plugin. The key should be kept private!

If you think your API key has been compromised, you can reset it by clicking the corresponding options and clicking the save button at the bottom of the page. **You will need to change the old key with the new one in any places you are using it!**

## Import a station's log
To accurately generate reports of the content heard on the air, Útvarp uses the information hosts provides in their show logs, and the content of the logs your automation software for any off show entries.

At this moment, we are only supporting _Jazler Radio Star 2_'s daily log file. (Don't use Jazler? Contact us!) You will need to enter the day of the log file, and upload the file.

After you've uploaded the file, you will likely have to review some of the entries. You can read all about it in the [Reviewing the automation logs](/station/automation-logs-review) page.

## Generate a report
After selecting some date as range to generate a report from, you will get a result containing, for each days:

- Station informations.
- Number of entries in the entire day _and_ within the broadcast day.
- Percentage of language heard within the broadcast day.
- Percentage of CRTC categories within th broadcast day.
- A list of everything that has been entered in the system, including:
	- Time of entry.
	- Artist name and song title, if applicable.
	- A description of what was on air, if applicable.
	- The CRTC category of the entry.
	- The language of the entry.
	- A show information (including start and end time).