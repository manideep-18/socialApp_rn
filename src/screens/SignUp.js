import React from 'react'
import {StyleSheet,ScrollView,TouchableOpacity,View} from 'react-native'
import {
    Container,
    Form,
    Item,
    Input,
    Text,
    Button,
    Thumbnail,
    Content
} from 'native-base'
import storage from '@react-native-firebase/storage'
import ProgressBar from 'react-native-progress/Bar'
import ImagePicker from 'react-native-image-picker'
import propTypes from 'prop-types'


import {signUp} from '../action/auth'
import options from '../utils/Options'
import { connect } from 'react-redux'
import { useState } from 'react'

const SignUp=({signUp})=>{
    const [name,setName]=useState('')
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [instaUserName,setInstaUserName]=useState('')
    const [country,setCountry]=useState('')
    const [bio,setBio]=useState('')
    const [image,setImage]=useState('https://www.gstatic.com/devrel-devsite/prod/vf7e3a995d426e05d42b78fc7d21a14329a91016dc065dc22c480cc8f443ef33e/firebase/images/touchicon-180.png')
    const [imageUploading,setImageUploading]=useState(false)
    const [uploadStatus,setUploadStatus]=useState(null)

    const chooseImage=async()=>{
        ImagePicker.showImagePicker(options,(respose)=>{
            console.log("Respose =",respose)

            if (response.didCancel) {
                console.log('User cancelled image picker');
              } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
              } else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
              } else {
               console.log(respose)
               uploadImage(respose)
              }
            
                // You can also display the image using data:
                // const source = { uri: 'data:image/jpeg;base64,' + response.data };
        })
    }

    const uploadImage=async(response)=>{
        setImageUploading(true)
        const reference=storage().ref(response.fileName)

        const task=reference.putFile(response.path)
        task.on('state_changed',(takeSnapshot)=>{
            const percentage=((takeSnapshot.bytesTransferred/takeSnapshot.totalBytes))*1000

            setUploadStatus(percentage)
        })

        task.then(async()=>{
            const url=await reference.getDownloadURL()

            setImage(url)
            setImageUploading(false)
        })
    }

    const doSignUp=async()=>{
        SignUp({name,instaUserName,bio,country,email,password,image})
    }

    return(
        <>
        <Text>Hello from SignUp</Text>
        </>
    )
}

const mapDispatchToProps={
    signUp:(data)=>signUp(data)
}

SignUp.propTypes={
    signUp:propTypes.func.isRequired
}

export default connect(null,mapDispatchToProps)(SignUp)