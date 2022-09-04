import React, { useState } from 'react';
import { Link } from "react-router-dom";


const defaultActivities = [
    // { name: "Squats", activityType: "DURATION" },
    // { name: "Push ups", activityType: "SETS/REPS" },
]

const Create = () => {
    const [activityList, setActivityList] = useState(defaultActivities)
    const addNewActivity = (value) => {
        setActivityList([{}, ...activityList])
    }

    return (
        <header className="header">
            <div className="title">
                NEW SKEJ
            </div>
            <button onClick={addNewActivity}>
                ADD
            </button>
            <div className="create-page">
                <form className="create-form">
                    <div className="activity-list">
                        {activityList.map(activity => {
                            return (
                                <div>
                                    <label>
                                        <input
                                            type="text"
                                            name="name"
                                            placeholder="ACTIVITY NAME"
                                            value={activity.name}
                                        />
                                        <select value={activity.activityType}>
                                            <option value="DURATION">DURATION</option>
                                            <option value="INTERVAL">INTERVAL</option>
                                            <option value="SETS/REPS">SETS/REPS</option>
                                        </select>
                                    </label>
                                </div>
                            )
                        })}
                    </div>
                </form>
            </div>
            <div className="action-block">
                <button className="button">
                    <Link to="run">
                        RUN
                    </Link>
                </button>
                <button className="button">
                    <Link to="save">
                        SAVE
                    </Link>
                </button>
                <button className="button">
                    <Link to="share">
                        SHARE
                    </Link>
                </button>
            </div>
        </header>

    )
}

export default Create