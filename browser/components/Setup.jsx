import React from 'react'
import {
  Step,
  Stepper,
  StepButton
} from 'material-ui/Stepper'
import RaisedButton from 'material-ui/RaisedButton'
import FlatButton from 'material-ui/FlatButton'

import Login from './Login'
import TwitAccount from './SetupSteps/Setup01'
import Tokens from './SetupSteps/Setup02'
import Terminal from './SetupSteps/Setup03'
import PackageJSON from './SetupSteps/Setup04'

export default class extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      stepIndex: 0
    }
  }

  handleNext () {
    const {stepIndex} = this.state
    if (stepIndex < 2) {
      this.setState({stepIndex: stepIndex + 1})
    }
  }

  handlePrev () {
    const {stepIndex} = this.state
    if (stepIndex > 0) {
      this.setState({stepIndex: stepIndex - 1})
    }
  }

  getStepContent (stepIndex) {
    switch (stepIndex) {
      case 0:
        return <TwitAccount />
      case 1:
        return <Tokens />
      case 2:
        return <Terminal />
      case 3:
        return <PackageJSON />
      default:
        return 'You\'re a long way from home sonny jim!'
    }
  }

  render () {
    const {stepIndex} = this.state
    const contentStyle = {margin: '0 16px'}

    return (
      <div style={{width: '100%', margin: 'auto'}}>
        <Stepper linear={false} activeStep={stepIndex}>
          <Step>
            <StepButton onClick={() => this.setState({stepIndex: 0})}>
              Twitter
            </StepButton>
          </Step>
          <Step>
            <StepButton onClick={() => this.setState({stepIndex: 1})}>
              Tokens
            </StepButton>
          </Step>
          <Step>
            <StepButton onClick={() => this.setState({stepIndex: 2})}>
              Files
            </StepButton>
          </Step>
          <Step>
            <StepButton onClick={() => this.setState({stepIndex: 3})}>
              Package
            </StepButton>
          </Step>
        </Stepper>
        <div style={contentStyle}>
          <p>{this.getStepContent(stepIndex)}</p>
        </div>
      </div>
    )
  }
}
