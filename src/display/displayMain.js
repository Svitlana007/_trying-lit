import displayFactory from './factory';

// partials
import DisplayHead from './displayHead';
import DisplayBody from './displayBody';

import MainComponent from '../components/mainComponent';

// note that head and body params are actually `displayHead` & `displayBody` 
// methods for sub-components


//variant one
const settings = {
  component: MainComponent,
  params: {  },
  subComponents: { DisplayHead, DisplayBody }
  
}

const DM = displayFactory(settings);

DM.log();
// DM.display();


// console.log(DisplayHead);
// console.log(DisplayBody);






const DisplayMain = {
  component: MainComponent,
  params: { DisplayHead, DisplayBody },
  display: () => {
    
    //  console.log(this.component(params))
    
//     const head = displayHead(title);
//     const body = displayBody();
    
//     return mainComponent(head, body);
    
  },
  checks: () => [
    
  ]
  
}

export default DisplayMain;



// const {
//     address,
//     copyrights,
    
//     newsletterSponsorshipLink,
//     unsubscribe,

//     fonts
// } = misc;

// // import { headStyles } from '../templates/head-styles';
// const title = `The Secrets of High-Performing DevOps teams`;

// const displayMain = () => {
  
//     const head = displayHead(title);
//     const body = displayBody();
    
//     return mainComponent(head, body);
// }

