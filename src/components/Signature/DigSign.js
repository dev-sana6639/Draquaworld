import React,{useRef} from 'react'
import {View,Text} from 'react-native'
import SignatureScreen from 'react-native-signature-canvas';


const app = (props) => {
  const ref = useRef();

  console.log('props in digsign is:',props)
  const {
    onEnd,
    onOK,
    onEmpty,
    onClear,
    autoClear
  } = props;

  return (
    <SignatureScreen
        ref={ref}
        onEnd={onEnd}
        onOK={onOK}
        onEmpty={onEmpty}
        onClear={onClear}
        autoClear={autoClear}
       
    />
  );
}

export default app;