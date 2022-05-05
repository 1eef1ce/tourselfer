import React, {useState} from 'react';
import Head from 'next/head';
import {Layout} from '@components/common';
import {FileUpload, ImageUpload} from '@components/ui';
import NumberFormat from 'react-number-format';

const FormExtendedExample = () => {
    const [file, setFile] = useState('');

    const setImage = (image) => {
        setFile(image)
    };

    function limit(val, max) {
        if (val.length === 1 && val[0] > max[0]) {
            val = "0" + val;
        }

        if (val.length === 2) {
            if (Number(val) === 0) {
                val = "01";

            } else if (val > max) {
                val = max;
            }
        }

        return val;
    }

    function cardExpiry(val) {
        const month = limit(val.substring(0, 2), "23");
        const date = limit(val.substring(2, 4), "59");

        return month + (date.length ? ":" + date : "");
    }

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
                            thousandSeparator={true}
                            prefix="$"
                            inputMode="numeric"
                            allowEmptyFormatting={true}
                        />
                    </div>
                    <div style={{marginTop: "1em"}}>
                        <NumberFormat
                            format={cardExpiry}
                            mask="_"
                            allowEmptyFormatting={true}
                            placeholder="__:__"
                        />
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default FormExtendedExample;