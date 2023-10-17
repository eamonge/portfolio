import React from 'react';
import Button from '@mui/material/Button';
import sha256 from 'crypto-js/sha256';
import Base64 from 'crypto-js/enc-base64';
import CryptoJS from 'crypto-js';
import { removeNotification, addNotification } from '../redux/notificationSlice';
import { useDispatch, useSelector } from 'react-redux';

function ContentComponent() {

    const dispatch = useDispatch();

    const randomizedString = (length) => {
        let result = '';
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        const charactersLength = characters.length;
        let counter = 0;
        while (counter < length) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
            counter += 1;
        }
        return result;
    }

    const generateCodeChallange = () => {
        const codeVerifier = randomizedString(9);

        var utf8arr = CryptoJS.enc.Utf8.parse(codeVerifier);
        var hash = CryptoJS.SHA256(utf8arr);
        var base64 = CryptoJS.enc.Base64.stringify(hash);


        // var hash = CryptoJS.SHA256(codeVerifier);
        // const codeChallange = Base64.parse(hash);

        var challangeValue = document.getElementById('codeChallangeVal');

        challangeValue.innerHTML = base64;
    
    }

    const handleLowerNotif = () => {
        dispatch(removeNotification())
    }


    return(
        <div>
            <h1>Content page!</h1>
            <Button variant="contained" onClick={() => dispatch(removeNotification())}>Generate code challange!</Button>
            <h1>Code challange is: <p id='codeChallangeVal'>s</p></h1>
        </div>
    );
}

export default ContentComponent;