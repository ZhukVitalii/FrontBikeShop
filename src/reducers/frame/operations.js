import fetch from 'cross-fetch';
import {Creators} from './actions';

const frameSize = Creators.frameSize;
const bikeType = Creators.bikeType;
const requestFrameJsonAction = Creators.requestFrameJson;
const receiveFrameJsonAction = Creators.receiveFrameJson;

// 'fetchSubredditJson()' will fetch the JSON data from the subreddit,
// extract the required information and update the Redux store with it.
// const fetchSubredditJson = (subreddit) => {
//     return dispatch => {
//
//         // Dispatching this action will toggle the 'showRedditSpinner'
//         // flag in the store, so that the UI can show a loading icon.
//         dispatch(requestSubredditJsonAction(subreddit));
//         return fetch(`https://www.reddit.com/r/${subreddit}.json`)
//             .then(response => response.json())
//             .then(json => {
//                 const responseData = json;
//                 let data = [];
//
//                 responseData.data.children.map(child => {
//                     const childData = {
//                         title: child.data.title,
//                         url: child.data.permalink
//                     };
//
//                     data.push(childData);
//                     return null;
//                 });
//
//                 // Dispatching this action while passing the 'data' array
//                 // we created above will update the store with this data.
//                 // It is good practice to send only the required information
//                 // rather than trimming the data when and where it is used.
//                 // This is why we aren't sending the entire JSON response to
//                 // the Redux store.
//                 dispatch(receiveSubredditJsonAction(data))
//             });
//     }
// };



const fetchFrameJson = (frame) => {
    return dispatch => {

        // Dispatching this action will toggle the 'showRedditSpinner'
        // flag in the store, so that the UI can show a loading icon.
        dispatch(requestFrameJsonAction(frame));
        return fetch('http://localhost:8080/get-frames',{
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                'bikeTypeId': '1',
                'bikeType': 'MTB',
                'frameSizeId': '1',
                'itemsPerPage': '5',
                'page':'0'
            }),
        }).then(response => response.json())
            .then(json => {
                const responseData = json;
                let data = [];

                responseData.data.children.map(child => {
                    const childData = {
                        title: child.data.title,
                        url: child.data.permalink
                    };

                    data.push(childData);
                    return null;
                });
                dispatch(receiveFrameJsonAction(data))
            });
    }
};

export default {
    frameSize,
    bikeType,
    fetchFrameJson
}