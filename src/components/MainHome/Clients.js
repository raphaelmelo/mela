import React from 'react';
import Styled from 'styled-components'

import ClientImageM from '../../images/clients/a.svg'

 
export const WrapperProviders = Styled.article`
    display:flex;
    flex-wrap:wrap;
    flex-direction:row;
    justify-content:space-around;
    align-items:center;
    gap:30px 10px;
    min-height:500px;
    background:#fff;
`
export const ProviderItem = Styled.article`
    min-width:280px;
    min-height:280px;
    display:flex;
    flex-wrap:wrap;
    flex-direction:row;
    justify-content:center;
    align-items:center;

    img {
        width: 100px;

    }

`

const Data = [
    {
        title: "Volksvagen",
        image: `${ClientImageM}`
    },
    {
        title: "Vale",
        image: `${ClientImageM}`
    },
    {
        title: "Weg",
        image: `${ClientImageM}`
    },
    {
        title: "Chevrolet",
        image: `${ClientImageM}`
    }
];

const Clients = Data.map((item) => (
    (
        <ProviderItem>
            <img src={item.image} alt={item.title} />
        </ProviderItem>
    )
))

export default function Providers() {

    return (
        <WrapperProviders>
            {Clients}
        </WrapperProviders>
     )
}
