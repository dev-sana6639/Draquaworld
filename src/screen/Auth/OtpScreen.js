import React, { useEffect, useState, useContext, useRef } from 'react';
import { View, Text, StyleSheet, Dimensions, ScrollView, TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';
import LoginWavy from './LoginWavy'
import { connect } from 'react-redux';
import Input from '../../containers/input/Input';
import MyButton from '../../components/button/Button'
import Headers from '../../components/Header/Header'
import { MyText } from '../../components/Text/text'
import * as appstring from '../../utils/AppStrings';
import * as appcolor from '../../utils/colors';
import { authStack, mainstack } from '../../config/navigator'
import NavigationService from '../../utils/navigation'

import { authSelector, getconfirm } from '../../modules/auth/selectors';
import { confirmSuccess,Signinsuccess } from '../../modules/auth/actions'
import AntDesign from 'react-native-vector-icons/AntDesign'
import CustomOtp from '../../components/otp/otp'

const OtpScreen = (props) => {
    const [code, setCode] = useState('');
    const otpinput = useRef(otpinput);

    const dispatch = useDispatch();

    function onAuthStateChanged(user) {
       
       console.log('what is user?')
      dispatch(Signinsuccess(user))
      props.navigation.navigate(mainstack.home)
     
      
      }

    const getuser = () =>{
        auth().onAuthStateChanged(onAuthStateChanged)
    }

    const handlelogin = async () => {
        if (!code == '') {
            
            
            try {
            

           await props.route.params.confirm(code);
           getuser()

            }
            catch (e) {
                console.log('Invalide code');
            }

        }




    }

    const checkcode = ({ isValid, code }) => {
        if (isValid) {
            console.log('valid')
            setCode(code)
        } else {
            console.log('valide')
        }

    }
 
    

    return (
       <ScrollView contentContainerStyle={{ flexGrow: 1 }} >


            <View style={styles.container}>
                <LoginWavy customStyles={styles.svgCurve} />

                <View style={styles.welcomecontainer}>

                    <MyText
                        title={appstring.enterotp}
                        h2
                        bold
                        color={appcolor.white}
                    />

                </View>

                <View style={styles.insidecontainer}>

                    <View style={styles.headline}>
                        <MyText
                            title={appstring.enteryourotp}
                            h4
                            color={appcolor.white}

                        />
                    </View>

                    <View style={styles.inputcontainer}>
                        {/* <Text style={{ alignSelf: 'flex-start', marginLeft: 10 }}>
                                {emailError && (
                                    <MyText
                                        title={emailError}
                                        color={appcolor.error}
                                    />
                                )
                                }
                            </Text> */}
                        <CustomOtp
                            style={styles.customOtpinput}
                            ref={otpinput}
                            keyboardType="numeric"
                            codeLength={6}
                            className='border-circle'

                            autoFocus={true}
                            codeInputStyle={styles.codeInputStyle}
                            onFulfill={(code) => { setCode(code) }}
                            // onCodeChange={ (value) =>{setCode(value)}}
                            size={35}
                            activeColor={'#EAF2F8'}
                            inactiveColor={appcolor.black}
                            containerStyle={styles.containerStyle}


                        />


                    </View>






                    <View style={styles.loginbtn}>
                        <TouchableOpacity onPress={() => handlelogin()} style={{ flexDirection: 'row' }}>
                            <View style={{ width: '50%', paddingLeft: '5%', justifyContent: 'center' }}>
                                <MyText
                                    title={'NEXT'}
                                    h4
                                    color={appcolor.white}
                                />
                            </View>

                            <View style={{ width: '50%', paddingRight: '5%', justifyContent: 'center', alignItems: 'flex-end' }}>
                                <AntDesign name={'arrowright'} size={20} color={appcolor.white} />
                            </View>

                        </TouchableOpacity>

                    </View>







                </View>
            </View>



        </ScrollView>
    )
}


const styles = StyleSheet.create({
    containerStyle: {

    },
    codeInputStyle: {
        color: appcolor.black,
        backgroundColor: appcolor.grey,
        fontSize: 15,
    },
    headline: {

        width: '95%',
        marginTop: '5%',
        alignSelf: 'center',
        alignItems: 'center',
        borderRadius: 10,

    },
    nextbutton: {
        elevation: 4,

    },
    borderStyleBase: {
        width: 30,
        height: 45
    },

    borderStyleHighLighted: {
        borderColor: "#03DAC6",
    },

    underlineStyleBase: {
        width: 30,
        height: 45,
        borderWidth: 0,
        borderBottomWidth: 1,
    },

    underlineStyleHighLighted: {
        borderColor: "#03DAC6",
    },

    nextbutton: {
        elevation: 4,

    },
    codeTextStyle: {
        fontSize: 15
    },
    countryPickerButtonStyle: {
        backgroundColor: appcolor.secondary,

        borderRadius: 10
    },
    flagButtonStyle: {


    },
    container: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,

    },
    forgotText: {
        color: appcolor.white,
        marginTop: 10
    },
    svgCurve: {
        position: 'absolute',
        width: Dimensions.get('window').width
    },
    loginbtn: {
        width: '80%',

        alignSelf: 'center',
        flexDirection: 'row',

        backgroundColor: appcolor.secondary,
        height: 45,
        marginTop: '35%'
    },
    welcomecontainer: {
        alignItems: 'center',
        marginTop: '12%'
    },
    insidecontainer: {
        marginTop: '15%',
       

    },
    inputcontainer: {
        width: '95%',

        marginTop: '25%',
        alignSelf: 'center',
        alignItems: 'center',
        borderRadius: 10,

    },
    customOtpinput: {

        height: 40,
    },
    forgotpwdcontainer: {
        marginTop: '5%',

        alignItems: 'center',
        width: '95%',

    },
    inputcontainerstyle: {

        height: 50,
        borderRadius: 10,

    },
    inputtextContainerStyle: {

        height: 50,
        borderRadius: 10
    },
    textInputStyle: {
        height: 45,

        borderRadius: 10,


    },

});

const mapStateToProps = state => {

    return {
       
    }

}
export default connect(mapStateToProps)(OtpScreen);