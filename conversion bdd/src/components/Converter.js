import React, { useEffect, useMemo, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addSaveAsync } from '../redux/slice';

function Converter() {
    const [numInput, setNumInput] = useState('');
    const [convertedUnits, setConvertedUnits] = useState((0).toFixed(2));
    const [currentUnits, setCurrentUnits] = useState("ki");
    const dispatch = useDispatch();

    const convert = useMemo(() => ({
        ki: n => n * 0.6214,
        ik: n => n * 1.6093, 
        mf: n => n * 3.281,
        fm: n => n * 0.3048,
        cn: n => n * 0.3937,
        nc: n => n * 2.54
    }), []);

    const units = useMemo(() => ({
        k: "km",
        i: "miles",
        m: "meters",
        f: "feet",
        c: "cm",
        n: "inches"
    }), []);
    
    useEffect(() => {
        setConvertedUnits(convert[currentUnits](+numInput).toFixed(2));
    }, [convert, currentUnits, numInput])
    
    function handleUnitsValue(e) {
        setCurrentUnits(e.target.value);
    }

    function handleTextChange(e) {
        if (isNaN(e.target.value)) {
            e.preventDefault();
            e.target.value = numInput;
            return;
        }
        setNumInput(e.target.value);
    }

    function handleSwapButton() {
        const currUnits = currentUnits;
        setCurrentUnits(currUnits[1] + currUnits[0]);
        setNumInput(convertedUnits);
    }

    function handleSave() {
        dispatch(
            addSaveAsync({
                numFrom: (numInput.trim().length === 0 ? 0 : +numInput).toFixed(2),
                unitFrom: units[currentUnits[0]],
                numTo: convertedUnits,
                unitTo: units[currentUnits[1]]
            })
        );
    }

    return (
        <>
            <div className="box-container">
                <div className="box">
                    <h3>convert</h3>
                    <div className="converter-input">
                        <div className="converter-left">
                            <select value={currentUnits} onChange={e => handleUnitsValue(e)}>
                                <option value="ki">km &#8594; miles</option>
                                <option value="ik">miles &#8594; km</option>
                                <option value="mf">meters &#8594; feet</option>
                                <option value="fm">feet &#8594; meters</option>
                                <option value="cn">cm &#8594; inches</option>
                                <option value="nc">inches &#8594; cm</option>
                            </select>
                            <button onClick={handleSwapButton}>&#8646;</button>
                        </div>
                        <div className="result">
                            <input value={numInput} type="text" onChange={e => handleTextChange(e)}></input>
                            <div className="convert-from">{units[currentUnits[0]]}</div>
                        </div>
                    </div>
                    <div className="converter-output">
                        <button onClick={handleSave} style={{ transform: "scale(1.5) translate(4px,-.1em)" }}>&#9825;</button>
                        <div className="converter-right">
                            <div className="converted-num">{convertedUnits}</div>
                            <div className="convert-to">{units[currentUnits[1]]}</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Converter