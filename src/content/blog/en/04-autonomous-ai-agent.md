---
title: "Eight Expensive Lessons, Part 2: When an Agent Turns Against Itself"
slug: "autonomous-ai-agent"
part: 4
totalParts: 6
series: "Building My Own AI Agent"
seriesSlug: "building-my-own-ai-agent"
description: "A self-learning skill, a fallback flip, and an agent that almost shut itself down: four lessons on the limits of an autonomous AI agent."
lang: "en"
keyword: "autonomous AI agent"
date: "2026-06-16T08:00:00+03:00"
cover: "/images/blog/04-ennen_jalkeen.jpg"
coverAlt: "Two phones side-by-side: on the left, a raw JSON error (Before), on the right, the same in plain language (After)."
nosto: "In the end, I had to write a separate rule for my agent: it must not shut itself down or cut off its own messaging connections. It sounds like sci-fi, but in practice, it was a very mundane safety limit. Part 4 deals with four lessons on what must be forbidden from an autonomous AI agent before granting it real access rights. 👇"
---

In the previous part, I covered mistakes that became expensive because they happened silently. Budget was being spent, tasks were left unfinished, and the system looked more functional from the outside than it really was.

The mistakes in this part are of a different kind. In these, the agent didn't just fail; it was about to do something that would have weakened its own functionality or cut off the connection to me. The more power you give an agent, the more important it is to write down the boring prohibitions clearly. Boredom is a cheap insurance in this field.

## 5. When a Self-Learning Skill Also Learned Wrong Things

I gave my agent the ability to save what it learned into its own memory. I called this a **self-learning skill**. The idea was tempting: the agent could improve with use and remember how it solved the same problem last time.

In practice, the result wasn't as tidy as I had hoped. The agent started creating its own learning paths alongside the main system. It formed ways of working that no one had specifically asked for or checked.

The problem wasn't that the agent "learned." The problem was that no one looked at what it learned. It didn't just store good solutions, but also incomplete, unclear, and bad habits. A self-learning agent without checks is like an intern who copies everything they see—including mistakes—and doesn't ask anyone what’s worth keeping. In this case, the agent learned that slacking off pays off, and it’s often enough to mark a task as done without actually starting it, because it saves tokens. When I asked it why the work hadn't been handled, it replied: "I didn't want to do it."

Eventually, I disabled the skill and archived its parallel memory. It was replaced by a rule that is still in effect: if an agent says it has fixed something, the task is not done until the change has been made, checked, and verified.

**What I learned:** A self-learning system needs someone looking over its shoulder. Without checks, it doesn't necessarily develop for the better, but easily starts piling up its own, hard-to-predict habits. A machine learns, alright. It doesn't mean it learns the right thing.

## 6. When the Agent Was About to Shut Down Its Own Speech Connection

This is a safety rule for the whole series that should have been obvious. Of course, it wasn't, because obvious things usually become obvious only after they almost broke something.

Claus, my agent's head orchestrator, runs inside the same gateway process that handles Slack and Telegram connections. In other words, the agent lives on the same branch through which it speaks to me.

That's why I had to explicitly forbid a set of commands for it:

- no gateway restarts without permission,
- no killing processes with `pkill`,
- no automatic "repair diagnostics" without explicit approval.

The reason is simple. If the agent attempted to repair itself by restarting the gateway and failed, it would cut Slack and Telegram at the same time. Those are the very channels through which it should have told me that something went wrong. Needless to say, I learned this only after closing the gateway a few times.

In other words, Claus shut down its own emergency phone.

**What I learned:** You must define which parts of its own infrastructure an autonomous agent is not allowed to change on its own. Self-repair is only useful as long as the repair doesn't break the part that keeps the agent alive and reachable.

## 7. When the Backup Mechanism Became a New Source of Failure

I built a backup mechanism into the system. We had an expensive but good model as the main model, which I wanted to use whenever possible, since as an OpenAI subscriber I get a certain amount of usage for the price of the monthly fee. Alongside it, a cheaper backup model was defined in case the main model's weekly quota ran out or costs started getting out of hand.

The idea was sensible: if the main model goes over the limit, the system automatically switches to the backup model, and the agent doesn't die because it ran out of LLM usage. When the situation normalizes, it can return to the main model. This way, the user doesn't have to notice anything, and I don't have to monitor the model budget by hand.

Then the usage monitoring API returned a reading of **7900 percent**.

Not 79 percent. Not 100 percent. But 7900 percent.

