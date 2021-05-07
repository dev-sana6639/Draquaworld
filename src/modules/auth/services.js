import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';

// // Handle the button press
// export const signInWithPhoneNumber = async (phoneNumber) => {
    
    
//     const number =  phoneNumber.Number
    
//     const confirmation = await auth().signInWithPhoneNumber(number);
//     console.log('after number')
//    return confirmation;
//   }


export const LoginService = async (props) => {
  
    const email = props.Email;
    const password = props.Password; 
    

    const userdetails = await auth().signInWithEmailAndPassword( email, password)
    // // console.log('user det issss')
    // console.log(userdetails.user.uid)
//    const userdet = userdetails.user.uid;
   
    // const userdb =  database().ref('User').push(userdet)
    // console.log('userdb is ref is:',userdb)

    
    
  
    return userdetails
    
}