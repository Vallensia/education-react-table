import React, { PropTypes, PureComponent } from 'react';

import styles from './Table.css';

export default class Table extends PureComponent {
    static propTypes = {
        data: PropTypes.array.isRequired,
        header: PropTypes.array
    };

    render() {
        const { data, header } = this.props;
        return (
            <table className='table'>

                {
                    header && (
                        <thead>
                            {
                                header.map(itemHead => (
                                    <th className='tableData'>
                                        {itemHead}
                                    </th>
                                ))
                            }
                        </thead>
                    )
                }
                <tbody>
                {
                    data.map(row => (
                        <tr className='tableRow'>
                            {
                                row.map(item => (
                                    <td className='tableData'>
                                        {item}
                                    </td>
                                ))
                            }
                        </tr>
                    ))
                }
                </tbody>
            </table>
        )
    }
}