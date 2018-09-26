import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { compose } from 'redux'
import Grid from '@material-ui/core/Grid'
import { withStyles } from '@material-ui/core/styles'
import Prism from 'prismjs'
import '../styles/prism.css'

const styles = {
    root: {
        flexGrid: 1,
    },
}

class Ex1 extends Component {
    state = {
        clock: "XX:XX:XX XX"
    }

    // The solution implementation is placed here.
    // The resulting clock is stored at the component state to be rendered
    solution = () => {
        const getCurrentTime = () => new Date()

        // Takes a date object and returns a object for clock time that contains hours minutes and seconds. (Used for the solution)
        const serializeClockTime = date => (
            {
                hours: date.getHours(),
                minutes: date.getMinutes(),
                seconds: date.getSeconds()
            }
        )

        // Takes the clock time object and appends time of day, AM or PM, to that object.
        const appendAMPM = timestamp => (
            {
                ...timestamp,
                ampm: (timestamp >= 12) ? 'AM' : 'PM'
            }
        )

        //Takes the clock time object and returns an object where hours are converted to civilian time. For example: 1300 becomes 1 o’clock
        const civilianHours = timestamp => (
            {
                ...timestamp,
                hours: (timestamp.hours) - 12 > 0 ? (timestamp.hours - 12) : timestamp.hours
            }
        )

        //Takes a template string and uses it to return clock time formatted based upon the criteria from the string. In this example, 
        //the template is “hh:mm:ss tt”. From ther, formatClock will replaces the placeholders with hours, minutes, seconds, and time of day.
        const formatClock = timestamp =>
            (`${timestamp.hours}:${timestamp.minutes}:${timestamp.seconds} ${timestamp.ampm}`)

        // Takes an object’s key as an argument and prepends a zero to the value stored
        //under that objects key. It takes in a key to a specific field and prepends values
        // with a zero if the value is less than 10.
        const prependZero = key => timestamp =>
            ({
                ...timestamp,
                [key]: timestamp[key] >= 10 ? timestamp[key] : "0" + timestamp[key]
            })

        // A single function that will take civilian clock time and make sure the hours,
        // minutes, and seconds display double digits by prepending zeros where needed.
        const doubleDigits = civilianTime =>
            compose(
                prependZero("hours"),
                prependZero("minutes"),
                prependZero("seconds")
            )(civilianTime)

        // A single function that will take clock time as an argument and transforms it into
        // civilian time by using both civilian hours.
        const convertTimeToCivilian = timestamp =>
            compose(
                civilianHours,
                appendAMPM,
                serializeClockTime,
            )(timestamp)

        // Compose all functions an return the clock time as string formatted as "hh:mm:ss tt"
        let time = compose(
            formatClock,
            doubleDigits,
            convertTimeToCivilian,
        )(getCurrentTime())

        // Update clock state of the component
        this.setState({
            clock: time
        })
    }

    componentWillMount = () => {
        Prism.highlightAll()

        // Starts the clock after the component is rendered, by setting an interval that will invoke a callback every second.
        // The callback is composed using all of our functions. Every second the console is
        // cleared, currentTime obtained, converted, civilianized, formatted, and displayed.
        const oneSecond = () => 1000
        this.intervalClock = setInterval(this.solution, oneSecond())
    }

    componentWillUnmount = () => {
        clearInterval(this.intervalClock)
    }

