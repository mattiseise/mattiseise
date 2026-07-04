---
title: "The Agent System Isn't a Project But a Process: What I Learned This Year"
slug: "ai-agent-lessons"
part: 6
totalParts: 6
series: "Building My Own AI Agent"
seriesSlug: "building-my-own-ai-agent"
description: "What a year of building my own AI agent taught me about reliability, memory, and trust—and what is still honestly incomplete."
lang: "en"
keyword: "AI-agent lessons"
date: "2026-06-18T08:00:00+03:00"
cover: "/images/blog/06-mika_toimii.jpg"
coverAlt: "Laptop screen with two columns: green 'What Works' and yellow 'Problems' (reliability debt)."
nosto: "A year of building my own AI agent taught me at least this: the system isn't finished once and for all. In this part, I collect what I learned about reliability and trust—and list honestly what is still incomplete. If I don't want my agent to hide mistakes, I can't do so myself either. 👇"
---

I’ve spent over a year building, tearing down, and rebuilding my own AI agent. This is the last part of the series, so I will aggregate here the things that remained after the journey—and the points where work is still incomplete.

One observation emerged more stubbornly than others: **an agent system is not a project with a clear completion date**. It lives, changes, and requires attention even after the first functional version is in use. This isn't a failure. It is what happens when a system is used in real daily life rather than just in a demo that works for exactly three minutes.

## Lessons Learned

### 1. Proof Is Better Than a Good Feeling

My most important document isn't any single skill, integration, or automation. It is the **reliability protocol**.

Claus has only three allowed statuses:

- **not done**
- **probably fixed**
- **fixed**

The word **fixed** must not be used without evidence. If the issue is a user-facing error, the acknowledgment requires proof: for example, a screenshot, a successful check, or another clear validation. A mere estimate that "this should work now" is not enough. I’ve heard that sentence from computers too many times, usually just before the next error.

My favorite line in the reliability protocol is: **optimism is not evidence**.

In practice, this shows up in communication like this. When Claus had raised a crashed service back to its feet, it didn't announce: "fixed, should work now." Instead, the message sounded like this: "MC is up again. Validation: restart-script passed, Tailscale points to the right port, and localhost responds HTTP 200."

The difference might sound small, but in practice, it determines whether I dare give the agent more responsibility next time. The first message is a wish. The second shows what was actually checked.

### 2. Memory Must Be Browseable

If you cannot verify what the agent "remembers," you will never dare delegate anything truly important to it.

That’s why I switched the black box to searchable memory. I didn't want a system that merely claims to remember things. I wanted a system whose memory I can open, read, and evaluate myself.

Trust isn't born from the agent sounding convincing. Trust is born from being able to verify if it’s right. This is more boring than promises of an omniscient assistant, but boredom is a feature here.

### 3. A Simpler System Breaks Less Often

One gateway, searchable memory, and a few narrowly defined skills work better in practice than thirty separate services, each with its own watchdog and own way to break.

Every time a new part is added to the system, a new place where something can break is added too. And if failure happens in the background, it can remain unnoticed for a long time.

Complexity is not just the price of performance. It is also a risk that usually starts showing exactly when the system should be operating imperceptibly.

### 4. Silent Failure Is the Worst Failure

Failure is not the worst thing that can happen in an agent system. The worst is that the failure remains hidden.

I’ll take one clear, analyzed error message over absolute silence. This is the same rule I gave my agent and which I try to follow myself: **errors are allowed, but they must not be hidden**. The agent is allowed to be silent when everything is fine. It is not allowed to be silent when something is broken.

Silent failure is dangerous because it looks like success or at least normal operation. That’s exactly why it’s hardest to notice and often the most expensive to fix.

## What Was Incomplete—and What Has Already Been Fixed

If I don't want to hide errors, I don't want to hide incompleteness either. At the same time, it would be dishonest to leave the image that all listed problems are still in the same state. Some of them have already been corrected. Some have been bounded. Some are still annoyingly present.

Here, incompleteness doesn't just mean missing features or a "would be nice someday" list. It’s about **reliability debt**: parts where the system cannot yet be fully trusted without verification.

### Token and Model Leaks Have Been Tamed

At one point, costs were created from places not visible at a glance: cron job model fields, script-specific provider settings, running sessions, and fallbacks.

For this, monitoring was added to the system. Now path routes are checked separately, automatic run costs are monitored more closely, and notifications come from suspicious model selections. It’s not pretty, but works better than the previous model where the invoice told the truth in hindsight.

Information technology is sometimes multilayered stacked suspicion. In this case, suspicion was quite justified.

### Fallback Has Been Shackled on Purpose

Automatic model switching is no longer free to do whatever it wants. The 7900% usage rate described in Part 4 destroyed confidence in that mechanism quite thoroughly.

