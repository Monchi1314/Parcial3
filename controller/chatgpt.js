const chatGptSchema = new mongoose.Schema({
    prompt: String,
    response: String,
    id_user: String,
    date_create: Date,
  });
  
  const ChatGpt = mongoose.model('ChatGpt', chatGptSchema);
  
  
  app.post('/chatgpt', validateToken, async (req, res) => {
    const { prompt, response, id_user } = req.body;
  
    const newChat = new ChatGpt({
      prompt,
      response,
      id_user,
      date_create: new Date(),
    });
  
    try {
      const savedChat = await newChat.save();
      res.json(savedChat);
    } catch (error) {
      console.error('Error al guardar el chat', error);
      res.status(500).json({ error: 'Error del servidor' });
    }
  });
  
  
  app.get('/chatgpt/:id', validateToken, async (req, res) => {
    const { id } = req.params;
  
    try {
      const chat = await ChatGpt.findById(id);
  
      if (!chat) {
        return res.status(404).json({ error: 'Chat no encontrado' });
      }
  
      res.json(chat);
    } catch (error) {
      console.error('Error al obtener el chat', error);
      res.status(500).json({ error: 'Error del servidor' });
    }
  });
  
 
  app.get('/chatgpt/user/:id_user', validateToken, async (req, res) => {
    const { id_user } = req.params;
  
    try {
      const chats = await ChatGpt.find({ id_user });
  
      res.json(chats);
    } catch (error) {
      console.error('Error al obtener los chats del usuario', error);
      res.status(500).json({ error: 'Error del servidor' });
    }
  });
  