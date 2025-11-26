import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from "react-native";
import { Audio } from "expo-av";
import Slider from "@react-native-community/slider";

export default function Player() {
  const [sound, setSound] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [position, setPosition] = useState(0);
  const [duration, setDuration] = useState(1);
  const [track, setTrack] = useState(1);

  function format(ms) {
    const m = Math.floor(ms / 60000);
    const s = Math.floor((ms % 60000) / 1000);
    return `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
  }

  async function loadSound() {
    if (sound) {
      await sound.unloadAsync();
      setSound(null);
    }

    const file =
      track === 1
        ? require("../assets/musicclassica.mp3")
        : track === 2
    ? require("../assets/musicsertanejo.mp3")
    : require("../assets/musicsertanejoraiz.mp3");

    const { sound: newSound } = await Audio.Sound.createAsync(file);

    newSound.setOnPlaybackStatusUpdate((status) => {
      if (status.isLoaded) {
        setPosition(status.positionMillis);
        setDuration(status.durationMillis || 1);
        setIsPlaying(status.isPlaying);
      }
    });

    setSound(newSound);
  }

  async function toggle() {
    if (!sound) {
      await loadSound();
      return sound?.playAsync();
    }
    isPlaying ? sound.pauseAsync() : sound.playAsync();
  }

  async function seek(value) {
    if (sound) {
      await sound.setPositionAsync(value * duration);
    }
  }

  useEffect(() => {
    loadSound();
    return () => sound?.unloadAsync();
  }, [track]);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Player de músicas</Text>

      {/* Seleção de música */}
      <View style={styles.row}>
        <TouchableOpacity
          style={[styles.trackBtn, track === 1 && styles.selected]}
          onPress={() => setTrack(1)}
        >
          <Text>Classica</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.trackBtn, track === 2 && styles.selected]}
          onPress={() => setTrack(2)}
        >
          <Text>Sertanejo</Text>
        </TouchableOpacity>
        <TouchableOpacity
    style={[styles.trackBtn, track === 3 && styles.selected]}
    onPress={() => setTrack(3)}
  >
    <Text>Sertanejo raiz</Text>
  </TouchableOpacity>
      </View>

      <Slider
        style={{ width: "90%" }}
        minimumValue={0}
        maximumValue={1}
        value={position / duration}
        minimumTrackTintColor="#1DB954"
        maximumTrackTintColor="#aaa"
        thumbTintColor="#1DB954"
        onSlidingComplete={seek}
      />

      <View style={styles.timeRow}>
        <Text>{format(position)}</Text>
        <Text>{format(duration)}</Text>
      </View>

      <View style={styles.controls}>
        <TouchableOpacity onPress={toggle}>
          <Text style={styles.btn}>{isPlaying ? "⏸" : "▶"}</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { alignItems: "center", padding: 20, backgroundColor: "#d3d3d3" },
  title: { fontSize: 28, fontWeight: "bold", marginBottom: 30 },
  row: { flexDirection: "row", marginBottom: 20, gap: 10 },
  trackBtn: {
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 8,
  },
  selected: { backgroundColor: "#1DB954" },
  timeRow: {
    width: "90%",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 5,
    marginBottom: 20,
  },
  controls: { flexDirection: "row", marginTop: 10 },
  btn: { fontSize: 40 },
});
