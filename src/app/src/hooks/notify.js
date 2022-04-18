import { useEffect, useReducer, useState } from 'react'

import * as actions from "../store/actions";
import { useSelector, useDispatch } from "react-redux";

export const useNotify = () => {
    
    const dispatch = useDispatch();

    const handleNotifySubmit = ({...props}) => {
        if (props.title.length > 0 || props.message.length > 0) {
            dispatch(actions.addNotify({
                type: props.type,
                title: props.title,
                message: props.message
            }));
            setTimeout(() => {
                dispatch(actions.removeNotify());
            }, 5000);
        }
    }
            
    const errorNotify = ({...props}) => {

        let data = {
            title: "",
            message: "",
            type: "error"
        };

        if (!!props.title && typeof props.title === 'string') {
            data.title = props.title;
        }
        
        if (!!props.message && typeof props.message === 'string') {
            data.message = props.message;
        }

        handleNotifySubmit(data);
    }

    /*const [notifications, setNotification] = useState([]);
    const items = useSelector(state => state);

    const errorNotify = ({...props}) => {
        console.log('Set error');
        setNotification([...notifications, {
            type: 'error',
            title: 'Title error',
            message: 'Error message'
        }]);

        setNotification([
            {
                type: 'error',
                title: 'Title error',
                message: 'Error message'
            }
        ]);

        console.log(notifications);
    }

    const infoNotify = ({...props}) => {
        
    }

    const successNotify = ({...props}) => {
        
    }*/
    

    return {
        //notifications,
        errorNotify,
        //infoNotify,
        //successNotify
    };

}