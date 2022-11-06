// import Recat , {useEffect, useState} from 'react';
// import {
//     SafeAreaView,
//     View,
//     Text,
//     StyleSheet,
//     ScrollView,
//     TouchableOpacity,
//     TextInput,
//     Modal
// } from "react-native";
// import axios from 'axios';


// function FoodGetAll1() {

//     const [list, setList] = useState([]);
//     const [visible, setVisible] = useState(false);

//     useEffect(() => {
//         getFoodList()
//     }, [])

//     const getFoodList = () => {
//         axios({
//             url: "http://localhost:5050/FoodSaver/",
//             method: "GET"
//         }).then ((response) => {
//             setList(response.data)
//         })
//     }

//     const handelDelete = (item) => {
//         axios
//     }
// }
// export default FoodGetAll1