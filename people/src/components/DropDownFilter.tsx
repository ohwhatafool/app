import React, { Component } from "react";
import Select from "react-select";

type Props = {
    elements: string[];
}


class DropDownFilter extends Component<Props, any> {
  constructor(props: Props){
    super(props);
    
    this.state = { 
      elements: this.props.elements,
      options: null,
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (options: any) => {
    this.setState({ options });
  }

  public render() {
    const { options } = this.state;
    const { elements } = this.state;

    return (
        <div>
            <Select
              isMulti
              value = {options}
              onChange={this.handleChange}
              options={elements.map((option: string) => ({
                label: option,
                value: option,
            }))}
            />
        </div>
    );
  }
}

export default DropDownFilter;
