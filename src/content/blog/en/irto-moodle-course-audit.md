---
title: "How I Audited My Own Moodle Course with One Command"
slug: "moodle-course-audit"
part: 1
totalParts: 1
series: "A Pedagogical Audit of a Moodle Course"
seriesSlug: "moodle-kurssin-pedagoginen-auditointi"
topic: "pedagogy"
description: "I built an agent that reads a Moodle course backup and checks structure, Bloom levels and curriculum coverage. My own course got an honest report: 289 activities, 83 duplicates and one 137-activity section."
keyword: "Moodle course audit"
date: "2026-07-10T12:30:00+03:00"
cover: "/images/blog/rakentaja-tyopiste.jpg"
coverAlt: "A desk seen from above: hands on a keyboard and an ultrawide display."
---

Moodle courses in vocational education are rarely the result of a single design. They grow in layers: new activities get added, old ones are too dear to delete, and a couple of years later nobody remembers why section seven has three versions of the same assignment.

I knew my own course had some of this. I just didn't know how much.

## What the audit does

I built an **audit agent** that reads a Moodle backup (an .mbz file) and goes through the course from three directions:

- **Structure**: section sizes, duplicates, broken links and empty sections.
- **Bloom's taxonomy**: what levels of thinking the course tasks operate on — from recall and application to analysis and evaluation.
- **Alignment**: does the course cover the competence requirements of the national curriculum, and do goals, teaching and assessment tell the same story.

The output is a PDF report. The most important choice was that the report doesn't describe — it proposes: every finding comes with an action and a time estimate. I didn't want an essay about the state of my course. I wanted a work list.

## What it found in my course

I ran the audit on my 45-credit web programming course. The report told me, among other things:

- 289 activities, of which 142 theory pages and 126 assignments. The backbone was fine.
- 43 percent of tasks were at the application level, about one percent at the analysis level. The course taught doing, but hardly justifying.
- One section had grown to 137 activities. No student can find anything in that.
- 83 activities were duplicates across sections.
- Plus five empty sections named after students, and a few broken links.

None of this had been visible to me in Moodle.

> Your own course's flaws are hard to see for the same reason as your own text's errors: the eye slides over the familiar.

The agent doesn't know the course or its history, so it counts and reports without flattery. A day of manual work became a run of a few minutes, and the result was more honest than my own estimate would have been.

The report's action list came pre-ordered with time estimates: restructuring by competence requirement (4–6 hours), resolving duplicates (3–4 hours) and adding analysis-level tasks (8–12 hours). I could start the fixes where the impact on students is greatest.

## The line is the same as everywhere else

The agent analyzes; I decide.

The report can say that analysis-level tasks amount to one percent. It can't know that some of them happen in classroom teaching with no Moodle trace. It counts duplicates, but I know which ones are parallel on purpose. That's why the report is a proposal, not a verdict, and every action passes through the teacher's judgment.

The agent also never touches the course itself. It reads a backup and changes nothing. No student data enters the analysis — the backup is taken without it.

## What I've learned

The questions that matter most for course quality — does the course cover the requirements, does the assessment measure the right things, can students find their way — are exactly the ones there's never time to stop for. The audit made stopping cheap. When a check costs minutes instead of a day, you have time to do it every term.

The technical implementation and an example report are described in more detail on the [case page](/caset/moodle-kurssiauditointi) (in Finnish). The same audit works for others too — from a single course to an institution-level summary.
