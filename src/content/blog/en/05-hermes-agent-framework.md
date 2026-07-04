---
title: "From Chaos to Control: Why I Switched My Entire Agent Platform"
slug: "hermes-agent-framework"
part: 5
totalParts: 6
series: "Building My Own AI Agent"
seriesSlug: "building-my-own-ai-agent"
description: "I switched my agent from OpenClaw to Hermes: one gateway, searchable memory, and automations that finally work. From chaos to control."
lang: "en"
keyword: "AI-agent framework"
date: "2026-06-18T08:00:00+03:00"
cover: "/images/blog/05-kaaos_kontrolli.jpg"
coverAlt: "Two laptops: on the left, OpenClaw's messy red system diagram, on the right, Hermes' tidy green dashboard."
nosto: "I switched my agent's entire platform for one reason: I wanted to use the system, not repair it every other night. Moving from OpenClaw to Hermes meant a journey from 30 separate services to one gateway and from a black box toward searchable memory. Part 5 tells what changed—and why the best sign of success was that the system began to feel boring. 👇"
---

In the previous parts, I described how my first agent system grew too complex. It didn't collapse spectacularly with a fog machine, but started slowly inventing new ways to fail: some errors were expensive, some silent, and some outright dangerous.

This part reaches a turning point. At some point, I realized I wasn't building an assistant anymore. I was maintaining infrastructure. That’s a fancy word for saying that in the evenings, you get to stare at a log and wonder why your robot is sulking again.

## One Reason Was Enough

I switched from **OpenClaw** to **Hermes**. Hermes is an open-source agent framework by Nous Research, released early 2026. It is model-agnostic, meaning you can use different language models under it. Built on top of it are, among other things, persistent memory, automatic skills, multi-channel communication, and natural language scheduling.

Good features, yes. Still, they weren't the actual reason for the switch.

The reason was more mundane: **I wanted an agent I can use, not a system I’m forced to continuously repair.**

The rest followed from that decision.

## What Changed Concretely?

### One Gateway Replaced 30 Launchd Services

Hermes handles Telegram, Slack, scheduled jobs, and webhooks natively through one process. In the previous system, every channel, sync, and background job was its own service with its own watchdogs.

This significantly reduced the number of moving parts. And when there are fewer moving parts, there are fewer places where something can fail silently and wait for me to notice only from an invoice or empty inbox.

### From a Black Box toward Searchable Memory

The old vector database was the same 376MB cost-bomb I described in Part 3. It began to give way to markdown-based memory. I can browse the new memory in Obsidian the same way as regular notes.

This changed confidence a lot. The search is local, and every query isn't an API call. Even more essential is that I can verify what the agent "remembers" about me. I open a file and read it. Not particularly futuristic, but very reassuring.

Memory that cannot be verified isn't really memory. It's a matter of faith. For an agent you intend to delegate real tasks to, "faith" is a pretty bad user interface.

To be honest: the old vector store isn't completely gone yet. Email mining and some of the old content still live there. Searchable memory is, however, the direction this is heading. It’s a transition, not a finished end state.

### From Three Task Lists toward One View

Mission Control, MC2, and the markdown bridge mainly merged into one view. Most of that bookkeeping burden I described in Part 2 vanished.

The boundaries aren't yet perfect. The same task can sometimes still end up in two places. Yet the difference to the previous mess of three parallel inboxes is huge. Now, task management feels like a tool again, not like a side project eating its owner's time.

## When the System Started to Feel Real—i.e., Boring

The best successes didn't feel like magic. They felt like some previously annoying thing simply stopped being a problem.

### Gym Reservations Continued Without Drama

The gym reservation automation I described in Part 2 continued operating after the platform switch. Classes get reserved on their own, and the agent verifies every Monday that the week’s reservations went correctly.

Successful automation doesn't feel like magic. It just removes the same unnecessary click week after week. At this age, that counts as well-being.

### Trip Preparations Became Visible

For my London trip, the agent automatically created a card showing **67 percent complete**. It found the flights and listed what was still missing.

I didn't trust it immediately. Before implementation, 31 tests passed. Only after that did I dare let it track trip preparations for real. "Confidence" is a nice word, but tests are better.

### Emails Started Organizing Themselves

Incoming mail began to be sorted into categories, such as housing administration, OAJ matters, and other recurring topics. I no longer had to do the same sorting by hand.

This is a small thing, but exactly these small things decide whether an agent feels useful in daily life or just a fancy construction used once and avoided thereafter.

### Error Messages Became Understandable

The automatic free game collector is a good example of a small automation that quickly becomes annoying if it fails poorly.

Its task is simple: check services distributing time-limited free games and claim them automatically before the offer expires. In practice, this means, for instance, Epic Games' weekly freebies, Prime Gaming's perks, and GOG's campaign games.

