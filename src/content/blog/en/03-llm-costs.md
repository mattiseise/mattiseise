---
title: "Eight Expensive Lessons, Part 1: When AI Fails Silently"
slug: "llm-costs"
part: 3
totalParts: 6
series: "Building My Own AI Agent"
seriesSlug: "building-my-own-ai-agent"
description: "22% of my weekly AI budget burned in one night. Four expensive and silent mistakes from building my AI agent — and what I learned."
lang: "en"
keyword: "LLM-costs"
date: "2026-06-11T08:00:00+03:00"
cover: "/images/blog/03-karkaavat_kustannukset.jpg"
coverAlt: "Laptop dashboard with a token usage graph peaking in red — skyrocketing AI costs."
nosto: "In one night, a background task consumed 22 percent of my weekly AI budget—without warning and without a visible error message. It wasn't an isolated exception but one of four expensive mistakes where the problem wasn't crashing, but silence. Part 3 deals with an agent's most dangerous defect: its ability to fail so neatly that no one notices anything. 👇"
---

When building agents, the best memory anchors usually don't come from times when everything went right. They come from times when the system did the wrong thing, too expensive of a thing, or didn't do anything at all—and still looked perfectly satisfied with itself from the outside.

I accumulated eight of these. This part covers the first four. They were different mistakes, but the same trouble kept repeating: I found out about the problem too late or not at all.

In the next part, we move to slightly nastier cases: those where the agent didn't just fail silently but was close to sawing off its own branch.

## 1. When 22 Percent of the Weekly Budget Burned in One Night

This was the most expensive lesson in the whole series. Not a spectacular catastrophe, but an ordinary automation error where a counter performs its own little show overnight.

One AI session was scheduled to wake up in the background every two hours and do a brief status update. The idea was quite sensible: the agent checks the situation regularly and only tells me if something requires attention.

The problem was what happened with every wake-up. Every two hours, the agent had to check that it was awake and the system was working. Because I had messed up, the agent loaded my entire memory system into context: 376 megabytes of vector data. Because the process couldn't finish this task—originally designed as a routine helper—on the slow local model, it switched by itself, without asking me, to the most expensive model available just to get it done. It just happened to consume my AI budget insanely fast.

A single run didn't look dramatic. But when the same heavy run repeated four times overnight, the cost grew quickly. By 8 AM, 22 percent of the entire weekly AI budget was already used.

Technically, nothing was broken. The system did exactly what I had told it to do. It just did it in a way thousands of times more expensive than I had intended. A small difference if you happen to care about money.

**What I learned:** Memory cannot be an invisible cost. Every automatic wake-up that loads a large context is a recurring bill. The cost must be visible per run, not just at the end of the month. The monthly report is, at that point, mostly a death notice.

## 2. When the Wrong Python Version Made Errors Seem Random

My email automation used a package called `agentmail`. The package was installed in the system's Python 3.9 environment. The agent, however, ran some tasks in a virtual environment using Python 3.11.

This created exactly the type of error that you can spend your life fighting in vain. Sometimes scripts worked, other times they crashed with a `module not found` error. The problem looked random, even though it wasn't. Different runs used different Python interpreters and different package paths.

I spent hours looking for the fault in the agent and its reasoning. The real cause was much more mundane: the same old `PATH` and environment problem that has plagued software development for decades. AI didn’t remove it. It just gave it a new hat.

**What I learned:** The hardest bugs in an AI agent often don't have to do with the AI. They have to do with the environment where the agent operates. A script running in the background might use a different user, a different path, and a different Python version than the environment where you tested the code.

## 3. When Firecrawl Failed but Reported Success

One scheduled job searched the web for properties for sale in the neighborhood. One day, all 16 searches failed because the command `firecrawl` could no longer be found on the machine.

Mere failure wouldn't have been serious. What was serious was how the script behaved after the failure. It returned return code 0, which means "successful execution" to the operating system.

