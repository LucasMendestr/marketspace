import { createBottomTabNavigator, BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { useTheme } from 'native-base';
import { House, Tag, SignOut } from 'phosphor-react-native';

import { Home } from '@screens/Home';
import { AdDetails } from '@screens/AdDetails';
import { AdEdting } from '@screens/AdEdting';
import { MyAds } from '@screens/MyAds';
import { SignIn } from '@screens/SignIn';

type AppRoutes = {
  home: undefined;
  adDetails: undefined;
  adEdting: undefined;
  myAds: undefined;
  goOut: undefined;
}

export type AppNavigatorRoutesProps = BottomTabNavigationProp<AppRoutes>;

const { Navigator, Screen } = createBottomTabNavigator<AppRoutes>();

export function AppRoutes() {
  const { sizes, colors } = useTheme();

  const iconSize = sizes[6];
  return (
    <Navigator screenOptions={{ 
      headerShown: false, 
      tabBarShowLabel: false, 
      tabBarActiveTintColor: colors.gray[100],
      tabBarInactiveTintColor: colors.gray[500],
      }}>
      <Screen 
        name='home'
        component={Home}
        options={{
          tabBarIcon: ({ color,  }) => (
            <House size={iconSize} color={color}/>
          )
        }}
      />

      <Screen 
        name='adDetails'
        component={AdDetails}
        options={{
          tabBarButton: () => null,
          tabBarStyle: { display: 'none' }
        }}
      />

      <Screen 
        name='adEdting'
        component={AdEdting}
        options={{
          tabBarButton: () => null,
          tabBarStyle: { display: 'none' }
        }}
      />

      <Screen 
        name='myAds'
        component={MyAds}
        options={{
          tabBarIcon: ({ color,  }) => (
            <Tag size={iconSize} color={color}/>
          )
        }}
      />

      <Screen
        name='goOut' 
        component={SignIn}
        options={{
          tabBarIcon: ({ color, }) => (
            <SignOut size={iconSize} color={colors.red[500]}/>
          )
        }}
      />

    </Navigator>
  );
}