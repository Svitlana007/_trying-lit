// checks should be runned inside display
const displayFactory = (settings, checks = [], isError = false) => {

    // console.log(settings)

    const { component, params, subcomponents } = settings;

    if(!component) throw new Error('no component was passed')

    if(!params) throw new Error('no params was passed')
    
    // if(!subcomponents) throw new Error('no component was passed')
    


    return {
      error: false, 
      params: params,
      subcomponents: (subcomponents) ? subcomponents : null,  
      // log: false,
      display: () => { 
  
          //here i want to apply a check and see if everything is fine, if not we generate error = true 
          try {
            component(params, subcomponents) 
          } catch (err) {
            // statements to handle any exceptions
            console.log(err);
            // this.error = true;
          }

          
      
      },
        
      checks: () => { return []; },  
        
        
      init: () => {
  
      },
      
      try: () => {
  
      },

	  get: () => { return component; },

      checks: () => {
          checks.map(() => {

          })

          if(subcomponents){
            //   subcomponents.map((component) => {
            //     component.init();
            //   })
          }

        

      },

      log: () => { 
          console.log('123');

          console.log(this);
          
      // //     console.log(this.display()) 
      },



      //get: () => {name:name, regEx:regEx, replace:replace(), isError:false},
  
      //combine: () => {return {name:name, regEx:regEx, replace:replace()}},
  
      // I want to have a better way to report errors, so each callback can report an issue, so we can track it better 
      isError: () => { if(this.error){ return 'errror is here'; } }
    }
  }


  // displayFactory.prototype.log = () => {
  //   // log: () => { 
  //     console.log('123');
  //     // console.log(this.display()) 
  // // },
  // }
  
  export default displayFactory;