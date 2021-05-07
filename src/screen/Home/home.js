import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity, Image } from 'react-native';
import Headers from '../../components/Header/Header'
import { connect } from 'react-redux';
import { Icon } from 'react-native-vector-icons/Ions';
import CartIcon from '../../assets/icons/cart1.png'
import TicketIcon from '../../assets/icons/ticket1.png'
import StockIcon from '../../assets/icons/stock2.png'
import PersonIcon from '../../assets/icons/user.png'

import { MyText } from '../../components/Text/text';
import {mainstack } from '../../config/navigator';
import NavigationService from '../../utils/navigation';
import {fetchstock} from '../../modules/stock/actions';
import {fetchLeadBegin} from '../../modules/lead/actions';
import {isLoginSelector} from '../../modules/auth/selectors'
import * as AppStrings from '../../utils/AppStrings';
import * as appcolor from '../../utils/colors';
import { fetchstockService } from "../../modules/stock/service"

const { height, width } = Dimensions.get('window');
class Home extends Component {

    constructor(props){
        super(props);
        this.state = {
            stockData : [],
            loading: false,
        }
    }


    render() {
        const user = this.props.isLogin;
      
       

       
       
        
        return (

            // {
            //    user == null ? (
            //         <View>
                     
            //         </View>

            //     )
            //     : (

                    <View style={styles.container}>
                <View style={styles.header}>

                    <Headers
                        rightComponent={{

                            Icon: 'user',
                            text: 'Log out'
                        }}
                        backgroundColor= {appcolor.primary}

                      
                       
                        
                    />

                </View>

                <View style={styles.bodycontainer}>

                    <View style={styles.row}>


                        <TouchableOpacity style={styles.maincontainer} onPress={() => NavigationService.navigate(mainstack.lead) }>
                            <View style={styles.maincontainerblock}>
                                <View style={styles.imagecontainer}>
                                    <Image source={PersonIcon} style={styles.Imagestyle} />

                                </View>
                                <View style={styles.textcontainer}>
                                    <MyText
                                        title={AppStrings.leads}
                                        bold
                                    />
                                </View>

                            </View>
                        </TouchableOpacity>


                        <TouchableOpacity style={styles.maincontainer} onPress={() => NavigationService.navigate(mainstack.ticket)}>
                            <View style={styles.maincontainerblock}>
                                <View style={styles.imagecontainer}>
                                    <Image source={TicketIcon} style={styles.Imagestyle} />

                                </View>
                                <View style={styles.textcontainer}>
                                    <MyText
                                        title={AppStrings.tickets}
                                        bold
                                    />
                                </View>
                            </View>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.row}>
                        <TouchableOpacity style={styles.maincontainer} onPress={() => NavigationService.navigate(mainstack.stockScreen)}>
                            <View style={styles.maincontainerblock}>
                                <View style={styles.imagecontainer}>
                                    <Image source={StockIcon} style={styles.Imagestyle} />

                                </View>
                                <View style={styles.textcontainer}>
                                    <MyText
                                        title={AppStrings.stocks}
                                        bold
                                    />
                                </View>
                            </View>
                        </TouchableOpacity>


                        <TouchableOpacity style={styles.maincontainer} onPress={ () => NavigationService.navigate(mainstack.cart)}>
                            <View style={styles.maincontainerblock}>
                                <View style={styles.imagecontainer}>
                                    <Image source={CartIcon} style={styles.Imagestyle} />
                                </View>

                                <View style={styles.textcontainer}>
                                    <MyText
                                        title={AppStrings.cart}
                                        bold
                                    />
                                </View>

                            </View>
                        </TouchableOpacity>
                    </View>


                </View>

            </View>

            //     )
            // }
            
        )
    }
}

const styles = StyleSheet.create({
    container: {
       
        height: height,
        width: width
    },
    header: {
        borderWidth:0.1,
        elevation:10,
        width: '100%',
        height: '6%',
       
       
        
    },
    bodycontainer: {
        height: '90%'
    },
    Imagestyle: {
        height: 80,
        width: 80,
        borderRadius:50
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 30
    },
    maincontainer: {
        
        borderWidth: 0.1,
        elevation:3,
        height: 150,
        width: 150,
        justifyContent: 'center',
        alignItems: 'center'
    },
    imagecontainer: {
        borderWidth: 0.1,
        elevation: 5,
        borderRadius:60,
        justifyContent:'center',
        alignItems:'center'
        
    },
    textcontainer: {
        marginTop: 10,
        
        justifyContent: 'center',
        alignItems: 'center'
    }
});

const mapStateToProps = state => {
    
    return {
        isLogin: isLoginSelector(state),
        
    }
}
export default connect(mapStateToProps)(Home)