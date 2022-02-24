import React from "react";
import Link from 'next/link';

export interface PolicyTextProps {
    description: string
    link1: string
    title1: string
    link2?: string
    title2?: string
}

const PolicyText: React.FC<PolicyTextProps> = ({
    description,
    link1,
    title1,
    link2,
    title2
}) => {

    return (
        <>
            {description}
            {' '}
            <Link href={link1}>
                <a className="link link--color">{title1}</a>
            </Link>
            {link2 && (
                <>
                    {' '}и{' '}
                    <Link href={link2}>
                        <a className="link link--color">{title2}</a>
                    </Link>
                </>
            )}
        </>
    );
};

export default PolicyText;