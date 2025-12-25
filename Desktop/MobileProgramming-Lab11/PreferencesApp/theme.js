export const palette = {
  primary: '#4F46E5',   // indigo
  danger: '#EF4444',    // red
  bgLight: '#F8FAFC',   // slate-50
  cardLight: '#FFFFFF',
  textLight: '#0F172A', // slate-900
  mutedLight: '#64748B',// slate-500

  bgDark: '#0B1220',
  cardDark: '#111827',
  textDark: '#E5E7EB',
  mutedDark: '#9CA3AF',
};

export function getThemeColors(mode) {
  const isDark = mode === 'dark';
  return {
    isDark,
    bg: isDark ? palette.bgDark : palette.bgLight,
    card: isDark ? palette.cardDark : palette.cardLight,
    text: isDark ? palette.textDark : palette.textLight,
    muted: isDark ? palette.mutedDark : palette.mutedLight,
    primary: palette.primary,
    danger: palette.danger,
  };
}
