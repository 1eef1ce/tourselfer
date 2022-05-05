import {useRef, useState} from 'react';
import {Trashcan, UploadIcon} from '@components/icons';

const FileUpload = ({...props}) => {
    const [file, setFile] = useState<any>({});

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const fileInput = useRef(null);

    const handleRemove = () => {
        fileInput.current.value = null;
        setFile({});
    };

    return (
        <div className="file">
            <label className="file__container">
                <input
                    className={"file__input" + ((file !== undefined && file.name !== undefined) ? ' withFile' : '')}
                    type="file"
                    onChange={handleFileChange}
                    ref={fileInput}
                    {...props}
                />
                <span className="file__label">
                    {file !== undefined ? (
                        file.name == null && <span className="file__icon icon"><UploadIcon/></span>
                    ) : (
                        <span className="file__icon icon"><UploadIcon/></span>
                    )}
                    <span className="file__text">
                        {file !== undefined ? (
                            file.name == null ? 'Browse files' : file.name
                        ) : 'Browse files'
                        }
                    </span>
                </span>
            </label>
            {(file !== undefined && file.name !== undefined) && (
                <button className="file__delete" onClick={() => handleRemove()}><Trashcan/></button>
            )}
            {/*<div className="file__error">Error</div>*/}
        </div>
    );
};

export default FileUpload;