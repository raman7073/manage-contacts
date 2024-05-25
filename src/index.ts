import app from './app';
import { sequelize } from './db';
import { Contact } from './models/contact.model';
const PORT = process.env.PORT || 3000;
sequelize.authenticate()
  .then(() => {
    console.log("Database connected");
    Contact.sync({ force: true });
  })
  .catch((error) => {
    console.error("Failed to connect to the database:", error);
  });
app.get('/', (req, res) => {
  res.status(200).json({ message: 'Your server is running' });
});
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

