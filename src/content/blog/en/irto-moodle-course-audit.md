---
title: "A Pedagogical Audit of a Moodle Course with One Command"
slug: "moodle-course-audit"
part: 1
totalParts: 1
series: "A Pedagogical Audit of a Moodle Course"
seriesSlug: "moodle-kurssin-pedagoginen-auditointi"
topic: "pedagogy"
description: "I built an agent that reads a Moodle course backup and reports whether goals, teaching and assessment are aligned. Auditing my own course revealed 83 duplicates and one monster section of 137 activities."
keyword: "Moodle course audit"
date: "2026-07-10T12:30:00+03:00"
---

Moodle courses in vocational education are rarely built in one go. They are layers of years: activities get added, old ones never get deleted, and at some point nobody remembers why section seven has three different versions of the same assignment.

I knew this applied to my own course too — I just didn't know how badly. To find out, I built an **audit agent** — and pointed it at my own course first.

## What the audit does

The idea is simple: the teacher takes a Moodle backup of the course (an .mbz file) and runs one command. The agent unpacks the backup, parses the course structure and runs three analyses:

- **Structure analysis**: section sizes, distribution of activity types, duplicates, broken links and empty sections.
- **Bloom's taxonomy distribution**: what levels of thinking the course tasks operate on — from recall and application to analysis and evaluation.
- **Alignment check**: does the course cover the competence requirements of the national curriculum, and do goals, teaching and assessment tell the same story.

The output is a PDF report. Crucially, the report is action-oriented, not descriptive: every finding comes with a concrete fix and a time estimate. The teacher doesn't get an essay about the state of the course — they get a prioritized work list.

## What my own course revealed

I audited my 45-credit web programming course. The numbers speak for themselves:

- **289 activities**, of which 142 theory pages and 126 assignments — the backbone was solid.
- **Bloom distribution skewed**: 43% of tasks at the application level, but only about 1% at the analysis level. The course taught students to do, but hardly to break down or justify.
- **One section had grown into a 137-activity monster** where student navigation was effectively a lottery.
- **83 duplicate activities** across sections — the pedagogical path wasn't clear even to its author.
- Five empty sections named after students, and a few broken links — sediment nobody had noticed.

> An audit that used to take a day of manual work now finishes in minutes — and the result is more honest, because a machine doesn't flatter its own course.

That last point is the most important one. Evaluating your own course by hand is hard for the same reason proofreading your own text is: the eye slides over the familiar. The agent doesn't know the course or its history, so it counts and reports without excuses.

The report's action list came pre-prioritized with time estimates: restructuring by competence requirement (4–6 h), resolving duplicates (3–4 h), fixing the Bloom balance with analysis-level tasks (8–12 h). Fixes could start where the impact on students is greatest.

## What the agent doesn't decide

The line here is the same as in everything else I do with AI in teaching: **the agent analyzes, the teacher decides.**

The report can say that analysis-level tasks make up 1%. It can't know that some of them happen in classroom teaching with no Moodle trace. It can count duplicates, but the teacher knows which ones are intentional parallel paths. That's why the report is a proposal, not a verdict — and why every action passes through the teacher's judgment before implementation.

The agent also never touches the course. It reads a backup, not the production environment, and changes nothing. No student data enters the analysis: the backup is taken without student information.

## Why this is worth doing

The questions that matter most for course quality and students' legal protection — does the course cover the requirements, does the assessment measure the right things, can students find their way — are exactly the ones there's never time to stop and check. The audit makes stopping cheap: when a check costs minutes instead of a day, you can do it every term.

The technical implementation and an example report are described in more detail on the [case page](/caset/moodle-kurssiauditointi) (in Finnish). And if you'd like a similar audit for your own courses or institution, that can be arranged — from a single course to an institution-level summary.
