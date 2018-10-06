import * as React from "react";

export class Properties extends React.Component<any, PropertiesState>{
    constructor(props: any) {
        super(props);
        this.state = {properties: [{key: 'Jharkhand', value: 'Ranchi'}]}
    }

    render(){
        let properties = this.state.properties;
        let listItems = properties.map(prop =>
            <form>
            <li key={prop.key}>
                <input type="text" value={prop.key} onChange={this.handleKeyChange}/>
                <input type="text" value={prop.value} />
                <button onClick={this.onAdd}>Add</button>
                <button onClick={this.onRemove.bind(this,prop.key)}>Remove</button>
            </li>
            </form>
        );
        return <div>
            <ul>{listItems}</ul>
        </div>
    }
    onAdd = () => {
        let currentProprties = this.state.properties;
        currentProprties.push({key: 'India', value: 'Delhi'});
        this.setState({properties: currentProprties})
    };
    onRemove = (key: string) => {
        let currentProps = this.state.properties;
        currentProps = currentProps.filter(prop => key!== prop.key);
        this.setState({properties: currentProps});
    };
    handleKeyChange = (event: any)=> {

    }

}

interface PropertiesState {
    properties: Property[];
}

interface Property {
    key: string,
    value: string
}