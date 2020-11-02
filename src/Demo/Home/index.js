import React, {Component} from 'react'
import {
    Col,
    Form,
    Row,
    Tab,
    Tabs
} from 'react-bootstrap'
import Aux
    from '../../hoc/_Aux'
import Button
    from "react-bootstrap/Button";


export default class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            tabOne: 'home',
            tabTwo: '',
            tabThree: '',
        }
    }

    openTabOne = () => {
        this.setState({
            tabOne: 'home',
            tabTwo: '',
            tabThree: ''
        })
    };

    openTabTwo = () => {
        this.setState({
            tabOne: '',
            tabTwo: 'home',
            tabThree: ''
        })
    };

    /**
     * you could think of a better way of putting this logic just that am time bad here couldn't spend any other time on this
     */
    openTabThree = () => {
        this.setState({
            tabOne: '',
            tabTwo: '',
            tabThree: 'home'
        })
    };


    render() {
        return (
            <Aux>
                <Row>
                    <Col>
                        <h5 className="mt-4">Surgical
                            Safety
                            Checklist</h5>
                        <hr/>
                        <Tabs
                            variant="pills"
                            defaultActiveKey={this.state.tabOne}
                            className="mb-4">
                            <Tab
                                eventKey={this.state.tabOne}
                                title="Before induction of anaesthesia"
                                disabled
                            >
                                <Row>
                                    <Col
                                        md={6}>
                                        <h5>Patient
                                            details</h5>
                                        <Form.Group
                                            controlId="fullName">
                                            <Form.Label>Patient's
                                                Full
                                                Name</Form.Label>
                                            <Form.Control
                                                type="text"
                                                placeholder="Enter Patient's FullName"/>
                                        </Form.Group>

                                        <Form.Group
                                            controlId="telephone">
                                            <Form.Label>Patient's
                                                Telephone
                                                number</Form.Label>
                                            <Form.Control
                                                type="text"
                                                placeholder="Enter Patient's Telephone number"/>
                                        </Form.Group>

                                        <Form.Group
                                            controlId="fullName">
                                            <Form.Label>Patient's
                                                Age</Form.Label>
                                            <Form.Control
                                                type="number"
                                                placeholder="Enter Patient's Age"/>
                                        </Form.Group>

                                        <h6 className="mt-5">Patient's
                                            Gender</h6>

                                        <Form.Group>
                                            <Form.Check
                                                inline
                                                custom
                                                type="radio"
                                                label="Male"
                                                name="genderRadio"
                                                id="supportedRadio21"
                                            />
                                            <Form.Check
                                                inline
                                                custom
                                                type="radio"
                                                label="Female"
                                                name="genderRadio"
                                                id="supportedRadio22"
                                            />
                                        </Form.Group>
                                    </Col>

                                    <Col
                                        md={6}>

                                        <Form.Group>
                                            <h6>Has
                                                the
                                                patient
                                                confirmed
                                                his/her
                                                Identity,
                                                site,
                                                procedure,
                                                and
                                                consent?</h6>
                                            <Form.Check
                                                inline
                                                custom
                                                type="radio"
                                                label="yes"
                                                name="hasConfirmedSite"
                                                id="check"
                                            />
                                            <Form.Check
                                                inline
                                                custom
                                                type="radio"
                                                label="No"
                                                name="hasConfirmedSite"
                                                id="check1"
                                            />
                                        </Form.Group>
                                        <hr/>
                                        <Form.Group>
                                            <h6>Is
                                                the
                                                site
                                                marked?</h6>
                                            <Form.Check
                                                inline
                                                custom
                                                type="radio"
                                                label="yes"
                                                name="isSiteMarked"
                                                id="check2"
                                            />

                                            <Form.Check
                                                inline
                                                custom
                                                type="radio"
                                                label="Not Applicable"
                                                name="isSiteMarked"
                                                id="check3"
                                            />

                                        </Form.Group>

                                        <Form.Group>
                                            <h6>Is
                                                the
                                                anaesthesia
                                                machine
                                                and
                                                medication
                                                check
                                                complete?</h6>
                                            <Form.Check
                                                inline
                                                custom
                                                type="radio"
                                                label="yes"
                                                name="isMedicalCheckComplete"
                                                id="check4"
                                            />

                                            <Form.Check
                                                inline
                                                custom
                                                type="radio"
                                                label="No"
                                                name="isMedicalCheckComplete"
                                                id="check5"
                                            />

                                        </Form.Group>


                                        <Form.Group>
                                            <h6>Is
                                                the
                                                pulse
                                                oximeter
                                                on
                                                the
                                                patient
                                                and
                                                functioning?</h6>
                                            <Form.Check
                                                inline
                                                custom
                                                type="radio"
                                                label="No"
                                                name="isPulseOximeterFunctioning"
                                                id="check7"
                                            />

                                            <Form.Check
                                                inline
                                                custom
                                                type="radio"
                                                label="yes"
                                                name="isPulseOximeterFunctioning"
                                                id="check6"
                                            />

                                        </Form.Group>
                                        <hr/>
                                        <Form.Group>
                                            <h6>Does
                                                the
                                                Patient
                                                have
                                                a:
                                                Known
                                                allergy?</h6>
                                            <Form.Check
                                                inline
                                                custom
                                                type="radio"
                                                label="yes"
                                                name="isKnownAllergy"
                                                id="check8"
                                            />
                                            <Form.Check
                                                inline
                                                custom
                                                type="radio"
                                                label="No"
                                                name="isKnownAllergy"
                                                id="check7"
                                            />
                                        </Form.Group>

                                        <Form.Group>
                                            <h6>Difficulty
                                                airway
                                                or
                                                aspiration
                                                risk?</h6>
                                            <Form.Check
                                                inline
                                                custom
                                                type="radio"
                                                label="yes"
                                                name="hasDifficultyAirway"
                                                id="check9"
                                            />
                                            <Form.Check
                                                inline
                                                custom
                                                type="radio"
                                                label="yes and equipment available"
                                                name="hasDifficultyAirway"
                                                id="check10"
                                            />
                                        </Form.Group>

                                        <Form.Group>
                                            <h6>Risk
                                                of {">"} 500ml
                                                blood
                                                loss
                                                (7ml/kg
                                                in
                                                children)?</h6>
                                            <Form.Check
                                                inline
                                                custom
                                                type="radio"
                                                label="No"
                                                name="hasBloodLossRisk"
                                                id="check11"
                                            />
                                            <Form.Check
                                                inline
                                                custom
                                                type="radio"
                                                label="Yes and two Ivs/central access and fluids planned"
                                                name="hasBloodLossRisk"
                                                id="check12"
                                            />

                                        </Form.Group>
                                        <Button
                                            onClick={() => this.openTabTwo()}
                                        >
                                            Continue
                                        </Button>
                                        <hr/>
                                    </Col>


                                </Row>
                            </Tab>
                            <Tab
                                eventKey={this.state.tabTwo}
                                disabled
                                title="Before skin incision">
                                <Row>
                                    <Col
                                        md={6}>
                                        <Col
                                            md={12}>
                                            <Form.Group>
                                                <Form.Check
                                                    name="haveTeamIntroduced"
                                                    custom
                                                    type="checkbox"
                                                    id="checkbox12"
                                                    label="Confirm all team members have introduced themselves by name and role."
                                                />
                                            </Form.Group>
                                        </Col>
                                        <hr/>
                                        <Col
                                            md={12}>
                                            <Form.Group>
                                                <Form.Check
                                                    custom
                                                    type="checkbox"
                                                    id="checkbox13"
                                                    label="Confirm the patient's name, procedure, and where the incision will be made."
                                                />
                                            </Form.Group>
                                        </Col>
                                        <hr/>
                                        <Form.Group>
                                            <h6>Has
                                                antibiotic
                                                prophylaxis
                                                been
                                                given
                                                within
                                                the
                                                last
                                                60
                                                minutes?</h6>
                                            <Form.Check
                                                inline
                                                custom
                                                type="radio"
                                                label="yes"
                                                name="givenProphylaxis"
                                                id="check14"
                                            />

                                            <Form.Check
                                                inline
                                                custom
                                                type="radio"
                                                label="Not applicable"
                                                name="givenProphylaxis"
                                                id="check15"
                                            />
                                        </Form.Group>

                                        <hr/>
                                        <Form.Group>
                                            <h6>Anticipated
                                                Critical
                                                Events?</h6>
                                            <h6>To
                                                Surgeon:</h6>
                                            <Form.Control
                                                size="sm"
                                                name="critical_steps"
                                                type="text"
                                                placeholder="What are the critical or non-routine steps?"
                                                className="mb-3"/>
                                            <Form.Control
                                                size="sm"
                                                name="duration_of_case"
                                                type="text"
                                                placeholder="How will the case take?"
                                                className="mb-3"/>
                                            <Form.Control
                                                size="sm"
                                                name="anticipated_blood_loss"
                                                type="text"
                                                placeholder="What is the anticipated blood loss?"
                                                className="mb-3"/>
                                        </Form.Group>
                                        <Button
                                            onClick={() => this.openTabOne()}
                                            variant="outline-primary"
                                        >
                                            Back
                                        </Button>
                                    </Col>

                                    <Col
                                        md={6}>
                                        <Form.Group>
                                            <h6>To
                                                Nursing
                                                Team:</h6>
                                            <Form.Check
                                                inline
                                                custom
                                                type="checkbox"
                                                label="Has sterility (including indicator result) been confirmed?"
                                                name="hasSterilityConfirmed"
                                                id="check16"
                                            />
                                            <p/>
                                            <Form.Check
                                                inline
                                                custom
                                                type="checkbox"
                                                label="Are there equipment issues or any concerns? if yes specify"
                                                name="checkEquipmentIssue"
                                                id="check17"
                                            />
                                            <Form.Control
                                                size="sm"
                                                type="text"
                                                placeholder="Nurse's concerns regarding the equipment issues?"
                                                className="mb-3"/>
                                            <hr/>
                                            <Form.Group>
                                                <h6>Is
                                                    essential
                                                    Imaging
                                                    displayed?</h6>
                                                <Form.Check
                                                    custom
                                                    type="radio"
                                                    label="yes"
                                                    name="isImagingDisplayed"
                                                    id="check18"
                                                />

                                                <Form.Check
                                                    custom
                                                    type="radio"
                                                    label="Not applicable"
                                                    name="isImagingDisplayed"
                                                    id="check19"
                                                />
                                            </Form.Group>
                                        </Form.Group>
                                        <Button
                                            onClick={() => this.openTabThree()}>
                                            Continue
                                        </Button>

                                    </Col>


                                </Row>
                            </Tab>
                            <Tab
                                eventKey={this.state.tabThree}
                                disabled
                                title="Before patient leaves operating room">
                                <Form.Group>
                                    <h6>NurseVerbally
                                        Confirms:</h6>
                                    <Form.Check
                                        custom
                                        type="checkbox"
                                        label="The name of the procedure"
                                        name="isSpecifiedProcedure"
                                        id="check20"
                                    />

                                    <Form.Check
                                        custom
                                        type="checkbox"
                                        label="Completion of instrument, sponge and needle counts"
                                        name="isInstrumentSpecificied"
                                        id="check21"
                                    />
                                    <Form.Check
                                        custom
                                        type="checkbox"
                                        label="Specimen labelling (read specimen label aloud, including patient name)"
                                        name="isSpecimenLabelled"
                                        id="check22"
                                    />

                                    <Form.Check
                                        custom
                                        type="checkbox"
                                        label="Whether there are any equipment problems to be addressed"
                                        name="hasEquipmentIssues"
                                        id="check23"
                                    />
                                </Form.Group>
                                <hr/>

                                <Form.Group>
                                    <h6>To
                                        Surgeon,
                                        Anaesthetist
                                        and
                                        Nurse:</h6>
                                    <Form.Check
                                        inline
                                        custom
                                        type="checkbox"
                                        label="What are the key concerns for recovery and management of this patient?"
                                        name="isRecoveryConcern"
                                        id="check24"
                                    />
                                </Form.Group>
                                <Row>
                                    <Col
                                        md={6}>
                                        <Button
                                            onClick={() => this.openTabTwo()}

                                            variant="outline-primary">
                                            Back
                                        </Button>
                                    </Col>
                                    <Col
                                        md={6}>
                                        <Button>
                                            Complete
                                        </Button>
                                    </Col>
                                </Row>

                            </Tab>
                        </Tabs>

                    </Col>
                </Row>
            </Aux>
        )
    }
}
