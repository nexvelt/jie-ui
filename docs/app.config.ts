import pkg from './package.json'

export default defineAppConfig({
  unaContent: {
    site: {
      name: 'Una UI',
      description: 'The Atomic UI Framework - Experience the power of Unocss Engine, enabling the creation of fast, modern, and lightweight components with ease.',
      ogImage: '/hero.png',
    },
    header: {
      darkModeToggle: true,
      showLoadingIndicator: true,
      showLogo: true,
      border: true,
      links: [
        {
          icon: 'i-radix-icons-github-logo',
          to: 'https://github.com/una-ui/una-ui',
          target: '_blank',
        },
        {
          icon: 'i-tabler-brand-x',
          to: 'https://x.com/phojiee',
          target: '_blank',
        },
        {
          icon: 'i-tabler-brand-discord-filled',
          to: 'https://discord.gg/gmdTPGkxRs',
          target: '_blank',
        },
      ],
      packageVersionNav: {
        enable: true,
        label: `v${pkg.version}`,
        items: [
          {
            label: 'Release Notes',
            to: 'https://github.com/una-ui/una-ui/releases',
            trailing: 'i-heroicons-arrow-up-right text-10px',
          },
          {
            label: 'Contributing',
            to: 'https://github.com/una-ui/una-ui/blob/main/CONTRIBUTING.md',
            trailing: 'i-heroicons-arrow-up-right text-10px',
          },
        ],
      },
    },
    aside: {
      useLevel: true,
      collapse: false,
    },
    main: {
      padded: true,
      breadCrumb: true,
      showTitle: true,
      codeCopyToast: true,
      codeIcon: {
        'package.json': 'vscode-icons:file-type-node',
        'tsconfig.json': 'vscode-icons:file-type-tsconfig',
        '.npmrc': 'vscode-icons:file-type-npm',
        '.editorconfig': 'vscode-icons:file-type-editorconfig',
        '.eslintrc': 'vscode-icons:file-type-eslint',
        '.eslintrc.cjs': 'vscode-icons:file-type-eslint',
        '.eslintignore': 'vscode-icons:file-type-eslint',
        'eslint.config.js': 'vscode-icons:file-type-eslint',
        'eslint.config.mjs': 'vscode-icons:file-type-eslint',
        'eslint.config.cjs': 'vscode-icons:file-type-eslint',
        '.gitignore': 'vscode-icons:file-type-git',
        'yarn.lock': 'vscode-icons:file-type-yarn',
        '.env': 'vscode-icons:file-type-dotenv',
        '.env.example': 'vscode-icons:file-type-dotenv',
        '.vscode/settings.json': 'vscode-icons:file-type-vscode',
        'nuxt': 'vscode-icons:file-type-nuxt',
        '.nuxtrc': 'vscode-icons:file-type-nuxt',
        '.nuxtignore': 'vscode-icons:file-type-nuxt',
        'nuxt.config.js': 'vscode-icons:file-type-nuxt',
        'nuxt.config.ts': 'vscode-icons:file-type-nuxt',
        'nuxt.schema.ts': 'vscode-icons:file-type-nuxt',
        'tailwind.config.js': 'vscode-icons:file-type-tailwind',
        'tailwind.config.ts': 'vscode-icons:file-type-tailwind',
        'vue': 'vscode-icons:file-type-vue',
        'ts': 'vscode-icons:file-type-typescript',
        'tsx': 'vscode-icons:file-type-typescript',
        'mjs': 'vscode-icons:file-type-js',
        'cjs': 'vscode-icons:file-type-js',
        'js': 'vscode-icons:file-type-js',
        'jsx': 'vscode-icons:file-type-js',
        'md': 'vscode-icons:file-type-markdown',
        'mdc': 'vscode-icons:file-type-markdown',
        'py': 'vscode-icons:file-type-python',
        'npm': 'vscode-icons:file-type-npm',
        'pnpm': 'vscode-icons:file-type-pnpm',
        'npx': 'vscode-icons:file-type-npm',
        'yarn': 'vscode-icons:file-type-yarn',
        'bun': 'vscode-icons:file-type-bun',
        'yml': 'vscode-icons:file-type-yaml',
        'json': 'vscode-icons:file-type-json',
        'terminal': 'lucide:terminal',
      },
      editLink: {
        enable: true,
        pattern: 'https://github.com/una-ui/una-ui/edit/main/content/:path',
        text: 'Edit this page on GitHub',
        icon: 'lucide:square-pen',
        placement: ['docsFooter', 'toc'],
      },
    },
    footer: {
      credits: 'Copyright © 2024',
      links: [
        {
          label: 'i-radix-icons-github-logo',
          icon: true,
          square: true,
          to: 'https://github.com/una-ui/una-ui',
          target: '_blank',
        },
      ],
    },
    toc: {
      enable: true,
      title: 'On This Page',
      links: [{
        title: 'Star on GitHub',
        icon: 'lucide:star',
        to: 'https://github.com/una-ui/una-ui',
        target: '_blank',
      }, {
        title: 'Create Issues',
        icon: 'lucide:circle-dot',
        to: 'https://github.com/una-ui/una-ui/issues',
        target: '_blank',
      }, {
        title: 'Release Notes',
        icon: 'lucide:book',
        to: 'https://github.com/una-ui/una-ui/releases',
        target: '_blank',
      }, {
        title: 'Become a Sponsor',
        icon: 'lucide:heart',
        to: 'https://github.com/sponsors/phojie',
        target: '_blank',
      }],
    },
    search: {
      enable: true,
      style: 'input',
      inAside: false,
      placeholder: 'Search...',
    },
  },
})
