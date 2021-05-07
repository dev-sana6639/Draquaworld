import React, { Component } from 'react';
import { View, Text, FlatList, StyleSheet, ActivityIndicator,Dimensions, TouchableOpacity, ScrollView } from 'react-native';
import Headers from '../../components/Header/Header';
import Spare from '../../assets/stockphotos/spare.jpg';
import StockDetails from '../stock/StockDetails';
// import {fetchstock} from '../../modules/stock/service';
// import {fetchstock} from '../../modules/stock/actions'
import { connect } from 'react-redux';
import { GetStockSelector } from '../../modules/stock/selectors'
import * as appcolor from '../../utils/colors';
import { fetchstockService } from "../../modules/stock/service"
import {addToCart} from '../../modules/cart/actions'
const { width, height } = Dimensions.get('window');
import { MyText } from '../../components/Text/text';
import { showMessage } from "react-native-flash-message";

import * as appstring from '../../utils/AppStrings'
class StockScreen extends Component {
     
    constructor(props){
        super(props);
        this.state = {
            stockData : [],
            loading: false,
        }
    }

   fetchStockdata = async () => {
      const stockData = await fetchstockService();
     this.setState({stockData: stockData})
     this.setState({loading: false})

    
      
   }
    componentDidMount() {
        this.setState({loading: true})
    this.fetchStockdata()

     }

    // componentDidMount() {
    //    this.props.dispatch(fetchstock())
    // }

    handlecart = ({item}) =>{
      
        this.props.dispatch(addToCart(item))
        
        let name = item.name;  
        showMessage({
         statusBarHeight:3,
               message:`" ${name}"` + ' is added to cart',
               type: "info",
               icon: "success",
               backgroundColor: appcolor.notificationcolor, // background color
               color: appcolor.white, // text color
             });
     }

    renderItem = (item) => (
        <View style={styles.maincontainer}>
            <StockDetails item={item} />

            <TouchableOpacity onPress={ () => this.handlecart(item)} style={styles.addtocartbutton}>
                  
                        <MyText
                            title={appstring.addtocart}
                            color={appcolor.white}
                            h4
                        />
                    
                </TouchableOpacity>
        </View>   
    )
    render() {
        
     
      const stockdata =this.state.stockData

        return (
            <View style={styles.container}>
                <View style={styles.header}>

                    <Headers
                        leftComponent={{

                            icon: 'arrowleft',
                            text: 'Stocks',
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
                ) :

                <View style={styles.stockslist}>
                
                    <FlatList
                        data={stockdata}
                        renderItem={this.renderItem}
                        keyExtractor={(item) => item.id}
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
      height:'100%',
      width:'100%'

    },
   
    stockslist: {
        height:'87%',

        width: '95%',

        alignSelf: 'center',
        marginTop:5

    },
    header: {
        borderWidth:0.1,
        elevation:2,
        width: '100%',
        height:'6%',
       
        
    },
    addtocartbutton: {
        height: 40,
        width: '100%',
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: appcolor.primary,
        borderWidth: 0.1,
        elevation: 5,
        padding: 10
    },
    maincontainer: {

        width: '100%',
        borderWidth: 0.1,
        elevation: 2,
        marginBottom: 10,

    },

})

const mapStateToProps = state => {

    return {
        // stocks: GetStockSelector(state)
    }
}
export default connect(mapStateToProps)(StockScreen)