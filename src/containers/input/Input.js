import * as React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Entypo } from 'react-native-vector-icons/Entypo';
import Icon from 'react-native-vector-icons/Ionicons';
import { MyText } from '../../components/Text/text'
import * as appcolors from '../../utils/colors';
import BasicInput from './BasicInput';

class Input extends React.Component {

    constructor(props) {

        super(props);
        this.state = {
            isSecure: props.secureTextEntry,
            passwordshow: false,
        }
        this.input = React.createRef();

    }

    passwordshowfunc = () => {
        const { isSecure, passwordshow } = this.state;
      
        this.setState({ isSecure: !isSecure, })
        this.setState({passwordshow: true})

    }
    render() {

        const {
            emailname,
            label,
            passwordname,
            labelname,
            height,
            width,
            autocorrect,
            placeholder,
            onChangeText,
            secureTextEntry,
            value,
            color,
            iconname,
            iconcolor,
            iconsize,
            backgroundColor,
            borderRadius,
            placeholderTextColor,
            selectionColor,
            keyboardType,
            ...rest
        } = this.props;

        const { isSecure } = this.state;
       const Width = width-2;
       

        // style={[
        //     styles.inputtxt,
        //     width && { width },
        //     height && { height },
        // ]}
        
        return (
            <View style={[
                 styles.container,
                width && {width},
                backgroundColor && {backgroundColor},
                height && { height: height},
                borderRadius && {borderRadius: borderRadius}
            ]}>
                <BasicInput
                    {...rest}
                    placeholder={placeholder}
                    inputRef={this.input}
                    label={label}
                    value={value}
                    onChangeText={onChangeText}
                    width ={ "90%" }
                    
                    secureTextEntry={secureTextEntry}
                    backgroundColor={backgroundColor}
                    color={color}
                    placeholderTextColor={placeholderTextColor}
                    selectionColor={selectionColor}
                    keyboardType={keyboardType}
                />

                {/* {secureTextEntry && (
                    <View style={{ justifyContent: 'center', marginLeft: 5 }}>
                        <Icon

                            name={this.state.isSecure ? 'eye' : 'eye-off'}
                            size={20}
                            color={appcolors.white}
                            onPress={this.passwordshowfunc}
                        />
                    </View>
                ) } */}
            </View>





        );
    };
}

const styles = StyleSheet.create({
    container: {
       
        flexDirection: 'row',
        alignItems:'center',
       
        
      

    },
    
});

export default Input;