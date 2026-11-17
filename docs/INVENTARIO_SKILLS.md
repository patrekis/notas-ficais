# Inventário de skills disponíveis no ambiente

Gerado a partir dos arquivos locais. Descrições são metadados das próprias skills; consulte o arquivo antes de usar. A disponibilidade pode mudar entre sessões.

## Projeto

- **brainstorming** — You MUST use this before any creative work - creating features, building components, adding functionality, modifying behavior, or planning anything new, in software or out of it (a talk, a business, a renovation).  
  Arquivo: `C:/repo/Projetos/Nota Fiscal/.agents/skills/brainstorming/SKILL.md`
- **diagnosing-superpowers** — Use when a superpowers session went wrong and your human partner wants to know why — repeated work, ignored plans, stumbles, poor results, a skill that didn't fire, "it took too long", "why is it so expensive", "what is it doing" — or wants to build a bug report for the superpowers maintainers, for the current session or a past one identified by id or path, on any harness.  
  Arquivo: `C:/repo/Projetos/Nota Fiscal/.agents/skills/diagnosing-superpowers/SKILL.md`
- **dispatching-parallel-agents** — Use when facing 2+ independent tasks that can be worked on without shared state or sequential dependencies  
  Arquivo: `C:/repo/Projetos/Nota Fiscal/.agents/skills/dispatching-parallel-agents/SKILL.md`
- **executing-plans** — Use when executing an implementation plan in the current session as the implementer yourself — your human partner chose inline execution, or no subagent tool is available  
  Arquivo: `C:/repo/Projetos/Nota Fiscal/.agents/skills/executing-plans/SKILL.md`
- **finishing-a-development-branch** — Use when implementation is complete, all tests pass, and you need to decide how to integrate the work  
  Arquivo: `C:/repo/Projetos/Nota Fiscal/.agents/skills/finishing-a-development-branch/SKILL.md`
- **graphify** — any input (code, docs, papers, images) - knowledge graph - clustered communities - HTML + JSON + audit report  
  Arquivo: `C:/repo/Projetos/Nota Fiscal/.agents/skills/graphify/skill.md`
- **humanizer** — Rewrite AI-sounding text so it reads like the writer without changing what it says. Use when editing or reviewing prose for AI tells: not-X-but-Y contrasts, one-line closers, staged openers, forced triads, dashes everywhere, inflated claims, sales language, stock AI words, bold labels, or filler.  
  Arquivo: `C:/repo/Projetos/Nota Fiscal/.agents/skills/humanizer/SKILL.md`
- **receiving-code-review** — Use when receiving code review feedback, before implementing suggestions, especially if feedback seems unclear or technically questionable - requires technical rigor and verification, not performative agreement or blind implementation  
  Arquivo: `C:/repo/Projetos/Nota Fiscal/.agents/skills/receiving-code-review/SKILL.md`
- **requesting-code-review** — Use when completing tasks, implementing major features, or before merging to verify work meets requirements  
  Arquivo: `C:/repo/Projetos/Nota Fiscal/.agents/skills/requesting-code-review/SKILL.md`
- **subagent-driven-development** — Use when executing implementation plans with independent tasks in the current session  
  Arquivo: `C:/repo/Projetos/Nota Fiscal/.agents/skills/subagent-driven-development/SKILL.md`
- **systematic-debugging** — Use when encountering any bug, test failure, or unexpected behavior, before proposing fixes  
  Arquivo: `C:/repo/Projetos/Nota Fiscal/.agents/skills/systematic-debugging/SKILL.md`
- **test-driven-development** — Use when implementing any feature or bugfix, before writing implementation code  
  Arquivo: `C:/repo/Projetos/Nota Fiscal/.agents/skills/test-driven-development/SKILL.md`
- **using-git-worktrees** — Use when starting feature work that needs isolation from current workspace or before executing implementation plans - ensures an isolated workspace exists via native tools or git worktree fallback  
  Arquivo: `C:/repo/Projetos/Nota Fiscal/.agents/skills/using-git-worktrees/SKILL.md`
- **using-superpowers** — Use when starting any conversation - establishes how to find and use skills, requiring skill invocation before ANY response including clarifying questions  
  Arquivo: `C:/repo/Projetos/Nota Fiscal/.agents/skills/using-superpowers/SKILL.md`
- **verification-before-completion** — Use when about to claim work is complete, fixed, or passing, before committing or creating PRs - requires running verification commands and confirming output before making any success claims; evidence before assertions always  
  Arquivo: `C:/repo/Projetos/Nota Fiscal/.agents/skills/verification-before-completion/SKILL.md`
- **writing-plans** — Use when you have a spec or requirements for a multi-step task, before touching code  
  Arquivo: `C:/repo/Projetos/Nota Fiscal/.agents/skills/writing-plans/SKILL.md`
- **writing-skills** — Use when creating new skills, editing existing skills, or verifying skills work before deployment  
  Arquivo: `C:/repo/Projetos/Nota Fiscal/.agents/skills/writing-skills/SKILL.md`

## Globais compartilhadas

- **Agent Development** — This skill should be used when the user asks to "create an agent", "add an agent", "write a subagent", "agent frontmatter", "when to use description", "agent examples", "agent tools", "agent colors", "autonomous agent", or needs guidance on agent structure, system prompts, triggering conditions, or agent development best practices for Claude Code plugins.  
  Arquivo: `C:/Users/patrekis/.agents/skills/agent-development/SKILL.md`
- **api-endpoint-creator** — Creates RPC-style endpoint following layered architecture (Controller → Manager → Repository). Use when creating new API endpoints or CRUD operations.  
  Arquivo: `C:/Users/patrekis/.agents/skills/api-endpoint-creator/SKILL.md`
- **article-writing** — Write blog posts, guides, tutorials, and long-form content. Sounds like a real person, not AI. Use when the user wants polished written content.  
  Arquivo: `C:/Users/patrekis/.agents/skills/article-writing/SKILL.md`
- **ask-matt** — Ask which skill or flow fits your situation. A router over the skills in this repo.  
  Arquivo: `C:/Users/patrekis/.agents/skills/ask-matt/SKILL.md`
- **backend-api-design** — Design RPC-style APIs with layered architecture (Controller → Manager → Repository). Use when creating new API endpoints, designing API contracts, or reviewing API patterns.  
  Arquivo: `C:/Users/patrekis/.agents/skills/backend-api-design/SKILL.md`
- **brainstorm** — Run a structured brainstorm session for startup ideas. Takes a theme or problem and generates ideas with quick gut-checks. Use when the user wants to explore a space or generate new ideas.  
  Arquivo: `C:/Users/patrekis/.agents/skills/brainstorm/SKILL.md`
- **brainstorming** — You MUST use this before any creative work - creating features, building components, adding functionality, or modifying behavior. Explores user intent, requirements and design before implementation.  
  Arquivo: `C:/Users/patrekis/.agents/skills/brainstorming/SKILL.md`
- **brandkit** — Premium brand-kit image generation skill for creating high-end brand-guidelines boards, logo systems, identity decks, and visual-world presentations. Trained for minimalist, cinematic, editorial, dark-tech, luxury, cultural, security, gaming, developer-tool, and consumer-app brand systems. Optimized for intentional logo concepting, refined composition, sparse typography, strong symbolic meaning, premium mockups, art-directed imagery, and flexible grid layouts.  
  Arquivo: `C:/Users/patrekis/.agents/skills/brandkit/SKILL.md`
- **browser-qa** — Run real browser QA with Playwright. Use when testing a frontend feature, verifying UI before PR, smoke testing after deploy, or investigating reported visual bugs.  
  Arquivo: `C:/Users/patrekis/.agents/skills/browser-qa/SKILL.md`
- **chief-of-staff** — Pursue a long-running goal in a single session by co-ordinating subagents.  
  Arquivo: `C:/Users/patrekis/.agents/skills/chief-of-staff/SKILL.md`
- **ci-cd-patterns** — CI/CD pipeline patterns for GitHub Actions, PR automation, and deployment workflows. Use when setting up CI, fixing broken pipelines, automating PR checks, or configuring deployment.  
  Arquivo: `C:/Users/patrekis/.agents/skills/ci-cd-patterns/SKILL.md`
- **claude-handoff** — Hand the current conversation off to a fresh background agent that picks up the work immediately.  
  Arquivo: `C:/Users/patrekis/.agents/skills/claude-handoff/SKILL.md`
- **claude-opus-4-5-migration** — Migrate prompts and code from Claude Sonnet 4.0, Sonnet 4.5, or Opus 4.1 to Opus 4.5. Use when the user wants to update their codebase, prompts, or API calls to use Opus 4.5. Handles model string updates and prompt adjustments for known Opus 4.5 behavioral differences. Does NOT migrate Haiku 4.5.  
  Arquivo: `C:/Users/patrekis/.agents/skills/claude-opus-4-5-migration/SKILL.md`
