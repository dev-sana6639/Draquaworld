import React from 'react';
import { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import InputCode from '../../components/otp/InputCode';
import Headers from '../../components/Header/Header';
import appcolors from '../../utils/colors'
import { MyText } from '../../components/Text/text';

class OtpVerifyScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            code: '',
        }


    }

    handleVerify = () => {
        const otp = this.state;
        console.log("otp is", otp)
    }

    verifyOtp = async otp => {

        this.setState({ code: otp })
        console.log('otp is:', otp)

        // try {
        //   this.setState({loading: true});

        //   // validate firebase auth
        //   const {handleVerify} = this.props;
        //   const {confirmation} = this.state;

        //   await confirmation.confirm(otp);
        //   this.setState({loading: false}, () => handleVerify(true));
        // } catch (e) {
        //   this.setState({loading: false});
        //   showMessage({
        //     message: e.message,
        //     type: 'danger',
        //     duration: 3000,
        //   });
        // }
    };

    render() {



        return (
            <View style={styles.container}>
                <View style={styles.header}>

                    <Headers
                        leftComponent={{

                            icon: 'arrowleft',
                            text: 'OTP Verification',
                            bold: 'bold',
                            color: 'white',

                        }}
                        backgroundColor={'#597fbc'}
                        navigation={this.props.navigation}



                    />

                </View>
                
                    <View style={styles.body}>


                        <View style={styles.otpsentblock}>
                            <Text style={styles.otpsenttext}>OTP sent to customer's mobile number</Text>
                        </View>

                        <View style={styles.otpblock}>
                            <InputCode
                                containerStyle={styles.input}
                                onCodeChange={value => this.setState({ code: value })}
                                onFulfill={otp => this.verifyOtp(otp)}
                            // editable={!loadingResend}
                            />








                        </View>

                        <View style={styles.verifybuttonblock}>
                            <TouchableOpacity style={styles.Verifybutton} onPress={this.handleVerify}>
                                <MyText
                                    title={'Verify'}
                                    bold
                                    h5
                                    color={'#ffffff'}
                                />
                            </TouchableOpacity>

                        </View>

                    </View>
                


            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
    },
    body: {
        marginTop: 10,
        width: '95%',
        height: '90%',

        alignSelf: 'center',

    },
    verifybuttonblock: {
        marginTop: '50%',
        width: '100%',

    },
    Verifybutton: {
        padding: 10,
        borderRadius: 10,

        backgroundColor: '#597fbc',

        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',

    },
    otpsenttext: {
        fontSize: 15,
        color: "#888888"

    },
    otpsentblock: {

        width: '95%',
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '25%'

    },
    otpblock: {

        width: '95%',
        alignSelf: 'center',
        marginTop: '20%'

    },
    header: {
        borderWidth: 0.1,
        elevation: 2,
        width: '100%',
        height: '6%',


    },

})
export default OtpVerifyScreen