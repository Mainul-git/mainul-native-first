import React from 'react';
import { View,Text } from 'react-native';

const ProgramChild = ({data}) => {
    console.warn(data);
    return (
        <View>
            <Text>
                Hello
            </Text>
            {
                data.map(data=>
                    <View>
                    <Text  style={{color:'green'}}>{data.name}</Text>
                    <Text style={{color:'green'}}>{data.category}</Text>
                    <Text style={{color:'green'}}>{data.shortDescription}</Text>
                    
                    </View>
                    )
            }
        </View>
    );
};

export default ProgramChild;