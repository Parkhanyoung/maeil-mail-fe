import { style } from '@vanilla-extract/css';
import { vars } from '@maeil/theme';

export const navContentWrapper = style({ display: 'flex', alignItems: 'center', gap: '3rem' });

export const teamIntroductionLink = style({
  cursor: 'pointer',
  fontSize: '1.5rem',
  fontWeight: 600,
});

export const subscribeButton = style({
  color: 'white',
  fontSize: '1.4rem',
  backgroundColor: vars.primary,
  padding: '1rem 1rem',
  borderRadius: '0.6rem',
  fontWeight: 550,
});
