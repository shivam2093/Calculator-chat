import React, { Component } from 'react'
import './Calculations.css'
import * as math from 'mathjs'
import ChatMessage from './App'

import SockJS, { prototype } from 'sockjs-client'


class Calculations extends Component {

    constructor(props) {
        super(props)
        this.state = {

            input: ""

        }
    }

    operations = (event) => {

        this.setState({

            input: this.state.input + event.target.name
        })
    }

    clear = (event) => {

        this.setState({

            input: []

        })

    }

    equal = (event) => {

        this.setState({

            input: math.evaluate(this.state.input)
        })


        console.log(this.state.input + "=" + math.evaluate(this.state.input))

    }

    sqaure = () => {

        this.setState({

            input: math.square(this.state.input)

        })

    }
    logarithm = () => {

        this.setState({

            input: math.log10(this.state.input)
        })

    }
    squareroot = () => {

        this.setState({

            input: math.sqrt(this.state.input)
        })

    }







    render() {


        function formValue(props) {



        }






        return (




            <div className="container">

                <div className="allInOne">
                    <div className="result_button">
                        <div className="input" >

                            {

                                this.state.input
                            }

                        </div>
                    </div>
                    <div className="calc_box">

                        <div className="buttons_wrapper">

                            <div className="button_wrapper">
                                <button id="first" name="" onClick={this.sqaure}>&#x33A1; </button>
                            </div>
                            <div className="button_wrapper">

                                <button id="first" name="" onClick={this.squareroot}>2&radic;x  </button>
                            </div>
                            <div className="button_wrapper">

                                <button id="first" name="" onClick={this.logarithm}> log<sub>10</sub> </button>
                            </div>
                            <div className="button_wrapper">

                                <button id="first" name="%" onClick={this.operations}> % </button>
                            </div>
                            <div className="button_wrapper">

                                <button id="first" name="7" onClick={this.operations}> 7 </button>
                            </div>
                            <div className="button_wrapper">

                                <button id="first" name="8" onClick={this.operations}>8</button>
                            </div>
                            <div className="button_wrapper">

                                <button id="first" name="9" onClick={this.operations}> 9 </button>
                            </div>
                            <div className="button_wrapper">

                                <button id="first" name="*" onClick={this.operations}> &times; </button>
                            </div>
                            <div className="button_wrapper">

                                <button id="first" name="4" onClick={this.operations}> 4 </button>
                            </div>
                            <div className="button_wrapper">

                                <button id="first" name="5" onClick={this.operations}> 5 </button>
                            </div>
                            <div className="button_wrapper">

                                <button id="first" name="6" onClick={this.operations}> 6 </button>
                            </div>
                            <div className="button_wrapper">

                                <button id="first" name="-" onClick={this.operations}> - </button>
                            </div>
                            <div className="button_wrapper">

                                <button id="first" name="1" onClick={this.operations}> 1 </button>
                            </div>
                            <div className="button_wrapper">

                                <button id="first" name="2" onClick={this.operations}> 2 </button>
                            </div>
                            <div className="button_wrapper">

                                <button id="first" name="3" onClick={this.operations}> 3 </button>
                            </div>
                            <div className="button_wrapper">

                                <button id="first" name="+" onClick={this.operations}> + </button>
                            </div>
                            <div className="button_wrapper">

                                <button id="first" name="C" onClick={this.clear}> C </button>
                            </div>
                            <div className="button_wrapper">

                                <button id="first" name="0" onClick={this.operations}> 0 </button>
                            </div>
                            <div className="button_wrapper">

                                <button id="first" name="." onClick={this.operations}> &sdot; </button>
                            </div>
                            <div className="button_wrapper">

                                <button id="first" name="/" onClick={this.operations}> &divide; </button>
                            </div>
                            <div className="button_wrapper">

                                <button id="first" type="submit" name="=" onClick={this.equal}> = </button>
                            </div>


                        </div>
                    </div>
                </div>
            </div>
        )
    }
}




export default Calculations
