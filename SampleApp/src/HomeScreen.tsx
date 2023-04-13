import { StatusBar, FlatList, View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { trackEvent, identifyAttributes, setAlias, logout, syncData } from './utils/SegmentHelper';
import { SegmentClient } from '@segment/analytics-react-native';


// Add Data in this array to add extra button on HomeScreen
const HomeScreenData = [
  {
    id: 0,
    title: "Track",
    action: (client: SegmentClient) => trackEvent(client)
  },
  {
    id: 1,
    title: "Identify",
    action: (client: SegmentClient) => identifyAttributes(client)
  },
  {
    id: 2,
    title: "Set Alias",
    action: (client: SegmentClient) => setAlias(client)
  },
  {
    id: 3,
    title: "Sync Data",
    action: (client: SegmentClient) => syncData(client)
  },
  {
    id: 4,
    title: "Logout",
    action: (client: SegmentClient) => logout(client)
  }
]

// Home Screen Component
export default function HomeScreenComponent(props : {client: SegmentClient}): JSX.Element {
    return (
      <View style={{ backgroundColor: "white" }} >
        <StatusBar backgroundColor={'#088A85'} />
        <View style={styles.toolbar}>
          <Text style={styles.toolbarText}>MoEngage Segment Integration</Text>
        </View>
        <FlatList data={HomeScreenData}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => item.action(props.client)}>
              <View>
                <Text style={styles.item}>{item.title}</Text>
              </View>
            </TouchableOpacity>
          )}
        />  
      </View>
    )
  }

  const styles = StyleSheet.create({
    toolbar: {
      backgroundColor: "#088A85",
      height: 48
    },
    toolbarText: {
      flex: 1,
      fontSize: 16,
      fontWeight: "500",
      color: "white",
      verticalAlign: "middle",
      paddingStart: 20
    },
    item: {
      padding: 12,
      marginTop: 20,
      color: '#088A85',
      fontWeight: 'bold',
      marginStart: 14,
      marginEnd: 14,
      fontSize: 16,
      backgroundColor: '#E6E6E6',
    }
  });