Why even automate this? Because free games are often time-limited. They might not cost anything, but you must remember to grab them in exactly the right week. If you do it by hand, it’s just another small thing to check. If you automate it, the library grows in the background without me having to visit three different storefronts.

At least in theory.

In practice, services require logins, browser sessions, cookies, sometimes two-factor authentication, and sometimes UIs that change without warning. Automation, therefore, doesn't fail abstractly. It fails very mundanely: the browser isn't logged in, the button isn't found, the shopping window doesn't load, or the service just keeps waiting for the user.

The original problem was that such a failure appeared to me as machine-coded mess. The message channel might receive a 240-second timeout, a long stack trace, and technical lines about what went wrong inside Playwright or the browser. It was true, but useless.

I don't need to know first that `locator.click` waited for a button for 90 seconds or that the headless browser got stuck in a login screen. I need to know what to do next.

That’s why error messages were changed to human scale.

If Epic, Prime, or GOG is no longer logged in, the message must say directly: **login required**. If fetching an external Prime Gaming code fails, but internal Prime claiming succeeded, it must say that too. If one Epic game got stuck in the shopping window but another got claimed, the report must distinguish these instead of claiming the entire run failed.

This is the lesson from the previous part in practice: the error message must tell the next sensible remedy, not just show the machine is having a bad day.

A bad error message says:
> Timeout 240000ms exceeded.

A better error message says:
> Epic login has expired. Open the browser visibly and log in again.

The first is evidence that the automation crashed. The second is an instruction with which the human gets it back to work.

### Vacation Mode Reduced Useless Work Info

Another small but practically important improvement was vacation mode.

I’m writing this from a vacation. It means I don't want the same view from the system in the morning as I do on a workday. Normally, the dashboard can show work stuff: work calendar, commute weather, work-related reminders, and other things useful during the week. On vacation, they are mostly just noise.

For this, the dashboard's work menu disabled itself automatically for the vacation. The morning brief doesn't try to prepare me for a workday that isn't there. It shows general weather, not commute weather. It doesn't push work stuff in front just because it’s technically available.

This sounds like a small UI detail, but the difference is huge. A bad automation is eager in all situations. It shows everything it knows because it doesn't understand the situation. A better automation knows when to stay silent.

If I'm working, the work menu is useful. If I'm on vacation, the same menu is an unnecessary reminder of what I’m trying to be away from for a moment. An agent shouldn't just aggregate information. It needs to understand when info is better left unshown.

This is a small victory both technically and for my blood pressure. The system didn't become intelligent by adding a new view. It became better by knowing how to remove the wrong view at the right moment.

## But the Switch Wasn't a Magic Trick

I don't want to paint too clean a picture of the platform switch. That would be dishonest and also a bit suspicious.

It wasn't a clean cut where the old system vanished and a flawless new construction appeared. The chaos of OpenClaw has been dismantled significantly, and control has improved clearly. The transition is still incomplete.

Concretely, this incompleteness shows in three places:

- part of Hermes' scheduled jobs still run old OpenClaw scripts in the background,
- memory is moving from a black box to a searchable vault, but the work isn't fully finished,
- the limits of the task system are better than before, but not yet completely watertight.

This isn't a failure. It’s an intermediate stage, recognizing which is more useful than sweeping it under the rug.

When someone next time presents a "perfectly painless migration," it’s worth asking which part of the old one stayed alive under the surface. Something is almost always left behind. The most essential is to know what stayed—not pretend nothing did.

## What Would I Do Again?

If I were stuck again with an overly complex agent system, I’d do three things the same way again:

1. **Choose a platform that handles basic channels for you.** Don't build and maintain Telegram, Slack, and cron glue yourself if a ready framework does it more stably.
2. **Make memory searchable.** If you cannot open and read what the agent knows, you can never truly trust it nor fix it.
3. **Measure success with boredom.** The less the system requires your attention, the better it is. Excitement in automation is often a sign that something is broken.

## What Did I Learn?

I didn't switch platforms because Hermes would have been more fashionable. I switched because I wanted to stop being my system’s maintainer and start being its user.

This succeeded for the most part. One gateway, mostly searchable memory, and a smaller set of skills replaced the jungle of thirty services. A simpler version eventually did more useful work than the complex one.

At the same time, it’s honest to say that "chaos to control" didn't mean "chaos to finished." Control improved, but the system didn't become perfect. Regrettably, technical debt didn't understand to exit politely via the back door.

In the final part, I will summarize what’s left of all this—and what’s still honestly incomplete.

---

**Is your agent in real daily use or mostly as a demo?** If you want to build an agent you can live with instead of just keeping a presentation, [see my training resources and agent sprint](https://seise.org/#koulutukset), [contact me](https://seise.org/#yhteys), or [follow me on LinkedIn](https://www.linkedin.com/in/mattiseise/) if the topic interests you.
