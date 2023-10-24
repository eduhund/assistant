# Support Assistant

## How to use
Assistant — it is a self-deployment platform.

The minimum requirements are 1 core CPU, 512 Mb RAM, and 1GB of storage (the app saves the attachments locally).

To succeed, you need any machine with these requirements and installed NodeJS > 18.18.2 and supported npm. Beter is running on any VPS or other kind of server with the white IP. 

## Deployment

### Steps
1. Clone the repository `git clone https://github.com/eduhund/assistant.git`
2. Install dependencies `npm i`
3. Configure the .env file from the template
4. Run the application `npm start`

### External steps
1. Create a Telegram bot via the [BotFather](https://t.me/BotFather)
2. Create a Slack App for your workspace via the [Slack App Directory](https://slack.com/apps).
3. Create the MongoDB database [locally](https://www.mongodb.com/docs/manual/installation/) or via the [MongoDB Atlas](https://www.mongodb.com/atlas)

### Environment Variables

* **TELEGRAM\_TOKEN** — API token of the Telegram bot.
* **SLACK\_TOKEN** — Slack Bot token. Starts with *xoxb-*
* **SLACK\_APP\_TOKEN** — Slack App token. Starts with *xapp-*
* **SLACK\_SECRET** — Slack Bot secret. Deprecated and not using.
* **SLACK\_PORT** — Using for incoming events from Slack. Not using for WebSocket connection. Default is *9999*
* **SLACK\_CHANNEL** — Channel ID, where you want to receive new messages.
* **MONGO\_URL** — URL for local or Atlas database. The local default is *"mongodb://127.0.0.1:27017/"*
* **BOT\_DATABASE** — Database name. Prefer is *"assistant"*
* **SERVER_PORT** — Express server port for external events. Default is *9998*
* **DEFAULT\_LANG** — Default is *"ru"*
* **MACHINE** — Default is *"local"*
* **SLACK\_CHANNEL\_ID** — Slack channel ID for external logging
* **SLACK\_BOT\_TOKEN** — Slack Bot token for external logging

to be continued...