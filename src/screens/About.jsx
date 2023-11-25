import React from 'react';
import { View, Text } from 'react-native';
import MainLayout from '../layouts/MainLayout';

function About({}){
    return (
        <MainLayout>
            <>
                <View>
                    <Text>
                        AppName: My To Do List App
                    </Text>
                    <Text>
                        Author: Nicholas Gonzalez 
                    </Text>
                    <Text>
                        Date: 2023-11-24
                    </Text>
                </View>
            </>
        </MainLayout>
        
    );
}


export default About