    render() {
        const { classes } = this.props
        return (
            <div className={classes.root}>
                <h1>Chapter 3</h1>
                <Grid container spacing={24}>
                    <Grid item xs={6}>
                        <p>The Imperative Clock Solution and Implementation</p>
                        <pre style={{ margin: 15 }}>
                            <code className="language-javascript">{`
    // Log Clock Time every Second
    setInterval(logClockTime, 1000);

    function logClockTime() {
        // Get Time string as civilian time
        var time = getClockTime();
        // Clear the Console and log the time
        console.clear();
        console.log(time);
    }

    function getClockTime() {

        // Get the Current Time
        var date = new Date();
        var time = "";

        // Serialize clock time

        var time = {
            hours: date.getHours(),
            minutes: date.getMinutes(),
            seconds: date.getSeconds(),
            ampm: "AM"
        }

        // Convert to civilian time
        if (time.hours == 12) {
            time.ampm = "PM";
            } else if (time.hours > 12) {
            time.ampm = "PM";
            time.hours -= 12;
            }

            // Prepend a 0 on the hours to make double digits
            if (time.hours < 10) {
            time.hours = "0" + time.hours;
            }

            // prepend a 0 on the minutes to make double digits
            if (time.minutes < 10) {
            time.minutes = "0" + time.minutes;
            }

            // prepend a 0 on the seconds to make double digits
            if (time.seconds < 10) {
            time.seconds = "0" + time.seconds;
            }

            // Format the clock time as a string "hh:mm:ss tt"
            return time.hours + ":"
            + time.minutes + ":"
            + time.seconds + " "
            + time.ampm;
        }`}
                            </code>
                        </pre>
                    </Grid>
                    <Grid item xs={6}>
                        <div align="left">
                            <p>React developers must focus on three simples rules:</p>
                            <ul>
                                <li>Keep Data Immutable:</li>
                                <li>Keep Funtions Pure - Accept at least one argument, return data or another function</li>
                                <li>Use recursion over loop (wherever possible)</li>
                            </ul>
                        </div>
                        <p>The Proposed Declarative Solution:</p>
                        <h1>{this.state.clock}</h1>
                        <pre>
                            <code className="language-javascript">
                                {
                                    `
    const getCurrentTime = () => new Date()

    // Takes a date object and returns a object for clock time that contains 
    // hours minutes and seconds. (Used for the solution)
    const serializeClockTime = date => (
    {
        hours: date.getHours(),
        minutes: date.getMinutes(),
        seconds: date.getSeconds()
    }
    )
                                        
    // Takes the clock time object and appends time of day, AM or PM, to that object.
    const appendAMPM = timestamp => (
        {
            ...timestamp,
            ampm: ( timestamp >= 12 ) ? 'AM' : 'PM'
        }
    )
                                
    //Takes the clock time object and returns an object where hours are converted to
    //civilian time. For example: 1300 becomes 1 o’clock
    const civilianHours = timestamp => (
        {
            ...timestamp,
            hours: (timestamp.hours) - 12 > 0 ? (timestamp.hours - 12) : timestamp.hours
        }
    )
                            
    //Takes a template string and uses it to return clock time formatted based upon the
    //criteria from the string. In this example, the template is “hh:mm:ss tt”. From ther,
    //formatClock will replaces the placeholders with hours, minutes, seconds, and time of day.
    const formatClock = timestamp =>
        ({timestamp.hours}:{timestamp.minutes}:{timestamp.seconds} {timestamp.ampm}) 
                            
    // Takes an object’s key as an argument and prepends a zero to the value stored
    //under that objects key. It takes in a key to a specific field and prepends values
    // with a zero if the value is less than 10.
    const prependZero = key => timestamp =>
        ({
            ...timestamp,
            [key]: timestamp[key] >= 10 ? timestamp[key] : "0" + timestamp[key]
        })
                                
    // A single function that will take civilian clock time and make sure the hours,
    // minutes, and seconds display double digits by prepending zeros where needed.
    const doubleDigits = civilianTime => 
        compose(
            prependZero("hours"),
            prependZero("minutes"),
            prependZero("seconds")
        )(civilianTime)
                                
    // A single function that will take clock time as an argument and transforms it into
    // civilian time by using both civilian hours.
    const convertTimeToCivilian = timestamp =>
        compose(
            civilianHours,
            appendAMPM,
            serializeClockTime,
        )(timestamp)
                                        
    // Compose all functions an return the clock time as string formatted as "hh:mm:ss tt"
    let time = compose(
            formatClock,
            doubleDigits,
            convertTimeToCivilian,
        )(getCurrentTime())
                                
    // Update clock state of the component
        this.setState({
            clock: time
        })

    // Clock State
    // state = { clock: "" }

    // ComponentDidMount Call
    //
    // const oneSecond = () => 1000
    // setInterval(this.solution, oneSecond())

    `
                                }
                            </code>
                        </pre>
                    </Grid>
                </Grid>
            </div>
        )
    }
}

Ex1.propTypes = {
    classes: PropTypes.object,
}

export default withStyles(styles)(Ex1)