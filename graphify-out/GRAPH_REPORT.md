# Graph Report - Nota Fiscal  (2026-11-11)

## Corpus Check
- cluster-only mode — file stats not available

## Summary
- 388 nodes · 665 edges · 27 communities (17 shown, 9 thin omitted)
- Extraction: 98% EXTRACTED · 2% INFERRED · 0% AMBIGUOUS · INFERRED: 10 edges (avg confidence: 0.85)
- Token cost: 0 input · 0 output

## Community Hubs (Navigation)
- Community 0
- Community 1
- Community 2
- Community 3
- Community 4
- Community 5
- Community 6
- Community 7
- Community 8
- Community 9
- Community 10
- Community 11
- Community 12
- Community 13
- Community 14
- Community 15
- Community 16
- Community 18
- Community 19
- Community 20
- Community 21
- Community 22
- Community 23
- Community 24
- Community 25
- Community 26

## God Nodes (most connected - your core abstractions)
1. `extract()` - 20 edges
2. `_make_id()` - 15 edges
3. `handleRequest()` - 14 edges
4. `_rebuild_code()` - 13 edges
5. `main()` - 12 edges
6. `startServer()` - 11 edges
7. `_is_file_node()` - 9 edges
8. `god_nodes()` - 9 edges
9. `_cross_file_surprises()` - 9 edges
10. `suggest_questions()` - 9 edges

## Surprising Connections (you probably didn't know these)
- `serve()` --calls--> `main()`  [INFERRED]
  .agents/skills/graphify/serve.py → .agents/skills/graphify/__main__.py
- `safe_fetch()` --indirect_call--> `status()`  [INFERRED]
  .agents/skills/graphify/security.py → .agents/skills/graphify/hooks.py
- `serve()` --calls--> `god_nodes()`  [EXTRACTED]
  .agents/skills/graphify/serve.py → .agents/skills/graphify/analyze.py
- `_rebuild_code()` --calls--> `build_from_json()`  [EXTRACTED]
  .agents/skills/graphify/watch.py → .agents/skills/graphify/build.py
- `extract()` --calls--> `load_cached()`  [EXTRACTED]
  .agents/skills/graphify/extract.py → .agents/skills/graphify/cache.py

## Import Cycles
- None detected.

## Communities (27 total, 9 thin omitted)

### Community 0 - "Community 0"
Cohesion: 0.06
Nodes (57): bootstrapPage(), brandMarkup(), broadcast(), browserLauncherForPlatform(), chmodOwnerOnly(), clients, companionUrl(), computeAcceptKey() (+49 more)

### Community 1 - "Community 1"
Cohesion: 0.08
Nodes (46): _cross_community_surprises(), _cross_file_surprises(), _file_category(), god_nodes(), graph_diff(), _is_concept_node(), _is_file_node(), _node_community_map() (+38 more)

### Community 2 - "Community 2"
Cohesion: 0.11
Nodes (32): _estimate_tokens(), print_benchmark(), Graph, _query_subgraph_tokens(), Token-reduction benchmark - measures how much context graphify saves vs naive…, Print a human-readable benchmark report., Run BFS from best-matching nodes and return estimated tokens in the subgraph…, Measure token reduction: corpus tokens vs graphify query tokens. Args:… (+24 more)

### Community 3 - "Community 3"
Cohesion: 0.13
Nodes (33): collect_files(), extract(), extract_c(), extract_cpp(), extract_csharp(), extract_go(), extract_java(), extract_js() (+25 more)

### Community 4 - "Community 4"
Cohesion: 0.11
Nodes (30): _detect_url_type(), _download_binary(), _fetch_arxiv(), _fetch_html(), _fetch_tweet(), _fetch_webpage(), _html_to_markdown(), ingest() (+22 more)

### Community 5 - "Community 5"
Cohesion: 0.14
Nodes (24): attach_hyperedges(), _html_script(), _html_styles(), _hyperedge_script(), _node_community_map(), push_to_neo4j(), Graph, Invert communities dict: node_id -> community_id. (+16 more)

### Community 6 - "Community 6"
Cohesion: 0.17
Nodes (21): classify_file(), count_words(), detect(), detect_incremental(), extract_pdf_text(), FileType, _is_noise_dir(), _is_sensitive() (+13 more)

### Community 7 - "Community 7"
Cohesion: 0.21
Nodes (17): cache_dir(), cached_files(), check_semantic_cache(), clear_cache(), file_hash(), load_cached(), Path, SHA256 of file contents, hex digest. (+9 more)

### Community 8 - "Community 8"
Cohesion: 0.18
Nodes (16): Path, Resolve *path* and verify it stays inside *base*. *base* defaults to the…, validate_graph_path(), _bfs(), _communities_from_graph(), _dfs(), _find_node(), _load_graph() (+8 more)

### Community 9 - "Community 9"
Cohesion: 0.33
Nodes (10): _community_article(), _cross_community_links(), _god_node_article(), _index_md(), Graph, Path, Return (community_label, edge_count) pairs for cross-community connections,…, Generate a Wikipedia-style wiki from the graph. Writes: - index.md — agent… (+2 more)

### Community 10 - "Community 10"
Cohesion: 0.18
Nodes (10): description, keywords, license, name, pi, skills, private, repository (+2 more)

### Community 11 - "Community 11"
Cohesion: 0.31
Nodes (8): build(), build_from_json(), Graph, Merge multiple extraction results into one graph., assert_valid(), Validate an extraction JSON dict against the graphify schema. Returns a list of…, Raise ValueError with all errors if extraction is invalid., validate_extraction()

### Community 12 - "Community 12"
Cohesion: 0.42
Nodes (7): connect(), nextReconnectDelay(), reloadAfterRecovery(), sessionKey(), setStatus(), showTombstone(), websocketUrl()

### Community 13 - "Community 13"
Cohesion: 0.25
Nodes (7): description, name, owner, name, url, plugins, $schema

### Community 14 - "Community 14"
Cohesion: 0.52
Nodes (6): command_has_server_id(), command_line_for_pid(), is_brainstorm_server(), mark_stopped(), read_expected_server_id(), stop-server.sh script

### Community 15 - "Community 15"
Cohesion: 0.60
Nodes (5): combineGraphs(), extractDotBlocks(), extractGraphBody(), main(), renderToSvg()

### Community 16 - "Community 16"
Cohesion: 0.40
Nodes (4): Path, read_package_file(), require_match(), Match

## Knowledge Gaps
- **34 isolated node(s):** `crypto`, `http`, `fs`, `path`, `OPCODES` (+29 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 159 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **9 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `god_nodes()` connect `Community 1` to `Community 8`?**
  _High betweenness centrality (0.119) - this node is a cross-community bridge._
- **Why does `extract()` connect `Community 3` to `Community 1`, `Community 7`?**
  _High betweenness centrality (0.114) - this node is a cross-community bridge._
- **Why does `_rebuild_code()` connect `Community 1` to `Community 3`, `Community 11`, `Community 5`?**
  _High betweenness centrality (0.086) - this node is a cross-community bridge._
- **What connects `crypto`, `http`, `fs` to the rest of the system?**
  _34 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Community 0` be split into smaller, more focused modules?**
  _Cohesion score 0.05628415300546448 - nodes in this community are weakly interconnected._
- **Should `Community 1` be split into smaller, more focused modules?**
  _Cohesion score 0.08163265306122448 - nodes in this community are weakly interconnected._
- **Should `Community 2` be split into smaller, more focused modules?**
  _Cohesion score 0.10588235294117647 - nodes in this community are weakly interconnected._