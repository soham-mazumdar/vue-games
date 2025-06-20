// src/composables/useQuotes.js
import { ref } from "vue";
import axios from "axios";

const api = axios.create({
  baseURL: "https://api.gameofthronesquotes.xyz/v1",
  timeout: 5000,
});

export function useQuotes() {
  const loading = ref(false);
  const error = ref(null);
  const quote = ref("");
  const character = ref("");
  

  const fetchQuote = async () => {
    loading.value = true;
    error.value = null;
    try {
      const { data } = await api.get("/random");
      quote.value = data.sentence.toUpperCase();
      character.value = data.character.name;
    } catch (err) {
      error.value = "Failed to fetch quote.";
      console.error(err);
    } finally {
      loading.value = false;
    }
  };

  return {
    quote,
    character,
    loading,
    error,
    fetchQuote,
  };
}
