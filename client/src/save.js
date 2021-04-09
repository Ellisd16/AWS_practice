import './App.css';
import React, { Component } from 'react';
import { Amplify, Storage } from 'aws-amplify';
// import awsconfig from './aws-exports';
import { withAuthenticator } from '@aws-amplify/ui-react';
import { Auth } from '@aws-amplify/auth';
import awsconfig from './aws-exports';

Amplify.configure(awsconfig)
Auth.configure(awsconfig)
console.log(awsconfig);

// Amplify.configure({
//     Auth: {
//         identityPoolId: 'us-west-2:13ee46be-92c6-4bda-970b-5106a0ae9283',
//         region: "us-west-2"
//     }
// }
// );

// Storage.configure({
//     AWSS3: {
//         bucket: 'amplify-ampexample-dev-153054-deployment',//Your bucket ARN;
//         region: 'us-west-2'//Specify the region your bucket was created in;
//     }
// })

class Save extends Component {
    state = { fileUrl: '', file: '', filename: '' }
    handleChange = e => {
        const file = e.target.files[0]
        this.setState({
            fileUrl: URL.createObjectURL(file),
            file,
            filename: file.name
        })
        console.log("Image file: ", file);

    }
    saveFile = () => {
        Storage.put(this.state.filename, this.state.file)
            .then((result) => {
                console.log(this.state.filename, this.state.file)
                console.log('Successfully saved! YAAA!', result)
                this.setState({ fileUrl: '', file: '', filename: '' })
            })
            .catch(err => {
                console.log('error uploading file :( ', err)
            })
    }
    render() {
        return (
            <div className="get">

                <input type='file' onChange={this.handleChange} />

                <button onClick={this.saveFile}>Save File</button>
                <img src={this.state.fileUrl} />
            </div>
        )
    }
}

export default withAuthenticator(Save);
