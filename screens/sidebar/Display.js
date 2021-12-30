import React, { useState, useEffect } from "react";
import { Text, View } from "react-native";
import { db } from "../../firebase";
const Display = () => {
  const [messages, setMessages] = useState([]);
  // useEffect(() => {
  //   const unsubscribe = db.collection("student").onSnapshot((snapshot) => {
  //     let v = [];
  //     const data = snapshot.forEach((doc) => {
  //       return {
  //         ...doc.data(),
  //         name: doc.data().name,
  //         mobilenumber: doc.data().mobilenumber,
  //         address: doc.data().address,
  //       };
  //     });

  //     v.push(...data);
  //     alert("threads", data);
  //     setMessages(v);
  //   });
  //   return () => unsubscribe();
  // }, []);

  useEffect(async()=>{
    const a=await db.collection("student").get();
    var data=[]
    
    a.forEach((da)=>{
      data.push((da.data()))
    })
    await setMessages(data)
    // alert(messages)
  })

  return (
    <View>
      {messages.map(msg => <><Text>{msg?.name}</Text>
        <Text>{msg?.mobilenumber}</Text>
        <Text>{msg?.address}</Text></>)}
      <Text>gedl</Text>
    </View>
  );
};

export default Display;