On the dashboard, everything looked fine. No alert came. No one saw that the searches had been broken for days. I found the problem only by accident when I opened the logs due to an entirely different matter. A classic monitoring solution: a human happens to look at the right place.

**What I learned:** Failure must appear as failure. A script that doesn't do its job but returns success is more dangerous than a script that crashes properly. It doesn't just fail; it hides the information about the failure.

## 4. When the Receipt Parser Got Stuck in a Timeout for Five Days

A background task intended for receipt processing (`expense-parse-hourly`) tried to parse ten receipts in one go. Each receipt required its own language model call, and one call usually took 20–30 seconds.

On paper, this looked like a small task. In practice, ten receipts took about 250 seconds, but the background task had a 120-second timeout. That’s why the run got cut off every time before the work could finish.

The same error continued for five days. Outputs were redirected to `/dev/null`—the digital trash can. The dashboard looked red but didn't say why the task failed. Five days of receipts remained unprocessed, even though the problem would have been easy to fix immediately if the error message had been visible.

**What I learned:** A background task must be sized according to the timeout, and error messages must end up in a place from which they can be seen. I would have fixed the problem in a few minutes if I had seen even one clear timeout message. But I was "clever" and sent it to the trash.

## Bonus: When a Cheaper Model Made the System More Expensive

I also tested the local **Gemma 4** model as a cheaper alternative for background tasks. The idea was tempting: your own model on your own machine, no cloud costs for every run.

In practice, the solution wasn't as economical as it first looked. The local model was about 37 times slower than the cloud model. A task done by the cloud model in 6 seconds took 3 minutes and 35 seconds for the local model. Furthermore, the result was shorter and less useful.

Savings per run were less than $0.001. In exchange, the automation slowed down significantly and became less reliable as the run often didn't finish within the 120-second time limit. This led to receipts not reaching processing much more often.

**What I learned:** Cheaper inference doesn't always make the system cheaper. The price of a token is just one line on the invoice. If the model does the work too slowly, degrades the result, or adds uncertainty, the cost shifts elsewhere. Usually to human labor time, which is a convenient way to lie to yourself about having saved money.

## The Same Trouble: Errors Happened Invisibly

These cases share one thing: none of them alerted me in time. Budget was spent, searches were not performed, receipts were not processed, and environment errors looked random. For a long time, the system seemed almost normal from the outside.

That’s why the worst defect in an agent isn't that it crashes. Crashing can even be a service if it stops the work and makes the problem visible.

What's more dangerous is silent failure: the system continues to operate, looks successful, and yet leaves the essential work undone.

From this, one of my rules was born later: **errors are allowed, but they must not be hidden.** The agent is allowed to be silent when everything is fine. It is not allowed to be silent when something is broken.

## Three Protections That Would Have Saved a Lot of Trouble

If I were to rebuild these parts, I would start with three protections:

1. **Measure cost for every run.** Every automatic wake-up is a recurring bill. Set a limit for the cost; alert immediately if a single run exceeds it.
2. **Make failure visible and success silent.** Error logs should not be redirected to the trash. A return code of 0 means success, and it must be based on actual success.
3. **Keep the execution environment unambiguous.** Use one Python version, one virtual environment, and clearly defined paths. Many agent bugs that look random are caused by the fact that the background task is not running in the same environment as your testing.

## Ultimately, It Was About Visibility

These four mistakes were expensive in different ways. In one case budget burned, in another the execution environment broke, in the third failure disguised itself as success, and in the fourth, work remained stuck behind a timeout for five days.

An agent's reliability isn't born from never failing. It is born from noticing failure immediately.

Silent success is a good feature. Silent failure is a risk.

In the next part, we move from costs to survival: four situations where the agent was about to turn against itself.

---

**Are you building an agent and want to avoid these same pitfalls?** I do this work as a consultant and trainer—[ask for a quote for an agent sprint](https://seise.org/#yhteys).
