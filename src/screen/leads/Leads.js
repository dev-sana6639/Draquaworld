import React, { Component } from 'react';
import { View, Text, FlatList, StyleSheet,ActivityIndicator, Dimensions, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import Headers from '../../components/Header/Header';
import ListScreen from '../List/ListScreen';
import { mainstack } from '../../config/navigator'
import { MyText } from '../../components/Text/text';
import * as appcolor from '../../utils/colors'
import * as appstring from '../../utils/AppStrings';
import MyButton from '../../components/button/Button';
import { LeadSelector } from '../../modules/lead/selectors';
import NavigationService from '../../utils/navigation';
import {getLeadService} from '../../modules/lead/services';
import Leadlist from '../Detail/Leadlist';

class LeadScreen extends Component {

    constructor(props) {
        super(props);
        this.state={
            leads: [],
            loading: false
        }
    }

    fetchLeads = async () => {
        const leaddata = await getLeadService();
        this.setState({leads: leaddata})
        this.setState({loading:false})
    }

    componentDidMount(){
        this.setState({loading: true})
        this.fetchLeads()
    }


    renderItem = ({ item }) =>
    
     (
        <View style={styles.maincontainer}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate(mainstack.Detail, item )}>
                <Leadlist item={item} />


                <View style={{ height: 50, backgroundColor: appcolor.primary, justifyContent: 'center', alignItems: 'center' }}>
                    <MyText
                        title={appstring.grab}

                        width={'100%'}
                        color={appcolor.white}

                    />
                </View>



            </TouchableOpacity>
        </View>
    );
   
     
    render() {
       
       const Leads = this.state.leads;
      

        return (
            <View style={styles.container}>
               

                <View style={styles.header}>

                    <Headers
                        leftComponent={{

                            icon: 'arrowleft',
                            text: 'Leads',
                            bold: 'bold',
                            color: 'white',

                        }}
                        backgroundColor={appcolor.primary}
                        navigation={this.props.navigation}



                    />

                </View>

                { 
                this.state.loading ? (
                    <View style={{height:'100%',width:'100%',justifyContent:'center',alignItems:'center'}}>
                    <ActivityIndicator size="large" color={appcolor.secondary} />
                    </View>
                ) :
            

                <View style={styles.list}>
                    <FlatList
                        data={Leads}
                        renderItem={this.renderItem}
                        // keyExtractor={item => item.id}
                        showsVerticalScrollIndicator={false}
                        showsHorizontalScrollIndicator={false}
                    />
                </View>
    }
    
   
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',

    },
    header: {
        borderWidth:0.1,
        elevation:2,
        width: '100%',
        height:'5%',
        
       
        
    },
    list: {
        height:'90%',
        marginTop: 5,
        marginBottom:10,
        width: '95%',
        alignSelf: 'center',

    },
    maincontainer: {

        width: '100%',
        borderWidth: 0.1,
        elevation: 2,
        marginBottom: 10,

    },
    grabticket: {


    }
})

const mapStateToProps = state => {

    return {
        // leads: LeadSelector(state)
    }
}
export default connect(mapStateToProps)(LeadScreen)