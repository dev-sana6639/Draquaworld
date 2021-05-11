import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, Linking, TouchableOpacity, ScrollView } from 'react-native';
import Headers from '../../components/Header/Header';
import { MyText } from '../../components/Text/text';
import LeadDetail from './LeadDetail';
import * as appcolor from '../../utils/colors'
import NavigationService from '../../utils/navigation';

const { height, width } = Dimensions.get('window');
class DetailScreen extends Component {


    MakeCall = (phone) => {
        Linking.openURL(`tel:${this.props.route.params.item.data.phone}`)

    }

    render() {


        const {
            id,
            address,
            customername,
            description,
            machine,
            machineproblem,
            phone,
            date,
            RemainderDescription,
            RemainderTitle,
            Remainderdate,
            UpdatedStatus,

        } = this.props.route.params.item.data;

    const Pid = this.props.route.params.item.Key;
    
        


        return (
            <View style={styles.container}>
               
                    <View style={styles.header}>

                        <Headers
                            leftComponent={{

                                icon: 'arrowleft',
                                text: 'Lead Details',
                                bold: 'bold',
                                color: 'white',

                            }}
                            backgroundColor={appcolor.primary}
                            navigation={this.props.navigation}



                        />

                    </View>


                    <View style={styles.leaddetail}>
                        <ScrollView>
                        <LeadDetail
                            id={id}
                            address={address}
                            customername={customername}
                            description={description}
                            machine={machine}
                            machineproblem={machineproblem}
                            phone={phone}
                            date={date}
                            RemainderDescription={RemainderDescription}
                            RemainderTitle={RemainderTitle}
                            Remainderdate={Remainderdate}
                            UpdatedStatus={UpdatedStatus}
                            Pid={Pid}
                            phone={this.props.route.params.item.data.phone}
                        />
                        </ScrollView>
                    </View>
             

                <TouchableOpacity onPress={this.MakeCall} style={styles.makecall}  >
                    <Text style={styles.makecalltext}>make a call</Text>
                </TouchableOpacity>
            </View>
        )

    }
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: width,
        flexDirection:'column',
        justifyContent: 'space-between'

    },
   
    leaddetail: {
        height: '83%',

    },

    makecall: {
        height: '7%',
        width: '95%',
        alignSelf: 'center',
        backgroundColor: appcolor.primary,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius:10
    },
    makecalltext: {
        fontSize: 20,
        color: appcolor.white

    },
    header: {
        borderWidth: 0.1,
        elevation: 2,
        width: '100%',
        height: '5%',
       


    },




})
export default DetailScreen;