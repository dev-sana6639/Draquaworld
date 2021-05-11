import React, { Component } from 'react';
import { View, Text, StyleSheet, Modal, Dimensions, ScrollView, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import Headers from '../../components/Header/Header';
import { MyText } from '../../components/Text/text';
import Input from '../../containers/input/Input';
import * as  appstring from '../../utils/AppStrings'
import { Picker } from '@react-native-picker/picker';
import * as appcolors from '../../utils/colors';
import { showMessage } from "react-native-flash-message";
import { GrabTicket, CheckItem } from '../../modules/tickets/actions';
import * as appcolor from '../../utils/colors';
import { ticketExist } from '../../modules/tickets/selectors';
import Antdesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import DateTimePicker from 'react-native-modal-datetime-picker';
import Entypo from 'react-native-vector-icons/Entypo'
import { getuidSelector } from '../../modules/auth/selectors';
import { updateTicketService,droppedplan } from '../../modules/tickets/services'
import moment from 'moment';
import OtpVerifyScreen from './OtpVerifyScreen';
import { mainstack } from '../../config/navigator';


const { height, width } = Dimensions.get('window');
class TicketDetails extends Component {

    constructor(props) {
        super(props);
        this.state = {
            // seleceting a value from modal
            selectedValue: '',
            CurrentStatus: 'need to followup',
            UpdatedStatus: '',
            UpdatedValue: '',
            modalVisible: false,
            RemainderTitle: '',
            RemainderDescription: '',
            isDateTimePickerVisible: false,
            notificationTime: moment(),
            Remainderdate: '',
            time: '',
            mode: '',
            show: false,
            remainderError: '',
            EmptyRemainderdate: '',
            EmptyRemainderDescription: '',
            EmptyRemainderTitle: '',


        }
    }

    onmodalclose = () => {
        this.setState({ modalVisible: false })
        this.setState({ remainderError: '' })
    }
    handledatecancel = () => {
        this.setState({ RemainderTitle: '' })
        this.setState({ RemainderDescription: '' })
        this.setState({ Remainderdate: '' })
        this.setState({ time: '' })
        this.setState({ modalVisible: false })
        this.setState({ isDateTimePickerVisible: false })
        this.setState({ remainderError: '' })
    }
    closeDatetimePicker = () => {
        this.setState({ show: false });
        this.setState({ RemainderTitle: '' })
        this.setState({ RemainderDescription: '' })
        this.setState({ Remainderdate: '' })
        this.setState({ remainderError: '' })
    };

    showDatepicker = () => {

        this.showMode('datetime');
    };

    showTimepicker = () => {
        this.showMode('time');
    };

    showMode = (currentMode) => {

        this.setState({ show: true })
        this.setState({ mode: currentMode });

    };

    componentDidMount() {
        const UpdatedStatus = this.props.route.params.item.data.UpdatedStatus;
     

        this.setState({ CurrentStatus: UpdatedStatus })
    }


    //     handlestatus = (itemValue, itemIndex) => {
    //          const {
    //              id,
    //              address,
    //              customername,
    //              description,
    //              machine,
    //              machineproblem,
    //              phone,
    //              date

    //          } =  this.props.route.params.item.data;

    //          this.setState({ CurrentStatus: itemValue })
    //         const { UpdatedStatus, Remainderdate, RemainderTitle, RemainderDescription } = this.state;


    //        const uid =  this.props.uid;
    //        const Pid = this.props.route.params.item.Key;

    //         var lastupdateddate = moment().utcOffset('+05:30').format('YYYY-MM-DD hh:mm:ss a');




    //        updateTicketService({
    //            uid,
    //            id,
    //            Pid,
    //             address,
    //             customername,
    //             description,
    //             machine,
    //             machineproblem,
    //             phone,
    //             date,
    //             lastupdateddate,
    //             UpdatedStatus,
    //             Remainderdate,
    //             RemainderTitle,
    //             RemainderDescription,

    //        })

    //         // this.props.dispatch(GrabTicket({
    //         //     id,
    //         //     address,
    //         //     customername,
    //         //     description,
    //         //     machine,
    //         //     machineproblem,
    //         //     phone,
    //         //     date,

    //         //     UpdatedStatus,
    //         //     Remainderdate,
    //         //     RemainderTitle,
    //         //     RemainderDescription,


    //         // }))

    //         // this.props.dispatch(CheckItem(id))

    //      showMessage({
    //          message: "Status Updated Successfully",
    //          statusBarHeight:5,
    //          type: "default",
    //          icon: "success",
    //          backgroundColor: appcolors.primary, // background color
    //          color: appcolors.white, // text color
    //      });


    // //  }
    // //  else {

    // //     this.setState({ EmptyCurrentStatusError: '*status is empty' })
    // // }
    // }
    handlestatus = (itemValue, itemIdex) => {

        if (itemValue == 'droppedplan') {
            const uid = this.props.uid;
            const Pid = this.props.route.params.item.Key;
            
          

           droppedplan({uid,Pid})

            showMessage({
                message: "Removed ticket Successfully",
                statusBarHeight: 5,
                type: "default",
                icon: "success",
                // text color
            });
        


        } else if (itemValue == 'update') {
            // for updating the ticket
            const {
                id,
                address,
                customername,
                description,
                machine,
                machineproblem,
                phone,
                date

            } = this.props.route.params.item.data;

            this.setState({ CurrentStatus: itemValue })
            const { UpdatedStatus, Remainderdate, RemainderTitle, RemainderDescription } = this.state;


            const uid = this.props.uid;
            const Pid = this.props.route.params.item.Key;

            var lastupdateddate = moment().utcOffset('+05:30').format('YYYY-MM-DD hh:mm:ss a');




            updateTicketService({
                uid,
                id,
                Pid,
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

            })

            // this.props.dispatch(GrabTicket({
            //     id,
            //     address,
            //     customername,
            //     description,
            //     machine,
            //     machineproblem,
            //     phone,
            //     date,

            //     UpdatedStatus,
            //     Remainderdate,
            //     RemainderTitle,
            //     RemainderDescription,


            // }))

            // this.props.dispatch(CheckItem(id))

            showMessage({
                message: "Status Updated Successfully",
                statusBarHeight: 5,
                type: "default",
                icon: "success",
                backgroundColor: appcolors.primary, // background color
                color: appcolors.white, // text color
            });


            //  }
            //  else {

            //     this.setState({ EmptyCurrentStatusError: '*status is empty' })
            // }

        }
        else {
            console.log('droppedplan is not selected')
        }

    }
    onChange = (date) => {


        this.setState({ Remainderdate: date })
        this.setState({ show: false })
    };

    modaladdbutton = () => {
        const { RemainderTitle, RemainderDescription, Remainderdate } = this.state;
        if (!RemainderTitle == '' && !RemainderDescription == '' && !Remainderdate == '') {

            this.setState({ remainderError: '' })
            this.setState({ modalVisible: false })
        } else {

            this.setState({ remainderError: '*fill all the inputs' })
        }




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


        const { modalVisible, mode, show, notificationTime, notificationTitle, isDateTimePickerVisible, remainderdateError, remainderError } = this.state;

        console.log('ticket details are:')
        console.log(this.props.route.params.item.Key)

        return (



            <View style={styles.container}>
                <View style={styles.header}>

                    <Headers
                        leftComponent={{

                            icon: 'arrowleft',
                            text: 'Ticket Details',
                            bold: 'bold',
                            color: 'white',

                        }}
                        backgroundColor={appcolor.primary}
                        navigation={this.props.navigation}



                    />

                </View>


                <ScrollView>

                    <View style={styles.nameblock}>
                        <View style={styles.customername}>
                            <MyText
                                title={appstring.name}
                                h4
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
                                title={appstring.address}
                                h4
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
                                title={appstring.machine}
                                h4
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
                                title={appstring.issue}
                                h4
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
                                title={appstring.date}
                                h4
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

                    <View style={styles.Descriptionblock}>
                        <View style={styles.Description}>
                            <MyText
                                title={appstring.description}
                                h4
                                bold
                            />
                        </View>

                        <View style={styles.Description1}>
                            <MyText
                                title={description}
                                h5
                            />
                        </View>
                    </View>

                    <View style={styles.currentstatusblock}>
                        <View style={styles.currentstatus}>
                            <MyText
                                title={appstring.currentstatus}
                                h4
                                bold
                            />
                        </View>

                        <View style={styles.currentstatusdisplay}>
                            <MyText
                                title={this.state.CurrentStatus}
                                h4
                            />

                        </View>
                    </View>

                    <View style={styles.updatestatusblock}>
                        <View style={styles.updatestatus}>
                            <MyText
                                title={appstring.update}
                                h4
                                bold
                            />
                        </View>

                        <View style={styles.inputstyle}>

                            {
                                this.state.EmptyCurrentStatusError ? (

                                    <MyText
                                        title={this.state.EmptyCurrentStatusError}
                                        color={appcolor.red}
                                    />

                                ) : null


                            }

                            <Input
                                placeholder={appstring.UpdatedStatus}
                                value={this.props.route.params.item.data.UpdatedStatus ? this.props.route.params.item.data.UpdatedStatus : this.state.CurrentStatus}
                                onChangeText={value => this.setState({ UpdatedStatus: value })}
                                placeholderTextColor={appcolor.black}
                                height={45}
                                width={'100%'}
                                color={appcolor.black}
                                backgroundColor={appcolor.white}
                                selectionColor={appcolor.black}
                            />
                        </View>


                    </View>

                    <View style={styles.Remainderblock}>
                        <TouchableOpacity style={styles.remainderbutton} onPress={() => this.setState({ modalVisible: true })}>
                            <MyText title={appstring.setremainder} />
                        </TouchableOpacity>

                    </View>

                    <Modal
                        animationType="slide"
                        transparent={true}
                        visible={modalVisible}
                        onRequestClose={() => {
                            Alert.alert("Modal has been closed.");
                            this.setState({ modalVisible: false });
                        }}
                    >
                        <View style={styles.centeredView}>
                            <View style={styles.modalView}>
                                <View style={styles.cancelbutton}>
                                    <View style={{ paddingLeft: '20%' }}>
                                        <MyText
                                            title={appstring.AddRemainder}
                                            color={appcolor.black}
                                            bold
                                        />
                                    </View>

                                    <MaterialIcons onPress={this.onmodalclose} name={'cancel'} color={appcolor.primary} size={20} />

                                </View>

                                <View style={styles.remainderinfo}>

                                    <View style={styles.InputStyle}>
                                        {
                                            !remainderError == '' ? (
                                                <MyText title={remainderError} color={appcolor.red} />
                                            ) : null
                                        }
                                        <Input

                                            value={this.state.RemainderTitle}
                                            placeholder={appstring.RemainderTitle}
                                            onChangeText={value => this.setState({ RemainderTitle: value })}
                                            width={'95%'}
                                            height={45}
                                            color={appcolor.black}
                                            backgroundColor={appcolor.grey}
                                            borderRadius={5}
                                            placeholderTextColor={appcolor.black}
                                            selectionColor={appcolor.black}

                                        />
                                    </View>

                                    <View style={styles.InputStyle}>
                                        <Input

                                            value={this.state.RemainderDescription}
                                            placeholder={appstring.RemainderDescription}
                                            onChangeText={value => this.setState({ RemainderDescription: value })}
                                            width={'95%'}
                                            height={45}
                                            color={appcolor.black}
                                            backgroundColor={appcolor.grey}
                                            borderRadius={5}
                                            placeholderTextColor={appcolor.black}
                                            selectionColor={appcolor.black}

                                        />


                                    </View>
                                    <View style={styles.sceduleblock}>

                                        <TouchableOpacity onPress={this.showDatepicker} style={styles.datebutton}>
                                            <MyText
                                                title={appstring.setdate}
                                                color={appcolor.black}
                                                bold
                                            />
                                        </TouchableOpacity>




                                        {show && (
                                            <DateTimePicker
                                                isVisible={this.state.show}
                                                testID="dateTimePicker"
                                                value={this.state.date}
                                                mode={this.state.mode}
                                                is24Hour={true}
                                                display="default"
                                                onCancel={this.closeDatetimePicker}
                                                onConfirm={this.onChange}

                                            />
                                        )}
                                    </View>

                                    <View style={styles.modalremainderbutton}>
                                        <TouchableOpacity onPress={this.handledatecancel} style={styles.modalcancelbutton}>
                                            <MyText
                                                title={'Cancel'}
                                                color={appcolor.black}
                                                bold
                                            />
                                        </TouchableOpacity>
                                        <TouchableOpacity style={styles.modalokbutton} onPress={this.modaladdbutton}>
                                            <MyText
                                                title={appstring.add}
                                                color={appcolor.black}
                                                bold
                                            />
                                        </TouchableOpacity>
                                    </View>

                                </View>
                            </View>
                        </View>
                    </Modal>


                    <View style={styles.updatestatusbuttonblock}>
                        <View style={styles.updatestatusbutton}>
                            <MyText
                                title={appstring.updatestatus}
                                h4
                                bold
                            />
                        </View>
                        <View style={styles.dropdownbutton}>
                            <Picker
                                selectedValue={this.state.CurrentStatus}
                                onValueChange={this.handlestatus}>

                                <Picker.Item label="Requirest Follow up" value="requiestfollowup" />
                                <Picker.Item label="Price issue" value="priceissue" />

                                <Picker.Item label="Closed / Irrelevant" value="closed" />
                                <Picker.Item label="Completed /Converted" value="completed" />
                                <Picker.Item label="update ticket" value="update" />
                                <Picker.Item label="Dropped His Plan" value="droppedplan" />

                            </Picker>
                        </View>
                    </View>

                    <View style={styles.verifyotpblock}>
                        <Text style={styles.verifyotptext}>Verify your OTP here..</Text>
                    </View>
                   
                    <View style={styles.sendotp}>
                    <TouchableOpacity style={styles.sendotpButton} onPress={() => this.props.navigation.navigate(mainstack.OtpVerify)}>
                        <MyText 
                        title={appstring.sendotp} 
                         bold
                         color={appcolor.white}
                        />
                    </TouchableOpacity>
                    </View>
                    <View style={{ height: 30 }} />


                </ScrollView>

            </View>



        )

    }
}

const styles = StyleSheet.create({
    container: {
        height: height,
        borderRadius: 10



    },
    sendotp:{
        width:'95%',
        alignSelf:'center',
        height:40,
      
       marginTop:10,
       justifyContent:'center',
       alignItems:'center',
      
    },
    verifyotptext:{
        color:appcolor.greytext
    },
    verifyotpblock:{
     width:'95%',
     alignSelf:'center',
     justifyContent:'center',
     marginTop:10,
     alignItems:'center'   
    },
    sendotpButton:{
      
       elevation:3,
       padding:10 ,
       borderRadius:10,
       backgroundColor:appcolor.primary
    },
    nameblock: {

        flexDirection: 'row',
        borderBottomWidth: 1,

        width: '95%',
        alignSelf: 'center'
    },
    customername: {
        width: '40%',

        paddingTop: 10,
        paddingBottom: 10
    },
    customername1: {
        width: '60%',
        paddingTop: 10,
        paddingBottom: 10
    },

    addressblock: {
        flexDirection: 'row',
        width: '95%',
        alignSelf: 'center',
        borderBottomWidth: 1,
    },
    Address: {
        width: '40%',

        paddingTop: 10,
        paddingBottom: 10
    },

    Adress1: {
        width: '60%',
        paddingTop: 10,
        paddingBottom: 10
    },
    Machineblock: {
        flexDirection: 'row',
        width: '95%',
        alignSelf: 'center',
        borderBottomWidth: 1,
    },
    machine: {
        width: '40%',

        paddingTop: 10,
        paddingBottom: 10
    },
    machine1: {
        width: '60%',
        paddingTop: 10,
        paddingBottom: 10
    },
    problemblock: {
        flexDirection: 'row',
        width: '95%',
        alignSelf: 'center',
        borderBottomWidth: 1,
    },
    problem: {
        width: '40%',

        paddingTop: 10,
        paddingBottom: 10
    },
    problem1: {
        width: '60%',
        paddingTop: 10,
        paddingBottom: 10
    },
    Dateblock: {
        flexDirection: 'row',
        width: '95%',
        alignSelf: 'center',
        borderBottomWidth: 1,
    },
    Date: {
        width: '40%',

        paddingTop: 10,
        paddingBottom: 10
    },
    Date1: {
        width: '60%',
        paddingTop: 10,
        paddingBottom: 10
    },

    Descriptionblock: {
        flexDirection: 'row',
        width: '95%',
        alignSelf: 'center',
        borderBottomWidth: 1,
    },
    Description: {
        width: '37%',

        paddingTop: 10,
        paddingBottom: 10
    },
    Description1: {
        width: '60%',
        padding: 10
    },
    currentstatusblock: {
        flexDirection: 'row',
        width: '95%',
        alignSelf: 'center',
        borderBottomWidth: 1,
    },
    currentstatus: {


        paddingTop: 10,
        paddingBottom: 10
    },
    currentstatusdisplay: {
        marginLeft: 10,
        justifyContent: 'center'
    },
    updatestatusblock: {
        width: '95%',
        alignSelf: 'center',
        borderBottomWidth: 1,
    },
    updatestatus: {
        width: '40%',

        paddingTop: 10,
        paddingBottom: 10
    },
    inputstyle: {
        width: '100%',

    },
    updatestatusbuttonblock: {
        flexDirection: 'row',
        width: '95%',
        alignSelf: 'center',
        borderBottomWidth: 1,
    },
    updatestatusbutton: {
        width: '40%',
        paddingTop: 10,
        paddingBottom: 10
    },
    dropdownbutton: {

        width: '60%'
    },
    Remainderblock: {
        height: 50,
        alignItems: 'center',
        marginTop: 10,


    },
    remainderbutton: {
        height: 30,
        borderWidth: 0.1,
        elevation: 15,
        borderRadius: 15,
        shadowColor: appcolors.black,
        alignItems: 'center',
        width: '95%',
        justifyContent: 'center',
        backgroundColor: appcolor.primary,

    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",

    },
    modalView: {
        width: '95%',
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,

    },
    button: {

        padding: 10,
        elevation: 2,
        borderWidth: 1
    },
    cancelbutton: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    buttonOpen: {
        backgroundColor: "#F194FF",
    },


    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    },
    remainderinfo: {
        marginTop: 10
    },
    InputStyle: {
        marginTop: 10
    },
    modalremainderbutton: {

        flexDirection: 'row',
        height: 40,
        width: '95%',
        marginTop: 10,
        justifyContent: 'space-between',
        borderRadius: 10,
    },
    modalcancelbutton: {
        width: '45%',
        height: '100%',
        backgroundColor: appcolor.red,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10
    },
    modalokbutton: {
        width: '45%',
        height: '100%',
        backgroundColor: appcolor.primary,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10

    },
    sceduleblock: {

        flexDirection: 'row',
        width: '95%',
        marginTop: 10,

    },
    datebutton: {
        width: '45%',

        height: 40,
        backgroundColor: appcolor.primary,

        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
    },
    timeblock: {
        borderWidth: 1,
        height: 40,
        width: '50%',
        backgroundColor: appcolor.primary
    },
    updatehistoryblock: {

    },
    header: {
        borderWidth: 0.1,
        elevation: 2,
        width: '100%',
        height: '5%',


    },



})
const mapStateToProps = state => {
    return {
        uid: getuidSelector(state)
    }
}


export default connect(mapStateToProps)(TicketDetails)