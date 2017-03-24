import React from 'react';

class Resources extends React.Component {
    shouldComponentUpdate() {
        return false;
    }

    render() {
        const x = 0;
        const y = 0;
        const circleRadius = 30;

        return (
            <resources>
                {/*left to right clockwise*/}
                <shape resourceId="musicNote">
                    <moveTo
                        x={0}
                        y={circleRadius} />
                    {/*top L*/}
                    <quadraticCurveTo
                        cpX={circleRadius}
                        cpY={circleRadius}
                        x={circleRadius}
                        y={0} />
                    {/*bottom L*/}
                    <quadraticCurveTo
                        cpX={circleRadius}
                        cpY={-circleRadius}
                        x={0}
                        y={-circleRadius} />
                    {/*bottom R*/}
                    <quadraticCurveTo
                        cpX={-circleRadius}
                        cpY={-circleRadius}
                        x={-circleRadius}
                        y={0} />
                    {/*vertical bar*/}
                    <quadraticCurveTo
                        cpX={x - 40}
                        cpY={y + 155}
                        x={x - 95}
                        y={y + 45} />
                    {/*bar & curve*/}
                    <quadraticCurveTo
                        cpX={x - 95}
                        cpY={y + 115}
                        x={x - 35}
                        y={y + 135} />
                    {/*top R connected to bar*/}
                    <quadraticCurveTo
                        cpX={x - 10}
                        cpY={y}
                        x={x - 15}
                        y={y} />
                    {/*top R*/}
                    <quadraticCurveTo
                        cpX={-circleRadius}
                        cpY={circleRadius}
                        x={0}
                        y={circleRadius} />
                </shape>
            </resources>
        )
    }
}

export default Resources;