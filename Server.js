const { createClient } = require("@supabase/supabase-js");

// Replace these with your actual Supabase values
const SUPABASE_URL = "https://YOUR_PROJECT_URL.supabase.co";
const SUPABASE_ANON_KEY = "YOUR_ANON_KEY";

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

const express = require('express');  
const app = express();  
const port = 3000;  

app.get('/', (req, res) => {  
  res.send('Bimo’s backend is live!');  
});  

app.listen(port, () => {  
  console.log(`Bimo server is running on port ${port}`);  
});
// Route to save a message to Supabase
app.post("/messages", async (req, res) => {
  const { user_id, message } = req.body;

  const { data, error } = await supabase
      .from("messages")
      .insert([{ user_id, message }]);

  if (error) return res.status(400).json({ error: error.message });
  res.json({ data });
});




