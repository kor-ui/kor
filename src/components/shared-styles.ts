import { css } from 'lit-element'

export const sharedStyles = css`
  /* scrollbar */
  ::-webkit-scrollbar {
    width: 8px;
    height: 8px;
    background-color: transparent;
    visibility: hidden;
  }
  ::-webkit-scrollbar-track {
    background-color: rgba(var(--neutral-1), .05);
    border-radius: 8px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: rgba(var(--neutral-1), .10);
    border-radius: 8px;
  }
  ::-webkit-scrollbar-thumb:active,
  ::-webkit-scrollbar-thumb:hover {
    background-color: rgba(var(--neutral-1), .20)
  }
`;