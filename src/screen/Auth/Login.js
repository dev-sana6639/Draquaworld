import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, ScrollView, ActivityIndicator,TouchableOpacity } from 'react-native';
import LoginWavy from './LoginWavy'
import { connect } from 'react-redux';
import Input from '../../containers/input/Input';

import { MyText } from '../../components/Text/text'
import * as appstring from '../../utils/AppStrings';
import * as appcolor from '../../utils/colors';
import { authStack, mainstack } from '../../config/navigator'
import { authSelector,invalideEmailandpassword } from '../../modules/auth/selectors';
import { signin,changeinvalidError } from '../../modules/auth/actions'

import {LoginService} from '../../modules/auth/services';


class LoginScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            emailError: '',
            passwordError: '',
            Email: '',
            Password: '',
            invalidecred: '',
            loading: 'false'
            

        }
    }

     

    handlelogin = async () => {
        const {number, email, password, emailError, emptyEmail } = this.state;
       
        // if(this.props.loginError == 'Invalid'){
        //     this.props.dispatch(changeinvalidError())
        // }
       
       


        if (!email == '') {
            if (!password == '') {
                this.validate(email);
                this.validatepass(password)

                if (this.state.Password) {
                    this.setState({loading: true})
                    const Email = this.state.Email;
                    const Password = this.state.Password;
                     
                    
                      try{ 
                       const user = await LoginService({Email,Password})
                       console.log('det is:',user)
                        if(user){
                            this.setState({loading: false})
                            this.props.dispatch(signin(user))
                           console.log('agaim success')

                        }
                    console.log('logged in succesfully')
                      }catch(e){
                          console.log('invalide')
                          this.setState({loading: false})
                          this.setState({invalidecred: 'Invalide Credential'})
                      }
                    // }catch(e){
                    //     console.log('wronge email and password')
                    // }

                }
                //    console.log(this.state.Email)



            } else {
                console.log('blah')
                this.setState({ passwordError: '* Enter password' })
            }

        } else {
            this.setState({ emailError: '* Enter email' })
        }

    }






    // if () {
    //     this.setState({ passwordError: 'please enter the password' })
    // }
    // // console.log('my email is ' + Email)

    // else {

    //     const Password = this.validatepass(password);

    // }





    validatepass = (value) => {
        const { passwordError, emptyPassword } = this.state;
        if (value.length < 8) {
            this.setState({ passwordError: '* password should be more than 8 charecters' })
        }
        else {
            this.setState({ Password: value });
            this.setState({ passwordError: '' })
        }


    }

    validate = (text) => {
        // console.log(text);
        const { emailError } = this.state;
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (reg.test(text) === false) {
            this.setState({ emailError: '* invalid Email' })

            return false;
        }
        else {
            this.setState({ Email: text })
            this.setState({ emailError: '' })
            this.setState({ emptyEmail: '' })

        }
    }


    render() {

        const {number, email, password, navigation, emailError, emptyEmail, emptyPassword, passwordError } = this.state;
         
       
      
    //    if(this.props.loginError == 'Invalid'){
        
    //     console.log('set time out')
    //    }else{
    //        console.log('error is',this.props.loginError)
    //    }
      
    
    
      
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
                            {
                               !this.state.invalidecred == '' ? (
                                    <MyText title={this.state.invalidecred} color={appcolor.error} h3/>
                                ) : null
                            }
                            <Text style={{ alignSelf: 'flex-start', marginLeft: 10 }}>
                                {emailError && (
                                    <MyText
                                        title={emailError}
                                        color={appcolor.error}
                                    />
                                )
                                }
                            </Text>
                            
                            <Input

                                value={this.state.email}
                                placeholder={appstring.emailname}
                                onChangeText={value => this.setState({ email: value })}
                                width={'95%'}
                                height={55}
                                color={appcolor.white}
                                backgroundColor={appcolor.light_primary}
                                borderRadius={5}
                                placeholderTextColor={appcolor.white}
                                selectionColor={appcolor.white}
                               

                            />



                        </View>

                        <View style={styles.inputcontainer}>

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



                        </View>


                        <View style={styles.loginbtn}>
                            <TouchableOpacity onPress={this.handlelogin}>
                             { this.state.loading == true ?
                             ( <View style={{marginTop:'20%',elevation:3,height:40,width:100,justifyContent:'center',alignItems:'center',alignSelf:'center',borderRadius:10,backgroundColor:appcolor.white}}>
                                 <ActivityIndicator size="small" color={appcolor.red} />
                                 </View>
                             )
                                :
                           
                            <View style={{marginTop:'20%',elevation:3,height:40,width:100,justifyContent:'center',alignItems:'center',alignSelf:'center',borderRadius:10,backgroundColor:appcolor.white}}>
                            <Text style={{fontWeight:'bold'}}>
                                {appstring.signin}
                            </Text>
                            </View>

                             }
                            </TouchableOpacity>
                        </View>

                        {/* <View style={styles.forgotpwdcontainer}>
                            <TouchableOpacity onPress={() => this.props.navigation.navigate(authStack.forgot)}>

                                <MyText style={styles.forgotText} title={'Forgot Password?'} />
                            </TouchableOpacity>


                        </View> */}



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
    loadingbutton:{
        height:45,
        width:100,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:appcolor.white,
        borderRadius:10,
        alignSelf:'center'
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
        loginError: invalideEmailandpassword(state),
    }
}
export default connect(mapStateToProps)(LoginScreen);