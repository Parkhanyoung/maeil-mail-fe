import { style } from '@vanilla-extract/css';
import { vars } from '@maeil/theme';
import { MEDIA_BREAKPOINT } from '@/constants/mediaBreakpoint';

export const container = style({
  width: '100%',
  padding: '5rem 1.6rem',
  fontSize: '1.2rem',
  color: vars.text2,
  backgroundColor: '#f9f9f9',
  fontWeight: 400,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

export const innerWrapper = style({
  display: 'flex',
  width: '80%',
  maxWidth: '110rem',
  justifyContent: 'space-between',
  gap: '2rem',

  '@media': {
    [`screen and (max-width: ${MEDIA_BREAKPOINT.mobile}px)`]: {
      width: '90%',
      flexDirection: 'column',
    },
  },
});

export const side = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
  wordBreak: 'keep-all',
});

export const externalLink = style({
  selectors: {
    '&:hover': {
      textDecoration: 'underline', // Hover 시 밑줄 추가
    },
  },
});
