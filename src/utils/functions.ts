/* eslint-disable @typescript-eslint/no-unused-vars */
export const openLinksInNewTab: (className: string)=> void = (className) => {
  const links = document.querySelectorAll(`${className} a`);
  links.forEach((link) => {
    link.setAttribute('target', '_blank');
  });
};
