import React, { PropTypes, Component } from 'react';

import './FlexTable.css';

export default class FlexTable extends Component {
    static propTypes = {
        data: PropTypes.array.isRequired
    };

    render() {
        const { data } = this.props;
        return (

            <div className='tableWrapper'>
                {
                    data.map(column => (
                        <div className='tableColumn'>
                            {column.map(cell => (
                                <div className='tableCell'>
                                    {cell}
                                </div>
                            ))}
                        </div>
                    ))
                }
            </div>

        )
    }
}