import database from '@react-native-firebase/database';

export const getTicketsService = async (uid) => {
    var Tickets = await database().ref('/Users/' + uid)
        .once('value')
        .then(snapshot => {
            const Ticketsdata = []

            snapshot.forEach((child) => {

            
                const Key = child.key
                const data = child.val()
                Ticketsdata.push({Key: Key,data: data})
   })

            
            return Ticketsdata


        })

    // console.log('Tickets are from firebase is:')
    // console.log(Tickets)

    return Tickets

}

export const updateTicketService = (props) =>{
    console.log('came to update')
    console.log(props)
     const uid = props.uid;
     const Pid = props.Pid;
     const {
        id,
        address,
        customername,
        description,
        machine,
        machineproblem,
        phone,
        date,
        lastupdateddate,
        UpdatedStatus,
        Remainderdate,
        RemainderTitle,
        RemainderDescription,
     } = props;
     console.log('uid is',uid)
     console.log('Pid',Pid)

    database().ref(`Users/${uid}/${Pid}`) 
       .set({
        id: id,
        address:address ,
        customername : customername,
        description :description,
        machine: machine,
        machineproblem:machineproblem,
        phone :phone,
        date : date,
         UpdatedStatus: UpdatedStatus,
        Remainderdate: Remainderdate,
        RemainderTitle : RemainderTitle,
        RemainderDescription : RemainderDescription,
        lastupdateddate: lastupdateddate,


       })
}

export const droppedplan = async (props) =>{
   
    const uid = props.uid;
    const Pid = props.Pid;
    
    
    await database().ref(`Users/${uid}/${Pid}`).remove();


}