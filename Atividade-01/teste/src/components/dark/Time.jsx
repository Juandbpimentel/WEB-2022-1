import React from 'react';

import Character from './Character'

export default props =>
    <div>
        {props.children}
    </div>


/*
export default props =>
    <div>
        <Character name='John Snow' time={1986} />
        <Character name='Daenerys Targaryen' time={1996} />
        <Character name='Bran Stark' time={2001} />
    </div>

*/