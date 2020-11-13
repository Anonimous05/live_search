import React, {Component} from 'react';
import {NavLink} from "react-router-dom";
import axiosAPI from "../../axiosAPI";
import {toast} from "react-toastify";
import './Main.css';

class Main extends Component {

    state= {
        processorName: '',
        processors: [],
    };

    inputValHandler = (e) => {
        this.setState({[e.target.name]: e.target.value});
    };

    fetchProcessors = async () => {
        try {
            const res = await axiosAPI.get(`/${this.state.processorName === '' ? 'all' : this.state.processorName}`);
            this.setState({processors: res.data});
        } catch (error) {
            toast.error(error);
        }
    };

    componentDidMount() {
        this.fetchProcessors();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(prevState.processorName !== this.state.processorName){
            this.fetchProcessors();
        }
    }

    render() {
        return (
            <div>
                <div className="inputs">
                    <input type="text" name="processorName" onChange={this.inputValHandler} value={this.state.processorName}/>
                </div>
                <div className="processorsContainer">
                    {this.state.processors !== [] ? Object.keys(this.state.processors).map(info => (
                        <div className="processorBlock" key={info}>
                            <p onClick={() => this.setState({processorName: this.state.processors[info].name})} className="procName">
                                {this.state.processors[info].name}
                            </p>
                            <NavLink to={`/details/${this.state.processors[info].name}`}>
                                подробнее
                            </NavLink>
                        </div>
                    )) : (
                        <></>
                    )}
                </div>
            </div>
        );
    }
}

export default Main;