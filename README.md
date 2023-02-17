# Docker Templates

## Next.js

### Update next.js config

Update `next.config.js`, add `ouput` config.

### Update eslint config

Add ignore patterns

```json
{
  // ...
  "ignorePatterns": ["ecosystem.config.js", "next.config.js"]
}
```

```js
const nextConfig = {
  // ...
  output: "standalone",
};
```

### Copy necessary files

Copy `ecosystem.config.js`, `.gitignore`, `.dockerignore` and `Dockerfile` to project.
