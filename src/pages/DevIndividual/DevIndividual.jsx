
import React from 'react';
import DevNav from '../../component/DevNav/DevNav';
import DevIndividualTasks from '../../component/DevIndividualTask/DevIndividualTask';
import DevSideBar from '../../component/DevSideBar/DevSideBar';


function DevIndividual() {
    return (
        <>
            <DevNav />
            <main>
                <DevSideBar />
                <DevIndividualTasks />
            </main>
        </>
    )
}

export default DevIndividual;