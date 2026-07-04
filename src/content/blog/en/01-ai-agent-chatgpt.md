---
title: "Why I Built My Own AI Agent Instead of Just Using ChatGPT"
slug: "ai-agent-chatgpt"
part: 1
totalParts: 6
series: "Building My Own AI Agent"
seriesSlug: "building-my-own-ai-agent"
description: "Agent vs. chatbot: why a background AI worker beats a promptable chat for daily routines — the experience of a special education teacher."
lang: "en"
keyword: "AI-agent"
date: "2026-06-09T00:00:00+03:00"
cover: "/images/blog/01-aamubriiffi.jpg"
coverAlt: "A phone on a bedside table showing a Telegram morning brief at 6:30 AM on a winter morning."
nosto: "I didn't need another chat. I needed a system that wakes up before me, knows what needs to be checked, and stays silent when everything is fine. In this series, I explain how I built one—and what I learned from mistakes I wish I'd made more cheaply. Part 1 covers the biggest difference: what sets an agent apart from a chatbot? 👇"
---

I am a professional special education teacher, and I teach information and communication technology. My workday consists of small routines: Wilma, itslearning, student meetings, Notion lists, housing company emails, and other administrative tasks.

Individually, none of these are hard. That’s exactly the problem. They consume time in such small slices that you don't notice until the afternoon, wondering where the workday went. The answer is usually: moving information from one place to another. A peak moment for humanity.

When I started using **AI** to ease these routines, I hit a wall quickly: a **chatbot** doesn't automatically reduce the work. Sometimes it just shifts the work to a new box, currently named "prompt."

The tool was better, but I still had to open it, formulate the request, and trigger the task myself. I wanted to stop having to remember to be efficient at every step.

In this series, I explain how I built my own **AI agent** for this. I also share eight mistakes that taught me more than any successful demo ever did. Let’s start with the basics: what is the difference between a chat and an agent?

## A Chat Waits, an Agent Acts

A **chatbot** is reactive. It waits for you to open it and tell it what you need. It can be a very helpful assistant, but you have to command it every single time.

An **agent** works differently. It can monitor agreed-upon things in the background and trigger when a predefined event occurs. It can react to a calendar entry, an incoming email, or a specific time of day.

The difference isn't necessarily in the language model. The same model can power both a chatbot and an agent. The practical difference is more mundane: **who initiates the work.**

For me, the difference shows in three areas:

- **Context is ready.** The agent already knows who you are, what you do, and what’s important to you. You don't have to explain the same background every morning.
- **An event triggers the task.** An agent can wake up from a calendar event, email, or time. Its operation doesn't depend on whether you remember to open an app.
- **The result goes to the right place.** You don't have to circulate between sources. The agent brings the essential information to the agreed channel when it's needed.

## The Morning Brief: One Message Is Enough

My clearest example of an agent is the **morning brief**. I named my agent Claus. Every morning, Claus sends me one concise Telegram message.

The message only contains things I need to react to:

- calendar anomalies for the day,
- overdue tasks,
- emails that require action.

The message doesn't contain a general status report, extra weather info "just in case," or a list of interesting news. It doesn't need to prove it's working. It needs to tell me what requires attention today.

Claus appears as a small crab character. When it starts work, the first line is often: "The crab is at work…". The morning greeting is: "Hi Matti 🦀". The detail is small, but the background system feels less cold when it has a bit of personality. This is also, admittedly, a way to give a cron job a crab. Everyone has their hobbies.

The best feature of the morning brief isn't what's in it. The best feature is what's left out.

Weather is mentioned only if it affects daily decisions, like whether to commute by bike instead of car. Emails are mentioned only if they lead to tasks. System status is reported only if something is broken. A good agent message isn't an exhaustive report. It only shows what is essential at that precise moment.

In the evening at 8 PM, Claus sends another message. It contains evening anomalies and tomorrow's reservations. In the morning, I need info about today; in the evening, I need info about tomorrow. The same info is useful in different ways at different times.

Practically, I receive two short messages a day. They total only a few lines of text. That is enough.

## Silence Is a Feature

I set one important rule for my agent immediately: it does not send "empty" status messages.

It does not send notifications like:

- "Nothing new today."
- "I checked your emails, everything is fine."
- "Everything looks normal."

If there is nothing to report, the agent stays silent.

The rule sounds small, but it became surprisingly important. Many digital assistants constantly acknowledge, confirm, and report. It looks useful, until you realize you’ve just built another notification channel on top of the old ones.

I wanted an agent that reduces noise, not creates more. That's why there's a threshold for messaging. When Claus sends a notification, I know the matter is worth checking.

## Where Should You Start Building Your Own Agent?

If you are considering building your own agent, don’t start too big. Don't try to build an assistant that handles everything, remembers everything, and saves your soul while at it. Start with one clear, recurring problem.

1. **Pick one pain point.** Find a routine that repeats often and wastes time. For me, it was assembling the morning status snapshot.
2. **Decide what triggers the agent.** Does it trigger on time, a calendar entry, an email, or another event?
3. **Decide where the agent communicates.** Does the message come to Telegram, email, Notion, or another channel?
4. **Define when the agent stays silent.** This is just as important as when the agent acts. Without this rule, you easily build just another notification channel.

## What I Learned

A **chatbot** is a tool you initiate. An **agent** is a coworker that can initiate itself in agreed situations.

An agent is only useful once it knows the situation, acts at the right time, and brings essential information to the right place. Just as important is that it knows when to stay silent when nothing essential has happened.

I didn't need a better chat. I needed a system that wakes up before me.

In the next part, I tell how my first attempt to build such an agent grew into 30 background services and three parallel task lists—and why that was a mistake.

---

**Building your own agent?** I can help design it so your first version doesn't turn into its own operating system. See my training resources: [seise.org/#koulutukset](https://seise.org/#koulutukset). And if you want to follow the series, [let’s network on LinkedIn](https://www.linkedin.com/in/mattiseise/).
