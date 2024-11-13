import React from 'react';

export const DonateFooter = () => (
    <p>Did you find it useful? Consider making a <a href="/donate" className={'btn-donate'}>donation</a> to
        support this project and leave a star on GitHub <a style={{verticalAlign: 'sub'}}
                                                           href="https://github.com/pichillilorenzo/flutter_inappwebview"
                                                           target="_blank"
                                                           rel="noopener noreferrer"><img decoding="async"
                                                                                          loading="lazy"
                                                                                          src="https://img.shields.io/github/stars/pichillilorenzo/flutter_inappwebview?style=social"
                                                                                          alt="GitHub stars"/></a>.
        Your support is really appreciated!</p>
);
