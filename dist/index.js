/**
 * Quartz — satellite Dripnex theme.
 * Token layer only. Same contract as a community theme repo.
 * Must be CommonJS.
 */

const TOKENS = {
  '--bg-base': '#f7f7f8',
  '--bg-surface': '#eeeeef',
  '--bg-elevated': '#fcfcfd',
  '--bg-inset': '#e6e6e8',
  '--bg-hover': 'rgba(24, 24, 27, 0.06)',
  '--bg-active': 'rgba(24, 24, 27, 0.1)',
  '--text-primary': '#18181b',
  '--text-secondary': 'rgba(24, 24, 27, 0.74)',
  '--text-muted': 'rgba(24, 24, 27, 0.52)',
  '--text-faint': 'rgba(24, 24, 27, 0.34)',
  '--border': 'rgba(24, 24, 27, 0.12)',
  '--border-subtle': 'rgba(24, 24, 27, 0.07)',
  '--border-strong': 'rgba(24, 24, 27, 0.18)',
  '--accent': '#3f3f46',
  '--accent-hover': '#27272a',
  '--accent-muted': 'rgba(63, 63, 70, 0.14)',
  '--accent-subtle': 'rgba(63, 63, 70, 0.08)',
  '--glass-bg': 'rgba(247, 247, 248, 0.92)',
  '--glass-border': 'rgba(24, 24, 27, 0.1)',
  '--glass-bg-menu': 'rgba(252, 252, 253, 0.96)',
  '--glass-border-menu': 'rgba(24, 24, 27, 0.1)',
  '--status-active': '#3f3f46',
  '--status-on-hold': '#b45309',
  '--status-completed': '#3f7a52',
  '--status-dropped': '#b42318',
};

module.exports = {
  id: 'theme-quartz',
  name: 'Quartz',
  version: '0.1.0',
  description: 'Cold paper. Clean product light.',

  activate(context) {
    const remove = context.registerTheme({
      id: 'dripnex-quartz',
      name: 'Quartz',
      description: 'Swiss-quiet white. Ink on cool paper, not cream, not tea, not coastal gray.',
      author: 'Dripnex',
      colorScheme: 'light',
      tokens: TOKENS,
    });

    return {
      dispose() {
        remove();
      },
    };
  },
};
