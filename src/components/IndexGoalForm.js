import React, { Component } from "react";
import { Redirect, withRouter } from "react-router-dom";
import Select from "Select";

// NOTE: In general, this is a fairly inefficient way to structure a form component.
// Ideally, we would abstract the functionality of the form to also make it reusable.
// This form has code that's specific to this form, making it unsusable elsewhere.
// This form is just done for demonstrate and ease. Once you're comfortable with
// this pattern, we can look at how to make this more functional/scalable/efficient,
// similar to how to we structured the <Select> Component (which is easier to understand)
//      Hint: might create state.components to wrap the goals and fields (apply a 'type'
//      to hold the form element type). Use loops to create and validate elements.
//      We could also create the children elements from the render of the IndexPage.

class IndexGoalForm extends Component {

    state = {
        title: 'What is your goal?',
        complete: false,
        // TODO: Populate these from the the DB
        goals: {
            value: null,  // will be populated from the master data store so that a default is set when we revisit
            error: false, // if there's an error on this component
            label: 'I want to learn about',
            options: [
                {key:'being', option:'Being more prepared'},
                {key:'confidence', option:'Confidence'},
                {key:'anticipation', option:'Anticipation'},
                {key:'consequences', option:'Consequences'},
                {key:'leadership', option:'Leadership'},
                {key:'personal', option:'Personal branding'},
                {key:'conflict', option:'Conflict resolution'},
                {key:'picturing', option:'Picturing my future'},
                {key:'effective', option:'Effective communication'},
                {key:'achieving', option:'Achieving goals'}
                // Replace all these keys with the Goal.id
            ]
        },
        fields: {
            value: null,
            error: false,
            label: 'in the field of',
            options: [
                {key:'i', option:'I Don\'t Know'},
                {key:'journalism', option:'Journalism'},
                {key:'politics', option:'Politics'},
                {key:'legal', option:'Legal'},
                {key:'visual', option:'Visual & Performing Arts'},
                {key:'health', option:'Health Services'},
                {key:'business', option:'Business Management'},
                {key:'sports', option:'Sports, Playing, Coaching'},
                {key:'teaching', option:'Teaching'},
                {key:'nature', option:'Nature, Ecology, Farming'},
                {key:'digital', option:'Digital, Computing'},
                {key:'trades', option:'Trades'},
                {key:'selling', option:'Selling, Marketing'},
                {key:'building', option:'Building, Engineering'},
                {key:'creative', option:'Creative, Inventing'}
            ]
        }
    }

    // When we submit, validate!
    handleSubmit = (event) => {
        // alert(`You will learn ${this.state.goals.value} in ${this.state.fields.value}`);

        // Set both errors to false
        this.state.goals.error = false;
        this.state.fields.error = false;

        // If both a goal and a field are set, we're good to go.
        // Set the complete state to try and trigger a render()
        if (this.state.goals.value && this.state.fields.value) {
            this.setState({complete: true});
        }
        else {
            // Errors, which ones!?
            if (!this.state.goals.value)
                this.setState({goals: {...this.state.goals, error: true}}); // trigger a render
            if (!this.state.fields.value)
                this.setState({fields: {...this.state.fields, error: true}}); // trigger a render
        }

        // Don't do a traditional browser submit (which will force refresh)
        event.preventDefault();
    }


    render() {
        // The form is "complete" so force a return, which will redirect somewhere
        if (this.state.complete) {            
            // Add a history node
            window.history.pushState({}, "dashboard", "/dashboard");
            // Redirect somewhere
            return <Redirect to='/dashboard' />;
        }

        // Otherwise, business as usual
        return (
            <form onSubmit={this.handleSubmit} className={this.props.className ? this.props.className : undefined}>
                <h2>{this.state.title}</h2>
                {console.log(this.state.goals.options)
                }

                {/* https://stackoverflow.com/questions/43638938/updating-an-object-with-setstate-in-react */}
                {/* https://itnext.io/updating-properties-of-an-object-in-react-state-af6260d8e9f5 */}
                <Select 
                    label={this.state.goals.label} 
                    options={this.state.goals.options} 
                    getValue={(goal) => this.setState({goals: {...this.state.goals, value: goal}})} 
                    error={this.state.goals.error} />
                <Select 
                    label={this.state.fields.label}
                    options={this.state.fields.options} 
                    getValue={(field) => this.setState({fields: {...this.state.fields, value:field}})} 
                    error={this.state.fields.error} />

                <button type="submit" className="button">Begin</button>
            </form>
        );
    }
}

export default IndexGoalForm;
