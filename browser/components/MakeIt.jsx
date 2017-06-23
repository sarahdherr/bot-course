import React from 'react'
import {
  Step,
  Stepper,
  StepButton
} from 'material-ui/Stepper'
import RaisedButton from 'material-ui/RaisedButton'
import FlatButton from 'material-ui/FlatButton'

// import Login from './Login'
import Secrets from './MakeItSteps/Make01'
import GitIgnore from './MakeItSteps/Make02'
import Config from './MakeItSteps/Make03'
import Retweet from './MakeItSteps/Make04'
import Favorite from './MakeItSteps/Make05'

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
        return <Secrets />
      case 1:
        return <GitIgnore />
      case 2:
        return <Config />
      case 3:
        return <Retweet />
      case 4:
        return <Favorite />
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
              Secrets
            </StepButton>
          </Step>
          <Step>
            <StepButton onClick={() => this.setState({stepIndex: 1})}>
              Git Ignore
            </StepButton>
          </Step>
          <Step>
            <StepButton onClick={() => this.setState({stepIndex: 2})}>
              Config
            </StepButton>
          </Step>
          <Step>
            <StepButton onClick={() => this.setState({stepIndex: 3})}>
              Retweet
            </StepButton>
          </Step>
          <Step>
            <StepButton onClick={() => this.setState({stepIndex: 4})}>
              Favorite
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
