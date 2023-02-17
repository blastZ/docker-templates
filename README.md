# Docker Templates

## Next.js

### Update eslint config

Add ignore patterns

```json
{
  "ignorePatterns": ["ecosystem.config.js", "next.config.js"]
}
```

### Update next.js config

Update `next.config.js`, add `ouput` config.

```js
const nextConfig = {
  // ...
  output: "standalone",
};
```

### Copy necessary files

Copy `ecosystem.config.js`, `.gitignore`, `.dockerignore` and `Dockerfile` to project.
