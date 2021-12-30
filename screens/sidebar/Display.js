import React, { useState, useEffect } from 'react';
import {
  Text,
  View,
} from 'react-native';
import {db} from '../../firebase';
const Display = () => {
  useEffect(() => {
    onDisplay();
  })
  const onDisplay = async () => {
    const [messages, setMessages] = useState([]);
    const unsubscribe = db.collection('student').onSnapshot((snapshot) => {
      let v = [];
      const data = snapshot.forEach((doc) => {
              return {
                ...doc.data(),
                name: doc.data().name,
                mobilenumber: doc.data().mobilenumber,
                address: doc.data().address
              };
            });

            newMessages.push(...data);
            console.log('threads', data);
            setMessages(newMessages);
          });
  }
  return () => unsubscribe();
  // return (   
  //     <View>
  //         {/* {value.map = ((v) => {
  //           return (
  //           <View>
  //             <Text>{v.name}</Text>
  //             <Text>{v.mobilenumber}</Text>
  //             <Text>{v.address}</Text>
  //             </View>)
  //         })} */}
  //         <Text>gedl</Text>
  //     </View>
  // );
};

export default Display;


