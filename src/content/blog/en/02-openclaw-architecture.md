---
title: "When Your AI Assistant Becomes an Operating System: The OpenClaw Lesson"
slug: "openclaw-architecture"
part: 2
totalParts: 6
series: "Building My Own AI Agent"
seriesSlug: "building-my-own-ai-agent"
description: "OpenClaw grew into 30 launchd tasks and three task lists. The story of why my AI assistant turned into a mini operating system."
lang: "en"
keyword: "AI-agent architecture"
date: "2026-06-09T14:00:00+03:00"
cover: "/images/blog/02-gateway_alhaalla.jpg"
coverAlt: "A terminal on a laptop showing a long list of launchd services, some red; next to it, a phone full of Telegram alerts."
nosto: "I built my first AI assistant out of 30 background services and three parallel task lists. In the end, each part had its own way of breaking—and one forgotten watchdog sent 63 useless alerts in a row. Part 2 explains why an overly complex architecture can be an agent's worst enemy. 👇"
---

In the previous part, I described an agent that wakes up before me and stays silent when everything works. In this part, I share what I built first with **OpenClaw**—and why it eventually got out of hand.

The problem wasn't that the AI couldn't do it. The problem was that I built the system out of too many moving parts. This isn't a very noble story. Mostly one where a person creates extra maintenance work for themselves and calls it "architecture" for a while.

## A Good Foundation: OpenClaw

My first agent platform was **OpenClaw**. It is a self-hosted **Node.js** gateway that connects messaging apps like Telegram and Slack to AI agents.

The idea was good, and the platform was competent. The problem wasn't OpenClaw itself. The problem was what I built on top of it.

## First Automation: Gym Reservations

OpenClaw's strength was best seen in my first automation. I built it to reserve my group exercise classes.

I attend **Les Mills** classes at Urheiluhallit: **BodyCombat** on Sundays, Mondays, and Thursdays, and **BodyPump** on Sundays. The reservation window opens only about 15 days in advance. If you want a spot, you have to remember to log in on the right evening every week.

This is exactly the type of small routine that isn't hard but is easily forgotten—often just when the class fills up.

This could have been done from the start with a simple script. Yet, I made it an agent task first. In hindsight, that was quite reasonable because the problem wasn't understood well enough at the beginning.

## Phase 1 — The Agent Figures Out How the Site Works

The booking system didn't have a ready-made API. So, I had the agent figure out how the site works using **Playwright** browser automation.

The agent went through login, saved the session, found the correct booking path, and grabbed the web requests used to book and cancel.

It wouldn't have made sense to hard-code this step beforehand. First, I had to understand what the site actually does. In such an unclear initial phase, an agent is useful: it explores, experiments, and compiles a working model of a messy system.

## Phase 2 — The Agent Makes Reservations via Conversation

Once the booking path was clear, I built the **booking-management** skill. After that, it was enough to say to Claus: "book next week's classes."

Claus calculated the dates, made the reservations, and briefly acknowledged in Telegram:

- 🥋 BodyCombat reserved
- 🏋️‍♀️ BodyPump reserved

If a class was full or wasn't found in the system (e.g., due to holidays), Claus didn't present the situation as an error. It relayed the facts as they were: "❌ Reservation couldn't be made. The class isn't in the calendar."

I set one security rule immediately. Cancellations cannot be cancelled. That's why Claus always asks for confirmation before cancelling a reservation.

## Phase 3 — The Agent Becomes a Monitor

At this point, I noticed an essential thing.

Once the booking was working, I dismantled the solution back into a regular automation. The result was four scheduled background jobs that don't need a language model at all. For example, on Saturday at 5:01 PM, the machine reserves the next Sunday's BodyCombat, and at 6:11 PM, the same day's BodyPump.

This kind of solution is cheap, fast, and reliable. It doesn't consume tokens and doesn't need reasoning every week. The machine does the same boring thing at the same time. That is where it is at its best, and it doesn't need to be called Claus.

However, the agent didn't disappear. Its role changed. It moved above the actual automation to monitor the result.

Every Monday at 10 AM, a separate check goes through the booking history and verifies that the week's classes are truly reserved. The agent executes the logic, checks the result, and compares it to the expected outcome. If everything matches, it stays silent. A message comes only if something deviates from expectations.

This became a model I’ve used later as well:

