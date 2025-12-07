import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  ActivityIndicator,
} from "react-native";

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const HomeScreen: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 10000);
        
        const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
          signal: controller.signal,
        });
        
        clearTimeout(timeoutId);
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data: Post[] = await response.json();
        console.log("POST VERİLERİ:", data.length);
        setPosts(data.slice(0, 10));
        setLoading(false);
      } catch (err) {
        console.log("Veri çekme hatası:", err instanceof Error ? err.message : String(err));
        setLoading(false);
        setPosts([]);
      }
    };
    
    fetchPosts();
  }, []);

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" />
        <Text style={{ marginTop: 10 }}>Yükleniyor...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={posts}
        keyExtractor={(item: Post) => item.id.toString()}
        renderItem={({ item }: { item: Post }) => (
          <View style={styles.card}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.body}>{item.body}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  loadingContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  card: {
    backgroundColor: "#f2f2f2",
    padding: 12,
    marginBottom: 10,
    borderRadius: 8,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 4,
  },
  body: {
    fontSize: 14,
    color: "#444",
  },
});
