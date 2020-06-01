import React from 'react'
import AppTodos from './AppTodos'




class AppList extends React.Component {
    SubmitDelete (index) {
        this.props.DeleteItemTop(index)
    }

    ChangeDone (id) {
        this.props.ChangeCompleteTop(id);
    }
    render () {
        var value = this.props.choosevalue;


        const a = this.props.data.map(({ id, text, complete }, index) => {
            if (value == '1' ) {
                return  <AppTodos
                    key={index}
                    index={index}
                    id={id}
                    text={text}
                    complete={complete}
                    ChangeCompleteItem={this.ChangeDone.bind(this)}
                    DeleteItem={this.SubmitDelete.bind(this)}
                />
            }

            if (value == '2' && complete === false) {
                return  <AppTodos
                    key={index}
                    id={id}
                    text={text}
                    complete={complete}
                    ChangeCompleteItem={this.ChangeDone.bind(this)}
                    DeleteItem={this.SubmitDelete.bind(this)}
                />
            }

            if (value == '3' && complete === true ) {
                return  <AppTodos
                    key={index}
                    id={id}
                    text={text}
                    complete={complete}
                    ChangeCompleteItem={this.ChangeDone.bind(this)}
                    DeleteItem={this.SubmitDelete.bind(this)}
                />
            }
        })

        return (
            <div> { a } </div>
        )
    }
}

export default AppList;
