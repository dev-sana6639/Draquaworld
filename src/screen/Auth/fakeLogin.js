import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, ScrollView, TouchableOpacity } from 'react-native';
import LoginWavy from './LoginWavy'
import { connect } from 'react-redux';
import Input from '../../containers/input/Input';
import MyButton from '../../components/button/Button'
import Headers from '../../components/Header/Header'
import { MyText } from '../../components/Text/text'
import * as appstring from '../../utils/AppStrings';
import * as appcolor from '../../utils/colors';
import { authStack } from '../../config/navigator'
import { authSelector } from '../../modules/auth/selectors';
import { signin } from '../../modules/auth/actions'
import InputPhone from '../../components/inputphone/InputPhone';

class LoginScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // email: '',
            // password: '',
            // emailError: '',
            // passwordError: '',
            // Email: '',
            // Password: '',
            number: '',

        }
    }

    handlelogin = () => {
        const {number, email, password, emailError, emptyEmail } = this.state;
         console.log('phone number is ')
         console.log(number)



        // if (!email == '') {
        //     if (!password == '') {
        //         this.validate(email);
        //         this.validatepass(password)

        //         if (this.state.Password) {
        //             const Email = this.state.Email;
        //             const Password = this.state.Password;

        //             this.props.dispatch(signin(Email, Password))

        //         }
        //         //    console.log(this.state.Email)



        //     } else {
        //         console.log('blah')
        //         this.setState({ passwordError: '* Enter password' })
        //     }

        // } else {
        //     this.setState({ emailError: '* Enter email' })
        // }

    }






    // if () {
    //     this.setState({ passwordError: 'please enter the password' })
    // }
    // // console.log('my email is ' + Email)

    // else {

    //     const Password = this.validatepass(password);

    // }





    // validatepass = (value) => {
    //     const { passwordError, emptyPassword } = this.state;
    //     if (value.length < 8) {
    //         this.setState({ passwordError: '* password should be more than 8 charecters' })
    //     }
    //     else {
    //         this.setState({ Password: value });
    //         this.setState({ passwordError: '' })
    //     }


    // }

    // validate = (text) => {
    //     // console.log(text);
    //     const { emailError } = this.state;
    //     let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    //     if (reg.test(text) === false) {
    //         this.setState({ emailError: '* invalid Email' })

    //         return false;
    //     }
    //     else {
    //         this.setState({ Email: text })
    //         this.setState({ emailError: '' })
    //         this.setState({ emptyEmail: '' })

    //     }
    // }


    render() {

        const {number, email, password, navigation, emailError, emptyEmail, emptyPassword, passwordError } = this.state;

        return (



            <ScrollView contentContainerStyle={{ flexGrow: 1 }} >


                <View style={styles.container}>
                    <LoginWavy customStyles={styles.svgCurve} />

                    <View style={styles.welcomecontainer}>

                        <MyText
                            title={appstring.signin1}
                            h2
                            bold
                            color={appcolor.white}
                        />

                    </View>

                    <View style={styles.insidecontainer}>
                        <View style={styles.inputcontainer}>
                            <Text style={{ alignSelf: 'flex-start', marginLeft: 10 }}>
                                {emailError && (
                                    <MyText
                                        title={emailError}
                                        color={appcolor.error}
                                    />
                                )
                                }
                            </Text>
                            <InputPhone

                                defaultValue={number}
                                defaultCode="IN"
                                layout="first"
                                onChangeText={(value) => {this.setState({number : value}) }}
                                // onChangeFormattedText={(text) => {
                                //     setFormattedValue(text);
                                // }}
                               
                                withShadow
                                autoFocus
                                containerStyle={styles.inputcontainerstyle}
                                textContainerStyle = {styles.inputtextContainerStyle}
                                textInputStyle = {styles.textInputStyle}

                            />
                            {/* <Input

                                value={this.state.number}
                                placeholder={appstring.enternumber}
                                onChangeText={value => this.setState({ number: value })}
                                width={'95%'}
                                height={55}
                                color={appcolor.white}
                                backgroundColor={appcolor.light_primary}
                                borderRadius={5}
                                placeholderTextColor={appcolor.white}
                                selectionColor={appcolor.white}
                                keyboardType="numeric"

                            /> */}



                        </View>

                        {/* <View style={styles.inputcontainer}>

                            <Text style={{ alignSelf: 'flex-start', marginLeft: 10 }}>
                                {passwordError && (
                                    <MyText
                                        title={passwordError}
                                        color={appcolor.error}
                                    />
                                )

                                }
                            </Text>

                            <Input
                                placeholder={appstring.passwordholder}
                                value={this.state.password}
                                onChangeText={value => this.setState({ password: value })}
                                color={appcolor.white}
                                autoCorrect={false}
                                width={'95%'}
                                height={55}
                                secureTextEntry
                                borderRadius={5}
                                backgroundColor={'#7595c7'}
                                placeholderTextColor={appcolor.white}
                                selectionColor={appcolor.white}
                            />



                        </View> */}


                        <View style={styles.loginbtn}>
                            <TouchableOpacity onPress={this.handlelogin}>
                                <MyButton
                                    title={appstring.signin}
                                    bold

                                    width={'25%'}
                                    alignself={'center'}
                                    radius={5}
                                    backgroundColor={appcolor.white}
                                    onPress={this.handlelogin}
                                    color={appcolor.black}
                                />
                            </TouchableOpacity>
                        </View>

                        <View style={styles.forgotpwdcontainer}>
                            <TouchableOpacity onPress={() => this.props.navigation.navigate(authStack.forgot)}>

                                <MyText style={styles.forgotText} title={'Forgot Password?'} />
                            </TouchableOpacity>


                        </View>



                    </View>
                </View>



            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
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
        marginTop: '3%'
    },
    welcomecontainer: {
        alignItems: 'center',
        marginTop: '12%'
    },
    insidecontainer: {
        marginTop: '18%'
    },
    inputcontainer: {
        width: '95%',
        marginTop: '5%',
        alignSelf: 'center',
        alignItems: 'center',
        borderRadius: 10,

    },
    forgotpwdcontainer: {
        marginTop: '5%',

        alignItems: 'center',
        width: '95%',

    },
    inputcontainerstyle:{
        borderWidth:1,
        height:50,
        borderRadius:10,
        color:'black'
    },
    inputtextContainerStyle:{
      color:'red'
    },
    textInputStyle:{
      
    },


    // form style




});

const mapStateToProps = state => {

    return {
        auth: authSelector(state),
    }
}
export default connect(mapStateToProps)(LoginScreen);