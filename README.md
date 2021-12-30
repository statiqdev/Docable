# Docable
Documentation theme for Statiq Docs. Note that this theme is currently under development and is not yet ready for use.

# Settings

## Global

These can be set in a settings file (in addition to any [Statiq Web settings](https://statiq.dev/web/configuration/settings)).

- `SourceFiles`: A globbing pattern to look for source files for API generation (or leave undefined to not generate API documentation).
- `EditRoot`: The root link to use for editing pages, usually set to a value like `https://github.com/org/repo/edit/develop/input` (do not use a trailing slash).

## Page

These can be set in front matter, a sidecar file, etc. (in addition to any [Statiq Web settings](https://statiq.dev/web/configuration/settings)).

- `EditLink`: A more specific editing link that overrides `EditRoot` if needed.

# Xrefs

Xrefs for API pages are prefixed with `api-`.