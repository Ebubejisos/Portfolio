/* eslint-disable @typescript-eslint/no-unused-vars */
export const openLinksInNewTab: (...selectors: string[])=> void = (...selectors) => {
  // selectors are multiple css selectors that can be passed to the function to select all links within them

  // check if DOM exists in use case
  if(document) {
    selectors.forEach((selector) => {
      // selects all elements for the passed selector
      const elements = document.querySelectorAll(`${selector}`);
      // check if an element was selected/found
      if(elements.length > 0) {
        elements.forEach((element) => {
          const links = element.querySelectorAll('a');
          links.forEach((link) => {
            link.setAttribute('target', '_blank');
          });
        })
      }
      else {
        console.warn(`No element found by ${selector}`);
      }
    })
  }
  else {
    console.error('Document object not found, this function shoould be run in a browser environment!')
  }
};
