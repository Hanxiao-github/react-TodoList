import React from 'react'
import AppList from './AppList.js'
import AppForm from './AppForm.js'
import AppFooter from './AppFooter.js'

class App extends React.Component {
    state = {
        choosevalue : 1,
        data: this.props.data
    };

    ChooseValue (id) {
        this.setState({choosevalue:id});
    };

  OnAddTodoItem (newItem) {
    this.state.data.push(newItem);
    this.setState({data : this.props.data});
  };

    AllChangeComplete (id) {
        let newdata = this.state.data.map((item,index) => {
            if(item.id === id) {
                item.complete = !item.complete;
            }
            return item;
        })
        this.setState({data : newdata});
    }

    AllOnDeleteItem (index) {
        // console.log(id);
        // let newdata = this.state.data.map(function (item) {
        //     console.log(item);
        //     if (item.id == id) {
        //         item.deleteFlag = true
        //     }
        //     return item;
        // })
        this.state.data.splice(index,1);
        this.setState({ data: this.props.data });
    }


    render () {
      const { data } = this.state;
      return (
          <div className='ui comments'>
              <h1>My Todo with React</h1>
              <div className='ui divider'></div>
              <AppForm
                  AddTodoItem={this.OnAddTodoItem.bind(this)} />
              <AppList
                  data={this.state.data}
                  choosevalue={this.state.choosevalue}
                  ChangeCompleteTop={this.AllChangeComplete.bind(this)}
                  DeleteItemTop={this.AllOnDeleteItem.bind(this)}
              />
              <AppFooter
                  SubmitChooseValue={this.ChooseValue.bind(this)}
              />

          </div>
      )
  }
}

export default App;
