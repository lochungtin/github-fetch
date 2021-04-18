# Github Fetch

Fetch any raw file from a public github repository

## Install

Installing with npm
`npm i --save @enigmaoffline/github-fetch`

## Usage

Importing

```js
const GHFetch = require("github-fetch");
```

With `.then`

```js
GHFetch.fetchFile({
  username: "lochungtin",
  fileName: "src/index.ts",
  repo: "github-fetch",
}).then((res) => console.log(res));
```

With `async await`

```js
(async () => {
  const readmeFile = await GHFetch.fetchReadme({
    username: "lochungtin",
    repo: "github-fetch",
  });
  console.log(readmeFile);
})();
```

### Fetch Parameters

Fetch Parameters for `fetchFile()`
| fetchFile() | required? | default |  type  |
| :---------: | :-------: | :-----: | :----: |
|  username   |    yes    |  none   | String |
|  filename   |    yes    |  none   | String |
|    repo     |    yes    |  none   | String |
|   branch    |    no     | master  | String |

Fetch Parameters for `fetchReadme()`
| fetchReadme() | required? | default |  type  |
| :-----------: | :-------: | :-----: | :----: |
|   username    |    yes    |  none   | String |
|     repo      |    yes    |  none   | String |
|    branch     |    no     | master  | String |

**NOTE** that all names are case sensitive.

<a href="https://github.com/lochungtin/github-fetch/blob/master/LICENSE">LICENSE - MIT - Lo Chung Tin</a>