- let the agent figure out an unclear problem,
- turn the completed solution into regular automation,
- leave the agent to monitor that the result is correct.

An agent is too expensive to do the same routine reservation every week. It is useful when something goes wrong and the deviation needs to be identified.

## But I Didn't Stop There: Thirty Services

The original goal was to build an assistant. Gradually, it grew into a mini operating system with one user and one administrator: myself. An excellent organizational model if you like meetings with yourself.

Everything ran as **macOS launchd services**. It’s the same mechanism the OS uses to start background processes. There were watchdogs, calendar syncs, email syncs, Notion syncs, and backups.

The number of services grew to about thirty. Each service had its own state, its own log, and its own way to break. Since they were separate, each also had to be maintained and monitored separately.

At this point, automation no longer reduced the load. It started producing its own maintenance work.

## Three Inboxes for the Same Person

The biggest mess arose in task management. For the same purpose, I built three parallel systems:

- **Mission Control** — a browser-based task list and system dashboard
- **MC2** — a second version that came alongside the first but didn't replace it
- **Claus–Cowork-bridge** — a markdown file-based communication method where Claus wrote requests into one file and another AI session, **Cowork**, answered to another

Practically, I had three inboxes for the same work. The systems didn't talk well with each other, so the same task could exist simultaneously in Notion, Mission Control, MC2, the markdown bridge, and a notes file.

When I updated one place, the others became outdated. Task management was supposed to reduce the need to remember, but I added a new layer of bookkeeping.

From this, a clear rule remained: **if an agent has many inboxes, the human ends up with more work, not less.**

## The Old Dog That Barked Its Own Corpse

The next problem was related to **watchdogs**. A watchdog is a service tasked with monitoring another service and alerting if it crashes. Used correctly, it’s useful. Used incorrectly, it becomes a new source of disturbance.

When I later moved to a new system, the old OpenClaw watchdog accidentally stayed on. It checked an endpoint that no longer existed and concluded that the gateway was down.

Then it sent a message to Telegram: "🔴 OpenClaw Gateway Down!". Then it sent the same message again. And again. Eventually, 63 alerts came in a row.

The old dog barked its own corpse, and no one had told it that it was already dead.

From this, a simple rule remained: **dismantling automation is just as important as building it.** When a system is replaced by a new one, the old one must be shut down properly. Otherwise, zombies roam around monitoring ghosts.

## Configuration Isn't Always Source Code

Another classic error related to OpenClaw's scheduled jobs. They lived in a `jobs.json` file that looked like a regular settings file. I assumed it could be edited by hand.

I opened the file, fixed the scheduling, and saved the change. In the evening, everything looked great.

In the morning, the change was gone.

The cause was clear later. The gateway kept scheduled jobs in its own memory and rewrote the `jobs.json` file based on its internal state when restarting. The file was not the system's "truth." It was just a saved view of the program's runtime state.

The manual change looked successful but disappeared on the first restart.

From this, a permanent rule remained: **scheduled jobs are created through the UI or command line, not by editing files manually.** If a system has its own runtime state, editing the file is like trying to fix a reflection with a razor.

## What Did These Errors Have in Common?

None of these issues resulted from the AI not being smart. They were ordinary systems errors:

- a forgotten background process,
- runtime state,
- distributed truth,
- too many places for the same information.

In an agent system, such errors are especially tricky because they happen in the background. A standard application crash is often visible in front of the user. An agent can break at night, seemingly continue to work, and tell about the problem in the morning either with 63 messages or not at all. Both are bad user interfaces.

## What I Learned

OpenClaw was a good platform, but I built too much on top of it: 30 services, three task lists, and a group of watchdogs, each with its own way to fail.

The more moving parts I added, the more places for silent failure were created. Complexity wasn't the mandatory price for efficiency. It was a bill the system started sending every day.

**An agent should be built as simply as possible—and complexity added only where it's truly useful.**

In the next part, we’ll move to concrete errors: eight situations where this machinery was about to empty my wallet or break itself. I’ll start with the most expensive one—how 22 percent of the weekly AI budget was consumed in one night.

---

**Do you have your own 30-service monster?** I can help you dismantle the agent architecture into something simpler before it starts sending you its own greetings at night. My current tool for this is the Hermes agent system: [agenttisprintti](https://seise.org/#koulutukset).
