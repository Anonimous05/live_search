import React, {Component} from 'react';
import axiosAPI from "../../axiosAPI";
import {toast, ToastContainer} from "react-toastify";

class Details extends Component {

    state = {
        processor: {},
        name: this.props.match.params.name,
    };

    async componentDidMount() {
        try {
            const proc = await axiosAPI.get(`/details/${this.state.name}`);
            this.setState({processor: proc.data});
        }catch (error) {
            toast.error(error);
        }
    }

    render() {
        return (
            <div className="DetailsContainer">
                <ToastContainer/>
                <div className="detailsBlock">
                    <p className="procName">{this.state.processor.name}</p>
                    <p className="procName">{this.state.processor.description}</p>
                </div>
            </div>
        );
    }
}

export default Details;