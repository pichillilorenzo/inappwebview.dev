import React from 'react';
import Footer from '@theme-original/DocItem/Footer';
import type FooterType from '@theme/DocItem/Footer';
import type {WrapperProps} from '@docusaurus/types';
import {DonateFooter} from "@site/src/components/DonateFooter";

type Props = WrapperProps<typeof FooterType>;

export default function FooterWrapper(props: Props) {
    return (
        <>
            <hr/>
            <DonateFooter />
            <Footer {...props} />
        </>
    );
}
