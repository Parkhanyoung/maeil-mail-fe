import { globalStyle } from '@vanilla-extract/css';
import { lightTheme, darkTheme, vars } from '@maeil/theme';

globalStyle('*', {
  boxSizing: 'border-box',
});

globalStyle('html', {
  fontSize: '62.5%',
});

globalStyle('body', {
  margin: '0',
  transition: 'all 0.3s ease',
  fontSize: '1.6rem',
});

globalStyle('button', {
  cursor: 'pointer',
  outline: 'none',
  border: 'none',
  background: 'inherit',
  padding: '0',
  color: 'inherit',
  fontWeight: 'inherit',
  fontSize: 'inherit',
});

globalStyle('h1, h2, h3, p', {
  margin: '0',
  padding: '0',
});

globalStyle('a, a:link, a:visited, a:hover', {
  textDecoration: 'none',
  color: 'inherit',
});

globalStyle('ol, ul', {
  margin: '0',
  padding: '0',
  listStyle: 'none',
});

globalStyle(`:root`, {
  background: lightTheme.colorBackground,
});

globalStyle(`[data-theme='dark']`, {
  background: darkTheme.colorBackground,
});

globalStyle('.cm-line', {
  fontSize: '2.1rem !important',
});

globalStyle('.ͼ1.cm-focused', {
  outline: 'none !important',
});

// markdown-preview

globalStyle('.wmde-markdown', {
  background: `${darkTheme.colorBackground} !important`,
  color: `${vars.text1} !important`,
  fontSize: '1.3rem !importannt',
});

globalStyle('.wmde-markdown ul, .wmde-markdown ol', {
  listStyle: 'disc outside none',
});

globalStyle('.wmde-markdown h2', {
  border: 'none !important',
  letterSpacing: '-0.03rem',
});

globalStyle('.wmde-markdown code', {
  fontSize: '1.3rem !important',
  padding: '0.2em 0.2em',
});

globalStyle('.wmde-markdown pre', {
  background: `${darkTheme.colorBackground} !important`,
});

globalStyle('.wmde-markdown hr', {
  background: `${vars.borderColor1} !important`,
  height: '1px !important',
});

globalStyle('.wmde-markdown blockquote', {
  borderLeft: '0.25em solid #d9d9d9 !important',
  background: '#434343 !important',
  color: '#a6a6a6 !important',
  padding: '1em !important',
});

globalStyle('.wmde-markdown img', {
  background: 'none !important',
});

globalStyle('.wmde-markdown p', {
  fontSize: '1.7rem',
  lineHeight: 1.6,
  letterSpacing: '-0.02rem',
  '@media': {
    '(max-width: 800px)': {
      fontSize: '1.6rem',
    },
  },
});

globalStyle(
  `.wmde-markdown .token.color, 
   .wmde-markdown .token.atrule, 
   .wmde-markdown .token.attr-value, 
   .wmde-markdown .token.function, 
   .wmde-markdown .token.string, 
   .wmde-markdown .token.class-name`,
  {
    color: '#246398 !important',
  },
);

// 테이블표

globalStyle('.wmde-markdown table tr', {
  color: `${vars.text1} !important`,
  background: `none !important`,
});

globalStyle('.wmde-markdown table', {
  overflow: 'auto',
});

globalStyle('.wmde-markdown table td', {
  wordBreak: 'break-word',
  whiteSpace: 'normal',
});

globalStyle('.wmde-markdown .code-highlight', {
  background: '#F5F8FA',
});
