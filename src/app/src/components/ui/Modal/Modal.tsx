import React, { FunctionComponent, useEffect } from 'react';
import ReactDOM from 'react-dom';
import {Close} from "@components/icons";
import {Button} from '@components/ui';

export interface ModalProps {
    isShown: boolean;
    hide: () => void;
    modalContent: JSX.Element;
}
export const Modal: FunctionComponent<ModalProps> = ({
    isShown,
    hide,
    modalContent
}) => {

    useEffect(() => {
        isShown
            ? (document.body.style.overflow = "hidden")
            : (document.body.style.overflow = "unset");
    }, [isShown]);

    const modal = (
        <>
            <div className="overlay" onClick={hide}/>
            <div className="modal">
                <div className="modal__container">
                    <div className="modal__close" onClick={hide}><Close/></div>
                    <div className="modal__head">
                        <div className="modal__title">Быстрый заказ</div>
                        <div className="modal__subtitle">
                            Заполните контактные данные, и мы оформим заказ в ближайшее время
                        </div>
                    </div>
                    <div className="modal__body">
                        {modalContent}
                    </div>
                </div>
            </div>
        </>
    );
    return isShown ? ReactDOM.createPortal(modal, document.body) : null;
};