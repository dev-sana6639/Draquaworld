import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, Image, TouchableOpacity } from 'react-native';
import { MyText } from '../../components/Text/text';
import {connect} from 'react-redux';
import * as appstring from '../../utils/AppStrings'
import * as appcolor from '../../utils/colors'
const { width, height } = Dimensions.get('window');

import FontAwesome from 'react-native-vector-icons/FontAwesome'
class StockDetails extends Component {


   

    render() {
        const {
            id,
            name,
            description,
            price,
            url

        } = this.props.item.item;

      

        return (
            <View style={styles.container}>

                <TouchableOpacity>
                    <View style={styles.info}>
                        <View style={styles.imagecontainer}>
                            <Image
                                style={styles.imagestyle}
                                source={{ uri: url }}
                            />
                        </View>

                        <View style={styles.infocontainer}>

                            <View style={styles.nameblock}>
                                <MyText
                                    title={name}
                                    h4
                                />
                            </View>

                            <View style={styles.descriptionblock}>
                                {/*  <MyText
                                    title={description.slice(0,30) +"..."}
                                    h6
                                />*/}

                                <MyText
                                    title={description}
                                    h6
                                />
                            </View>

                            <View style={styles.priceblock}>
                            
                                <FontAwesome name='rupee' color="black" size={15} />

                                <View style={styles.price}>
                                    <MyText
                                        title={price}
                                    />
                                </View>
                            </View>
                        </View>

                    </View>
                </TouchableOpacity>

                

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        
    },
    info: {
        flexDirection: 'row',
        padding: 10,
       
        height:150
    },
    imagestyle: {
        height: 100,
        width: 100,
    },
    imagecontainer: {
       
        width: '40%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    infocontainer: {
        width: '60%',
        
         paddingLeft:10,
        justifyContent:'center',
        
    },
    nameblock: {

        padding: 2,
        
        
    },
    descriptionblock: {
        
        
        

    },
    priceblock: {
        flexDirection: 'row',
       
        
       
      
      
    },
    price: {
        justifyContent: 'center',
        marginLeft: 5,

    },
   

})

const mapStateToProps = state => {
    return{

    }
}
export default connect(mapStateToProps)(StockDetails)