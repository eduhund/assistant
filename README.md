# Chacha | Support Assistant

![ChaCha](https://github.com/eduhund/chacha/assets/141957200/6911c285-6d7c-4b83-952e-75c926af4ee8)

## About

Your clients or users use instant messengers (WhatsApp, Skype, LINE, WeChat, Viber, Snapchat, Telegram and others) to send messages, and you conduct a dialogue using a separate Slack channel. You can add to Slack channelas many users as you like. Either one person or a whole group of specialists can respond to messages from your users and clients.

## Who are the users? 

Medium, medium-large (but not really large), small businesses in any area. Any in which some kind of communication with users is built.

## What problems does ChaCha solve?

1. ChaCha creates a familiar/natural communication environment between the user and the business. Both on one side and on the other. There are no more forms to fill out on the site, no need to leave/fill out your personal data anywhere and then wait for days for a support employee to contact you. ChaCha simplifies not only the process of communication itself, but also the moment of entering it.
2. Businesses no longer need to study (spend resources on studying) any third-party services to build communication with users. There is no need to deploy an endless number of tools for different tasks. The entire dialogue is conducted in the usual communication channel for business.
3. There is no chance of missing something important on the business side.
4. The necessary qualified support is provided in time and from various specialists. Sometimes even at the same time. One window principle.
5. Tool flexibility. The ability to customize the tool to suit the needs of a specific business.

## Prepairing

### Configure your channels

We integrated two familiar channels. For users - Telegram, for us - Slack.
In general, a bunch of services can be anything (anything that supports external management). We chose Telegram because, in comparison with other services, it has more integration options than other similar social networks (WhatsApp, Skype, LINE, WeChat, Viber, Snapchat, etc.).

You need to have both channels. If you don't have them, you can create one by the links below:

1. Create a Telegram bot via the [BotFather](https://t.me/BotFather)
2. Create a [Slack Workspace](https://slack.com/get-started#/createnew) and an App for your workspace via the [Slack App Directory](https://slack.com/apps).

### Check the environment
Chacha — it's a self-deployment platform.

The minimum hardware requirements are 1 core CPU, 512 Mb RAM, and 1GB of storage (the app saves the attachments locally).

Besides, you need to have NodeJS > 18.18.2 installed and a compatible npm version.

The last thing, you need a database. For now, Chacha works with MongoDB. You can connect your existing database or create a new one [locally](https://www.mongodb.com/docs/manual/installation/) or via the [MongoDB Atlas](https://www.mongodb.com/atlas)

## Deployment

### Steps
1. Clone the repository `git clone https://github.com/eduhund/chacha.git`
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

### Support & Donation

Our team creates fully open-source tools and solutions for developers, designers, and those who teach these subjects. You can help us: share this tool, contribute to it, or donate to us to support future work. 

[![Donate](https://img.shields.io/badge/Donate-PayPal-green.svg)](https://www.paypal.com/donate/?hosted_button_id=7Z9A2PABQU584)
