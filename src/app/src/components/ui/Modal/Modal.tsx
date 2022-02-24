import React, {FC, useRef, useEffect, useCallback} from 'react';
import ReactDOM from 'react-dom';
import cn from 'classnames';
import {Close} from '@components/icons';
import {disableBodyScroll, clearAllBodyScrollLocks} from 'body-scroll-lock';
import FocusLock from 'react-focus-lock';

export interface ModalProps {
    isShown: boolean
    hide: () => void
    modalTitle?: string
    modalSubtitle?: string
    className?: string
    width?: 'small' | 'medium' | 'large'
}

const Modal: FC<ModalProps> = ({
    isShown,
    hide,
    modalTitle,
    modalSubtitle,
    className,
    width = 'small',
    children
}) => {

    const modalClick = React.useRef();

    const handleKey = useCallback(
        (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                return hide();
            }
        },
        [hide]
    );

    useEffect(() => {
        const modal = modalClick.current;

        if (modal) {
            disableBodyScroll(modal, {reserveScrollBarGap: true});
            window.addEventListener('keydown', handleKey);
        }
        return () => {
            clearAllBodyScrollLocks();
            window.removeEventListener('keydown', handleKey);
        };
    }, [handleKey]);

    const handleModalClick = (e) => {
        e.stopPropagation();
    };

    const rootClassName = cn(
        'modal',
        {
            ['modal--small']: width === 'small',
            ['modal--medium']: width === 'medium',
            ['modal--large']: width === 'large',
        },
        className
    );

    return isShown ? ReactDOM.createPortal(
        <>
            <div className="overlay" onClick={hide}>
                <FocusLock>
                    <div className={rootClassName} ref={modalClick} onClick={handleModalClick}>
                        <div className="modal__container">
                            <button className="modal__close" onClick={hide} tabIndex={-1}><Close/></button>
                            {(modalTitle || modalSubtitle) && (
                                <div className="modal__head">
                                    {modalTitle && (
                                        <div className="modal__title">{modalTitle}</div>
                                    )}
                                    {modalSubtitle && (
                                        <div className="modal__subtitle">{modalSubtitle}</div>
                                    )}
                                </div>
                            )}
                            <div className="modal__body">
                                {children}
                            </div>
                        </div>
                    </div>
                </FocusLock>
            </div>
        </>
        , document.body
    ) : null;
};

export default Modal;