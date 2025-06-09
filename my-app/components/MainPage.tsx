import React from "react";
import { StyleSheet, SafeAreaView, View, Image, ScrollView, Text } from "react-native";

const MainPage = () => {

  const stories = [
    { id: "1", name: "Add", image: "https://randomuser.me/api/portraits/women/1.jpg" },
    { id: "2", name: "Jess", image: "https://randomuser.me/api/portraits/men/2.jpg" },
    { id: "3", name: "Kian", image: "https://randomuser.me/api/portraits/women/3.jpg" },
    { id: "4", name: "Suzie", image: "https://randomuser.me/api/portraits/women/4.jpg" },
    { id: "5", name: "Kian", image: "https://randomuser.me/api/portraits/men/5.jpg" },
    { id: "6", name: "Suzie", image: "https://randomuser.me/api/portraits/women/6.jpg" },
    { id: "7", name: "User7", image: "https://randomuser.me/api/portraits/women/9.jpg" },
    { id: "8", name: "User8", image: "https://randomuser.me/api/portraits/women/7.jpg" },
    { id: "9", name: "User9", image: "https://randomuser.me/api/portraits/men/7.jpg" },
    { id: "10", name: "User10", image: "https://randomuser.me/api/portraits/women/10.jpg" },
    { id: "11", name: "User11", image: "https://randomuser.me/api/portraits/men/10.jpg" },
  ];

  const Pulse = require("react-native-pulse").default;

  // Main Page Component
  return (
    <SafeAreaView style={styles.container}>
{/*Top menu*/}
      <View style={styles.inner}>
        <Image
          source={{
            uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/800px-Hamburger_icon.svg.png",
          }}
          style={[styles.image, { tintColor: "#189df0" }]}
        />
        <Image
          source={{
            uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Logo_of_Twitter.svg/1200px-Logo_of_Twitter.svg.png",
          }}
          style={styles.image}
        />

        <Image
          source={{
            uri: "https://em-content.zobj.net/source/twitter/31/sparkles_2728.png",
          }}
          style={[styles.image, { tintColor: "#189df0" }]}
        />
      </View>

      {/* Stories Section */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={[styles.scrollContainer, { flexGrow: 1 }]}
      >
        {stories
          .filter((story) => story.id !== "3" && story.id !== "4")
          .map((story, index) => (
            <React.Fragment key={story.id}>
              <View style={styles.storyItem}>
                <View style={styles.avatarWrapper}>
                  {index === 1 && (
                    <>
                      <Pulse
                        color="#7b2cbf"
                        numPulses={5}
                        diameter={70}
                        speed={30}
                        duration={2000}
                        style={{
                          position: "absolute",
                          top: -10,
                          left: 0,
                          zIndex: -1,
                        }}
                      />
                      <View style={styles.groupBadge}>
                        <Text style={styles.groupText}>••</Text>
                      </View>
                    </>
                  )}
                  <Image
                    source={{ uri: story.image }}
                    style={[styles.avatar, index === 1 && { borderColor: "#7b2cbf" }]}
                  />
                  {index === 0 && (
                    <View style={styles.plusBadge}>
                      <Text style={styles.plusText}>+</Text>
                    </View>
                  )}
                </View>
                <Text style={styles.name}>{story.name}</Text>
              </View>


              {index === 1 && (
                <View key="group" style={[styles.storyItem, { marginRight: 15 }]}>
                  <View style={styles.groupWrapper}>
                    <Pulse
                      color="#7b2cbf"
                      diameter={90}
                      speed={30}
                      duration={2000}
                      style={{
                        position: "absolute",
                        top: -20,
                        zIndex: -1,
                      }}
                    />
                    <View style={styles.sideBySide}>
                      <Image
                        source={{ uri: stories[2].image }}
                        style={[styles.groupAvatar, { position: "relative", right: -5, zIndex: 1 }]}
                      />
                      <Image
                        source={{ uri: stories[3].image }}
                        style={[styles.groupAvatar, { position: "relative", right: 5 }]}
                      />
                    </View>
                    <View style={styles.groupBadge}>
                      <Text style={styles.groupText}>••</Text>
                    </View>
                  </View>
                  <Text style={styles.name}>Vera +2</Text>
                </View>
              )}
            </React.Fragment>
          ))}
      </ScrollView>
    </SafeAreaView>
  );
};

//styles for the MainPage component
const styles = StyleSheet.create({
  container: {
    backgroundColor: "red",
    flex: 1,
    minHeight: "100%",
    width: "100%",
  },
  inner: {
    backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 15,
    paddingTop: 10,
  },
  image: {
    width: 30,
    height: 30,
    resizeMode: "contain",
  },
  scrollContainer: {
    backgroundColor: "white",
    paddingLeft: 15,
    paddingVertical: 10,
    height: 90,
  },
  storyItem: {
    alignItems: "center",
    marginRight: 15,
  },
  avatarWrapper: {
    position: "relative",
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 3,
    borderColor: "#189df0",
  },
  plusBadge: {
    position: "absolute",
    bottom: 0,
    right: 0,
    backgroundColor: "#189df0",
    borderRadius: 10,
    width: 20,
    height: 20,
    borderWidth: 2,
    borderColor: "white",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  plusText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  name: {
    marginTop: 5,
    fontSize: 12,
    color: "#7d8e99",
    fontWeight: "600",
  },
  groupBadge: {
    position: "absolute",
    bottom: -2,
    right: -2,
    backgroundColor: "#7b2cbf",
    borderRadius: 10,
    width: 20,
    height: 20,
    borderWidth: 2,
    borderColor: "white",
    justifyContent: "flex-start",
    alignItems: "center",
    zIndex: 1,
  },

  groupText: {
    color: "white",
    fontSize: 12,
    fontWeight: "bold",
  },
  groupWrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 45,
    borderWidth: 3,
    borderColor: "#7b2cbf",
    position: "relative",
    backgroundColor: "#7b2cbf",
  },

  sideBySide: {
    flexDirection: "row",
    alignItems: "center",
  },

  groupAvatar: {
    width: 45,
    height: 45,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: "#fff",
  },
});

export default MainPage;
