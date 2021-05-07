import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, Dimensions, TouchableOpacity, FlatList } from 'react-native';
import { connect } from 'react-redux';
import { MyText } from '../../components/Text/text';
import EmptyCart from '../../assets/icons/empty-cart.png';
import { getCartProductSelector, getcarsize, getTotalPrice } from '../../modules/cart/selectors';
import * as appcolor from '../../utils/colors';
import * as appstrings from '../../utils/AppStrings';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Cart from './MyCart1';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import LinearGradient from 'react-native-linear-gradient';
import Headers from '../../components/Header/Header'




const { height, width } = Dimensions.get('window');



class MyCart extends Component {



    CartItem = ({ item }) => (
        // <LinearGradient style={{height:500}} colors={['#DBEBF6','#E6F0F8','#CBE1F1','#BBD6EA']} >
        <Cart item={item} />
        // </LinearGradient>
    )


    render() {

        //   console.log(this.props.CartProducts.product)
        //   console.log(this.props.CartProducts.quantity)
        const carts = this.props.CartProducts

        console.log('cart')
        console.log(this.props)

        return (


            <View>


                { !this.props.TotalPrice > 0 ? (
                    <View style={styles.emptycartcontainer}>
                        <View style={styles.header}>

                            <Headers
                                leftComponent={{

                                    icon: 'arrowleft',
                                    text: 'your Cart',
                                    bold: 'bold',
                                    color: 'white',

                                }}
                                backgroundColor={appcolor.primary}
                                navigation={this.props.navigation}



                            />

                        </View>
                        <View style={styles.emptycartblock}>
                        <Image style={styles.emptycartIcon} source={EmptyCart} />

                        <MyText
                            title={appstrings.emptycart}
                            h3
                            bold
                        />


                    </View>
                    </View>
                )


                    : (
                        < View style={styles.container}>

                            <View style={styles.header}>

                                <Headers
                                    leftComponent={{

                                        icon: 'arrowleft',
                                        text: 'your Cart',
                                        bold: 'bold',
                                        color: 'white',

                                    }}
                                    backgroundColor={appcolor.primary}
                                    navigation={this.props.navigation}



                                />

                            </View>

                            <View style={styles.Cartcontainer}>
                                <FlatList
                                    data={this.props.CartProducts}
                                    renderItem={this.CartItem}
                                    keyExtractor={(item) => item.id}
                                    showsVerticalScrollIndicator={false}
                                    showsHorizontalScrollIndicator={false}

                                />

                            </View>


                            <View style={styles.footer}>


                                <View style={styles.billdetails}>

                                    <View style={styles.billdet}>
                                        {/* <View style={styles.totallines}><Text style={styles.totatltext}>Sub total</Text></View> */}
                                        <View>
                                            <Text>Bill Details</Text>
                                        </View>
                                        <View style={styles.totallines}>

                                            <Text style={styles.totatltext}>Total :</Text>
                                            <View style={{ alignItems: 'center', flexDirection: 'row', marginLeft: '10%' }}>
                                                <FontAwesome name='rupee' color="black" size={15} />
                                                <Text style={{ fontSize: 20 }}>{this.props.TotalPrice}</Text></View>
                                        </View>

                                    </View>


                                </View>

                                <View style={styles.checkout}>


                                    <TouchableOpacity onPress={this.handleCheckout} style={{ borderWidth: 0.1, elevation: 5, borderRadius: 25, width: '90%', alignSelf: 'center', height: 50, justifyContent: 'center', alignItems: 'center', backgroundColor: appcolor.primary }}>
                                        <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                                            <MyText
                                                title={appstrings.checkout}
                                                color={appcolor.white}

                                            />
                                            <AntDesign style={{ marginLeft: 10 }} name={'arrowright'} size={25} color={appcolor.black} />
                                        </View>
                                    </TouchableOpacity>

                                </View>
                            </View>
                        </ View>
                    )


                }

            </View>







        )
    }
};

const styles = StyleSheet.create({
    container: {

        height: "100%",
        width: "100%",
       
    },
    totatltext: {
        color: appcolor.greytext,
        fontSize: 15,

    },
    emptycartIcon: {
        height: 100,
        width: 100
    },
    emptycartcontainer: {
        height: '100%',

        
    },
    totallines: {
        borderBottomWidth: 0.2,
        height: 40,
        flexDirection: 'row',

        justifyContent: 'space-between',
        borderBottomColor: appcolor.greytext,


    },
    Cartcontainer: {
        elevation: 2,
        marginTop: 10,
        height: '50%',
        width: '93%',
        borderRadius: 5,
        alignSelf: 'center',
        backgroundColor: appcolor.white,
    },
    checkoutContainer: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',

    },
    checkoutbutton: {
        width: '95%',
        height: 45,

    },
    emptycartblock:{
      
      height:'90%',
      width:'100%',
      justifyContent:'center',
      alignItems:'center'
    },
    quantityblock: {
        flexDirection: 'row',


        height: 30,

        marginTop: '10%'
    },
    header: {
        borderWidth: 0.1,
        elevation: 2,
        width: '100%',
        height: '5%',


    },
    footer: {
       height: '42%',
        justifyContent:'space-between'
        

    },

    checkout: {
        width: '100%',
        borderWidth: 0.1,
        elevation: 10,
        flexDirection: 'row'
    },
    billdet: {


        alignSelf: 'center',
        width: '90%'
    },

    center: {
        backgroundColor: '#E4E7E4',

        height: height,


    },
    checkout: {
        width: '100%',


        justifyContent: 'center',
        flexDirection: 'row'
    },
    billdetails: {
        elevation: 2,
        borderRadius: 10,
        padding: 10,
        width: '93%',
        alignSelf: 'center',
        marginTop: 10,
        backgroundColor: appcolor.white

    }
})

const mapStateToProps = state => {
    return {
        CartProducts: getCartProductSelector(state),
        // isCart: getcarsize(state),
        TotalPrice: getTotalPrice(state)

    }
}
export default connect(mapStateToProps)(MyCart)
