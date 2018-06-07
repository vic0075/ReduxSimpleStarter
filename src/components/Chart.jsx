import React from 'react';
import {Sparklines, SparklinesLine} from 'react-sparklines';
import _ from 'lodash';

export default ({data, color, unit}) => {
    return (
        <td>
            <Sparklines
                height={120}
                width={180}
                data={data}
            >
                <SparklinesLine color={color}/>
            </Sparklines>
            <div>
                {average(data)} {unit}
            </div>
        </td>
    )
}

function average(data = []) {
    return _.round(_.sum(data) / data.length);
}