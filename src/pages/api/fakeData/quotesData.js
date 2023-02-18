export default function handler(req, res) {
    res.status(200).json([
        {
          quote: "I pray God may preserve your health and life many years.",
          author: "Junipero Serra",
          category: "inspirational"
        }])
  }
  