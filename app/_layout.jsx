import {Tabs} from 'expo-router';
import FontAwesome from "@expo/vector-icons/FontAwesome";

export default function Layout() {
    return (
        <Tabs>
            <Tabs.Screen
             name="index" 
             options={{ title: "Inicío", headerShown: false,
                tabBarIcon: ({color}) => <FontAwesome name="home" size={24} color={color} /> 
            }}
             />
             <Tabs.Screen
             name="pageone" 
             options={{ title: "Obrigatório", headerShown: false,
                tabBarIcon: ({color}) => <FontAwesome name="tag" size={24} color={color} /> 
            }}
             />
             <Tabs.Screen
             name="pagetwo" 
             options={{ title: "Livre", headerShown: false,
                tabBarIcon: ({color}) => <FontAwesome name="tags" size={24} color={color} /> 
            }}
            />
             <Tabs.Screen
             name="aboutme" 
             options={{ title: "Sobre Mim", headerShown: false,
                tabBarIcon: ({color}) => <FontAwesome name="user" size={24} color={color} /> 
            }}
            />
        </Tabs>
    );
}
