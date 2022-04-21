import React, {useRef, useState} from 'react';
import Head from 'next/head';
import {Layout} from '@components/common';
import {FileUpload, ImageUpload} from '@components/ui';
import NumberFormat from 'react-number-format';

const FormExtendedExample = () => {
    const [file, setFile] = useState('');

    const setImage = (image) => {
        setFile(image)
    };

    return (
        <Layout>
            <Head>
                <title>Form Components</title>
            </Head>

            <div className="container">
                <div style={{maxWidth: '400px'}}>
                    <div>
                        <ImageUpload
                            setImage={setImage}
                            image={file}
                            type=".jpg, .png"
                            imageWidth={456}
                            imageHeight={465}
                        />
                    </div>
                    <div style={{marginTop: "1em"}}>
                        <FileUpload/>
                    </div>
                    <div style={{marginTop: "1em"}}>
                        <NumberFormat
                            format="##:##"
                            mask="_"
                            allowEmptyFormatting={true}
                        />
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default FormExtendedExample;