# 7-Day LinkedIn Warmup Content Sequence

*Reactivation plan for a 5-month dormant account. Progression: Personal (Day 1) -> Trending AI (Days 2-5) -> Authority/Case Study (Days 6-7). Full DM sequences begin Day 8.*

---

## Account Safety Rules (Non-Negotiable)

- **Days 1-3:** Manual activity only -- likes, comments, posting. ZERO connection requests.
- **Day 4+:** Begin soft outbound -- max 10 connection requests per day.
- **Day 8+:** Full DM sequences start. Increase to 20-25 connection requests per day.
- **1 post per day.** No exceptions. 18-24 hour minimum spacing between posts.
- **No hashtags** on any post.
- **Reply to every comment on your posts within 15 minutes.** This is the single highest-impact action for reach.

---

## Daily Engagement Strategy (Every Day, Before Posting)

**Time allocation: 15-20 minutes BEFORE posting your own content.**

### Target Accounts to Engage With Daily

Pick 5-8 from this list each day. Leave thoughtful, multi-sentence comments (not "great post"). Add your perspective or a relevant data point.

**AI Thought Leaders / Builders:**
1. Sahil Bloom -- business frameworks, large audience overlap
2. Shaan Puri -- AI takes, founder audience
3. Greg Isenberg -- AI tools, startup audience
4. Devin Reed -- content strategy, B2B
5. Lenny Rachitsky -- product/AI, startup CTOs read him

**AI Technical / Builder Accounts:**
6. Simon Willison -- AI tools, Claude, LLMs
7. Swyx (Shawn Wang) -- AI engineering, Claude Code
8. McKay Wrigley -- AI coding, builder audience
9. Riley Brown -- AI agents, tutorials
10. Logan Kilpatrick -- AI developer relations

**ICP-Adjacent (PE / Startup):**
11. PE operating partners who post about operational efficiency
12. Series A-C founders posting about scaling challenges
13. CTOs posting about AI implementation decisions

**Engagement rules:**
- Comments must be 2+ sentences with substance
- Add your experience or a contrarian angle -- never just agree
- Ask a genuine follow-up question when relevant
- Do NOT pitch or mention your services in comments

---

## Day 1: Personal Comeback Story

**Theme:** Return narrative -- "5 months off LinkedIn. Here is what I built."
**Format:** Text + PDF carousel (document upload)
**Post time:** 9:30-10:00 AM IST

### Post (adapted from existing Day 1 draft)

Claude Code crashed its servers on March 2.

Too many users, all at once.

I have been using it for 5 months. Here is what it actually shipped -- before anyone else was talking about it.

7 production AI systems. 14 clients. Real deployed infrastructure:

A voice agent handling 200+ calls daily in Hindi and English. Response time went from 4.2 hours to 3 seconds. Built for a real estate company with 15 agents.

A RAG chatbot resolving 68% of 400 weekly support tickets without a human. The previous chatbot had 12% accuracy and was abandoned after 2 months. Ours deployed in 42 days.

A visitor management system that cut check-in time from 15 minutes to 2.4 minutes and eliminated 32 hours of weekly manual work.

A hotel PMS that dropped overbookings from 3-5 per month to zero. RevPAR up 28%.

AI skin analysis that lifted e-commerce conversion 34% and dropped returns 41%.

The one that outperformed every AI build: zero AI. $150/month running cost.

A B2B consultancy had leads scattered across 4 spreadsheets, WhatsApp, email, and sticky notes. We connected what they already had.

Results after 52 days: qualified meetings went from 45 to 138 per month. Revenue per rep: 2.4x.

Boring systems beat fancy AI. Every single time.

I went quiet to build. Now I am documenting every system publicly -- architecture, stack, costs, what failed.

Which system should I document next?

**Word count:** ~210

### Carousel

Use the existing Day1_Carousel_Slides.md for the PDF carousel. Upload as LinkedIn "Document" post.

### Self-Comments

**First comment (within 30 seconds of posting):**
"Context that did not fit in the post: The voice agent handles Hindi and English dynamically -- switches mid-conversation based on the caller's language. Running on Twilio and GPT-4 Turbo. Auto-logs every call to CRM with a lead score and triggers human callback within 1 hour for hot leads. The RAG chatbot ingested 200 help articles and 2,000 historical support tickets to reach 68% accuracy. The previous chatbot only had a product FAQ. The extra data source was the entire difference."

**Second comment (10 minutes after posting):**
"Genuinely asking because I want to document them in order of what is most useful: A) The voice agent architecture, B) The RAG chatbot -- going from 12% to 68% accuracy, C) The $150/month CRM -- no AI, just systems thinking. Which one first?"

