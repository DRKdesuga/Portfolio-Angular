import { Project } from './project.model';

export const PROJECTS: Project[] = [
  // 1) PING
  {
    slug: 'ping',
    title: 'PING',
    short: 'Quarkus + React workspace manager with JWT, projects, folders & files.',
    image: 'assets/img/ping-banner.png',
    tech: [
      'Java 21', 'Quarkus 3', 'REST', 'JWT (RS256)', 'PostgreSQL',
      'Hibernate', 'OpenAPI 3', 'Maven', 'React', 'Vite'
    ],
    description: `PING is a lightweight workspace manager. The backend (Quarkus 3 / Java 21) exposes a clean REST API
for authentication (JWT with RSA dev keys) and resource management: projects, folders and files (list, upload, move, delete with multipart).
Data is persisted in PostgreSQL with a simple domain model; the API is fully described with OpenAPI 3 for easy client generation.
A Vite/React frontend provides a minimal UI to browse workspaces and interact with the endpoints.
Developer experience focuses on rapid setup, hot reload and straightforward local dev.`,
    links: [{ label: 'GitHub', url: 'https://github.com/DRKdesuga' }]
  },

  // 2) Tiger Compiler
  {
    slug: 'tiger',
    title: 'Tiger Compiler',
    short: 'Modular compiler pipeline for the Tiger language: lexer, parser, AST, desugaring, IR.',
    image: 'assets/img/tiger-banner.png',
    tech: [
      'C', 'C++', 'Flex', 'Bison', 'AST', 'Desugaring', 'IR', 'Autotools'
    ],
    description: `A complete, educational compiler toolchain for the Tiger language. The pipeline includes
lexical analysis (Flex), parsing (Bison) with tracked locations, typed AST construction, and a desugaring
phase (e.g. translating high-level constructs like for-loops into core forms). The desugared AST doubles as
an intermediate representation for further passes. Utilities provide debug printing and structured dumps,
turning the project into a practical playground for compiler design.`,
    links: [{ label: 'GitHub', url: 'https://github.com/DRKdesuga' }]
  },

  //AURA

  {
    slug: 'aura',
    title: 'AURA – Artificial User Response Assistant',
    short: 'Local full-stack AI assistant — Angular + Spring Boot + PostgreSQL + Ollama inference (LLaMA 3.2).',
    image: 'assets/img/aura.png',
    tech: [
      'Java 21', 'Spring Boot 3.3', 'Spring Data JPA', 'PostgreSQL 15',
      'Angular 17', 'TypeScript', 'Standalone Components',
      'Ollama (LLaMA 3.2 local model)', 'REST API', 'Docker (optional)',
      'Maven', 'Node.js 20', 'Shell Scripts (run_local / killer)'
    ],
    description: `AURA is a fully local AI assistant combining a Spring Boot backend, Angular frontend, and Ollama inference engine.
It runs entirely on the user’s machine — no cloud, no external API calls.

Backend:
Spring Boot 3 (Java 21) with PostgreSQL for persistent sessions and messages.
REST API under /api/chat and /api/sessions, storing full chat history.
Configurable Ollama connector (model, base URL) for local LLM inference.

Frontend:
Angular 17 standalone application (dark modern UI).
Real-time chat interface linked to the backend API.
Handles sessions, message history, and model responses interactively.

AI Inference:
• Powered by Ollama with the llama3.2 model.
• Supports configurable local models and auto-warming via scripts.

DevOps & Automation:
• Scripts (run_local.sh / process_killer.sh) to start/stop the full stack in one command.
• Checks model presence, launches Ollama, backend, and frontend automatically.
• Ready-to-run configuration (aura_db / aura / aura_pwd).

Architecture:
• Full-stack separation: Angular → Spring Boot → PostgreSQL → Ollama.
• Layered backend design (controller → service → entity/repository).
• Clean local setup — no external dependencies.

The result is a self-contained, privacy-preserving AI assistant that can chat, store conversations, and be extended with new local models.`,
    links: [
      { label: 'GitHub – AURA', url: 'https://github.com/DRKdesuga/AURA' }
    ],
    demoMp4: 'assets/demos/aura.mp4'
  },

  // 3) 42sh
  {
    slug: '42sh',
    title: '42sh',
    short: 'A POSIX-compliant UNIX shell: redirections, pipes, built-ins, control structures.',
    image: 'assets/img/42sh-banner.png',
    tech: ['C', 'UNIX', 'POSIX', 'Autotools'],
    description: `42sh is a POSIX-compatible command interpreter developed at EPITA.
It supports simple/compound command execution, redirections (>, >>, <, 2>), pipelines (|),
logical operators (&&, ||), sub-shells via parentheses, control structures (if / while / for / case),
environment variable management and core built-ins (cd, exit, export, unset, echo, …).
The build system relies on Autotools with targets for testing and optional installation.`,
    links: [{ label: 'GitHub', url: 'https://github.com/DRKdesuga' }]
  },

  // 4) JWS
  {
    slug: 'jws',
    title: 'JWS',
    short: 'Event-driven microservices ecosystem (Kafka) for a game simulation.',
    image: 'assets/img/jws-banner.png',
    tech: [
      'Java 17', 'Quarkus', 'Apache Kafka', 'PostgreSQL', 'Hibernate Panache', 'Maven', 'DDD'
    ],
    description: `JWS models a loosely-coupled, event-driven game backend using Kafka.
Modules are split by responsibility: a common module (commands, aggregates, DTOs), an inventory service
(source of truth, Kafka-only), an item-producer that parses .epimap files and publishes creation commands,
and a shop service exposing REST endpoints for buy/sell logic. Services communicate via commands and aggregates,
never touch each other’s databases, and follow strict boundaries. It’s a practical blueprint for DDD, async
messaging and separation of concerns.`,
    links: [{ label: 'GitHub', url: 'https://github.com/DRKdesuga' }]
  },

  // 5) ERO1
  {
    slug: 'ero',
    title: 'ERO1',
    short: 'Operations research on urban graphs: coverage & shortest-path with OSM data.',
    image: 'assets/img/ero-banner.png',
    tech: [
      'Python 3.9+', 'OSMnx', 'NetworkX', 'Matplotlib', 'Folium', 'Tkinter', 'CLI'
    ],
    description: `ERO1 is an operations-research project for routing over urban road networks built from OpenStreetMap.
It models directed graphs and compares algorithms under cost/time/budget constraints: coverage problems
(Chinese Postman, Eulerian traversals, DFS variants) and shortest-path (Dijkstra, A*, Bellman-Ford).
It includes a CLI, an optional Tkinter GUI, and visualization with Matplotlib/Folium. A simple virtual-env setup
script standardizes the environment for quick experimentation.`,
    links: [{ label: 'GitHub', url: 'https://github.com/DRKdesuga' }]
  },


  // 9) Sysalias
  {
    slug: 'sysalias',
    title: 'Sysalias',
    short: 'Lightweight C CLI to manage shell aliases (bash/zsh) via a centralized JSON registry.',
    image: 'assets/img/sysalias-banner.png',
    tech: ['C', 'Make', 'Shell (bash/zsh)', 'JSON', 'Installer Scripts'],
    description: `Sysalias centralizes your shell aliases in a JSON registry and synchronizes them with bash/zsh.
It supports add/remove/list, import/export, health checks (doctor), and generates clean fragments
(aliases.bash / aliases.zsh). Installation is possible via Make or provided scripts, with optional system-wide mode.
A small, pragmatic tool to keep aliases tidy and versionable across environments.`,
    links: [{ label: 'GitHub-Sysalias', url: 'https://github.com/DRKdesuga/Sysalias' }],
    demoMp4: 'assets/demos/sysalias.mp4'
  },

  // 6) Nexus Backend
  {
    slug: 'nxus',
    title: 'Nexus',
    short: 'Full-Stack Assistant — Spring Boot 3.2 & Angular 17 integration for Spotify, GPT, and NLP.',
    image: 'assets/img/nxus-banner.png',
    tech: [
      'Java 21', 'Spring Boot 3.2', 'Spring Web & WebFlux (WebClient)',
      'Angular 17', 'TypeScript', 'OAuth 2.0 (Authorization Code)',
      'OpenAI API', 'DJL (PyTorch Embeddings)',
      'Swagger / OpenAPI', 'Lombok', 'Docker Compose', 'Maven'
    ],
    description: `Nexus is a full-stack AI assistant built with Spring Boot (backend) and Angular (frontend).
It connects multiple intelligent services under a unified interface:

Spotify Integration — OAuth login, track search, playback by URI, playlist launch by name, and controls for play, pause, next, and previous.

OpenAI GPT — A REST endpoint forwarding user prompts to OpenAI’s Chat Completions API for dynamic assistant responses.

Natural Language Processing (NLP) — A local intent detection and slot-filling engine using DJL (Deep Java Library) embeddings with cosine similarity and regex slot extractors.

The backend follows a clean layered architecture (controller → service → dto/errors) and is documented with Swagger/OpenAPI.
Docker Compose enables local deployment of the entire stack (backend + frontend).
The Angular frontend provides a modern UI for interacting with Spotify, GPT, and NLP modules in real time.

Security note: environment variables should replace plain API keys in the configuration file.`,
    links: [
      { label: 'GitHub – NX-US', url: 'https://github.com/DRKdesuga/NX-US' }
    ],
    demoMp4: 'assets/demos/nexus.mp4'
  }

,

  // 7) My-BitTorrent
  {
    slug: 'mybt',
    title: 'My-BitTorrent',
    short: 'Modular BitTorrent client in C with Meson; encoding, files, networking, utilities.',
    image: 'assets/img/mybt-banner.png',
    tech: [
      'C', 'Meson', 'epoll', 'Networking', 'Bencode', 'CLI'
    ],
    description: `An in-progress BitTorrent client aiming for spec compliance and a clean modular layout.
Libraries are split per concern: mbtbe (bencoding for .torrent I/O), mbtfile (piece validation and disk I/O),
mbtnet (peer connections & piece exchange using asynchronous epoll), and mbtutils (strings, views, memory helpers).
Build uses Meson; the CLI supports creating .torrent files, binding IP/port, pretty-printing torrent metadata and verbose logs.`,
    links: [{ label: 'GitHub', url: 'https://github.com/DRKdesuga' }]
  },

  // 8) libZork
  {
    slug: 'libzork',
    title: 'libZork',
    short: 'C++ framework for graph-based interactive text adventures driven by YAML stories.',
    image: 'assets/img/libzork-banner.png',
    tech: ['C++', 'CMake', 'YAML', 'CLI', 'Graph Model'],
    description: `libZork lets you author interactive fiction as a graph of scenes described in YAML.
Multiple runners execute stories by traversing nodes/choices with conditions. The toolchain includes a CMake build,
a CLI to load and run stories, example assets, and debugging aids. Screenshots showcase the story execution flow
and graph visualization for a “Secret” sample storyline, making it a compact sandbox for narrative engines.`,
    links: [{ label: 'GitHub', url: 'https://github.com/DRKdesuga' }]
  },

  // 2) MyFind
  {
    slug: 'myfind',
    title: 'MyFind',
    short: 'C implementation of the Unix find command — supports name, perm, user, group, type, newer, and logical operators.',
    image: 'assets/img/myfind-banner.png',
    tech: [
      'C (POSIX)', 'Makefile', 'Filesystem API (stat/lstat)', 'fnmatch',
      'User & group lookup', 'Permission bits', 'Recursive traversal'
    ],
    description: `MyFind is a minimal reimplementation of the Unix find utility, written in C for POSIX systems.
It parses expressions with AND (-a), OR (-o), and NOT (!) logic, using a custom tokenizer, shunting-yard parser, and AST evaluator.
Supported predicates include -name, -newer, -perm, -user, -group, and -type (b, c, d, f, l, p, s).
Actions include -print and -delete for displaying or removing matching files.
The tool performs recursive filesystem traversal, safe error handling with lstat, and defaults to the current directory if none is specified.
Built with a Makefile supporting make all, make clean, and make clear_obj targets.`,
    links: [{ label: 'GitHub', url: 'https://github.com/DRKdesuga' }],
    demoMp4: 'assets/demos/myfind.mp4'
  },

  {
    slug: 'malloc',
    title: 'Custom Malloc Library',
    short: 'C dynamic memory allocator overriding malloc, free, calloc, and realloc — exported as libmalloc.so.',
    image: 'assets/img/malloc-banner.png',
    tech: [
      'C (POSIX)', 'Memory Management', 'Dynamic Allocation', 'Shared Library (.so)',
      'Makefile', 'LD_PRELOAD', 'sbrk / mmap', 'Pointer arithmetic'
    ],
    description: `This project implements a fully custom memory allocator in C, replacing the standard glibc implementation.
It provides custom versions of malloc, free, calloc, and realloc, compiled into a shared library (libmalloc.so) that can be preloaded to intercept standard allocation calls.
The allocator handles multiple non-contiguous memory pages, aligns allocations on long double boundaries, performs overflow checks in calloc, and supports dynamic resizing in realloc.
Memory blocks are managed through internal metadata structures for size and availability tracking.
Testing and debugging are done via LD_PRELOAD, allowing user programs to run transparently with the custom allocator.
The Makefile includes make library to build the shared object and make clean to remove all generated files.`,
    links: [{ label: 'GitHub', url: 'https://github.com/DRKdesuga' }]
  },

];
