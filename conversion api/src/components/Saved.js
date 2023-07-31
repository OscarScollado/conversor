import React, { useEffect } from 'react';
import { deleteSavesAsync, getSavesAsync } from '../redux/slice';
import Save from './Save';
import { useSelector, useDispatch } from 'react-redux';

function Saved() {
    const saves = useSelector((state) => state.saves);
    const dispatch = useDispatch();

    useEffect(() => {
		dispatch(getSavesAsync());
	}, [dispatch]);

    useEffect(() => {
        localStorage.setItem('saves', JSON.stringify(saves));
    }, [saves])

    function handleDelete(i) {
        dispatch(
            deleteSavesAsync({
                id: i
            })
        );
    }

    return (
        <div className='save-container'>
            <div className="saves">
                <h4>saved</h4>
                <div className="conversions">
                    {saves.map((save) =>
                        <Save key={save.id} numFrom={save.numFrom} unitFrom={save.unitFrom} numTo={save.numTo} unitTo={save.unitTo} onDelete={() => handleDelete(save.id)}/>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Saved