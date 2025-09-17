# Online store

---

- [Installation](#markdown-header-installation)
- [Tests](#markdown-header-running-tests)
- [Additional Information](#markdown-header-additional-info)
  - [Commit Formats](#markdown-header-commit-formats)

## Installation

Setup configuration:

Install NPM dependencies:

```sh
npm install
```

Build assets:

```sh
npm run dev
```

Linting:

```sh
npm run lint
```

Production assets:

```sh
npm run build
```

## Running tests

---

To run the app tests, run:

Tests:

```
npm run test
```

## Additional Info

---

### Commit Formats

#### Default

<pre>
<b><a href="#markdown-header-types">&lt;type&gt;</a></b>(<b><a href="#markdown-header-scopes">&lt;optional scope&gt;</a></b>): <b><a href="#markdown-header-subject">&lt;subject&gt;</a></b>
<sub>empty separator line</sub>
<b><a href="#markdown-header-body">&lt;optional body&gt;</a></b>
<sub>empty separator line</sub>
<b><a href="#markdown-header-footer">&lt;optional footer&gt;</a></b>
</pre>

#### Types

- Application relevant changes
  - `feat` Commits, that adds a new feature
  - `fix` Commits, that fixes a bug
- `refactor` Commits, that rewrite/restructure your code, however does not change any behaviour
  - `perf` Commits are special `refactor` commits, that improve performance
- `style` Commits, that do not affect the meaning (white-space, formatting, missing semi-colons, etc)
- `test` Commits, that add missing tests or correcting existing tests
- `build` Commits, that affect build components like build tool, ci pipeline, dependencies, project version, ...
- `ci` Commits, that affect to CI configuration files and scripts
- `docs` Commits, that affect documentation only
- `chore` Miscellaneous commits e.g. modifying `.gitignore`

#### Scopes

The `scope` provides additional contextual information.

- Is an **optional** part of the format
- Allowed project epics

#### Subject

The `subject` contains a succinct description of the change.

- Is a **mandatory** part of the format
- Use the imperative, present tense: "change" not "changed" nor "changes"
- Don't capitalize the first letter
- No dot (.) at the end

#### Body

The `body` should include the motivation for the change and contrast this with previous behavior.

- Is an **optional** part of the format
- Use the imperative, present tense: "change" not "changed" nor "changes"

#### Footer

The `footer` should contain any information about **Breaking Changes** and is also the place to **reference Issues** that this commit refers to.

- Is an **optional** part of the format
- **optionally** reference an issue by its id (#CRM-001)
- **Breaking Changes** should start with the word `BREAKING CHANGES:` followed by space or two newlines. The rest of the commit message is then used for this.

#### Examples

- ```
  feat(calender): add the amazing button
  ```
- ```
  feat: remove ticket list endpoint

  Closes: #CRM-100
  BREAKING CHANGES: ticket enpoints no longer supports list all entites.
  ```

- ```
  fix: add missing parameter to service call

  The error occurred because of <reasons>.

  Closes: #CRM-148
  ```

- ```
  build: bump version to 1.0.0
  ```
- ```
  build: update dependencies
  ```
- ```
  refactor(workspace): implement calculation method as recursion
  ```
- ```
  style: remove empty line
  ```