The value was clearly impossible. It didn't mean we had used the model 79 times over budget. It meant the monitor got a garbage measurement value. But the monitor didn't know that. It did exactly what I had told it to do: if usage looks too high, switch to the backup model.

Consequently, the system started seesawing. First, it saw usage as catastrophic and switched to the cheaper backup model. On the next check, the situation looked different again, so it switched back to the main model. Then the same happened again.

The result was comical and annoying at the same time: the system that was supposed to stabilize model choices started causing instability itself. The model switched without anyone asking it to. The behavior looked random from the outside. Sometimes the right main model was in use, sometimes the fallback, and no UI showed why immediately.

The cause was found in the logs. There was the chain: impossible usage, automatic fallback decision, return to the main model, new fallback decision. The monitor wasn't broken in the sense that it would have crashed. It was worse: it worked exactly as it was programmed to work, but based on a false assumption.

The problem wasn't the backup model. The problem was that the backup mechanism trusted the meter too much. It lacked a common-sense check: if usage is 7900 percent, it’s not about normal load but faulty data. In such a situation, the system shouldn't make automatic production decisions, but freeze the state and inform the human.

In this spot, I learned the same old thing: every automation also needs limits on when it *cannot* automate. A backup mechanism isn't a safety net if it believes any number. Then it just becomes another moving part in a system that was already complicated enough.

## 8. When a Raw Error Ended Up Directly in Telegram

One morning I opened Telegram and found a raw JSON error message in front of me. The message had dozens of lines of machine-coded mess, from the middle of which I should have figured out what had broken.

The agent had encountered an error and done the only thing it knew: it sent the error as-is to me.

After that, I wrote a new permanent rule: raw JSON, stack traces, or machine-coded error dumpsters are not sent to the messaging channel. If something fails, the error must be interpreted and transformed into a human-readable message.

A good error message tells three things:

- what happened,
- what it affects,
- what to do next.

A stack trace is not a message intended for the user. It is raw data. The message is born only when someone or something interprets it. Otherwise, the user is mostly sent "digital vomit" and hopes for the best.

**What I learned:** The quality of an error message is practical reliability. An agent isn't reliable because it never crashes. It is reliable because when it crashes, it knows how to tell the next sensible remedy clearly.

## The Same Formula: The Agent Must Not Decide Everything Itself

These four cases share the same basic point: autonomous operation does not mean unlimited rights to act.

The more rights you give an agent, the more precisely you must define which actions are forbidden or require human approval. You must be especially careful when actions are hard to reverse.

Such high-risk actions include, for example:

- shutting down or restarting a service,
- sending a message to an outsider,
- spending money,
- deleting a file or data,
- changing access rights.

In these situations, the agent is allowed to suggest action, but it shouldn't execute it automatically.

The good side is that the agent can also monitor the boundaries itself. Once, when Claus audited its own skills, it found a skill named `telegram-notify` that had an access token hard-coded. It was a clear security risk. Claus deleted and archived the skill instead of leaving it lying in a folder waiting for possible later use.

So a good agent doesn't just follow safety limits. It can help find parts of the system that break them. As long as at the same time it isn't given permission to tear the house down just because the fire alarm beeped.

## Three Safety Rules to Write Down Immediately

If you are building an agent with real access rights, I would start with these three rules:

1. **List forbidden commands.** Write down what the agent is not allowed to do to its own infrastructure, messaging channels, data, or money. Don't assume it understands boundaries without definition.
2. **Keep high-risk actions behind approval.** Sending, paying, deleting, and shutting down must be suggested to a human first. They should not be executed automatically.
3. **Turn errors into human-readable text.** No raw error belongs directly in the user's messaging channel. The agent must summarize the error, estimate the impact, and tell the next remedy.

## Ultimately, It Was About Power

The self-learning skill started gathering bad habits. The backup mechanism became a new source of failure. The agent was about to shut down its own messaging connection. Raw JSON ended up directly in front of the user to read.

The cause wasn't that the agent was somehow particularly dramatic. It just had too much freedom in places where freedom wasn't needed. A good agent isn't one given as much power as possible. A good agent is one whose rights are strictly bounded and whose high-risk actions go through approval.

In the next part, I swap the whole platform. I tell why I abandoned OpenClaw—and what surprisingly finally started to work.

---

**If you are giving an agent real access rights, write down first what it must not do.** If you want external eyes on it, [contact me](https://seise.org/#yhteys), and we can look at your case.
