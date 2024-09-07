export const smoothScroll = (top: number = 0, left: number = 0) => {
  window.scroll({
    top,
    left,
    behavior: 'smooth',
  });
};
