import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API routes
  app.post("/api/contact", (req, res) => {
    // Honeypot check
    const { website, name, email, organization, role, country, inquiryType, message } = req.body;
    
    if (website) {
      // It's a bot filling the honeypot
      return res.status(200).json({ success: true, message: "Message received." });
    }

    // In a real application, you would send an email or store this in a database here.
    console.log("Contact form submission:", { name, email, organization, role, country, inquiryType, message });
    
    res.status(200).json({ success: true, message: "Message received." });
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
