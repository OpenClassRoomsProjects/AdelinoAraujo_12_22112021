import React from "react";
import PropTypes from "prop-types";

import "./KeyData.scss" ;

class KeyData extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return (
            <div className="keyData">

                <div className="keyData__content-box">

                    <img
                        className="keyData__image"
                        src={this.props.logo}
                    />

                    <div className="keyData__content">
                        <div className="keyData__data">
                            {
                                this.props.data
                            }
                        </div>
                        <div className="keyData__label">
                            {
                                this.props.label
                            }
                        </div>
                    </div>

                </div>

            </div>
        )
    }
}

KeyData.propTypes = {
    logo: PropTypes.string.isRequired,
    data: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired
}


export default KeyData ;