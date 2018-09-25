import React from 'react'
import standard from '../img/standard.jpg'
import colors from '../img/colors.jpg'
import clock from '../img/clock.jpg'
import Chapter3 from '../exercises/Chapter3'
import Chapter6 from '../exercises/Chapter6'
import Chapter7 from '../exercises/Chapter7'

const descriptions = [
    {
        chapter: '3',
        title: "Functional Programmimg with Javascript",
        section: "Chapter 3: Putting It All Together",
        description: "The challenge is to build a ticking clock. The clock needs to display hours, minutes, seconds, and time of the day in civilian time. Each field must have double digits. The clock must tick and change the display every second. It is given an imperative solution as guideline.",
        image: clock,
        code: <Chapter3 />
    },
    {
        chapter: '6',
        title: "Props, State and the Component Tree",
        section: "Chapter 6: Color Organizer App Overview",
        description: "The color organizer allows users to add, name, rate, and remove colors in their customized lists. To add new color the user must fill a form and submit.",
        image: colors,
        code: <Chapter6 />
    },
    {
        chapter: '7',
        title: "Enhancing Components",
        section: "Chapter 7: High Order Components",
        description: "High order components is simply a function that takes a React component as an argument and return another React component. Typically HOCs wrap the incoming component with a class that maintains state or has functionality. Here HOC are used to display a list of user, and the same component is used to display city names.",
        image: standard,
        code: <Chapter7 />
    },
]

export default descriptions