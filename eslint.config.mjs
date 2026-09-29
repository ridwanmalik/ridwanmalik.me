// Flat config — Next.js 16 removed `next lint`, so ESLint runs through its own CLI
// and eslint-config-next ships flat config directly.
import nextCoreWebVitals from "eslint-config-next/core-web-vitals"

const eslintConfig = [
  ...nextCoreWebVitals,
  {
    ignores: [".next/**", "node_modules/**", "next-env.d.ts"],
  },
]

export default eslintConfig
