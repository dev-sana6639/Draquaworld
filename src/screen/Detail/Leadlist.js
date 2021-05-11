import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { MyText } from '../../components/Text/text';
import * as appcolor from '../../utils/colors'
import * as AppStrings from '../../utils/AppStrings';

class Leadlist extends Component {
    render() {
        
        const {
            id,
            address,
            customername,
            machineproblem,
            description,
            machine,
            date,
            RemainderDescription,
            RemainderTitle,
            Remainderdate
        } = this.props.item.data;
        
        console.log('data in leadlist is:',this.props.item.data)

       
        const Mydate = new Date(Remainderdate)

        const RemainderDate = Mydate.getDate();
        const Remaindermonth = Mydate.getMonth();
        const RemainderYear = Mydate.getFullYear();
        const RemainderHour = Mydate.getHours();
        const RemainderMinute = Mydate.getMinutes();

       

        return (

            <View style={styles.container}>


                <View style={styles.nameblock}>
                    <View style={styles.customername}>
                        <MyText
                            title={AppStrings.name}
                            h5
                            bold
                        />
                    </View>
                    <View style={styles.customername1}>
                        <MyText
                            title={customername}
                            h5
                        />
                    </View>
                </View>

                <View style={styles.addressblock}>
                    <View style={styles.Address}>
                        <MyText
                            title={AppStrings.address}
                            h5
                            bold
                        />
                    </View>
                    <View style={styles.Adress1}>
                        <MyText
                            title={address}
                            h5
                        />
                    </View>
                </View>


                <View style={styles.Machineblock}>
                   <View style={styles.machine}>
                    <MyText
                        title={AppStrings.machine}
                        h5
                        bold
                    />
                    </View>
                    
                    <View style={styles.machine1}>
                    <MyText
                        title={machine}
                        h5
                    />
                    </View>
                </View>


                <View style={styles.problemblock}>
                   <View style={styles.problem}>
                    <MyText
                        title={AppStrings.issue}
                        h5
                        bold
                    />
                    </View>
                    
                    <View style={styles.problem1}>
                    <MyText
                        title={machineproblem}
                        h5
                    />
                    </View>
                </View>

           
                <View style={styles.Dateblock}>
                   <View style={styles.Date}>
                    <MyText
                        title={AppStrings.date}
                        h5
                        bold
                    />
                    </View>
                    
                    <View style={styles.Date1}>
                    <MyText
                        title={date}
                        h5
                    />
                    </View>
                </View>
           
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        
       
        padding:5
        
    },
    Dateblock :{
       
        flexDirection: 'row',
        padding: 2,
        
    },
    Date:{
        width:'40%',
        marginLeft:'2%',
        padding:2
    },
    Date1 :{
     width:'60%',
     padding:2,
     flexDirection:'row'
    }, 
    problemblock: {
        
        flexDirection: 'row',
        padding: 2,
        // backgroundColor:'#D7DBDD'
    },
    problem: {
        width: '40%',
        marginLeft:'2%',
        padding:2
    },
    problem1:{
        width:'60%',
        padding:2
        
    },
    nameblock: {
        
        flexDirection: 'row',
        padding:2
    },
    customername:{
      width: '40%',
      marginLeft:'2%',
      padding:2
    },
    customername1:{
      width:'60%',
      padding:2
    },
    addressblock: {
        // backgroundColor:'#D7DBDD',
        flexDirection:'row',
        padding: 2
    },
    Address:{
    width:'40%' ,
    marginLeft:'2%',
    padding:2
    },
   Adress1:{
      width:"60%" ,
      padding:2
   },
    Machineblock:{
      
       flexDirection:'row',
       padding: 2
       
    },
    machine:{
        width:'40%',
        marginLeft:'2%',
        padding:2
    },
    machine1:{
     width:'60%',
     padding:2
    }

})
export default Leadlist;