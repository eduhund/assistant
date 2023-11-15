# Support Assistant
## About
The place for the best intro.

## Prepairing

### Configure your channels
Assistant can exchange messages between two platforms: Telegram and Slack. Your customers, or product users, can use your Telegram Bot to chat with you on the one hand, and on the other hand, your support team is able to make a dialog, using a separate Slack channel.

That's why you need to have both channels. If you don't have them, you can create one by the links below:

1. Create a Telegram bot via the [BotFather](https://t.me/BotFather)
2. Create a [Slack Workspace](https://slack.com/get-started#/createnew) and an App for your workspace via the [Slack App Directory](https://slack.com/apps).

### Check the environment
Assistant — it's a self-deployment platform.

The minimum hardware requirements are 1 core CPU, 512 Mb RAM, and 1GB of storage (the app saves the attachments locally).

Besides, you need to have NodeJS > 18.18.2 installed and a compatible npm version.

The last thing, you need a database. For now, the Assistant works with MongoDB. You can connect your existing database or create a new one [locally](https://www.mongodb.com/docs/manual/installation/) or via the [MongoDB Atlas](https://www.mongodb.com/atlas)

## Deployment

### Steps
1. Clone the repository `git clone https://github.com/eduhund/assistant.git`
2. Install dependencies `npm i`
3. Configure the .env file from the template
4. Run the application `npm start`

### Environment Variables

* **TELEGRAM\_TOKEN** — API token of the Telegram bot.
* **SLACK\_TOKEN** — Slack Bot token. Starts with *xoxb-*
* **SLACK\_APP\_TOKEN** — Slack App token. Starts with *xapp-*
* **SLACK\_SECRET** — Slack Bot secret.
* **SLACK\_PORT** — Using for incoming events from Slack. Default is *9999*
* **SLACK\_CHANNEL** — Channel ID, where you want to receive new messages.
* **MONGO\_URL** — URL for local or Atlas database. The local default is *"mongodb://127.0.0.1:27017/"*
* **BOT\_DATABASE** — Database name. Prefer is *"assistant"*
* **SERVER_PORT** — Express server port for external events. Default is *9998*
* **DEFAULT\_LANG** — Default is *"ru"*
* **MACHINE** — Default is *"local"*
* **SLACK\_CHANNEL\_ID** — Slack channel ID for external logging
* **SLACK\_BOT\_TOKEN** — Slack Bot token for external logging

## Using
to be continued...