import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList, ActivityIndicator,TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import Headers from '../../components/Header/Header';
import { GetticketSelector } from '../../modules/tickets/selectors'
import ProductScreen from '../List/ListScreen';
import { mainstack } from '../../config/navigator'
import MyButton from '../../components/button/Button';
import * as appcolor from '../../utils/colors'
import * as appstring from '../../utils/AppStrings';
import NavigationService from '../../utils/navigation'

import { MyText } from '../../components/Text/text';
import ListScreen from '../List/ListScreen';
import {getTicketsService} from '../../modules/tickets/services'
import { getuidSelector} from '../../modules/auth/selectors'
class TicketScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Ticket: [],
            loading: false,
        }
    }
    fetchTickets =async () =>{
        const uid = this.props.uid;
       const tickets = await getTicketsService(uid);
 
  
       this.setState({Ticket: tickets})
       this.setState({loading: false})
    }
     componentDidMount(){
         this.setState({loading: true})
         this.fetchTickets()
     }

    renderItem = ({ item }) =>
     (<View style={styles.maincontainer}>
        <TouchableOpacity onPress={() => this.props.navigation.navigate(mainstack.ticketScreen,{item})} >
            <ListScreen item={item} />

        </TouchableOpacity>


    </View>
    )

    render() {
     


        return (
            <>
                <View style={styles.header}>

                    <Headers
                        leftComponent={{

                            icon: 'arrowleft',
                            text: 'Tickets',
                            bold: 'bold',
                            color: 'white',

                        }}
                        backgroundColor={appcolor.primary}
                        navigation={this.props.navigation}



                    />

                </View>

                { this.state.loading ? (
                    <View style={{height:'100%',width:'100%',justifyContent:'center',alignItems:'center'}}>
                    <ActivityIndicator size="large" color={appcolor.secondary} />
                    </View>
                ):
                
                this.state.Ticket.length != 0 ?
                   
                    (
                        <View style={styles.container}>


                            < View style={styles.listView}>
                                <FlatList
                                    data={this.state.Ticket}
                                    renderItem={this.renderItem}
                                    keyExtractor={item => item.id}
                                    showsVerticalScrollIndicator={false}
                                    showsHorizontalScrollIndicator={false}
                                />

                            </View>
                        </View >



                    )
                    :
                    (
                        <View style={styles.EmptyTicket}>
                            <TouchableOpacity onPress={() => NavigationService.navigate(mainstack.lead)} style={styles.button}>
                                <MyText
                                    title={appstring.emptytickets}
                                    width={'50%'}
                                    backgroundColor={appcolor.primary}
                                    bold
                                    h5

                                />
                            </TouchableOpacity>
                        </View>
                    )
                }
            </>

        )
    }
}

const styles = StyleSheet.create({
    container: {

        height: '100%',
        width: '100%',
        backgroundColor: appcolor.white


    },
    maincontainer: {

        elevation: 5,
        borderColor: appcolor.greytext,
        marginTop:5,
        marginBottom: 5,
        backgroundColor: appcolor.grey,
        borderRadius:10

    },
   
    listView: {
        height:'90%',
        width: '90%',
        backgroundColor: appcolor.white,

        alignSelf: 'center'
    },
    EmptyTicket: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',

    },
    header: {
        borderWidth:0.1,
        elevation:2,
        width: '100%',
        height:'5%',
       
        
    },
    button: {
       
        borderRadius: 10,
        padding: 10,
        backgroundColor: appcolor.secondary,
        elevation: 20

    }
})
const mapStateToProps = state => {
    return {
        // tickets: GetticketSelector(data)
        uid: getuidSelector(state)
    }
}
export default connect(mapStateToProps)(TicketScreen)