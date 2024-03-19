const { electronAPI } = window
import React from "react"

function Incrimenter() {

    const array = [1, 2, 3, 4]
    let value = 0

    while (true) {
        if (value === 10) {
            break
        }
        array.push(value++)
    }

    function incriment() {
        array.push(value++)
        const div = document.getElementById('1')
        const ul = document.getElementById('list')
        array.map((ar) => {
            const li = document.createElement('li')
            li.innerHTML = `${ar}`
            ul.appendChild(li)
        })

        div && div.scrollTo(0, div.scrollHeight)
        // if (document.visibilityState !== "visible"){
        // }
        notify()

    }

    window.setInterval(() => {
        incriment()
    }, 50000)



    return (
        <div
            style={{
                width: '50%',
                height: '500px',
                overflow: 'scroll',
                marginLeft: '20%',
                marginTop: '10%'
            }}
            id='1'
        >
            <ul id='list'>
                {array.map((num) => (
                    <li>{num}</li>
                ))}
            </ul>
        </div>
    )
}

function notify(){
    electronAPI.showNotification("Incremented", 'more content added to list')
    electronAPI.flashIcon() 
}

export default Incrimenter