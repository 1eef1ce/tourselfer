import React, { FunctionComponent, useEffect } from 'react';
import ReactDOM from 'react-dom';

export interface ModalProps {
    isShown: boolean;
    hide: () => void;
    modalContent: JSX.Element;
    headerText: string;
}
export const Modal: FunctionComponent<ModalProps> = ({
    isShown,
    hide,
    modalContent,
    headerText,
}) => {

    useEffect(() => {
        isShown
            ? (document.body.style.overflow = "hidden")
            : (document.body.style.overflow = "unset");
    }, [isShown]);

    const modal = (
        <React.Fragment>
            <div className="overlay" onClick={hide}></div>
            <div className="modal">
                <div className="modal__container">
                    <a href="javascript:void(0)" className="modal__close" onClick={hide}>X</a>
                    <div className="modal__head">
                        <div>{headerText}</div>
                    </div>
                    <div className="modal__body">
                        {modalContent}
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
    return isShown ? ReactDOM.createPortal(modal, document.body) : null;
};