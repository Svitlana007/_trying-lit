import { writeHTML, generateTemplateName } from 'markup-generator'



import HeadString   from './display/displayHead';

import BodyString   from './display/displayBody';

import FooterString from './display/displayFooter';


import MainString from './display/displayMain';




const printHead = () => {

  return HeadString;
  
}



const printMain = () => {
  return MainString;
}

const printFooter = () => {
  return FooterString;

}

const printBody = () => {
  return BodyString;
}


// instead of importhing these methods we can run displayXXX.checks[xxx]

// import { checkingTitle,
//   checkingBodyContent,
//   checkingPreviewText 
// } from './t/display'





const writingFile = (content) => {

  // const content  = generateEmptyTemplateComponent();
  const fileName = generateTemplateName('lit-empty');

  writeHTML(fileName, content);
}



export { 
  printMain, 
  
  printFooter, printBody,
  printHead,


  writingFile
 }
