import React from 'react';
import { View, FlatList } from 'react-native';
import { ListItem } from 'react-native-elements';

function List(props) {

    const renderListItem = ({item, index}) => {

        return (
                <ListItem
                    key={index}
                    title='Name'
                    subtitle={item.status}
                    hideChevron={true}
                    //leftAvatar={{ source: require('./images/uthappizza.png')}}
                  />
        );
    };

    return (
            <FlatList 
                data={props.patients}
                renderItem={renderListItem}
                keyExtractor={item => item.id.toString()}
                />
    );
}


export default List;