### Engagement Tasks (Day 1)

- **Before posting:** 15 min engaging on 5-8 target accounts (see list above)
- **After posting:** Stay online for 90 minutes. Reply to every comment within 15 minutes.
- **Afternoon:** 15 min additional engagement on AI-related posts
- **Total time commitment:** 2-2.5 hours

---

## Day 2: Trending AI -- Claude Code Builder Log

**Theme:** What Claude Code actually does in a real project
**Format:** Text-only
**Post time:** 9:30-10:00 AM IST

### Post

I gave Claude Code access to my entire codebase last week.

Here is what happened in 4 hours:

It refactored 23 files without breaking a single test. It found a race condition in my API that I had missed for 3 months. It wrote integration tests I had been putting off since January.

But here is the part nobody talks about.

It got stuck on a database migration. Tried the same fix 4 times. I had to step in, explain the constraint, and guide it to the solution.

Claude Code is not a replacement. It is a force multiplier for developers who already understand their systems.

The developers getting the most out of it are not the ones asking it to "build me an app." They are the ones who know exactly what they want and use Claude Code to move 5x faster.

My workflow now: I architect the system, define the constraints, and Claude Code handles the implementation. I review every output. Nothing ships without human oversight.

Fastest production deployment with this approach: 11 days from blank repo to live system handling real traffic.

That is the real story of AI coding tools in 2026. Not magic. Multiplied expertise.

**Word count:** ~190

### Self-Comment

"For anyone curious about the setup: Claude Code with the full project context loaded (every file, every test, every config). The key is giving it the complete picture -- not just the file you are working on. That is what separates a 2x speedup from a 5x speedup."

### Engagement Tasks (Day 2)

- **Before posting:** 15 min engaging on target accounts
- **After posting:** Reply to all comments within 15 minutes for the first 60 minutes
- **Search and engage:** Find 3-5 posts about Claude Code or AI coding tools, leave thoughtful comments
- **Total time commitment:** 1.5-2 hours

---

## Day 3: Trending AI -- AI Agents Explained for Operators

**Theme:** What AI agents actually are (for non-engineers)
**Format:** Text-only
**Post time:** 9:30-10:00 AM IST

### Post

Every AI company says they are building "agents" now.

Most of them are building chatbots with extra steps.

Here is the difference, explained for people who run businesses, not research labs.

A chatbot answers questions from a knowledge base. You ask it something, it looks up the answer, it responds. That is retrieval. Useful but limited.

An AI agent takes action. It reads an email, decides what to do, updates your CRM, sends a follow-up, and schedules a meeting. Without you touching anything.

The gap between those two things is enormous.

Most "AI agents" being sold right now are chatbots wearing a trench coat. They can answer questions but they cannot actually DO anything in your systems.

How to tell the difference when evaluating a vendor:

Ask one question: "What does your agent DO that I currently do manually?"

If the answer is "it answers questions faster" -- that is a chatbot. Useful, not an agent.

If the answer is "it handles the entire support ticket from classification to resolution to follow-up, touching your CRM and ticketing system" -- that is an agent.

The real value is in the doing, not the answering.

I have deployed both. The chatbot saves time. The agent eliminates entire job functions.

**Word count:** ~205

### Self-Comment

"Real example: One client had a chatbot handling FAQ questions. It saved their support team maybe 5 hours per week. We rebuilt it as an agent that classifies tickets, pulls customer data from the CRM, generates a resolution, applies it, and sends the customer a summary. Same company -- went from saving 5 hours/week to eliminating 32 hours/week of manual support work."

### Engagement Tasks (Day 3)

- **Before posting:** 15 min engaging on target accounts
- **After posting:** Reply to all comments within 15 minutes for the first 60 minutes
- **Search and engage:** Find 3-5 posts about AI agents, leave comments that add your operator perspective
- **Total time commitment:** 1.5-2 hours

---

## Day 4: Trending AI -- MCP (Model Context Protocol) Explained

**Theme:** MCP and why it matters for AI system builders
**Format:** Text-only
**Post time:** 9:30-10:00 AM IST

### Post

MCP is the most important AI infrastructure development of 2026.

And almost nobody outside of developer circles is talking about it.

Model Context Protocol, in plain language: it is a universal connector that lets AI models talk to your existing tools. Your CRM, your database, your file system, your APIs. All through one standardized protocol.

Before MCP, every AI integration was custom. Want your AI to read from Salesforce? Custom code. Want it to also check Slack? More custom code. Want it to update Jira? Even more custom code.

