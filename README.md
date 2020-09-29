# Preact Reakit TypeScript issue

Preact and Reakit are both awesome libraries, I'd like to be able to use them both, with TypeScript. The issue I'm running into is that Reakit components (e.g. `Checkbox`) fail to typecheck when using the `as` prop. I believe this happens because the `as` prop is typed for React which causes some incompatibility with Preact. I've "solved" the issue by patching the `PropsWithAs` type from `reakit-utils`. I'm wondering what library authors are ought to do to fix this problem, because adding types for Preact doesn't seem very sustainable 🤔.

Take a look at `./src/app.tsx` to see the issue in action. Run `npm run patch-package` to apply the "fix" to `reakit-utils`, which makes things typecheck properly.
