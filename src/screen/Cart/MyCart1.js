import React, { Component } from 'react';
import { View, Text, StyleSheet, Image,Dimensions, TouchableOpacity } from 'react-native';
import { MyText } from '../../components/Text/text';
import { connect} from 'react-redux';
import Icon from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { removeFromCart, addQuantity, subtractQuantity } from '../../modules/cart/actions';
import * as appcolor from '../../utils/colors';
import { showMessage } from "react-native-flash-message";

import * as appstrings from '../../utils/AppStrings';


const { height, width } = Dimensions.get('window');

class Cart extends Component {

    handleAddQuantity = (id) => {
  
          
        this.props.dispatch(addQuantity(id));
      }

    handleSubtractQuantity = (id) => {
        if(this.props.item.quantity > 1){
        this.props.dispatch(subtractQuantity(id));
        } else {
            this.props.dispatch(removeFromCart(id))
        }
    }
    handleremoveitem = (id) => {
        try{
         this.props.dispatch(removeFromCart(id))
         showMessage({
            statusBarHeight:10,
                  message:`" ${this.props.item.name}"` + ' is removed from cart',
                  type: "info",
                  icon: "success",
                  backgroundColor: appcolor.notificationcolor, // background color
                  color: appcolor.white, // text color
                });
        } catch(e){

            showMessage({
                statusBarHeight:10,
                      message:"Error while ramoving"+ `" ${this.props.item.name}"` + 'from cart',
                      type: "info",
                      icon: "success",
                      backgroundColor: appcolor.notificationcolor, // background color
                      color: appcolor.white, // text color
                    });
        }
    }

    render() {

        // const {} =this.props.item
        const {
            id,
            description,
            name,
            price,
            url,
            quantity

        } = this.props.item;
        
 
        return (
            <View style={styles.container}>
                <View style={styles.Imagecontainer}>
                    <Image source={{ uri: url }} style={styles.image} />
                </View>
                <View style={styles.infocontainer}>
                    <View style={styles.namecontainer}>
                        <MyText
                            title={name}
                            h5
                        />
                    </View>
                    <View style={styles.pricecontainer}>


                        <View style={styles.quantityblock}>

                            <TouchableOpacity onPress={() => { this.handleSubtractQuantity(id) }} style={{ borderWidth: 1, borderTopLeftRadius: 3, borderBottomLeftRadius: 3, borderColor: '#B4B6B4', width: 30, justifyContent: 'center', alignItems: 'center' }}><Icon name="minus" color="#B4B6B4" size={15} /></TouchableOpacity>
                            <View style={{ borderColor: '#B4B6B4', borderTopWidth: 1, borderBottomWidth: 1, width: 30, justifyContent: 'center', alignItems: 'center' }}><Text>{quantity}</Text></View>

                            <TouchableOpacity onPress={() => { this.handleAddQuantity(id) }} style={{ borderWidth: 1, borderTopRightRadius: 3, borderBottomEndRadius: 3, borderColor: '#B4B6B4', width: 30, justifyContent: 'center', alignItems: 'center' }}><Icon name="plus" color="#B4B6B4" size={15} /></TouchableOpacity>


                        </View>

                        
                            <TouchableOpacity style={styles.deleteicon} onPress={() =>this.handleremoveitem(id)}>
                                <MaterialCommunityIcons name={'delete'} size={20} color={'red'} />
                            </TouchableOpacity>
                    

                        <View style={styles.priceblock}>
                            <FontAwesome name='rupee' color="black" size={15} />
                            <MyText
                                title={price}
                            />
                        </View>


                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
       
        
        
         justifyContent:'center',
         alignItems:'center'
        
        

    },
    Imagecontainer: {

        width: '40%',
        height: 100,
      
        justifyContent:'center',
        alignItems:'center',
        
        alignItems: 'center',

    },
    image: {
        height: 90,
        width: 100,
        padding:10,
        borderRadius:10,
    },
    infocontainer: {
        
        width: '55%',
        marginLeft:'5%'

    },
    namecontainer: {

    },
    pricecontainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems:'center',
        marginTop:'5%',
        width: '100%',
        alignItems: 'center'
    },
    priceblock: {
        height: 30,
       marginRight:15,

        alignSelf: 'flex-end',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'

    },
    quantityblock: {
        flexDirection: 'row',
     
       
        height: 30,
      
      
    },
    deleteicon:{
        
    },
    footer: {
        height: '50%'
      },
     
      checkout: {
        width: '100%',
        
        flexDirection: 'row'
      },
      billdet: {
        marginTop: 15,
    
        alignSelf: 'center',
        width: '90%'
      },
      
      center: {
        backgroundColor: '#E4E7E4',
    
        height: height,
        
    
      },
      checkout: {
        width: '100%',
        
        flexDirection: 'row'
      },

})

const mapDispatchToProps = (dispatch) => {
    return {
        addQuantity: (id) => { dispatch(addQuantity(id))},
        subtractQuantity: (id) => { dispatch(subtractQuantity(id))},
        removeFromCart: (id) => { dispatch(removeFromCart(id))},

    }
}
export default connect(mapDispatchToProps)(Cart)