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