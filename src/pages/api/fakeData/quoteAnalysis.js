export default function handler(req, res) {
    res.status(200).json(
        {
            "emotion_scores": 
                {
                    "surprise": 0.08066383680086453,
                    "sadness" : 0.004220231291660395,
                    "disgust" : 0,
                    "anger" : 0,
                    "joy" : 0.46,
                    "fear": 0
                }
        }
    )
  }

