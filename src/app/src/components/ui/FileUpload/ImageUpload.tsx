import React, {useRef, useState} from 'react';
import {Trashcan, UploadIcon} from '@components/icons';

interface ImageUploadProps {
    image: any
    setImage: any
    type?: string
    imageWidth?: number
    imageHeight?: number
    inputName?: string
    value?: any
}

const ImageUpload: React.FC<ImageUploadProps> = ({
    image,
    setImage,
    type = 'image/*',
    imageWidth,
    imageHeight,
    inputName,
    value,
    ...props
                                                 }) => {
    const [ imagePreviewUrl, setImagePreviewUrl ] = useState('');
    const imageInput = useRef(null);
    const handleImageChange = e => {
        e.preventDefault();
        const reader = new FileReader();
        const imageFile = e.target.files[0];
        reader.onloadend = () => {
            const image = new Image();
            image.onload = () => {
                if (image.width !== imageWidth || image.height !== imageHeight) {
                    alert('Размеры выбранного вами изображения не соответствуют рекомендованным. Загруженное изображение может отображаться некорректно.');
                }
            };
            image.src = reader.result as string;
            setImage(image.src);
            setImagePreviewUrl(image.src);
        };
        if (imageFile !== undefined) {
            reader.readAsDataURL(imageFile);
        }

    };
    const handleRemove = () => {
        setImage("");
        setImagePreviewUrl("");
        imageInput.current.value = null;
    };

    return (
        <div className="file">
            <label className="file__container file__container--img">
                <input
                    className="file__input"
                    type="file"
                    accept={type}
                    onChange={handleImageChange}
                    ref={imageInput}
                    name={inputName}
                    value={value}
                    {...props}
                />
                <span className="file__label">
                    <span className="file__icon icon"><UploadIcon/></span>
                    {(imageWidth && imageHeight) && <span className="file__size">{imageWidth}×{imageHeight} px</span>}
                    <span className="file__type">{(type == 'image/*') ? 'Browse images' : type}</span>
                </span>
                {imagePreviewUrl && (
                    <span className="file__img">
                        <img src={imagePreviewUrl} alt="" title=""/>
                    </span>
                )}
            </label>
            {imagePreviewUrl && (
                <button className="file__delete" onClick={() => handleRemove()}><Trashcan/></button>
            )}
            {/*<div className="file__error">Error</div>*/}
        </div>
    );
};

export default ImageUpload;