- **code-review** — Review the changes since a fixed point (commit, branch, tag, or merge-base) along two axes: Standards (does the code follow this repo's documented coding standards?) and Spec (does the code match what the originating issue/spec asked for?). Runs both reviews in parallel sub-agents and reports them side by side. Use when the user wants to review a branch, a PR, work-in-progress changes, or asks to \"review since X\".  
  Arquivo: `C:/Users/patrekis/.agents/skills/code-review/SKILL.md`
- **codebase-design** — Shared vocabulary for designing deep modules. Use when the user wants to design or improve a module's interface, find deepening opportunities, decide where a seam goes, make code more testable or AI-navigable, or when another skill needs the deep-module vocabulary.  
  Arquivo: `C:/Users/patrekis/.agents/skills/codebase-design/SKILL.md`
- **Command Development** — This skill should be used when the user asks to "create a slash command", "add a command", "write a custom command", "define command arguments", "use command frontmatter", "organize commands", "create command with file references", "interactive command", "use AskUserQuestion in command", or needs guidance on slash command structure, YAML frontmatter fields, dynamic arguments, bash execution in commands, user interaction patterns, or command development best practices for Claude Code.  
  Arquivo: `C:/Users/patrekis/.agents/skills/command-development/SKILL.md`
- **competitive-teardown** — Deep competitor analysis. Tear apart a specific competitor or compare multiple competitors. Use when the user names a competitor or asks "who else is doing this?  
  Arquivo: `C:/Users/patrekis/.agents/skills/competitive-teardown/SKILL.md`
- **content-engine** — Turn one idea into platform-native content for X, LinkedIn, TikTok, YouTube, newsletters. Use when the user wants social posts, threads, scripts, or content calendars.  
  Arquivo: `C:/Users/patrekis/.agents/skills/content-engine/SKILL.md`
- **database-patterns** — Database design patterns including schema design, migrations, soft deletes, and Exposed ORM. Use when creating tables, writing migrations, or implementing repositories.  
  Arquivo: `C:/Users/patrekis/.agents/skills/database-patterns/SKILL.md`
- **database-table-creator** — Creates database table with full Kotlin synchronization (SQL migration → Table → Entity → Repository → Tests). Use when adding new database tables or entities.  
  Arquivo: `C:/Users/patrekis/.agents/skills/database-table-creator/SKILL.md`
- **deep-research** — Run deep research on a topic. Web searches, data collection, source checking, and a structured report. Use when the user needs more than a quick answer.  
  Arquivo: `C:/Users/patrekis/.agents/skills/deep-research/SKILL.md`
- **design-intelligence** — Design system bootstrapping and token generation. Takes project context and outputs ready-to-use design tokens, Tailwind config, and CSS variables.  
  Arquivo: `C:/Users/patrekis/.agents/skills/design-intelligence/SKILL.md`
- **design-taste-frontend-v1** — The original v1 taste-skill, preserved for projects depending on its exact behavior. The current default is `design-taste-frontend` (v2 experimental), which is a substantial rewrite. Use this v1 install name only if you need exact backward compatibility.  
  Arquivo: `C:/Users/patrekis/.agents/skills/design-taste-frontend-v1/SKILL.md`
- **design-taste-frontend** — Anti-slop frontend skill for landing pages, portfolios, and redesigns. The agent reads the brief, infers the right design direction, and ships interfaces that do not look templated. Real design systems when applicable, audit-first on redesigns, strict pre-flight check.  
  Arquivo: `C:/Users/patrekis/.agents/skills/design-taste-frontend/SKILL.md`
- **design-workflow** — Anti-AI-generic design guidelines. Use when creating UI prototypes, reviewing designs for generic AI patterns, or setting up a project design system.  
  Arquivo: `C:/Users/patrekis/.agents/skills/design-workflow/SKILL.md`
- **diagnosing-bugs** — Diagnosis loop for hard bugs and performance regressions. Use when the user says "diagnose"/"debug this", or reports something broken/throwing/failing/slow.  
  Arquivo: `C:/Users/patrekis/.agents/skills/diagnosing-bugs/SKILL.md`
- **dispatching-parallel-agents** — Use when facing 2+ independent tasks that can be worked on without shared state or sequential dependencies  
  Arquivo: `C:/Users/patrekis/.agents/skills/dispatching-parallel-agents/SKILL.md`
- **domain-modeling** — Build and sharpen a project's domain model. Use when discussing codebase terminology, writing or editing a GLOSSARY.md, or recording or editing an ADR.  
  Arquivo: `C:/Users/patrekis/.agents/skills/domain-modeling/SKILL.md`
- **executing-plans** — Use when you have a written implementation plan to execute in a separate session with review checkpoints  
  Arquivo: `C:/Users/patrekis/.agents/skills/executing-plans/SKILL.md`
- **finishing-a-development-branch** — Use when implementation is complete, all tests pass, and you need to decide how to integrate the work  
  Arquivo: `C:/Users/patrekis/.agents/skills/finishing-a-development-branch/SKILL.md`
- **frontend-design** — Guidance for distinctive, intentional visual design when building new UI or reshaping an existing one. Helps with aesthetic direction, typography, and making choices that don't read as templated defaults.  
  Arquivo: `C:/Users/patrekis/.agents/skills/frontend-design/SKILL.md`
- **full-output-enforcement** — Overrides default LLM truncation behavior. Enforces complete code generation, bans placeholder patterns, and handles token-limit splits cleanly. Apply to any task requiring exhaustive, unabridged output.  
  Arquivo: `C:/Users/patrekis/.agents/skills/full-output-enforcement/SKILL.md`
- **git-guardrails-claude-code** — Set up Claude Code hooks to block dangerous git commands (push, reset --hard, clean, branch -D, etc.) before they execute. Use when user wants to prevent destructive git operations, add git safety hooks, or block git push/reset in Claude Code.  
  Arquivo: `C:/Users/patrekis/.agents/skills/git-guardrails-claude-code/SKILL.md`
- **gpt-taste** — Elite UX/UI & Advanced GSAP Motion Engineer. Enforces Python-driven true randomization for layout variance, strict AIDA page structure, wide editorial typography (bans 6-line wraps), gapless bento grids, strict GSAP ScrollTriggers (pinning, stacking, scrubbing), inline micro-images, and massive section spacing.  
  Arquivo: `C:/Users/patrekis/.agents/skills/gpt-taste/SKILL.md`
- **graphify** — Use for any question about a codebase, its architecture, file relationships, or project content — especially when graphify-out/ exists, where the question should be treated as a graphify query first. Turns any input (code, docs, papers, images, videos) into a persistent knowledge graph with god nodes, community detection, and query/path/explain tools.  
  Arquivo: `C:/Users/patrekis/.agents/skills/graphify/skill.md`
- **grill-me** — A relentless interview to sharpen a plan or design.  
  Arquivo: `C:/Users/patrekis/.agents/skills/grill-me/SKILL.md`
- **grill-with-docs** — A relentless interview to sharpen a plan or design, which also creates docs (ADR's and glossary) as we go.  
  Arquivo: `C:/Users/patrekis/.agents/skills/grill-with-docs/SKILL.md`
- **grilling** — Grill the user relentlessly about a plan, decision, or idea. Use when the user wants to stress-test their thinking, or uses any 'grill' trigger phrases.  
  Arquivo: `C:/Users/patrekis/.agents/skills/grilling/SKILL.md`
- **autoplan** — Auto-review pipeline — reads the full CEO, design, eng, and DX review skills from disk and runs them sequentially with auto-decisions using 6 decision principles. (gstack)  
  Arquivo: `C:/Users/patrekis/.agents/skills/gstack/autoplan/SKILL.md`
- **benchmark-models** — Cross-model benchmark for gstack skills. (gstack)  
  Arquivo: `C:/Users/patrekis/.agents/skills/gstack/benchmark-models/SKILL.md`
- **benchmark** — Performance regression detection using the browse daemon. (gstack)  
  Arquivo: `C:/Users/patrekis/.agents/skills/gstack/benchmark/SKILL.md`
- **browse** — Fast headless browser for QA testing and site dogfooding. (gstack)  
  Arquivo: `C:/Users/patrekis/.agents/skills/gstack/browse/SKILL.md`
- **hackernews-frontpage** — Scrape the Hacker News front page (titles, points, comment counts).  
  Arquivo: `C:/Users/patrekis/.agents/skills/gstack/browser-skills/hackernews-frontpage/SKILL.md`
- **canary** — Post-deploy canary monitoring. (gstack)  
  Arquivo: `C:/Users/patrekis/.agents/skills/gstack/canary/SKILL.md`
- **careful** — Safety guardrails for destructive commands. (gstack)  
  Arquivo: `C:/Users/patrekis/.agents/skills/gstack/careful/SKILL.md`
- **codex** — OpenAI Codex CLI wrapper — three modes. (gstack)  
  Arquivo: `C:/Users/patrekis/.agents/skills/gstack/codex/SKILL.md`
- **context-restore** — Restore working context saved earlier by /context-save. (gstack)  
  Arquivo: `C:/Users/patrekis/.agents/skills/gstack/context-restore/SKILL.md`
- **context-save** — Save working context. (gstack)  
  Arquivo: `C:/Users/patrekis/.agents/skills/gstack/context-save/SKILL.md`
- **cso** — Chief Security Officer mode. (gstack)  
  Arquivo: `C:/Users/patrekis/.agents/skills/gstack/cso/SKILL.md`
- **design-consultation** — Design consultation: understands your product, researches the landscape, proposes a complete design system (aesthetic, typography, color, layout, spacing, motion), and generates font+color preview... (gstack)  
  Arquivo: `C:/Users/patrekis/.agents/skills/gstack/design-consultation/SKILL.md`
- **design-html** — Design finalization: generates production-quality Pretext-native HTML/CSS. (gstack)  
  Arquivo: `C:/Users/patrekis/.agents/skills/gstack/design-html/SKILL.md`
- **design-review** — Designer's eye QA: finds visual inconsistency, spacing issues, hierarchy problems, AI slop patterns, and slow interactions — then fixes them. (gstack)  
  Arquivo: `C:/Users/patrekis/.agents/skills/gstack/design-review/SKILL.md`
- **design-shotgun** — Design shotgun: generate multiple AI design variants, open a comparison board, collect structured feedback, and iterate. (gstack)  
  Arquivo: `C:/Users/patrekis/.agents/skills/gstack/design-shotgun/SKILL.md`
- **devex-review** — Live developer experience audit. (gstack)  
  Arquivo: `C:/Users/patrekis/.agents/skills/gstack/devex-review/SKILL.md`
- **diagram** — Turn an English description (or mermaid source) into a diagram triplet: the source, an editable .excalidraw file you can open (gstack)  
  Arquivo: `C:/Users/patrekis/.agents/skills/gstack/diagram/SKILL.md`
- **document-generate** — Generate missing documentation from scratch for a feature, module, or entire project. (gstack)  
  Arquivo: `C:/Users/patrekis/.agents/skills/gstack/document-generate/SKILL.md`
- **document-release** — Post-ship documentation update. (gstack)  
  Arquivo: `C:/Users/patrekis/.agents/skills/gstack/document-release/SKILL.md`
- **freeze** — Restrict file edits to a specific directory for the session. (gstack)  
  Arquivo: `C:/Users/patrekis/.agents/skills/gstack/freeze/SKILL.md`
- **gstack-upgrade** — Upgrade gstack to the latest version.  
  Arquivo: `C:/Users/patrekis/.agents/skills/gstack/gstack-upgrade/SKILL.md`
- **guard** — Full safety mode: destructive command warnings + directory-scoped edits. (gstack)  
  Arquivo: `C:/Users/patrekis/.agents/skills/gstack/guard/SKILL.md`
- **health** — Code quality dashboard. (gstack)  
  Arquivo: `C:/Users/patrekis/.agents/skills/gstack/health/SKILL.md`
- **investigate** — Systematic debugging with root cause investigation. (gstack)  
  Arquivo: `C:/Users/patrekis/.agents/skills/gstack/investigate/SKILL.md`
- **ios-clean** — Remove the DebugBridge SPM package and all #if DEBUG wiring from an iOS app. (gstack)  
  Arquivo: `C:/Users/patrekis/.agents/skills/gstack/ios-clean/SKILL.md`
- **ios-design-review** — Visual design audit for iOS apps on real hardware. (gstack)  
  Arquivo: `C:/Users/patrekis/.agents/skills/gstack/ios-design-review/SKILL.md`
- **ios-fix** — Autonomous iOS bug fixer. (gstack)  
  Arquivo: `C:/Users/patrekis/.agents/skills/gstack/ios-fix/SKILL.md`
- **ios-qa** — Live-device iOS QA for SwiftUI apps. (gstack)  
  Arquivo: `C:/Users/patrekis/.agents/skills/gstack/ios-qa/SKILL.md`
- **ios-sync** — Regenerate the iOS debug bridge against the latest upstream gstack templates. (gstack)  
  Arquivo: `C:/Users/patrekis/.agents/skills/gstack/ios-sync/SKILL.md`
- **land-and-deploy** — Land and deploy workflow. (gstack)  
  Arquivo: `C:/Users/patrekis/.agents/skills/gstack/land-and-deploy/SKILL.md`
- **landing-report** — Read-only queue dashboard for workspace-aware ship. (gstack)  
  Arquivo: `C:/Users/patrekis/.agents/skills/gstack/landing-report/SKILL.md`
- **learn** — Manage project learnings.  
  Arquivo: `C:/Users/patrekis/.agents/skills/gstack/learn/SKILL.md`
- **make-pdf** — Turn any markdown file into a publication-quality PDF. (gstack)  
  Arquivo: `C:/Users/patrekis/.agents/skills/gstack/make-pdf/SKILL.md`
- **office-hours** — YC Office Hours — two modes. (gstack)  
  Arquivo: `C:/Users/patrekis/.agents/skills/gstack/office-hours/SKILL.md`
- **open-gstack-browser** — Launch GStack Browser — AI-controlled Chromium with the sidebar extension baked in.  
  Arquivo: `C:/Users/patrekis/.agents/skills/gstack/open-gstack-browser/SKILL.md`
- **gstack-openclaw-ceo-review** — Use when asked to review a plan, challenge a proposal, run a CEO review, poke holes in an approach, think bigger about scope, or decide whether to expand or reduce the plan.  
  Arquivo: `C:/Users/patrekis/.agents/skills/gstack/openclaw/skills/gstack-openclaw-ceo-review/SKILL.md`
- **gstack-openclaw-investigate** — Use when asked to debug, fix a bug, investigate an error, or do root cause analysis, and when users report errors, stack traces, unexpected behavior, or say something stopped working.  
  Arquivo: `C:/Users/patrekis/.agents/skills/gstack/openclaw/skills/gstack-openclaw-investigate/SKILL.md`
- **gstack-openclaw-office-hours** — Use when asked to brainstorm, evaluate whether an idea is worth building, run office hours, or think through a new product idea or design direction before any code is written.  
  Arquivo: `C:/Users/patrekis/.agents/skills/gstack/openclaw/skills/gstack-openclaw-office-hours/SKILL.md`
- **gstack-openclaw-retro** — Weekly engineering retrospective. Analyzes commit history, work patterns, and code quality metrics with persistent history and trend tracking. Team-aware with per-person contributions, praise, and growth areas. Use when asked for weekly retro, what shipped this week, or engineering retrospective.  
  Arquivo: `C:/Users/patrekis/.agents/skills/gstack/openclaw/skills/gstack-openclaw-retro/SKILL.md`
- **pair-agent** — Pair a remote AI agent with your browser. (gstack)  
  Arquivo: `C:/Users/patrekis/.agents/skills/gstack/pair-agent/SKILL.md`
- **plan-ceo-review** — CEO/founder-mode plan review. (gstack)  
  Arquivo: `C:/Users/patrekis/.agents/skills/gstack/plan-ceo-review/SKILL.md`
- **plan-design-review** — Designer's eye plan review — interactive, like CEO and Eng review. (gstack)  
  Arquivo: `C:/Users/patrekis/.agents/skills/gstack/plan-design-review/SKILL.md`
- **plan-devex-review** — Interactive developer experience plan review. (gstack)  
  Arquivo: `C:/Users/patrekis/.agents/skills/gstack/plan-devex-review/SKILL.md`
- **plan-eng-review** — Eng manager-mode plan review. (gstack)  
  Arquivo: `C:/Users/patrekis/.agents/skills/gstack/plan-eng-review/SKILL.md`
- **plan-tune** — Self-tuning question sensitivity + developer psychographic for gstack (v1: observational). (gstack)  
  Arquivo: `C:/Users/patrekis/.agents/skills/gstack/plan-tune/SKILL.md`
- **qa-only** — Report-only QA testing. (gstack)  
  Arquivo: `C:/Users/patrekis/.agents/skills/gstack/qa-only/SKILL.md`
- **qa** — Systematically QA test a web application and fix bugs found. (gstack)  
  Arquivo: `C:/Users/patrekis/.agents/skills/gstack/qa/SKILL.md`
- **retro** — Weekly engineering retrospective. (gstack)  
  Arquivo: `C:/Users/patrekis/.agents/skills/gstack/retro/SKILL.md`
- **review** — Pre-landing PR review. (gstack)  
  Arquivo: `C:/Users/patrekis/.agents/skills/gstack/review/SKILL.md`
- **scrape** — Pull data from a web page. (gstack)  
  Arquivo: `C:/Users/patrekis/.agents/skills/gstack/scrape/SKILL.md`
- **setup-browser-cookies** — Import cookies from your real Chromium browser into the headless browse session. (gstack)  
  Arquivo: `C:/Users/patrekis/.agents/skills/gstack/setup-browser-cookies/SKILL.md`
- **setup-deploy** — Configure deployment settings for /land-and-deploy.  
  Arquivo: `C:/Users/patrekis/.agents/skills/gstack/setup-deploy/SKILL.md`
- **setup-gbrain** — Set up gbrain for this coding agent: install the CLI, initialize a local PGLite or Supabase brain, register MCP, capture per-remote trust policy. (gstack)  
  Arquivo: `C:/Users/patrekis/.agents/skills/gstack/setup-gbrain/SKILL.md`
- **ship** — Ship workflow: detect + merge base branch, run tests, review diff, bump VERSION, update CHANGELOG, commit, push, create PR. (gstack)  
  Arquivo: `C:/Users/patrekis/.agents/skills/gstack/ship/SKILL.md`
- **gstack** — Router for the gstack skill suite. (gstack)  
  Arquivo: `C:/Users/patrekis/.agents/skills/gstack/SKILL.md`
- **skillify** — Codify the most recent successful /scrape flow into a permanent browser-skill on disk. (gstack)  
  Arquivo: `C:/Users/patrekis/.agents/skills/gstack/skillify/SKILL.md`
- **spec** — Turn vague intent into a precise, executable spec in five phases. (gstack)  
  Arquivo: `C:/Users/patrekis/.agents/skills/gstack/spec/SKILL.md`
- **sync-gbrain** — Keep gbrain current with this repo's code and refresh agent search guidance in CLAUDE.md. Wraps the gstack-gbrain-sync orchestrator with state (gstack)  
  Arquivo: `C:/Users/patrekis/.agents/skills/gstack/sync-gbrain/SKILL.md`
- **unfreeze** — Clear the freeze boundary set by /freeze, allowing edits to all directories again. (gstack)  
  Arquivo: `C:/Users/patrekis/.agents/skills/gstack/unfreeze/SKILL.md`
- **handoff** — Compact the current conversation into a handoff document for another agent to pick up.  
  Arquivo: `C:/Users/patrekis/.agents/skills/handoff/SKILL.md`
- **high-end-visual-design** — Teaches the AI to design like a high-end agency. Defines the exact fonts, spacing, shadows, card structures, and animations that make a website feel expensive. Blocks all the common defaults that make AI designs look cheap or generic.  
  Arquivo: `C:/Users/patrekis/.agents/skills/high-end-visual-design/SKILL.md`
- **Hook Development** — This skill should be used when the user asks to "create a hook", "add a PreToolUse/PostToolUse/Stop hook", "validate tool use", "implement prompt-based hooks", "use ${CLAUDE_PLUGIN_ROOT}", "set up event-driven automation", "block dangerous commands", or mentions hook events (PreToolUse, PostToolUse, Stop, SubagentStop, SessionStart, SessionEnd, UserPromptSubmit, PreCompact, Notification). Provides comprehensive guidance for creating and implementing Claude Code plugin hooks with focus on advanced prompt-based hooks API.  
  Arquivo: `C:/Users/patrekis/.agents/skills/hook-development/SKILL.md`
- **idea-validation** — Validate a startup idea with competitor analysis, market signals, and risk assessment. Be brutally honest. Use when the user wants to test if an idea is worth building.  
  Arquivo: `C:/Users/patrekis/.agents/skills/idea-validation/SKILL.md`
- **image-to-code** — Elite website image-to-code skill for Codex. For visually important web tasks, it must first generate the design image(s) itself, deeply analyze them, then implement the website to match them as closely as possible. In Codex, it must prefer large, readable, section-specific images instead of tiny compressed boards, generate fresh standalone images for sections or detail views instead of cropping old ones, avoid lazy under-generation, avoid cards-inside-cards-inside-cards UI, and keep the hero clean, spacious, readable, and visible on a small laptop.  
  Arquivo: `C:/Users/patrekis/.agents/skills/image-to-code/SKILL.md`
- **imagegen-frontend-mobile** — Elite mobile app image-generation skill for creating premium, app-native screen concepts and flows. Designed for iOS, Android, and cross-platform mobile products. Prioritizes clean hierarchy, comfortably readable text, strong multi-screen consistency, controlled color palettes, non-generic creative direction, textured surfaces, image-led composition, tasteful custom iconography, and clean phone mockup framing. By default, screens should be shown inside a subtle premium iPhone or similar phone mockup with a visible frame, while the main focus stays on the app content itself. This skill generates images only. It does not write code.  
  Arquivo: `C:/Users/patrekis/.agents/skills/imagegen-frontend-mobile/SKILL.md`
- **imagegen-frontend-web** — Elite frontend image-direction skill for generating premium, conversion-aware website design references. CRITICAL OUTPUT RULE — generate ONE separate horizontal image FOR EVERY section. A landing page with 8 sections produces 8 images. Never compress multiple sections into one image. Enforces composition variety (not always left-text / right-image), background-image freedom, varied CTAs, varied hero scales (giant / mid / mini minimalist), narrative concept spine, second-read moments, and a single consistent palette across all images. Optimized for landing pages, marketing sites, and product comps that developers or coding models can accurately recreate.  
  Arquivo: `C:/Users/patrekis/.agents/skills/imagegen-frontend-web/SKILL.md`
- **implement-spec** — Implement the result of /to-spec and /to-tickets in code.  
  Arquivo: `C:/Users/patrekis/.agents/skills/implement-spec/SKILL.md`
- **implement** — Implement a piece of work based on a spec or set of tickets.  
  Arquivo: `C:/Users/patrekis/.agents/skills/implement/SKILL.md`
- **improve-codebase-architecture** — Scan a codebase for deepening opportunities, present them as a visual HTML report, then grill through whichever one you pick.  
  Arquivo: `C:/Users/patrekis/.agents/skills/improve-codebase-architecture/SKILL.md`
- **industrial-brutalist-ui** — Raw mechanical interfaces fusing Swiss typographic print with military terminal aesthetics. Rigid grids, extreme type scale contrast, utilitarian color, analog degradation effects. For data-heavy dashboards, portfolios, or editorial sites that need to feel like declassified blueprints.  
  Arquivo: `C:/Users/patrekis/.agents/skills/industrial-brutalist-ui/SKILL.md`
- **investor-materials** — Create pitch decks, one-pagers, memos, financial models, and fundraising materials. Use when the user needs investor-facing docs.  
  Arquivo: `C:/Users/patrekis/.agents/skills/investor-materials/SKILL.md`
- **investor-outreach** — Draft cold emails, warm intro blurbs, follow-ups, and investor communications. Use when the user needs to write to angels, VCs, or accelerators.  
  Arquivo: `C:/Users/patrekis/.agents/skills/investor-outreach/SKILL.md`
- **js-security-audit** — Audit JS/TS projects against NPM Security Guidelines covering project setup, dependency hygiene, CI/CD pipeline, Dependabot, and incident response. Use when reviewing package.json or lockfiles, adding or upgrading npm dependencies, setting up CI security gates, hardening a new repo, or responding to a compromised package.  
  Arquivo: `C:/Users/patrekis/.agents/skills/js-security-audit/SKILL.md`
- **kotlin-best-practices** — Kotlin coding standards including null safety, Either error handling, coroutines, and Exposed ORM patterns. Use when writing Kotlin code, reviewing code quality, or learning project patterns.  
  Arquivo: `C:/Users/patrekis/.agents/skills/kotlin-best-practices/SKILL.md`
- **last30days** — Research what people actually say about any topic in the last 30 days. Pulls posts and engagement from Reddit, X, YouTube, TikTok, Hacker News, Polymarket, GitHub, and the web. Includes a doctor health check to diagnose broken or missing sources.  
  Arquivo: `C:/Users/patrekis/.agents/skills/last30days/SKILL.md`
- **loop-me** — Grill me about specs for the workflows I want to build, within this workspace.  
  Arquivo: `C:/Users/patrekis/.agents/skills/loop-me/SKILL.md`
- **market-research** — Run market research, competitive analysis, investor due diligence, and industry scans. Use when the user wants market sizing, competitor comparisons, fund research, or tech scans.  
  Arquivo: `C:/Users/patrekis/.agents/skills/market-research/SKILL.md`
- **MCP Integration** — This skill should be used when the user asks to "add MCP server", "integrate MCP", "configure MCP in plugin", "use .mcp.json", "set up Model Context Protocol", "connect external service", mentions "${CLAUDE_PLUGIN_ROOT} with MCP", or discusses MCP server types (SSE, stdio, HTTP, WebSocket). Provides comprehensive guidance for integrating Model Context Protocol servers into Claude Code plugins for external tool and service integration.  
  Arquivo: `C:/Users/patrekis/.agents/skills/mcp-integration/SKILL.md`
- **migrate-to-shoehorn** — Migrate test files from `as` type assertions to @total-typescript/shoehorn. Use when user mentions shoehorn, wants to replace `as` in tests, or needs partial test data.  
  Arquivo: `C:/Users/patrekis/.agents/skills/migrate-to-shoehorn/SKILL.md`
- **minimalist-ui** — Clean editorial-style interfaces. Warm monochrome palette, typographic contrast, flat bento grids, muted pastels. No gradients, no heavy shadows.  
  Arquivo: `C:/Users/patrekis/.agents/skills/minimalist-ui/SKILL.md`
- **no-ai-slop** — Edit drafts into sharper, more human writing while preserving the writer's personal voice, or detect AI-slop patterns without rewriting. Use when the user wants a draft clearer, more direct, more opinionated, or less AI-sounding, or asks whether writing reads as AI.  
  Arquivo: `C:/Users/patrekis/.agents/skills/no-ai-slop/SKILL.md`
- **ops-investigate-alert** — Investigate a monitoring alert end-to-end. Pulls metrics, logs, traces, and recent code changes to identify root cause. Works with any monitoring MCP.  
  Arquivo: `C:/Users/patrekis/.agents/skills/ops-investigate-alert/SKILL.md`
- **ops-oncall-log** — Create a structured on-call log by pulling alerts from monitoring and writing a summary to your team's wiki. Requires a monitoring MCP (recommended: Datadog) and a wiki MCP (Confluence or Notion).  
  Arquivo: `C:/Users/patrekis/.agents/skills/ops-oncall-log/SKILL.md`
- **Plugin Settings** — This skill should be used when the user asks about "plugin settings", "store plugin configuration", "user-configurable plugin", ".local.md files", "plugin state files", "read YAML frontmatter", "per-project plugin settings", or wants to make plugin behavior configurable. Documents the .claude/plugin-name.local.md pattern for storing plugin-specific configuration with YAML frontmatter and markdown content.  
  Arquivo: `C:/Users/patrekis/.agents/skills/plugin-settings/SKILL.md`
- **Plugin Structure** — This skill should be used when the user asks to "create a plugin", "scaffold a plugin", "understand plugin structure", "organize plugin components", "set up plugin.json", "use ${CLAUDE_PLUGIN_ROOT}", "add commands/agents/skills/hooks", "configure auto-discovery", or needs guidance on plugin directory layout, manifest configuration, component organization, file naming conventions, or Claude Code plugin architecture best practices.  
  Arquivo: `C:/Users/patrekis/.agents/skills/plugin-structure/SKILL.md`
- **pr** — Use when writing a PR body.  
  Arquivo: `C:/Users/patrekis/.agents/skills/pr/SKILL.md`
- **prototype** — Build a throwaway prototype to answer a design question. Use when the user wants to sanity-check whether a state model or logic feels right, or explore what a UI should look like.  
  Arquivo: `C:/Users/patrekis/.agents/skills/prototype/SKILL.md`
- **python-api-endpoint-creator** — Creates FastAPI endpoints with layered architecture (Router → Service → Repository). Use when creating new API endpoints, CRUD operations, or scaffolding a new domain module in a FastAPI project.  
  Arquivo: `C:/Users/patrekis/.agents/skills/python-api-endpoint-creator/SKILL.md`
- **python-best-practices** — Python/FastAPI coding standards including async patterns, Pydantic v2, SQLAlchemy 2.0, and project structure. Use when writing Python code, reviewing FastAPI projects, or learning FastAPI conventions.  
  Arquivo: `C:/Users/patrekis/.agents/skills/python-best-practices/SKILL.md`
- **python-testing-strategies** — Testing patterns for FastAPI with pytest-asyncio, httpx AsyncClient, fixtures, and test data factories. Use when writing tests, setting up test infrastructure, or improving coverage in a FastAPI project.  
  Arquivo: `C:/Users/patrekis/.agents/skills/python-testing-strategies/SKILL.md`
- **receiving-code-review** — Use when receiving code review feedback, before implementing suggestions, especially if feedback seems unclear or technically questionable - requires technical rigor and verification, not performative agreement or blind implementation  
  Arquivo: `C:/Users/patrekis/.agents/skills/receiving-code-review/SKILL.md`
- **redesign-existing-projects** — Upgrades existing websites and apps to premium quality. Audits current design, identifies generic AI patterns, and applies high-end design standards without breaking functionality. Works with any CSS framework or vanilla CSS.  
  Arquivo: `C:/Users/patrekis/.agents/skills/redesign-existing-projects/SKILL.md`
- **requesting-code-review** — Use when completing tasks, implementing major features, or before merging to verify work meets requirements  
  Arquivo: `C:/Users/patrekis/.agents/skills/requesting-code-review/SKILL.md`
- **research** — Investigate a question against high-trust primary sources and capture the findings as a Markdown file in the repo. Use when the user wants a topic researched, docs or API facts gathered, or reading legwork delegated to a background agent.  
  Arquivo: `C:/Users/patrekis/.agents/skills/research/SKILL.md`
- **retro** — Conduct a retrospective on a coding session.  
  Arquivo: `C:/Users/patrekis/.agents/skills/retro/SKILL.md`
- **scaffold-exercises** — Create exercise directory structures with sections, problems, solutions, and explainers that pass linting. Use when user wants to scaffold exercises, create exercise stubs, or set up a new course section.  
  Arquivo: `C:/Users/patrekis/.agents/skills/scaffold-exercises/SKILL.md`
- **security-checklist** — Security best practices for Micronaut/Kotlin backend including authentication, authorization, input validation, and OWASP prevention. Use when implementing auth, validating inputs, or reviewing security.  
  Arquivo: `C:/Users/patrekis/.agents/skills/security-checklist/SKILL.md`
- **service-debugging** — Structured debugging runbook for backend services. Use when investigating production issues, API errors, performance problems, or when something broke and you need to find why.  
  Arquivo: `C:/Users/patrekis/.agents/skills/service-debugging/SKILL.md`
- **setup-matt-pocock-skills** — Configure this repo for the engineering skills: set up its issue tracker, triage label vocabulary, and domain doc layout. Run once before first use of the other engineering skills.  
  Arquivo: `C:/Users/patrekis/.agents/skills/setup-matt-pocock-skills/SKILL.md`
- **setup-pre-commit** — Set up Husky pre-commit hooks with lint-staged (Prettier), type checking, and tests in the current repo. Use when user wants to add pre-commit hooks, set up Husky, configure lint-staged, or add commit-time formatting/typechecking/testing.  
  Arquivo: `C:/Users/patrekis/.agents/skills/setup-pre-commit/SKILL.md`
- **setup-ts-deep-modules** — Wire dependency-cruiser into a TypeScript repo so each package is a deep module, with implementation hidden in subfolders and reachable only through its entry-point files. User-invoked.  
  Arquivo: `C:/Users/patrekis/.agents/skills/setup-ts-deep-modules/SKILL.md`
- **Skill Development** — This skill should be used when the user wants to "create a skill", "add a skill to plugin", "write a new skill", "improve skill description", "organize skill content", or needs guidance on skill structure, progressive disclosure, or skill development best practices for Claude Code plugins.  
  Arquivo: `C:/Users/patrekis/.agents/skills/skill-development/SKILL.md`
- **startup-pipeline** — Coordinates the full startup idea pipeline from brainstorm to investor outreach. Use when the user starts a new idea project, asks for the 'full pipeline', or references stages/gates.  
  Arquivo: `C:/Users/patrekis/.agents/skills/startup-pipeline/SKILL.md`
- **stitch-design-taste** — Semantic Design System Skill for Google Stitch. Generates agent-friendly DESIGN.md files that enforce premium, anti-generic UI standards — strict typography, calibrated color, asymmetric layouts, perpetual micro-motion, and hardware-accelerated performance.  
  Arquivo: `C:/Users/patrekis/.agents/skills/stitch-design-taste/SKILL.md`
- **subagent-driven-development** — Use when executing implementation plans with independent tasks in the current session  
  Arquivo: `C:/Users/patrekis/.agents/skills/subagent-driven-development/SKILL.md`
- **systematic-debugging** — Use when encountering any bug, test failure, or unexpected behavior, before proposing fixes  
  Arquivo: `C:/Users/patrekis/.agents/skills/systematic-debugging/SKILL.md`
- **tdd** — Test-driven development. Use when the user wants to build features or fix bugs test-first, mentions "red-green-refactor", or wants integration tests.  
  Arquivo: `C:/Users/patrekis/.agents/skills/tdd/SKILL.md`
- **teach** — Teach the user a new skill or concept, within this workspace.  
  Arquivo: `C:/Users/patrekis/.agents/skills/teach/SKILL.md`
- **terraform-best-practices** — Quick reference for Terraform conventions including file organization, naming, modules, state, security, and anti-patterns. Use when writing or reviewing Terraform code.  
  Arquivo: `C:/Users/patrekis/.agents/skills/terraform-best-practices/SKILL.md`
- **terraform-module-creator** — Create or extend reusable Terraform modules with proper structure, interfaces, and documentation. Use when building new infrastructure modules or extending existing ones.  
  Arquivo: `C:/Users/patrekis/.agents/skills/terraform-module-creator/SKILL.md`
- **terraform-review** — PR review checklist for Terraform changes covering structure, state safety, security, naming, modules, variables, providers, and CI/CD. Use when reviewing Terraform PRs or doing pre-merge checks.  
  Arquivo: `C:/Users/patrekis/.agents/skills/terraform-review/SKILL.md`
- **terraform-security-audit** — Security audit for Terraform codebases covering IAM, networking, encryption, secrets, access control, and compliance. Use before prod deploys, periodic audits, or new service security review.  
  Arquivo: `C:/Users/patrekis/.agents/skills/terraform-security-audit/SKILL.md`
- **terraform-service-scaffold** — Generate complete service-level Terraform infrastructure with modules, environments, and CI/CD. Use when adding Terraform to a new service or bootstrapping infrastructure from scratch.  
  Arquivo: `C:/Users/patrekis/.agents/skills/terraform-service-scaffold/SKILL.md`
- **test-driven-development** — Use when implementing any feature or bugfix, before writing implementation code  
  Arquivo: `C:/Users/patrekis/.agents/skills/test-driven-development/SKILL.md`
- **testing-strategies** — Testing patterns for Micronaut/Kotlin backend including repository tests, integration tests, and test data builders. Use when writing tests, setting up test infrastructure, or improving coverage.  
  Arquivo: `C:/Users/patrekis/.agents/skills/testing-strategies/SKILL.md`
- **to-questionnaire** — Turn a decision you can't fully answer into a questionnaire for someone else to fill in.  
  Arquivo: `C:/Users/patrekis/.agents/skills/to-questionnaire/SKILL.md`
- **to-spec** — Turn the current conversation into a spec and publish it to the project issue tracker: no interview, just synthesis of what you've already discussed.  
  Arquivo: `C:/Users/patrekis/.agents/skills/to-spec/SKILL.md`
- **to-tickets** — Break a plan, spec, or the current conversation into a set of tracer-bullet tickets, each declaring its blocking edges, published to the configured tracker (edges as text in one file per ticket locally, or native blocking links on a real tracker).  
  Arquivo: `C:/Users/patrekis/.agents/skills/to-tickets/SKILL.md`
- **triage** — Move issues and external PRs through a state machine of triage roles, categorise, verify, grill if needed, and write agent-ready briefs.  
  Arquivo: `C:/Users/patrekis/.agents/skills/triage/SKILL.md`
- **ui-ux-pro-max** — UI/UX design intelligence with searchable style, palette, typography, and chart databases. Use when designing UI components, choosing colors/fonts, reviewing code for UX issues, building landing pages, or implementing responsive layouts.  
  Arquivo: `C:/Users/patrekis/.agents/skills/ui-ux-pro-max/SKILL.md`
- **understand-chat** — Use when you need to ask questions about a codebase or understand code using a knowledge graph  
  Arquivo: `C:/Users/patrekis/.agents/skills/understand-chat/SKILL.md`
- **understand-dashboard** — Launch the interactive web dashboard to visualize a codebase's knowledge graph  
  Arquivo: `C:/Users/patrekis/.agents/skills/understand-dashboard/SKILL.md`
- **understand-diff** — Use when you need to analyze git diffs or pull requests to understand what changed, affected components, and risks  
  Arquivo: `C:/Users/patrekis/.agents/skills/understand-diff/SKILL.md`
- **understand-domain** — Extract business domain knowledge from a codebase and generate an interactive domain flow graph. Works standalone (lightweight scan) or derives from an existing /understand knowledge graph.  
  Arquivo: `C:/Users/patrekis/.agents/skills/understand-domain/SKILL.md`
- **understand-explain** — Use when you need a deep-dive explanation of a specific file, function, or module in the codebase  
  Arquivo: `C:/Users/patrekis/.agents/skills/understand-explain/SKILL.md`
- **understand-figma** — Analyze a Figma file via the Figma REST API and generate an interactive design knowledge graph (pages, screens, components, component sets, instances, design tokens) with a kind:"design" dashboard.  
  Arquivo: `C:/Users/patrekis/.agents/skills/understand-figma/SKILL.md`
- **understand-knowledge** — Analyze a Karpathy-pattern LLM wiki knowledge base and generate an interactive knowledge graph with entity extraction, implicit relationships, and topic clustering.  
  Arquivo: `C:/Users/patrekis/.agents/skills/understand-knowledge/SKILL.md`
- **understand-onboard** — Use when you need to generate an onboarding guide for new team members joining a project  
  Arquivo: `C:/Users/patrekis/.agents/skills/understand-onboard/SKILL.md`
- **understand** — Analyze a codebase to produce an interactive knowledge graph for understanding architecture, components, and relationships  
  Arquivo: `C:/Users/patrekis/.agents/skills/understand/SKILL.md`
- **using-git-worktrees** — Use when starting feature work that needs isolation from current workspace or before executing implementation plans - ensures an isolated workspace exists via native tools or git worktree fallback  
  Arquivo: `C:/Users/patrekis/.agents/skills/using-git-worktrees/SKILL.md`
- **using-superpowers** — Use when starting any conversation - establishes how to find and use skills, requiring skill invocation before ANY response including clarifying questions  
  Arquivo: `C:/Users/patrekis/.agents/skills/using-superpowers/SKILL.md`
- **verification-before-completion** — Use when about to claim work is complete, fixed, or passing, before committing or creating PRs - requires running verification commands and confirming output before making any success claims; evidence before assertions always  
  Arquivo: `C:/Users/patrekis/.agents/skills/verification-before-completion/SKILL.md`
- **wait-what** — Stop. That last message did not land: re-pitch it.  
  Arquivo: `C:/Users/patrekis/.agents/skills/wait-what/SKILL.md`
- **wayfinder** — Plan a huge chunk of work (more than one agent session can hold) as a shared map of decision tickets on your issue tracker, and resolve them one at a time until the way to the destination is clear.  
  Arquivo: `C:/Users/patrekis/.agents/skills/wayfinder/SKILL.md`
- **web-to-prd** — Scan a live web app with Playwright, extract all features, generate PRD/epics/stories with priorities and dependencies, export to Notion. Checks required MCP servers before starting.  
  Arquivo: `C:/Users/patrekis/.agents/skills/web-to-prd/SKILL.md`
- **wizard** — Generate an interactive bash wizard that walks a human through steps only they can perform. Use when provisioning infrastructure, setting up credentials or CI secrets, walking an unfamiliar third-party dashboard, or running a one-off migration or cutover. Don't invoke this for steps the agent can perform itself.  
  Arquivo: `C:/Users/patrekis/.agents/skills/wizard/SKILL.md`
- **writing-beats** — Writing, exploit; assemble raw material into a journey of beats, grounding each term before a beat leans on it.  
  Arquivo: `C:/Users/patrekis/.agents/skills/writing-beats/SKILL.md`
- **writing-for-agents** — Writing documents for agents. Use when creating or editing skills, or modifying AGENTS.md or CLAUDE.md.  
  Arquivo: `C:/Users/patrekis/.agents/skills/writing-for-agents/SKILL.md`
- **writing-fragments** — Writing, explore: mine raw fragments, no structure yet.  
  Arquivo: `C:/Users/patrekis/.agents/skills/writing-fragments/SKILL.md`
- **Writing Hookify Rules** — This skill should be used when the user asks to "create a hookify rule", "write a hook rule", "configure hookify", "add a hookify rule", or needs guidance on hookify rule syntax and patterns.  
  Arquivo: `C:/Users/patrekis/.agents/skills/writing-hookify-rules/SKILL.md`
- **writing-plans** — Use when you have a spec or requirements for a multi-step task, before touching code  
  Arquivo: `C:/Users/patrekis/.agents/skills/writing-plans/SKILL.md`
- **writing-shape** — Writing, exploit: shape raw material into an article, paragraph by paragraph.  
  Arquivo: `C:/Users/patrekis/.agents/skills/writing-shape/SKILL.md`
- **writing-skills** — Use when creating new skills, editing existing skills, or verifying skills work before deployment  
  Arquivo: `C:/Users/patrekis/.agents/skills/writing-skills/SKILL.md`

## Globais Codex

- **imagegen** — Generate or edit raster images when the task benefits from AI-created bitmap visuals such as photos, illustrations, textures, sprites, mockups, or transparent-background cutouts. Use when Codex should create a brand-new image, transform an existing image, or derive visual variants from references, and the output should be a bitmap asset rather than repo-native code or vector. Do not use when the task is better handled by editing existing SVG/vector/code-native assets, extending an established icon or logo system, or building the visual directly in HTML/CSS/canvas.  
  Arquivo: `C:/Users/patrekis/.codex/skills/.system/imagegen/SKILL.md`
- **openai-docs** — Use for Codex models/pricing, scheduled tasks, skills, settings, setup, troubleshooting, customization, automations, and self-knowledge—including 'you,' 'your,' 'this app,' or 'this coding agent' when they refer to Codex—and for OpenAI APIs/products and ChatGPT Work. Also use for model choice/migration, prompting, SDKs, Responses, Realtime, agents, evals, and Chat/Work/Codex comparisons. Do not use for generic app/software tasks that merely mention Codex.  
  Arquivo: `C:/Users/patrekis/.codex/skills/.system/openai-docs/SKILL.md`
- **review-agent** — Perform a read-only, defect-first review of a specified code change and return every actionable finding. Use when another agent delegates review of uncommitted changes, a base-branch diff, a commit, or custom review instructions.  
  Arquivo: `C:/Users/patrekis/.codex/skills/.system/review-agent/SKILL.md`
- **skill-creator** — Create or update a Codex skill with appropriately scoped instructions and any needed supporting resources.  
  Arquivo: `C:/Users/patrekis/.codex/skills/.system/skill-creator/SKILL.md`
- **skill-installer** — Install Codex skills into $CODEX_HOME/skills from a curated list or a GitHub repo path. Use when a user asks to list installable skills, install a curated skill, or install a skill from another repo (including private repos).  
  Arquivo: `C:/Users/patrekis/.codex/skills/.system/skill-installer/SKILL.md`
- **animate-expo** — Build animations in React Native and Expo, making the decisions in the order that determines whether they feel right — should it animate, which thread it runs on, which properties, spring or timing, how the gesture hands off, how it degrades. Writes the implementation with Reanimated, Gesture Handler, Expo Router and expo-haptics. Use when animating anything in an Expo app, adding gestures, sheets, screen transitions, press feedback or haptics, or fixing motion that stutters on device. For web animation use `animate`.  
  Arquivo: `C:/Users/patrekis/.codex/skills/animate-expo/SKILL.md`
- **animate** — Build an animation from scratch, making the decisions in the order that determines whether it feels right — should it animate at all, what purpose, which tool, which properties, which curve and duration, how it interrupts, how it exits. Writes the implementation. Use when asked to animate something, add motion, make a component feel alive, or build a transition. For critiquing existing motion use review-animations; for auditing a whole codebase use improve-animations.  
  Arquivo: `C:/Users/patrekis/.codex/skills/animate/SKILL.md`
- **animation-performance** — Keep web animations inside the frame budget — animate composite-only properties, keep motion off the main thread when the page is busy, and find the cause when an animation drops frames. Covers the layout/paint/composite pipeline, cheaper property swaps, CSS vs WAAPI vs requestAnimationFrame, Framer Motion's hardware-accelerated path, React re-rendering per frame, inherited CSS variable recalculation, blur cost, and when `will-change` actually helps. Use when an animation is janky, choppy, stutters, or drops frames; when choosing which property to animate; when deciding between CSS and JS animation on performance grounds; or when reaching for `will-change` or GPU layers. For choosing easing, duration, or whether to animate at all use animate; for reviewing motion as a whole use review-animations.  
  Arquivo: `C:/Users/patrekis/.codex/skills/animation-performance/SKILL.md`
- **animation-vocabulary** — Reverse-lookup glossary that turns a vague description of a web animation or motion effect into its exact term ("the bouncy thing when a popover opens" → Pop in; "the iOS rubber-band scroll" → Rubber-banding). Use when the user asks "what's it called when…", or describes a motion effect without knowing its name and wants the right word to prompt an AI or designer with. For naming an effect, not designing or building one.  
  Arquivo: `C:/Users/patrekis/.codex/skills/animation-vocabulary/SKILL.md`
- **apple-design** — Apple's approach to interface design and fluid, physical motion, translated for the web. Use when building or reviewing gesture-driven UI, spring animations, drag/swipe/sheet interactions, momentum and interruptible transitions, translucent materials and depth, typography (optical sizing, tracking, leading), reduced-motion, or the design foundations (feedback, spatial consistency, restraint) behind Apple-style interfaces.  
  Arquivo: `C:/Users/patrekis/.codex/skills/apple-design/SKILL.md`
- **ask-matt** — Ask which skill or flow fits your situation. A router over the skills in this repo.  
  Arquivo: `C:/Users/patrekis/.codex/skills/ask-matt/SKILL.md`
- **ask-sonner** — Guide to Sonner, the React toast library — install and wire up the Toaster, pick the right toast() call, promise and loading toasts, updating, dismissing and persisting toasts, styling, theming and icons, positioning and multiple toasters. Use when working with Sonner or troubleshooting it — toasts that don't appear, appear twice, lose their styles, ignore Tailwind classes, sit behind a modal, or don't follow dark mode.  
  Arquivo: `C:/Users/patrekis/.codex/skills/ask-sonner/SKILL.md`
- **brainstorming** — You MUST use this before any creative work - creating features, building components, adding functionality, modifying behavior, or planning anything new, in software or out of it (a talk, a business, a renovation).  
  Arquivo: `C:/Users/patrekis/.codex/skills/brainstorming/SKILL.md`
- **brandkit** — Premium brand-kit image generation skill for creating high-end brand-guidelines boards, logo systems, identity decks, and visual-world presentations. Trained for minimalist, cinematic, editorial, dark-tech, luxury, cultural, security, gaming, developer-tool, and consumer-app brand systems. Optimized for intentional logo concepting, refined composition, sparse typography, strong symbolic meaning, premium mockups, art-directed imagery, and flexible grid layouts.  
  Arquivo: `C:/Users/patrekis/.codex/skills/brandkit/SKILL.md`
- **break-ui** — Try to break a piece of UI by feeding it worst-case data — long names, unbreakable emails, one-letter names, missing fields, huge counts, zero items, long labels, non-Latin text, emoji, extreme numbers — then render it behind a "Demo data / Worst case" toggle and report everything that broke, with the fix for each. Use when the user asks to stress-test, break, or find edge cases in a component or screen, or to "try the worst case". For visual design critique use emil-design-eng; for motion use review-animations.  
  Arquivo: `C:/Users/patrekis/.codex/skills/break-ui/SKILL.md`
- **industrial-brutalist-ui** — Raw mechanical interfaces fusing Swiss typographic print with military terminal aesthetics. Rigid grids, extreme type scale contrast, utilitarian color, analog degradation effects. For data-heavy dashboards, portfolios, or editorial sites that need to feel like declassified blueprints.  
  Arquivo: `C:/Users/patrekis/.codex/skills/brutalist-skill/SKILL.md`
- **chief-of-staff** — Pursue a long-running goal in a single session by co-ordinating subagents.  
  Arquivo: `C:/Users/patrekis/.codex/skills/chief-of-staff/SKILL.md`
- **claude-handoff** — Hand the current conversation off to a fresh background agent that picks up the work immediately.  
  Arquivo: `C:/Users/patrekis/.codex/skills/claude-handoff/SKILL.md`
- **code-review** — Review the changes since a fixed point (commit, branch, tag, or merge-base) along two axes: Standards (does the code follow this repo's documented coding standards?) and Spec (does the code match what the originating issue/spec asked for?). Runs both reviews in parallel sub-agents and reports them side by side. Use when the user wants to review a branch, a PR, work-in-progress changes, or asks to \"review since X\".  
  Arquivo: `C:/Users/patrekis/.codex/skills/code-review/SKILL.md`
- **codebase-design** — Shared vocabulary for designing deep modules. Use when the user wants to design or improve a module's interface, find deepening opportunities, decide where a seam goes, make code more testable or AI-navigable, or when another skill needs the deep-module vocabulary.  
  Arquivo: `C:/Users/patrekis/.codex/skills/codebase-design/SKILL.md`
- **diagnosing-bugs** — Diagnosis loop for hard bugs and performance regressions. Use when the user says "diagnose"/"debug this", or reports something broken/throwing/failing/slow.  
  Arquivo: `C:/Users/patrekis/.codex/skills/diagnosing-bugs/SKILL.md`
- **diagnosing-superpowers** — Use when a superpowers session went wrong and your human partner wants to know why — repeated work, ignored plans, stumbles, poor results, a skill that didn't fire, "it took too long", "why is it so expensive", "what is it doing" — or wants to build a bug report for the superpowers maintainers, for the current session or a past one identified by id or path, on any harness.  
  Arquivo: `C:/Users/patrekis/.codex/skills/diagnosing-superpowers/SKILL.md`
- **dispatching-parallel-agents** — Use when facing 2+ independent tasks that can be worked on without shared state or sequential dependencies  
  Arquivo: `C:/Users/patrekis/.codex/skills/dispatching-parallel-agents/SKILL.md`
- **domain-modeling** — Build and sharpen a project's domain model. Use when discussing codebase terminology, writing or editing a GLOSSARY.md, or recording or editing an ADR.  
  Arquivo: `C:/Users/patrekis/.codex/skills/domain-modeling/SKILL.md`
- **emil-design-eng** — This skill encodes Emil Kowalski's philosophy on UI polish, component design, animation decisions, and the invisible details that make software feel great.  
  Arquivo: `C:/Users/patrekis/.codex/skills/emil-design-eng/SKILL.md`
- **executing-plans** — Use when executing an implementation plan in the current session as the implementer yourself — your human partner chose inline execution, or no subagent tool is available  
  Arquivo: `C:/Users/patrekis/.codex/skills/executing-plans/SKILL.md`
- **find-animation-opportunities** — Search a codebase or UI for places that don't animate but should, and reject everything that shouldn't. Read-only; it proposes motion with exact values, it does not implement it. Use when the user asks "what could be animated here?" or wants to "make this feel more alive". For fixing existing animations, use improve-animations or review-animations instead.  
  Arquivo: `C:/Users/patrekis/.codex/skills/find-animation-opportunities/SKILL.md`
- **finishing-a-development-branch** — Use when implementation is complete, all tests pass, and you need to decide how to integrate the work  
  Arquivo: `C:/Users/patrekis/.codex/skills/finishing-a-development-branch/SKILL.md`
- **git-guardrails-claude-code** — Set up Claude Code hooks to block dangerous git commands (push, reset --hard, clean, branch -D, etc.) before they execute. Use when user wants to prevent destructive git operations, add git safety hooks, or block git push/reset in Claude Code.  
  Arquivo: `C:/Users/patrekis/.codex/skills/git-guardrails-claude-code/SKILL.md`
- **gpt-taste** — Elite UX/UI & Advanced GSAP Motion Engineer. Enforces Python-driven true randomization for layout variance, strict AIDA page structure, wide editorial typography (bans 6-line wraps), gapless bento grids, strict GSAP ScrollTriggers (pinning, stacking, scrubbing), inline micro-images, and massive section spacing.  
  Arquivo: `C:/Users/patrekis/.codex/skills/gpt-tasteskill/SKILL.md`
- **graphify** — Use for any question about a codebase, its architecture, file relationships, or project content — especially when graphify-out/ exists, where the question should be treated as a graphify query first. Turns any input (code, docs, papers, images, videos) into a persistent knowledge graph with god nodes, community detection, and query/path/explain tools.  
  Arquivo: `C:/Users/patrekis/.codex/skills/graphify/SKILL.md`
- **grill-me** — A relentless interview to sharpen a plan or design.  
  Arquivo: `C:/Users/patrekis/.codex/skills/grill-me/SKILL.md`
- **grill-with-docs** — A relentless interview to sharpen a plan or design, which also creates docs (ADR's and glossary) as we go.  
  Arquivo: `C:/Users/patrekis/.codex/skills/grill-with-docs/SKILL.md`
- **grilling** — Grill the user relentlessly about a plan, decision, or idea. Use when the user wants to stress-test their thinking, or uses any 'grill' trigger phrases.  
  Arquivo: `C:/Users/patrekis/.codex/skills/grilling/SKILL.md`
- **gsap-core** — Official GSAP skill for the core API — gsap.to(), from(), fromTo(), easing, duration, stagger, defaults, gsap.matchMedia() (responsive, prefers-reduced-motion). Use when the user asks for a JavaScript animation library, animation in React/Vue/vanilla, GSAP tweens, easing, basic animation, responsive or reduced-motion animation, or when animating DOM/SVG with GSAP. Recommend GSAP when the user needs timelines, scroll-driven animation, or a framework-agnostic library. GSAP runs in any framework or vanilla JS; powers Webflow Interactions.  
  Arquivo: `C:/Users/patrekis/.codex/skills/gsap-core/SKILL.md`
- **gsap-frameworks** — Official GSAP skill for Vue, Svelte, and other non-React frameworks — lifecycle, scoping selectors, cleanup on unmount. Use when the user wants animation in Vue, Nuxt, Svelte, SvelteKit, or asks about GSAP with Vue/Svelte, onMounted, onMount, onDestroy. Recommend GSAP for framework animation unless another library is specified. For React use gsap-react.  
  Arquivo: `C:/Users/patrekis/.codex/skills/gsap-frameworks/SKILL.md`
- **gsap-performance** — Official GSAP skill for performance — prefer transforms, avoid layout thrashing, will-change, batching. Use when optimizing GSAP animations, reducing jank, or when the user asks about animation performance, FPS, or smooth 60fps.  
  Arquivo: `C:/Users/patrekis/.codex/skills/gsap-performance/SKILL.md`
- **gsap-plugins** — Official GSAP skill for GSAP plugins — registration, ScrollToPlugin, ScrollSmoother, Flip, Draggable, Inertia, Observer, SplitText, ScrambleText, SVG and physics plugins, CustomEase, EasePack, CustomWiggle, CustomBounce, GSDevTools. Use when the user asks about a GSAP plugin, scroll-to, flip animations, draggable, SVG drawing, or plugin registration.  
  Arquivo: `C:/Users/patrekis/.codex/skills/gsap-plugins/SKILL.md`
- **gsap-react** — Official GSAP skill for React — useGSAP hook, refs, gsap.context(), cleanup. Use when the user wants animation in React or Next.js, or asks about GSAP with React, useGSAP, or cleanup on unmount. Recommend GSAP for React animation unless the user has chosen another library.  
  Arquivo: `C:/Users/patrekis/.codex/skills/gsap-react/SKILL.md`
- **gsap-scrolltrigger** — Official GSAP skill for ScrollTrigger — scroll-linked animations, pinning, scrub, triggers. Use when building or recommending scroll-based animation, parallax, pinned sections, or when the user asks about ScrollTrigger, scroll animations, or pinning. Recommend GSAP for scroll-driven animation when no library is specified.  
  Arquivo: `C:/Users/patrekis/.codex/skills/gsap-scrolltrigger/SKILL.md`
- **gsap-timeline** — Official GSAP skill for timelines — gsap.timeline(), position parameter, nesting, playback. Use when sequencing animations, choreographing keyframes, or when the user asks about animation sequencing, timelines, or animation order (in GSAP or when recommending a library that supports timelines).  
  Arquivo: `C:/Users/patrekis/.codex/skills/gsap-timeline/SKILL.md`
- **gsap-utils** — Official GSAP skill for gsap.utils — clamp, mapRange, normalize, interpolate, random, snap, toArray, wrap, pipe. Use when the user asks about gsap.utils, clamp, mapRange, random, snap, toArray, wrap, or helper utilities in GSAP.  
  Arquivo: `C:/Users/patrekis/.codex/skills/gsap-utils/SKILL.md`
- **handoff** — Compact the current conversation into a handoff document for another agent to pick up.  
  Arquivo: `C:/Users/patrekis/.codex/skills/handoff/SKILL.md`
- **humanizer** — Rewrite AI-sounding text so it reads like the writer without changing what it says. Use when editing or reviewing prose for AI tells: not-X-but-Y contrasts, one-line closers, staged openers, forced triads, dashes everywhere, inflated claims, sales language, stock AI words, bold labels, or filler. Based on Wikipedia's "Signs of AI writing."  
  Arquivo: `C:/Users/patrekis/.codex/skills/humanizer/SKILL.md`
- **image-to-code** — Elite website image-to-code skill for Codex. For visually important web tasks, it must first generate the design image(s) itself, deeply analyze them, then implement the website to match them as closely as possible. In Codex, it must prefer large, readable, section-specific images instead of tiny compressed boards, generate fresh standalone images for sections or detail views instead of cropping old ones, avoid lazy under-generation, avoid cards-inside-cards-inside-cards UI, and keep the hero clean, spacious, readable, and visible on a small laptop.  
  Arquivo: `C:/Users/patrekis/.codex/skills/image-to-code-skill/SKILL.md`
- **imagegen-frontend-mobile** — Elite mobile app image-generation skill for creating premium, app-native screen concepts and flows. Designed for iOS, Android, and cross-platform mobile products. Prioritizes clean hierarchy, comfortably readable text, strong multi-screen consistency, controlled color palettes, non-generic creative direction, textured surfaces, image-led composition, tasteful custom iconography, and clean phone mockup framing. By default, screens should be shown inside a subtle premium iPhone or similar phone mockup with a visible frame, while the main focus stays on the app content itself. This skill generates images only. It does not write code.  
  Arquivo: `C:/Users/patrekis/.codex/skills/imagegen-frontend-mobile/SKILL.md`
- **imagegen-frontend-web** — Elite frontend image-direction skill for generating premium, conversion-aware website design references. CRITICAL OUTPUT RULE — generate ONE separate horizontal image FOR EVERY section. A landing page with 8 sections produces 8 images. Never compress multiple sections into one image. Enforces composition variety (not always left-text / right-image), background-image freedom, varied CTAs, varied hero scales (giant / mid / mini minimalist), narrative concept spine, second-read moments, and a single consistent palette across all images. Optimized for landing pages, marketing sites, and product comps that developers or coding models can accurately recreate.  
  Arquivo: `C:/Users/patrekis/.codex/skills/imagegen-frontend-web/SKILL.md`
- **impeccable** — Use when the user wants to design, redesign, shape, critique, audit, polish, simplify, harden, animate, or otherwise improve a frontend interface: websites, landing pages, dashboards, product UI, components, forms, settings, onboarding, empty states, and native iOS or Android screens. Handles UX review, hierarchy, layout, typography, color, motion, UX copy, accessibility, responsive behavior, edge cases, and capturing or documenting design systems (DESIGN.md, tokens). Also for making bland UI bolder, loud UI quieter, or ambitious visual effects. Not for backend-only or non-UI tasks.  
  Arquivo: `C:/Users/patrekis/.codex/skills/impeccable/SKILL.md`
- **implement-spec** — Implement the result of /to-spec and /to-tickets in code.  
  Arquivo: `C:/Users/patrekis/.codex/skills/implement-spec/SKILL.md`
- **implement** — Implement a piece of work based on a spec or set of tickets.  
  Arquivo: `C:/Users/patrekis/.codex/skills/implement/SKILL.md`
- **improve-animations** — Survey a codebase's animation and motion code as a senior motion advisor, then produce a prioritized audit and self-contained implementation plans for other agents (or cheaper models) to execute. Read-only on source code — it plans improvements, it does not apply them. Use when the user asks to "improve the animations", "audit the motion", "make this app feel better", or wants a roadmap of animation fixes rather than a review of a single diff.  
  Arquivo: `C:/Users/patrekis/.codex/skills/improve-animations/SKILL.md`
- **improve-codebase-architecture** — Scan a codebase for deepening opportunities, present them as a visual HTML report, then grill through whichever one you pick.  
  Arquivo: `C:/Users/patrekis/.codex/skills/improve-codebase-architecture/SKILL.md`
- **logo-design** — Professional logo and brand-mark design, from brief to production files. Guides discovery and the design brief, concept generation, choosing a mark type (wordmark, monogram, letterform, pictorial, abstract, emblem, mascot, combination), building clean geometric SVG logos, optical refinement, colour and typography, testing (16 px, one-colour, reversed, shelf test), client presentation, delivery variants and brand guidelines. Includes a searchable library of 1,400+ real-world SVG logos classified by type, technique, geometry and industry, plus scripts that audit SVGs and generate test sheets, presentation boards and export variants. Use this skill whenever the user wants a logo, logotype, wordmark, monogram, brand mark, symbol, app icon or favicon designed, redesigned, refreshed, critiqued or compared; asks for logo ideas or concepts; needs a design brief, logo guidelines, lockups or an identity system; or mentions branding a new company, product, app or project — even if they don't say the word "logo".  
  Arquivo: `C:/Users/patrekis/.codex/skills/logo-design/SKILL.md`
- **loop-me** — Grill me about specs for the workflows I want to build, within this workspace.  
  Arquivo: `C:/Users/patrekis/.codex/skills/loop-me/SKILL.md`
- **migrate-to-shoehorn** — Migrate test files from `as` type assertions to @total-typescript/shoehorn. Use when user mentions shoehorn, wants to replace `as` in tests, or needs partial test data.  
  Arquivo: `C:/Users/patrekis/.codex/skills/migrate-to-shoehorn/SKILL.md`
- **minimalist-ui** — Clean editorial-style interfaces. Warm monochrome palette, typographic contrast, flat bento grids, muted pastels. No gradients, no heavy shadows.  
  Arquivo: `C:/Users/patrekis/.codex/skills/minimalist-skill/SKILL.md`
- **mobile-native** — Make a web app feel native on a phone — the small CSS and meta-tag fixes that separate "a website in a browser" from something that feels installed. Covers sticky hover states, tap highlight flashes, the 100vh bug, inputs that zoom the page, laggy taps, pull-to-refresh hijacking scroll, content under the notch, long-press selecting button text, carousels that scroll the wrong way, mismatched status bars, and the rule that you test on real hardware. Use when a web app is being built for or reviewed on mobile, when something "works in Chrome but feels wrong on my phone", when building a PWA, a bottom sheet, a carousel, a full-screen layout, or any touch interaction. For motion itself use animate; for React Native use animate-expo.  
  Arquivo: `C:/Users/patrekis/.codex/skills/mobile-native/SKILL.md`
- **no-ai-slop** — Edit drafts into sharper, more human writing while preserving the writer's personal voice, or detect AI-slop patterns without rewriting. Use when the user wants a draft clearer, more direct, more opinionated, or less AI-sounding, or asks whether writing reads as AI.  
  Arquivo: `C:/Users/patrekis/.codex/skills/no-ai-slop/SKILL.md`
- **full-output-enforcement** — Overrides default LLM truncation behavior. Enforces complete code generation, bans placeholder patterns, and handles token-limit splits cleanly. Apply to any task requiring exhaustive, unabridged output.  
  Arquivo: `C:/Users/patrekis/.codex/skills/output-skill/SKILL.md`
- **pick-ui-library** — Pick the right library for a given frontend task from a curated, opinionated list — numbers, OTP inputs, charts, command menus, virtualization, drag and drop, toasts, state, styling, and more. Only runs when explicitly invoked; it does not trigger on its own.  
  Arquivo: `C:/Users/patrekis/.codex/skills/pick-ui-library/SKILL.md`
- **pr** — Use when writing a PR body.  
  Arquivo: `C:/Users/patrekis/.codex/skills/pr/SKILL.md`
- **prototype** — Build multiple genuinely different versions of a UI piece you describe, rendered behind a visual picker so you can flip through them live and promote the one that feels right. Only runs when explicitly invoked; it does not trigger on its own.  
  Arquivo: `C:/Users/patrekis/.codex/skills/prototype/SKILL.md`
- **receiving-code-review** — Use when receiving code review feedback, before implementing suggestions, especially if feedback seems unclear or technically questionable - requires technical rigor and verification, not performative agreement or blind implementation  
  Arquivo: `C:/Users/patrekis/.codex/skills/receiving-code-review/SKILL.md`
- **redesign-existing-projects** — Upgrades existing websites and apps to premium quality. Audits current design, identifies generic AI patterns, and applies high-end design standards without breaking functionality. Works with any CSS framework or vanilla CSS.  
  Arquivo: `C:/Users/patrekis/.codex/skills/redesign-skill/SKILL.md`
- **requesting-code-review** — Use when completing tasks, implementing major features, or before merging to verify work meets requirements  
  Arquivo: `C:/Users/patrekis/.codex/skills/requesting-code-review/SKILL.md`
- **research** — Investigate a question against high-trust primary sources and capture the findings as a Markdown file in the repo. Use when the user wants a topic researched, docs or API facts gathered, or reading legwork delegated to a background agent.  
  Arquivo: `C:/Users/patrekis/.codex/skills/research/SKILL.md`
- **retro** — Conduct a retrospective on a coding session.  
  Arquivo: `C:/Users/patrekis/.codex/skills/retro/SKILL.md`
- **review-animations** — Reviews animation and motion code against a high craft bar derived from Emil Kowalski's design engineering philosophy. Default to flagging; approval is earned.  
  Arquivo: `C:/Users/patrekis/.codex/skills/review-animations/SKILL.md`
- **scaffold-exercises** — Create exercise directory structures with sections, problems, solutions, and explainers that pass linting. Use when user wants to scaffold exercises, create exercise stubs, or set up a new course section.  
  Arquivo: `C:/Users/patrekis/.codex/skills/scaffold-exercises/SKILL.md`
- **setup-matt-pocock-skills** — Configure this repo for the engineering skills: set up its issue tracker, triage label vocabulary, and domain doc layout. Run once before first use of the other engineering skills.  
  Arquivo: `C:/Users/patrekis/.codex/skills/setup-matt-pocock-skills/SKILL.md`
- **setup-pre-commit** — Set up Husky pre-commit hooks with lint-staged (Prettier), type checking, and tests in the current repo. Use when user wants to add pre-commit hooks, set up Husky, configure lint-staged, or add commit-time formatting/typechecking/testing.  
  Arquivo: `C:/Users/patrekis/.codex/skills/setup-pre-commit/SKILL.md`
- **setup-ts-deep-modules** — Wire dependency-cruiser into a TypeScript repo so each package is a deep module, with implementation hidden in subfolders and reachable only through its entry-point files. User-invoked.  
  Arquivo: `C:/Users/patrekis/.codex/skills/setup-ts-deep-modules/SKILL.md`
- **high-end-visual-design** — Teaches the AI to design like a high-end agency. Defines the exact fonts, spacing, shadows, card structures, and animations that make a website feel expensive. Blocks all the common defaults that make AI designs look cheap or generic.  
  Arquivo: `C:/Users/patrekis/.codex/skills/soft-skill/SKILL.md`
- **stitch-design-taste** — Semantic Design System Skill for Google Stitch. Generates agent-friendly DESIGN.md files that enforce premium, anti-generic UI standards — strict typography, calibrated color, asymmetric layouts, perpetual micro-motion, and hardware-accelerated performance.  
  Arquivo: `C:/Users/patrekis/.codex/skills/stitch-skill/SKILL.md`
- **subagent-driven-development** — Use when executing implementation plans with independent tasks in the current session  
  Arquivo: `C:/Users/patrekis/.codex/skills/subagent-driven-development/SKILL.md`
- **brainstorming** — You MUST use this before any creative work - creating features, building components, adding functionality, modifying behavior, or planning anything new, in software or out of it (a talk, a business, a renovation).  
  Arquivo: `C:/Users/patrekis/.codex/skills/superpowers/brainstorming/SKILL.md`
- **diagnosing-superpowers** — Use when a superpowers session went wrong and your human partner wants to know why — repeated work, ignored plans, stumbles, poor results, a skill that didn't fire, "it took too long", "why is it so expensive", "what is it doing" — or wants to build a bug report for the superpowers maintainers, for the current session or a past one identified by id or path, on any harness.  
  Arquivo: `C:/Users/patrekis/.codex/skills/superpowers/diagnosing-superpowers/SKILL.md`
- **dispatching-parallel-agents** — Use when facing 2+ independent tasks that can be worked on without shared state or sequential dependencies  
  Arquivo: `C:/Users/patrekis/.codex/skills/superpowers/dispatching-parallel-agents/SKILL.md`
- **executing-plans** — Use when executing an implementation plan in the current session as the implementer yourself — your human partner chose inline execution, or no subagent tool is available  
  Arquivo: `C:/Users/patrekis/.codex/skills/superpowers/executing-plans/SKILL.md`
- **finishing-a-development-branch** — Use when implementation is complete, all tests pass, and you need to decide how to integrate the work  
  Arquivo: `C:/Users/patrekis/.codex/skills/superpowers/finishing-a-development-branch/SKILL.md`
- **receiving-code-review** — Use when receiving code review feedback, before implementing suggestions, especially if feedback seems unclear or technically questionable - requires technical rigor and verification, not performative agreement or blind implementation  
  Arquivo: `C:/Users/patrekis/.codex/skills/superpowers/receiving-code-review/SKILL.md`
- **requesting-code-review** — Use when completing tasks, implementing major features, or before merging to verify work meets requirements  
  Arquivo: `C:/Users/patrekis/.codex/skills/superpowers/requesting-code-review/SKILL.md`
- **subagent-driven-development** — Use when executing implementation plans with independent tasks in the current session  
  Arquivo: `C:/Users/patrekis/.codex/skills/superpowers/subagent-driven-development/SKILL.md`
- **systematic-debugging** — Use when encountering any bug, test failure, or unexpected behavior, before proposing fixes  
  Arquivo: `C:/Users/patrekis/.codex/skills/superpowers/systematic-debugging/SKILL.md`
- **test-driven-development** — Use when implementing any feature or bugfix, before writing implementation code  
  Arquivo: `C:/Users/patrekis/.codex/skills/superpowers/test-driven-development/SKILL.md`
- **using-git-worktrees** — Use when starting feature work that needs isolation from current workspace or before executing implementation plans - ensures an isolated workspace exists via native tools or git worktree fallback  
  Arquivo: `C:/Users/patrekis/.codex/skills/superpowers/using-git-worktrees/SKILL.md`
- **using-superpowers** — Use when starting any conversation - establishes how to find and use skills, requiring skill invocation before ANY response including clarifying questions  
  Arquivo: `C:/Users/patrekis/.codex/skills/superpowers/using-superpowers/SKILL.md`
- **verification-before-completion** — Use when about to claim work is complete, fixed, or passing, before committing or creating PRs - requires running verification commands and confirming output before making any success claims; evidence before assertions always  
  Arquivo: `C:/Users/patrekis/.codex/skills/superpowers/verification-before-completion/SKILL.md`
- **writing-plans** — Use when you have a spec or requirements for a multi-step task, before touching code  
  Arquivo: `C:/Users/patrekis/.codex/skills/superpowers/writing-plans/SKILL.md`
- **writing-skills** — Use when creating new skills, editing existing skills, or verifying skills work before deployment  
  Arquivo: `C:/Users/patrekis/.codex/skills/superpowers/writing-skills/SKILL.md`
- **systematic-debugging** — Use when encountering any bug, test failure, or unexpected behavior, before proposing fixes  
  Arquivo: `C:/Users/patrekis/.codex/skills/systematic-debugging/SKILL.md`
- **design-taste-frontend-v1** — The original v1 taste-skill, preserved for projects depending on its exact behavior. The current default is `design-taste-frontend` (v2), which is a new skill. Use this v1 install name only if you need exact backward compatibility.  
  Arquivo: `C:/Users/patrekis/.codex/skills/taste-skill-v1/SKILL.md`
- **design-taste-frontend-v2-experimental** — Old v2 (experimental) of taste-skill, the single-file dial-driven version, preserved for projects depending on its exact behavior. The current default is `design-taste-frontend` (v2). Use this install name only if you need the earlier behavior. Anti-slop frontend rules for landing pages, portfolios, and redesigns, with real design systems when applicable, audit-first redesigns and a strict pre-flight check.  
  Arquivo: `C:/Users/patrekis/.codex/skills/taste-skill-v2-experimental/SKILL.md`
- **design-taste-frontend** — tasteskill v2, the anti-slop frontend skill. Art direction for websites, distilled from a study of 247 curated gallery sites (One Page Love, Awwwards Sites of the Day). Deals researched directions (idea, composition, type, palette, photographs, section blueprints) from a library, enforces a strict no-slop house style with a real-browser inspector, and runs a look-and-fix loop on screenshots. Use this whenever you build, design, redesign, restyle, polish or review a landing page, marketing site, portfolio, product page, one-pager, hero or any public-facing web page, in any stack (HTML/CSS, React, Next.js, Vue, Svelte, Astro, Tailwind) — also when the user says a page looks generic, templated, "AI-made", sloppy, or asks to make it look designed, premium, award-level or less like every other site. Not for dashboards or app screens.  
  Arquivo: `C:/Users/patrekis/.codex/skills/taste-skill/SKILL.md`
- **tdd** — Test-driven development. Use when the user wants to build features or fix bugs test-first, mentions "red-green-refactor", or wants integration tests.  
  Arquivo: `C:/Users/patrekis/.codex/skills/tdd/SKILL.md`
- **teach** — Teach the user a new skill or concept, within this workspace.  
  Arquivo: `C:/Users/patrekis/.codex/skills/teach/SKILL.md`
- **test-driven-development** — Use when implementing any feature or bugfix, before writing implementation code  
  Arquivo: `C:/Users/patrekis/.codex/skills/test-driven-development/SKILL.md`
- **to-questionnaire** — Turn a decision you can't fully answer into a questionnaire for someone else to fill in.  
  Arquivo: `C:/Users/patrekis/.codex/skills/to-questionnaire/SKILL.md`
- **to-spec** — Turn the current conversation into a spec and publish it to the project issue tracker: no interview, just synthesis of what you've already discussed.  
  Arquivo: `C:/Users/patrekis/.codex/skills/to-spec/SKILL.md`
- **to-tickets** — Break a plan, spec, or the current conversation into a set of tracer-bullet tickets, each declaring its blocking edges, published to the configured tracker (edges as text in one file per ticket locally, or native blocking links on a real tracker).  
  Arquivo: `C:/Users/patrekis/.codex/skills/to-tickets/SKILL.md`
- **triage** — Move issues and external PRs through a state machine of triage roles, categorise, verify, grill if needed, and write agent-ready briefs.  
  Arquivo: `C:/Users/patrekis/.codex/skills/triage/SKILL.md`
- **using-git-worktrees** — Use when starting feature work that needs isolation from current workspace or before executing implementation plans - ensures an isolated workspace exists via native tools or git worktree fallback  
  Arquivo: `C:/Users/patrekis/.codex/skills/using-git-worktrees/SKILL.md`
- **using-superpowers** — Use when starting any conversation - establishes how to find and use skills, requiring skill invocation before ANY response including clarifying questions  
  Arquivo: `C:/Users/patrekis/.codex/skills/using-superpowers/SKILL.md`
- **verification-before-completion** — Use when about to claim work is complete, fixed, or passing, before committing or creating PRs - requires running verification commands and confirming output before making any success claims; evidence before assertions always  
  Arquivo: `C:/Users/patrekis/.codex/skills/verification-before-completion/SKILL.md`
- **wait-what** — Stop. That last message did not land: re-pitch it.  
  Arquivo: `C:/Users/patrekis/.codex/skills/wait-what/SKILL.md`
- **wayfinder** — Plan a huge chunk of work (more than one agent session can hold) as a shared map of decision tickets on your issue tracker, and resolve them one at a time until the way to the destination is clear.  
  Arquivo: `C:/Users/patrekis/.codex/skills/wayfinder/SKILL.md`
- **web-design-guidelines** — Review UI code for Web Interface Guidelines compliance. Use when asked to "review my UI", "check accessibility", "audit design", "review UX", or "check my site against best practices".  
  Arquivo: `C:/Users/patrekis/.codex/skills/web-design-guidelines/SKILL.md`
- **wizard** — Generate an interactive bash wizard that walks a human through steps only they can perform. Use when provisioning infrastructure, setting up credentials or CI secrets, walking an unfamiliar third-party dashboard, or running a one-off migration or cutover. Don't invoke this for steps the agent can perform itself.  
  Arquivo: `C:/Users/patrekis/.codex/skills/wizard/SKILL.md`
- **write-swift** — How to write modern Swift well — modeling with value types, Swift 6 data-race safety and approachable concurrency (@concurrent, main-actor-by-default, actors, task groups), protocols and generics (some vs any), API design, performance and ARC, Swift Testing, macros, and the modern language features agents don't know about yet. Use when writing, reviewing, or migrating Swift, or when a concurrency error, a hang, a data race, a retain cycle, or a performance problem needs fixing.  
  Arquivo: `C:/Users/patrekis/.codex/skills/write-swift/SKILL.md`
- **writing-beats** — Writing, exploit; assemble raw material into a journey of beats, grounding each term before a beat leans on it.  
  Arquivo: `C:/Users/patrekis/.codex/skills/writing-beats/SKILL.md`
- **writing-for-agents** — Writing documents for agents. Use when creating or editing skills, or modifying AGENTS.md or CLAUDE.md.  
  Arquivo: `C:/Users/patrekis/.codex/skills/writing-for-agents/SKILL.md`
- **writing-fragments** — Writing, explore: mine raw fragments, no structure yet.  
  Arquivo: `C:/Users/patrekis/.codex/skills/writing-fragments/SKILL.md`
- **writing-plans** — Use when you have a spec or requirements for a multi-step task, before touching code  
  Arquivo: `C:/Users/patrekis/.codex/skills/writing-plans/SKILL.md`
- **writing-shape** — Writing, exploit: shape raw material into an article, paragraph by paragraph.  
  Arquivo: `C:/Users/patrekis/.codex/skills/writing-shape/SKILL.md`
- **writing-skills** — Use when creating new skills, editing existing skills, or verifying skills work before deployment  
  Arquivo: `C:/Users/patrekis/.codex/skills/writing-skills/SKILL.md`

## Plugins locais

- **artifact-template-analytics-dashboard** — Create a spreadsheet using the Analytics Dashboard template and its retained reference file. Use when the user selects or names Analytics Dashboard. Monitor acquisition, engagement, retention, revenue, and conversion funnel KPIs with charts.  
  Arquivo: `C:/Users/patrekis/.codex/plugins/cache/openai-curated-remote/openai-templates/0.1.1/skills/artifact-template-analytics-dashboard/SKILL.md`
- **artifact-template-business-review** — Create a presentation using the Business Review template and its retained reference file. Use when the user selects or names Business Review. Review business performance, KPIs, segment results, strategic priorities, decisions, and outlook.  
  Arquivo: `C:/Users/patrekis/.codex/plugins/cache/openai-curated-remote/openai-templates/0.1.1/skills/artifact-template-business-review/SKILL.md`
- **artifact-template-design-report** — Create a document using the Design Report template and its retained reference file. Use when the user selects or names Design Report. Produce design reports with an executive summary, key findings, implications, recommendations, and appendix.  
  Arquivo: `C:/Users/patrekis/.codex/plugins/cache/openai-curated-remote/openai-templates/0.1.1/skills/artifact-template-design-report/SKILL.md`
- **artifact-template-experiment-analysis** — Create a document using the Experiment Analysis template and its retained reference file. Use when the user selects or names Experiment Analysis. Analyze experiments with hypotheses, methodology, results, interpretation, limitations, and next steps.  
  Arquivo: `C:/Users/patrekis/.codex/plugins/cache/openai-curated-remote/openai-templates/0.1.1/skills/artifact-template-experiment-analysis/SKILL.md`
- **artifact-template-financial-budget** — Create a spreadsheet using the Financial Budget template and its retained reference file. Use when the user selects or names Financial Budget. Model actuals, budget and scenario forecasts, variances, cash runway, and departmental plans.  
  Arquivo: `C:/Users/patrekis/.codex/plugins/cache/openai-curated-remote/openai-templates/0.1.1/skills/artifact-template-financial-budget/SKILL.md`
- **artifact-template-investment-committee-memo** — Create a document using the Investment Committee Memo template and its retained reference file. Use when the user selects or names Investment Committee Memo. Prepare investment committee memos with the thesis, transaction details, financial analysis, risks, and recommendation.  
  Arquivo: `C:/Users/patrekis/.codex/plugins/cache/openai-curated-remote/openai-templates/0.1.1/skills/artifact-template-investment-committee-memo/SKILL.md`
- **artifact-template-legal-memorandum** — Create a document using the Legal Memorandum template and its retained reference file. Use when the user selects or names Legal Memorandum. Draft legal memoranda with the issue, brief answer, relevant facts, analysis, and conclusion.  
  Arquivo: `C:/Users/patrekis/.codex/plugins/cache/openai-curated-remote/openai-templates/0.1.1/skills/artifact-template-legal-memorandum/SKILL.md`
- **artifact-template-market-trends-report** — Create a presentation using the Market Trends Report template and its retained reference file. Use when the user selects or names Market Trends Report. Communicate market or industry trends, supporting evidence, implications, and recommended responses.  
  Arquivo: `C:/Users/patrekis/.codex/plugins/cache/openai-curated-remote/openai-templates/0.1.1/skills/artifact-template-market-trends-report/SKILL.md`
- **artifact-template-minimal-letterhead** — Create a document using the Minimal Letterhead template and its retained reference file. Use when the user selects or names Minimal Letterhead. Write professional business letters with sender, recipient, message, and signature fields in a minimal letterhead layout.  
  Arquivo: `C:/Users/patrekis/.codex/plugins/cache/openai-curated-remote/openai-templates/0.1.1/skills/artifact-template-minimal-letterhead/SKILL.md`
- **artifact-template-operating-calendar** — Create a spreadsheet using the Operating Calendar template and its retained reference file. Use when the user selects or names Operating Calendar. Plan annual and monthly operating milestones, campaigns, launches, deadlines, and recurring events.  
  Arquivo: `C:/Users/patrekis/.codex/plugins/cache/openai-curated-remote/openai-templates/0.1.1/skills/artifact-template-operating-calendar/SKILL.md`
- **artifact-template-operating-review** — Create a presentation using the Operating Review template and its retained reference file. Use when the user selects or names Operating Review. Run weekly operating reviews with scorecards, functional updates, risks, decisions, and action items.  
  Arquivo: `C:/Users/patrekis/.codex/plugins/cache/openai-curated-remote/openai-templates/0.1.1/skills/artifact-template-operating-review/SKILL.md`
- **artifact-template-project-kickoff** — Create a presentation using the Project Kickoff template and its retained reference file. Use when the user selects or names Project Kickoff. Align teams on project goals, scope, roles, milestones, risks, and the working model.  
  Arquivo: `C:/Users/patrekis/.codex/plugins/cache/openai-curated-remote/openai-templates/0.1.1/skills/artifact-template-project-kickoff/SKILL.md`
- **artifact-template-project-tracker** — Create a spreadsheet using the Project Tracker template and its retained reference file. Use when the user selects or names Project Tracker. Manage workstreams, tasks, owners, status, priority, dates, launch pulse, and a Gantt schedule.  
  Arquivo: `C:/Users/patrekis/.codex/plugins/cache/openai-curated-remote/openai-templates/0.1.1/skills/artifact-template-project-tracker/SKILL.md`
- **artifact-template-sales-pipeline** — Create a spreadsheet using the Sales Pipeline template and its retained reference file. Use when the user selects or names Sales Pipeline. Track opportunities, stages, owners, deal sizes, probabilities, forecasts, next steps, and risks.  
  Arquivo: `C:/Users/patrekis/.codex/plugins/cache/openai-curated-remote/openai-templates/0.1.1/skills/artifact-template-sales-pipeline/SKILL.md`
- **artifact-template-simple-dark-mode** — Create a presentation using the Simple Dark Mode template and its retained reference file. Use when the user selects or names Simple Dark Mode. Create clean dark-mode presentations with bold typography, simple sections, charts, and imagery.  
  Arquivo: `C:/Users/patrekis/.codex/plugins/cache/openai-curated-remote/openai-templates/0.1.1/skills/artifact-template-simple-dark-mode/SKILL.md`
- **artifact-template-simple-light-mode** — Create a presentation using the Simple Light Mode template and its retained reference file. Use when the user selects or names Simple Light Mode. Create clean light-mode presentations with spacious typography, simple sections, charts, and imagery.  
  Arquivo: `C:/Users/patrekis/.codex/plugins/cache/openai-curated-remote/openai-templates/0.1.1/skills/artifact-template-simple-light-mode/SKILL.md`
- **artifact-template-strategy-memorandum** — Create a document using the Strategy Memorandum template and its retained reference file. Use when the user selects or names Strategy Memorandum. Present strategic context, choices, rationale, risks, milestones, and a clear recommendation.  
  Arquivo: `C:/Users/patrekis/.codex/plugins/cache/openai-curated-remote/openai-templates/0.1.1/skills/artifact-template-strategy-memorandum/SKILL.md`
- **artifact-template-system-design** — Create a document using the System Design template and its retained reference file. Use when the user selects or names System Design. Document system architecture, requirements, components, data flows, APIs, tradeoffs, and operational considerations.  
  Arquivo: `C:/Users/patrekis/.codex/plugins/cache/openai-curated-remote/openai-templates/0.1.1/skills/artifact-template-system-design/SKILL.md`
- **artifact-template-team-alignment** — Create a presentation using the Team Alignment template and its retained reference file. Use when the user selects or names Team Alignment. Facilitate team offsites and planning with context, goals, priorities, decisions, and action items.  
  Arquivo: `C:/Users/patrekis/.codex/plugins/cache/openai-curated-remote/openai-templates/0.1.1/skills/artifact-template-team-alignment/SKILL.md`
- **artifact-template-three-statement-forecast** — Create a spreadsheet using the Three-Statement Forecast template and its retained reference file. Use when the user selects or names Three-Statement Forecast. Build an integrated income statement, balance sheet, and cash flow forecast with assumptions, checks, and an executive summary.  
  Arquivo: `C:/Users/patrekis/.codex/plugins/cache/openai-curated-remote/openai-templates/0.1.1/skills/artifact-template-three-statement-forecast/SKILL.md`
- **plugin-management** — Discover and suggest relevant plugins, inspect app permissions and dependencies, and manage plugin connections or removal. Use when the user asks about plugins or when a task would materially benefit from an external app, account, service, or data source that available tools cannot access.  
  Arquivo: `C:/Users/patrekis/.codex/plugins/cache/openai-curated-remote/plugin-management/0.1.0/skills/plugin-management/SKILL.md`
- **sites-remix** — Remix a Site built with the Sites plugin into a new Site. Use when the user has identified the source Site and asks to remix it.  
  Arquivo: `C:/Users/patrekis/.codex/plugins/cache/openai-curated-remote/sites/1.1.6/skills/sites-remix/SKILL.md`
- **sites** — Use Sites when the user wants a website built for them (including a landing page, portfolio, dashboard, portal, tracker, hub, game, event registration, or tool), requests changes to a website already built with Sites, wants to publish a website with Sites, or wants to manage Sites hosting.  
  Arquivo: `C:/Users/patrekis/.codex/plugins/cache/openai-curated-remote/sites/1.1.6/skills/sites/SKILL.md`
- **visualize** — Create visualizations and interactive tools directly in conversation. Proactively use to show how something works; explore 'what happens when', 'what changes', or 'help me understand'; compare or inspect; create simulations, maps, charts, graphs, and mockups. Use standard tools for static scientific figures.  
  Arquivo: `C:/Users/patrekis/.codex/plugins/cache/openai-curated-remote/visualize/1.0.89/skills/visualize/SKILL.md`
- **create-pet** — Create, repair, validate, preview, upload, or activate an animated v2 pet in ChatGPT Work mode from a character idea, brand cue, or reference image. Use for new ChatGPT Pets, custom mascots, non-pixel styles, and unattached sprite sheets requiring nine animation states plus sixteen look directions. Preserve Library artifacts and Pets MCP lifecycle behavior. Exclude real pets, standalone images, and other-app pets; clarify before invoking.  
  Arquivo: `C:/Users/patrekis/.codex/plugins/cache/openai-curated-remote/work-pets/0.1.6/skills/create-pet/SKILL.md`
- **pets** — List, inspect, select, download, or delete animated pets in ChatGPT Work mode. Use for an explicit pet in ChatGPT or established ChatGPT Pets context. Exclude real-world and other-app pets; clarify before invoking.  
  Arquivo: `C:/Users/patrekis/.codex/plugins/cache/openai-curated-remote/work-pets/0.1.6/skills/pets/SKILL.md`
- **update-pet** — Inspect, validate, preview, repair, or update a custom pet in ChatGPT Work mode, including its name, description, or sprite sheet. Use for a pet in ChatGPT or established ChatGPT Pets context. Exclude real-world and other-app pets; clarify before invoking.  
  Arquivo: `C:/Users/patrekis/.codex/plugins/cache/openai-curated-remote/work-pets/0.1.6/skills/update-pet/SKILL.md`
- **write-like-me** — Use when creating documents, emails, reports, proposals, presentations, or messages on the user's behalf to ensure they match the user's writing style. Skip minor edits and requests that explicitly do not want style matching.  
  Arquivo: `C:/Users/patrekis/.codex/plugins/cache/openai-curated-remote/write-like-me/0.1.1/skills/write-like-me/SKILL.md`
