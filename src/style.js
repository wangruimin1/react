import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed, 
  figure, figcaption, footer, header, hgroup, 
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure, 
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  *{
    text-decoration: none;
    -webkit-tap-highlight-color: transparent;
  }
  body {
    line-height: 1;
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  html{
      font-size:calc(100/750*100vw);
  }
  body{
      font-size:14px;
  }
`
export const HomeWrapper = styled.div`
    width:100vw;
    height:100vh;
    display:flex;
    flex-direction:column;
`;
export const HeaderWrapper = styled.div`
    width:100%;
    height:2.7rem;
    background:#000;
`
export const MainWrapper = styled.div`
    width:100%;
    flex:1;
    overflow:hidden;
`
export const FooterWrapper = styled.div`
    width:100%;
    height:.9rem;
    background:#ccc;
`