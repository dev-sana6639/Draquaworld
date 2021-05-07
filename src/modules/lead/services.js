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
      var data = snapshot.val()
      return data
    })

  return leadData;
}

export const grabTicketService = (props) => {

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
    lastupdateddate
  } = props;

  const {uid} = props


  
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
   

}