MCP changed that. One protocol, any tool, any AI model.

Why this matters for your business:

Integration time dropped. What used to take 2-3 weeks of custom API work now takes days. Sometimes hours.

Vendor lock-in decreased. Your AI system can switch between models without rebuilding all the integrations. The connections to your tools stay the same.

I have built 3 production systems using MCP in the last 2 months. The speed difference is not incremental -- it is a different category.

The companies paying attention to MCP right now will have a 6-12 month head start on AI infrastructure. The ones ignoring it will spend 2027 catching up.

If you are evaluating AI for your business, ask your vendor: "Do you support MCP?" If the answer is no, ask why.

**Word count:** ~215

### Self-Comment

"Technical detail for the builders in the audience: MCP works on a client-server model. The AI model is the client, your tools are servers. Each server exposes its capabilities through a standardized interface. The model discovers what is available and uses the right tool for each task. Think of it like USB-C for AI -- one port, everything connects."

### Engagement Tasks (Day 4)

- **Before posting:** 15 min engaging on target accounts
- **After posting:** Reply to all comments within 15 minutes for the first 60 minutes
- **Begin soft outbound:** Send 10 connection requests to ICP-matching profiles (no pitch in the note -- just a genuine reason for connecting)
- **Total time commitment:** 2-2.5 hours (includes outbound ramp-up)

---

## Day 5: Trending AI -- Vibe Coding and What It Actually Means

**Theme:** Vibe coding -- hype vs reality from someone who builds production systems
**Format:** Text-only
**Post time:** 9:30-10:00 AM IST

### Post

"Vibe coding" is the most dangerous phrase in tech right now.

Not because the concept is wrong. Because people are misunderstanding what it means.

What vibe coding actually is: using AI tools to write code based on natural language descriptions. You describe what you want, the AI writes it. Iterate until it works.

What people think it means: anyone can build production software now without knowing how to code.

That second interpretation will cost companies millions.

Here is what I have seen in 5 months of building production AI systems with Claude Code:

The AI writes excellent first drafts. It handles boilerplate faster than any human. It catches patterns a tired developer might miss.

But it also confidently writes code that will break in production. It misses edge cases that only someone with deployment experience would catch. It occasionally hallucinates API endpoints that do not exist.

Vibe coding works for prototypes. For internal tools. For MVPs.

It does not work for systems handling 200 calls per day, processing financial transactions, or managing patient data. Those need architecture. Those need someone who knows what happens when the system fails at 3 AM on a Saturday.

The companies that will win in 2026 are not replacing their engineers with vibe coding. They are giving their best engineers AI tools to move 5x faster.

There is a massive difference between those two strategies.

**Word count:** ~220

### Self-Comment

"I use Claude Code every single day. It is the best tool I have ever used. And I would never ship its raw output to production without review. Both of those statements are true at the same time. The nuance matters."

### Engagement Tasks (Day 5)

- **Before posting:** 15 min engaging on target accounts
- **After posting:** Reply to all comments within 15 minutes for the first 60 minutes
- **Continue soft outbound:** 10 connection requests to ICP-matching profiles
- **Total time commitment:** 2-2.5 hours

---

## Day 6: Authority -- Case Study Results Post

**Theme:** First conversion-focused post -- real results from a specific deployment
**Format:** Text-only (carousel option below if preferred)
**Post time:** 9:30-10:00 AM IST

### Post

A 90-person SaaS company was drowning in support tickets.

400 tickets per week. A 6-person support team spending 80% of their day on repetitive questions. Customer satisfaction dropping. Response times increasing. They had already tried a chatbot -- 12% accuracy. Abandoned after 2 months.

We built them an AI support system in 42 days.

Not a chatbot. A system.

It ingests their entire knowledge base (200 help articles), learns from 2,000 historical resolved tickets, and handles the full resolution workflow -- classify, research, resolve, respond.

Results after 60 days in production:

68% of tickets resolved without a human touching them. Average resolution time dropped from 4 hours to 11 minutes. The support team went from answering repetitive questions to handling complex, high-value customer issues.

What made the difference between their failed chatbot and our system:

The failed chatbot only had a product FAQ. 50 articles. Generic answers. Customers hated it.

Our system had the FAQ plus 2,000 real tickets showing how humans actually solved problems. The training data was the difference. More data, not more AI.

The most important lesson from this build: AI systems are only as good as the data you feed them. A $500K model on bad data loses to a $50K model on great data. Every time.

**Word count:** ~215

### Carousel Option (Alternative)

