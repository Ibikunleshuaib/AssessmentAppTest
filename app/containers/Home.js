import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, Text, StyleSheet } from 'react-native'

class Home extends Component {
      componentDidMount() {
        const { dataBroughtIn } = this.props
        setInterval(() => {
            fetch('http://worldtimeapi.org/api/timezone/Africa/Lagos')
        .then((response) =>
            response.json()
        )
        .then((data) => {
            console.log(data)
            let value = data.datetime
            let actualValue = value.split('T')[1].split('.')[0]
            console.log(actualValue)
            dataBroughtIn(actualValue)
        })
          .catch(function(error) {
            console.log(error.message);
              throw error;
            });
            console.log(this.props)
        }, 1000)
      }


        

    render() {
        const { dataToBeUsed } = this.props
        return (
            <View style={styles.container}>
                <View>
                    <Text style={styles.currentTimeText}>Current Time in Lagos Nigeria</Text>
                    <Text style={styles.actualTimeText}>{dataToBeUsed}</Text>
                </View>
                <View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    currentTimeText: {
        fontWeight: 'bold', 
        fontSize: 23
    },
    actualTimeText: {
        fontWeight: 'bold', 
        fontSize: 23, 
        textAlign: 'center', 
        marginTop: 20, 
        color:'#00BE4D'
    }
})

function mapStateToProps(state) {
    return {
        dataToBeUsed: state
    }
}


function mapDispatchToProps(dispatch) {
    return {
        dataBroughtIn: (dataToBeUsed) => dispatch({
            type: 'GET_TIME',
            payload:  dataToBeUsed 
        })
    }
}

export default connect(
    mapStateToProps, 
    mapDispatchToProps
)(Home)