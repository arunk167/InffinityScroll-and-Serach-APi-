import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { BarChart, Grid ,LineChart ,PieChart,YAxis,XAxis} from 'react-native-svg-charts'

export default class Charts extends Component {
    render() {
        const contentInset = { top: 20, bottom: 20 }
        const data = [10, 20, 40, -24,0, 45,20, 0, 35, 53, -13, 24, 10, -20, -40]
        const randomColor = () => ('#' + ((Math.random() * 0xffffff) << 0).toString(16) + '000000').slice(0, 7)
        const pieData = data
            .filter((value) => value > 0)
            .map((value, index) => ({
                value,
                valueAccessor:({ item }) => item.value,
                svg: {
                    fill: randomColor(),
                    onPress: () => console.log('press',value)
                   
                    
                },
                
                key: `pie-${index}`,
               
            }))
        return (
            
                 <View >
                <View style={{ height: 200, flexDirection: 'row' ,marginHorizontal:10}}>
                <YAxis
                    data={data}
                    contentInset={contentInset}
                    svg={{
                        fill: 'grey',
                        fontSize: 10,
                    }}
                    numberOfTicks={10}
                    formatLabel={(value) => `${value}`}
                />

                <LineChart
                    style={{ flex: 1, marginLeft: 16 }}
                    data={data}
                    svg={{ stroke: 'rgb(134, 65, 244)' }}
                    contentInset={contentInset}
                >
                    <Grid />
                </LineChart>
               
            </View>
            
                     <View>
                     <BarChart style={{ height: 200 ,marginHorizontal:20}} data={data}  svg={{ fill: randomColor() }} contentInset={{ top: 30, bottom: 30 }}>
                      <Text>BarChart</Text>
                <Grid />
            </BarChart>
            
                     </View>
            <Text style={{textAlign:'center',marginVertical:5}}>Pie Chart</Text>
            <PieChart style={{ height: 200 }} data={pieData}
           
            />
                 </View>
            
          
        )
    }
}
