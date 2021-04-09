import './App.css';
import React, { Component } from 'react';
import { Amplify, Storage } from 'aws-amplify';
// import awsconfig from './aws-exports';
import { withAuthenticator } from '@aws-amplify/ui-react';
import { Auth } from '@aws-amplify/auth';
import awsconfig from './aws-exports';
import { S3Album } from 'aws-amplify-react'

Amplify.configure(awsconfig)
Auth.configure(awsconfig)
console.log(awsconfig);


class Display extends Component {

    //     // Use this code if you want to load a single image, just replace the "bright red" url champ
    //     state = { fileUrl: '' }
    //     componentDidMount() {
    //         Storage.get("bright red light.png")
    //             .then(data => {
    //                 this.setState({
    //                     fileUrl: data
    //                 })
    //             })
    //     }

    //     render() {
    //         return (
    //             <div className="display">


    //                 <img src={this.state.fileUrl} />
    //             </div>
    //         )
    //     }
    // }

    //renders entire folder
    render() {
        return (
            <div>
                <S3Album path='' />
            </div>
        )
    }
}

export default withAuthenticator(Display);
