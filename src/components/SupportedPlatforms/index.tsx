import React from 'react';
import {Badge} from "@site/src/components/Badge";
import {Platform} from "@site/src/Platform.enum";

export interface SupportedPlatform {
    platform: Platform;
    version?: string;
}

export const SupportedPlatforms = ({platforms}: { platforms: SupportedPlatform[] | Platform[] }) => (
    <p style={{display: 'flex', flexDirection: 'row', gap: '5px'}}>
        <strong>Supported Platforms: </strong>
        {platforms.map((value, index) => {
            const supportedPlatform = typeof value === 'object' ? value as SupportedPlatform : null;
            return <Badge key={index}
                          text={typeof value === 'string' ? value :
                              `${supportedPlatform.platform} ${supportedPlatform.version ? supportedPlatform.version + '+' : ''}`.trim()}/>;
        })}
    </p>
);
