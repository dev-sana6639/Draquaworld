import database from '@react-native-firebase/database';

// export const LeadData = [
//     {    
//         id:1,
//         customername: 'kishore',
//         phone: 9036520591,
//         address: 'konduru,kadapa',
//         machine: 'cent Ro',
//         date: '10/3/2021',
//         description: 'asjdjsahdlhasjhdgshdgsj ashdkjlsha jhsdkjsahdhasjdh',
//         machineproblem: 'tanker leake'
//     },
//     {   
//         id:2,
//         customername: 'manish',
//         phone: 9826520571,
//         address: 'zarkand',
//         machine: 'cent Ro',
//         date: '15/3/2021',
//         description: 'asjdjsahdlhasjhdgshdgsj ashdkjlsha jhsdkjsahdhasjdh',

//         machineproblem: 'wire breakage'
//     },
//     {
//         id:3,
//         customername: 'bharathi',
//         phone: 8722583034,
//         address: 'karnool, Andra Pradesh',
//         machine: 'cent Ro',
//         date: '18/3/2021',
//         machineproblem: 'not getting On',
//         description: 'asjdjsahdlhasjhdgshdgsj ashdkjlsha jhsdkjsahdhasjdh',

//     },
//     {
//         id:4,
//         customername: 'sana',
//         phone: 8722583034,
//         address: 'karnatak',
//         machine: 'cent Ro',
//         date: '25/3/2021',
//         machineproblem: 'not getting On',
//         description: 'asjdjsahdlhasjhdgshdgsj ashdkjlsha jhsdkjsahdhasjdh',

//     }

// ]



export const getLeadService = async () => {

  var leadData = await database()
    .ref('/leads')
    .once('value')
    .then(snapshot => {
      const LeadsData = []

       snapshot.forEach( (child) =>{

         const Key = child.key
         const data = child.val()
        
         LeadsData.push({Key: Key,data:data})
       })

       return LeadsData;
      
    })

     return leadData 
}

export const grabTicketService = async (props) => {

  const {
    id,
    address,
    customername,
    description,
    machine,
    machineproblem,
    phone,
    date,
    UpdatedStatus,
    Remainderdate,
    RemainderTitle,
    RemainderDescription,
    lastupdateddate,
    Pid
  } = props;

  const {uid} = props


   try {
  const grabticketrespose = database().ref('/Users/' + uid )
  .push({
    id,
    address,
    customername,
    description,
    machine,
    machineproblem,
    phone,
    date,
    UpdatedStatus,
    Remainderdate,
    RemainderTitle,
    RemainderDescription,
    lastupdateddate
  })

     
  // after grabbing successfully, the lead should disappear from leads list and it will be saved in specific user's grabbed ticket list
    // database().ref(`leads/${Pid}`).remove();
    // alert('pushed into users account ticket')
    
     
     

} catch(e){
  console.log('Error while grabbing ticket')
}
   

}