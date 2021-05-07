 import React, { Component } from 'react'
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';

import { connect } from 'react-redux'
import { isLoginSelector,getuserSelector } from '../../modules/auth/selectors';
// import leftcomponent from '../../components/Header/leftcomponent'
import * as appcolor from '../../utils/colors';
import MyButton from '../button/Button';
import { MyText } from '../Text/text';
import { mainstack, rootSwitch } from '../../config/navigator';
import NavigationService from '../../utils/navigation';
import ModalDropdown from 'react-native-modal-dropdown';
import {logout} from '../../modules/auth/actions';
import * as appstrings from '../../utils/AppStrings'

class Headers extends Component {

    handlelogout = () => {
        this.props.dispatch(logout())

    }
     
    goback = () => {
        const { navigation } = this.props;
       
        navigation.goBack(null);
        // console.log(this.props)
    }

    render() {
        const {
            leftComponent,

            rightComponent,
            user,
            height,
            justifyContent,
            alignItems,
            goback,
            backgroundColor,
        } = this.props;
 
 

        return (
            <View style={[
                styles.container,
                backgroundColor && {backgroundColor:backgroundColor }
                ]}>

                {

                    leftComponent && (
                        <View style={[
                            styles.leftComponent,
                            height && {height: height},
                           

                           
                        ]}>
                            <View style={{ flexDirection: 'row',justifyContent:'center',alignItems:'center' }}>
                                <View> 
                                    <TouchableOpacity onPress={this.goback}>
                                    <AntDesign name={leftComponent.icon} size={20} color={'black'} />
                                     </TouchableOpacity>
                                    </View>
                                
                                
                                <MyText
                                    h3
                                    bold
                                    color={leftComponent.color}
                                    style={[
                                        styles.leftComponenttext
                                    ]}

                                    title={leftComponent.text}
                                />
                                
                            </View>
                        </View>
                    )
                }

                {
                    rightComponent && (
                        <View style={[
                            styles.rightComponent,
                            height && {height: height},
                           
                        
                        ]}>
                            <View style={styles.buttonblock}>
                                { 
                                 this.props.user == null ? 
                                 null
                                : 
                                (<View><Text style={{color: appcolor.white}}> <Text style={{fontWeight:'bold',color:appcolor.white}}>Hi!</Text> {this.props.user}</Text></View> )
                                }
                            </View>
                            { rightComponent.Icon && (
                                <View style={styles.iconblock}>
                                    <TouchableOpacity>
                                        <MyButton 
                                          title={rightComponent.text}
                                          backgroundColor={appcolor.secondary}
                                          radius={5}
                                          onPress={this.handlelogout}
                                          color={appcolor.black}
                                          size={'sm'}
                                          
                                        />
                                    </TouchableOpacity>
                                    {/* <FontAwesome name={rightComponent.Icon} size={35} color='#419AC6' /> */}

                                </View>
                            )
                            }
                        </View>
                    )
                }
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
       
        backgroundColor: appcolor.white,
        flexDirection: 'row',
        justifyContent: 'space-between',

    },
    leftComponent: {
         justifyContent:'flex-end',
         paddingBottom:10,
        marginLeft: '5%',
     

    },
    leftComponenttext: {
        marginLeft: 10,

    },
    iconstyle: {

        justifyContent: 'center',
        alignItems: 'center'
    },
    logoutbtn: {
      borderWidth:0.1,
     
      padding:10,
      elevation:3,
      backgroundColor: appcolor.primary,

    }, 

    rightComponent: {
        width: '100%',
      
        justifyContent: 'flex-end',
        alignItems: 'center',
        flexDirection: 'row'

    },
    centerComponent: {
        justifyContent: 'center'
    },
    buttonblock: {
        marginRight: 10,
      
        height:'100%',
        justifyContent:'flex-end',
        paddingBottom:2

        
    },
    iconblock: {
        marginRight:10,
        flexDirection:'row',
        
        height:'100%',
        
        alignItems:'flex-end',
        paddingBottom:2,
        

    }
})

const mapStateToProps = state => {

    return {
        user: getuserSelector(state),
    }
}

const mapDispatchToProps = dispatch => {
    return {
        logout: () => {dispatch(logout())},
    }
}
export default connect(mapStateToProps)(Headers);
