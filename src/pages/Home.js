import React,{useState} from 'react';
import Layout from '../components/layout/Layout';
import { TreeMapComponent, Inject, TreeMapTooltip, TreeMapLegend } from '@syncfusion/ej2-react-treemap';

const Home = () => {
  const [showPopup, setShowPopup] = useState(false);
  const handleTileClick = () => {
        setShowPopup(true); // Set showPopup to true to display the popup
    };

    // Function to close the popup
    const handleClosePopup = () => {
        setShowPopup(false); // Set showPopup to false to hide the popup
    };
    return (
        <>
            <Layout>
                <React.Fragment>
                    <TreeMapComponent
                        dataSource={[
                            {
                                state: 'Uttar Pradesh',
                                population: 204128080,
                                avgTemp: 35
                            },
                            {
                                state: 'Maharashtra',
                                population: 112372972,
                                avgTemp: 33
                            },
                            {
                                state: 'West Bengal',
                                population: 91347736,
                                avgTemp: 31
                            },
                            {
                                state: 'Madhya Pradesh',
                                population: 72597565,
                                avgTemp: 29
                            },
                            {
                                state: 'Tamil Nadu',
                                population: 72138958,
                                avgTemp: 27
                            },
                            {
                                state: 'Rajasthan',
                                population: 68595582,
                                avgTemp: 25
                            },
                            {
                                state: 'Karnataka',
                                population: 61095297,
                                avgTemp: 23
                            },
                            {
                                state: 'Gujarat',
                                population: 60439692,
                                avgTemp: 21
                            },
                            {
                                state: 'Andhra Pradesh',
                                population: 49386799,
                                avgTemp: 19
                            },
                            {
                                state: 'Odisha',
                                population: 41974218,
                                avgTemp: 17
                            },
                            {
                                state: 'Kerala',
                                population: 33387677,
                                avgTemp: 15
                            },
                            {
                                state: 'Jharkhand',
                                population: 32966238,
                                avgTemp: 13
                            },
                            {
                                state: 'Assam',
                                population: 31205576,
                                avgTemp: 12
                            },
                            {
                                state: 'Chhattisgarh',
                                population: 25540196,
                                avgTemp: 14
                            },
                            {
                                state: 'Sikkim',
                                population: 10007688,
                                avgTemp: 11
                            }
                        ]}
                        weightValuePath='population'
                        rangeColorValuePath='avgTemp'
                        legendSettings={{
                            visible: true,
                            position: 'Bottom',
                            title: 'Temp'
                        }}
                        titleSettings={{ text: 'States arranged in order of their Population ' }}
                        leafItemSettings={{
                            labelPath: 'state',
                            colorMapping: [
                                { from: 34, to: 40, color: '#FF0000' },
                                { from: 30, to: 33, color: '#FF4500' },
                                { from: 27, to: 29, color: '#FFA500' },
                                { from: 24, to: 26, color: '#FF7F00' },
                                { from: 21, to: 23, color: '#FFFF00' },
                                { from: 18, to: 20, color: '#00FF00' },
                                { from: 15, to: 17, color: '#00FFFF' },
                                { from: 10, to: 14, color: '#00BFFF' },
                                { from: 5, to: 9, color: '#6495ED' }
                            ],
                            gap: 7
                        }}
                        tooltipSettings={{
                            visible: true,
                            format: '${state} <br>Population : ${population} <br> Avg_Temp : ${avgTemp}'
                        }}
                        selectionSettings={{
                            enable: true,
                            fill: '#58a0d3',
                            border: { width: 0.3, color: 'black' },
                            opacity: '1'
                      
                        }}
                        click={handleTileClick}
                        
                    >
                        <Inject services={[TreeMapTooltip, TreeMapLegend]} />
                    </TreeMapComponent>
                    {/* Popup modal */}
                {showPopup && (
                    <div className="popup">
                        <div className="popup-content">
                            <span className="close" onClick={handleClosePopup}>&times;</span>
                            <h2>Given additional time, I would have been able to complete the charts.</h2>
                            <p>Charts content goes here </p>
                        </div>
                    </div>
                )}
                </React.Fragment>
            </Layout>
        </>
    );
};

export default Home;
