import React from 'react'
import CounterApp from './Components/01-useState/counter-app'
import CounterWithCustomHook from './Components/01-useState/CounterWithCustomHook'
import FormWithCustomHook from './Components/02-useEffect/FormWithCustomHook'
import { SimpleForm } from './Components/02-useEffect/SimpleForm'
import MultipleCustomHook from './Components/03-Examples/MultipleCustomHook'
import ExampleRef from './Components/04-useRef/ExampleRef'
import FocusScreen from './Components/04-useRef/FocusScreen'
import LayoutEffect from './Components/05-useLayoutEffect/LayoutEffect'
import Memmorize from './Components/06-Memos/Memorize'

const HookApp = () => {
    return (
        <div>
            <h2 className="text-warning bg-dark">!!! PROBANDO CON LOS HOOK !!!</h2>
            <CounterApp />
            <CounterWithCustomHook />
            <SimpleForm />
            <FormWithCustomHook />
            <MultipleCustomHook />
            <FocusScreen />
            <ExampleRef />
            <LayoutEffect />
            <Memmorize />
        </div>
    )
}

export default HookApp
