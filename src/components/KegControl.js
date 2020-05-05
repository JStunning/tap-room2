import React from 'react';
import NewKegForm from './NewKegForm';
import KegList from './KegList';
import DailyKeg from './DailyKeg'
import KegDetail from './KegDetail'

class KegControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      masterKegList: [
        {
          name: "Party Keg",
          brand: "Brewer Bros",
          flavor: "Light and easily chuggable",
          price: "69",
          alcohol: "2.20",
          pints: 100,
          id: 0
        },
        {
          name: "BBQ Keg",
          brand: "Johnson",
          flavor: "Medium dark with lots of hops",
          price: "59",
          alcohol: "5.2",
          pints: 100,
          id: 1
        },
        {
          name: "Sorority Keg",
          brand: "Vivian's",
          flavor: "Smells and tastes like perfume",
          price: "64",
          alcohol: "4",
          pints: 100,
          id: 2
        }
      ],
      selectedKeg: null
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = () => {
    if (this.state.selectedKeg != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedKeg: null
      });
    } else {
      this.setState(prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage,
      }));
    }
  }

  handleAddingNewKegToList = (newKeg) => {
    const newMasterKegList = this.state.masterKegList.concat(newKeg);
    this.setState({
      masterKegList: newMasterKegList,
      formVisibleOnPage: false 
    });
  }

  handleChangingSelectedKeg = (id) => {
    const selectedKeg = this.state.masterKegList.filter(keg => keg.id === id)[0];
    this.setState({selectedKeg: selectedKeg});
  }

  handleBuyingPint = (name) => {
    const keg = this.state.masterKegList.filter(keg => keg.name === name)[0];
    keg.pints = keg.pints - 1;
    const otherKegsList = this.state.masterKegList.filter(keg => keg.name !== name);
    const newMasterKegList = [...otherKegsList, keg];
    this.setState({
      ...this.state,
      masterKegList: newMasterKegList,
      // selectedKeg: null
    })
  }

  // handleConsoleLoggingPints = () => {
  //   console.log(this.state.masterKegList[0].pints);
  // }

  // handleBuyingPint = (id) => {
  // const selectedKeg = this.state.masterKegList.filter(keg => keg.id === id)[0];
  // selectedKeg.pints -= 1;
  // const otherKegs = this.state.masterKegList.filter(keg => keg.id !== id);
  // const newList = [...otherKegs, selectedKeg];
  // this.setState({masterKegList: newList});

  // const newSelectedKeg = this.state.selectedKeg;
  // this.setState({selectedKeg: newSelectedKeg - 1});

  // const selectedKeg = this.state.masterKegList.filter(keg => keg.id === id)[0];
  // const newKeg = this.state.masterKegList[selectedKeg].pints - 1;
  // const otherKegs = this.state.masterKegList.filter(keg => keg.id !== id);
  // const newList = [...otherKegs, newKeg];
  // this.setState({masterKegList: newList});
  // }

  // handleReducingPints(){
  //   const kegToReduce = this.state.masterKegList[0]
  //   kegToReduce.pints - 1;
  //   this.setState({
  //     masterKegList[0]: kegToReduce
  //   })
  // }

  render(){
    let currentlyVisibleState = null;
    let buttonText = null;

    if (this.state.selectedKeg != null) {
      currentlyVisibleState = <KegDetail keg = {this.state.selectedKeg} onBuyingPint={this.handleBuyingPint} onLoggingPints={this.handleConsoleLoggingPints} />
      buttonText = "Return to Keg List";
    } else if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewKegForm onNewKegCreation={this.handleAddingNewKegToList} />;
      buttonText = "Return to Keg List";
    } else {
      currentlyVisibleState = <KegList kegList={this.state.masterKegList} onKegSelection={this.handleChangingSelectedKeg} />;
      buttonText = "Add Keg"; 
    }
    return (
      <React.Fragment>
        <div id="container">
          <div id="CurrentState">
            {currentlyVisibleState}
            <button onClick={this.handleClick}>{buttonText}</button>
          </div>
          <div id="DailyKeg">
            <DailyKeg kegList={this.state.masterKegList} onKegSelection={this.handleChangingSelectedKeg} />
          </div>
        </div>
      </React.Fragment>
    );
  }

}

export default KegControl;