# iframe-chrome-extension-template

Develop your extension in an iframe. We use iframe to load your page in the extension.

We also support invoking the `chrome` API directly in an iframe **even though it is cross-origin**.
How is it possible? [Click here to know more details](https://github.com/IceOfSummer/cross-iframe-rpc).

This template is Vite + React with builtin popup, options page and content-script support.

It's very simple to switch to another framework, the only thing you need to do is integrate the [cross-iframe-rpc](https://github.com/IceOfSummer/cross-iframe-rpc).
Check the docs and example for more details.

## Quick Start

1. Install dependencies

```shell
pnpm i
```

2. Build required files for dev

```shell
pnpm run prepare:dev
```

3. Launch development server

```shell
pnpm run dev
# or
pnpm run dev:pages
```

4. Develop content-script (Optional)

```shell
pnpm run dev:scripts
```

5. Import the extension and test

    Please import the [extension](/extension) directory using your browser.

6. Test the extension in your browser

7. After all, build for production

```shell
pnpm run build
```