If publishing as a carousel instead of text:
- Slide 1: "How we built an AI support system that resolves 68% of tickets without a human"
- Slide 2: The problem (400 tickets/week, 6-person team, failed chatbot)
- Slide 3: The approach (knowledge base + historical tickets + full resolution workflow)
- Slide 4: Results (68% resolution, 4 hours to 11 minutes, team freed for complex work)
- Slide 5: The key insight (data quality beats model quality)
- Slide 6: "DM me 'audit' if you want to find where AI fits in your operation"

### Self-Comment

"Technical architecture for anyone curious: RAG pipeline with vector embeddings of the knowledge base and historical tickets. Classification model routes tickets to the right resolution path. The system generates a response, checks confidence level, and either sends it directly (high confidence) or flags for human review (low confidence). The human review data feeds back into the training set. It gets better every week."

### Engagement Tasks (Day 6)

- **Before posting:** 15 min engaging on target accounts
- **After posting:** Reply to all comments within 15 minutes for the first 60 minutes
- **Continue outbound:** 10 connection requests
- **Monitor:** Check who engaged with your posts this week -- if any match ICP, send them a connection request
- **Total time commitment:** 2-2.5 hours

---

## Day 7: Authority -- Contrarian Take + Soft CTA

**Theme:** Position-building contrarian post with first DM CTA of the warmup
**Format:** Text-only
**Post time:** 9:30-10:00 AM IST

### Post

The best AI system I ever built had zero AI in it.

A B2B consultancy. 30 people. Growing fast. But their sales pipeline was a disaster.

Leads lived in 4 different spreadsheets. Follow-ups were tracked on sticky notes. The sales team used WhatsApp for client communication with no logging. Meeting scheduling was a 6-email chain.

They asked me to build them an "AI-powered CRM."

I said no.

Instead, we connected what they already had. Pipedrive (which they were paying for but barely using), Gmail, WhatsApp Business API, and Calendly. Four tools. Zero new software. $150/month total running cost.

Results after 52 days:

Qualified meetings: 45 per month to 138. Revenue per rep: 2.4x. Lead response time: 28 hours to 5 minutes.

No machine learning. No natural language processing. No neural networks. Just systems thinking applied to a workflow problem.

The lesson I keep relearning across 14 deployments: most companies do not have an AI problem. They have a systems problem. And the fastest path to results is often connecting what you already own before adding anything new.

AI is powerful. But it is not always the answer. Sometimes the answer is a $150/month workflow connecting tools you already pay for.

If you are not sure whether your business needs AI or just better systems, DM me "audit" and I will tell you honestly. Free, 30 minutes, no pitch.

**Word count:** ~240

### Self-Comment

"I know this might sound strange coming from someone who builds AI systems for a living. But my job is to solve problems, not sell AI. If the right answer is connecting your existing tools, that is what I will recommend. The audit exists to figure out which answer fits your situation."

### Engagement Tasks (Day 7)

- **Before posting:** 15 min engaging on target accounts
- **After posting:** Reply to all comments within 15 minutes for the first 60 minutes
- **Continue outbound:** 10 connection requests
- **Review the week:** Check total engagement metrics across all 7 posts. Note which topics and formats performed best for next week's content planning.
- **Total time commitment:** 2.5-3 hours (includes weekly review)

---

## Week 1 Summary: What Success Looks Like

| Metric | Minimum Target | Stretch Target |
|--------|---------------|----------------|
| Posts published | 7 | 7 |
| Total impressions | 5,000 | 15,000 |
| Comments received | 30 | 100 |
| New connections (sent) | 40 | 40 |
| Connection acceptance rate | 30%+ | 50%+ |
| Profile views | 200 | 500 |
| DMs received (organic) | 2 | 10 |

### Day 8 Transition

After completing the 7-day warmup:
- Begin full DM sequences to accepted connections
- Increase connection requests to 15-20 per day
- Start the daily content cadence (70% trending / 30% authority, per the posting cadence plan)
- Begin warm network reactivation DMs to existing ICP-matching connections

---

## Content Production Notes

- **Batch creation:** All 7 posts can be pre-written (this document contains all drafts). Only the self-comments may need adjustment based on actual engagement.
- **Post scheduling:** Use Taplio or Buffer to schedule, or post manually each morning at 9:30 AM IST.
- **Adaptation:** If a major AI news event breaks during the week (new model release, industry announcement), consider swapping one Day 2-5 post for a timely take on that event. Timeliness beats planning.
- **Voice check:** Every post should sound like it was written by someone who builds things, not someone selling consulting services. Read it out loud -- if it sounds like a LinkedIn ad, rewrite it.