The fix wasn't making the fallback more intelligent and courageous. The fix was duller: automatic switching was restricted, sanity checks were added to metrics, and in an unclear situation, the system must rather freeze the state and inform a human than switch models on its own.

In other words, the system now has more of a handbrake. That is a good thing. Not all safety mechanisms need to be spectacular. Some just need to be obstacles preventing the machine from being too self-confident.

### Legacy OpenClaw Lives Yet in Some Spots

The UI and gateway are now in Hermes, but not everything old vanished with a single cut. Part of the automations still runs old OpenClaw scripts in the background.

This has been dismantled, but not entirely. The difference to before is that the old part is no longer invisible. It is identified, bounded, and gradually replaceable. That is a significantly better situation than the old watchdog barking at a dead gateway for 63 messages.

### Memory has Moved toward Browsability

The searchable vault is now the primary memory. It is a big change compared to the old black box where one had to just trust that the agent remembers correctly.

The old vector store still cannot be claimed as fully buried, though. For instance, email mining and some of the old content live there still. Therefore, the most honest phrasing is still this: **the black box is being replaced by markdown-based memory**. The direction is correct, but one shouldn't hold a funeral for the old memory yet.

### Cron Jobs Are More Visible, but Not Yet Beautiful

The situation with cron jobs is better than before. Silent runs are actually silent, errors are attempted to be interpreted for a human, and costs are monitored more closely.

Still, the whole isn't yet something understood in one glance. Part of the jobs are regular scripts without an agent, part use a language model, part show provider fields they don't actually use, and part of the scripts use their own environment variables.

This is better than before, but not neat. Too often the problem is still found only when someone asks: "why was there a bill for this?" Usually, that someone is me, with a slightly tighter tone of voice.

### Task System Boundaries Are Better

Kanban, Notion, and automatic agent tasks are now distinguished much more clearly than in the OpenClaw era. Kanban is intended for automated agent work. Notion and other task lists are more for things I must handle myself.

That doesn't mean the boundary is perfect. The same thing can sometimes still end up in the wrong place or two places. But the problem is no longer that same mess of three parallel inboxes I wrote about in Part 2.

Now the problem is subtler: boundaries are better, but not fully idiot-proof. And if a system isn't idiot-proof, I will eventually find that idiot.

### External Services Remain External Services

Gym reservations, email, game collectors, calendars, and Notion all work only as long as tokens, cookies, and access rights stay in order.

This cannot be fixed entirely from within one's own system. It can only be made visible. That’s why error messages were changed to tell directly if a login needs renewal or if some service is waiting for a human. It doesn't remove dependency on external services, but it removes guesswork. That’s already a lot.

### True Self-Correction is Limited, Not Forgotten

The system can detect much and report much. It can also correct some things. But safe automatic correcting is still intentionally limited.

The reason is clear: an agent must not saw off its own branch. Gateway restarts, model switches, and provider configurations are too high-risk actions to give fully automatically to an agent's care without human approval.

This isn't a deficiency but a conscious limitation. Reliability here is more important than spectacular autonomy.

## What Does This List Tell?

This list doesn't embarrass me. It is a useful meter, even if it looks a bit like I published my own renovation list online. On the other hand, that’s exactly what this is.

It tells that I am measuring the system from the right direction. I don't ask first which features are still missing. I ask where reliability, cost visibility, and architectural neatness are not yet at the level they should be.

A good sign is that part of the list has already turned into history. An even better sign would be that after the next year, the list is shorter and not just better named.

## Finally: A Coworker, Not a Boss or a Slave

One thing is easily left to the background unless stated aloud: my agent doesn't replace me.

It doesn't write my emails for me because I want to do it myself. It doesn't make decisions for me. It isn't a boss nor an automatic substitute for my own thinking.

Instead, it does something much more useful. It remembers things that I easily forget. It handles routines I don't like doing. And it stays silent when everything is fine.

That’s why I don't think of it as a boss or a slave. I think of it as a **coworker**.

If only one thought remained from this series, I would hope it to be this: **don't build AI that makes an impression—build AI you can trust**. And when it works well, let it be silent.

## What Remained?

A year with my own agent taught me that impressiveness is a poor metric. Much more useful are clear and honest statuses, searchable memory, simple structure, and error practices that don't let problems stay hidden.

The system will never be truly finished, nor does it need to be. It suffices that it earns trust a little at a time.

Thank you for reading the whole series.

---

**Do you want to build your own agent—or preferably avoid these pitfalls before you drive into them yourself?** [See training and agent sprints](https://seise.org/#koulutukset), [contact me](https://seise.org/#yhteys), or [let’s network on LinkedIn](https://www.linkedin.com/in/mattiseise/) if the topic interests you.
