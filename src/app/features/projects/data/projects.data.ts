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

  // 6) Nexus Backend
  {
    slug: 'nxus',
    title: 'Nexus Backend',
    short: 'Spring Boot 3 assistant backend — Spotify OAuth & player control, OpenAI GPT integration.',
    image: 'assets/img/nxus-banner.png',
    tech: [
      'Java 17', 'Spring Boot 3', 'Spring Web', 'WebClient', 'OAuth 2.0',
      'OpenAPI / Swagger UI', 'Docker Compose', 'Maven'
    ],
    description: `Nexus powers a personal assistant with two main domains: Spotify and GPT.
Spotify: OAuth login/callback, playback control (play/pause/next/previous), search, and playlist playback by name.
GPT: a simple REST endpoint forwarding prompts to OpenAI. The service follows a layered architecture
(controller → service → dto/errors), is documented via OpenAPI/Swagger, and provides a Docker Compose setup
for convenient local development. Includes demo screenshots for both Spotify and GPT flows.`,
    links: [{ label: 'GitHub-NX-US', url: 'https://github.com/DRKdesuga/NX-US' }]
  },

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
    links: [{ label: 'GitHub-Sysalias', url: 'https://github.com/DRKdesuga/Sysalias' }]
  }
];
