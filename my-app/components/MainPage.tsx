import { Ionicons } from "@expo/vector-icons";
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import BottomMenu from "./BottomTabs";
import React from "react";

const MainPage = () => {
  const stories = [
    { id: "1", name: "Add", image: "https://randomuser.me/api/portraits/women/1.jpg" },
    { id: "2", name: "Jess", image: "https://randomuser.me/api/portraits/men/2.jpg" },
    { id: "3", name: "Kian", image: "https://randomuser.me/api/portraits/women/3.jpg" },
    { id: "4", name: "Suzie", image: "https://randomuser.me/api/portraits/women/4.jpg" },
    { id: "5", name: "Kian", image: "https://randomuser.me/api/portraits/men/5.jpg" },
    { id: "6", name: "Suzie", image: "https://randomuser.me/api/portraits/women/6.jpg" },
    { id: "7", name: "Mar", image: "https://randomuser.me/api/portraits/women/9.jpg" },
    { id: "8", name: "Zoe", image: "https://randomuser.me/api/portraits/women/7.jpg" },
    { id: "9", name: "Kai", image: "https://randomuser.me/api/portraits/men/7.jpg" },
    { id: "10", name: "Lila", image: "https://randomuser.me/api/portraits/women/10.jpg" },
    { id: "11", name: "Theo", image: "https://randomuser.me/api/portraits/men/10.jpg" },
  ];

  const Pulse = require("react-native-pulse").default;

  const posts = [
    {
      id: "1",
      name: "Jess Palmer",
      username: "jesspalmer",
      profileImage: "https://randomuser.me/api/portraits/women/2.jpg",
      caption: "Loving this view!",
      timeAgo: "1 min ago",
    },
    {
      id: "2",
      name: "Kai Thornton",
      username: "kaithornton",
      profileImage: "https://randomuser.me/api/portraits/men/7.jpg",
      caption: "Just finished a 5k run 💪",
      timeAgo: "5 mins ago",
    },
    {
      id: "3",
      name: "Lila Westbrook",
      username: "lilawestbrook",
      profileImage: "https://randomuser.me/api/portraits/women/10.jpg",
      caption: "Sunday brunch vibes 🥞🍓",
      timeAgo: "2 hrs ago",
    },
    {
      id: "4",
      name: "Theo Cross",
      username: "theocross",
      profileImage: "https://randomuser.me/api/portraits/men/10.jpg",
      caption: "Caught a great wave today 🌊🏄",
      timeAgo: "1 day ago",
    },
    {
      id: "5",
      name: "Zoe Harrington",
      username: "zoeharrington",
      profileImage: "https://randomuser.me/api/portraits/women/7.jpg",
      caption: "Late-night coding session 👩‍💻☕",
      timeAgo: "2 days ago",
    },
    {
      id: "6",
      name: "Mar Quinn",
      username: "marquinn",
      profileImage: "https://randomuser.me/api/portraits/women/9.jpg",
      caption: "Feeling grateful today ✨",
      timeAgo: "3 days ago",
    },
    {
      id: "7",
      name: "Kian Rivers",
      username: "kianrivers",
      profileImage: "https://randomuser.me/api/portraits/men/5.jpg",
      caption: "Nature walk and a bit of mindfulness 🌲🧘‍♂️",
      timeAgo: "1 week ago",
    },
    {
      id: "8",
      name: "Suzie Camden",
      username: "suziecamden",
      profileImage: "https://randomuser.me/api/portraits/women/4.jpg",
      caption: "Made the best cookies ever 🍪",
      timeAgo: "1 month ago",
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
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

        <View style={styles.storyWrapper}>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.scrollContainer}
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
                    <View style={[styles.storyItem, { marginRight: 15 }]} key={`${story.id}-group`}>
                      <View style={styles.groupWrapper}>
                        <Pulse
                          color="#7b2cbf"
                          diameter={90}
                          speed={30}
                          duration={2000}
                          style={{ position: "absolute", top: -20, zIndex: -1 }}
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
        </View>

        <View style={styles.postsSection}>
          {posts.map((item) => (
            <View style={styles.postCard} key={item.id}>
              <View style={styles.postHeader}>
                <Image source={{ uri: item.profileImage }} style={styles.postAvatar} />
                <View>
                  <Text style={styles.postName}>{item.name}</Text>
                  <Text style={styles.postUsername}>
                    @{item.username} · {item.timeAgo}
                  </Text>
                </View>
              </View>
              <Text style={styles.postCaption}>{item.caption}</Text>
              <View style={styles.postActions}>
                <TouchableOpacity style={styles.iconButton}>
                  <Ionicons name="heart-outline" size={20} color="#555" />
                  <Text style={styles.actionText}>Like</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.iconButton}>
                  <Ionicons name="chatbubble-outline" size={20} color="#555" />
                  <Text style={styles.actionText}>Comment</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.iconButton}>
                  <Ionicons name="repeat-outline" size={20} color="#555" />
                  <Text style={styles.actionText}>Repost</Text>
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>

      <TouchableOpacity style={styles.draft}>
        <Text style={styles.draftText}>+</Text>
        <Ionicons name="pencil-outline" style={styles.draftIcon} size={30} />
      </TouchableOpacity>

      <BottomMenu />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
    minHeight: "100%",
    width: "100%",
  },
  scrollContent: {
    flexGrow: 1,
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
  storyWrapper: {
    height: 90,
    justifyContent: "flex-start",
    alignItems: "center",
    marginTop: 15,
  },
  scrollContainer: {
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  storyItem: {
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 10,
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
  draft: {
    position: "absolute",
    bottom: 70,
    right: 20,
    backgroundColor: "#189df0",
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: "center",
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 2, height: 3 },
    shadowOpacity: 0.6,
    shadowRadius: 3,
    zIndex: 10,
  },
  draftText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 10,
    marginLeft: -8,
  },
  draftIcon: {
    color: "white",
    position: "relative",
    top: -14,
    left: 3,
  },
  postsSection: {
    paddingHorizontal: 15,
    paddingTop: 20,
    paddingBottom: 40,
  },
  postCard: {
    backgroundColor: "#f9f9f9",
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 1,
    width: "100%",
    alignSelf: "center",
  },
  postHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  postAvatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  postUsername: {
    fontWeight: "600",
    fontSize: 15,
    color: "#333",
  },
  postCaption: {
    fontSize: 14,
    color: "#444",
    marginBottom: 10,
  },
  postName: {
    fontWeight: "bold",
    fontSize: 14,
    color: "#222",
  },
  postActions: {
    flexDirection: "row",
    justifyContent: "space-around",
    borderTopWidth: 1,
    borderTopColor: "#ddd",
    paddingTop: 10,
  },
  iconButton: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  actionText: {
    fontSize: 13,
    color: "#555",
    marginLeft: 5,
  },
});

export default MainPage;
